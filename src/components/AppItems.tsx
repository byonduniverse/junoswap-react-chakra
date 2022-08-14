import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Text,
  Box,
  Flex,
  Spacer,
  SimpleGrid,
  useDimensions,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { styles } from 'themes'

interface Props {
  apps: AppItem[]
}

const AppItems: React.FC<Props> = ({ apps }) => {
  const navigate = useNavigate()
  const elementRef = useRef<HTMLDivElement>(null)
  const dimensions = useDimensions(elementRef, true)

  return (
    <SimpleGrid columns={[2, null, 3]} spacing={10} minBlockSize='sm'>
      {apps?.map((app) => (
        <Box
          ref={elementRef}
          cursor='pointer'
          onClick={() => {
            navigate(`../apps/${app.id}`)
          }}
        >
          <Box
            height={dimensions ? dimensions.borderBox.width / 2 : 120}
            borderRadius='20px'
            bg={app.color}
          ></Box>
          <Flex>
            <Text
              fontSize={styles.fonts.title.fontSize}
              fontWeight={styles.fonts.title.fontWeight}
              color='white'
            >
              {app.title}
            </Text>
            <Spacer />
            <Text
              fontSize={styles.fonts.content.fontSize}
              fontWeight={styles.fonts.content.fontWeight}
              color={styles.color.gray}
            >
              {app.category}
            </Text>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default AppItems
