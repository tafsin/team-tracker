import React, { useEffect } from 'react';
import { useState } from 'react';
import {Row,Col,Card, Container} from 'react-bootstrap';
import bannerOne from '../../images/banner-1.jpg';
import TeamCard from '../TeamCards/TeamCard';
import './TeamDash.css';

const TeamDash = () => {
    const [teams,setTeams]= useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res=>res.json())
        .then(data=> {
           setTeams(data.teams);
           //console.log(teams);
        })
    },[])
    return (
        <div>
            <div className="banner-1">
                <h1 id="bannerHead">Team Dash</h1>
            
            </div>
            <div className="teamOverView">
              
                
             <Container>
                 <Row xs={1} md={4}>
                 {
                    teams.map(team => <TeamCard team={team}></TeamCard>)
                }
                 </Row>
             </Container>
                        
                 
                
                  
                    
             
              
            </div>
              

           </div>
    );
};

export default TeamDash;