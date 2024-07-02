'use client';

import Link from 'next/link';
import React from 'react';

export default function MainHeader() {
  return (
    <header className='navbar flex items-center justify-around w-full'>
      <Link href='/'>NextNews</Link>

      <Link href='/archive'>Archive</Link>

      <Link href='/news'>News</Link>
    </header>
  );
}
