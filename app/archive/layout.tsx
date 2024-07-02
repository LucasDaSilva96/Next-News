import React from 'react';

type Props = {
  archive: React.ReactNode;
  latest: React.ReactNode;
};

export default function ArchiveLayout({ archive, latest }: Props) {
  return (
    <div className='w-full h-full flex flex-col items-center gap-4'>
      <h1 className='text-center font-bold text-3xl py-4'>News Archive</h1>
      <div className='flex w-full max-w-[600px] flex-col'>
        <section className='card bg-base-300 rounded-box flex flex-col gap-2 items-center py-2'>
          {archive}
        </section>
        <div className='divider'>OR</div>
        <section className='card bg-base-300 rounded-box flex flex-col gap-2 items-center py-2'>
          {latest}
        </section>
      </div>
    </div>
  );
}
