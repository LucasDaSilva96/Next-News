'use client';

import Link from 'next/link';
import React from 'react';

export default function MainHeader() {
  return (
    <header className='navbar bg-primary navbar-center'>
      <Link href='/'>Home</Link>
      <Link href='/news' className='ml-auto'>
        News
      </Link>
    </header>
  );
}
