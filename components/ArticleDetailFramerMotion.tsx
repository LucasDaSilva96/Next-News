'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { News } from '@/lib/news';
import BackBtn from './BackBtn';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  news: News;
  newsID: string;
};
export default function ArticleDetailFramerMotion({ news, newsID }: Props) {
  return (
    <motion.div
      className='card lg:card-side bg-base-100 shadow-xl'
      initial={{ x: '-100vw', opacity: 0, scale: 0.4 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: '100vw', opacity: 0, scale: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <figure>
        <Link href={`/news/${newsID}/image`}>
          <Image
            src={news.image}
            height={300}
            width={300}
            alt={news.title}
            loading='eager'
            priority
            className='w-[400px] h-auto'
          />
        </Link>
      </figure>
      <div className='card-body text-center prose'>
        <h2>{news.title}</h2>
        <p>{news.content}</p>
        <div className='card-actions justify-end'>
          <BackBtn />
        </div>
      </div>
    </motion.div>
  );
}
