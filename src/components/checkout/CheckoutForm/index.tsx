"use client";

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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

// Common input properties
export const inputProps: InputProps = {
  borderRadius: "unset",
  borderColor: "gray",
};

// Form data type
type CheckoutFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  idDocument: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
};

// CheckoutForm component
export function CheckoutForm(props: StackProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  // Submit handler
  function onSubmit(data: CheckoutFormData) {
    console.log("Form data:", data);
    alert("Form submitted successfully");
  }

  return (
    <Stack as="form" {...props} spacing={5} onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={5}>
        <FormControl isInvalid={!!errors.firstName}>
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            {...inputProps}
            placeholder="Ingresa tus nombres..."
            {...register("firstName", { required: "El nombre es requerido" })}
          />
          <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.lastName}>
          <FormLabel>Apellidos</FormLabel>
          <Input
            type="text"
            {...inputProps}
            placeholder="Ingresa tus apellidos..."
            {...register("lastName", { required: "El apellido es requerido" })}
          />
          <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
        </FormControl>
      </Flex>

      <FormControl isInvalid={!!errors.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          {...inputProps}
          placeholder="Ingresa tu email..."
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
          placeholder="Ingresa tu dirección..."
          {...register("address", { required: "La dirección es requerida" })}
        />
        <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.idDocument}>
        <FormLabel>Documento de identidad</FormLabel>
        <Input
          type="text"
          {...inputProps}
          placeholder="Ingresa tu documento de identidad (DNI)"
          {...register("idDocument", {
            required: "Documento de identidad es requerido",
            pattern: {
              value: /^\d{8}$/,
              message: "El documento de identidad es inválido",
            },
          })}
        />
        <FormErrorMessage>{errors.idDocument?.message}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>País o Región</FormLabel>
        <Input {...inputProps} placeholder="Perú" readOnly />
      </FormControl>

      <FormControl>
        <FormLabel>Provincia</FormLabel>
        <Select defaultValue="LIMA" borderColor="gray" borderRadius="unset">
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
