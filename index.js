//==========| CONFIG |==========\\
var bodyElement = document.querySelector(':root');
var barShown = false


//==========| SHOW SIDE BAR WINDOW |==========\\
function showSideBar() {
    if (barShown == true) {
        barShown = false
        document.getElementById('sideBar').classList.add('hideSideBar')
        setTimeout(() => {
            document.getElementById('sideBar').classList.remove('hideSideBar')
            document.getElementById('sideBar').style.marginLeft = '-19em'
        }, 1850);
    } else {
        barShown = true
        document.getElementById('sideBar').classList.add('showSideBar')
        setTimeout(() => {
            document.getElementById('sideBar').classList.remove('showSideBar')
            document.getElementById('sideBar').style.marginLeft = 0
        }, 1850);
    }
}


//==========| SET BACKGROUND COLORS |==========\\
function setBackgroundColors() {
    var currentState = document.getElementById('sideBarBox').checked

    if (currentState == true) { // DARK MODE
        bodyElement.style.setProperty('--backgroundOne', 'rgb(53, 53, 53)');
        bodyElement.style.setProperty('--backgroundTwo', 'rgb(17, 22, 30)');
        bodyElement.style.setProperty('--textColor', 'rgb(215, 215, 215)');
        bodyElement.style.setProperty('--textColor2', 'rgb(12, 12, 12)');
        bodyElement.style.setProperty('--elementBack', 'rgba(241, 241, 241, 0.9)');
    } else { // LIGHT MODE
        bodyElement.style.setProperty('--backgroundOne', 'rgb(56, 178, 121)');
        bodyElement.style.setProperty('--backgroundTwo', 'rgb(249, 249, 249)');
        bodyElement.style.setProperty('--textColor', 'rgb(33, 33, 33)');
        bodyElement.style.setProperty('--textColor2', 'rgb(40, 40, 40)');
        bodyElement.style.setProperty('--elementBack', 'rgb(0, 0, 0, 0.1)');
    }
}


//==========| OPEN REMOTE SITE |==========\\
function openSite(webSite) {
    window.open(webSite, '_blank');
}


//==========| AUTO SCROLL |==========\\
function autoScroll(idLocation) {
    var el = document.getElementById(idLocation);
    el.scrollIntoView(true);
}