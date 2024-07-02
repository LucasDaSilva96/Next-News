import DUMMY_NEWS from '@/data/dummy.json';

export const getNews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return DUMMY_NEWS.news;
};

export const getLatestNews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return DUMMY_NEWS.news.slice(0, 3);
};

export const getAllNewsYears = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = Array.from(
    new Set(DUMMY_NEWS.news.map((news) => new Date(news.date).getFullYear()))
  );

  return data.sort((a, b) => b - a);
};

export const getNewsByYear = async (year: number | string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return DUMMY_NEWS.news.filter(
    (news) => new Date(news.date).getFullYear().toString() === year.toString()
  );
};

export const getNewsById = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return DUMMY_NEWS.news.find((news) => news.id === id);
};
