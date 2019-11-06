module.exports = {
  // Given array of matches and name of team
  // return list of matches by team
  // optional to add status (played , upcoming )
  filterByTeam: (data, team, status) => {
    let matches = [];

    data.forEach(match => {
      if (
        match.home_team.toLowerCase() === team.toLowerCase() ||
        match.away_team.toLowerCase() === team.toLowerCase()
      ) {
        matches.push(match);
      }
    });
    if (status) {
      matches = matches.filter(match => match.status === status.toLowerCase());
    }
    if (!matches.length) {
      return "Matches not found, please check the URL";
    }
    return matches;
  },
  // Given array of matches and name of tournament
  // return list of matches by tournament
  // optional to add status (played , upcoming )
  filterByTournament: (data, tour, status) => {
    let matches = [];
    data.forEach(match => {
      if (match.tournament.toLowerCase() === tour.toLowerCase()) {
        matches.push(match);
      }
    });
    if (status) {
      matches = matches.filter(match => match.status.toLowerCase() === status);
    }
    if (!matches.length) {
      return "Matches not found, please check the URL";
    }
    return matches;
  }
};
