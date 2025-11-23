import React from 'react';
import {Link} from 'react-router-dom';

function StudentCard({student}) {
  const avatar = student.photo || 'https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=0D8ABC&color=fff&size=256';
  return (
    <div className='bg-white shadow-md rounded-xl p-4 text-center hover:shadow-xl transition'> 
    <imag
        src={avatar}
        alt={'${student.name} avatar'}
        className="w-24 h-24 rounded-full mx-auto object-cover" 
        onError={(e) => {
          e.currentTaeget.src = 'https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=6EE7B7&color=000&size=256'
        }}
        />
        
        <h2 className='mt-4 text-xl font-bold'>{student.name}</h2>

        <Link
        to={'/students/${student.id}'}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
        >
            View Profile
         </Link>
     </div>
         
      
    
  );
}

export default StudentCard;
