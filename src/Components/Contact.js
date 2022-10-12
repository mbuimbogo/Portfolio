import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName:"",
        email:"",
        phone: "",
        message:"",
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("send");
    const [status, setStatus] = useState({}) //checking errors
  return (
    <div>Contact</div>
  )
}

export default Contact