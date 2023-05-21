fetch("data.json")
    .then(response => response.json())
    .then(json => displayDaysStatistic(Array.from(json)))

function displayDaysStatistic(dataArr) {
    
}

