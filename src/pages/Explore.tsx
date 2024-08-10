import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  IconButton,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Explore: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();

  const images = [
    'https://images.unsplash.com/photo-1524613032530-449a5d94c285?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://www.wanderershub.com/wp-content/uploads/2023/09/Cafe-des-Art-Puducherry.jpg',
    'https://www.wanderershub.com/wp-content/uploads/2023/09/PONDICHERRY-ATTRACTIONS-1536x917.png',
    'https://tripnxt.com/blog/wp-content/uploads/2020/05/paradise-beach-tn.jpg',
    'https://images.unsplash.com/photo-1515091943-9d5c0ad475af?q=80&w=1535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1588623967205-d31b760a32bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://upload.wikimedia.org/wikipedia/commons/0/0b/A_night_in_the_streets_of_Pondicherry%21.jpg',
    'https://static2.tripoto.com/media/filter/tst/img/294132/TripDocument/1633157080_img_20210820_131426.jpg',
    'https://images.unsplash.com/photo-1566224052100-7dfb53549de6?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://res.cloudinary.com/purnesh/image/upload/f_auto/v1516609214/cafe108.jpg',
    'https://images.unsplash.com/photo-1709623244505-da3f9ea63984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVkdWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1709805471116-26c5adf3012b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVkdWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1710005556849-1a8b237a8eb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVkdWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1566303052303-b2d2a9f16f0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHVkdWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1709625215458-69e36584c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVkdWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCu-dyo6Tj2hYJ9p0LTtROBTQxIqrdxrN1Pg&s',
    'https://images.unsplash.com/photo-1662572594616-c5752f12dc10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHB1ZHVjaGVycnl8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1581791535045-5819f06be99b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1ZHVjaGVycnl8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1619500178934-aa67d4c6623b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVyb3ZpbGxlfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1662572594344-b0f91efb34f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF1cm92aWxsZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1615309565292-159f2a8505e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1615196570203-222ade7954da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c291dGglMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1616849540275-0bc274e2a474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c291dGglMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661963649278-db5e2697d0be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvdXRoJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D',
    'https://imgs.search.brave.com/-gJUxFeiC0fnLnJ9jHm7ZJ-RQcvr6PCNrlwpZ3CpR9o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zLnJm/aS5mci9tZWRpYS9k/aXNwbGF5LzA5OGVj/YjI4LWJiYWEtMTFl/ZS05N2NmLTAwNTA1/NmE5MDI4NC93Ojk4/MC9wOjE2eDkvMDAw/XzExNDFQRS5qcGc',
    'https://imgs.search.brave.com/ykUNcmH3K9K1xN0R-xpXO4gCIh4eCHfCqAEmbM86Qkc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFlL1B1ZHVjaGVy/cnlfUGFya19Nb251/bWVudC5KUEc',
    'https://imgs.search.brave.com/kq9DfQT_nZPyIyRg24vp2iBtSngdHzQXdvhTpZZ15iY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJpcHNhdnZ5LmNv/bS90aG1iL29DNDVu/aVFKNGxOcDExdXJp/T2I0ZXZkS0xDOD0v/MTUwMHgwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL0dl/dHR5SW1hZ2VzLTUx/NjA1Njg2NS01Yjdh/ZDRjZjQ2ZTBmYjAw/NTAyYjNlM2QuanBn',
    'https://imgs.search.brave.com/wMkX7RXzJiNqEoUNvCLCzCLX_cRyxDz5NCZRzjczwNo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I3L1BvbmRpY2hl/cnJ5LF9Qcm9tZW5h/ZGVfQmVhY2gsX0Jh/eV9vZl9CZW5nYWws/X0luZGlhLmpwZw',
    'https://imgs.search.brave.com/qCev5plByjn9ZvnhQGiOozOGSOmJSvBVC_P1zKxvEQU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci90c3QvaW1n/LzEyNTEwNzUvVHJp/cERvY3VtZW50LzE2/MjM1MjUzNTNfMF8x/ZXI5ZmVld3BhcWx0/YWswLmpwZy53ZWJw',
    'https://imgs.search.brave.com/hnsi6d3poJqTVh0eOwiMkZwT8lk2ZV4gxgq6mJ8Hs-A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzhjL1BvbmRpY2hl/cnJ5LVJvY2tfYmVh/Y2hfYWVyaWFsX3Zp/ZXcuanBn',
    'https://img.veenaworld.com/wp-content/uploads/2023/03/10-Things-That-Make-Pondicherry-An-Unforgetful-Travel-Destination.jpg',
    'http://www.theuntourists.com/wp-content/uploads/2015/11/DSCF41881.jpg',
    'https://static2.tripoto.com/media/filter/nl/img/187611/TripDocument/1493120153_promenade_beach_pondicherry.jpg',
    'https://static2.tripoto.com/media/filter/nl/img/187611/TripDocument/1493120381_travels_pondicherry.png',
    'https://i.pinimg.com/736x/4c/ea/6c/4cea6caeece6f3ae6ae0920f03d31bcb.jpg',
    'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180221130258/iStock-500320921-1024x682.jpg',
    'https://www.seawatersports.com/img/newimage/places/white-town--.jpg',
    'https://i0.wp.com/indianvagabond.com/wp-content/uploads/2016/09/pondicherry-white-town-6.jpg?resize=716%2C484&ssl=1',
    'https://revolvingcompass.com/wp/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-16-at-10.11.59-PM-1-1024x768.jpeg?x42979',
    'https://static2.tripoto.com/media/filter/tst/img/183810/TripDocument/1440998902_img_20141113_063611712_hdr.jpg',


  ]

  return (
    <Box>
      {/* Navbar */}
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
            <Link to="/homepage">
              <Text color="white" fontSize="lg" _hover={{ color: 'teal.400' }}>
                Home
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

      {/* Explore Content */}
      <Box
        pt={32} /* Increased padding top to push content further down */
        px={8}
        bg="white"
        maxW="100%"
        mx="auto"
        bgImage="url('https://assets.traveltriangle.com/blog/wp-content/uploads/2017/05/auroville-beach-kb-920506.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgAttachment="fixed"  /* Added this property */
      >
        <Box
          bgGradient="linear(to-r, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))"
          maxW="1200px"
          mx="auto"
          borderRadius="lg"
          boxShadow="2xl"
          p={8} /* Added padding to create space around the heading */
        >
          <Heading
            as="h2"
            size="2xl"
            mb={12}
            textAlign="center"
            fontWeight="bold"
            color="teal.700"
          >
            Explore Pondicherry
          </Heading>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            gridAutoRows="10px"
            gap={6}
            p={4}
            bgGradient="linear(to-b, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))"
            borderRadius="lg"
            boxShadow="xl"
          >
            {images.map((url, index) => (
              <Box
                key={index}
                gridRowEnd={`span ${Math.floor(Math.random() * 8) + 4}`}
                overflow="hidden"
                borderRadius="lg"
                boxShadow="lg"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
              >
                <Image
                  src={url}
                  alt={`Pondicherry ${index + 1}`}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Explore;
