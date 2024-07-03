import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
  return (
    <p className='flex items-center gap-2 text-primary font-medium'>
      Loading
      <span className='animate-spin'>
        <AiOutlineLoading3Quarters />
      </span>
    </p>
  );
}
