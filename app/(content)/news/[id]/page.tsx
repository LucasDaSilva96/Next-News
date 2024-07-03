import Image from 'next/image';
import React from 'react';
import BackBtn from '@/components/BackBtn';
import { notFound } from 'next/navigation';
import { getNewsById } from '@/lib/news';
import Link from 'next/link';
import MotionDiv from '@/components/MotionDiv';
import ArticleDetailFramerMotion from '@/components/ArticleDetailFramerMotion';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props) {
  const news = await getNewsById(params.id);

  if (!news) return notFound();

  return {
    title: news.title,
    description:
      news.content.length > 100
        ? `${news.content.slice(0, 100)}...`
        : news.content,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const newsID = params.id;
  const news = await getNewsById(newsID);

  if (!news) {
    return notFound();
  }

  return <ArticleDetailFramerMotion news={news} newsID={newsID} />;
}
