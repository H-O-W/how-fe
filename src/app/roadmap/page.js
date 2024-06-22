import DetailDataForm from "../Components/DetailDataForm";

const RoadMapPage = () => {
  return (
    <section className="bg-white h-screen flex flex-col justify-center items-center">
      <div>
        <div className="text-xl">로드맵을 생성하기 위해서는 아래 정보가 필요해요</div>
      </div>
      <DetailDataForm />
    </section>
  );
};

export default RoadMapPage;
