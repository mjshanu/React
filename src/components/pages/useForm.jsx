import { useState,useEffect } from "react";

import axios from 'axios';
const useForm = validate => {
const[values, SetValues] = useState ({
    username : '',
    postvalue :'',
    p_email : '',
    phonenumber : '',
    qualification : '',
    exp : '',
    ctc : '',
    expect_ctc : '',
    dob : '',
    location : '',
    current_company : '',
    domain_exp : '',
    app_date : '',
    primary_skill : '',
    ref : '',
    p_members : '',
    idatetime : '',
    iplace : '',
    jobtitle : '',
    department_team : '',
    comments : '',
    c_status : '',
    reason : '',
    reason : '',
})
const[errors,setErrors]=useState({})
const [isSubmitting, setIsSubmitting] = useState(false);
const[job,setJob]=useState([]);
const handleChange1 =e => { 
    const{name,value}=e.target
    SetValues({
        ...values,
        [name]:value
    })
}
const getpostName = async () => {
    const response = await fetch("http://auditportal2.bourntec.com:3001/audit_portal/public/api/getJobs");
    const data = await response.json();
  
    const listnewtest = data.job;
  
    //const lo=JSON.stringify(listnew);
   
    setJob(listnewtest);
    
  }
  console.log(job); 
const handleSubmit =e => { alert("hii");
    e.preventDefault();
    setErrors(validate(values));
   // setIsSubmitting(true);
   
   const promise= axios.post('http://auditportal2.bourntec.com:3001/audit_portal/public/api/add_employee_first', values);
   promise.then(function(res) {
    if(res.data.status===200)
    {
        console.log(res.data.message);
    }
  })
 
    ///.then(function (response) {
       // console.log(response.data.message);
  //  })
   // .catch(function (error) {
      //  console.log("failed")
  //  })
    
  
 
    
}



    


return {handleChange1,values,handleSubmit,errors,getpostName,job};

}
export default useForm;