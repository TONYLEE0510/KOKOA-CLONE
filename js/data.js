let teamsCache = null;
let matchesCache = null;
let citiesCache = null;

async function loadTeams() {
    if (teamsCache) return teamsCache;
    try {
        const response = await fetch('../data/teams.json');
        if (!response.ok) throw new Error('Failed to load teams');
        const data = await response.json();
        teamsCache = data.teams;
        return teamsCache;
    } catch (error) {
        console.error('Error loading teams:', error);
        return [];
    }
}

async function loadMatches() {
    if (matchesCache) return matchesCache;
    try {
        const response = await fetch('../data/matches.json');
        if (!response.ok) throw new Error('Failed to load matches');
        const data = await response.json();
        matchesCache = data.matches;
        return matchesCache;
    } catch (error) {
        console.error('Error loading matches:', error);
        return [];
    }
}

async function loadCities() {
    if (citiesCache) return citiesCache;
    try {
        const response = await fetch('../data/cities.json');
        if (!response.ok) throw new Error('Failed to load cities');
        const data = await response.json();
        citiesCache = data.cities;
        return citiesCache;
    } catch (error) {
        console.error('Error loading cities:', error);
        return [];
    }
}

async function loadAllData() {
    return Promise.all([loadTeams(), loadMatches(), loadCities()]).then(
        ([teams, matches, cities]) => ({ teams, matches, cities })
    );
}

function getTeamById(teams, id) {
    return teams.find(t => t.id === id);
}

function getCityById(cities, id) {
    return cities.find(c => c.id === id);
}

function getTeamsInGroup(teams, group) {
    return teams.filter(t => t.group === group).sort((a, b) => a.id.localeCompare(b.id));
}

function getMatchesInGroup(matches, group) {
    return matches.filter(m => m.group === group).sort((a, b) => {
        if (a.matchday !== b.matchday) return a.matchday - b.matchday;
        return a.id.localeCompare(b.id);
    });
}

function getMatchById(matches, id) {
    return matches.find(m => m.id === id);
}

function computeGroupStandings(group, teams, matches) {
    const groupTeams = getTeamsInGroup(teams, group);
    const groupMatches = getMatchesInGroup(matches, group);

    const standings = groupTeams.map(team => ({
        teamId: team.id,
        teamName: team.name,
        flag: team.flag,
        ranking: team.ranking,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0
    }));

    groupMatches.forEach(match => {
        if (match.homeScore !== null && match.awayScore !== null) {
            const homeTeam = standings.find(s => s.teamId === match.home);
            const awayTeam = standings.find(s => s.teamId === match.away);

            if (homeTeam && awayTeam) {
                homeTeam.played++;
                awayTeam.played++;
                homeTeam.goalsFor += match.homeScore;
                homeTeam.goalsAgainst += match.awayScore;
                awayTeam.goalsFor += match.awayScore;
                awayTeam.goalsAgainst += match.homeScore;

                if (match.homeScore > match.awayScore) {
                    homeTeam.won++;
                    homeTeam.points += 3;
                    awayTeam.lost++;
                } else if (match.homeScore < match.awayScore) {
                    awayTeam.won++;
                    awayTeam.points += 3;
                    homeTeam.lost++;
                } else {
                    homeTeam.drawn++;
                    awayTeam.drawn++;
                    homeTeam.points += 1;
                    awayTeam.points += 1;
                }
            }
        }
    });

    standings.forEach(team => {
        team.goalDiff = team.goalsFor - team.goalsAgainst;
    });

    standings.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
        if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
        return a.teamId.localeCompare(b.teamId);
    });

    return standings;
}

function formatMatchDateTime(date, time) {
    const dateObj = new Date(date + 'T' + time);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}.${month}.${day} ${time}`;
}

function buildBookingUrl(cityName, country) {
    const query = encodeURIComponent(cityName + ', ' + country);
    return `https://www.booking.com/searchresults.html?ss=${query}`;
}

function buildMapsRestaurantUrl(cityName) {
    const query = encodeURIComponent(cityName + ' 맛집');
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
