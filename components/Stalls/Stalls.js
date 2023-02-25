/***
 * 
 * This file is not being used 
 * instead a seperate file in 
 * the pages folder has been
 * created for the purpose.
 * 
 */






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
  return (
    <>
      <div className="grid grid-cols-3 bg-neutral-900 p-10" style={st2}>
        <div
          style={myStyle1}
          className="max-w-sm sm:pt-3 pt-3 rounded overflow-hidden shadow-2xl sm:px-4 "
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

        <div className="col-span-2 p-10" style={st}>
          <div className=" text-center section-padding">
            <h1
              className="main-title-font text-center"
              style={{ color: "#fff" }}
            >
              Start-Up Street
            </h1>
            <hr
              className="m-auto line-padding"
              style={{ backgroundColor: "#ECF7FF" }}
            />
          </div>
          <div
            className="container  content-padding section-padding startupContainer"
            style={{
              listStyleType: "circle",
              padding: "0px 30px ",
              color: "white",
              fontSize: "23px",
              fontFamily: "Roboto",
            }}
          >
            <ul>
              <li style={{ listStyleType: "square" }}>
                <p>Stalls With table</p>
              </li>
              <li style={{ listStyleType: "square" }}>
                {" "}
                <p>
                  {" "}
                  Hospitality will be taken care of for the entire event{" "}
                </p>{" "}
              </li>
              <li style={{ listStyleType: "square" }}>
                <p>Maximum of 2 people per stalls</p>
              </li>
              <li style={{ listStyleType: "square" }}>
                <p>Make lasting connection during networking session</p>
              </li>
              <li style={{ listStyleType: "square" }}>
                <p>
                  Get acess to innovative and evolutionary startups from all
                  over Mumbai
                </p>
              </li>
              <li style={{ listStyleType: "square" }}>
                <p>
                  Connect with over 3000+ attendies from startups, established
                  companies startups over hte Mumbai region
                </p>
              </li>
              <li style={{ listStyleType: "square" }}>
                <p>Expand Knowledge through seminars annd pitches </p>
              </li>
              <li style={{ listStyleType: "square" }}>
                <p>
                  Get acess to potential investors and customers and many more
                </p>
              </li>
            </ul>
          </div>
          <div className="priceContainer   px-30    container content-padding">
            <h1
              style={{
                color: "white",
                padding: "0px 15px ",
                fontFamily: "poppins , Roboto",
                fontSize: "30px",
              }}
              className="text-left  "
            >
              Price = ₹5000{" "}
            </h1>
            {/* <hr style={{backgroundColor: "white" ,  height: "12px"}}/> */}
            <button
              className="btn  btn-primary text-xl "
              style={{
                height: "5rem",
                width: "15rem",
                margin: "10px",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Register Here
            </button>
          </div>

          {/* <div className="formLinkContainer">
        </div> */}
        </div>
      </div>
    </>
  );
}