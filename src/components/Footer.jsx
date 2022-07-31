import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from '@mui/material/Button';
import '../styles/footer.css'


const Footer = () => {
  return (
    <div className="footer-container">
        <ProgressBar now={60} label={'60'} variant="danger" style={{flex:'3',margin:'10px',backgroundColor:'#FFC4C4'}}/>
        <Button variant="contained" style={{marginRight:'10px',backgroundColor:'#FF869E',color:'#A10035'}}>Clear</Button>
    </div>
  )
}

export default Footer;