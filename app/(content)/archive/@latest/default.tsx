import NewsPreviewCard from '@/components/NewsPreviewCard';
import { getLatestNews, News } from '@/lib/news';
import React from 'react';

export default async function DefaultLatestPage() {
  const latestNews = (await getLatestNews()) as News[];

  if (!latestNews || latestNews.length === 0)
    return (
      <h1 className='text-center text-2xl font-semibold'>No news found</h1>
    );

  return <NewsPreviewCard news={latestNews} />;
}
