import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [faqs, setfaqs] = useState([])
  const [data, setData] = useState({email: ''})

  const navigate = useNavigate()

  useEffect(()=> {
    gett()
    getfaqs()
    
      
      
    }, []);
    const gett = async() => {
      try{ const ress = await axios.get("http://localhost:3001/api/user/get",  {withCredentials: true} )
        setData(ress.data)
        console.log(ress.data)
   } catch {
       navigate("/login")
   }
   }

    const getfaqs = async() => {
      const res = await axios.get(`http://localhost:3001/api/faqs/getFAQs`, {withCredentials: true});
       setfaqs(res.data)
     }
  

  return (
    <>
      <h2 className="aboutheading">ABOUT US</h2>
      
      {/* {faqs.map((faq) => {
        return (
      <Accordion>
            <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
            >
              <Typography><h5>{faq.question}</h5></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {faq.answer}
              </Typography>
            </AccordionDetails>
      </Accordion>
        )
      })} */}


      
    </>
  );
};

export default About;
