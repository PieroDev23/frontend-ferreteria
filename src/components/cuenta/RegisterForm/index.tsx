"use client";

import { AuthService } from "@app/services/AuthService";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

// Common input properties
const inputProps: InputProps = {
  borderRadius: "unset",
  borderColor: "gray",
};

// Tipado para datos del formulario de Registro
export type RegisterFormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const toast = useToast();
  const router = useRouter();
  // Handler de envío
  const onSubmit = async (data: RegisterFormData) => {
    setError(false);
    setIsLoading(true);
    const response = await AuthService.register(data);

    if (!response.ok) {
      setError(true)
      setIsLoading(false)
      setErrorMsg("something went bad");
      return;
    }

    setIsLoading(false);

    toast({
      title: `Registro exitoso`,
      position: 'top-right',
      status: "success",
      isClosable: true,
      description: `Bienvenido`
    });

    router.push("/tienda");
  };

  return (
    <Stack as="form" spacing={5} onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.firstname}>
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          placeholder="Ingresa tu nombre..."
          {...inputProps}
          {...register("firstname", {
            required: "El nombre es requerido",
          })}
        />
        <FormErrorMessage>{errors.firstname?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.lastname}>
        <FormLabel>Apellidos</FormLabel>
        <Input
          type="text"
          placeholder="Ingresa tus apellidos..."
          {...inputProps}
          {...register("lastname", {
            required: "El apellido es requerido",
          })}
        />
        <FormErrorMessage>{errors.lastname?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Ingresa tu email..."
          {...inputProps}
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

      <FormControl isInvalid={!!errors.password}>
        <FormLabel>Contraseña</FormLabel>
        <Input
          type="password"
          placeholder="Ingresa tu contraseña..."
          {...inputProps}
          {...register("password", {
            required: "La contraseña es requerida",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <Button
        isLoading={isLoading}
        leftIcon={<ArrowForwardIcon />}
        type="submit"
        bgColor="#feeb34"
        _hover={{ bgColor: "black", color: "white" }}
        borderRadius="unset"
      >
        Registrarse
      </Button>


      {
        error && (
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Error de autenticación</AlertTitle>
            <AlertDescription>{errorMsg}</AlertDescription>
          </Alert>
        )
      }
    </Stack>
  );
}
