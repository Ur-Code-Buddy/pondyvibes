import React, { useState } from 'react';
import { Box, Flex, Heading, FormControl, FormLabel, Input, Textarea, Button, useColorMode, Stack, useToast } from '@chakra-ui/react';
import axios from 'axios';

const AdminPanel: React.FC = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.700' };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const toast = useToast();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://pondyvibes.05baivab.workers.dev/login', {
        headers: {
          'username': username,
          'password': password,
        },
      });

      if (response.data.success) {
        setLoggedIn(true);
        toast({
          title: 'Login Successful',
          description: 'You are now logged in.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Login Failed',
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

  const handleMessageUpload = async () => {
    setLoading(true);
    try {
      const authHeaders = {
        'username': username,
        'password': password,
      };
  
      const response = await axios.post(
        'https://pondyvibes.05baivab.workers.dev/store_content',
        { content: message }, // Message is in the body under the key "content"
        { headers: authHeaders } // Username and password are in headers
      );
  
      if (response.data.success) {
        toast({
          title: 'Message Uploaded',
          description: 'Your message has been successfully uploaded.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setMessage(''); // Clear message input after successful upload
      } else {
        toast({
          title: 'Upload Failed',
          description: 'There was an issue uploading your message.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while trying to upload the message.',
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
        maxW="500px"
        width="100%"
      >
        {loggedIn ? (
          <>
            <Heading as="h2" size="xl" mb={6} color="gray.800">
              Upload Message
            </Heading>
            <Stack spacing={4}>
              <FormControl id="message" isRequired>
                <FormLabel color="gray.800">Message</FormLabel>
                <Textarea
                  placeholder="Enter your message here..."
                  color="gray.700"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>
              <Button
                colorScheme="teal"
                mt={4}
                width="full"
                isLoading={loading}
                onClick={handleMessageUpload}
              >
                Upload
              </Button>
            </Stack>
          </>
        ) : (
          <>
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
          </>
        )}
      </Box>
    </Flex>
  );
};

export default AdminPanel;
