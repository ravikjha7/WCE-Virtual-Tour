import React, { useEffect, useState } from "react";
import { Pannellum } from 'pannellum-react';
import axios from 'axios';

const Tour = () => {

  const [tour, setTour] = useState({
    name: 'IIE CELL',
    description: 'Innovation Incubation and Enterpreneurship Cell (IIE Cell) of Walchand College of Engineering is a newly formed department to look out for innovation ideas and encourage students to start their own start-ups.',
    image: 'https://res.cloudinary.com/ravikjha7/image/upload/v1681931577/WCE%20Virtual%20Tour/IEEE_Cell_jdzb5h.jpg',
    left: '643e2ef08330d373550a9696'
  });

  // useEffect(() => {
  //   // handleClick('64403f2a51360e7a191717db');
  //   handleSpeak();
  // }, []);/

  const handleSpeak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(tour.description);
    console.log(utterance);
    synth.speak(utterance);
    // synth.speak(utterance);
  };

  const handleClick = (id) => {
    axios.get(`http://localhost:8080/tour/${id}`)
    .then(response => {
      setTour(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div>
        <h1>{tour.name}</h1>
      <Pannellum
        width="100%"
        height="898px"
        image={tour.image}
        pitch={10}
        yaw={180}
        autoRotate={5}
        hfov={110}
        autoLoad
        onLoad={() => {
          console.log("panorama loaded");
          handleSpeak();
        }}
      >

      <Pannellum.Hotspot
        type="custom"
        pitch={181}
        yaw={-165}
        handleClick={(evt , name) => handleClick(tour.left)}
        name="hs1"
      />

<Pannellum.Hotspot
        type="custom"
        pitch={181}
        yaw={-10}
        handleClick={(evt , name) => handleClick(tour.right)}
        name="hs1"
      />

<Pannellum.Hotspot
        type="custom"
        pitch={181}
        yaw={-90}
        handleClick={(evt , name) => handleClick(tour.up)}
        name="hs1"
      />

<Pannellum.Hotspot
        type="custom"
        pitch={181}
        yaw={120}
        handleClick={(evt , name) => handleClick(tour.down)}
        name="hs1"
      />

      </Pannellum>
    </div>
  );
}

export default Tour;
