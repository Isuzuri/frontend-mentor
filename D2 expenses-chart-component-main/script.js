fetch("data.json")
    .then(response => response.json())
    .then(json => displayDaysStatistic(json))

function displayDaysStatistic(dataArr) {
    const table = dataArr.reduce(
        (acc, { day, amount }) => {
        return {
            thead: `${acc.thead}<div class="graph" style="height:${amount}px"></div>`,
            tbody: `${acc.tbody}<div>${day}</div>`
        };
        },
        { thead: '', tbody: '' }
    );
    document.querySelector('.bar').innerHTML = table.thead;
    document.querySelector('.day').innerHTML += table.tbody;

    document.querySelectorAll('.graph').forEach(e => e.addEventListener('mouseover', (event) => {
        showTooltip(event, +event.target.style.height.slice(0, -2));
    }))
    document.querySelectorAll('.graph').forEach(e => e.addEventListener('mouseout', (event) => {
        document.querySelector('.tooltip').remove()
    }))
}

function showTooltip(event, value) {
    document.body.insertAdjacentHTML('beforeend', `<div class="tooltip b-bold">$${value}</div>`)
    const tooltip = document.querySelector('.tooltip');
    tooltip.style.top = event.target.offsetTop - tooltip.offsetHeight - 24 + 'px';
    tooltip.style.left = event.target.offsetLeft + event.target.offsetWidth / 2 - tooltip.offsetWidth / 2 + 'px';
}