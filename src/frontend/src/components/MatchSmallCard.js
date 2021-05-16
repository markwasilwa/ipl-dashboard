import { React } from 'react';
import { Link } from 'react-router-dom';
import './MatchSmallCard.scss';

export const MatchSmallCard = ({ ...props }) => {

    if (!props.match) return false;

    const { team1, team2, matchWinner, result, resultMargin } = props.match
    const otherTeam = props.teamName === team1 ? team2 : team1
    const otherTeamRoute = `/teams/${otherTeam}`;

    return (
        <div className="MatchSmallCard">
            <div>
                <h3>vs <Link to={otherTeamRoute}>{otherTeam}</Link></h3>
                <p>{matchWinner} won by {resultMargin} {result}</p>
            </div>
        </div>
    );
}

export default MatchSmallCard;
