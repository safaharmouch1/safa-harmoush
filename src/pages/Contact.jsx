import React from 'react';

function Contact() {
  return (
    <div className='p-8 max-w-3xl mx-auto'>
        <h1 className='text-3xl text-blue-600 font-bold'>Contact Us</h1>

        <form className='mt-6 bg-white p-6 shadow-md rounded-xl space-y-4'>
            <input type='text' placeholder='Full Name'
            className='w-full p-3 border rounded-md'/>

            <input type='email' placeholder='Email'
            className='w-full p-3 border rounded-md'/>

            <textarea rows='5' placeholder='Message'
            className='w-full p-3 border ronded-md'>

            </textarea>

            <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700'>
                Send
            </button>
        </form>
    </div>
  );
}

export default Contact;
