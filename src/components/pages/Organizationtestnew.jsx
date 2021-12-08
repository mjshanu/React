import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ReactDOM from 'react-dom';
import Addbranches from './Addbranches';
import Editbranches from './Editbranches';import Addorganization from './Addorgaization';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {location} from '../../images';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';



function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number,
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
       branchname: 'Encaps',
        branchcode: '	DPC',
        abranchtype: 'Organization Center',
        location: 'cochin',
        date:'08/12/2021'
      },
      {
        branchname: 'Encaps',
        branchcode: '	DPC',
        abranchtype: 'Organization Center',
        location: 'cochin',
        date:'08/12/2021'

      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell >{row.calories}</TableCell>
        <TableCell >{row.fat}</TableCell>
        <TableCell>{row.carbs}</TableCell>
        <TableCell >{row.protein}</TableCell>
      </TableRow>
      <TableRow className="sub-table" >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
            
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Branch Name</TableCell>
                    <TableCell>	Branch Code</TableCell>
                    <TableCell >Branch Type</TableCell>
                    <TableCell >Location</TableCell>
                    <TableCell >Date Of Establishment</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

       

                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.branchname}>
                      <TableCell component="td" scope="row">
                        {historyRow. branchname}
                      </TableCell>
                      <TableCell>{historyRow. branchcode}</TableCell>
                      <TableCell >{historyRow.abranchtype}</TableCell>
                      <TableCell >
                      {historyRow.location}
                                         </TableCell>
                      <TableCell >
                             {historyRow.date}
                                    </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Encaps','DPC', 'Bourntec Solutions', 'Cochin', <div><a href=""><EditIcon className="org-edit"/></a>
  <a href=""><DeleteIcon className="org-delete"/></a></div> ),
  createData('Encaps','DPC', 'Bourntec Solutions', 'Cochin',  <div><a href=""><EditIcon className="org-edit"/></a>
  <a href=""><DeleteIcon className="org-delete"/></a></div>),
  createData('Encaps','DPC', 'Bourntec Solutions', 'Cochin', <div><a href=""><EditIcon className="org-edit"/></a>
  <a href=""><DeleteIcon className="org-delete"/></a></div>),

];

export default function CollapsibleTable() {
 

  return (
    <main className="inner-content-box">
        <header className="main-otrer-top"> Organization Branches </header>
        <section  className="main-content-area">
              <div className="main-content-area-inner">
              <div className="sub-head organization-sub-head"> Branch Details
                      <div className="top-right-outer add-btn-div organization-top-rt"> 
                      <div className="organization-button" >
                      <Addorganization />
                      </div>
                      <div className="organization-button">  
                       <Addbranches /> 
                       </div>              
                      </div>
                  </div>
                  <div className="col-md-12 job-main-tb-outer">  
    <TableContainer component={Paper} className="organazation-new-table   organazation-table-inner-tb">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Organization Name</TableCell>
            <TableCell>Organization Code</TableCell>
            <TableCell>Organization Type</TableCell>
            <TableCell >Location</TableCell>
            <TableCell >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className="accrodion-mob-outer">
  <Accordion preExpanded={"a"} className="job-accrodion">
  <AccordionItem uuid="a">
        <AccordionItemHeading className="accordion-active-status">
          <AccordionItemButton >
            <div className="accordion-head-text">
            <div className="name notificatio-outer">Encaps
                  </div>
            <div className="desi joblocation">
          <img src={location}/>  
          <span>Kakkanad</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">ENC</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accord-detals-box">
         <div className="left">Branch Name	</div>
         <div className="right">: Encaps</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Branch Code	 </div>
         <div className="right">: ENC</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Branch Type		 </div>
         <div className="right">: Organization Center	</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Location	 </div>
         <div className="right">: Kochi</div>
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
        <AccordionItemHeading className="accordion-inactive-status">
          <AccordionItemButton>  <div className="accordion-head-text">
            <div className="name notificatio-outer">Bourntec</div>
              <div className="desi joblocation">
          <img src={location}/>  
          <span>Bhuvaneshwar</span>            
            </div>
            </div>   <div className="col-4 acc-status-change">
            <div class="active-status-style">BNC</div>
  </div></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
        <div className="accord-detals-box">
         <div className="left">Branch Name	</div>
         <div className="right">: Bourntec</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Branch Code	 </div>
         <div className="right">: BNC</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Branch Type		 </div>
         <div className="right">: Development Center	</div>
        </div>
        <div className="accord-detals-box">
        <div className="left">Location	 </div>
         <div className="right">: Kochi</div>
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

    </div>    </section>
    </main>
  );
}
