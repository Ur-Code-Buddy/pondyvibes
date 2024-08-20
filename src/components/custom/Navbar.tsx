import React from 'react';
import { Box, Flex, Heading, Text, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

interface NavbarProps {
  links: { name: string, path: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Heading 
          as="h1" 
          size={{ base: 'md', md: 'lg' }} 
          color="white"
          fontSize={{ base: 'lg', md: 'xl' }}
        >
          PondyRetreats
        </Heading>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Navigation"
          display={{ base: 'block', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Flex
          display={{ base: 'none', md: 'flex' }}
          direction="row"
          align="center"
          gap={4}
        >
          {links.map((link, index) => (
            <Link key={index} to={link.path}>
              <Text color="white" fontSize="lg" _hover={{ color: 'teal.400' }}>
                {link.name}
              </Text>
            </Link>
          ))}
        </Flex>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="sm">
        <DrawerOverlay>
          <DrawerContent 
            // bgImage="url(https://images.unsplash.com/photo-1548177089-f2a0f410eb12?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
            // bgSize="cover"
            bgPosition="center"
            bgColor="rgba(0, 0, 0, 0.7)" // Fallback color
          >
            <DrawerCloseButton />
            <DrawerHeader 
              color="white" 
              textAlign="center" 
              borderBottom="1px solid rgba(255, 255, 255, 0.3)"
              fontSize="xl"
              p={4}
            >
              Menu
            </DrawerHeader>
            <DrawerBody>
              <Flex direction="column" align="center" gap={6} mt={4}>
                {links.map((link, index) => (
                  <Link key={index} to={link.path} onClick={onClose}>
                    <Text color="white" fontSize="lg" _hover={{ color: 'teal.400' }}>
                      {link.name}
                    </Text>
                  </Link>
                ))}
                <Divider borderColor="whiteAlpha.300" my={6} />
                <Text color="white" fontSize="md" textAlign="center" mb={4}>
                  Discover the beauty of Pondicherry through our handpicked selections. Explore stunning locations, hidden gems, and local favorites—all at your fingertips. Your next adventure awaits!
                </Text>
                <Text color="white" fontSize="sm" textAlign="center" mb={4}>
                  "Travel far, travel wide, and travel often. The world is a book, and those who do not travel read only one page." – Saint Augustine
                </Text>
                <Text color="white" fontSize="sm" textAlign="center" mb={4}>
                  "The journey of a thousand miles begins with a single step." – Lao Tzu
                </Text>
                <Text color="white" fontSize="sm" textAlign="center">
                  "Not all those who wander are lost." – J.R.R. Tolkien
                </Text>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Navbar;
