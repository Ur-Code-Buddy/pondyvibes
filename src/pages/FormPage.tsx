// import React, { useState } from 'react';
// import { Box, Flex, Heading, Text, Input, FormControl, FormLabel, Button, useColorMode, Stack, Grid, GridItem, Select } from '@chakra-ui/react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Navbar: React.FC = () => {
//   return (
//     <Box
//       bg="linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8))"
//       p={4}
//       width="100%"
//       zIndex="1000"
//       backdropFilter="blur(10px)"
//       position="fixed" // Fixed position for the navbar
//       top="0"
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
//   const bgColor = { light: 'white', dark: 'gray.700' };
//   const navigate = useNavigate();

//   const today = new Date();
//   const [startDate, setStartDate] = useState<Date | null>(today);
//   const [endDate, setEndDate] = useState<Date | null>(new Date(today.getTime() + 86400000));

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const form = event.currentTarget as HTMLFormElement;
//     const formData = new FormData(form);
//     const data = {
//       firstName: formData.get('first-name') as string,
//       lastName: formData.get('last-name') as string,
//       email: formData.get('email') as string,
//       phone: formData.get('phone') as string,
//       dateFrom: startDate?.toISOString() ?? '',
//       dateTo: endDate?.toISOString() ?? '',
//       numPersons: formData.get('num-persons') as string,
//       numRooms: formData.get('num-rooms') as string,
//       roomType: formData.get('ac-nonac') as string,
//       info: formData.get('info') as string,
//     };

//     const emailBody = `
//       <h1>Booking Request</h1>
//       <p><strong>First Name:</strong> ${data.firstName}</p>
//       <p><strong>Last Name:</strong> ${data.lastName}</p>
//       <p><strong>Email Address:</strong> ${data.email}</p>
//       <p><strong>Phone Number:</strong> ${data.phone}</p>
//       <p><strong>Date of Stay (From):</strong> ${data.dateFrom}</p>
//       <p><strong>Date of Stay (To):</strong> ${data.dateTo}</p>
//       <p><strong>Number of Persons:</strong> ${data.numPersons}</p>
//       <p><strong>Number of Rooms:</strong> ${data.numRooms}</p>
//       <p><strong>Room Type:</strong> ${data.roomType}</p>
//       <p><strong>Additional Information / Special Requests:</strong> ${data.info}</p>
//     `;

//     try {
//       const response = await axios.post('/send_mail', {
//         subject: 'New Booking Request',
//         html: emailBody,
//       });

//       if (response.status === 200) {
//         console.log('Form submitted successfully');
//         alert('Form has been submitted');
//         navigate('/');
//       } else {
//         console.error('Failed to send the form:', response);
//         alert('Failed to send the form. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

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
//         pt="120px" // Padding to create space below the navbar without affecting the background image
//         backgroundImage="url('https://images.unsplash.com/photo-1582549023823-b5984434f8f7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
//         backgroundSize="cover"
//         backgroundPosition="center"
//       >
//         <Box
//           p={8}
//           bg="rgba(255, 255, 255, 0.9)"
//           borderRadius="md"
//           boxShadow="lg"
//           maxW="800px"
//           width="100%"
//           border="1px"
//           borderColor="gray.300"
//         >
//           <Heading as="h2" size="xl" mb={6} color="gray.800">
//             Book Your Stay
//           </Heading>
//           <form onSubmit={handleSubmit}>
//             <Stack spacing={4}>
//               <Grid
//                 templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
//                 gap={4}
//               >
//                 <GridItem>
//                   <FormControl id="first-name" isRequired>
//                     <FormLabel color="gray.800">First Name</FormLabel>
//                     <Input type="text" name="first-name" placeholder="John" color="gray.700" />
//                   </FormControl>
//                 </GridItem>

//                 <GridItem>
//                   <FormControl id="last-name">
//                     <FormLabel color="gray.800">Last Name</FormLabel>
//                     <Input type="text" name="last-name" placeholder="Doe" color="gray.700" />
//                   </FormControl>
//                 </GridItem>

//                 <GridItem colSpan={{ base: 1, md: 2 }}>
//                   <FormControl id="email" isRequired>
//                     <FormLabel color="gray.800">Email Address</FormLabel>
//                     <Input type="email" name="email" placeholder="example@example.com" color="gray.700" />
//                   </FormControl>
//                 </GridItem>

