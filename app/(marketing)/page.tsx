import HeroSection from '@/components/HeroSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next News - A News Site For The Next Generation',
  description:
    'NextNews aims to provide you with the latest news in a concise and unbiased manner. We strive to deliver the news in a way that is easy to understand and to the point.',
};

export default function HomePage() {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <HeroSection />
    </div>
  );
}
