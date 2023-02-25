import axios from "axios";
export default function Kabir({ d }) {

    console.log(d)
    // let c = JSON.stringify(data)
    console.log("laudaa");
    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

import path from 'path'

export async function getServerSideProps() {
  // Fetch data from external API
    // const res = await fetch("../public/1.json");
    // const data = await res.json();
    // console.log(data)
    // let data = {
    //     "hey": "kabir",
    // }
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:3000/details/1.json`,
      headers: {},
    };

    let main = await axios(config);
    let d = main.data
    console.log(main.data)
    // console.log(d)
    
    return {
        props: {
            d
        }
    }
}