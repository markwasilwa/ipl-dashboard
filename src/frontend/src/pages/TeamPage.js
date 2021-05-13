import { React, useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import MatchDetailCard from '../components/MatchDetailCard';
import MatchSmallCard from '../components/MatchSmallCard';

export const TeamPage = ({ ...props }) => {

    const [team, setTeam] = useState(null)

    const { teamName } = useParams();

    useEffect(
        () => {
        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}`)
            const data = await response.json()
            setTeam(data)
        }
        fetchMatches();
    }, [teamName]);

    if (!team || !team.teamName) {
        return <h1>Team Not Found</h1>
    }

    return (
        <div className="teamPage">
            <h1>{team && team.teamName}</h1>
            
            <MatchDetailCard match={team?.matches[0]} teamName={teamName} />
            { team && team.matches.slice(1).map((match, idx) => {
                    return <MatchSmallCard key={idx} match={match} teamName={teamName} />
                })
            }
        </div>
    );
}

export default TeamPage;
