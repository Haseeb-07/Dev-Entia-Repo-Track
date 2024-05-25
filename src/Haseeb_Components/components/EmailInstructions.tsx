import React from 'react';
import circle from '../../images/assets/ovallaptop.png';
import lock from '../../images/assets/lock.png';
import button from '../../images/assets/sendinstructions.png';

const EmailInstructions: React.FC = () => {
  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left Column */}
      <div className="hidden lg:flex bg-[#090D28] text-white p-4">
        <h1 className="text-2xl mb-4 text-orange-500">Vizlah</h1>
        <div className="flex flex-grow items-center justify-center">
          <img src={circle} alt="Brand Logo" className="max-w-full h-auto lg:max-w-md" />
        </div>
      </div>
      
      {/* Right Column */}
      <div className="bg-[#181C3A] flex flex-col items-center justify-center p-8 text-white shadow-lg relative h-screen">
        {/* Email Instruction Section */}
        <div className="w-full max-w-sm lg:max-w-md">
          <img className='h-12 mb-4' src={lock} alt="lock" />
          <h2 className="text-3xl mb-6 text-left">Email instruction sent</h2>
          <p className="text-sm mb-6 text-left">Please follow the reset instructions in the email we sent to the following address: Yourname@gmail.com</p>
          
          {/* Resend Button */}
          <form className="w-full">
            <div className="mb-4">
              <button type="submit" className="cursor-pointer">
                <img src={button} alt="Resend Instructions Button" />
              </button>
            </div>
          </form>
        </div>
        
        {/* Sign Up Text */}
        <p className="mt-4 text-center text-green-500 lg:absolute lg:top-0 lg:right-0 lg:mt-4 lg:mr-4 lg:text-right">Don’t have an account? Sign Up</p>
      </div>
    </div>
  );
}

export default EmailInstructions;
