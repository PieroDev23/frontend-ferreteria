"use client";

import { useForm } from "react-hook-form";
import { Button, Card, FormControl, FormLabel, Heading, Input, FormErrorMessage, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { SessionContext } from "@app/providers/SessionProvider";
import { useRouter } from "next/navigation";

// Tipado del formulario
type FormValues = {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
};

export function CreateDirectionForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const session = React.useContext(SessionContext);
  const toast = useToast();
  const router = useRouter();

  // Método para enviar el formulario
  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/user-addresses/create", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, userId: session.id }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Error al guardar la dirección");
        toast({
          status: "error",
          isClosable: true,
          title: "Error al crear la dirección",
          description: errorMessage
        });
        return;
      }

      toast({
        status: "success",
        isClosable: true,
        title: "Dirección creada",
        description: "Dirección creada con éxito"
      });
      router.refresh();
    } catch (error) {
      setErrorMessage("Ocurrió un error al intentar guardar la dirección");
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <Card mt={8} p={6} borderRadius="md">
      <Heading size="md" mb={4}>Agregar Nueva Dirección</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.addressLine1}>
          <FormLabel>Dirección Línea 1</FormLabel>
          <Input
            placeholder="Ej: JR CENTENARIO 190, La Molina, Lima"
            {...register("addressLine1", { required: "La dirección es requerida" })}
          />
          <FormErrorMessage>
            {errors.addressLine1 && errors.addressLine1.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Dirección Línea 2</FormLabel>
          <Input
            placeholder="Opcional"
            {...register("addressLine2")}
          />
        </FormControl>

        <FormControl mt={4} isInvalid={!!errors.city}>
          <FormLabel>Ciudad</FormLabel>
          <Input
            placeholder="Ej: Lima"
            {...register("city", { required: "La ciudad es requerida" })}
          />
          <FormErrorMessage>
            {errors.city && errors.city.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mt={4} isInvalid={!!errors.country}>
          <FormLabel>País</FormLabel>
          <Input
            placeholder="Ej: Perú"
            {...register("country", { required: "El país es requerido" })}
          />
          <FormErrorMessage>
            {errors.country && errors.country.message}
          </FormErrorMessage>
        </FormControl>

        {errorMessage && (
          <FormControl mt={4}>
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          </FormControl>
        )}

        <Button mt={4} colorScheme="green" width="full" type="submit" isLoading={isSubmitting}>
          Guardar Dirección
        </Button>
      </form>
    </Card>
  );
}
