import React, { useState } from 'react';
import { Box, Flex, Heading, FormControl, FormLabel, Input, Button, useColorMode, Stack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPanel: React.FC = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.700' };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://backend.example.com/verify', {
        username,
        password,
      });

      if (response.data.success) {
        navigate('/adminpanel');
      } else {
        toast({
          title: 'Login failed',
          description: 'Invalid username or password.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while trying to log in.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg={bgColor[colorMode]}
      p={4}
      backgroundImage="url('https://images.unsplash.com/photo-1675611249831-42af581aec8d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box
        p={8}
        bg="rgba(255, 255, 255, 0.8)"
        borderRadius="md"
        boxShadow="lg"
        maxW="400px"
        width="100%"
      >
        <Heading as="h2" size="xl" mb={6} color="gray.800">
          Admin Login
        </Heading>
        <Stack spacing={4}>
          <FormControl id="username" isRequired>
            <FormLabel color="gray.800">Username</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              color="gray.700"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel color="gray.800">Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              color="gray.700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            colorScheme="teal"
            mt={4}
            width="full"
            isLoading={loading}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default AdminPanel;
