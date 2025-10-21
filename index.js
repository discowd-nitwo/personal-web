console.log(
    "%c Hello person interested in my websites code. Please don't make fun of it",
    "font-size: 18px;" +
    getComputedStyle(document.body).getPropertyValue("--accent")
);
console.log(
    "%c 🧃🍟 - take a drink and a snack",
    "font-size: 16px;" +
    getComputedStyle(document.body).getPropertyValue("--accent")
);

function updateTime() {
    const options = {
        timeZone: 'Europe/London',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const now = new Date().toLocaleString('en-GB', options);
    const [date, time] = now.split(', ');

    document.getElementById('date-count').textContent = `[ ${date} ]`;
    document.getElementById('time-count').textContent = `[ ${time} ]`;
}

setInterval(updateTime, 1000);
updateTime();

//Smooth scrolling
document.querySelectorAll('header .nav .link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Age Updater
function calculateAge(birthDate) {
    var today = new Date();
    var dob = new Date(birthDate);
    var age = today.getFullYear() - dob.getFullYear();
    if (today < new Date(today.getFullYear(), dob.getMonth(), dob.getDate())) {
        age--;
    }
    return age;
}

function updateAge() {
    var ageCountElement = document.getElementById('age-count');
    var age = calculateAge("2010-09-21");
    ageCountElement.textContent = age;
}

updateAge();
setInterval(updateAge, 24 * 60 * 60 * 1000);

// I couldnt do this css, so yeahhh
document.getElementById('about-section').addEventListener('mouseenter', function () {
    document.getElementById('about').style.border = '3px solid #eb0400';
    document.querySelectorAll('#about .section-hr').forEach(function (hr) {
        hr.style.borderTop = '2px solid #eb0400';
    });
});

document.getElementById('about-section').addEventListener('mouseleave', function () {
    document.getElementById('about').style.border = '3px solid #282828';
    document.querySelectorAll('#about .section-hr').forEach(function (hr) {
        hr.style.borderTop = '2px solid #282828';
    });
});

document.getElementById('socials-section').addEventListener('mouseenter', function () {
    document.getElementById('socials').style.border = '3px solid #eb0400';
    document.querySelectorAll('#socials .section-hr').forEach(function (hr) {
        hr.style.borderTop = '2px solid #eb0400';
    });
});

document.getElementById('socials-section').addEventListener('mouseleave', function () {
    document.getElementById('socials').style.border = '3px solid #282828';
    document.querySelectorAll('#socials .section-hr').forEach(function (hr) {
        hr.style.borderTop = '2px solid #282828';
    });
});

document.getElementById('projects-section').addEventListener('mouseenter', function () {
    document.getElementById('projects').style.border = '3px solid #eb0400';
    document.querySelectorAll('#about .section-hr').forEach(function (hr) {
        hr.style.borderTop = '2px solid #eb0400';
    });
});

document.getElementById('projects-section').addEventListener('mouseleave', function () {
    document.getElementById('projects').style.border = '3px solid #282828';
    document.querySelectorAll('#about .section-hr').forEach(function (hr) {
        hr.style.borderTop = '2px solid #282828';
    });
});

document.getElementById('experience-section').addEventListener('mouseenter', function () {
    document.getElementById('experience').style.border = '3px solid #eb0400';
    document.querySelectorAll('#about .section-hr').forEach(function (hr) {
        hr.style.borderTop = '2px solid #eb0400';
    });
});

document.getElementById('experience-section').addEventListener('mouseleave', function () {
    document.getElementById('experience').style.border = '3px solid #282828';
    document.querySelectorAll('#about .section-hr').forEach(function (hr) {
        hr.style.borderTop = '2px solid #282828';
    });
});
