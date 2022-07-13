import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Rate } from "antd";
import { Button } from "react-bootstrap";
import "./AddNewMovie.css";

function AddNewMovie() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="add">
      <img src={location.state.imgsrc} alt="test"></img>
      <h2 style={{ color: "red" }}>{location.state.name} </h2>
      <Rate disabled defaultValue={location.state.rating} />
      <h2 style={{ color: "white" }}>{location.state.description}</h2>

      <iframe
        width="727"
        height="409"
        src={location.state.trailer}
        title="رحله البحث عن الكنز المفقود ( ملخص فيلم Uncharted )"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="button">
        <Button
          style={{ color: "red" }}
          variant="secondary"
          onClick={() => navigate("/")}
        >
          Back
        </Button>{" "}
      </div>
    </div>
  );
}

export default AddNewMovie;
