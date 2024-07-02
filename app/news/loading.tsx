import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-md'>
      <AiOutlineLoading3Quarters className='animate-spin' size='56px' />
    </div>
  );
}
