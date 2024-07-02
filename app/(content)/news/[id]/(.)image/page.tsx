import BackBtn from '@/components/BackBtn';
import BackSection from '@/components/BackSection';
import { getNewsById } from '@/lib/news';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: { id: string };
};

export default async function FullScreenInterceptedImagePage({
  params,
}: Props) {
  const newsItem = await getNewsById(params.id);

  if (!newsItem) {
    return notFound();
  }

  return (
    <BackSection>
      <section className='w-screen h-screen py-2 px-2 flex flex-col items-center gap-4 fixed inset-0 backdrop-blur-md'>
        <div className='rounded-lg w-full h-full relative'>
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            priority
            loading='eager'
            className='h-auto w-auto object-contain'
          />
        </div>
        <BackBtn />
      </section>
    </BackSection>
  );
}
