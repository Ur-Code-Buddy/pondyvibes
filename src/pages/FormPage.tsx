import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Button } from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormPage: React.FC = () => {
  const navigate = useNavigate();
  const today = new Date();
  const [startDate, setStartDate] = useState<Date | null>(today);
  const [endDate, setEndDate] = useState<Date | null>(new Date(today.getTime() + 86400000));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
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
        alert('Form has been submitted');
        navigate('/');
      } else {
        alert('Failed to send the form. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582549023823-b5984434f8f7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto border border-gray-300">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Book Your Stay</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-gray-800 font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-gray-800 font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Doe"
                />
              </div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="example@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-800 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="123-456-7890"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="date-from" className="block text-gray-800 font-semibold mb-2">
                  Date of Stay (From)
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date as Date)}
                  dateFormat="MMMM d, yyyy"
                  minDate={today}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div>
                <label htmlFor="date-to" className="block text-gray-800 font-semibold mb-2">
                  Date of Stay (To)
                </label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date as Date)}
                  dateFormat="MMMM d, yyyy"
                  minDate={startDate ? new Date(startDate.getTime() + 86400000) : today}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="num-persons" className="block text-gray-800 font-semibold mb-2">
                    Number of Persons
                  </label>
                  <input
                    type="number"
                    name="num-persons"
                    id="num-persons"
                    className="w-full border border-gray-300 p-2 rounded"
                    min={1}
                    max={10}
                    defaultValue={1}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="num-rooms" className="block text-gray-800 font-semibold mb-2">
                    Number of Rooms
                  </label>
                  <input
                    type="number"
                    name="num-rooms"
                    id="num-rooms"
                    className="w-full border border-gray-300 p-2 rounded"
                    min={1}
                    max={10}
                    defaultValue={1}
                    required
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="ac-nonac" className="block text-gray-800 font-semibold mb-2">
                  Room Type
                </label>
                <select
                  name="ac-nonac"
                  id="ac-nonac"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                >
                  <option value="ac">AC</option>
                  <option value="non-ac">Non-AC</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="info" className="block text-gray-800 font-semibold mb-2">
                  Additional Information / Special Requests
                </label>
                <textarea
                  name="info"
                  id="info"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Any special requests?"
                />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Button type="submit" colorScheme="teal" size="lg" width="full">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormPage;
