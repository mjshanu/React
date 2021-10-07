import React from 'react';
import ReactDOM from 'react-dom'; 
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from 'react-modal'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
 
 
import 'react-tabs/style/react-tabs.css';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
     width: '75%',
     boarder: '0',
     color: '#000'
    },
  };
  
   

 

export default function Popupmodal(){
    const CustomTab = ({ children }) => (
        <Tab>
          <div>{children}</div>
        </Tab>
      );
      CustomTab.tabsRole = 'Tab';
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  


  return (
    <div>
     
      <button type="button" class="btn  btn-maincolor btn-block" onClick={openModal} > <SiAddthis className="add-btn-icon"/> ADD</button> 
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal" >
        <div className="popup-head-sty">
            <div className="popup-head-content-sty">
                <h4 ref={(_subtitle) => (subtitle = _subtitle)} className="popup-head-h4">Candidate Details</h4>
            </div>
            <div className="popup-head-icon-sty">
               <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
        </div>
        <div className="popup-content-bg">
            <div class="row ">
                            <div class="col-md-4">
                            <form class="form-group btn-secondary" >
                                <input type="text" placeholder="Search.." name="search" class="form-control"></input>
                                <button type="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                            <div class="col-md-8">
                            <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Status
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div><a class="dropdown-item" href="#">Action</a></div>
                                        <div><a class="dropdown-item" href="#">Another </a></div>                                        
                                    </div>
                                    </div>
                            </div>
            </div>
            <Tabs>
                <TabList>
                <CustomTab>Basic Information</CustomTab>
                <CustomTab>Schedule Details </CustomTab>
                <CustomTab>Rejection Reasons</CustomTab>
                </TabList>
                <TabPanel>
                     <div class="row popup-content-height">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Post</label>
                                <input type="text" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Skill Set</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Personal Email ID </label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Contact Number</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Education</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Total years of experience</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">CTC</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">EXP CTC</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Notice Period</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Date Of Birth </label>
                                <input type="date" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Location</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Current Company</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Domain Experience</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Apply date</label>
                                <input type="date" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Primary Skills</label>
                                <textarea  class="form-control" rows="2" > </textarea>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Secondary Skills</label>
                                <textarea  class="form-control" rows="2" > </textarea>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">References</label>
                                <textarea  class="form-control" rows="2" > </textarea>
                            </div>
                        </div>
                        
                     </div>
                </TabPanel>
                <TabPanel>
                <div class="row popup-content-height">
                        
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Panel Members</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Interview Date and Time</label>
                                <input type="date" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Interview Place</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Position/Job title</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Department/team</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Interview Rating</label>
                                <input type="date" class="form-control" ></input>
                            </div>
                        </div>
                         
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Comments</label>
                                <textarea  class="form-control" rows="3" > </textarea>
                            </div>
                        </div>
                        
                     </div>

                </TabPanel>
                <TabPanel>
                    
                <div class="row popup-content-height">
                        
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Candidate Status</label>
                                <input type="email" class="form-control" ></input>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Reasons</label>
                                <input type="date" class="form-control" ></input>
                            </div>
                        </div>
                        
                         
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Remark</label>
                                <textarea  class="form-control" rows="3" > </textarea>
                            </div>
                        </div>
                        
                     </div>
                </TabPanel>
            </Tabs>
        </div>
        <div>
            <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel "  onClick={closeModal} > Cancel </button> 
        </div>
        
       
                
      </Modal>
    </div>
  );
}
 