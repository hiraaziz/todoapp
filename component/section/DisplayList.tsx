"use client";
import {Box, Button, Input, Text, VStack, Stack,Container, Flex,
  Card, CardHeader, CardBody, CardFooter,Divider, HStack} from '@chakra-ui/react'
import {TodoContext} from '../Context/ContextProvider'
import { useContext,useState, useEffect } from 'react'
import { TodoContextType, Todos } from '../Context/typesTodo'

export default function DisplayList() {

  const {todos, removeTodo} = useContext(TodoContext) as TodoContextType

  return (
    <VStack>
      <Card w='full'>
      {todos.map((todo:Todos,ind:number)=>(
          <CardBody>
            <HStack spacing='10' justifyContent='space-between' alignItems='center'> 
              <Text  w='200px'>{todo.todo}</Text>
              <Button onClick={()=>removeTodo(ind)}>Delete</Button>
            </HStack> 
            <Divider/>
          </CardBody>
      ))}
      
      </Card>
    </VStack>
  )
}