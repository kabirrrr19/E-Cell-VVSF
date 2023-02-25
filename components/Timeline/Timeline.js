import React from "react";

import Styles from "./Timeline.module.css";
// import  SchoolIcon  from "../../assets/timeline/code.png";
// import timeline from "./Timeline/timeline";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let workIconStyles = { background: "#a36ce0" };
  // let date = {color: white}
  // let schoolIconStyles = { background: "#f9c74f" };

  let timelineElements = [
    {
      id: 1,
      time: "7:30 A.M",
      title: "Inauguration",
      date: "23rd Febraury",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit?",
      icon: "work",
    },
    {
      id: 2,
      time: "10:15AM",
      title: "Idea Generation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit?",
      date: "24th Febraury",
      icon: "work",
    },
    {
      id: 3,
      time: "5:00 P.M",
      title: "Sales and Marketng",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit?",
      // date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 4,
      //   time: "8:00 A.M",
      title: "Global Recession Panel ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit?",
      //   date: "8th October 2022",
      icon: "work",
    },
    {
      id: 5,
      //   time: "2:00 P.M",
      title: "Pitch Perfect",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit?",
      // date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 7,
      //   time: "4:00 P.M",
      title: "Pitching Round Begins",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit?",
      // date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 8,
      //   time: "6:00 P.M",
      title: "Product Design ",
      date: "25th Febraury",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit?",
      // date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 9,
      //   time: "6:00 P.M",
      title: "Finance ",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit?",
      // date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 10,
      //   time: "6:00 P.M",
      title: "Challenge Faced By an Entrepreneurs ",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit?",
      // date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 11,
      //   time: "6:00 P.M",
      title: "Pitch Perfect",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit?",
      // date: "Vcet Hackathon",
      icon: "work",
    },
    {
      id: 12,
      //   time: "6:00 P.M",
      title: "StandUp ",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit?",
      // date: "Vcet Hackathon",
      icon: "work",
    },
  ];
  
  const myStyle = {
    backgroundImage:"linear-gradient(to left,rgba(2, 20, 32, 1), rgba(2, 20, 32, 0.84),  rgba(2, 20, 32, 1))",
  };
  
  return (
    <div id="timeline" className={`py-20 section-padding `} style={myStyle}>
      <div className=" text-center section-padding">
        <h1 className="main-title-font text-center text-white sm:text-5xl text-xl">
          Event Timeline
        </h1>
        <hr
          className="m-auto line-padding"
          style={{ backgroundColor: "#ECF7FF" }}
        />
      </div>{" "}
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName={Styles.date}
              iconStyle={workIconStyles}
              icon={<img src="/code.png" className={Styles.image} />}
              // iconClassName={Styles.imgicon}
            >
              <p >{element.time}</p>
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      
      {/* <div className="mt-10">
        <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 dark:bg-gray-500"/>
      </div> */}

     
      
    </div>
  );
}

export default Timeline;
