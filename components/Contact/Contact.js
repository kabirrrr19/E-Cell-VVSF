import Style from "./Contact.module.css";

export default function Contact() {
  const myStyle1 = {
    backgroundImage: `url("/2.png")`,
    height: "100%",
  };
  return (
    <>
      <div id="contact" style={myStyle1} className="py-20">
        <div className="EventHeader">
          <h1 className="text-center text-4xl text-white">Contact Us</h1>
        </div>

        <section className="mx-auto w-full h-full grid justify-items-center grid-cols-1 sm:grid-cols-3 ">
          <div className="max-w-xs pt-3 w-full h-full text-center rounded overflow-hidden shadow-lg mx-auto px-2">
            <div className={Style.cardBg}>
              <div className="px-6 py-6 leading-5">
                <div className="font-bold text-xl mb-2 text-center">
                  Team E-Cell
                </div>
                <p className="text-gray-700 text-base">
                  <b>Vidit Sheth</b> : 9988776655
                </p>
                <p className="text-gray-700 text-base">
                  <b>Atul Mishra</b> : 9988776655
                </p>
                <p className="text-gray-700 text-base">
                  <b>Nidhi Mehta</b> : 9988776655
                </p>
                <p className="text-gray-700 text-base">
                  <b>Kaustubh Pandit</b> : 9988776655
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-xs pt-3 w-full h-full text-center rounded overflow-hidden shadow-lg px-2">
            <div className={Style.cardBg}>
              <div className="px-6 py-6">
                <div className="font-bold text-xl mb-2 text-center">
                  Adress:
                </div>
                <p className="text-gray-700 text-base leading-5">
                  Vidyavardhini College of Engineering and Technology, K.T.
                  Marg, Vasai Road, Vasai-Virar, Maharashtra 401202
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-xs pt-3 w-full h-90 text-center rounded overflow-hidden shadow-lg px-2">
            <div className={Style.cardBg}>
              <div className="px-6 py-6">
                <div className="font-bold text-xl mb-2 text-center">E-Mail</div>
                <p className="text-gray-700 text-base ">
                  Reach out to us at: <br />
                  <span className="font-bold"> ecell@vcet.edu.in</span>
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section></section>
      </div>
    </>
  );
}
