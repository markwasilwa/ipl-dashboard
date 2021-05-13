import { React, useEffect, useState } from 'react';
import MatchDetailCard from '../components/MatchDetailCard';
import MatchSmallCard from '../components/MatchSmallCard';

export const TeamPage = () => {

    const [team, setTeam] = useState(null)

    useEffect(
        () => {
        const fetchMatches = async () => {
            const response = await fetch('http://localhost:8080/team/Delhi%20Capitals')
            const data = await response.json()
            setTeam(data)
        }
        fetchMatches();
    }, []);

    return (
        <div className="teamPage">
            <h1>{team && team.teamName}</h1>
            
            <MatchDetailCard match={team?.matches[0]} />
            { team && team.matches.slice(1).map((match, idx) => {
                    return <MatchSmallCard key={idx} match={match} />
                })
            }
        </div>
    );
}

export default TeamPage;
