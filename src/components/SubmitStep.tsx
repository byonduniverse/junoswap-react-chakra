import React, { useState, useContext } from 'react'
import { Flex, Heading, Box, Text, SimpleGrid, Hide } from '@chakra-ui/react'
import { ThemeContext } from 'ThemeContext'

interface Props {
  steps: Step[]
}

const createMarkup = (str: string) => {
  return { __html: str }
}

const SubmitStep: React.FC<Props> = ({ steps }) => {
  const [select, setSelect] = useState(0)
  const { styles } = useContext(ThemeContext)

  return (
    <>
      {steps.map((step) => {
        return (
          <SimpleGrid key={step.index} columns={[1, null, 2]} spacing={100}>
            <Box
              minH={['100px', null, '200px']}
              cursor='pointer'
              mb='30px'
              onClick={() => {
                setSelect(step.index - 1)
              }}
            >
              <Flex pb={1} mb={1}>
                <Heading
                  fontSize={styles.fonts.header.fontSize}
                  fontWeight={styles.fonts.header.fontWeight}
                  color={styles.color.primary}
                >
                  {step?.index}.
                </Heading>
                <Heading
                  fontSize={styles.fonts.header.fontSize}
                  fontWeight={styles.fonts.header.fontWeight}
                  color='white'
                >
                  {step?.title}
                </Heading>
              </Flex>
              <Box pl={5}>
                <Box
                  fontSize={styles.fonts.content.fontSize}
                  fontWeight={styles.fonts.content.fontWeight}
                  dangerouslySetInnerHTML={createMarkup(step?.description)}
                  color='white'
                ></Box>
              </Box>
            </Box>
            <Hide below='md'>
              <Box
                bg={styles.color.dark}
                borderRadius='20px'
                mb={5}
                p={5}
                display={select !== step.index - 1 ? 'none' : ''}
              >
                {step.content.map((item, index) => (
                  <Text key={index} fontSize='14px' fontWeight={400}>
                    {item}
                  </Text>
                ))}
              </Box>
            </Hide>
          </SimpleGrid>
        )
      })}

      <Hide above='md'>
        <Box bg={styles.color.dark} borderRadius='20px' mb={5} p={5}>
          {steps[select].content.map((item, index) => (
            <Text key={index} fontSize='14px' fontWeight={400}>
              {item}
            </Text>
          ))}
        </Box>
      </Hide>
    </>
  )
}

export default SubmitStep
