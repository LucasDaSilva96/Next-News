import React from 'react';
import { getNews, News } from '@/lib/news';
import NewsPreviewCard from '@/components/NewsPreviewCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next News - A News Site For The Next Generation',
  description:
    'NextNews aims to provide you with the latest news in a concise and unbiased manner. We strive to deliver the news in a way that is easy to understand and to the point.',
};

export default async function NewsPage() {
  const news = (await getNews()) as News[];
  return (
    <section className='w-full h-full'>
      <aside className='container flex items-center flex-wrap gap-4'>
        <NewsPreviewCard news={news} />
      </aside>
    </section>
  );
}
