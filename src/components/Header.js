import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';
import {useNavigate} from 'react-router-dom';


const Header = ({title}) => {

  let navigate = useNavigate();

  return(
    <header className='header' style={headingStyle}>
      <div>{title}</div>
      <nav>
        <Button color='purple' text='Rider Cards' 
          onClick={() => {navigate("/RiderCardPage")}}
        />
        <Button color='pink' text='Bar Chart' 
          onClick={() => {navigate("/BarChartPage")}}
        />
        <Button color='green' text='Grouped Bar Chart' 
          onClick={() => {navigate("/GroupedBarChartPage")}}
        />
      </nav>
    </header>
  )
}

Header.defaultProps = {
    title: 'Cycle Simulator',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'gold',
    backgroundColor: '#4c00ff',
    textAlign: 'center',
    fontSize: '50px'
}


export default Header
