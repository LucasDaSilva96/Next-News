import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { News } from '@/lib/news';

type Props = {
  news: News[];
};

export default function NewsPreviewCard({ news }: Props) {
  return (
    <aside className='container flex items-center flex-wrap gap-4 w-full'>
      {news.map((news) => (
        <Link key={news.id} href={`/news/${news.id}`}>
          <div className='card lg:card-side bg-base-100 shadow-xl'>
            <figure>
              <Image
                src={news.image}
                alt={news.title}
                width={150}
                loading='eager'
                height={150}
                priority
                className='w-[250px] h-auto'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{news.title}</h2>
              <p className='w-[300px]'>
                {news.content.split(' ').slice(0, 15).join(' ')}... <br />
                <time className='font-light text-sm' dateTime={news.date}>
                  {news.date}
                </time>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </aside>
  );
}
