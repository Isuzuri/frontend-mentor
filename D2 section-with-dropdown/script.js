const featuresDropdown = document.querySelector('.li-features');
const companyDropdown = document.querySelector('.li-company');

window.addEventListener('click', (event) => {
    if (event.target !== featuresDropdown && event.target !== companyDropdown) {
        document.querySelectorAll('.dropdown').forEach(e => e.remove())
        document.querySelectorAll('.dropdown-arrow').forEach(e => e.style.transform = '')
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
            <li><img src="images/icon-todo.svg" alt="" class="todo-icon features-icon">Todo List</li>
            <li><img src="images/icon-calendar.svg" alt="" class="calender-icon features-icon">Calender</li>
            <li><img src="images/icon-reminders.svg" alt="" class="reminders-icon features-icon">Reminders</li>
            <li><img src="images/icon-planning.svg" alt="" class="planning-icon features-icon">Planning</li>
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
        dropdownList.style.display = 'none';
    } else {
        dropdownList.style.display = 'flex' ;
        dropdownElement.children[0].style.transform = 'rotate(180deg)'
    }
    dropdownList.style.left = dropdownElement.offsetLeft - (dropdownElement.offsetWidth / 2) + 'px';
    dropdownList.style.top = dropdownElement.offsetTop + dropdownElement.offsetHeight + 'px';
}