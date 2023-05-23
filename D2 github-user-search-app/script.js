const searchBtn = document.querySelector('.search button');

searchBtn.addEventListener('click', async () => {
    const username = document.querySelector('.search-input').value;
    const response = await fetch(`https://api.github.com/users/${username}`);
  
    if (!response.ok) {
      showNoResult();
      return;
    }
  
    const data = await response.json();
    main.innerHTML = getMainFormHTML(data);
    replaceEmptyFields();
  });
  

function getMainFormHTML(response) {
    return `
    <div class="main-info">
        <div class="avatar"><img src="${response.avatar_url}"></div>
        <div class="info">
            <h1>${response.name}</h1>
            <h3>@${response.login}</h3>
            <p>${response.bio}</p>
            <h4>Joined ${getDateRightFormat(response.created_at)}</h4>
        </div>
    </div>
    <div class="repo">
        <div class="repo-count">
            <h4>Repos</h4>
            <h1>${response.public_repos}</h1>
        </div>
        <div class="followers">
            <h4>Followers</h4>
            <h1>${response.followers}</h1>
        </div>
        <div class="following">
            <h4>Following</h4>
            <h1>${response.following}</h1>
        </div>
    </div>
    <div class="link">
        <div class="location">
            <img src="assets/icon/icon-location.svg" alt="">
            <p>${response.location}</p>
        </div>
        <div class="twitter">
            <img src="assets/icon/icon-twitter.svg" alt="">
            <p><a href="https://twitter.com/${response.twitter_username}" target="_blank">${response.twitter_username}</a></p>
        </div>
        <div class="github">
            <img src="assets/icon/icon-website.svg" alt="">
            <p><a href="${response.blog}" target="_blank">${response.blog}</a></p>
        </div>
        <div class="company">
            <img src="assets/icon/icon-company.svg" alt="">
            <p>${response.company}</p>
        </div>
    </div>
    `
}

function showNoResult() {
    const noResult = document.querySelector('.search span');
    noResult.className = 'no-results';
    setTimeout(() => {
        noResult.className = ''
    }, 3000);
}

function getDateRightFormat(date) {
    const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    date = new Date(date);
    return date.getDate() + ' ' + monthArray[date.getMonth()] + ' ' + date.getFullYear();
}

function replaceEmptyFields() {
    const fields = document.querySelectorAll('p')
    fields.forEach(element => {
        if (element.innerHTML.includes('null') || element.innerHTML.includes('')) {
            element.innerHTML = 'Not available'
            element.classList.add('not-available')
        }
    })
}