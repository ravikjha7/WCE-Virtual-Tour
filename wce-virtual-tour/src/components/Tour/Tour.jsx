import React, { useEffect, useState } from "react";
import { Pannellum } from 'pannellum-react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import Map from "../Map/Map";

const Tour = () => {

  const classes = useStyles();

  const [tour, setTour] = useState({});

  useEffect(() => {
    handleClick('64403f2a51360e7a191717db');
  }, []);


  const handleSpeak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(tour.description);
    synth.speak(utterance);
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
    <div className={classes.root}>
      <Map />
      <Typography className={classes.title} variant="h1">{tour.name}</Typography>
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
          tooltip={(hotSpotDiv) => {
            const arrow = document.createElement("div");
            arrow.style.position = "absolute";
            arrow.style.top = "-20px";
            arrow.style.left = "calc(50% - 20px)";
            arrow.style.borderLeft = "20px solid transparent";
            arrow.style.borderRight = "20px solid transparent";
            arrow.style.borderBottom = "20px solid white";
            hotSpotDiv.appendChild(arrow);

            // const text = document.createElement("div");
            // text.style.position = "absolute";
            // text.style.top = "10px";
            // text.style.left = "calc(50% - 40px)";
            // text.style.width = "80px";
            // text.style.textAlign = "center";
            // text.style.color = "white";
            // text.textContent = tour.left.name;
            // hotSpotDiv.appendChild(text);

          }}
          handleClick={(evt , name) => handleClick(tour.left)}
          name="hs1"
          className={classes.hotspot}
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={181}
          yaw={-10}
          tooltip={(hotSpotDiv) => {
            const arrow = document.createElement("div");
            arrow.style.position = "absolute";
            arrow.style.top = "-20px";
            arrow.style.left = "calc(50% - 20px)";
            arrow.style.borderLeft = "20px solid transparent";
            arrow.style.borderRight = "20px solid transparent";
            arrow.style.borderBottom = "20px solid white";
            hotSpotDiv.appendChild(arrow);
          }}
          handleClick={(evt , name) => handleClick(tour.right)}
          name="hs2"
          className={classes.hotspot}
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={181}
          yaw={-90}
          tooltip={(hotSpotDiv) => {
            const arrow = document.createElement("div");
            arrow.style.position = "absolute";
            arrow.style.top = "-20px";
            arrow.style.left = "calc(50% - 20px)";
            arrow.style.borderLeft = "20px solid transparent";
            arrow.style.borderRight = "20px solid transparent";
            arrow.style.borderBottom = "20px solid white";
            hotSpotDiv.appendChild(arrow);
          }}
          handleClick={(evt , name) => handleClick(tour.up)}
          name="hs3"
          className={classes.hotspot}
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={181}
          yaw={120}
          tooltip={(hotSpotDiv) => {
            const arrow = document.createElement("div");
            arrow.style.position = "absolute";
            arrow.style.top = "-20px";
            arrow.style.left = "calc(50% - 20px)";
            arrow.style.borderLeft = "20px solid transparent";
            arrow.style.borderRight = "20px solid transparent";
            arrow.style.borderBottom = "20px solid white";
            hotSpotDiv.appendChild(arrow);
          }}
          handleClick={(evt , name) => handleClick(tour.down)}
          name="hs4"
          className={classes.hotspot}
        />

      </Pannellum>
    </div>
  );
}


export default Tour;
