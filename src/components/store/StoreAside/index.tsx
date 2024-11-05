"use client";

import { useStore } from "@app/hooks/useStore";
import { Card, Flex, Heading, Skeleton } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";




export function StoreAside() {
  const { categories, onSetCategory, isLoading } = useStore();

  return (
    <Card bgColor={'white'} minW={'300px'} height={'fit-content'} p={'31px'}>
      <Heading size={'md'}>Categorías</Heading>
      <Flex as='nav' flexDir={'column'} gap={'16px'} mt={'31px'} color={'#707070'}>
        {!isLoading && categories.map((cat) => (
          <Link style={{ textDecoration: 'underline' }} onClick={() => onSetCategory(cat.id)} href={`/tienda/category/${cat.id}/products`} key={cat.id}>{cat.name}</Link>
        ))}

        {isLoading && (
          <React.Fragment>
            <Skeleton minH={'20px'} />
            <Skeleton minH={'20px'} />
            <Skeleton minH={'20px'} />
            <Skeleton minH={'20px'} />
            <Skeleton minH={'20px'} />
            <Skeleton minH={'20px'} />
          </React.Fragment>
        )}
      </Flex>
    </Card>
  )
}