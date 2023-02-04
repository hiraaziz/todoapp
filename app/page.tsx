"use client";

import { VStack, Stack,Box,Text } from '@chakra-ui/react'
import DisplayList from '../component/section/DisplayList'
import AddTodo from '../component/section/AddTodo'
import TodoProvider from '../component/Context/ContextProvider'

export default function Home() {
  return (
    <Stack spacing='10' justifyContent='center' alignItems='center'>
      <Text
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      bgClip='text'
      fontSize='6xl'
      fontWeight='extrabold'>
      To Do Application
      </Text>
      <Box as='div'  bgGradient='linear(to-l, #7928CA, #FF0080)' w='400px' 
      minH='200px' py='20px' m='auto' mt='200px' borderRadius='15px'>

        <VStack spacing='10'>   
            <TodoProvider>
              <AddTodo/>
              <DisplayList/>
            </TodoProvider>
        </VStack>
      </Box>
    </Stack>
  )
}
