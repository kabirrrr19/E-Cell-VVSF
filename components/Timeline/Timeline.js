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
      time: "10:00 AM to 12:00 PM",
      title: "Inauguration",
      date: "24th March",
      description:
        "Embarking the entrepreneurial culture by inaugrating Vasai Virar StartUp Fest.",
      icon: "work",
    },
    {
      id: 2,
      time: "10:00 AM to 7:00 PM",
      title: "The StartUp Street",
      description:
        "An exclusive platform to connect and interact with the innovative startups across diverse domains.",
      date: "24th March",
      icon: "work",
    },
    {
      id: 3,
      time: "11:15 AM to 12:15 PM",
      title: "Idea Generation",
      description:
        "For every big revolution was an idea first, learn the key fundamentals of Idea Generation and concept building",
      date: "24th March",
      icon: "work",
    },
    {
      id: 4,
      time: "12:30 PM to 1:30 PM",
      title: "Panel Discussion - Global Recession",
      description:
        "You're fired. This is the most dreaded message for in the corporate world so we present a panel to help you understand recession, what causes it and how to tackle it.",
      date: "24th March",
      icon: "work",
    },
    {
      id: 5,
      time: "1:30 PM to 2:45 PM",
      title: "Eat N Network",
      description:
        "An exclusive buffet for the startup street founders, investors, speakers and industry wizards to eat and network under one roof.",
      date: "24th March",
      icon: "work",
    },
    {
      id: 6,
      time: "3:00 PM to 6:00 PM",
      title: "Pitch Perfecct",
      description:
        "Well, find the most innovative and evolutionary startup pitching to the top investors in the country to get the biggest sharks on board.",
      date: "24th March",
      icon: "work",
    },
    {
      id: 7,
      time: "10:00 AM to 11:AM",
      title: "Finance/Sales & Marketing",
      description:
        "In all aspects of life, we're always selling something so why not be good at it. A session to learn the core of finances to go from 99% to the top 1%.",
      date: "25th March",
      icon: "work",
    },
    {
      id: 8,
      time: "11:15 AM to 12:15 PM",
      title: "Panel discussion - Shark Tank startups",
      date: "25th Febraury",

      description:
        "Everyone saw the success of startups on shark tank but we bring to you behind the scenes of these amazing startups and what it took to reach on such an esteemed platform.",
      date: "25th March",
      icon: "work",
    },
    {
      id: 9,
      time: "12:30 PM to 1:30 PM",
      title: "Eat N Network",
      description:
        "An exclusive buffet for the startup street founders, investors, speakers and industry wizards to eat and network under one roof.",
      date: "25th March",
      icon: "work",
    },
    {
      id: 10,
      time: "3:00 PM to 6:00 PM",
      title: "Pitch Perfecct",
      description:
        "Well, find the most innovative and evolutionary startup pitching to the top investors in the country to get the biggest sharks on board.",
      date: "24th March",
      icon: "work",
    },
    {
      id: 11,
      time: "5:30 PM to 7:00 PM",
      title: "StandUp ",
      description:
        "Why not take a step back ourseleves with a session of fun after all the learnings and networking and community building. Presenting to you a StandUp Comedy session to end the event on a laughing note.",
      date: "25th March",
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
              contentStyle={{ background: "rgba(0, 0, 0, 1)", color: "#fff" }}
              key={element.id}
              date={element.date}
              dateClassName={Styles.date}
              iconStyle={workIconStyles}
              icon={<img src="/code.png" className={Styles.image} />}
              // iconClassName={Styles.imgicon}
            >
              <p>{element.time}</p>
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
