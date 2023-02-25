import Header from '@/components/Header/MainHeader'
import Link from 'next/link'


export default function Stalls() {
  const myStyle1 = {
    backgroundImage: `url("/4.png")`,
    height: "100%",
  };
  const st = {
      backgroundColor: "rgba(2, 20, 32, 0.96)",
    };
    const st2 = {
    backgroundColor: "rgba(2, 20, 32, 0.85)",
  };
  const st3 = {
    backgroundColor: "#111827",
};
  return (
    <>
      <div
        style={st3}
        className=" flex justify-around max-w px-4 py-4 sm:px-6 lg:px-8"
      >
        <div className="cursor-pointer">
          <Link href="/">
            <img className="h-12" src="/ecell_logo.png" alt="" />
          </Link>
        </div>
        <div className="text-center text-neutral-900 text-xl w-1/4 bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 cursor-pointer">
          <Link href={`/`}>GO BACK TO VVSF</Link>
        </div>
        <div className="cursor-pointer">
          <Link href="/">
            <img className="h-12" src="/vvsf_word.png" alt="" />
          </Link>
        </div>
      </div>

      <div
        className="grid md:grid-cols-3 grid-cols-1 md:gap-6 bg-neutral-900 p-10"
        style={st2}
      >
        <div className="sm:col-span-2 md:p-10 p-6 " style={st}>
          <div className=" text-center section-padding">
            {/* <h1
            className="main-title-font text-center"
            style={{ color: "#fff" }}
            >
            Start-Up Street
            </h1> */}
            <div className="py-3">
              <img
                className="w-2/4 mx-auto p-13 h-54 shadow-2xl mb-2"
                src="/StartUpStreetW.png"
                alt="StartUp Street"
              />
            </div>
            <hr
              className="m-auto line-padding"
              style={{ backgroundColor: "#ECF7FF" }}
            />
          </div>
          <div
            className="container  content-padding section-padding startupContainer text-lg text-neutral-100"
            style={{
              listStyleType: "circle",
              padding: "0px 30px ",
              fontFamily: "Roboto",
            }}
          >
            <ul>
              <li style={{ listStyleType: "square" }}>
                <p>
                  Get acess to innovative and evolutionary startups from all
                  over Mumbai.
                </p>
              </li>
              <li style={{ listStyleType: "square" }}>
                <p>
                  Connect with over 3000+ attendies from startups, established
                  companies startups over the Mumbai region.
                </p>
              </li>
              <li style={{ listStyleType: "square" }}>
                <p>
                  Get opportunity to gain investment from an investment pool of{" "}
                  <b className="text-2xl">&nbsp;50 Crores.</b>{" "}
                </p>
              </li>
              {/* <li style={{ listStyleType: "square" }}>
                <p>Expand Knowledge through seminars annd pitches.</p>
            </li> */}
              <li style={{ listStyleType: "square" }}>
                <p>
                  Get acess to potential investors and customers and many more.
                </p>
              </li>
              <li style={{ listStyleType: "square" }}>
                <p>Make lasting connection during networking session.</p>
              </li>
              <li style={{ listStyleType: "square" }}>
                <p>Stalls With tables, fans, chairs, etc. will be provided. </p>
              </li>
              <li style={{ listStyleType: "square" }}>
                {" "}
                <p>
                  {" "}
                  Hospitality will be taken care of for the entire event.{" "}
                </p>{" "}
              </li>
              <li style={{ listStyleType: "square" }}>
                <p>Maximum of 2 people per stalls.</p>
              </li>
            </ul>
          </div>
          <div className="priceContainer   px-30    container content-padding">
            <h1
              style={{
                color: "white",
                padding: "15px 15px ",
                fontFamily: "poppins , Roboto",
                fontSize: "30px",
              }}
              className="text-left"
            >
              All this for ₹5000/- Only.{" "}
            </h1>
            {/* <hr style={{backgroundColor: "white" ,  height: "12px"}}/> */}
            <div className=" flex justify-center max-w px-4 py-3 sm:px-6 lg:px-8">
              <div className="text-center text-white w-2/4 text-xl rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-800 cursor-pointer">
                <a href="#" class="inline-flex items-center font-medium">
                  Book a stall here
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="formLinkContainer">
        </div> */}
        </div>

        <div
          style={myStyle1}
          className="max-w-sm mx-auto sm:pt-3 pt-3 rounded overflow-hidden shadow-2xl sm:px-4 "
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
                A variety of products and services from entrepreneurs will be on
                display to introduce the concept of startups to students.
                Opportunity to network and interact with the founders and the
                co-founders. Domains such as Tech, Food, manufacture, sports and
                fitness, household, clothing, and many more.
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
      </div>
    </>
  );
}
