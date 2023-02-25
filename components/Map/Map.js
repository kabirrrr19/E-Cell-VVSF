export default function Map() {
  const myStyle1 = {
    backgroundColor: "#011420",
  };
    return (
      <div id="map" className="flex justify-center pb-10" style={myStyle1}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.6599913057707!2d72.82654491490592!3d19.38386958691195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec0a4b41bef%3A0xbd1a4ca919d6a613!2sVidyavardhini&#39;s%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1677187921722!5m2!1sen!2sin"
          width="80%"
          height="400"
          loading="lazy"
        ></iframe>
      </div>
    );
}