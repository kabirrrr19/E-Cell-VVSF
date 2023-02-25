import "./Card.module.css"

export default function Card(props) {
    return (
      <div data-aos="flip-left">
        <div className="card cardContainer">
          <img
            src="https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title} </h5>
            <p className="card-text">{props.subtitle}</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      </div>
    );
}