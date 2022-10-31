import React from "react";

const Program = ({ program }) => {
  return (
    <div>
      {program.startTime} ile {program.endTime} arası{" "}
      {program.place ? program.place + "de/da" : ""}{" "}
      {program.from ? program.from + "den/dan" : ""}{" "}
      {program.to ? program.to + "e/a" : ""}{" "}
      {program.transportation ? program.transportation + " ile gidiyor olacağım" : ""}{" "}
      {program.eventName ? program.eventName + " yapıyor olacağım" : ""}
    </div>
  );
};

export default Program;
