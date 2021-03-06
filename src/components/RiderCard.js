import flat_symbol from '../rider_card_images/flat_symbol.jpg';
//import hill_symbol from '../rider_card_images/hill_symbol.jpg';

const RiderCard = ({rider}) => {
  return (
    <>
        <div key={rider.id} style={RiderCardStyle}>
            <div>{rider.image}</div>
            <div style={RiderNameStyle}>{rider.name}</div>
            <div style={RiderModifiers}>
                <div style={GradientModifiers}>
                    <div>
                        <img src={flat_symbol} alt="flat symbol:"/>
                        {rider.flat}
                    </div>
                    <div>
                        <img src="../rider_card_images/hill_symbol.jpg" alt="hill symbol:"/>
                        {rider.hill}
                    </div>
                    <div>{rider.mountain}</div>
                    <div>{rider.downhill}</div>
                </div>
                <div style={EventModifiers}>
                    <div>{rider.sprint}</div>
                    <div>{rider.breakaway}</div>
                </div>
                <div style={ConditionModifiers}>
                    <div>{rider.cobbleStone}</div>
                    <div>{rider.wind}</div>
                </div>
            </div>
        </div>
    </>
  );
};

const RiderCardStyle = {
    backgroundColor: 'yellow', 
    color: 'red',
    width: '450px',
    height: '600px'
}

const RiderNameStyle = {
    textAlign: 'center',
    color: 'blue',
    fontSize: '30px'
}

const RiderModifiers = {
    textAlign: 'center',
    color: 'red',
    fontSize: '20px'
}

const GradientModifiers = {
    display: 'grid',
    gridTemplateAreas:`
        'flat hill mountain downhill'`,
    gridGap: '10px'
}

const EventModifiers = {
    display: 'grid',
    gridTemplateAreas:`
        'sprint breakaway'`,
    gridGap: '10px'
}

const ConditionModifiers = {
    display: 'grid',
    gridTemplateAreas:`
        'cobbleStone wind'`,
    gridGap: '10px'
}

export default RiderCard;
