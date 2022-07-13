import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";
import { Routes, Route } from "react-router-dom";

import image1 from "./imeges/image1.webp";
import image2 from "./imeges/image2.webp";
import image3 from "./imeges/image3.webp";
import image4 from "./imeges/image4.webp";
import image5 from "./imeges/image5.webp";
import image6 from "./imeges/image6.webp";
import image7 from "./imeges/image7.webp";
import MovieList from "./Component/MovieList";
import Filter from "./Component/Filter/Filter";
import Modal1 from "./Component/Modal/Modal";
import { useState } from "react";
import AddNewMovie from "./Component/AddNewMovie/AddNewMovie";

var moviedata1 = [
  {
    id: Math.random(),
    name: "UNCHARTED",
    rating: 3,
    imgsrc: image1,
    description:
      "Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor Sully Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada",
    trailer: "https://www.youtube.com/embed/BSYmMqlk9dc",
  },
  {
    id: Math.random(),
    name: "TOP GUN",
    rating: 1,
    imgsrc: image2,
    description:
      "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him",
    trailer: "https://www.youtube.com/embed/giXco2jaZ_4",
  },
  {
    id: Math.random(),
    name: "THE GODFATHER",
    rating: 3,
    imgsrc: image3,
    description:
      "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    trailer: "https://www.youtube.com/embed/UaVTIH8mujA",
  },
  {
    id: Math.random(),
    name: "BLACK ADAM",
    rating: 5,
    imgsrc: image4,
    description:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods-and imprisoned just as quickly-Black Adam (Johnson) is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    trailer: "https://www.youtube.com/embed/JaV7mmc9HGw",
  },
  {
    id: Math.random(),
    name: "DUNKIRK",
    rating: 5,
    imgsrc: image5,
    description:
      "Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.",
    trailer: "https://www.youtube.com/embed/F-eMt3SrfFU",
  },
  {
    id: Math.random(),
    name: "GUARDIANS OF THE GALAXY",
    rating: 2,
    imgsrc: image6,
    description:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe",
    trailer: "https://www.youtube.com/embed/d96cjJhvlMA",
  },
  {
    id: Math.random(),
    name: "JUSTICE LEAGUE",
    rating: 4,
    imgsrc: image7,
    description:
      "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his new-found ally, Diana Prince, to face an even greater enemy.",
    trailer: "https://www.youtube.com/embed/3cxixDgHUYw",
  },
];
function App() {
  const [moviedata, setMoviedata] = useState(moviedata1);

  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);
  return (
    <div className="App">
      <div className="hed">
        <Filter name={name} setName={setName} rate={rate} setRate={setRate} />
        <Modal1 moviedata={moviedata} setMoviedata={setMoviedata} />
      </div>
      <Routes>
        <Route
          path="/"
          element={<MovieList name={name} rate={rate} moviedata={moviedata} />}
        />
        <Route path="movie/:id" element={<AddNewMovie />} />
      </Routes>
    </div>
  );
}

export default App;
