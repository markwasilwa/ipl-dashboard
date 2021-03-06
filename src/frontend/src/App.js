import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MatchPage from './pages/MatchPage';
import TeamPage from './pages/TeamPage';
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/teams/:teamName/matches/:year">
                    <MatchPage />
                </Route>
                <Route path="/teams/:teamName">
                    <TeamPage />
                </Route>
                <Route path="*">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
