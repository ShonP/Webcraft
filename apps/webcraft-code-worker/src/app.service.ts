/* eslint-disable no-control-regex */
import { Injectable } from '@nestjs/common';
import { promisify } from 'util';
import { exec } from 'child_process';
import * as path from 'path';
import { spawn as ptySpawn, IPty } from 'node-pty';

const execAsync = promisify(exec);

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private parseClaudeOutput(rawOutput: string): string {
    let cleaned = rawOutput;

    // Remove all ANSI escape sequences (both \x1b and \u001b formats)
    // This covers colors, cursor movements, formatting, etc.
    cleaned = cleaned.replace(/\u001b\[[0-9;]*[a-zA-Z]/g, '');
    cleaned = cleaned.replace(/\x1b\[[0-9;]*[a-zA-Z]/g, '');

    // Remove specific ANSI sequences that might be missed
    cleaned = cleaned.replace(/\u001b\[[0-9;]*m/g, ''); // Color codes
    cleaned = cleaned.replace(/\u001b\[2K/g, ''); // Clear line
    cleaned = cleaned.replace(/\u001b\[1A/g, ''); // Move cursor up
    cleaned = cleaned.replace(/\u001b\[G/g, ''); // Move cursor to column 1

    // Remove carriage returns and normalize newlines
    cleaned = cleaned.replace(/\r\n/g, '\n');
    cleaned = cleaned.replace(/\r/g, '');

    // Remove other control characters except newlines and tabs
    // eslint-disable-next-line no-control-regex
    cleaned = cleaned.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '');

    // Clean up excessive whitespace and newlines
    cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
    cleaned = cleaned.replace(/ {4,}/g, '   '); // Replace 4+ spaces with 3

    // Remove lines that are mostly just box drawing or empty
    const lines = cleaned.split('\n');
    const filteredLines = lines.filter((line) => {
      const trimmed = line.trim();
      // Keep lines that have actual content (not just symbols/spaces)
      return (
        trimmed.length > 0 &&
        !/^[│┌┐└┘├┤┬┴┼─═║╔╗╚╝╠╣╦╩╬▲▼◆●○■□▪▫◊]+$/.test(trimmed) &&
        !/^[╭╮╰╯─│]+$/.test(trimmed)
      );
    });

    cleaned = filteredLines.join('\n');

    // Final cleanup
    cleaned = cleaned.trim();

    return cleaned;
  }

  async runClaudeCommand(
    prompt: string,
  ): Promise<{ success: boolean; output: string; error?: string }> {
    try {
      const customAppPath = path.resolve(__dirname, '../../custom-app');

      // First check if claude CLI is available
      try {
        await execAsync('which claude');
        console.log('Claude CLI found');
      } catch {
        return {
          success: false,
          output: '',
          error: 'Claude CLI not found. Please install claude CLI first.',
        };
      }

      return new Promise((resolve) => {
        console.log(`Starting Claude command: claude "${prompt}"`);
        console.log(`Working directory: ${customAppPath}`);

        // Create a real pseudo-terminal
        const ptyProcess: IPty = ptySpawn(
          'claude --dangerously-skip-permissions',
          [prompt],
          {
            name: 'xterm-color',
            cols: 120,
            rows: 30,
            cwd: customAppPath,
            env: {
              ...process.env,
              TERM: 'xterm-256color',
              FORCE_COLOR: '1',
            },
          },
        );

        console.log('PTY process started with PID:', ptyProcess.pid);

        let output = '';
        let hasReceivedData = false;

        ptyProcess.onData((data: string) => {
          hasReceivedData = true;
          output += data;
          console.log('PTY received:', JSON.stringify(data));

          // Auto-respond to common prompts
          const lowerData = data.toLowerCase();
          if (
            lowerData.includes('select') ||
            lowerData.includes('choose') ||
            lowerData.includes('option') ||
            lowerData.includes('>')
          ) {
            console.log('Detected prompt, sending Enter');
            ptyProcess.write('\r');
          }
        });

        ptyProcess.onExit(({ exitCode, signal }) => {
          console.log(
            `PTY process exited with code: ${exitCode}, signal: ${signal}`,
          );
          const cleanedOutput = this.parseClaudeOutput(output);
          resolve({
            success: exitCode === 0,
            output: cleanedOutput || 'Command completed',
            error:
              exitCode !== 0
                ? `Process exited with code ${exitCode}`
                : undefined,
          });
        });

        // Check if process is still alive after 10 seconds
        setTimeout(() => {
          if (!hasReceivedData) {
            console.log(
              'No data received after 10 seconds, process still running...',
            );
            console.log('Process PID:', ptyProcess.pid);
          }
        }, 10000);

        // Timeout after 5 minutes
        setTimeout(() => {
          console.log('Killing PTY process due to timeout');
          ptyProcess.kill();
          resolve({
            success: false,
            output: output || 'Timeout - process killed',
            error: 'Command timed out after 5 minutes',
          });
        }, 300000);
      });
    } catch (error: unknown) {
      console.error('Claude command error:', error);
      return {
        success: false,
        output: '',
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }
}
