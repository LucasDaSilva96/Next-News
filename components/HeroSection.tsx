'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import React from 'react';

export default function HeroSection() {
  return (
    <motion.div
      className='hero-content text-neutral-content text-center backdrop-blur-[1px] rounded-sm shadow-md'
      initial={{ y: -200, opacity: 0, scale: 0.5 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <div className='max-w-lg flex flex-col gap-3'>
        <h1 className='mb-5 text-3xl font-bold'>
          A News Site For The Next Generation
        </h1>
        <div className='prose text-slate-50 font-medium'>
          <p>
            Next News is here to deliver you all the latest news - concise &
            unbiased!
          </p>
          <p>
            NextNews aims to provide you with the latest news in a concise and
            unbiased manner. We strive to deliver the news in a way that is easy
            to understand and to the point. We want to keep you informed without
            overwhelming you with unnecessary information.
          </p>

          <p>
            We employ a team of dedicated journalists who are committed to
            delivering the news in a fair and unbiased manner. Our team is
            passionate about keeping you informed and up to date with the latest
            news.
          </p>
        </div>

        <Link
          href='/news'
          className='px-6 py-2 font-medium bg-primary max-w-fit self-center text-white  transition-all shadow-[3px_3px_0px_grey] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-md '
        >
          Get Started
        </Link>
      </div>
    </motion.div>
  );
}
