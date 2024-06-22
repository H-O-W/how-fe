import DetailDataForm from "../Components/DetailDataForm";

const RoadMapPage = () => {
  return (
    <section className="bg-white h-screen flex flex-col justify-center items-center">
      <div>
        <div>로드맵을 생성하기 위한 정보를 입력해주세요.</div>
      </div>
      <DetailDataForm />
    </section>
  );
};

export default RoadMapPage;
