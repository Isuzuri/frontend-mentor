const searchBtn = document.querySelector('.search button');

searchBtn.addEventListener('click', () => {
    const noResult = document.querySelector('.search span');
    noResult.className = 'no-results';
    setTimeout(() => {
        noResult.className = ''
    }, 3000);
})