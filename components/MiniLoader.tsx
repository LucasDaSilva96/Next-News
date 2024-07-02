import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function MiniLoader() {
  return (
    <div className='z-50 flex items-center justify-center w-full h-full bg-transparent backdrop-blur-md'>
      <AiOutlineLoading3Quarters className='animate-spin' size='36px' />
    </div>
  );
}
