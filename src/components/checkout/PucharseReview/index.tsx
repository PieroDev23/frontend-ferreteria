"use client";


import { useStore } from "@app/hooks/useStore";
import { Box, Divider, Flex, Heading, Spinner, Stack, StackProps, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";




export function PucharseReview(props: StackProps) {
  const { cart, isLoading } = useStore();


  return (
    <Stack {...props} bgColor={'#f1efefcc'} height={'fit-content'} p={13} spacing={31}>
      <Heading size={'md'}>Resumen de compra:</Heading>
      <Box>
        {
          !isLoading ? (
            <React.Fragment>
              <Flex justify={'space-between'}>
                <Text fontWeight={'bold'}>Productos</Text>
                <Text fontWeight={'bold'}>Precio</Text>
              </Flex>
              <Divider borderColor={'black'} />
              <Stack mt={3} spacing={13}>
                {
                  cart.map((p) => {
                    return (
                      <Flex justifyContent={'space-between'} key={p.id}>
                        <Text>{p.name} <Text as={'span'} fontWeight={'bold'}>x{p.quantity}</Text> </Text>
                        <Text>S/. {p.totalPrice.toFixed(2)}</Text>
                      </Flex>
                    )
                  })
                }
                <Divider borderColor={'black'} />
                <Flex justifyContent={'space-between'}>
                  <Text>Descuento</Text>
                  <Text>No aplica</Text>
                </Flex>
                <Divider borderColor={'black'} />

                <Flex justifyContent={'space-between'}>
                  <Text fontWeight={'bold'}>Total</Text>
                  <Text fontWeight={'bold'}>
                    S/. {
                      cart.length !== 0 && cart.reduce((prev, curr) => prev + curr.totalPrice, 0).toFixed(2)
                    }
                  </Text>
                </Flex>

             
                <Flex align={'center'} justify={'space-between'} mt={31}>
                  <Image width={50} height={50} src={'https://yanoescoleccionable.com/wp-content/plugins/culqi-checkout/includes/3rd-party/plugins/woocommerce/assets/images/culqi-logo.svg'} alt="culqi" />
                  <Flex justify={'center'} align={'center'} gap={5}>
                    <Image width={100} height={50} src={'https://yanoescoleccionable.com/wp-content/plugins/culqi-checkout/includes/3rd-party/plugins/woocommerce/assets/images/cards.svg'} alt="providers" />
                    <Image width={30} height={30} src={"https://yanoescoleccionable.com/wp-content/plugins/culqi-checkout/includes/3rd-party/plugins/woocommerce/assets/images/yape.svg"} alt="yape" />
                  </Flex>
                </Flex>
              </Stack>

              <Text fontSize={13} mt={31}>Tus datos personales van a ser usados para procesar tu orden y para otros propósitos especificados en nuestra política de privacidad.</Text>
            </React.Fragment>
          )
            :
            <Flex justify={'center'} align={'center'} minH={'300px'}>
              <Spinner />
            </Flex>
        }

        {
          !isLoading && cart.length === 0 && (
            <Flex justify={'center'} align={'center'} minH={'300px'}>
              <Spinner />
            </Flex>
          )}
      </Box>
    </Stack>
  )
}