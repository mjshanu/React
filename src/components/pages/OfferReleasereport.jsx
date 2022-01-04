import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineFileDownload, MdOutlinePrint, MdPhone, MdCheck, MdLocationPin } from "react-icons/md";
import { withStyles } from '@material-ui/core/styles';
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import Table from '@material-ui/core/Table'; 
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Jobdetailsmodal from "./Jobdetailsmodal"; 
import {location, PencilNew, DeferTime} from '../../images';
import {profilei,  } from '../../images/profilei.svg'; 
import Addorganization from './Addorgaization';
import Addbranches from './Addbranches';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hide',
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  }
});

let id = 0;
function createData(JobId, CandidateName , Department, Post, JoiningDate, ReleaseDate, Location, Contact, action) {
  id += 1;
  return { JobId, CandidateName , Department, Post, JoiningDate, ReleaseDate, Location, Contact, action };
}

const data = [
  createData('0101', 'Shanu K','JAVA', 'Java Developer', '12/02/2022', '30/12/2021', 'Cochin', '000000000', ''),  
  createData('0101', 'Shanu K','JAVA', 'Java Developer', '12/02/2022', '30/12/2021', 'Cochin', '000000000', ''),  
  createData('0101', 'Shanu K','JAVA', 'Java Developer', '12/02/2022', '30/12/2021', 'Cochin', '000000000', ''),  
];


  export default class OfferReleasereport extends Component {
  render() {
    return (
        <main className="inner-content-box">
      <header className="main-otrer-top"> Recruitment </header>
             <section  className="main-content-area">
                <div className="main-content-area-inner">
                    <div className="sub-head organization-sub-head">Offer Release Report
                    <div className="top-right-outer add-btn-div">
                                    <div className="buttons-outer">
                                        <a href="Addassets" className="blue-button">
                                            Export
                                        </a>
                                    </div>

                                    
                                </div>
                    </div>
                    <div className="asset-top offer-release-top-section">
                                <div className="offer-release-seasrch">
                                    <input className="form-control" type="text" id=" " name=" " placeholder="Search " />
                                    <button type="button"> <FaSearch className="add-btn-icon" /></button>
                                </div>
                                <div className="offer-release-right-top-box">
                                    <div className="release-to-date ">  
                                    Date
                                    </div>
                                    <div className="release-calendar-width ">
                  <input className="form-control" type="date" id="birthday" name="birthday" />
                </div>
                                </div>
                            </div>
                    <div className="col-md-12 job-main-tb-outer">    
                    <Paper className="recruitment-table-outer job-outer organazation-table-top">
      <Table className="recruitment-tabele">
        <TableHead>
        
        <TableRow>
        
            <TableCell className="width-12">Job Offer ID</TableCell>
            <TableCell className="width-15">Candidate Name</TableCell>
            <TableCell className="width-15">Department </TableCell>
            <TableCell className="width-15">Post</TableCell>
            <TableCell className="width-12">Joining Date</TableCell>
            <TableCell className="width-12">Release Date</TableCell>
            <TableCell className="width-15">Location</TableCell>
            <TableCell className="width-12">Contact</TableCell>
                  <TableCell className="width-20 offer-map-width ">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map(n => {
            return (
              <TableRow  key={n.id} >
                    <TableCell  className="width-12"> {n.JobId}</TableCell>
                    <TableCell numeric className="width-15">{n.CandidateName}</TableCell>                          
                    <TableCell numeric className=" width-15">{n.Department} </TableCell>
                    <TableCell numeric className=" width-15">{n.Post} </TableCell>
                    <TableCell numeric className="width-12">{n.JoiningDate}</TableCell>
                    <TableCell numeric className="width-12">{n.ReleaseDate}</TableCell>
                    <TableCell numeric className="width-15">{n.Location}</TableCell>
                    <TableCell numeric className="width-12">{n.Contact}</TableCell>
                    <TableCell numeric className="width-20 inprogress-td offer-map-width">
                    <div className="emp-map-iocn-outer">
                                     <div class="inprograss-style emp-map-outer">EMP Mapping</div>

                       <div className="emp-edit-new-icon ">
               <a href="/Assetsdetails">
               <img src={PencilNew} />
         
</a>
                             </div>
<div className="emp-defer-icon ">
  <a href="">
  <img src={DeferTime}/>
</a>
</div>


                             </div>

                    </TableCell>
                                      </TableRow>
             
            );
          })}
            
       
          
        </TableBody>
      </Table>
       
       </Paper>          
                    </div>

                    <div className="accrodion-mob-outer">
  <Accordion preExpanded={"a"} className="job-accrodion">
  <AccordionItem uuid="a">
        <AccordionItemHeading className="accordion-active-status">
          <AccordionItemButton >
            <div className="accordion-head-text">
            <div className="name notificatio-outer">Shanu K
                  </div>
                  <div className="desi joblocation">
                  000000000       
            </div>
                    </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">0101</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Department</div>
         <div className="right">: Java </div>
        </div>
        <div className="accord-detals-box">
         <div className="left">POST</div>
         <div className="right">: Java Developer</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Joining Date </div>
         <div className="right">: 12/02/2022</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Release DatE </div>
         <div className="right">: 30/12/2021</div>
        </div>
                    <div className="accord-detals-box">
        <div className="accordion-bottom-button Offer-release-bt-buttons">
<div className="more-button mapping-button">EMP Mapping</div>
<div className="more-button more-outer">Edit</div>
<div className="more-button more-outer">Defer</div>
        </div>
        </div>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="b">
      <AccordionItemHeading className="accordion-active-status">
          <AccordionItemButton >
            <div className="accordion-head-text">
            <div className="name notificatio-outer">Keyboard
                  </div>
            <div className="desi joblocation">
            Logitech        
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">BTLP01</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Connector Type</div>
         <div className="right">: USB</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Special Feature </div>
         <div className="right">:Not In Use</div>
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
      <AccordionItemHeading className="accordion-active-status">
          <AccordionItemButton >
            <div className="accordion-head-text">
            <div className="name notificatio-outer">Keyboard
                  </div>
            <div className="desi joblocation">
            Logitech        
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">BTLP01</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Connector Type</div>
         <div className="right">: USB</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Special Feature </div>
         <div className="right">:Not In Use</div>
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
      <AccordionItemHeading className="accordion-active-status">
          <AccordionItemButton >
            <div className="accordion-head-text">
            <div className="name notificatio-outer">Keyboard
                  </div>
            <div className="desi joblocation">
            Logitech        
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">BTLP01</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Connector Type</div>
         <div className="right">: USB</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Special Feature </div>
         <div className="right">:Not In Use</div>
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

                </div>
            </section>
    </main>
    
    )
}
  }
