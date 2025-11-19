import React from 'react';
import {Link} from 'react-router-dom';

function StudentsCard({student}) {
  return (
    <div className='bg-white shadow-md rounded-xl p-4 text-center hover:shadow-xl transition'>
        <img src={student.photo} className='-24 h-24 rounded-full mx-auto' alt="" />
        <h2 className='mt-4 text-xl font-bold'>{students.name}</h2>

        <Link>
        to={/students/${student.id}}
        className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md'>
            View Profile
         </Link>
      
    </div>
  );
}

export default StudentsCard;
