import { React } from 'react';
import { Link } from 'react-router-dom';

export const MatchDetailCard = ({ ...props }) => {

    if (!props.match) return false;

    const { team1, team2, date, venue, matchWinner, result, resultMargin } = props.match
    const otherTeam = props.teamName === team1 ? team2 : team1
    const otherTeamRoute = `/teams/${otherTeam}`;

    return (
        <div className="MatchDetailCard">
            <h3>Latest Matches</h3>
            <h4>Match Details</h4>
            <h4>vs <Link to={otherTeamRoute}>{otherTeam}</Link></h4>
            <div>
                <h4>On {date} at {venue}</h4>
                <h4>{matchWinner} won by {resultMargin} {result}</h4>
            </div>
        </div>
    );
}

export default MatchDetailCard;
