
import React from 'react'

<<<<<<< HEAD
export default function schedule_validation(values) {
=======
export default function schedule_validation(values) { 
>>>>>>> df2ef26227cc0173453930bbc16c9f0e6a820b94
    let errors={}
    if(!values.panel_members.trim())
    {
        errors.panel_members="Panel required";
        
    }
   
    return errors;

}
