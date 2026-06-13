import React from "react";

function JobCard({ title, person, url, time }) {
  return (
    <div>
      <div
        style={{
          border: "1px solid grey",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          backgroundColor: "white",
        }}
      >
        <h4>{title}</h4>
        <div>
          <span>By {person}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
