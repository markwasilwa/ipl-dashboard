import { React } from 'react'
import {Link} from "react-router-dom"
import './TeamTile.scss'

export const TeamTile = ({ ...props }) => {

    const { team } = props;

    const urlify = (url) => {
        return encodeURIComponent(url);
    }

    return (
        <div key={team.id} className="TeamTile">
            <h4><Link to={`/teams/${urlify(team.teamName)}`}>{team.teamName}</Link></h4>
        </div>
    )
}