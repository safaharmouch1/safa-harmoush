import React from 'react';
import courses from '../data/courses'
import CourseCard from "../components/CourseCard";

function Courses() {
  return (
    <div className='p-8 max-w-6xl mx-auto'>
        <h1 className='text-3xl text-blue-600 font-bold'>Available Courses</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-6'>
            {courses.map((course) => (<CourseCard key={course.id}course={course}/>))}
        </div>
      
    </div>
  );
}

export default Courses;
