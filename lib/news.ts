import sql from 'better-sqlite3';

export type News = {
  id: string | number;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
};

const db = sql('data.db');

export const getNews = async () => {
  const news = db.prepare('SELECT * FROM news').all();
  await new Promise((resolve) => setTimeout(resolve, 500));

  return news;
};

export const getLatestNews = async () => {
  const latestNews = db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all();
  await new Promise((resolve) => setTimeout(resolve, 500));
  return latestNews;
};

export const getAllNewsYears = async () => {
  const news = db.prepare('SELECT * FROM news').all() as News[];
  const data = Array.from(
    new Set(news.map((news) => new Date(news.date).getFullYear()))
  );
  await new Promise((resolve) => setTimeout(resolve, 500));

  return data.sort((a, b) => b - a);
};

export const getNewsByYear = async (year: number | string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const news = db.prepare('SELECT * FROM news').all() as News[];

  return news.filter(
    (news) => new Date(news.date).getFullYear().toString() === year.toString()
  );
};

export const getNewsById = async (id: string) => {
  const news = db.prepare('SELECT * FROM news').all() as News[];

  await new Promise((resolve) => setTimeout(resolve, 500));
  return news.find((news) => news.id === Number(id)) || null;
};

export const getAvailableMonths = async (year: number | string) => {
  const news = db.prepare('SELECT * FROM news').all() as News[];

  const data = Array.from(
    new Set(
      news
        .filter(
          (news) =>
            new Date(news.date).getFullYear().toString() === year.toString()
        )
        .map((news) => new Date(news.date).getMonth())
    )
  );
  await new Promise((resolve) => setTimeout(resolve, 500));

  return data.sort((a, b) => b - a);
};

export const getAvailableNewsYears = async () => {
  const news = db.prepare('SELECT * FROM news').all() as News[];
  const data = Array.from(
    new Set(news.map((news) => new Date(news.date).getFullYear()))
  );
  await new Promise((resolve) => setTimeout(resolve, 500));

  return data.sort((a, b) => b - a);
};

export const getNewsForYearAndMonth = async (
  year: string | number,
  month: string | number
) => {
  const news = db.prepare('SELECT * FROM news').all() as News[];
  await new Promise((resolve) => setTimeout(resolve, 500));
  return news.filter(
    (news) =>
      new Date(news.date).getFullYear().toString() === year.toString() &&
      new Date(news.date).getMonth().toString() === month.toString()
  );
};
