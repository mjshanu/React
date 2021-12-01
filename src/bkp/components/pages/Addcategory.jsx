import React, { Component } from 'react';
import { MdOutlineFileDownload, MdOutlinePrint, MdPhone, MdCheck, MdLocationPin } from "react-icons/md";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
 import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
export default class  Addcategory extends Component {


    render() {

        
        return (


            <div>

                <main className="inner-content-box">
                    <header className="main-otrer-top">Configration </header>

                    <section className="main-content-area">
                        <div className="main-content-area-inner">
                            <div className="sub-head border-0">Add Category
                                <div className="top-right-outer add-btn-div">
                                <button type="button" class="btn  btn-save "  > Save</button>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 

                                                                   </div>

                                                                   <div className="border-top"></div>
                            </div>

                            <div className="basic-inform-inner padding-top-0" >
                            <div className="col-md-3 padding-left-5">
  <div class="form-group"><label for="exampleFormControlInput1">Product Name</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Laptop</option>
 </select>
  </div>
  </div>
  <div className="add-category-bt">
  <button type="button" class="btn  btn-maincolor"> <SiAddthis className="add-btn-icon"/></button> 
  </div>
  <div className="col-md-3">
  <div className="emplyesearch add-category-seearch">
                                    <input className="form-control" type="text" id="birthday" name="birthday" placeholder="Search " />
                                    <button type="button"> <FaSearch className="add-btn-icon" /></button>
                                </div>
</div>


<div className="row add-category-show-box ">
<div className="col-md-12 inner-box">
<div className="heading">Add  Specifications</div>

<div className="row">

<div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Brand</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Select</option>
 </select>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">SL Numbber</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Select</option>
 </select>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Assect ID</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Select</option>
 </select>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Location</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Select</option>
 </select>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">RAM</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Select</option>
 </select>
  </div>
  </div>
  <div className="col-md-4">
  <div class="form-group"><label for="exampleFormControlInput1">Quantity</label>
  <select id = "dropdown" class="form-control">
    <option value="Post">Select</option>
 </select>
  </div>
  </div>

  <div className="add-category-save-outer">
  <a href="Addproperty"><button type="button" class="btn  btn-save ">  Add</button></a>
            <button type="button" class="btn  btn-cancel " > Cancel </button> 

  </div>
    </div>
    </div>

</div>
                            </div>

                        </div>
                    </section>
                </main>


            </div>
        )
    }
}
