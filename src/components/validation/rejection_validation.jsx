
import React from 'react'

<<<<<<< HEAD
export default function rejection_validation(values) {
=======
export default function rejection_validation(values) { 
>>>>>>> df2ef26227cc0173453930bbc16c9f0e6a820b94
    let errorsrejection={}
    if(!values.rejectionstatus.trim())
    {
        errorsrejection.rejectionstatus="status required";
        
    }
    if(!values.reason.trim())
    {
        errorsrejection.reason="status required";
        
    }
   
    return errorsrejection;

}
