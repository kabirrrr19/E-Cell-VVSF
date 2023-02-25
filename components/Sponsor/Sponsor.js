export default function Sponsor() {
  return (
    <div className="sponserContainer">
      <div className=" text-center section-padding">
        <h1 className="main-title-font text-center" style={{ color: "#fff" }}>
          Sponser
        </h1>
        <hr
          className="m-auto line-padding"
          style={{ backgroundColor: "#ECF7FF" }}
        />
      </div>

      <div className="sponserCards">
        <div className="main-container" id="Sponsors">
          <div className="spons-cont grid" id="spons-cont">
            <div className="t1 h2" style={{ color: "#fff" }}>
              Title Sponsor
            </div>
            <a href="" className="title-spons sponsor-card" target="_blank">
              <img src={"/learn10x.png"} alt="" />
            </a>
            <div className="pb1 h2" style={{ color: "#fff" }}>
              Powered by
            </div>
            <a href="/" className="pb-spons-1 sponsor-card" target="_blank">
              <img src="" alt="" />
            </a>
            <div className="pb2 h2" style={{ color: "#fff" }}>
              Powered by
            </div>
            <a href="/" className="pb-spons-2 sponsor-card" target="_blank">
              <img src="" alt="" />
            </a>
            <div className="cpb1 cpb h2" style={{ color: "#fff" }}>
              Co-powered by
            </div>
            <a href="/" className="cpb-spons-1 sponsor-card" target="_blank">
              <img src="" alt="" />
            </a>
            <div className="cpb2 cpb h2" style={{ color: "#fff" }}>
              Co-powered by
            </div>
            <a href="/" className="cpb-spons-2 sponsor-card" target="_blank">
              <img src="" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}