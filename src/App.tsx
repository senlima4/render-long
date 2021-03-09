import { FC } from 'react'
import { Box, Flex, Text, Heading } from '@chakra-ui/react'

const App: FC = () => {
  return (
    <>
      <Flex
        as="header"
        h="100vh"
        flexDir="column"
        align="center"
        justify="center"
      >
        <Box>
          <Heading as="h1" mb={4} size="md">
            網頁內容節錄自《臺北高等行政法院 108 年訴字第 1008 號判決》
          </Heading>
          <Text>網頁技術： SEO 問題、內容載入問題、裝置兼容問題</Text>
          <Text>內容排列： 本文 / 關聯資訊 / 額外資訊編排</Text>
          <Text mt={4}>Made by Senlima Sun</Text>
        </Box>
      </Flex>
    </>
  )
}

export default App
