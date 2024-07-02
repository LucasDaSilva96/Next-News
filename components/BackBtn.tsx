'use client';
import Link from 'next/link';
import React from 'react';

type Props = {
  url: string;
};

export default function BackBtn({ url }: Props) {
  return (
    <Link href={url} className='btn btn-primary'>
      Back
    </Link>
  );
}
