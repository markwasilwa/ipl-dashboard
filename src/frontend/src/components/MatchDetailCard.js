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
            <h3>Latest Matches</h3>
            <h4>Match Details</h4>
            <h4 className="match-against">vs <Link to={otherTeamRoute}>{otherTeam}</Link></h4>
            <div>
                <h4>On {date} at {venue}</h4>
                <h4>{matchWinner} won by {resultMargin} {result}</h4>
                {year && <p>View <Link to={teamMatchesRoute}>Matches</Link></p>}
            </div>
        </div>
    );
}

export default MatchDetailCard;
