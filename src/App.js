import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
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

var moviedata1 = [
  { id: Math.random(), name: "UNCHARTED", rating: 3, imgsrc: image1 },
  { id: Math.random(), name: "TOP GUN", rating: 1, imgsrc: image2 },
  { id: Math.random(), name: "THE GODFATHER", rating: 3, imgsrc: image3 },
  { id: Math.random(), name: "BLACK ADAM", rating: 5, imgsrc: image4 },
  { id: Math.random(), name: "DUNKIRK", rating: 5, imgsrc: image5 },
  {
    id: Math.random(),
    name: "GUARDIANS OF THE GALAXY",
    rating: 2,
    imgsrc: image6,
  },
  { id: Math.random(), name: "JUSTICE LEAGUE", rating: 4, imgsrc: image7 },
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
      <MovieList name={name} rate={rate} moviedata={moviedata} />
    </div>
  );
}

export default App;
