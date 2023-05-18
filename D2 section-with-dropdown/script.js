const featuresDropdown = document.querySelector('.li-features');
const companyDropdown = document.querySelector('.li-company');

window.addEventListener('click', (event) => {
    if (event.target !== featuresDropdown && event.target !== companyDropdown) {
        document.querySelectorAll('.dropdown').forEach(e => e.remove())
    } 
})

featuresDropdown.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(e => e.remove())
    featuresDropdown.insertAdjacentHTML('afterend', featuresDropdownHtml)
    const featuresList = document.querySelector('.features.dropdown')
    stateSwitch(featuresList, featuresDropdown)
})

companyDropdown.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(e => e.remove())
    companyDropdown.insertAdjacentHTML('afterend', companyDropdownHtml)
    const companyList = document.querySelector('.company.dropdown')
    stateSwitch(companyList, companyDropdown)
})

const featuresDropdownHtml = `
    <div class="features dropdown body-s">
        <ul>
            <li><span class="todo-icon features-icon"><img src="images/icon-todo.svg" alt=""></span>Todo List</li>
            <li><span class="calender-icon features-icon"><img src="images/icon-calendar.svg" alt=""></span>Calender</li>
            <li><span class="reminders-icon features-icon"><img src="images/icon-reminders.svg" alt=""></span>Reminders</li>
            <li><span class="planning-icon features-icon"><img src="images/icon-planning.svg" alt=""></span>Planning</li>
        </ul>
    </div>
`

const companyDropdownHtml = `
    <div class="company dropdown body-s">
        <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
        </ul>
    </div>
`

function stateSwitch(dropdownList, dropdownElement) {
    if (dropdownList.style.display === 'flex') {
        dropdownList.style.display = 'none'
    } dropdownList.style.display = 'flex'
    
    dropdownList.style.left = dropdownElement.offsetLeft - (dropdownElement.offsetWidth / 2) + 'px';
    dropdownList.style.top = dropdownElement.offsetTop + dropdownElement.offsetHeight + 'px';
}