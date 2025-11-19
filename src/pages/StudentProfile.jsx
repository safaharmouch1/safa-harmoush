import React from 'react';
import { useParams } from 'react-router-dom';
import students from "../data/students";

function StudentProfile() {
    const {id} = useParams();
    const student = students.find((s) => s.id === parseInt(id));

    if (!student) return <h1 className='text-center text -xl mt-10'>Student not found</h1>;

  return (
    <div className='max-w-4xl mx-auto p-8'>
        <div className='flex gap-8 items-center'>
            <img src={student.photo} alt='profile'
            className='w-40 h-40 rounded-full object-cover shadow-md'/>


            <div>
                <h1 className='ext-3xl font-bold text-blue-600'>{student.name}</h1>
                <p className='text-gray-600 mt-2'>{student.email}</p>
            </div>
        </div>

        <h2 className='text-2xl font-bold text-blue-500 mt-8'>Enrolled Courses</h2>
        <ul className='list-disc ml-6 mt-2 text-lg'>{student.courses.map((c,index) => (<li key={index}>{c}</li>))}
        </ul>

        <h2 className='text-2xl font-bold text-blue-500 mt-8'>Grades</h2>
        <ul className='list-disc ml-6 mt-2 text-lg'>{student.grades.map((g,index) => (<li key={index}>{g.course}:{g.grade}</li>))}
        </ul>
      
    </div>
  );
}

export default StudentProfile;
