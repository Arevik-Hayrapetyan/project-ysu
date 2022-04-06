import React from "react";
import "./Cards.css";
import { useState, useEffect } from "react";

export default function Cards({ posts, loading }) {
  const [trueValue, setTrueValue] = useState(null);
  function handleClick(event) {
    let answer = posts[0].answer.split(" ");
    let arrayItem = answer[answer.length - 1].split("");
    arrayItem.splice(arrayItem.length - 1, 1);
    let arrayItem2 = event.target.textContent.split(" ");
    let cut = arrayItem2[arrayItem2.length - 1];
    let trueAnswer = arrayItem.join("") == cut;
    setTrueValue(trueAnswer);
  }
  // useEffect(() => {

  // }, [trueValue]);
  return (
    <div className="card-container">
      <img src={posts[0] ? posts[0].image_file : "Loading"} />
      <div className="question">{posts[0] ? posts[0].text : "Loading"}</div>
      <div className="answers">
        <div
          className={
            trueValue === null
              ? "item "
              : trueValue == false
              ? "item falseAnswer"
              : "item trueAnswer"
          }
          onClick={(event) => {
            handleClick(event);
          }}
        >
          {posts[0] ? posts[0].options.item[0].text : "Loading"}
        </div>
        <div
          className={
            trueValue === null
              ? "item "
              : trueValue == false
              ? "item falseAnswer"
              : "item trueAnswer"
          }
          onClick={(event) => {
            handleClick(event);
          }}
        >
          {posts[0] ? posts[0].options.item[1].text : "Loading"}
        </div>
      </div>
    </div>
  );
}
