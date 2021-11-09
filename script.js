function turnOff() {
    document.getElementById("blub-img").src="./media/pic_bulboff.gif";
}

function turnOn() {
    document.getElementById("blub-img").src="./media/pic_bulbon.gif";
}

function changeTheme() {
    document.getElementById("body").style.backgroundColor='#111';
    document.getElementById("h2").style.color="#fff";
    document.getElementById("theme1").style.display="none";
    document.getElementById("theme2").style.display="inline-block";
}

function changeTheme2() {
    document.getElementById("body").style.backgroundColor='#f4f4f4';
    document.getElementById("h2").style.color="#333";
    document.getElementById("theme1").style.display="inline-block";
    document.getElementById("theme2").style.display="none";
}