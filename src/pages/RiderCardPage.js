import React, { useState} from 'react';
import rider_image from '../rider_card_images/Rider_Spear.jpg';
import RiderCards from '../components/RiderCards';
import Button from '../components/Button';
import BSButton from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function RiderCardPage() {

  // Todo: Link the state of the riders on this page to
  // the riders used as input for the bar chart page
  // Todo: dynamiclly create the race dropdown based on the races in riders
  const [riders, setRiders] = useState ([
    {
        id: 1,
        name: "Sprimli",
        race: "Dwarf",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 13,
        hill: 7,
        mountain: 0,
        downhill: 3,
        sprint: 25,
        breakaway: 9,
        cobbleStone: 11,
        wind: 14
    },
    {
        id: 2,
        name: "Hofbrow",
        race: "Dwarf",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 12,
        hill: 17,
        mountain: 10,
        downhill: 7,
        sprint: 18,
        breakaway: 8,
        cobbleStone: 3,
        wind: 13
    },
    {
        id: 3,
        name: "Ultstone",
        race: "Dwarf",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 10,
        hill: 11,
        mountain: 12,
        downhill: 4,
        sprint: 15,
        breakaway: 11,
        cobbleStone: 17,
        wind: 9
    },
    {
        id: 4,
        name: "Windorf",
        race: "Dwarf",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 14,
        hill: 10,
        mountain: 4,
        downhill: 6,
        sprint: 14,
        breakaway: 16,
        cobbleStone: 5,
        wind: 17
    },
    {
        id: 5,
        name: "Florfindailyan",
        race: "Elf",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 17,
        hill: 7,
        mountain: 3,
        downhill: 3,
        sprint: 16,
        breakaway: 17,
        cobbleStone: 12,
        wind: 13
    },
    {
        id: 6,
        name: "Imin",
        race: "Elf",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 7,
        hill: 11,
        mountain: 12,
        downhill: 12,
        sprint: 12,
        breakaway: 15,
        cobbleStone: 10,
        wind: 15
    },
    {
        id: 7,
        name: "Tata",
        race: "Elf",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 8,
        hill: 10,
        mountain: 17,
        downhill: 5,
        sprint: 12,
        breakaway: 15,
        cobbleStone: 6,
        wind: 5
    },
    {
        id: 8,
        name: "Enel",
        race: "Elf",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 10,
        hill: 15,
        mountain: 15,
        downhill: 10,
        sprint: 14,
        breakaway: 10,
        cobbleStone: 6,
        wind: 8
    },
    {
        id: 9,
        name: "Joe",
        race: "Human",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 13,
        hill: 12,
        mountain: 12,
        downhill: 12,
        sprint: 12,
        breakaway: 11,
        cobbleStone: 11,
        wind: 11
    },
    {
        id: 10,
        name: "George",
        race: "Human",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 10,
        hill: 14,
        mountain: 11,
        downhill: 14,
        sprint: 15,
        breakaway: 6,
        cobbleStone: 10,
        wind: 10
    },
    {
        id: 11,
        name: "Vander",
        race: "Human",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 15,
        hill: 10,
        mountain: 4,
        downhill: 4,
        sprint: 20,
        breakaway: 12,
        cobbleStone: 15,
        wind: 10
    },
    {
        id: 12,
        name: "Spear",
        race: "Human",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 11,
        hill: 12,
        mountain: 16,
        downhill: 10,
        sprint: 12,
        breakaway: 8,
        cobbleStone: 8,
        wind: 9
    },
    {
        id: 13,
        name: "Grazar",
        race: "Ork",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 15,
        hill: 10,
        mountain: 5,
        downhill: 15,
        sprint: 14,
        breakaway: 4,
        cobbleStone: 18,
        wind: 9
    },
    {
        id: 14,
        name: "Gork",
        race: "Ork",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 10,
        hill: 10,
        mountain: 10,
        downhill: 17,
        sprint: 10,
        breakaway: 14,
        cobbleStone: 13,
        wind: 8
    },
    {
        id: 15,
        name: "Mork",
        race: "Ork",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 12,
        hill: 15,
        mountain: 7,
        downhill: 18,
        sprint: 7,
        breakaway: 7,
        cobbleStone: 15,
        wind: 11
    },
    {
        id: 16,
        name: "Speed Dok",
        race: "Ork",
        image: <img src={rider_image} alt="Portrait of rider"/>,
        flat: 8,
        hill: 11,
        mountain: 13,
        downhill: 21,
        sprint: 8,
        breakaway: 5,
        cobbleStone: 14,
        wind: 8
    }
  ])

  const [theme, setTheme] = useState(null);

  const resetTheme = () => {
    setTheme(null);
  };

  return (
  <div>
    <div>
        <Dropdown as={ButtonGroup} size="lg">
            <BSButton
            className="text-capitalize"
            variant={theme ? theme : "secondary"}
            >
            {theme ? theme : "Default"}
            </BSButton>
            <Dropdown.Toggle
            split
            variant={theme ? theme : "secondary"}
            id="dropdown-split-basic"
            />
            <Dropdown.Menu>
            <Dropdown.Item eventKey="1" onClick={() => setTheme("primary")}>
                Dwarf
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => setTheme("danger")}>
                Elf
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={() => setTheme("success")}>
                Human
            </Dropdown.Item>
            <Dropdown.Item eventKey="4" onClick={() => setTheme("ork")}>
                Ork
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4" onClick={resetTheme}>
                Default Theme
            </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
    
    <Button color='#5BCA00' text='Submit' 
        // onClick={() => {}}
    />

    <div style={RiderCardsStyle}>
      <RiderCards riders={riders}/>
    </div>
  </div>
  )
}

const RiderCardsStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  backgroundColor: '#262623',
  padding: '20px',
}

export default RiderCardPage