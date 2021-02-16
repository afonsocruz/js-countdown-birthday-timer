const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const mainTitle = document.getElementById('main-title');
const defaultTitle = 'Contador de mêsversário';
mainTitle.textContent = defaultTitle;

const birthDate = document.getElementById('birth-date');

const body = document.getElementById('body');
const paragraph = document.querySelectorAll('.malu-info p');

let maluBirthday = '23 Feb 2021';

const getMonthDiff = () => {
    const mb = new Date('23 Nov 2020');
    const now = new Date();
    
    const result = now.getMonth() - mb.getMonth() + (12 * (now.getFullYear() - mb.getFullYear()) - 1);

    birthDate.innerHTML = (`${result} meses`);
}

const handleTitleChange = (title) => {
    mainTitle.textContent = title;
    if (title !== defaultTitle) {
        mainTitle.style.width = '70%';
        mainTitle.style.textAlign = 'center';
    } else {
        mainTitle.style.width = 'auto';
        mainTitle.style.textAlign = 'center';
    }
}

const handleTypeSelection = () => {
    const selectionType = document.getElementById('birth');
    const selectedType = selectionType.value;

    switch (selectedType) {
        case 'feb':
            maluBirthday = '23 Feb 2021';
            handleTitleChange(defaultTitle);
            body.style.backgroundImage = 'url(./assets/malu.jpeg)';
            fillAllParagraphs();
            break;
        case 'mar':
            maluBirthday = '23 Mar 2021';
            handleTitleChange(defaultTitle);
            fillAllParagraphs();
            body.style.backgroundImage = 'url(./assets/malu2.jpeg)';
            break;
        case 'apr':
            maluBirthday = '23 Apr 2021';
            handleTitleChange(defaultTitle);
            body.style.backgroundImage = 'url(./assets/malu3.jpeg)';
            fillAllParagraphs();
            break;
        case 'may':
            maluBirthday = '23 May 2021';
            handleTitleChange(defaultTitle);
            body.style.backgroundImage = 'url(./assets/malu4.jpeg)';
            fillAllParagraphs();
            break;
        case 'jun':
            maluBirthday = '23 Jun 2021';
            handleTitleChange(defaultTitle);
            body.style.backgroundImage = 'url(./assets/malu5.jpeg)';
            fillAllParagraphs();
            break;
        case 'jul':
            maluBirthday = '23 Jul 2021';
            handleTitleChange(defaultTitle);
            body.style.backgroundImage = 'url(./assets/malu6.jpeg)';
            fillAllParagraphs();
            break;
        case 'aug':
            maluBirthday = '23 Aug 2021';
            handleTitleChange(defaultTitle);
            body.style.backgroundImage = 'url(./assets/malu7.jpeg)';
            fillAllParagraphs();
            break;
        case 'sep':
            maluBirthday = '23 Sep 2021';
            handleTitleChange(defaultTitle);
            body.style.backgroundImage = 'url(./assets/malu8.jpeg)';
            fillAllParagraphs();
            break;
        case 'oct':
            maluBirthday = '23 Oct 2021';
            handleTitleChange(defaultTitle);
            body.style.backgroundImage = 'url(./assets/malu10.jpeg)';
            fillAllParagraphs();
            break;
        case 'nov':
            handleTitleChange('Completo 1 aninho nessa data!');
            maluBirthday = '23 Nov 2021';
            body.style.backgroundImage = 'url(./assets/malu9.jpeg)';
            fillAllParagraphs();
            break;
        default:
            break;
    }
}

const countdown = () => {
    const maluBirthdayDate = new Date(maluBirthday);
    const currentDate = new Date();

    const totalSeconds = (maluBirthdayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);000000000000
    secondsEl.innerHTML = formatTime(seconds);
}

const formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time;
}

const fillAllParagraphs = () => {
    const selectionType = document.getElementById('birth');
    const selectedType = selectionType.value;
    for (let i = 0; i < paragraph.length; i++) {
        selectedType == 'mar' ? paragraph[i].style.color = '#000' : paragraph[i].style.color = '#FFF'; 
    }   
}

//initial call
countdown();
getMonthDiff();

setInterval(countdown, 1000);
