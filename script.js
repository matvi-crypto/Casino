const matches = [
    "Арсенал - Челси",
    "Барселона - Реал",
    "Бавария - Боруссия",
    "Динамо - Шахтер",
    "Интер - Милан",
    "Ливерпуль - Манчестер Юнайтед",
    "ПСЖ - Марсель"
];

function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
}

function loadMatches() {
    const matchList = document.getElementById('matchList');
    matchList.innerHTML = "";
    matches.sort().forEach(match => {
        const li = document.createElement('li');
        li.textContent = match;
        matchList.appendChild(li);
    });
}

function searchMatches() {
    const input = document.getElementById('search').value.toLowerCase();
    const matchList = document.getElementById('matchList');
    matchList.innerHTML = "";
    matches.filter(match => match.toLowerCase().includes(input))
           .sort()
           .forEach(match => {
                const li = document.createElement('li');
                li.textContent = match;
                matchList.appendChild(li);
           });
}

window.onload = loadMatches;
