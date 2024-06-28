import { Box, Button, Checkbox, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import axios from 'axios';
import './App.css';

function App() {
  const [list, setList] = useState('');

  const getContent = async () => {
    const result = await axios.get('http://localhost:5000/api/content');
    
    const data = await result.data.data[0].content;
    setList(data);
  }

  useEffect(() => {

    getContent();

  }, [])

  console.log(list);


  return (
    <Grid p={2} sx={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(213, 213, 213, 1)", borderRadius: "8px", minHeight: "50vh", widht: "100vw", wordBreak: "break-word" }}>

      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Box ><Typography variant='h5' fontWeight={600}> Pre-Request for MAH-B.BCA/BBA/BMS/BUM-CET-2024 </Typography></Box>
        <Box sx={{ display: "flex", alignItems: "center", fontWeight: 600, padding: "15px 0px" }}><MdKeyboardDoubleArrowRight /><Link to={""}> Download information Brochure for MAH-B.BCA/BBA/BMS-CET-2024  </Link></Box>
      </Box>
      <Grid container spacing={2}>
        {list !== '' &&
          <Grid item lg={6} sm={12} xs={12} dangerouslySetInnerHTML={{ __html: list }}>
          </Grid>
        }
          {list !== '' &&
          <Grid item lg={6} sm={12} xs={12} dangerouslySetInnerHTML={{ __html: list }}>
          </Grid>
        }
      </Grid>

      <Box mt={3} sm={12} md={12} lg={12} sx={{ display: "flex", gap: 1, justifyContent: "center", alignItems: "center" }}>
        <Checkbox /> <Box sx={{ fontWeight: 500, color: "#E6393E" }}>I have downloaded the information Brochure of MAH-BBCA/BBA/BMS/BBM-CET-2024, read and understood all the instructions there in as well as those mentioned above, and the application form for the MAH-B BCA/BBA/BMS/BBM-CET-2024 accordingly</Box>
      </Box>
      <Box mt={3} sm={12} md={12} lg={12} sx={{ display: "flex", justifyContent: "flex-end" }}> <Button> Process to complete application form</Button> </Box>
    </Grid>
  );
}

export default App;

// <ol  style={{display:"flex",textWrap:"wrap",borderRadius:"8px",flexDirection:"column",backgroundColor:"#FCDEDC",gap:"10px",fontSize:"15px",padding:"30px",fontWeight:"500"}}>
//         <li>{'Passed HSC examination.'}</li>
//         <li>{'Candidate appearing for final year of qualifying examination are also eligible to appear for CET.'}</li>
//         <li>
//           {"Maharashtra State Candidate MUST clearly mention the Category, in case of reservation (Such as SC/ST/OBC/VI/DT-NT(A)/NT(B)/NT(C)/NT(D)/SBC/EWS/PWD/etc), Candidate must possess valid documents like Caste Certificate and Non Creamy Layer Certificates as is applicable (valid up to 31st March 2025)."}
//         </li>
//         <li>{'A PWD candidate must have a certificate confirming a disability of at least 40 percent or more.'}</li>
//         <li>
//           {`Fees: For General Category Candidates from Maharashtra State, Outside Maharashtra State (OMS) Candidates: Rs. 1000/-`}
//         </li>
//         <li>
//           {"For Candidates of Backward class categories [SC/ST/OBC/VI/DT-NT(A)/NT(B)/NT(C)/NT(D)/SBC/EWS/PWD Candidates from Maharashtra State etc): Rs. 800/-"}
//         </li>
//         <li>{'AB ORPHAN/Gender Others candidates will be charged Rs. 800/-'}</li>
//         <li>
//           {'Please read the User Manual and information Brochure before filling the CBT (Computer Based Test) online registration form and application form, Candidate should verify the application before finally submitting and making payment.'}
//         </li>
//         <li>
//           {'Candidates should use their active E-mail ID and Mobile Number for the registration of MAH-BBCA/BBA/BMS/BBM-CET-2024,Candidate should keep their E-mail ID and Mobile Number active till the process of CET and Centralised Admission is over.'}
//         </li>
//         <li>{'The submitted and fees paid applications will not be edited. Hence candidates are advised to verify the filled in details before making payment.'}</li>
//         <li>{'Please do not share your Application No., Password and OTP with anybody.'}</li>
//         <li>{'Please use Good Quality Photograph, Signature and Document for Proof of identity images for Uploading.'}</li>
//         <li>{'Candidates are advised to visit the official www.mahacet.org website for latest Notifications.'}</li>
//         <li>{'Candidate use Only one Mobile No and E-mail ID for One Application Form.'}</li>
//       </ol>
