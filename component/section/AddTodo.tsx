import {Box, Button, Input, Text, VStack, HStack,Container, Flex} from '@chakra-ui/react'
import {TodoContext} from '../Context/ContextProvider'
import { useContext } from 'react'
import { TodoContextType } from '../Context/typesTodo'
import { useState,useEffect } from 'react'

export default function AddTodo() {

  const {addTodo} = useContext(TodoContext) as TodoContextType
  const [todo,settodo] = useState<string>('')

  return (
    <Box>
      <HStack>
        <Input placeholder='Add Todo' onChange={(e)=>settodo(e.target.value)} variant='filled' />
        <Button onClick={()=>addTodo({id:3,todo})}>Add</Button>
      </HStack>
    </Box>
  )
}