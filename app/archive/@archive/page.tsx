import { getAllNewsYears } from '@/lib/news';
import Link from 'next/link';
import React from 'react';

export default async function ArchivePage() {
  const links = await getAllNewsYears();

  return (
    <header>
      <nav>
        <ul className='flex flex-col gap-2'>
          {links.map((link) => (
            <Link href={`/archive/${link}`} key={link}>
              {link}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
