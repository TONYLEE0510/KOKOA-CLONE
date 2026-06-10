let allTeams = [];
let allMatches = [];
let allCities = [];
let activeGroup = 'A';

async function initGroupsPage() {
    const data = await loadAllData();
    allTeams = data.teams;
    allMatches = data.matches;
    allCities = data.cities;

    const hash = window.location.hash.substring(1);
    if (hash.startsWith('group-')) {
        activeGroup = hash.replace('group-', '');
    }

    renderGroupSelector();
    renderGroupPanel(activeGroup);
    setupEventListeners();
}

function renderGroupSelector() {
    const selectorContainer = document.getElementById('group-selector');
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

    selectorContainer.innerHTML = groups.map(group => `
        <button class="group-btn ${group === activeGroup ? 'active' : ''}" data-group="${group}">
            ${group}조
        </button>
    `).join('');
}

function renderGroupPanel(group) {
    const panelContainer = document.getElementById('group-panel');

    const standings = computeGroupStandings(group, allTeams, allMatches);
    const matches = getMatchesInGroup(allMatches, group);

    const standiningsHTML = `
        <h2 class="group-title">${group}조</h2>

        <div class="info-banner">
            ℹ️ 조 편성 및 참고순위는 예시 데이터입니다. 대회 시작 전 모든 경기가 미진행 상태입니다.
        </div>

        <div class="table-wrapper">
            <table class="standings-table">
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>팀</th>
                        <th>경기</th>
                        <th>승</th>
                        <th>무</th>
                        <th>패</th>
                        <th>득점</th>
                        <th>실점</th>
                        <th>득실차</th>
                        <th>승점</th>
                    </tr>
                </thead>
                <tbody>
                    ${standings.map((team, idx) => `
                        <tr>
                            <td>${idx + 1}</td>
                            <td>
                                <div class="team-name">
                                    <span class="team-flag">${team.flag}</span>
                                    <span>${team.teamName}</span>
                                </div>
                            </td>
                            <td>${team.played}</td>
                            <td>${team.won}</td>
                            <td>${team.drawn}</td>
                            <td>${team.lost}</td>
                            <td>${team.goalsFor}</td>
                            <td>${team.goalsAgainst}</td>
                            <td>${team.goalDiff > 0 ? '+' : ''}${team.goalDiff}</td>
                            <td><strong>${team.points}</strong></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--primary-color);">경기 일정</h3>
        <div class="match-list">
            ${matches.map(match => {
                const homeTeam = getTeamById(allTeams, match.home);
                const awayTeam = getTeamById(allTeams, match.away);
                const city = getCityById(allCities, match.cityId);

                return `
                    <a href="match.html?match=${match.id}" class="match-card">
                        <span class="match-badge">매치데이 ${match.matchday}</span>
                        <div class="match-date">${formatMatchDateTime(match.date, match.time)}</div>
                        <div class="match-vs">
                            <div class="team-info">
                                <div class="flag">${homeTeam.flag}</div>
                                <div class="name">${homeTeam.name}</div>
                                <div class="ranking">순위: ${homeTeam.ranking}</div>
                            </div>
                            <div class="vs-separator">vs</div>
                            <div class="team-info">
                                <div class="flag">${awayTeam.flag}</div>
                                <div class="name">${awayTeam.name}</div>
                                <div class="ranking">순위: ${awayTeam.ranking}</div>
                            </div>
                        </div>
                        <div class="match-venue">
                            📍 ${city.name} - ${city.stadium}
                        </div>
                    </a>
                `;
            }).join('')}
        </div>
    `;

    panelContainer.innerHTML = standiningsHTML;
}

function setupEventListeners() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('group-btn')) {
            activeGroup = e.target.dataset.group;
            window.location.hash = `group-${activeGroup}`;
            renderGroupSelector();
            renderGroupPanel(activeGroup);
        }
    });
}

document.addEventListener('DOMContentLoaded', initGroupsPage);
