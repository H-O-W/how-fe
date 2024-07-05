const MainBanner = () => (
  <div className="relative bg-gradient-to-br from-green-400 to-blue-500 py-32 overflow-hidden">
    <div className="container mx-auto relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in-up">
            <span className="">H</span>
            <span className=" mt-2">O</span>
            <span className=" mt-2">W</span>
            <span className="text-sm opacity-75">Hope Opportunity Work</span>
          </h1>
          <p className="text-xl text-green-100 mb-6 animate-fade-in-up animation-delay-300">
            장애인을 위한 나만의 취업 로드맵
          </p>
          <button className="bg-white text-green-600 px-6 py-2 rounded-full hover:bg-green-100 transition animate-fade-in-up animation-delay-600">
            시작하기
          </button>
        </div>
        <div className="md:w-1/2 relative ">
          {/* <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-full animate-pulse"></div>
          <div className="relative z-10 text-center">
            <p className="text-2xl font-semibold text-white mb-4 animate-fade-in-up animation-delay-300">
              Hope
            </p>
            <p className="text-2xl font-semibold text-white mb-4 animate-fade-in-up animation-delay-450">
              Opportunity
            </p>
            <p className="text-2xl font-semibold text-white animate-fade-in-up animation-delay-600">
              Work
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </div>
);
export default MainBanner;
