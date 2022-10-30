import "./App.css";
import { useState } from "react";
import { Button,Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import RoadProgram from "./components/RoadProgram";
import EventProgram from "./components/EventProgram";
import ProgramList from "./components/ProgramList";

function App() {
  const [isRoadModalOpen, setIsRoadModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [programList,setProgramList]= useState([]);
  const showRoadModal = () => {
    setIsRoadModalOpen(true);
  };
  const AddRoad = () => {

    setIsRoadModalOpen(false);
  };
  const handleRoadCancel = () => {
    setIsRoadModalOpen(false);
  };
  
  const showEventModal = () => {
    setIsEventModalOpen(true);
  };
  const AddEvent = () => {

    setIsEventModalOpen(false);
  };
  const handleEventCancel = () => {
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

      <Modal width={1000} open={isEventModalOpen} okText="Add" onOk={AddEvent} onCancel={handleEventCancel}>
      <EventProgram event={event=>setProgramList()}/>
      </Modal>
      <Modal width={1000} open={isRoadModalOpen} okText="Add" onOk={AddRoad} onCancel={handleRoadCancel}>
      <RoadProgram />
      </Modal>
    </div>
  );
}

export default App;
