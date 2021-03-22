import { Button } from '@material-ui/core';
import React from 'react';
import './League.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const element = <FontAwesomeIcon icon={faArrowRight} />


const Leagues = (props) => {
    const { idLeague, strLeague, strSport } = props.league;
    console.log(props.league);

    const history = useHistory()
    const handleExplorBtn = (idLeague) => {
        const url = `/leagues/${idLeague}`;
        history.push(url)
    }


    return (
       
                <div className="leagues-card ">
                    {/* <img src={} alt="i have no img" /> */}
                    <h3>{strLeague}</h3>
                    <p>Sports type: {strSport}</p>
                    <Button onClick={() => handleExplorBtn(idLeague)} variant="contained" color="primary">
                        Explore {element}
                    </Button>
                </div>        

    );
};

export default Leagues;