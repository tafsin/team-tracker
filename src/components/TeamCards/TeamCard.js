import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Link,useHistory } from 'react-router-dom';

const TeamCard = (props) => {
     
     const team = props.team;
    // console.log(team);
     //const history = useHistory();
    //  const handleClick =(teamId)=>{
    //    //console.log(teamId);
    //    history.push(`/team/${teamId}`);
    //    console.log(history);
    //  }
    const teamId = team.idTeam;
    console.log(teamId);
    return (
      
          <div className="cardStyle">
                <Card style={{ width: '15rem', marginTop: '2rem' , marginBottom: '5rem' }}>
          <Card.Img style={{ height: '200px'}}variant="top" src={team.strTeamBadge} />
          <Card.Body>
           <Card.Title style={{textAlign: 'center'}}>{team.strTeam}</Card.Title>
           <Card.Text style={{textAlign: 'center'}}>
      Sports Type Football
       </Card.Text>
       
       <Link to={`/team/${teamId}`}>
       <Button style={{marginLeft:'50px'}} variant="primary">Explore  <FontAwesomeIcon icon={faArrowRight} /></Button>
       </Link>
       
       </Card.Body>
       </Card>
          </div>
          
          
                        
   
    );
};

export default TeamCard;