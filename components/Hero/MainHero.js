// import Styles from "./Hero.module.css";
// import { Link } from 'react-router';

export default function MainHero() {
  const myStyle1 = {
    backgroundImage: `url("/headerBg11.jpg")`,
    height: "100%",

  };
  return (
    <main id="hero">
      <div className="bg-[url('/headerBg11.jpg')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed ">
        <div>
          <div className="mx-auto max-w-7xl py-5 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center ">
                <div className="flex items-center justify-between h-20  text-white ">
                  {/* <a href=""> */}
                  <img className="sm:h-16 h-10" src="/ecell_logo.png" />
                  {/* </a> */}
                  <h1 className="text-3xl px-3 mr-5 ">&</h1>
                  <div>
                    <a href="https://learn10x.org/" target="_blank">
                      <img src="/learn10xNew.png" className="sm:h-16 h-10" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="h-full py-2 pr-4 text-white text-4xl text-center">
              Presents!!
            </h1>
            <div className="flex justify-center">
              <img className="md:h-80 sm:h-50" src="/vvsf.png"></img>
            </div>
            <h1 className="h-full pr-4 text-white text-xl text-center text-yellow-500 ">
              Vasai Virar Startup Fest
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
