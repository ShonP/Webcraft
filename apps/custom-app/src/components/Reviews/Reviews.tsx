import React, { FC } from 'react'
import { Flex, Heading, Text, Card, Avatar, Box } from '@radix-ui/themes'
import { useTranslation } from 'react-i18next'
import { ReviewsContainer, ReviewCard, ReviewHeader, StarsContainer } from './Reviews.styles'

interface Review {
  id: string
  name: string
  rating: number
  text: string
  avatar?: string
  role?: string
}

const reviewKeys = ['sarah', 'mike', 'emma', 'david', 'lisa', 'alex'] as const

const reviewRatings = {
  sarah: 5,
  mike: 5,
  emma: 4,
  david: 5,
  lisa: 5,
  alex: 4
} as const

const StarIcon: FC<{ filled: boolean }> = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
)

const StarRating: FC<{ rating: number }> = ({ rating }) => (
  <StarsContainer>
    {[1, 2, 3, 4, 5].map((star) => (
      <StarIcon key={star} filled={star <= rating} />
    ))}
  </StarsContainer>
)

export const Reviews: FC = () => {
  const { t } = useTranslation()
  
  return (
    <ReviewsContainer>
      <Flex direction="column" gap="6" align="center">
        <Flex direction="column" gap="3" align="center">
          <Heading size="7">{t('reviews.title')}</Heading>
          <Text size="4" color="gray" style={{ textAlign: 'center', maxWidth: '600px' }}>
            {t('reviews.subtitle')}
          </Text>
        </Flex>
        
        <Flex 
          direction="row" 
          gap="4" 
          wrap="wrap" 
          justify="center"
          style={{ maxWidth: '1200px' }}
        >
          {reviewKeys.map((key) => (
            <ReviewCard key={key}>
              <Card>
                <Flex direction="column" gap="4" height="100%">
                  <ReviewHeader>
                    <Flex gap="3" align="center">
                      <Avatar 
                        fallback={t(`reviews.users.${key}.name`).charAt(0)} 
                        size="3"
                        color="blue"
                      />
                      <Flex direction="column" gap="1">
                        <Text weight="bold" size="3">{t(`reviews.users.${key}.name`)}</Text>
                        <Text size="2" color="gray">{t(`reviews.users.${key}.role`)}</Text>
                      </Flex>
                    </Flex>
                    <StarRating rating={reviewRatings[key]} />
                  </ReviewHeader>
                  
                  <Text size="3" style={{ flex: 1 }}>
                    "{t(`reviews.users.${key}.text`)}"
                  </Text>
                </Flex>
              </Card>
            </ReviewCard>
          ))}
        </Flex>
      </Flex>
    </ReviewsContainer>
  )
}