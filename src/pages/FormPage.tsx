import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Button, useToast } from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/custom/Navbar';  // Adjust the import path as necessary

const FormPage: React.FC = () => {
  const navigate = useNavigate();
  const today = new Date();
  const [startDate, setStartDate] = useState<Date | null>(today);
  const [endDate, setEndDate] = useState<Date | null>(new Date(today.getTime() + 86400000));
  const toast = useToast();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get('https://pondyvibes.05baivab.workers.dev/get_content');
        if (response.data.success) {
          toast({ title: response.data.content, status: 'info', duration: 15000, isClosable: true, position: "bottom-left" });
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };
    fetchContent();
  }, [toast]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = { firstName: formData.get('first-name') as string, lastName: formData.get('last-name') as string, email: formData.get('email') as string, phone: formData.get('phone') as string, dateFrom: startDate?.toISOString() ?? '', dateTo: endDate?.toISOString() ?? '', numPersons: formData.get('num-persons') as string, numRooms: formData.get('num-rooms') as string, roomType: formData.get('ac-nonac') as string, info: formData.get('info') as string };
    const emailBody = `<h1>Booking Request</h1><p><strong>First Name:</strong> ${data.firstName}</p><p><strong>Last Name:</strong> ${data.lastName}</p><p><strong>Email Address:</strong> ${data.email}</p><p><strong>Phone Number:</strong> ${data.phone}</p><p><strong>Date of Stay (From):</strong> ${data.dateFrom}</p><p><strong>Date of Stay (To):</strong> ${data.dateTo}</p><p><strong>Number of Persons:</strong> ${data.numPersons}</p><p><strong>Number of Rooms:</strong> ${data.numRooms}</p><p><strong>Room Type:</strong> ${data.roomType}</p><p><strong>Additional Information / Special Requests:</strong> ${data.info}</p>`;
    try {
      console.log(emailBody);
      const response = await axios.post('/send_mail', { subject: 'New Booking Request', html: emailBody });
      if (response.status === 200) {
        toast({ title: 'Form Submitted', description: 'Your form has been submitted successfully.', status: 'success', duration: 5000, isClosable: true });
        navigate('/');
      } else {
        toast({ title: 'Submission Failed', description: 'Failed to send the form. Please try again.', status: 'error', duration: 5000, isClosable: true });
      }
    } catch (error) {
      toast({ title: 'Error', description: 'An error occurred while submitting the form. Please try again.', status: 'error', duration: 5000, isClosable: true });
    }
  };

  const navLinks = [
    { name: 'Homepage', path: '/' },
    { name: 'Explore', path: '/explore' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar links={navLinks} />
      <div className="flex-1 flex items-center justify-center bg-cover bg-center pt-20 md:pt-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582549023823-b5984434f8f7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg w-full max-w-2xl mx-auto border border-gray-300 mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800 text-center">Book Your Stay</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div><label htmlFor="first-name" className="block text-gray-800 font-medium mb-1 text-sm">First Name</label><input type="text" name="first-name" id="first-name" className="w-full border border-gray-300 p-1 rounded text-sm" placeholder="John" required /></div>
              <div><label htmlFor="last-name" className="block text-gray-800 font-medium mb-1 text-sm">Last Name</label><input type="text" name="last-name" id="last-name" className="w-full border border-gray-300 p-1 rounded text-sm" placeholder="Doe" /></div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3"><div><label htmlFor="email" className="block text-gray-800 font-medium mb-1 text-sm">Email Address</label><input type="email" name="email" id="email" className="w-full border border-gray-300 p-1 rounded text-sm" placeholder="example@example.com" required /></div><div><label htmlFor="phone" className="block text-gray-800 font-medium mb-1 text-sm">Phone Number</label><input type="tel" name="phone" id="phone" className="w-full border border-gray-300 p-1 rounded text-sm" placeholder="123-456-7890" pattern="[0-9]*" inputMode="numeric" required /></div></div>
              <div><label htmlFor="date-from" className="block text-gray-800 font-medium mb-1 text-sm">Date of Stay (From)</label><DatePicker selected={startDate} onChange={(date) => setStartDate(date as Date)} dateFormat="MMMM d, yyyy" minDate={today} className="w-full border border-gray-300 p-1 rounded text-sm" /></div>
              <div><label htmlFor="date-to" className="block text-gray-800 font-medium mb-1 text-sm">Date of Stay (To)</label><DatePicker selected={endDate} onChange={(date) => setEndDate(date as Date)} dateFormat="MMMM d, yyyy" minDate={startDate ? new Date(startDate.getTime() + 86400000) : today} className="w-full border border-gray-300 p-1 rounded text-sm" /></div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3"><div><label htmlFor="num-persons" className="block text-gray-800 font-medium mb-1 text-sm">Number of Persons</label><input type="number" name="num-persons" id="num-persons" className="w-full border border-gray-300 p-1 rounded text-sm" min={1} max={10} defaultValue={1} required /></div><div><label htmlFor="num-rooms" className="block text-gray-800 font-medium mb-1 text-sm">Number of Rooms</label><input type="number" name="num-rooms" id="num-rooms" className="w-full border border-gray-300 p-1 rounded text-sm" min={1} max={10} defaultValue={1} required /></div></div>
              <div className="md:col-span-2"><label htmlFor="ac-nonac" className="block text-gray-800 font-medium mb-1 text-sm">Room Type</label><select name="ac-nonac" id="ac-nonac" className="w-full border border-gray-300 p-1 rounded text-sm" required><option value="ac">AC</option><option value="non-ac">Non-AC</option></select></div>
              <div className="md:col-span-2"><label htmlFor="info" className="block text-gray-800 font-medium mb-1 text-sm">Additional Information / Special Requests</label><textarea name="info" id="info" className="w-full border border-gray-300 p-1 rounded text-sm" placeholder="Any special requests?" /></div>
            </div>
            <div className="flex justify-center mt-4"><Button type="submit" colorScheme="teal" size="md" width="full">Submit</Button></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
