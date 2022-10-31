import "./App.css";
import { useState } from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import RoadProgram from "./components/RoadProgram";
import EventProgram from "./components/EventProgram";
import ProgramList from "./components/ProgramList";
import data from "../src/eventData.json"

function App() {
  const [isRoadModalOpen, setIsRoadModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  const [programList,setProgramList]= useState(data);

  
  const showRoadModal = () => {
    setIsRoadModalOpen(true);
  };
  const addRoad = (roadState) => {
    console.log(roadState)
    let copy = [...programList];
    copy = [...copy, {
       startTime: roadState.startTime,
       endTime: roadState.endTime,
       from: roadState.from,
       to: roadState.to,
       transportation: roadState.transportation,
       }];
    setProgramList(copy);
    setIsRoadModalOpen(false);
  };
  const cancelRoadModal = () => {
    setIsRoadModalOpen(false);
  };
  

  const addEvent = (eventState ) => {
    let copy = [...programList];
    copy = [...copy, {
       startTime: eventState.startTime,
       endTime: eventState.endTime,
       place: eventState.place,
       eventName: eventState.eventName
       }];
    setProgramList(copy);
    setIsEventModalOpen(false);
  }
  const showEventModal = () => {
    setIsEventModalOpen(true);
  };
  const cancelEventModal = () => {
    setIsEventModalOpen(false);
  };
  return (
    <div className="App">

      <ProgramList programList={programList}/>
     
      <Button onClick={showRoadModal} type="primary" ghost className="Button">
        <PlusCircleOutlined />
        New Road
      </Button>
      <Button onClick={showEventModal} type="primary" ghost className="Button">
        <PlusCircleOutlined />
        New Event
      </Button>

      
      <EventProgram
       addEvent={addEvent}
       isModalOpen={isEventModalOpen}
       cancelEventModal={cancelEventModal}/>
      
      <RoadProgram 
      addRoad={addRoad}
      isModalOpen={isRoadModalOpen}
      cancelRoadModal={cancelRoadModal}
      />

    </div>
  );
}

export default App;
