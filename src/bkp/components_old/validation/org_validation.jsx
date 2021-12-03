
import React from 'react'

export default function org_validation(values) {
    let errors={}
    if(!values.org_name.trim())
    {
        errors.org_name="Organization name required";
        
    }
    if(!values.org_code.trim())
    {
        errors.org_code="Organization code required";
    }
    return errors;

}
