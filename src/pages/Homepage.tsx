import React from 'react'; 
import { Box, Flex, Heading, Text, Image, Stack, Button, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/custom/Navbar';
import SEO from '../components/custom/Helmet';

const HeroSection: React.FC = () => {
  const texts = [
    'Book Your Dream Stay in Pondicherry Today',
    'Stay Where Comfort Meets Elegance',
    'Your Stay, Your Way in Pondicherry',
    'Seamless Hotel Bookings for Your Pondicherry Adventure',
    'Reserve a Room, Create a Memory',
    'Luxury and Comfort Awaits You',
    'Relax, Unwind, and Rejuvenate in Style',
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <Flex
      height={{ base: '70vh', md: '100vh' }}
      align="center"
      justify="center"
      bgImage="url('https://images.unsplash.com/photo-1597073642928-48c0971f7ded?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      bgSize="cover"
      bgPosition="center"
      color="white"
      textAlign="center"
      p={4}
    >
      <Box p={8} bg="rgba(0, 0, 0, 0.5)" borderRadius="md" boxShadow="lg">
        <Heading as="h1" size={{ base: '2xl', md: '3xl' }} mb={6} textShadow="2px 2px 8px rgba(0, 0, 0, 0.8)">
          {texts[index]}
        </Heading>
        <Link to="/form">
          <Button size={{ base: 'md', md: 'lg' }} colorScheme="teal">
            Start Your Journey
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

const Section: React.FC<{ image: string; text: string; reverse?: boolean }> = ({
  image,
  text,
  reverse = false,
}) => {
  const { colorMode } = useColorMode();
  const textColor = { light: 'gray.800', dark: 'white' };
  const bgColor = { light: 'white', dark: 'gray.700' };

  return (
    <Flex
      direction={{ base: reverse ? 'column-reverse' : 'column', md: reverse ? 'row-reverse' : 'row' }}
      align="center"
      justify="center"
      p={{ base: 4, md: 8 }}
      maxW="1200px"
      mx="auto"
      bg={bgColor[colorMode]}
      borderRadius="lg"
      boxShadow="lg"
      my={8}
      overflow="hidden"
    >
      <Box flex="1">
        <Image src={image} alt="Pondicherry" borderRadius="md" boxShadow="md" />
      </Box>
      <Box flex="1" p={{ base: 4, md: 8 }}>
        <Text fontSize={{ base: 'md', md: 'xl' }} color={textColor[colorMode]}>
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

const Footer: React.FC = () => (
  <Box bg="gray.100" p={4} mt={16}>
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" maxW="1200px" mx="auto">
      <Text color="gray.600" textAlign={{ base: 'center', md: 'left' }}>
        © 2024 PondyRetreats. All rights reserved.
      </Text>
      <Flex gap={4} direction={{ base: 'column', md: 'row' }} align="center">
        <Link to="/privacy">
          <Text color="gray.600" _hover={{ color: 'teal.500' }}>
            Privacy Policy
          </Text>
        </Link>
        <Link to="/terms">
          <Text color="gray.600" _hover={{ color: 'teal.500' }}>
            Terms of Service
          </Text>
        </Link>
      </Flex>
    </Flex>
  </Box>
);

const Homepage: React.FC = () => {
  const navLinks = [
    { name: 'Explore', path: '/explore' },
    { name: 'Contact', path: '/form' },
  ];
  return (
    <>
      <SEO
        title="Pondyretreats | Book Your Dream Stay in Pondicherry"
        description="Visiting Pondicherry the fun way. Book your stay today at Pondyretreats for a comfortable and luxurious experience."
        keywords="pondicherry, travelling to pondicherry, rentals"
        image="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        url="https://pondyretreats.in/"
        type="website"
        authorName="Baivab Dutta"
        authorEmail="05baivab@gmail.com"
      />

      <Navbar links={navLinks} />
      <HeroSection />
      <Stack spacing={16} mt={-24} bg="white">
        <Section
          image="https://images.unsplash.com/photo-1662572594228-3aca8503b782?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Explore the French Quarter's charm as you stroll through cobblestone streets lined with colorful, historic buildings. Discover this vibrant district, where French colonial architecture and unique boutiques create a captivating atmosphere."
        />
        <Section
          image="https://images.unsplash.com/photo-1709969623540-fa2d8603eef7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Admire the serene beauty of Pondicherry's coastline from above, where golden sands meet the tranquil waves of the Bay of Bengal. This stunning view captures the peaceful essence of Pondicherry's coastal charm."
          reverse
        />
        <Section
          image="https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Experience the rich flavors of French cuisine, where culinary artistry and tradition blend to create a dining experience that delights the senses. Each dish is a celebration of fine ingredients and timeless techniques, offering a true taste of France."
        />
        <Section
          image="https://images.unsplash.com/photo-1598792598750-1f0dc619e6a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Experience the serenity of Auroville, where the golden Matrimandir dome symbolizes unity and peace. This unique community in Pondicherry invites you to explore a vision of universal harmony amidst lush, tranquil surroundings."
          reverse
        />
      </Stack>
      <Footer />
    </>
  );
};

export default Homepage;
