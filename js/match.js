async function initMatchPage() {
    const matchId = getMatchIdFromQuery();

    if (!matchId) {
        showMatchNotFound();
        return;
    }

    const data = await loadAllData();
    const match = getMatchById(data.matches, matchId);

    if (!match) {
        showMatchNotFound();
        return;
    }

    const homeTeam = getTeamById(data.teams, match.home);
    const awayTeam = getTeamById(data.teams, match.away);
    const city = getCityById(data.cities, match.cityId);

    if (!homeTeam || !awayTeam || !city) {
        showMatchNotFound();
        return;
    }

    document.title = `${homeTeam.name} vs ${awayTeam.name} - 2026 FIFA 월드컵`;

    renderMatchHeader(match, homeTeam, awayTeam);
    renderTeamComparison(homeTeam, awayTeam);
    renderVenueInfo(city);
    renderExternalLinks(city);
    renderBackLink(match.group);
}

function getMatchIdFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('match');
}

function renderMatchHeader(match, homeTeam, awayTeam) {
    const headerContainer = document.getElementById('match-header');

    headerContainer.innerHTML = `
        <div class="match-header">
            <h1>${homeTeam.name} vs ${awayTeam.name}</h1>
            <div class="match-meta">
                <span class="match-badge">${match.group}조 - 매치데이 ${match.matchday}</span>
                <span>${formatMatchDateTime(match.date, match.time)}</span>
            </div>
        </div>
    `;
}

function renderTeamComparison(homeTeam, awayTeam) {
    const comparisonContainer = document.getElementById('team-comparison');

    comparisonContainer.innerHTML = `
        <div class="team-card">
            <div class="flag">${homeTeam.flag}</div>
            <div class="name">${homeTeam.name}</div>
            <div class="ranking">참고순위: <strong>${homeTeam.ranking}</strong></div>
        </div>
        <div class="vs-text">VS</div>
        <div class="team-card">
            <div class="flag">${awayTeam.flag}</div>
            <div class="name">${awayTeam.name}</div>
            <div class="ranking">참고순위: <strong>${awayTeam.ranking}</strong></div>
        </div>
    `;
}

function renderVenueInfo(city) {
    const venueContainer = document.getElementById('venue-info');

    venueContainer.innerHTML = `
        <h3>📍 개최지 정보</h3>
        <div class="venue-detail">
            <strong>도시:</strong> ${city.name}
        </div>
        <div class="venue-detail">
            <strong>경기장:</strong> ${city.stadium}
        </div>
        <div class="venue-detail">
            <strong>국가:</strong> ${city.country}
        </div>
    `;
}

function renderExternalLinks(city) {
    const linksContainer = document.getElementById('external-links');

    const bookingUrl = buildBookingUrl(city.name, city.country);
    const mapsUrl = buildMapsRestaurantUrl(city.name);

    linksContainer.innerHTML = `
        <a href="${bookingUrl}" target="_blank" rel="noopener" class="link-btn">
            🏨 호텔 검색
        </a>
        <a href="${mapsUrl}" target="_blank" rel="noopener" class="link-btn">
            🍽️ 맛집 검색
        </a>
    `;
}

function renderBackLink(group) {
    const backContainer = document.getElementById('back-link');
    backContainer.innerHTML = `
        <a href="index.html#group-${group}" class="back-link">← 조별리그로 돌아가기</a>
    `;
}

function showMatchNotFound() {
    const headerContainer = document.getElementById('match-header');
    const mainContent = document.getElementById('match-details');

    headerContainer.innerHTML = '';
    mainContent.innerHTML = `
        <div class="empty-state">
            <p>요청하신 경기를 찾을 수 없습니다.</p>
            <a href="index.html" class="back-link">← 조별리그로 돌아가기</a>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', initMatchPage);
