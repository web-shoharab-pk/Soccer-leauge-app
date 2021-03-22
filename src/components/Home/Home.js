import React, { useEffect, useState } from 'react';
import './Home.css'
import Leagues from '../League/League';





const Home = () => {



    const [leagues, setLeagues] = useState([])
 

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues.slice(0, 18)))
    }, [])



    return (
        <div>
            <div className="banner-div">
                <h1 className="d-flex justify-content-center">Soccer World</h1>
            </div>
            <div className="leagues-div">
                <div className="container">
                          {
                                leagues.map(league => <Leagues key={league.idLeague} league={league} />)
                            }
                        </div>
                    </div>
                </div>
           
    );
};

export default Home;