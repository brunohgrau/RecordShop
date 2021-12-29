const Footer = () => {
  return (
    <div className="relative py-12 bg-gradient-to-br from-gray-100 to-gray-300 text-gray-600">
      {/*   <!-- circles --> */}
      {/*  <div className="absolute top-0 left-0 transform translate-y-6 translate-x-6">
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 opacity-50"></div>
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 opacity-50 ml-12"></div>
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-red-100 to-red-200 opacity-50 ml-6 mt-12"></div>
      </div>
 */}
      <div className="relative container mx-auto px-10">
        {/*   <!-- top footer --> */}
        <div className="lg:flex justify-center space-y-12 lg:space-y-0">
          {/*   <!-- newsletter --> */}
          <div className="flex flex-col justify-center">
            <h4 className="mb-4 font-bold text-2xl lg:text-5xl text-gray">
              Sign Up To Our Newsletter
            </h4>
            <form action="" method="POST" className="flex">
              <input
                type="email"
                name="email"
                placeholder="email@server.com"
                className="w-full p-3 rounded-l outline-none border-2 border-r-0 border-gray-400  placeholder-gray-300"
              />
              <button className="p-3 bg-gray-400 text-gray-100 rounded-r">
                Subscribe
              </button>
            </form>
          </div>
          {/* <!-- links --> */}
        </div>

        {/* <!-- bottom footer --> */}
        <div className="pt-4 mt-16 md:flex justify-between border-t border-gray-300 text-sm text-center md:text-left space-y-4 md:space-y-0">
          {/*     <!-- copyright --> */}
          <div>Copyright &copy; 2021</div>
          {/*   <!-- links --> */}
          <div className="space-x-4">
            <a href="#">Discord</a>
            <a href="https://twitter.com/chris__sev">Twitter</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
