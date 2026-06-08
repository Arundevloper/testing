import React, { useState } from 'react';
import axios from 'axios'


const Form = () => {

    const [data,setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [status, setStatus] = useState('');

    let handleOnChange = (e)=>{
        let {name,value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    let handleOnSubmit = (e)=>{
        e.preventDefault();
        setStatus('Sending message...')
        axios.post('/api/contact',data).then((result)=>{
          setStatus('Message sent successfully!') 
          setData({
            name: '',
            email: '',
            subject: '',
            message: ''
          })     
        }).catch((err)=>{
          console.log(err);    
          setStatus('Failed to send message. Please try again.');      
        })
    }

  return (
    // Replaced large static padding with responsive padding to prevent clipping on laptops
    <div className='min-h-screen py-12 px-4 sm:px-12 lg:px-24 mt-6 flex justify-center items-center'>
      
      {/* Main Container: Split layout using Flexbox */}
      <div className='border border-gray-300 h-auto lg:h-[600px] w-full max-w-7xl flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-sm bg-white'>
        
        {/* LEFT SIDE: YOUR FORM */}
        {/* Explicitly bounding it to a max-width so your form fields look exactly as you designed them */}
        <div className='w-full lg:max-w-[750px] px-6 sm:px-16 py-12 flex flex-col justify-center bg-white'>
          <p className='text-gray-600 text-sm font-semibold tracking-wider'>LEAVE A MESSAGE</p>
          
          {/* Fixed the semantic nesting (h1 shouldn't be inside a div block unless necessary, kept it clean) */}
          <div className='text-3xl sm:text-4xl font-bold mt-4 mb-8 text-gray-900'>
            <h1>We love to hear from you</h1>
          </div>
          
          <form 
            className='flex flex-col' 
            onSubmit={handleOnSubmit}
          >
            {/* Changed from w-[640px] to w-full max-w-[640px] to keep your size but make it safely responsive */}
            <input 
              type="text" 
              name='name'
              placeholder='Your Name' 
              onChange={handleOnChange}
              value={data.name}
              className='border border-gray-300 px-4 py-2 w-full max-w-[640px] rounded focus:outline-none focus:border-black'
            />
            <input 
              type="text" 
              name="email"
              placeholder='E-Mail' 
              onChange={handleOnChange}
              value={data.email}
              className='border border-gray-300 px-4 py-2 w-full max-w-[640px] mt-3 rounded focus:outline-none focus:border-black'
            />
            <input 
              type="text" 
              name='subject'
              placeholder='Subject' 
              onChange={handleOnChange}
              value={data.subject}
              className='border border-gray-300 px-4 py-2 w-full max-w-[640px] mt-3 rounded focus:outline-none focus:border-black'
            />
            <textarea 
              name='message'
              placeholder='Message' 
              onChange={handleOnChange}
              value={data.message}
              className='border border-gray-300 px-4 py-2 w-full max-w-[640px] mt-3 resize-none h-[120px] rounded focus:outline-none focus:border-black'
            ></textarea>
            
            <button 
              type="submit" 
              className='border border-black px-4 py-2 w-[140px] mt-5 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors'
            >
              Submit
            </button>
          </form>

          {status && (
            <p className={`mt-4 text-sm font-semibold ${status.includes('successfully') ? 'text-green-600' : 'text-amber-600'}`}>
              {status}
            </p>
          )}

        </div>        

        {/* RIGHT SIDE: THE NEW PICTURE */}
        {/* flex-1 lets it intelligently grow and fill up whatever empty gap is left on the right side */}
        <div className='hidden lg:block flex-1 bg-gray-100 relative h-full'>
          <img 
            src="https://e-tracking.net/app/img/how-its-works.png" 
            alt="Contact Us Visual" 
            className='w-full h-full '
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
};

export default Form;