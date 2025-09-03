function Contact() {
  return (
    <main className='flex flex-col items-center justify-center min-h-[70vh] bg-white'>
      <div className='max-w-lg w-full bg-white rounded-xl shadow p-8 mt-8'>
        <h1 className='text-3xl font-bold text-red-500 mb-4 text-center'>
          Contact Us
        </h1>
        <p className='text-gray-700 mb-6 text-center'>
          If you have any questions, feedback, or need support, please fill out
          the form below or email us at{" "}
          <a
            href='mailto:support@micommerce.com'
            className='text-red-500 underline'
          >
            support@micommerce.com
          </a>
          .
        </p>
        <form className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Your Name'
            className='border rounded px-4 py-2'
            required
          />
          <input
            type='email'
            placeholder='Your Email'
            className='border rounded px-4 py-2'
            required
          />
          <textarea
            placeholder='Your Message'
            className='border rounded px-4 py-2'
            rows={4}
            required
          />
          <button
            type='submit'
            className='bg-red-500 text-white font-semibold px-6 py-2 rounded hover:bg-red-600 transition'
          >
            Send Message
          </button>
        </form>
        <div className='mt-6 text-center text-gray-500 text-sm'>
          <p>Phone: (+250) 398-456-789</p>
          <p>Address: 123 Food St, Kigali, Rwanda</p>
        </div>
      </div>
    </main>
  );
}

export default Contact;
