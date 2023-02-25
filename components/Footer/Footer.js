import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
// import { BsLinkedin } from "react-icons/bs";
// import { BsLinkedin } from "react-icons/bs";

export default function Footer1() {
  const st = {
    backgroundColor: "#111827",
  };
  return (
    <div style={st}>
      <footer>
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600"></div>
          <ul className=" flex justify-center gap-6 md:gap-8 ">
            <li>
              <a href="https://www.instagram.com/ecell_vcet/?hl=en" target="_blank">
                <BsInstagram className="text-white h-12 w-12 hover:text-pink-700/75" />
              </a>
            </li>

            {/* <li>
              <a href="" className="hover:text-blue-700/75">
              <BsInstagram className="text-white h-12 w-12"/>
              </a>
              </li>
              <li>
              <a href="" className="hover:text-blue-700/75">
              <BsInstagram className="text-white h-12 w-12"/>
              </a>
            </li> */}
            <li>

              <div className="text-white text-center mt-4">
                <p>
                  © Copyright 2023 <b>E-Cell</b> All rights reserved.
                </p>
              </div>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ecell-vcet" target="_blank">
                <BsLinkedin className="text-white h-12 w-12 hover:text-blue-700/75" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
