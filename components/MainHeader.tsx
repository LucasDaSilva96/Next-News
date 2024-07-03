'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/Next-News.png';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function MainHeader() {
  const path = usePathname();

  return (
    <motion.header
      className='navbar bg-zinc-800/30 flex items-center justify-around w-full shadow-sm shadow-zinc-200/30'
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
    >
      <Link href='/' className='font-normal flex items-center gap-1 italic'>
        <Image
          src={logo}
          width={36}
          height={36}
          priority
          alt='NextNews Logo'
          loading='eager'
        />
      </Link>

      <Link
        href='/archive'
        className={`transition-all border-b border-transparent font-normal will-change-auto hover:opacity-100 ${
          path.startsWith('/archive')
            ? 'font-black text-primary border-primary'
            : 'opacity-85'
        }`}
      >
        Archive
      </Link>

      <Link
        href='/news'
        className={`transition-all border-b border-transparent font-normal will-change-auto hover:opacity-100 ${
          path.startsWith('/news')
            ? 'font-black text-primary border-primary'
            : 'opacity-85'
        }`}
      >
        News
      </Link>
    </motion.header>
  );
}
