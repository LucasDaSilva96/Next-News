import React from 'react';
import { getNews } from '@/lib/news';
import NewsPreviewCard from '@/components/NewsPreviewCard';

export default async function NewsPage() {
  const news = await getNews();
  return (
    <section className='w-full h-full'>
      <aside className='container flex items-center flex-wrap gap-4'>
        <NewsPreviewCard news={news} />
      </aside>
    </section>
  );
}
