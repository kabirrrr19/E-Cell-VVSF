import React, { useEffect, useState, useRef } from "react";
import Styles from "./About.module.css";

export default function About() {
  const myStyle1 = {
    backgroundImage: `url("/design-5.jpg")`,
    height: "100%",
  };
  const myStyle2 = {
    backgroundImage: `url("/design-2.jpg")`,
    height: "100%",
  };
  return (
    <>
      <section id="about" className="">
        <div
          style={myStyle1}
          className="bg-gradient-to-l from-gray-900  to-gray-700 mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16l"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="/ecell_logo.png"
                className="absolute inset-0 h-100 my-auto  mx-auto w-100 object-fit"
              />
            </div>

            <div className="lg:py-24" id="ece">
              <h2 className="text-3xl font-bold sm:text-4xl text-white">
                What is E-Cell
              </h2>

              <p className="mt-4 text-white">
                It is a student-run and faculty-led group that works to develop
                the skills of aspiring engineers. It began in 2015 and now has
                an impressive 100+ students from different V.C.E.T. branches
                participating. Students participate in a wide range of
                activities to develop their entrepreneurial mindset, business
                modelling skills and many more through various types of
                seminars, workshops, presentations, and prototype development of
                concepts.
              </p>
              {/* ECell Website to be linked here */}
              {/* <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a> */}
            </div>
          </div>
        </div>

        <div style={myStyle2} className="bg-gradient-to-r pb-6 from-gray-900  to-gray-700 mx-auto px-10 sm:px-6l">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative z-10 ">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt="Party"
                  src="/vvsf_logo1.png"
                  className="absolute inset-0 h-full mx-auto mya-auto w-100 object-fit"
                />
              </div>
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl text-white">
                What is VVSF
              </h2>

              <p className="mt-4 text-white">
                What is VVSF ? It is a one-stop solution for budding
                entrepreneurs. Here we gather the best startups, founders,
                investors, and mentors. A two-day event will feature a variety of
                events, including talks, pitches, exhibitions, and more. We want
                to foster an entrepreneurial culture throughout the entire
                district. This is a fantastic chance for individuals to establish
                a network for greatly expanding their enterprises.
              </p>
              {/* ECell Website to be linked here */}
              {/* <a
                  href="#"
                  className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a> */}
            </div>
          </div>
        </div>

        

      </section>

  
        
    </>
  );
}
