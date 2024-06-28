const MainBanner = () => (
  <div className="relative bg-gradient-to-br from-green-400 to-blue-500 py-32 text-center overflow-hidden">
    <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm"></div>
    <div className="container mx-auto relative z-10">
      <div className="flex justify-center items-center space-x-4 mb-6">
        <div className="text-6xl font-bold text-white">H</div>
        <div className="text-xl text-green-900">Hope</div>
        <div className="text-6xl font-bold text-white">O</div>
        <div className="text-xl text-green-900">Opportunity</div>
        <div className="text-6xl font-bold text-white">W</div>
        <div className="text-xl text-green-900">Work</div>
      </div>
      <h2 className="text-3xl font-bold mb-8 text-white shadow-text">장애인을 위한 나만의 취업 로드맵</h2>
      <button className="bg-white bg-opacity-20 text-white px-6 py-2 rounded-full hover:bg-opacity-30 transition backdrop-filter backdrop-blur-sm">
        시작하기
      </button>
    </div>
  </div>
);

export default MainBanner
