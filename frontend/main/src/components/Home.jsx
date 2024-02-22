import { Pts, Btn } from "/pagedata.js";
import Body from "../components/Body.jsx";
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

export default function Home() {
  const location = useLocation();
  const userName = location.state && location.state.userName;

  const seoKeywords = ", programming, optimization";
  const wikiClick = () => {
    window.open("https://en.wikipedia.org/wiki/Study_Notes", "_blank");
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Notes Management App</title>
        <meta property="og:url" content="" />
        <meta name="keywords" content={seoKeywords} />
      </Helmet>
      <div className="relative">
        {userName && (
          <div className="flex items-center text-white text-2xl absolute top-0 right-0 p-4">
            <FaUser className="mr-2" />
            Hello, {userName || ''}!
          </div>
        )}
        <Body
          links={"labs/"}
          headQ={Pts.ht1}
          datas={Pts.pt1}
          btnC="bg-[#ff6633]"
          Imgs={"../../images/R.png"}
          Btns1={Btn.btn1}
          btnPos="justify-between"
        />
        <Body
          id="sec2"
          pgLink={wikiClick}
          headQ={Pts.ht2}
          datas={Pts.pt2}
          btnC="bg-[#F478e6]"
          Imgs={"../../images/data.png"}
          Btns1={Btn.btn3}
          btn={Btn}
          btnPos="justify-end"
          visibilty2="hidden"
        />
        <Body
          headQ={Pts.ht3}
          datas={Pts.pt3}
          Imgs={"../../images/data1.png"}
          btnPos="hidden"
        />
      </div>
    </div>
  );
}
