const zoneClicker = document.getElementById('zone-click');
let clickCount = 0;

zoneClicker.addEventListener('click', () => {
    clickCount++;
    zoneClicker.innerHTML = clickCount;


});