import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './TeamDetails.css';
import maleImage from '../../images/male.png';
import femaleImage from '../../images/female.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube , faFacebookSquare} from '@fortawesome/free-brands-svg-icons'



const TeamDetails = () => {
    const {teamId} = useParams();
    //console.log(teamId);
    const[team,setTeam]=useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>{
             
            //console.log(data.teams[0]);
            setTeam(data.teams[0]);
             console.log(data);
        }

            
            );
    },[]);
    let imageSrc;
    if(team.strGender === "Male"){
        imageSrc = maleImage;
    }
    else{
        imageSrc=femaleImage;
    }
    return (
        <div className="detailBack">
           <div>
           <div className="banner-2">
                
                <img style={{height:'200px',marginTop:"100px"}} src={team.strTeamBadge} alt=""></img>
            
            </div>
            <Container className="teamDetailSummary">
                <Row>
                    <Col md={8}>
                       <div className="teamDetailsIntro">
                       <h2>{team.strTeam}</h2>
                       <p>Founded: {team.intFormedYear}</p> 
                       <p>Country: {team.strCountry} </p>
                       <p>Sports Type: {team.strSport}</p>
                       <p>Gender: {team.strGender}</p>
                       </div>
                    </Col>
                    <Col md={4}>
                        
                            <img style={{height:'auto',width:"400px", paddingRight:"50px", paddingTop:"20px",paddingBottom:"20px"}} className='Fluid' src={imageSrc} alt="" />
                                        
                        </Col>
                </Row>
            </Container>
            <Container>
                <p style={{color: 'white',paddingBottom:'20px'}}>{team.strDescriptionEN}</p>
            </Container>
            <Container className="d-flex justify-content-center">
                <a href=""><FontAwesomeIcon className="fa-3x" style={{color: 'red', marginLeft: '10px'}}icon= {faYoutube}/></a>
                <a href=""><FontAwesomeIcon className="fa-3x" style={{color: 'skyBlue',marginLeft: '10px'}}icon= {faFacebookSquare}/></a>

            </Container>

           </div>
        </div>
    );
};

export default TeamDetails;