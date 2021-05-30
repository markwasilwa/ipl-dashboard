import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MatchDetailCard from '../components/MatchDetailCard';
import MatchSidebar from '../components/MatchSidebar';
import './MatchPage.scss';

export const TeamPage = ({ ...props }) => {

    const [matches, setMatches] = useState(null)

    const { teamName, year } = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`/team/${teamName}/matches/?year=${year}`)
                const data = await response.json()
                setMatches(data)
            }
            fetchMatches();
        }, [teamName, year]);

    if (!matches) return <h1>Loading matches for {teamName}</h1>

    return (
        <div className="MatchPage">
            <div className="match-page-sidebar">
                <MatchSidebar teamName={teamName} />
            </div>
            <div className="match-page-main">
                <h1 className="match-page-header">Match Page</h1>
                {
                   matches.length > 0 ?
                       matches.map(match => <div className="match-detail-container">
                           <MatchDetailCard key={match.id} match={match} teamName={teamName} />
                       </div>) :
                       `${teamName} matches for ${year} found`
                }
            </div>
        </div>
    );
}

export default TeamPage;
