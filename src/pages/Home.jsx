import React from 'react';
import student from "../data/students";

function Home() {
  return (
    <div className='text-center py-16 px-6'>
        <h1 className='text-4xl font-bold text-blue-700'>Welcome to the Student Portal</h1>


        <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>Manage student, courses, and academic information easily with our UI system</p>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            <div className='p-6 bg-white shadow-md rounded-xl'>
                <h2 className='text-gray-700 mt-2'>{students.lenght}</h2>
                <p className='text-gray-700 mt-2'>Registered Students</p>
            </div>

            <div className='p-6 bg-white shadow-md rounded-xl'>
                <h2 className='text-3xl text-blue-600 font-bold'>12</h2>
                <p className='text-gray-700 mt-2'>Available Courses</p>


            </div>

            <div className='p-6 bg-white shadow-md rounded-xl'>
                <h2 className='text-3xl text-blue-600 font-bold'>100%</h2>
                <p className='text-gray-700 mt-2'>Responsive UI</p>

            </div>
        </div>
      
    </div>
  );
}

export default Home;
