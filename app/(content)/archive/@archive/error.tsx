'use client';
import BackBtn from '@/components/BackBtn';
import React from 'react';

type Props = {
  error: { message: string };
};

export default function Error({ error }: Props) {
  return (
    <section className='w-full h-full flex items-center justify-center'>
      <div className='card bg-base-100 w-96 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>Error!</h2>
          <p>{error.message}</p>
          <div className='card-actions justify-center'>
            <BackBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
