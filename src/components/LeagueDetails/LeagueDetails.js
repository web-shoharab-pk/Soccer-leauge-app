import React, { useEffect, useState } from 'react';
import './LeagueDetails.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import male from './../../Photo/male.png';
import female from './../../Photo/female.png'
import flag from './../../Icon/flag.png';
import found from './../../Icon/found.png';
import football from './../../Icon/football.png';
import genderSign from './../../Icon/male-gender-sign.png';
import facebook from './../../Icon/facebook.png';
import youtube from './../../Icon/youtube.png';
import twitter from './../../Icon/twitter.png';
import stedium from './../../Photo/stedium.jpg'

const LeagueDetails = () => {
    const { idLeague } = useParams()
    const [league, setLeague] = useState({});
    const { strLeague, intFormedYear, strCountry, strSport, strGender, strBadge, strDescriptionEN, strFacebook, strYoutube, strTwitter, strBanner } = league;
    console.log(league);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [idLeague])

    let image;
    if (strGender === "Male") {
        image = male;
    }
    else if (strGender === "female") {
        image = female;
    }

    let banner;
    if(strBanner === "null"){
        banner = stedium;
    }
    else{
        banner = strBanner;
    }
    
    console.log(banner);
    return (
        <div>
            <div style={{ backgroundImage: `url(${banner})` }} className="bannerDiv">
                <div className="d-flex justify-content-center   leaugeLogoName">               
                        <img src={strBadge} alt="" />
                </div>

            </div>

            <div className="league-details">

                <div>
                    <div className=" info-div my-3 row">
                        <div className="col-md-6">
                            <h2> {strLeague}</h2>
                            <h4 className="logo"><img src={found} alt="" /> Founded: {intFormedYear}</h4>
                            <h4 className="logo"><img src={flag} alt="" /> Country: {strCountry}</h4>
                            <h4 className="logo"><img src={football} alt="" /> Sport type: {strSport}</h4>
                            <h4 className="logo"><img src={genderSign} alt="" /> Gender: {strGender}</h4>
                        </div>
                        <div className="col-md-6 playerImg">
                            <img src={image} alt="alter"/>
                        </div>
                    </div>
                    <div className="descriptionDiv">
                        <br />
                        <p>{strDescriptionEN}</p>
                    </div>
                    <div className="social-media-link d-flex justify-content-center">
                        <div>
                            <a href={"https://" + strFacebook} target="_blank" rel="noreferrer"> <img src={facebook} alt="" /> </a>
                            <a href={"https://" + strYoutube} target="_blank" rel="noreferrer" > <img src={youtube} alt="" /> </a>
                            <a href={"https://" + strTwitter} target="_blank" rel="noreferrer" > <img src={twitter} alt="" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;