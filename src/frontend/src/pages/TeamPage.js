import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MatchDetailCard from '../components/MatchDetailCard';
import MatchSmallCard from '../components/MatchSmallCard';
import './TeamPage.scss';

export const TeamPage = ({ ...props }) => {

    const [team, setTeam] = useState(null)

    const { teamName, year } = useParams();
    const teamMatchesUrl = `/teams/${teamName}/matches/2020`;

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
        <div className="TeamPage">
            <div className="team-name-container">
                <h1 className="team-name">{team && team.teamName}</h1>
            </div>
            <div className="win-vs-loss-container">
                <span className="win-vs-loss">Wins vs Losses</span>
            </div>
            <div className="match-detail-container">
                <MatchDetailCard match={team?.matches[0]} teamName={teamName} />
            </div>
            { team && team.matches.slice(1).map((match, idx) => {
                    return <MatchSmallCard key={idx} match={match} teamName={teamName} />
                })
            }
            <div className="more-matches-container">
                <Link to={teamMatchesUrl}>More matches</Link>
            </div>
           
        </div>
    );
}

export default TeamPage;
