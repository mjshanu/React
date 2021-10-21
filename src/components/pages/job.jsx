import React from 'react'
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Jobdetailsmodal from "./Jobdetailsmodal"; 


export default function Job() {
    
    return (
        <main className="inner-content-box">
      <header className="main-otrer-top"> Job </header>
      <DndProvider backend={HTML5Backend}>
            <section  className="main-content-area">
                <div className="main-content-area-inner">
                    <div className="sub-head"> Job Openings
                        <div className="top-right-outer add-btn-div"> 
                        <Jobdetailsmodal />
                                         
                        </div>
                    </div>
                    <div className="recruitment-top-right-box"> </div>  
                    <div className="col-md-12">    
                    <Paper className="recruitment-table-outer">
      <Table className="recruitment-tabele">
        <TableHead>
        <TableRow>
            <TableCell className="width-8">Job ID</TableCell>
            <TableCell className="width-12">Post</TableCell>
            <TableCell className="width-15">Skill set</TableCell>
            <TableCell className="width-8">Exp</TableCell>
            <TableCell className="width-8">Openings</TableCell>
            <TableCell className="width-8">Location</TableCell>
            <TableCell className="width-10">Posted Date </TableCell>
            <TableCell className="width-10">Post Close</TableCell>
            <TableCell className="width-8">Status</TableCell>
            <TableCell className="width-8">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow  >
              <TableCell  className="width-8"> 001</TableCell>
              <TableCell numeric className="width-12">PHP Developer</TableCell>                          
              <TableCell numeric className=" width-15">PHP, CSS, JavaScript </TableCell>
              <TableCell numeric className="width-8">5 Years</TableCell>
              <TableCell numeric className="width-8">12 </TableCell>
              <TableCell numeric className="width-8">Kakkanad</TableCell>
              <TableCell numeric className="width-10">10-10-2021</TableCell>  
              <TableCell numeric className="width-10">20-11-2021</TableCell>  
              <TableCell numeric className="width-8 inprogress-td">
              <div className ="inprograss-style">Active</div>
              </TableCell>
              <TableCell numeric className="width-8">
                <div className="action-outer">
             
                <div className="eye-new-icon inprogress ">
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.957514 3.64635L3.25493 1.55779C5.53914 -0.519262 9.25705 -0.519262 11.5413 1.55779L13.8387 3.64635C14.0538 3.84189 14.0538 4.15798 13.8387 4.35353L11.5413 6.44209C10.3992 7.48037 8.8989 8 7.39811 8C5.89731 8 4.39706 7.48037 3.25496 6.44209L0.95754 4.35353C0.742414 4.15798 0.742414 3.84189 0.957514 3.64635ZM7.39811 6.50061C8.91486 6.50061 10.1489 5.3788 10.1489 3.99993C10.1489 2.62106 8.91486 1.49925 7.39811 1.49925C5.88135 1.49925 4.64736 2.62106 4.64736 3.99993C4.64736 5.3788 5.88135 6.50061 7.39811 6.50061Z" fill="#B93E86"/>
<path d="M7.39802 2.49902C8.30795 2.49902 9.04846 3.17221 9.04846 3.99943C9.04846 4.82664 8.30795 5.49983 7.39802 5.49983C6.48808 5.49983 5.74757 4.82664 5.74757 3.99943C5.74757 3.17221 6.48805 2.49902 7.39802 2.49902Z" fill="#B93E86"/>
</svg>
                                </div>
                                </div>
                 
                </TableCell>
            </TableRow>
            <TableRow  >
              <TableCell  className="width-8"> 001</TableCell>
              <TableCell numeric className="width-12">PHP Developer</TableCell>                          
              <TableCell numeric className=" width-15">PHP, CSS, JavaScript </TableCell>
              <TableCell numeric className="width-8">5 Years</TableCell>
              <TableCell numeric className="width-8">12 </TableCell>
              <TableCell numeric className="width-8">Kakkanad</TableCell>
              <TableCell numeric className="width-10">10-10-2021</TableCell>  
              <TableCell numeric className="width-10">20-11-2021</TableCell>  
              <TableCell numeric className="width-8 inprogress-td">
              <div className ="inprograss-style">Active</div>
              </TableCell>
              <TableCell numeric className="width-8">
                <div className="action-outer">
             
                <div className="eye-new-icon inprogress ">
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.957514 3.64635L3.25493 1.55779C5.53914 -0.519262 9.25705 -0.519262 11.5413 1.55779L13.8387 3.64635C14.0538 3.84189 14.0538 4.15798 13.8387 4.35353L11.5413 6.44209C10.3992 7.48037 8.8989 8 7.39811 8C5.89731 8 4.39706 7.48037 3.25496 6.44209L0.95754 4.35353C0.742414 4.15798 0.742414 3.84189 0.957514 3.64635ZM7.39811 6.50061C8.91486 6.50061 10.1489 5.3788 10.1489 3.99993C10.1489 2.62106 8.91486 1.49925 7.39811 1.49925C5.88135 1.49925 4.64736 2.62106 4.64736 3.99993C4.64736 5.3788 5.88135 6.50061 7.39811 6.50061Z" fill="#B93E86"/>
<path d="M7.39802 2.49902C8.30795 2.49902 9.04846 3.17221 9.04846 3.99943C9.04846 4.82664 8.30795 5.49983 7.39802 5.49983C6.48808 5.49983 5.74757 4.82664 5.74757 3.99943C5.74757 3.17221 6.48805 2.49902 7.39802 2.49902Z" fill="#B93E86"/>
</svg>
                                </div>
                                </div>
                 
                </TableCell>
            </TableRow>
            <TableRow  >
              <TableCell  className="width-8"> 001</TableCell>
              <TableCell numeric className="width-12">PHP Developer</TableCell>                          
              <TableCell numeric className=" width-15">PHP, CSS, JavaScript </TableCell>
              <TableCell numeric className="width-8">5 Years</TableCell>
              <TableCell numeric className="width-8">12 </TableCell>
              <TableCell numeric className="width-8">Kakkanad</TableCell>
              <TableCell numeric className="width-10">10-10-2021</TableCell>  
              <TableCell numeric className="width-10">20-11-2021</TableCell>  
              <TableCell numeric className="width-8 inprogress-td">
              <div className ="inprograss-style">Active</div>
              </TableCell>
              <TableCell numeric className="width-8">
                <div className="action-outer">
             
                <div className="eye-new-icon inprogress ">
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.957514 3.64635L3.25493 1.55779C5.53914 -0.519262 9.25705 -0.519262 11.5413 1.55779L13.8387 3.64635C14.0538 3.84189 14.0538 4.15798 13.8387 4.35353L11.5413 6.44209C10.3992 7.48037 8.8989 8 7.39811 8C5.89731 8 4.39706 7.48037 3.25496 6.44209L0.95754 4.35353C0.742414 4.15798 0.742414 3.84189 0.957514 3.64635ZM7.39811 6.50061C8.91486 6.50061 10.1489 5.3788 10.1489 3.99993C10.1489 2.62106 8.91486 1.49925 7.39811 1.49925C5.88135 1.49925 4.64736 2.62106 4.64736 3.99993C4.64736 5.3788 5.88135 6.50061 7.39811 6.50061Z" fill="#B93E86"/>
<path d="M7.39802 2.49902C8.30795 2.49902 9.04846 3.17221 9.04846 3.99943C9.04846 4.82664 8.30795 5.49983 7.39802 5.49983C6.48808 5.49983 5.74757 4.82664 5.74757 3.99943C5.74757 3.17221 6.48805 2.49902 7.39802 2.49902Z" fill="#B93E86"/>
</svg>
                                </div>
                                </div>
                 
                </TableCell>
            </TableRow>
            <TableRow  >
              <TableCell  className="width-8"> 001</TableCell>
              <TableCell numeric className="width-12">PHP Developer</TableCell>                          
              <TableCell numeric className=" width-15">PHP, CSS, JavaScript </TableCell>
              <TableCell numeric className="width-8">5 Years</TableCell>
              <TableCell numeric className="width-8">12 </TableCell>
              <TableCell numeric className="width-8">Kakkanad</TableCell>
              <TableCell numeric className="width-10">10-10-2021</TableCell>  
              <TableCell numeric className="width-10">20-11-2021</TableCell>  
              <TableCell numeric className="width-8 inprogress-td">
              <div className ="inprograss-style">Active</div>
              </TableCell>
              <TableCell numeric className="width-8">
                <div className="action-outer">
             
                <div className="eye-new-icon inprogress ">
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.957514 3.64635L3.25493 1.55779C5.53914 -0.519262 9.25705 -0.519262 11.5413 1.55779L13.8387 3.64635C14.0538 3.84189 14.0538 4.15798 13.8387 4.35353L11.5413 6.44209C10.3992 7.48037 8.8989 8 7.39811 8C5.89731 8 4.39706 7.48037 3.25496 6.44209L0.95754 4.35353C0.742414 4.15798 0.742414 3.84189 0.957514 3.64635ZM7.39811 6.50061C8.91486 6.50061 10.1489 5.3788 10.1489 3.99993C10.1489 2.62106 8.91486 1.49925 7.39811 1.49925C5.88135 1.49925 4.64736 2.62106 4.64736 3.99993C4.64736 5.3788 5.88135 6.50061 7.39811 6.50061Z" fill="#B93E86"/>
<path d="M7.39802 2.49902C8.30795 2.49902 9.04846 3.17221 9.04846 3.99943C9.04846 4.82664 8.30795 5.49983 7.39802 5.49983C6.48808 5.49983 5.74757 4.82664 5.74757 3.99943C5.74757 3.17221 6.48805 2.49902 7.39802 2.49902Z" fill="#B93E86"/>
</svg>
                                </div>
                                </div>
                 
                </TableCell>
            </TableRow>
            <TableRow  >
              <TableCell  className="width-8"> 001</TableCell>
              <TableCell numeric className="width-12">PHP Developer</TableCell>                          
              <TableCell numeric className=" width-15">PHP, CSS, JavaScript </TableCell>
              <TableCell numeric className="width-8">5 Years</TableCell>
              <TableCell numeric className="width-8">12 </TableCell>
              <TableCell numeric className="width-8">Kakkanad</TableCell>
              <TableCell numeric className="width-10">10-10-2021</TableCell>  
              <TableCell numeric className="width-10">20-11-2021</TableCell>  
              <TableCell numeric className="width-8 inprogress-td">
              <div className ="inprograss-style">Active</div>
              </TableCell>
              <TableCell numeric className="width-8">
                <div className="action-outer">
             
                <div className="eye-new-icon inprogress ">
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.957514 3.64635L3.25493 1.55779C5.53914 -0.519262 9.25705 -0.519262 11.5413 1.55779L13.8387 3.64635C14.0538 3.84189 14.0538 4.15798 13.8387 4.35353L11.5413 6.44209C10.3992 7.48037 8.8989 8 7.39811 8C5.89731 8 4.39706 7.48037 3.25496 6.44209L0.95754 4.35353C0.742414 4.15798 0.742414 3.84189 0.957514 3.64635ZM7.39811 6.50061C8.91486 6.50061 10.1489 5.3788 10.1489 3.99993C10.1489 2.62106 8.91486 1.49925 7.39811 1.49925C5.88135 1.49925 4.64736 2.62106 4.64736 3.99993C4.64736 5.3788 5.88135 6.50061 7.39811 6.50061Z" fill="#B93E86"/>
<path d="M7.39802 2.49902C8.30795 2.49902 9.04846 3.17221 9.04846 3.99943C9.04846 4.82664 8.30795 5.49983 7.39802 5.49983C6.48808 5.49983 5.74757 4.82664 5.74757 3.99943C5.74757 3.17221 6.48805 2.49902 7.39802 2.49902Z" fill="#B93E86"/>
</svg>
                                </div>
                                </div>
                 
                </TableCell>
            </TableRow>
            <TableRow  >
              <TableCell  className="width-8"> 001</TableCell>
              <TableCell numeric className="width-12">PHP Developer</TableCell>                          
              <TableCell numeric className=" width-15">PHP, CSS, JavaScript </TableCell>
              <TableCell numeric className="width-8">5 Years</TableCell>
              <TableCell numeric className="width-8">12 </TableCell>
              <TableCell numeric className="width-8">Kakkanad</TableCell>
              <TableCell numeric className="width-10">10-10-2021</TableCell>  
              <TableCell numeric className="width-10">20-11-2021</TableCell>  
              <TableCell numeric className="width-8 inprogress-td">
              <div className ="inprograss-style">Active</div>
              </TableCell>
              <TableCell numeric className="width-8">
                <div className="action-outer">
             
                <div className="eye-new-icon inprogress ">
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.957514 3.64635L3.25493 1.55779C5.53914 -0.519262 9.25705 -0.519262 11.5413 1.55779L13.8387 3.64635C14.0538 3.84189 14.0538 4.15798 13.8387 4.35353L11.5413 6.44209C10.3992 7.48037 8.8989 8 7.39811 8C5.89731 8 4.39706 7.48037 3.25496 6.44209L0.95754 4.35353C0.742414 4.15798 0.742414 3.84189 0.957514 3.64635ZM7.39811 6.50061C8.91486 6.50061 10.1489 5.3788 10.1489 3.99993C10.1489 2.62106 8.91486 1.49925 7.39811 1.49925C5.88135 1.49925 4.64736 2.62106 4.64736 3.99993C4.64736 5.3788 5.88135 6.50061 7.39811 6.50061Z" fill="#B93E86"/>
<path d="M7.39802 2.49902C8.30795 2.49902 9.04846 3.17221 9.04846 3.99943C9.04846 4.82664 8.30795 5.49983 7.39802 5.49983C6.48808 5.49983 5.74757 4.82664 5.74757 3.99943C5.74757 3.17221 6.48805 2.49902 7.39802 2.49902Z" fill="#B93E86"/>
</svg>
                                </div>
                                </div>
                 
                </TableCell>
            </TableRow>
       
          
        </TableBody>
      </Table>
       
       </Paper>          
                    </div>
                </div>
            </section>
      </DndProvider>
    </main>
    
    )
}
