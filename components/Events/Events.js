// import "./Events.module.css"
// import Card from "./Card"

import Style from "./Events.module.css";
import Link from "next/link"

export default function Events() {
  const myStyle1 = {
    backgroundImage: `url("/4.png")`,
    height: "100%",
  };
  const st = {
    backgroundColor: "rgba(2, 20, 32, 0.97)"
  }
  
  return (
    <>
      <div id="events" style={st} className="pb-10">
        <div className="EventHeader py-8">
          <h1 className="text-center text-4xl text-white">Events</h1>
        </div>

        <section className="mx-auto px-6 h-full grid justify-items-center grid-cols-1 grid-gap-1 sm:grid-cols-3 grid-gap-1 pb-10">
          <div
            style={myStyle1}
            className="max-w-sm sm:pt-3 pt-3 my-2 sm:my-0 rounded overflow-hidden shadow-2xl sm:px-4 "
          >
            <div className={`{Style.cardBg}`}>
              <img
                className="w-full p-11 shadow-2xl"
                src="/ETalksW.png"
                alt="E Talks"
              />
              <div className="px-6 py-4">
                <div className="text-center text-white font-bold text-xl mb-2">
                  E-Talks
                </div>
                <p className="text-white">
                  Discover the road that industry professionals took to create a
                  prosperous startup from them. Recognize the latest, developing
                  technology across all domains. Speaker Profiles: Startup
                  founders, members of the ecosystem, industry wizzards,
                  businesspeople, banks, the government, investors, and many
                  more.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #businesskibaate
                </span>
              </div>
            </div>
          </div>

          <div
            style={myStyle1}
            className="max-w-sm sm:pt-3 pt-3 my-6 sm:my-0 rounded overflow-hidden shadow-2xl sm:px-4"
          >
            <div className="{`${Style.cardBg} `}">
              <img
                className="w-full object-scale-down shadow-2xl"
                src="/PitchPerfectW.png"
                alt="Pitch Perfect"
              />
              <div className="px-6 py-4">
                <div className="text-center text-white font-bold text-xl mb-2">
                  Pitch Perfect
                </div>
                <p className="text-white">
                  A contest that helps future business leaders put themselves in
                  the position of entrepreneurs and propose a business idea that
                  creatively addresses contemporary problems. A panel of angel
                  investors and business professionals will hear pitches from
                  people looking for Investments and business prospects.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #pitchitgetit
                </span>
              </div>
            </div>
          </div>

          <div
            style={myStyle1}
            className="max-w-sm sm:pt-3 pt-3 mt-10 sm:mt-0 rounded overflow-hidden shadow-2xl sm:px-4 "
          >
            <div className="h-full">
              <img
                className="w-full p-11 h-54 shadow-2xl mb-2"
                src="/StartUpStreetW.png"
                alt="StartUp Street"
              />
              <div className="px-6 py-4">
                <div className="text-center text-white font-bold text-xl mb-2">
                  The StartUp Street
                </div>
                <p className="text-white">
                  A variety of products and services from entrepreneurs will be
                  on display to introduce the concept of startups to students.
                  Opportunity to network and interact with the founders and the
                  co-founders. Domains such as Tech, Food, manufacture, sports
                  and fitness, household, clothing, and many more.
                  <br />
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #innoavate2elevate
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="rounded-md flex bg-[#C4F9E2] p-4">
          <Link href={`/Stalls`}>
            <p className="mx-auto flex items-center text-center  text-sm font-medium text-[#004434] cursor-pointer hover:text-blue-900 hover:underline">
              <span className="pr-3">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#00B078"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.1203 6.78954C14.3865 7.05581 14.3865 7.48751 14.1203 7.75378L9.12026 12.7538C8.85399 13.02 8.42229 13.02 8.15602 12.7538L5.88329 10.4811C5.61703 10.2148 5.61703 9.78308 5.88329 9.51682C6.14956 9.25055 6.58126 9.25055 6.84753 9.51682L8.63814 11.3074L13.156 6.78954C13.4223 6.52328 13.854 6.52328 14.1203 6.78954Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
              <div>  
                Click here to be a StartUp at the StartUp Street and get opportunity to
                interact with mentors and investors and gain investment from a
                pool of <br /> <b className="text-2xl">&nbsp;50 Crores.</b>
              </div>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
