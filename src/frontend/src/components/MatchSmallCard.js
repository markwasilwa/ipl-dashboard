import { React } from 'react';

export const MatchSmallCard = ({ ...props }) => {

    if (!props.match) return false;

    const {team1, team2} = props.match

    return (
        <div className="MatchSmallCard">
            <div>
                <p>{team1} vs {team2}</p>
            </div>
        </div>
    );
}

export default MatchSmallCard;
