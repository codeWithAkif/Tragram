import "./App.css";
import { useState } from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import RoadProgram from "./components/RoadProgram";
import EventProgram from "./components/EventProgram";
import ProgramList from "./components/ProgramList";

function App() {
  const [roadVisible, setRoadVisible] = useState(false);
  const [eventVisible, setEventVisible] = useState(false);
  function Road() {
    setRoadVisible(true);
    console.log("open road");
  }
  function Event() {
    setEventVisible(true);
    console.log("open event");
  }
  function AddEvent() {
    setEventVisible(false);
  }
  function AddRoad() {
    setRoadVisible(false);
  }
  return (
    <div className="App">
      <ProgramList />
      {roadVisible ? (
        <div>
          <RoadProgram />
          <Button onClick={AddRoad}>Add</Button>
        </div>
      ) : null}

      {eventVisible ? (
        <div>
          <EventProgram />
          <Button onClick={AddEvent}>Add</Button>
        </div>
      ) : null}
      <Button onClick={Road} type="primary" ghost className="Button">
        <PlusCircleOutlined />
        New Road
      </Button>
      <Button onClick={Event} type="primary" ghost className="Button">
        <PlusCircleOutlined />
        New Event
      </Button>
    </div>
  );
}

export default App;
