package ke.co.thinkpad.kpldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import ke.co.thinkpad.kpldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    
    Team findByTeamName(String teamName);
}
