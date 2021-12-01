
import React from 'react'

export default function job_validation(values) {
    let errors={}
    if(!values.job_id.trim())
    {
        errors.job_id="job id required";
        
    }
    if(!values.job_post.trim())
    {
        errors.job_post="job post required";
        
    }
  
    return errors;

}
