import Link from 'next/link';

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
      <div className='hero-content text-neutral-content text-center backdrop-blur-[1px] rounded-sm shadow-md'>
        <div className='max-w-lg'>
          <h1 className='mb-5 text-3xl font-bold'>
            A News Site For The Next Generation
          </h1>
          <div className='prose text-slate-50 font-medium'>
            <p>
              Next News is here to deliver you all the latest news - concise &
              unbiased!
            </p>
            <p>
              NextNews aims to provide you with the latest news in a concise and
              unbiased manner. We strive to deliver the news in a way that is
              easy to understand and to the point. We want to keep you informed
              without overwhelming you with unnecessary information.
            </p>

            <p>
              We employ a team of dedicated journalists who are committed to
              delivering the news in a fair and unbiased manner. Our team is
              passionate about keeping you informed and up to date with the
              latest news.
            </p>
          </div>

          <Link href='/news' className='btn btn-primary btn-md mt-4'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
