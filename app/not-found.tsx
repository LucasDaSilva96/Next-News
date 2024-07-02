import BackBtn from '@/components/BackBtn';
import React from 'react';

export default function NotFoundPage() {
  return (
    <section className='w-full h-full flex items-center justify-center'>
      <div className='card bg-base-100 w-96 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>404 Not found</h2>
          <p>The request resource was not found</p>
          <div className='card-actions justify-center'>
            <BackBtn url='/' />
          </div>
        </div>
      </div>
    </section>
  );
}
