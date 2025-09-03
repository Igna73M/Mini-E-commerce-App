function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-[70vh] bg-white'>
      <div className='max-w-2xl text-center py-12'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-red-500 mb-4'>
          Welcome to MiCommerce
        </h1>
        <p className='text-lg md:text-xl text-gray-700 mb-6'>
          Discover delicious desserts, pancakes, waffles, noodles, and more!
          <br />
          Order your favorite treats and get them delivered fast.
        </p>
        <a
          href='/products'
          className='inline-block bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-red-600 transition'
        >
          Shop Now
        </a>
      </div>
      <div className='flex flex-wrap justify-center gap-6 mt-8'>
        <img
          src='/images/1.jpg'
          alt='Waffle'
          className='w-40 h-40 object-cover rounded-xl shadow'
        />
        <img
          src='/images/2.jpg'
          alt='Pancake'
          className='w-40 h-40 object-cover rounded-xl shadow'
        />
        <img
          src='/images/3.jpg'
          alt='Noodles'
          className='w-40 h-40 object-cover rounded-xl shadow'
        />
        <img
          src='/images/4.jpg'
          alt='Pasta'
          className='w-40 h-40 object-cover rounded-xl shadow'
        />
      </div>
    </main>
  );
}

export default Home;
