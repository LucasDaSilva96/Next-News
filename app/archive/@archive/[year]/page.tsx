import NewsPreviewCard from '@/components/NewsPreviewCard';
import { getNewsByYear } from '@/lib/news';
import { notFound } from 'next/navigation';
import React from 'react';

type YearArchivePageProps = {
  params: { year: string };
};

export default async function YearArchivePage({
  params,
}: YearArchivePageProps) {
  const news = await getNewsByYear(params.year);

  if (!news) {
    return notFound();
  }

  return (
    <section className='w-full h-full'>
      <aside className='container flex items-center flex-wrap gap-4'>
        <NewsPreviewCard news={news} />
      </aside>
    </section>
  );
}
