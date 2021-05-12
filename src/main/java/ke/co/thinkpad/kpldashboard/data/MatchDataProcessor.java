package ke.co.thinkpad.kpldashboard.data;


import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;

import ke.co.thinkpad.kpldashboard.model.Match;


public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {
  private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);

  @Override
  public Match process(final MatchInput matchInput) throws Exception {
    Match match = new Match();
    match.setId(Long.parseLong(matchInput.getId()));
    match.setCity(matchInput.getCity());

    DateTimeFormatter df = DateTimeFormatter.ofPattern("dd-MM-yyyy");
    match.setDate(LocalDate.parse(matchInput.getDate(), df));
    
    match.setPlayerOfmatch(matchInput.getPlayer_of_match());
    match.setVenue(matchInput.getVenue());

    // set team 1 and team 2 depending on innings order
    String firtInningsTeam, secondInningsTeam;

    if  ("bat".equals(matchInput.getToss_decision())) {
      firtInningsTeam = matchInput.getToss_winner();
      secondInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1())
        ? matchInput.getTeam2() : matchInput.getTeam1();
    } else {
      secondInningsTeam = matchInput.getToss_winner();
      firtInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1())
        ? matchInput.getTeam2() : matchInput.getTeam1();
    }

    match.setTeam1(firtInningsTeam);
    match.setTeam2(secondInningsTeam);

    match.setTossWinner(matchInput.getToss_winner());
    match.setTossDecision(matchInput.getToss_decision());
    match.setResult(matchInput.getResult());
    match.setMatchWinner(matchInput.getWinner());
    match.setResultMargin(matchInput.getResult_margin());
    match.setUmpire1(matchInput.getUmpire1());
    match.setUmpire2(matchInput.getUmpire2());

    return match;
  }
}
