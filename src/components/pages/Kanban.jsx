import React, { useState, useCallback, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from "immutability-helper";
import {dashboard,asste,eyeico,location,eyeicoSched,eyeicoreject,eyeicowait,eyenew } from '../../images';
const tasksList = [
  { _id: 1, title: "JAVA DEVELOPER",name:"shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth"},
  { _id: 2, title: "Second Task", name:"shanu",status: "Inprogress", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
  { _id: 3, title: "Third Task", name:"shanu",status: "Inprogress", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
  { _id: 4, title: "Fourth Task",name:"shanu", status: "Schedule" , Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
  { _id: 5, title: "Fifth Task",name:"shanu", status: "Schedule", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
  { _id: 6, title: "Sixth Task", name:"shanu",status: "rejection", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
  { _id: 7, title: "Seventh Task",name:"shanu", status: "review", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
  { _id: 8, title: "Eighth Task",name:"shanu", status: "review", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
  { _id: 9, title: "Ninth Task", name:"shanu",status: "rejection", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
  { _id: 10, title: "Tenth Task",name:"shanu", status: "Waiting", Skill: "HTML, CSS, JavaScript" , view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" }
];

const channels = ["Inprogress", "Schedule", "rejection", "Waiting"];
const labelsMap = {
    Inprogress: "Inprogress",
    Schedule: "Schedule",
    rejection: "Rejection",
    Waiting: "Waiting",
  
};

const classes = {
  board: {
    display: "flex",
    margin: "0 auto",
    width: "90vw",
    fontFamily: 'Arial, "Helvetica Neue", sans-serif'
  },
  column: {
    minWidth: 200,
    width: "18vw",
    height: "80vh",
    margin: "0 auto",
    backgroundColor: "#FCC8B2"
  },
  columnHead: {
    textAlign: "center",
    padding: 10,
    fontSize: "1.2em",
    backgroundColor: "#C6D8AF"
  },
  item: {
    padding: 10,
    margin: 10,
    fontSize: "0.8em",
    cursor: "pointer",
    backgroundColor: "white"
  }
};

const Kanban = () => {
  const [tasks, setTaskStatus] = useState(tasksList);

  const changeTaskStatus = useCallback(
    (id, status) => {
      let task = tasks.find(task => task._id === id);
      const taskIndex = tasks.indexOf(task);
      task = { ...task, status };
      let newTasks = update(tasks, {
        [taskIndex]: { $set: task }
      });
      setTaskStatus(newTasks);
    },
    [tasks]
  );

  return (
    <main >
      <header className="main-otrer-top"> Recruitment </header>
      <DndProvider backend={HTML5Backend}>
        <section  className="main-content-area">
            <div className="main-content-area-inner">
            <div className="sub-head">Candidate Information 
    <div className="top-right-outer add-btn-div">
    <button type="button" class="btn  btn-maincolor btn-block">  ADD</button> 
    </div>
</div>
                
          {channels.map(channel => (
            <KanbanColumn
              key={channel}
              status={channel}
              changeTaskStatus={changeTaskStatus}
            >
                <div className="candidate-boxouter">
              <div  className="candidate-box">
                <div className="card-head-bg">
                    <div className="card-header-sty">
                    {labelsMap[channel]}</div>

                    <div class="pull-right"><button className="card-header-bt-rigt">40 Items</button></div>
                    </div>


                    
                <div className="box-Draggable">
                  {tasks
                    .filter(item => item.status === channel)
                    .map(item => (
                      <KanbanItem key={item._id} id={item._id}>
                        <div className="drag-sub-box">
                            <div className="in-progress-card--bt-top">
                            {item.title}
                            </div>
                            <div className=" in-progress-card-bx">
                                <div className="in-progress-name-sty">
                                {item.name}
                                </div>
                                <div className="eye-new-icon">
                                <img src={eyenew}/>
                                </div>
                                </div>
                                <div className="skill-box">
                            {item.Skill}
                            </div>
                            <div className=" in-progress-card-bx">
                                <div className="in-progress-name-thre-colm p-l-0 ">EXP : {item.exp}</div>
                                <div className="in-progress-name-thre-colm  ">CTC :{item.ctc}</div>
                                <div className="in-progress-name-thre-colm b-r-0 ">EXCTC : {item.exctc}</div>
                                </div>
                                <div className=" in-progress-card-bx location-outer border-bottom-0">
                               <div className="in-progress-location ">
                               <img src={location}/>  <span>{item.location}</span> 
                                   </div>
                                   <div class="in-progress-location t-r">
                                   NP: {item.np}
                 </div>
                                </div>

                            </div>
                      
                        
                      </KanbanItem>
                    ))}
                </div>
              </div>
              </div>
            </KanbanColumn>
          ))}
          </div>
                  </section>
      </DndProvider>
    </main>
  );
};

export default Kanban;

const KanbanColumn = ({ status, changeTaskStatus, children }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    drop(item) {
      changeTaskStatus(item.id, status);
    }
  });
  drop(ref);
  return <div ref={ref}> {children}</div>;
};

const KanbanItem = ({ id, children }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { id },
    type: "card",
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  

  const opacity = isDragging ? 0 : 1;
  drag(ref);
  return (
    <div ref={ref} style={{ opacity }}>
      {children}
    </div>
  );
};