import { React } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MatchDetailCard.scss';

export const MatchDetailCard = ({ ...props }) => {

    const { year } = useParams();

    if (!props.match) return false;

    const teamName = props.teamName;
    const { team1, team2, date, venue, matchWinner, result, resultMargin } = props.match
    const otherTeam = teamName === team1 ? team2 : team1

    const otherTeamRoute = `/teams/${otherTeam}`;
    const teamMatchesRoute = `/teams/${teamName}/matches?year=${year}`;

    return (
        <div className="MatchDetailCard">
            <div className="main-match-details">
                <h3>Latest Matches</h3>
                <h4>Match Details</h4>
                <h4>vs <Link to={otherTeamRoute}>{otherTeam}</Link></h4>
                <div>
                    <h4>On {date} at {venue}</h4>
                    <h4>{matchWinner} won by {resultMargin} {result}</h4>
                    {year && <p>View <Link to={teamMatchesRoute}>Matches</Link></p>}
                </div>
            </div>
            <div className="other-match-details">
                <h3>First innings</h3>
                <p>{team1}</p>
                <h3>Second innings</h3>
                <p>{team2}</p>
                <h3>Player of match</h3>
                <p>{props.match.playerOfMatch}</p>
            </div>
        </div>
    );
}

export default MatchDetailCard;
