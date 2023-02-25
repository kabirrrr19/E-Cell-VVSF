import React from "react";
// import "./Pitches.css"

const Pitches = () => {
  return (
    <div className="content-padding pitchesContainer" data-aos="zoom-in">
      <div className=" text-center section-padding">
        <h1 className="main-title-font text-center" style={{ color: "#fff" }}>
          Team Heads
        </h1>
        <hr
          className="m-auto line-padding"
          style={{ backgroundColor: "#ECF7FF" }}
        />
      </div>{" "}
      <div className="carouselTeamHead   ">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item  ">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item ">
              <img
                src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item ">
              <img
                src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pitches;
