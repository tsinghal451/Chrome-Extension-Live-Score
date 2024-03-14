async function getMatchData() {
    try {
        const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=c155af5e-14cc-449f-9476-a29db520e0dd&offset=0");
        const data = await response.json();

        if (data.status !== "success") return;

        const matchesList = data.data;

        if (!matchesList) return [];

        const relevantData = matchesList
            .filter(match => match.series_id === "71a7c7dc-3929-408c-9641-1da6d96f8894")
            .map(match => {
                const scoreDetails = match.score || [];
                const formattedScore = scoreDetails.map(score => {
                    return `${score.inning}: Runs - <span class="runs-highlight">${score.r}</span>, Wickets - <span class="wickets-highlight">${score.w}</span>, Overs - <span class="overs-highlight">${score.o}</span>`;
                });

                return `<span class="match-container">
                            <span class="match-name">${match.name}</span>
                            <br/>
                            <br/>
                            <span class="match-status">${match.status}</span>
                            <br/>
                            <br/>
                            <span class="live-score-details">Live Score: ${formattedScore.join('<br/><br/>') || 'N/A'}</span>
                        </span>`;
            });

        console.log({ relevantData });

        const matchesElement = document.getElementById("matches");
        matchesElement.innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');

        return relevantData;
    } catch (error) {
        console.error(error);
    }
}

getMatchData();
