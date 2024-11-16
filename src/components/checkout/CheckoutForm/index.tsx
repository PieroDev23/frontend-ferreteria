"use client";

import { useStore } from "@app/hooks/useStore";
import { CheckoutService, Order } from "@app/services/CheckoutService";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Select,
  Stack,
  StackProps,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";


// Common input properties
export const inputProps: InputProps = {
  borderRadius: "unset",
  borderColor: "gray",
};

// Form data type
type CheckoutFormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  address: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
};

// CheckoutForm component
export function CheckoutForm(props: StackProps) {

  const [isLoading, setIsloading] = React.useState(false);

  const router = useRouter();
  const toast = useToast()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const { cart, onResetCart } = useStore();

  // Submit handler
  async function onSubmit(data: CheckoutFormData) {
    setIsloading(true);

    const { cardCvv, cardExpiry, cardNumber, ...checkout } = data;
    console.log(cardCvv, cardExpiry, cardNumber);
    const totalPucharse = Number(cart.reduce((prev, curr) => prev + curr.totalPrice, 0).toFixed(2));
    const payload: Order = {
      userId: null,
      ...checkout,
      totalAmount: totalPucharse,
      items: cart.map(product => ({
        productId: product.id,
        quantity: product.quantity,
        categoryId: product.categoryId,
        price: product.price,
      }))
    };

    const response = await CheckoutService.createOrder(payload);

    if (!response) {
      setIsloading(false);
      toast({
        title: "Error al procesar la orden, vuelvalo a intentar",
        description: "Ocurrió un error al procesar la orden",
        status: "error",
      });
      return;
    }

    const { order } = response;
    router.push(`/order/${order.id}`);
    localStorage.removeItem("cart");
    onResetCart();
    setIsloading(false);
  }

  return (
    <Stack as="form" {...props} spacing={5} onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={5}>
        <FormControl isInvalid={!!errors.firstname}>
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            {...inputProps}
            placeholder="Ingresa tus nombres"
            {...register("firstname", { required: "El nombre es requerido" })}
          />
          <FormErrorMessage>{errors.firstname?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.lastname}>
          <FormLabel>Apellidos</FormLabel>
          <Input
            type="text"
            {...inputProps}
            placeholder="Ingresa tus apellidos"
            {...register("lastname", { required: "El apellido es requerido" })}
          />
          <FormErrorMessage>{errors.lastname?.message}</FormErrorMessage>
        </FormControl>
      </Flex>

      <FormControl isInvalid={!!errors.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          {...inputProps}
          placeholder="Ingresa tu email"
          {...register("email", {
            required: "El email es requerido",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "El email es inválido",
            },
          })}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.phone}>
        <FormLabel>Teléfono</FormLabel>
        <Input
          type="tel"
          {...inputProps}
          placeholder="Ingresa tu número de teléfono"
          {...register("phone", {
            required: "El número de teléfono es requerido",
            pattern: {
              value: /^\d+$/,
              message: "El número de teléfono es inválido",
            },
          })}
        />
        <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.address}>
        <FormLabel>Dirección</FormLabel>
        <Input
          {...inputProps}
          placeholder="Ingresa tu dirección"
          {...register("address", { required: "La dirección es requerida" })}
        />
        <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>País o Región</FormLabel>
        <Input {...inputProps} value={"Perú"} {...register("country")} readOnly />
      </FormControl>


      <FormControl>
        <FormLabel>Ciudad</FormLabel>
        <Select defaultValue="LIMA" {...register("city")} borderColor="gray" borderRadius="unset">
          <option value="LIMA">Lima</option>
        </Select>
      </FormControl>

      {/* Campos de tarjeta de crédito */}
      <FormControl isInvalid={!!errors.cardNumber}>
        <FormLabel>Número de Tarjeta</FormLabel>
        <Input
          type="text"
          maxLength={16}
          {...inputProps}
          placeholder="Ingresa tu número de tarjeta"
          {...register("cardNumber", {
            required: "El número de tarjeta es requerido",
            pattern: {
              value: /^\d{16}$/,
              message: "El número de tarjeta es inválido",
            },
          })}
        />
        <FormErrorMessage>{errors.cardNumber?.message}</FormErrorMessage>
      </FormControl>

      <Flex gap={5}>
        <FormControl isInvalid={!!errors.cardExpiry}>
          <FormLabel>Fecha de Vencimiento</FormLabel>
          <Input
            type="text"
            maxLength={5}
            {...inputProps}
            placeholder="MM/YY"
            {...register("cardExpiry", {
              required: "La fecha de vencimiento es requerida",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                message: "Formato inválido, usa MM/YY",
              },
            })}
          />
          <FormErrorMessage>{errors.cardExpiry?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.cardCvv}>
          <FormLabel>CVV</FormLabel>
          <Input
            type="password"
            maxLength={3}
            {...inputProps}
            placeholder="CVV"
            {...register("cardCvv", {
              required: "El CVV es requerido",
              pattern: {
                value: /^\d{3}$/,
                message: "El CVV es inválido",
              },
            })}
          />
          <FormErrorMessage>{errors.cardCvv?.message}</FormErrorMessage>
        </FormControl>
      </Flex>

      <Flex justify="flex-end" mt={5}>
        <Button
          isLoading={isLoading}
          leftIcon={<ArrowForwardIcon />}
          type="submit"
          bgColor="#feeb34"
          _hover={{ bgColor: "black", color: "white" }}
          borderRadius="unset"
        >
          Pagar
        </Button>
      </Flex>
    </Stack>
  );
}
