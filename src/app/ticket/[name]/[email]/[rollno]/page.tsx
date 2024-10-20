// src/app/ticket/[name]/[email]/[rollno]/page.tsx
"use client"
import { useParams } from 'next/navigation'; // Import useParams for dynamic routing
import React from 'react';

const Page = () => {
  const params = useParams(); // Get params from the URL
  const { name, email, rollno } = params;  // Destructure the parameters

  return (
    <div className='w-full h-screen flex flex-col gap-3 items-center justify-center shadow-xl shadow-yellow-50'>
      <div className=' border  p-4 rounded-lg'>
        <h1 className=' text-4xl text-red-600'>View Ticket</h1>
        <p className=' text-md underline'>Your ticket details are below:</p>
      </div>
      <div className='bg-white text-black p-4 rounded-sm border-4 border-red-600'>
      <h1>User Details</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Roll Number:</strong> {rollno}</p> 
      </div>
      <p className=' text-xs text-red-900'>you are verified if this matches with your i card details</p>
    </div>
  );
};

export default Page;
