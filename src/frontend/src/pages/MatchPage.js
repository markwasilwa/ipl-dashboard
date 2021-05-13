import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MatchDetailCard from '../components/MatchDetailCard';

export const TeamPage = ({ ...props }) => {

    const [matches, setMatches] = useState(null)

    const { teamName, year } = useParams();

    useEffect(
        () => {
        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches/?year=${year}`)
            const data = await response.json()
            setMatches(data)
        }
        fetchMatches();
    }, [teamName, year]);

    if (!matches) return <h1>Loading matches for {teamName}</h1>

    return (
        <div className="MatchPage">
            <h1>Match Page</h1>
            {
                matches.map(match => <MatchDetailCard match={match} teamName={teamName} />)
            }
        </div>
    );
}

export default TeamPage;
