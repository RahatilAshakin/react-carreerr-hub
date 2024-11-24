const Banner = () => {
    return (
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
  
          {/* Left Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl capitalize font-semibold">One step closer to your dream</h2>
            <p className="mt-2">
              Explore a variety of career opportunities that align with your skills and aspirations. 
              Discover new pathways, unlock your true potential, and embark on a fulfilling journey toward lasting professional success.
            </p>
          </div>
  
          {/* Right Section (Image) */}
          <div className="mt-6 sm:mt-0">
            <img src="/assets/images/user.png" alt="User" className="w-full sm:w-auto sm:h-auto rounded-lg shadow-md" />
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Banner;
  