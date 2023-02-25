// import "./Events.module.css"
// import Card from "./Card"

import Style from "./Events.module.css";

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
          
          <div style={myStyle1} className="max-w-sm sm:pt-3 pt-3 my-2 sm:my-0 rounded overflow-hidden shadow-2xl sm:px-4 ">
            <div className={`{Style.cardBg}`}>
              <img
                className="w-full p-11 shadow-2xl"
                src="/ETalksW.png"
                alt="Sunset in the mountains"
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

          <div style={myStyle1} className="max-w-sm sm:pt-3 pt-3 my-6 sm:my-0 rounded overflow-hidden shadow-2xl sm:px-4">
            <div className="{`${Style.cardBg} `}">
              <img
                className="w-full object-scale-down shadow-2xl"
                src="/PitchPerfectW.png"
                alt="Sunset in the mountains"
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

          <div style={myStyle1} className="max-w-sm sm:pt-3 pt-3 mt-10 sm:mt-0 rounded overflow-hidden shadow-2xl sm:px-4 ">
            <div className="h-full">
              <img
                className="w-full p-11 h-54 shadow-2xl mb-2"
                src="/StartUpStreetW.png"
                alt="Sunset in the mountains"
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
      </div>
    </>
  );
}
