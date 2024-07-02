import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <section className='w-full h-full'>
      <aside className='container flex flex-col gap-3'>
        <Link href='/news/news1'>News page 1</Link>
        <Link href='/news/news2'>News page 2</Link>
        <Link href='/news/news3'>News page 3</Link>
      </aside>
    </section>
  );
}
