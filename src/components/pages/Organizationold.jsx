import React from "react";
import makeData from "./makeData";
import { useTable, useExpanded } from "react-table";
import Addbranches from './Addbranches';
import Editbranches from './Editbranches';import Addorganization from './Addorgaization';
import {location} from '../../images';
//import "./styles.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

 function Table({ columns: userColumns, data, renderRowSubComponent }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    state: { expanded }
  } = useTable(
    {
      columns: userColumns,
      data
    },
    useExpanded
  );

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

<div className="organazation-new-table">
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="header-outer">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <React.Fragment {...row.getRowProps()}>
              <tr>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
              {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                  */}
              {row.isExpanded ? (
                <tr className="sub-table">
                  <td colSpan={visibleColumns.length} >
                    {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                    {renderRowSubComponent({ row })}
                  </td>
                </tr>
              ) : null}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
    </div>
    
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
    </div>
    </section>
    </main>
  );
}

export default function  Organizationold() {
  const columns = React.useMemo(
    () => [
      {
        // Build our expander column
        id: "expander", // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? "" : ""}
          </span>
        ),
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()} className="left-table-arrow">
            {row.isExpanded ? "↓" : "→"}
          </span>
        )
      },
      {
        Header: "Name",
        columns: [
          {
            Header: "Organization Name",
            accessor: "organizationname"
          },
          {
            Header: "Organization Code",
            accessor: "organizationcode"
          },
          {
            Header: "Organization Type",
            accessor: "organizationtype"
          },
          {
            Header: "Location",
            accessor: "location"
          },
          {
            Header: "Action",
            accessor: "action"
          }
          
        ]
      },
     ],
    []
  );

  const data = React.useMemo(() => makeData(2), []);
  console.log(data);

  const renderRowSubComponent = React.useCallback(
    ({ row }) =>  (
      <tr>
        {row.cells.map((cell) => {
          return <table >
            <thead>
<tr><td>Branch Name</td><td>Branch Code</td><td>Branch Type</td><td>Location</td><td>Date of Establishment</td>
</tr>

            </thead>
            <tbody>
            <tr><td>Encaps</td><td>DPC</td><td>Organization center</td><td>Kochi</td><td>Date</td>
</tr>
<tr><td>Encaps</td><td>DPC</td><td>Organization center</td><td>Kochi</td><td>Date</td>
</tr>
</tbody>
          </table>
          
         ;
        })}
      </tr>
    ),
    []
  );
  return (
    <Table
      columns={columns}
      data={data}
      renderRowSubComponent={renderRowSubComponent}
    />
  );
}