//                 <GridItem colSpan={{ base: 1, md: 2 }}>
//                   <FormControl id="phone" isRequired>
//                     <FormLabel color="gray.800">Phone Number</FormLabel>
//                     <Input
//                       type="tel"
//                       name="phone"
//                       placeholder="123-456-7890"
//                       color="gray.700"
//                       pattern="[0-9]*"
//                       inputMode="numeric"
//                       required
//                     />
//                   </FormControl>
//                 </GridItem>

//                 <GridItem colSpan={{ base: 1, md: 2 }}>
//                   <FormControl id="date-from" isRequired>
//                     <FormLabel color="gray.800">Date of Stay (From)</FormLabel>
//                     <DatePicker
//                       selected={startDate}
//                       onChange={(date) => setStartDate(date as Date)}
//                       dateFormat="MMMM d, yyyy"
//                       minDate={today}
//                       className="react-datepicker__input-container"
//                       customInput={<Input placeholder="Select start date" color="gray.700" />}
//                     />
//                   </FormControl>
//                 </GridItem>

//                 <GridItem colSpan={{ base: 1, md: 2 }}>
//                   <FormControl id="date-to" isRequired>
//                     <FormLabel color="gray.800">Date of Stay (To)</FormLabel>
//                     <DatePicker
//                       selected={endDate}
//                       onChange={(date) => setEndDate(date as Date)}
//                       dateFormat="MMMM d, yyyy"
//                       minDate={startDate ? new Date(startDate.getTime() + 86400000) : today}
//                       className="react-datepicker__input-container"
//                       customInput={<Input placeholder="Select end date" color="gray.700" />}
//                     />
//                   </FormControl>
//                 </GridItem>

//                 <GridItem colSpan={{ base: 1, md: 2 }}>
//                   <FormControl id="num-persons" isRequired>
//                     <FormLabel color="gray.800">Number of Persons</FormLabel>
//                     <Input type="number" name="num-persons" placeholder="Enter number of persons" color="gray.700" min={1} max={10} defaultValue={1} />
//                   </FormControl>
//                 </GridItem>

//                 <GridItem colSpan={{ base: 1, md: 2 }}>
//                   <FormControl id="num-rooms" isRequired>
//                     <FormLabel color="gray.800">Number of Rooms</FormLabel>
//                     <Input type="number" name="num-rooms" placeholder="Enter number of rooms" color="gray.700" min={1} max={10} defaultValue={1} />
//                   </FormControl>
//                 </GridItem>

//                 <GridItem colSpan={{ base: 1, md: 2 }}>
//                   <FormControl id="ac-nonac" isRequired>
//                     <FormLabel color="gray.800">Room Type</FormLabel>
//                     <Select name="ac-nonac" color="gray.700">
//                       <option value="ac">AC</option>
//                       <option value="non-ac">Non-AC</option>
//                     </Select>
//                   </FormControl>
//                 </GridItem>

//                 <GridItem colSpan={{ base: 1, md: 2 }}>
//                   <FormControl id="info">
//                     <FormLabel color="gray.800">Additional Information / Special Requests</FormLabel>
//                     <Input as="textarea" name="info" placeholder="Any special requests?" color="gray.700" />
//                   </FormControl>
//                 </GridItem>
//               </Grid>
//               <Button type="submit" colorScheme="teal" size="lg" mt={4}>
//                 Submit
//               </Button>
//             </Stack>
//           </form>
//         </Box>
//       </Flex>
//     </>
//   );
// };

// export default FormPage;





