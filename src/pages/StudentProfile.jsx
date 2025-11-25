import React from 'react';
import {Link , useParams } from 'react-router-dom';
import students from "../data/students";


function StudentProfile() {
    const {id} = useParams();
    const student = students.find((s) => s.id === parseInt(id));

    if (!student) return <h1 className='text-center text -xl mt-10'>Student not found</h1>;
    const avatar = student.photo || 'https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=0D8ABC&color=fff&size=512'

  return (
    <div className='max-w-4xl mx-auto p-8'>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
            <img 
            src={'${student.name} avatar'}
            alt='student'
            className='w-40 h-40 rounded-full object-cover shadow-md'
            onError={(e) => {
              e.currentTarget.src = 'https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=6EE7B7&color=000&size=512';
            }}
            />


            <div>
                <h1 className='ext-3xl font-bold text-blue-600'>{student.name}</h1>
                <p className='text-gray-600 mt-2'>{student.email}</p>
            </div>
        </div>

        <h2 className='text-2xl font-bold text-blue-500 mt-8'>Enrolled Courses</h2>
        <ul className='list-disc ml-6 mt-2 text-lg'>
          {student.courses.map((c,index) => 
            (<li key={index}>{c}</li>))}
        </ul>

        <h2 className='text-2xl font-bold text-blue-500 mt-8'>Grades</h2>
        <ul className='list-disc ml-6 mt-2 text-lg'>
          {student.grades.map((g,index) => (
            <li key={index}>{g.course}:{g.grade}</li>
            ))}
        </ul>
      
    </div>
  );
}

export default StudentProfile;
