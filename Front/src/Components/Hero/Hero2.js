const Hero2 = () => {
  return (
    <>
      <section className=" mt-4 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div
          id="container1"
          className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full
          xl:mr-0 2xl:col-span-2"
        >
          <div id="containerXL" className="xl:max-w-xl">
            <img
              src="https://www.iamsterdam.com/media/locations-ndtrc/shopping/red-light-records-amsterdam-gary-jones-via-facebook.jpg?w=977"
              alt="work"
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover
            object-center lg:hidden"
            />
            <h1
              className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl
          xl:text-4xl"
            >
              Welcome to your Record Shop <br className="hidden lg:block" />
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <div className="mt-4 sm:mt-6 sm:text-base">
              <button
                className="inline-block px-5 py-3 rounded-lg 
                transform transition bg-blue-500 hover:bg-blue-400
                hover:-translate-y-0.5 focus:ring-indigo-500 
                focus:ring-opacity-50 focus:outline-none 
                focus:ring focus:ring-offset-2 
                active:bg-teal-500 uppercase tracking-wider 
                font-semibold text-sm text-white shadow-lg sm:text-base"
              >
                Start Shopping
              </button>
            </div>
          </div>
        </div>
        <div
          id="container2"
          className="hidden bg-gradient-to-tr from-blue-500 to-teal-400  relative lg:block  2xl:col-span-3 "
        >
          <img
            src="https://www.iamsterdam.com/media/locations-ndtrc/shopping/red-light-records-amsterdam-gary-jones-via-facebook.jpg?w=977"
            alt="beach"
            className="mix-blend-overlay  absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>
    </>
  );
};

export default Hero2;