import React, { useState } from 'react';
import { Box, Flex, Heading, Text, Input, FormControl, FormLabel, Button, useColorMode, Stack, Grid, GridItem, Select } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar: React.FC = () => {
  return (
    <Box
      bg="linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8))"
      p={4}
      width="100%"
      zIndex="1000"
      backdropFilter="blur(10px)"
      position="fixed"
      top="0"
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
  const bgColor = { light: 'white', dark: 'gray.700' };
  const navigate = useNavigate();

  const today = new Date();
  const [startDate, setStartDate] = useState<Date | null>(today);
  const [endDate, setEndDate] = useState<Date | null>(new Date(today.getTime() + 86400000));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get('first-name') as string,
      lastName: formData.get('last-name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      dateFrom: startDate?.toISOString() ?? '',
      dateTo: endDate?.toISOString() ?? '',
      numPersons: formData.get('num-persons') as string,
      numRooms: formData.get('num-rooms') as string,
      roomType: formData.get('ac-nonac') as string,
      info: formData.get('info') as string,
    };

    const emailBody = `
      <h1>Booking Request</h1>
      <p><strong>First Name:</strong> ${data.firstName}</p>
      <p><strong>Last Name:</strong> ${data.lastName}</p>
      <p><strong>Email Address:</strong> ${data.email}</p>
      <p><strong>Phone Number:</strong> ${data.phone}</p>
      <p><strong>Date of Stay (From):</strong> ${data.dateFrom}</p>
      <p><strong>Date of Stay (To):</strong> ${data.dateTo}</p>
      <p><strong>Number of Persons:</strong> ${data.numPersons}</p>
      <p><strong>Number of Rooms:</strong> ${data.numRooms}</p>
      <p><strong>Room Type:</strong> ${data.roomType}</p>
      <p><strong>Additional Information / Special Requests:</strong> ${data.info}</p>
    `;

    try {
      const response = await axios.post('/send_mail', {
        subject: 'New Booking Request',
        html: emailBody,
      });

      if (response.status === 200) {
        console.log('Form submitted successfully');
        alert('Form has been submitted');
        navigate('/');
      } else {
        console.error('Failed to send the form:', response);
        alert('Failed to send the form. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again.');
    }
  };

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
        pt="120px"
        backgroundImage="url('https://images.unsplash.com/photo-1582549023823-b5984434f8f7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box
          p={8}
          bg="rgba(255, 255, 255, 0.9)"
          borderRadius="md"
          boxShadow="lg"
          maxW="800px"
          width="100%"
          border="1px"
          borderColor="gray.300"
        >
          <Heading as="h2" size="xl" mb={6} color="gray.800">
            Book Your Stay
          </Heading>
          <form onSubmit={handleSubmit}>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
              <GridItem>
                <FormControl id="first-name" isRequired>
                  <FormLabel color="gray.800">First Name</FormLabel>
                  <Input type="text" name="first-name" placeholder="John" color="gray.700" />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="last-name">
                  <FormLabel color="gray.800">Last Name</FormLabel>
                  <Input type="text" name="last-name" placeholder="Doe" color="gray.700" />
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 1, md: 2 }}>
                <FormControl id="email" isRequired>
                  <FormLabel color="gray.800">Email Address</FormLabel>
                  <Input type="email" name="email" placeholder="example@example.com" color="gray.700" />
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 1, md: 2 }}>
                <FormControl id="phone" isRequired>
                  <FormLabel color="gray.800">Phone Number</FormLabel>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="123-456-7890"
                    color="gray.700"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    required
                  />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="date-from" isRequired>
                  <FormLabel color="gray.800">Date of Stay (From)</FormLabel>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date as Date)}
                    dateFormat="MMMM d, yyyy"
                    minDate={today}
                    className="react-datepicker__input-container"
                    customInput={<Input placeholder="Select start date" color="gray.700" />}
                  />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="date-to" isRequired>
                  <FormLabel color="gray.800">Date of Stay (To)</FormLabel>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date as Date)}
                    dateFormat="MMMM d, yyyy"
                    minDate={startDate ? new Date(startDate.getTime() + 86400000) : today}
                    className="react-datepicker__input-container"
                    customInput={<Input placeholder="Select end date" color="gray.700" />}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 1, md: 2 }}>
                <FormControl id="num-persons" isRequired>
                  <FormLabel color="gray.800">Number of Persons</FormLabel>
                  <Input type="number" name="num-persons" placeholder="Enter number of persons" color="gray.700" min={1} max={10} defaultValue={1} />
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 1, md: 2 }}>
                <FormControl id="num-rooms" isRequired>
                  <FormLabel color="gray.800">Number of Rooms</FormLabel>
                  <Input type="number" name="num-rooms" placeholder="Enter number of rooms" color="gray.700" min={1} max={10} defaultValue={1} />
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 1, md: 2 }}>
                <FormControl id="ac-nonac" isRequired>
                  <FormLabel color="gray.800">Room Type</FormLabel>
                  <Select name="ac-nonac" color="gray.700">
                    <option value="ac">AC</option>
                    <option value="non-ac">Non-AC</option>
                  </Select>
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 1, md: 2 }}>
                <FormControl id="info">
                  <FormLabel color="gray.800">Additional Information / Special Requests</FormLabel>
                  <Input as="textarea" name="info" placeholder="Any special requests?" color="gray.700" />
                </FormControl>
              </GridItem>
              </Grid>
              <Flex justify="center" mt={4}>
                <Button type="submit" colorScheme="teal" size="lg">
                  Submit
                </Button>
              </Flex>
            </form>
        </Box>
      </Flex>
    </>
  );
};

export default FormPage;
