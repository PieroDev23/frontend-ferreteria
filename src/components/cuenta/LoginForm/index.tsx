"use client";

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
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { AuthService } from "@app/services/AuthService";
import React from "react";
import { useRouter } from "next/navigation";

// Common input properties
const inputProps: InputProps = {
  borderRadius: "unset",
  borderColor: "gray",
};

// Tipado para datos del formulario de Login
export type LoginFormData = {
  email: string;
  password: string;
};

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const toast = useToast();


  const onSubmit = async (data: LoginFormData) => {
    setError(false);
    setIsLoading(true);

    const response = await AuthService.login(data);
    if (!response.ok) {
      setError(true)
      setIsLoading(false)
      setErrorMsg(response.message);
      return;
    }

    setIsLoading(false);

    toast({
      title: `Login exitoso`,
      position: 'top-right',
      status: "success",
      isClosable: true,
      containerStyle: {
        bg: '#73BD61'
      },
      description: `Bienvenido usuario: ${response.user.firstname} ${response.user.lastname}`
    });

    router.push("/tienda");
  };

  return (
    <Stack as="form" spacing={5} onSubmit={handleSubmit(onSubmit)}>
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
        Iniciar Sesión
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