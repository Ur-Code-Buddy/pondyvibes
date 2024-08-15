import React, { useState } from 'react';
import { Box, Flex, Heading, Text, Input, FormControl, FormLabel, Button, useColorMode, Stack, Grid, GridItem, Select } from '@chakra-ui/react';
import DatePicker from 'react-datepicker'; // Import the DatePicker component
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import { Resend } from 'resend'; // Import Resend

const Navbar: React.FC = () => {
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
  const bgColor = { light: 'white', dark: 'gray.700' };
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date(new Date().setDate(new Date().getDate() + 2)));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    const resend = new Resend('re_969SRGLW_FFtjThB9GvhpV3M76V5B4fVf');
    // Assert event.currentTarget as HTMLFormElement
    const form = event.currentTarget as HTMLFormElement;
  
    // Collect form data
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
      info: formData.get('info') as string
    };
  
    // Format email content
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
      const { error } = await resend.emails.send({
        from: 'Baivab <baivabprojects.site>',
        to: ['05baivab@gmail.com'], // Replace with your email
        subject: 'New Booking Request',
        html: emailBody,
      });
  
      if (error) {
        console.error({ error });
        alert('Failed to send the form. Please try again.');
        return;
      }
  
      console.log('Form submitted successfully');
      alert('Form has been submitted'); // Show a popup
      navigate('/'); // Redirect to the home page
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
          <form onSubmit={handleSubmit}> {/* Add form tag and onSubmit handler */}
            <Stack spacing={4}>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
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

                <GridItem>
                  <FormControl id="email" isRequired>
                    <FormLabel color="gray.800">Email Address</FormLabel>
                    <Input type="email" name="email" placeholder="example@example.com" color="gray.700" />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl id="phone" isRequired>
                    <FormLabel color="gray.800">Phone Number</FormLabel>
                    <Input type="number" name="phone" placeholder="123-456-7890" color="gray.700" />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl id="date-from" isRequired>
                    <FormLabel color="gray.800">Date of Stay (From)</FormLabel>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date as Date)}
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
                      selected={endDate}
                      onChange={(date) => setEndDate(date as Date)}
                      dateFormat="MMMM d, yyyy"
                      className="react-datepicker__input-container"
                      customInput={<Input placeholder="Select end date" color="gray.700" />}
                    />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl id="num-persons" isRequired>
                    <FormLabel color="gray.800">Number of Persons</FormLabel>
                    <Input type="number" name="num-persons" placeholder="Enter number of persons" color="gray.700" min={1} max={100} defaultValue={2} />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl id="num-rooms" isRequired>
                    <FormLabel color="gray.800">Number of Rooms</FormLabel>
                    <Input type="number" name="num-rooms" placeholder="Enter number of rooms" color="gray.700" min={1} max={10} defaultValue={1} />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                  <FormControl id="ac-nonac" isRequired>
                    <FormLabel color="gray.800">Room Type</FormLabel>
                    <Select name="ac-nonac" placeholder="Select room type" color="gray.700">
                      <option value="ac">AC</option>
                      <option value="non-ac">Non-AC</option>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                  <FormControl id="info">
                    <FormLabel color="gray.800">Additional Information / Special Requests</FormLabel>
                    <Input type="text" name="info" placeholder="Any additional information or special requests" color="gray.700" />
                  </FormControl>
                </GridItem>
              </Grid>
              <Button colorScheme="teal" mt={4} type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default FormPage;
