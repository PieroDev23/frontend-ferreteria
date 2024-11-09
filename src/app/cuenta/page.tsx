"use client";

import { LoginForm, RegisterForm } from "@app/components/cuenta";
import { Box, Card, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function CuentaPage() {
  return (
    <Box p={5}>
      <Card p={5} maxW="800px" w={'50%'} mx="auto" h={'fit-content'}>
        <Heading textAlign="center" mb={5}>
          Mi Cuenta
        </Heading>
        <Tabs variant="enclosed" isFitted>
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Registro</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginForm />
            </TabPanel>
            <TabPanel>
              <RegisterForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Box>
  );
}
