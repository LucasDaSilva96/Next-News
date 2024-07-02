'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function BackSection({ children }: Props) {
  const router = useRouter();
  return (
    <div className='z-50 cursor-pointer' onClick={() => router.back()}>
      {children}
    </div>
  );
}
