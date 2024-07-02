'use client';

import Link from 'next/link';
import React from 'react';

export default function MainHeader() {
  return (
    <header className='navbar navbar-center'>
      <Link className='py-1 px-1' href='/'>
        NextNews
      </Link>
      <Link className='py-1 px-1 ml-auto' href='/news'>
        News
      </Link>
    </header>
  );
}
