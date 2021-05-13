import { React } from 'react';

export const MatchDetailCard = ({ ...props }) => {

    if (!props.match) return false;

    const { team1, team2 } = props.match;

    return (
        <div className="MatchDetailCard">
            <h3>Latest Matches</h3>
            <h4>Match Details</h4>
            <h4>{team1} vs {team2}</h4>
        </div>
    );
}

export default MatchDetailCard;
