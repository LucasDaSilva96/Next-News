'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function BackBtn() {
  const router = useRouter();
  return (
    <button className='btn btn-primary btn-sm' onClick={() => router.back()}>
      Back
    </button>
  );
}
