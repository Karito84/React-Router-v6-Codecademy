import React from "react";
import { useNavigate } from "react-router-dom"

export default function Footer() {

  // Get the history object - this would work in react router v5) --> in RR v6 instead of history object, we have to get a navigate object from useNavigate()
const navigate = useNavigate();
  const goBack = () => {
    // imperatively redirect back
    navigate(-1);
  }

  const goForward = () => {
    // imperatively redirect forward
    navigate(1);
  }

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
