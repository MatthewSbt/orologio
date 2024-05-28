function getTimeAsObject() { 
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return { h, m, s };
}

function updateClock() {
    const { h, m, s } = getTimeAsObject();

    const hrAngle = (h % 12) * 30 + m * 0.5; // 360/12 = 30
    const minAngle = m * 6; // 360/60 = 6
    const secAngle = s * 6; // 360/60 = 6

    document.documentElement.style.setProperty('--hrangle', `${hrAngle}deg`);
    document.documentElement.style.setProperty('--minangle', `${minAngle}deg`);
    document.documentElement.style.setProperty('--secangle', `${secAngle}deg`);

    document.getElementById('hour-hand').style.setProperty('--angle', `${hrAngle}deg`);
    document.getElementById('minute-hand').style.setProperty('--angle', `${minAngle}deg`);
    document.getElementById('second-hand').style.setProperty('--angle', `${secAngle}deg`);
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately
