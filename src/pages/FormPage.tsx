// import React from 'react';
// import { Box, Flex, Heading, Text, Input, FormControl, FormLabel, Button, useColorMode, Stack, Grid, GridItem } from '@chakra-ui/react';
// import DatePicker from 'react-datepicker'; // Import the DatePicker component
// import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
// import { Link } from 'react-router-dom';

// const Navbar: React.FC = () => {
//   const { colorMode } = useColorMode();
//   return (
//     <Box
//       bg="linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8))"
//       p={4}
//       position="fixed"
//       width="100%"
//       zIndex="1000"
//       backdropFilter="blur(10px)"
//     >
//       <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
//         <Heading as="h1" size="lg" color="white">
//           Pondicherry Stays
//         </Heading>
//         <Flex gap={4}>
//           <Link to="/">
//             <Text color="white" fontSize="lg" _hover={{ color: 'teal.400' }}>
//               Home
//             </Text>
//           </Link>
//           <Link to="/explore">
//             <Text color="white" fontSize="lg" _hover={{ color: 'teal.400' }}>
//               Explore
//             </Text>
//           </Link>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };

// const FormPage: React.FC = () => {
//   const { colorMode } = useColorMode();
//   const textColor = { light: 'gray.800', dark: 'white' };
//   const bgColor = { light: 'white', dark: 'gray.700' };

//   return (
//     <>
//       <Navbar />
//       <Flex
//         direction="column"
//         align="center"
//         justify="center"
//         minH="100vh"
//         bg={bgColor[colorMode]}
//         p={4}
//         backgroundImage="url('https://images.unsplash.com/photo-1582549023823-b5984434f8f7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
//         backgroundSize="cover"
//         backgroundPosition="center"
//       >
//         <Box
//           p={8}
//           bg="rgba(255, 255, 255, 0.8)"
//           borderRadius="md"
//           boxShadow="lg"
//           maxW="800px"
//           width="100%"
//         >
//           <Heading as="h2" size="xl" mb={6} color="gray.800">
//             Book Your Stay
//           </Heading>
//           <Stack spacing={4}>
            
//             <Grid templateColumns="repeat(2, 1fr)" gap={4}>
//               <GridItem>
//                 <FormControl id="first-name" isRequired>
//                   <FormLabel color="gray.800">First Name</FormLabel>
//                   <Input type="text" placeholder="John" color="gray.700" />
//                 </FormControl>
//               </GridItem>

//               <GridItem>
//                 <FormControl id="last-name" isRequired>
//                   <FormLabel color="gray.800">Last Name</FormLabel>
//                   <Input type="text" placeholder="Doe" color="gray.700" />
//                 </FormControl>
//               </GridItem>

//               <GridItem>
//                 <FormControl id="email" isRequired>
//                   <FormLabel color="gray.800">Email Address</FormLabel>
//                   <Input type="email" placeholder="example@example.com" color="gray.700" />
//                 </FormControl>
//               </GridItem>

//               <GridItem>
//                 <FormControl id="phone" isRequired>
//                   <FormLabel color="gray.800">Phone Number</FormLabel>
//                   <Input type="tel" placeholder="123-456-7890" color="gray.700" />
//                 </FormControl>
//               </GridItem>

//               <GridItem colSpan={2}>
//                 <FormControl id="date" isRequired>
//                   <FormLabel color="gray.800">Date of Stay</FormLabel>
//                   <DatePicker
//                     selected={new Date()}
//                     onChange={(date) => console.log(date)}
//                     dateFormat="MMMM d, yyyy"
//                     className="react-datepicker__input-container"
//                     customInput={<Input placeholder="Select date" color="gray.700" />}
//                   />
//                 </FormControl>
//               </GridItem>


//               <GridItem colSpan={2}>
//                 <FormControl id="info">
//                   <FormLabel color="gray.800">Additional Information / Special Requests</FormLabel>
//                   <Input type="text" placeholder="Any additional information or special requests" color="gray.700" />
//                 </FormControl>
//               </GridItem>
//             </Grid>
//             <Button colorScheme="teal" mt={4}>
//               Submit
//             </Button>
//           </Stack>
//         </Box>
//       </Flex>
//     </>
//   );
// };

// export default FormPage;




import React from 'react';
import { Box, Flex, Heading, Text, Input, FormControl, FormLabel, Button, useColorMode, Stack, Grid, GridItem, Select } from '@chakra-ui/react';
import DatePicker from 'react-datepicker'; // Import the DatePicker component
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { colorMode } = useColorMode();
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
        <Flex gap={4}>
          <Link to="/">
            <Text color="white" fontSize="lg" _hover={{ color: 'teal.400' }}>
              Home
            </Text>
          </Link>
          <Link to="/explore">
            <Text color="white" fontSize="lg" _hover={{ color: 'teal.400' }}>
              Explore
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

const FormPage: React.FC = () => {
  const { colorMode } = useColorMode();
  const textColor = { light: 'gray.800', dark: 'white' };
  const bgColor = { light: 'white', dark: 'gray.700' };

  return (
    <>
      <Navbar />
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="100vh"
        bg={bgColor[colorMode]}
        p={4}
        backgroundImage="url('https://images.unsplash.com/photo-1582549023823-b5984434f8f7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box
          p={8}
          bg="rgba(255, 255, 255, 0.8)"
          borderRadius="md"
          boxShadow="lg"
          maxW="800px"
          width="100%"
        >
          <Heading as="h2" size="xl" mb={6} color="gray.800">
            Book Your Stay
          </Heading>
          <Stack spacing={4}>
            
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem>
                <FormControl id="first-name" isRequired>
                  <FormLabel color="gray.800">First Name</FormLabel>
                  <Input type="text" placeholder="John" color="gray.700" />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="last-name" isRequired>
                  <FormLabel color="gray.800">Last Name</FormLabel>
                  <Input type="text" placeholder="Doe" color="gray.700" />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="email" isRequired>
                  <FormLabel color="gray.800">Email Address</FormLabel>
                  <Input type="email" placeholder="example@example.com" color="gray.700" />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="phone" isRequired>
                  <FormLabel color="gray.800">Phone Number</FormLabel>
                  <Input type="tel" placeholder="123-456-7890" color="gray.700" />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="date-from" isRequired>
                  <FormLabel color="gray.800">Date of Stay (From)</FormLabel>
                  <DatePicker
                    selected={new Date()}
                    onChange={(date) => console.log(date)}
                    dateFormat="MMMM d, yyyy"
                    className="react-datepicker__input-container"
                    customInput={<Input placeholder="Select start date" color="gray.700" />}
                  />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="date-to" isRequired>
                  <FormLabel color="gray.800">Date of Stay (To)</FormLabel>
                  <DatePicker
                    selected={new Date()}
                    onChange={(date) => console.log(date)}
                    dateFormat="MMMM d, yyyy"
                    className="react-datepicker__input-container"
                    customInput={<Input placeholder="Select end date" color="gray.700" />}
                  />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="num-persons" isRequired>
                  <FormLabel color="gray.800">Number of Persons</FormLabel>
                  <Input type="number" placeholder="Enter number of persons" color="gray.700" />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="num-rooms" isRequired>
                  <FormLabel color="gray.800">Number of Rooms</FormLabel>
                  <Input type="number" placeholder="Enter number of rooms" color="gray.700" />
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl id="ac-nonac" isRequired>
                  <FormLabel color="gray.800">Room Type</FormLabel>
                  <Select placeholder="Select room type" color="gray.700">
                    <option value="ac">AC</option>
                    <option value="non-ac">Non-AC</option>
                  </Select>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl id="info">
                  <FormLabel color="gray.800">Additional Information / Special Requests</FormLabel>
                  <Input type="text" placeholder="Any additional information or special requests" color="gray.700" />
                </FormControl>
              </GridItem>
            </Grid>
            <Button colorScheme="teal" mt={4}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default FormPage;
