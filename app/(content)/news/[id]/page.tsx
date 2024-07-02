import Image from 'next/image';
import React from 'react';
import BackBtn from '@/components/BackBtn';
import { notFound } from 'next/navigation';
import { getNewsById } from '@/lib/news';
import Link from 'next/link';

type Props = {
  params: { id: string };
};

export default async function NewsDetailPage({ params }: Props) {
  const newsID = params.id;
  const news = await getNewsById(newsID);

  if (!news) {
    return notFound();
  }

  return (
    <div className='card lg:card-side bg-base-100 shadow-xl'>
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
    </div>
  );
}
