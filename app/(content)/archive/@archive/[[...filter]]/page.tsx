import NewsPreviewCard from '@/components/NewsPreviewCard';
import {
  getAllNewsYears,
  getAvailableMonths,
  getAvailableNewsYears,
  getNewsByYear,
  getNewsForYearAndMonth,
} from '@/lib/news';
import React from 'react';
import Link from 'next/link';
import BackBtn from '@/components/BackBtn';
type YearArchivePageProps = {
  params: { filter: string[] };
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default async function FilteredNewsPage({
  params,
}: YearArchivePageProps) {
  const filter = params.filter;

  const selectedYear = filter?.length > 0 ? filter[0] : undefined;
  const selectedMonth = filter?.length > 1 ? filter[1] : undefined;
  const years = await getAvailableNewsYears();
  let months = undefined;

  let links = await getAllNewsYears();

  let news = undefined;

  if (selectedYear && !selectedMonth) {
    news = await getNewsByYear(filter[0]);
    links = await getAvailableMonths(selectedYear);
    months = await getAvailableMonths(selectedYear);
  } else if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  if (
    (selectedYear && !years.includes(parseInt(selectedYear))) ||
    (selectedMonth && months?.includes(parseInt(selectedMonth)))
  ) {
    throw new Error('Invalid filter');
  }

  return (
    <>
      <header>
        <nav>
          <ul className='flex items-center flex-wrap gap-3'>
            {!selectedYear ? (
              links.map((link) => (
                <Link href={`/archive/${link}`} key={link}>
                  {link}
                </Link>
              ))
            ) : selectedYear && !selectedMonth ? (
              <>
                <BackBtn />
                {links.map((link) => (
                  <Link href={`/archive/${selectedYear}/${link}`} key={link}>
                    {MONTHS[link]}
                  </Link>
                ))}
              </>
            ) : (
              <BackBtn />
            )}
          </ul>
        </nav>
      </header>

      {news && (
        <section className='w-full h-full'>
          <aside className='container flex items-center flex-wrap gap-4'>
            <NewsPreviewCard news={news} />
          </aside>
        </section>
      )}
    </>
  );
}
