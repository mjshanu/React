import React, { useState, useCallback, useRef, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from "immutability-helper";
import { dashboard, asste, eyeico, location, eyeicoSched, eyeicoreject, eyeicowait, eyenew } from '../../images';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import { MdExitToApp, MdList } from "react-icons/md";
import { MdViewQuilt } from "react-icons/md";
import { mdiEye } from "react-icons/md";
import Tablecand from './Tablecand';
import Popupmodal from "./Popupmodal";
import PropTypes from 'prop-types';
import { constants } from 'smooth-dnd';
import BasicTabs from "./Employeetabs";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import Recruitmentnewmodal from "./Recruitmentnewmodal";
import axios from 'axios';
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from 'react-modal';
import schedule_validation from "../validation/schedule_validation";
import ScheduleInterviewform from "./ScheduleInterviewform";
import Rejectionform from "./Rejectionform";
import rejection_validation from "../validation/rejection_validation";
import {
  DragDropContext,
  Draggable,
  Droppable
} from "react-beautiful-dnd-next";
import { v4 as uuid } from "uuid";

import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
const options = [
  {
    label: "Inprogress",
    value: "Inprogress",
  },
  {
    label: "Schedule",
    value: "Schedule",
  },
  {
    label: "Rejection",
    value: "Rejection",
  },
  {
    label: "Waiting",
    value: "Waiting",
  },
];
const Kanban = () => {
  const [value, setValue] = React.useState(0);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  const [isShowingrejectpopup, setIsShowingrejectpopup] = useState(false);
  const handlesTabs = (e, val) => {
    console.warn(val)
    setValue(val)
  }


  const itemsFromBackend = [
    { id: uuid(), content: "First task", title: "JAVA DEVELOPER2", name: "shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript", view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
    { id: uuid(), content: "First task", title: "JAVA DEVELOPER", name: "shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript", view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
    { id: uuid(), content: "First task", title: "JAVA DEVELOPER2", name: "shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript", view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
    { id: uuid(), content: "First task", title: "JAVA DEVELOPER", name: "shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript", view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" },
    { id: uuid(), content: "First task", title: "JAVA DEVELOPER", name: "shanu", status: "Inprogress", Skill: "HTML, CSS, JavaScript", view: "", exp: "4.6Yrs", ctc: " 5LK/A", exctc: " 5LK/A", location: "kakkand", np: "2 Mth" }
  ];
  const [productsList, setProductsList] = useState([]);

  const [columns, setColumns] = useState([]);
  const loadData = async () => {
    // alert("hii");
    const response = await fetch("http://localhost:8000/api/getcandidates/");
    const scheduleresponse = await fetch("http://localhost:8000/api/getcandidates_schedule/");
    const rejectionresponse = await fetch("http://localhost:8000/api/getcandidates_rejection/");
    const waitingresponse = await fetch("http://localhost:8000/api/getcandidates_waiting/");
    const releaseresponse = await fetch("http://localhost:8000/api/getcandidates_release/");
    const data = await response.json();
    const scheduledata = await scheduleresponse.json();
    const rejectiondata = await rejectionresponse.json();
    const waitingdata = await waitingresponse.json();
    const releasedata = await releaseresponse.json();
    // console.log(data);
    const savedate = data.candidate;
    const schedulesavedata = scheduledata.candidate;
    const rejectionsavedata = rejectiondata.candidate;
    const waitingsavedata = waitingdata.candidate;
    const releasesavedata = releasedata.candidate;
    //console.log(savedate);
    var inprogessObj = JSON.parse(savedate);
    var scheduleObj = JSON.parse(schedulesavedata);
    var rejectionObj = JSON.parse(rejectionsavedata);
    var waitingObj = JSON.parse(waitingsavedata);
    var releaseObj = JSON.parse(releasesavedata);
    setColumns({
      [uuid()]: {
        name: "Inprogress",
        items: inprogessObj,
        count: 2

      },
      [uuid()]: {
        name: "Schedule",
        items: scheduleObj,
        count: 1
      },
      [uuid()]: {
        name: "Rejection",
        items: rejectionObj,
        count: 3

      },
      [uuid()]: {
        name: "Waiting",
        items: waitingObj,
        count: 4
      },
      [uuid()]: {
        name: "Release",
        items: releaseObj,
        count: 5
      }
    })
  };
  useEffect(() => {
    loadData();
  }, []);
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  function afterOpenModalRejection() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModalRejection() {
    setIsShowingrejectpopup(false);
  }
 
  const ViewSchedulepopUp = async (dragid) => {
    const schid = dragid;
  
    values.s_id=schid;
    setIsOpen(true);
  };
 const ViewRejectionpopUp = async(dragid) => {
  setIsShowingrejectpopup(true);
 }

  const onDragEnd = (result, columns, setColumns) => {

    if (!result.destination) return;
    const { source, destination } = result;
    var values = {};
    if (source.droppableId !== destination.droppableId) {



      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
      // console.log(destItems);

      if (destColumn.name == 'Schedule') {
        ViewSchedulepopUp(result.draggableId);
      } 
     else if(destColumn.name == 'Rejection')
     {
      ViewRejectionpopUp(result.draggableId);
     }
      else {
        values['id'] = result.draggableId;
        values['column'] = destColumn;
        values['index'] = destination.index;
        values['itemsnew'] = destItems;
        values['type'] = "another";
        const update = axios.post('http://localhost:8000/api/updatecolumn', values);
      }
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
      values['type'] = "self";

      values['itemsnew'] = copiedItems;
      const update = axios.post('http://localhost:8000/api/updatecolumn', values);
      // console.log(copiedItems);
    }
  };

  // const [columns, setColumns] = useState(columnsFromBackend);
  const { handleChange, values,handleSubmit,errors } = ScheduleInterviewform(schedule_validation);
  const { handleChangerejection, valuesrejection,handleSubmitrejection,errorsrejection } = Rejectionform(rejection_validation);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal" className="candiate-modal-bx">
        <form  onSubmit={handleSubmit}  className='form' noValidate>
          <div className="popup-head-sty candidate-tab-outer">
            <div className="popup-head-content-sty">
              <h4 ref={(_subtitle) => (subtitle = _subtitle)} className="popup-head-h4">Candidate Details</h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div class="row ">
              <div class="col-md-6 candidate-inform-search">
                <form class="form-group btn-secondary" >
                  <input type="text" placeholder="Search.." name="search" class="form-control"></input>
                  <button type="submit"><i class="fa fa-search"></i></button>
                </form>
              </div>
              <div class="col-md-8">

              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="candidate-tab-outer">
                  <ul class="nav nav-tabs">

                    <li><a href="#tab2" data-toggle="tab">Schedule Details</a></li>

                  </ul>

                  <div class="tab-content">

                    <div class="tab-pane active" id="tab2">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseTwo">
                              Schedule Details
                            </a>
                          </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse">
                          <div class="panel-body">
                            <div class="row popup-content-height popup-row-mrg  candiate-modal-inner-tab">

                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">Panel Members</label>
                                  <input type="text" name="panel_members"  onChange={handleChange} value={values.panel_members} class="form-control" ></input>
                                  {errors.panel_members && <p>{errors.panel_members}</p>}
                                </div>

                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">Interview Date and Time</label>
                                  <input type="date" name="idatetime"  onChange={handleChange} value={values.idatetime} class="form-control" ></input>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">Interview Place</label>
                                  <input type="text" name="iplace" onChange={handleChange} value={values.iplace} class="form-control" ></input>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">Position/Job title</label>
                                  <input type="text" name="jobtitle" onChange={handleChange} value={values.jobtitle} class="form-control" ></input>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">Department/team</label>
                                  <input type="text" name="department_team"  onChange={handleChange} value={values.department_team} class="form-control" ></input>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">Interview Rating</label>
                                  <input type="text" name="interview_rating" onChange={handleChange} value={values.interview_rating} class="form-control" ></input>
                                </div>
                              </div>
                              <input type="hidden" name="s_id" onChange={handleChange} value={values.s_id} class="form-control" ></input>
                              <div class="col-md-12">
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">Comments</label>
                                  <textarea type="text" class="form-control" name="comments" onChange={handleChange} value={values.comments} rows="3" > </textarea>
                                </div>
                              </div>
                              

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div></div>
              </div>
            </div>

          </div>
          <div>
            <button type="submit" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " onClick={closeModal} > Cancel </button>
          </div>


        </form>
      </Modal>
      <Modal
        isOpen={isShowingrejectpopup}
        onAfterOpen={afterOpenModalRejection}
        onRequestClose={closeModalRejection}
        contentLabel="Example Modal" className="candiate-modal-bx">
        <form  onSubmit={handleSubmitrejection}  className='form' noValidate>
          <div className="popup-head-sty candidate-tab-outer">
            <div className="popup-head-content-sty">
              <h4 ref={(_subtitle) => (subtitle = _subtitle)} className="popup-head-h4">Candidate Rejection Details</h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModalRejection} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div class="row ">
              <div class="col-md-6 candidate-inform-search">
                <form class="form-group btn-secondary" >
                  <input type="text" placeholder="Search.." name="search" class="form-control"></input>
                  <button type="submit"><i class="fa fa-search"></i></button>
                </form>
              </div>
              <div class="col-md-8">

              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="candidate-tab-outer">
                  <ul class="nav nav-tabs">

                    <li><a href="#tab2" data-toggle="tab">Rejection  Details</a></li>

                  </ul>

                  <div class="tab-content">

                    <div class="tab-pane active" id="tab2">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseTwo">
                            Rejection Details
                            </a>
                          </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse">
                          <div class="panel-body">
                            <div class="row popup-content-height popup-row-mrg  candiate-modal-inner-tab">

                            <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Candidate Status</label>
                               
                                <select  class="form-control"  name="rejectionstatus" onChange={handleChangerejection} value={valuesrejection.rejectionstatus}>
                                   <option value="">Choose your status </option>
                                   <option value="1">Rejected by admin</option>
                                   <option value="1">Rejected by employee</option>
                                   </select>
                                   {errorsrejection.rejectionstatus && <p>{errorsrejection.rejectionstatus}</p>}
                            </div>
                            </div>
                             
                              <div class="col-md-8">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Reasons</label>
                                    <input type="text" name="reason" onChange={handleChangerejection} class="form-control"  value={valuesrejection.reason}></input>
                                    {errorsrejection.reason && <p>{errorsrejection.reason}</p>}
                                </div>
                            </div>


                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Remark</label>
                                    <textarea class="form-control"   name="remark"  onChange={handleChangerejection}  rows="3" value={valuesrejection.remark}> </textarea>
                                </div>
                            </div>
                             
                           
                             
                              <input type="hidden" name="r_id"  onChange={handleChangerejection}  class="form-control"   ></input>
                             
                              

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div></div>
              </div>
            </div>

          </div>
          <div>
            <button type="submit" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " onClick={closeModalRejection} > Cancel </button>
          </div>


        </form>
      </Modal>
      <main className="inner-content-box">
        <header className="main-otrer-top"> Recruitment </header>
        <DndProvider backend={HTML5Backend}>
          <section className="main-content-area">
            <div className="main-content-area-inner">
              <div className="sub-head">Candidate Information
                <div className="top-right-outer add-btn-div">
                  <div>
                    <Recruitmentnewmodal />
                  </div>
                </div>


              </div>
              <div className="recruitment-top-right-box recruitment-box-padding">
                <div className="calendar-width">
                  <input className="form-control" type="date" id="birthday" name="birthday" />
                </div>
                <div className="calendar-width ">
                  <select id="dropdown" class="form-control"><option value="Status">Status</option></select>
                </div>
                <div className="calendar-width mobile-search-none">
                  <input className="form-control" type="text" id="birthday" name="birthday" placeholder="Candidate name" />
                </div>

                <div className="search-icon-width mobile-search-none ">
                  <div className="top-right-outer add-btn-div">
                    <button type="button" class="btn  btn-maincolor btn-block"> <FaSearch className="add-btn-icon" /></button>

                  </div>               </div>
                <div className="search-icon-width  mobile-seardh-show">
                  <div class="search-box add-btn-div ">
                    <input type="text" class="search-box-input" placeholder="Candidate name" />
                    <button type="button" class="btn  btn-maincolor search-box-btn"> <FaSearch className="add-btn-icon" /></button>
                  </div>
                </div>

              </div>

              <AppBar position="static" className="tab-outer-head tabmob-none">
                <Tabs value={value} onChange={handlesTabs} aria-label="icon tabs example" >
                  <Tab icon={<MdViewQuilt />} aria-label="List" />
                  <Tab icon={<MdList />} aria-label="List" />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0} >
                <div className="tab-outer-main">
                  <div className="accrodion-mob-outer">
                    <Accordion preExpanded={"a"}>
                      <AccordionItem uuid="a">
                        <AccordionItemHeading className="accordion-inprogress">
                          <AccordionItemButton >
                            <div className="accordion-head-text">
                              <div className="name">Anil Kumar</div>
                              <div className="desi">Java developer</div>
                            </div>   <div className="col-4 acc-status-change">
                              <select className="select-dropdow">
                                {options.map((option) => (
                                  <option value={option.value}>{option.label}</option>
                                ))}
                              </select>
                            </div></AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className="accord-detals-box">
                            <div className="left">Skill Set</div>
                            <div className="right">HTML, CSS, JavaScript, Figma</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="left">EXP </div>
                            <div className="right">: 4.6 Years</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="left">CTC </div>
                            <div className="right">: 5 LK/A</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="left">Location</div>
                            <div className="right">: Kakkanad</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="accordion-bottom-button">
                              <div className="more-button">View</div>
                              <div className="more-button more-outer">Edit</div>
                              <div className="more-button more-outer">Delete</div>
                            </div>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="b">
                        <AccordionItemHeading className="accordion-schedule">
                          <AccordionItemButton>   <div className="accordion-head-text">
                            <div className="name">Anil Kumar</div>
                            <div className="desi">Java developer</div>
                          </div>   <div className="col-4 acc-status-change">
                              <select className="select-dropdow">
                                {options.map((option) => (
                                  <option value={option.value}>{option.label}</option>
                                ))}
                              </select>
                            </div></AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className="accord-detals-box">
                            <div className="left">Skill Set</div>
                            <div className="right">HTML, CSS, JavaScript, Figma</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="left">EXP </div>
                            <div className="right">: 4.6 Years</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="left">CTC </div>
                            <div className="right">: 5 LK/A</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="left">Location</div>
                            <div className="right">: Kakkanad</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="accordion-bottom-button">
                              <div className="more-button">View</div>
                              <div className="more-button more-outer">Edit</div>
                              <div className="more-button more-outer">Delete</div>
                            </div>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>

                      <AccordionItem uuid="c">
                        <AccordionItemHeading className="accordion-rejection">
                          <AccordionItemButton>   <div className="accordion-head-text">
                            <div className="name">Anil Kumar</div>
                            <div className="desi">Java developer</div>
                          </div>   <div className="col-4 acc-status-change">
                              <select className="select-dropdow">
                                {options.map((option) => (
                                  <option value={option.value}>{option.label}</option>
                                ))}
                              </select>
                            </div></AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className="accord-detals-box">
                            <div className="left">Skill Set</div>
                            <div className="right">: HTML, CSS, JavaScript, Figma</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="left">EXP </div>
                            <div className="right">: 4.6 Years</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="left">CTC </div>
                            <div className="right">5 LK/A</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="left">Location</div>
                            <div className="right">: Kakkanad</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="accordion-bottom-button">
                              <div className="more-button">View</div>
                              <div className="more-button more-outer">Edit</div>
                              <div className="more-button more-outer">Delete</div>
                            </div>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="d">
                        <AccordionItemHeading className="accordion-wating">
                          <AccordionItemButton>   <div className="accordion-head-text">
                            <div className="name">Anil Kumar</div>
                            <div className="desi">Java developer</div>
                          </div>   <div className="col-4 acc-status-change">
                              <select className="select-dropdow">
                                {options.map((option) => (
                                  <option value={option.value}>{option.label}</option>
                                ))}
                              </select>
                            </div></AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className="accord-detals-box">
                            <div className="left">Skill Set</div>
                            <div className="right">: HTML, CSS, JavaScript, Figma</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="left">EXP </div>
                            <div className="right">: 4.6 Years</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="left">CTC </div>
                            <div className="right">: 5 LK/A</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="left">Location</div>
                            <div className="right">: Kakkanad</div>
                          </div>
                          <div className="accord-detals-box">
                            <div className="accordion-bottom-button">
                              <div className="more-button">View</div>
                              <div className="more-button more-outer">Edit</div>
                              <div className="more-button more-outer">Delete</div>
                            </div>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="tab-outer darg-outer desktop-show">
                    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
                      <DragDropContext
                        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
                      >
                        {Object.entries(columns).map(([columnId, column], index) => {
                          return (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                              }}
                              key={columnId} className="candidate-boxouter drag-boxs"
                            >
                              <div className="candidate-box ">
                                <div className="card-head-bg">
                                  <div className="card-header-sty">
                                    {column.name}</div>

                                  <div class="pull-right"><button className="card-header-bt-rigt"> {column.count}Items</button></div>
                                </div>
                                <div >
                                  <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          {...provided.droppableProps}
                                          ref={provided.innerRef}
                                          style={{

                                          }}
                                          className="darg-inner-box"
                                        >
                                          {column.items.map((item, index) => {
                                            return (
                                              <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}
                                              >
                                                {(provided, snapshot) => {
                                                  return (
                                                    <div
                                                      ref={provided.innerRef}
                                                      {...provided.draggableProps}
                                                      {...provided.dragHandleProps}
                                                      className="user-drag-box"
                                                    >
                                                      <div className="drag-sub-box">
                                                        <div className="in-progress-card--bt-top">
                                                          {item.post}
                                                        </div>
                                                        <div className=" in-progress-card-bx">
                                                          <div className="in-progress-name-sty">
                                                            {item.name}
                                                          </div>
                                                          <div className="eye-new-icon">
                                                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M0.957514 3.64635L3.25493 1.55779C5.53914 -0.519262 9.25705 -0.519262 11.5413 1.55779L13.8387 3.64635C14.0538 3.84189 14.0538 4.15798 13.8387 4.35353L11.5413 6.44209C10.3992 7.48037 8.8989 8 7.39811 8C5.89731 8 4.39706 7.48037 3.25496 6.44209L0.95754 4.35353C0.742414 4.15798 0.742414 3.84189 0.957514 3.64635ZM7.39811 6.50061C8.91486 6.50061 10.1489 5.3788 10.1489 3.99993C10.1489 2.62106 8.91486 1.49925 7.39811 1.49925C5.88135 1.49925 4.64736 2.62106 4.64736 3.99993C4.64736 5.3788 5.88135 6.50061 7.39811 6.50061Z" fill="#B93E86" />
                                                              <path d="M7.39802 2.49902C8.30795 2.49902 9.04846 3.17221 9.04846 3.99943C9.04846 4.82664 8.30795 5.49983 7.39802 5.49983C6.48808 5.49983 5.74757 4.82664 5.74757 3.99943C5.74757 3.17221 6.48805 2.49902 7.39802 2.49902Z" fill="#B93E86" />
                                                            </svg>

                                                          </div>
                                                        </div>
                                                        <div className="skill-box">
                                                          {item.skillset}
                                                        </div>
                                                        <div className=" in-progress-card-bx">
                                                          <div className="in-progress-name-thre-colm p-l-0 ">EXP : {item.total_exp}</div>
                                                          <div className="in-progress-name-thre-colm  ">CTC :{item.ctc}</div>
                                                          <div className="in-progress-name-thre-colm b-r-0 ">EXCTC : {item.exp_ctc}</div>
                                                        </div>
                                                        <div className=" in-progress-card-bx location-outer border-bottom-0">
                                                          <div className="in-progress-location ">
                                                            <img src={location} />  <span>{item.location}</span>
                                                          </div>
                                                          <div class="in-progress-location t-r">
                                                            NP: {item.np}
                                                          </div>
                                                        </div>

                                                      </div>

                                                    </div>
                                                  );
                                                }}
                                              </Draggable>
                                            );
                                          })}
                                          {provided.placeholder}
                                        </div>
                                      );
                                    }}
                                  </Droppable>
                                </div>
                              </div>  </div>
                          );
                        })}
                      </DragDropContext>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="tab-outer">
                  <Tablecand />


                </div>
              </TabPanel>


            </div>
          </section>
        </DndProvider>
      </main> </div>
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
  return <div ref={ref} className="drag-boxs"> {children}</div>;
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

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div>
      {
        value === index && (
          <h1>{children}</h1>
        )
      }
    </div>
  )
}