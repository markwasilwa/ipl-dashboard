import { React } from 'react';
import { Link } from 'react-router-dom';
import './MatchSidebar.scss';

export const MatchSidebar = ({ ...props }) => {

    const startYear = process.env.REACT_APP_DASHBOARD_MATCHES_START;
    const iplYears = generateYears(startYear).reverse();
    const { teamName } = props;

    return (
        <>
            <ul style={style.sideBarUl}>
                { iplYears && iplYears
                        .slice(1)
                        .reverse()
                        .map(yr => {
                        const teamMatchesByYearUrl = `/teams/${teamName}/matches/${yr}`;
                        
                        return <li key={yr} className="match-sidebar-li">
                            <Link className="match-sidebar-link" to={teamMatchesByYearUrl}>{yr}</Link>
                        </li>
                    })
                }
            </ul>
        </>
    );
}

function generateYears(startYear) {
    let currentYear = new Date().getFullYear();
    let years = [];
    while(startYear <= currentYear) {
        years.push(startYear++);
    }
    return years;
}

const style = {
    sideBarUl: {
        'listStyle': 'none'
    },
    sideBarLi: {
        'textDecoration': 'none'
    }
}

export default MatchSidebar;
