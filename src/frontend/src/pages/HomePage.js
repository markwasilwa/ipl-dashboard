import { React, useEffect, useState } from 'react';
import { TeamTile } from "../components/TeamTile";
import './HomePage.scss';

export const HomePage = ({ ...props }) => {

    const [teams, setTeams] = useState([])
    const api_url =  `${process.env.REACT_APP_API_URL}/teams`

    useEffect(
        () => {
            const fetchTeams = async () => {
                const response = await fetch(api_url)
                const data = await response.json()
                setTeams(data)
            }
            fetchTeams();
        }, [api_url]);

    return (
        <div>
            <h1>INDIAN PREMIER LEAGUE DASHBOARD</h1>
            <div className="HomePage">
               {
                   teams.length > 0 && teams.map(team => <TeamTile key ={team.id} team={team} />)
               }
            </div>
        </div>
    );
};

export default HomePage;
