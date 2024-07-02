import BackBtn from '@/components/BackBtn';
import BackSection from '@/components/BackSection';
import { getNewsById } from '@/lib/news';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: { id: string };
};

export default async function FullScreenImagePage({ params }: Props) {
  const newsItem = await getNewsById(params.id);

  if (!newsItem) {
    return notFound();
  }

  return (
    <BackSection>
      <section className='w-full  py-2 px-2 flex flex-col items-center gap-4'>
        <div className='rounded-lg w-full min-h-[70dvh] relative'>
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
