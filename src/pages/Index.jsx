import ContentWrap from "../components/main/ContentWrap";
import Slide from "../components/main/Slide";
import "../styles/main.css";

function Index() {
  return (
    <main className="main">
      <div className="inner">
        {/* 메인 슬라이드 */}
        <Slide />
        {/* 투어 특가 */}
        <ContentWrap
          title={"투어특가"}
          titleImage={""}
          subtitle={"여행 전에도, 여행 중에도 안심"}
          btText={""}
          btLink={""}
        >
          <div className="content-cate"></div>
          <div className="content-slide"></div>
        </ContentWrap>
        {/* W 트립 */}
        <ContentWrap
          title={"W트립"}
          titleImage={""}
          subtitle={"누구와 여행가시나요?"}
          btText={""}
          btLink={""}
        >
          <div className="content-slide"></div>
        </ContentWrap>
        {/* 티켓 랭킹 */}
        <ContentWrap
          title={"티켓 랭킹"}
          titleImage={""}
          subtitle={"오늘 뭐볼까? 지금 Hot한 공연"}
          btText={""}
          btLink={""}
        >
          <div className="content-cate"></div>
          <div className="content-slide"></div>
        </ContentWrap>
        {/* 인터파크 Live */}
        <ContentWrap
          title={"인터파크 Live"}
          titleImage={""}
          subtitle={""}
          btText={""}
          btLink={""}
        >
          <div className="content-slide"></div>
        </ContentWrap>
      </div>
    </main>
  );
}
export default Index;
