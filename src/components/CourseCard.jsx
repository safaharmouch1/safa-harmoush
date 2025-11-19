import React from 'react';

function CourseCard({course}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h1 className='text-xl font-bold text-blue-600'>{course.title}</h1>
        <p className='text-gray-700 mt-2'>{course.descrition}</p>
      
    </div>
  );
}

export default CourseCard;
