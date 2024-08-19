import React from 'react';
import { Box, Flex, Heading, Text, IconButton, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg="linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8))"
      p={4}
      position="fixed"
      width="100%"
      zIndex="1000"
      backdropFilter="blur(10px)"
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Heading as="h1" size="lg" color="white">
          Pondicherry Stays
        </Heading>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Navigation"
          display={{ base: 'block', md: 'none' }}
          onClick={onToggle}
        />
        <Flex
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
          direction={{ base: 'column', md: 'row' }}
          align="center"
          gap={4}
        >
          <Link to="/explore">
            <Text color="white" fontSize="lg" _hover={{ color: 'teal.400' }}>
              Explore
            </Text>
          </Link>
          <Link to="/form">
            <Text color="white" fontSize="lg" _hover={{ color: 'teal.400' }}>
              Contact
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
