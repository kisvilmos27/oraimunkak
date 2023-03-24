function nevBevitel() {
    nev = document.getElementById("nev").value;
    document.getElementsByClassName("getNev")[0].style.display = "none";
    document.getElementsByClassName("game")[0].style.display = "block";
    document.getElementById("reply").innerHTML = "Rendben " + nev + ", gondoltam egy számra 0- 64 ig!";
    szam = Math.floor(Math.random() * 65);
}
probalkozasok = 0;
tippValasz = document.getElementById("tippValasz");
probaSzam = document.getElementById("probaSzam");
jatekba = true;
tipp = document.getElementById("tipp");
function tippElek() {
    if (jatekba) {
        bekertSzam = tipp.value;
        probalkozasok++;
        if (bekertSzam == szam) {
            tippValasz.innerHTML = "Gratulájok, kitaláltad!";
            document.getElementById("gumb").style.display = "none";
            document.getElementById("ujra").style.display = "inline-block";
            jatekba = false;
        } else if (bekertSzam < 0 || bekertSzam > 64) {
            probalkozasok--;
            tippValasz.innerHTML = "0 és 64 között tippelj!";
        } else if (bekertSzam > szam) {
            tippValasz.innerHTML = "Nagyobb a tipped mint amire gondoltam.";
        } else if (bekertSzam < szam) {
            tippValasz.innerHTML = "Kissebb a tipped mint amire gondoltam.";
        }
        probaSzam.innerHTML = "Próbálkozások: " + probalkozasok;
        tipp.value = "";
    }
}
function reset(){
    probalkozasok = 0;
    probaSzam.innerHTML = "Próbálkozások: 0";
    document.getElementById("gumb").style.display = "inline-block";
    document.getElementById("ujra").style.display = "none";
    tippValasz.innerHTML = "Adj meg egy számot";
    szam = Math.floor(Math.random() * 65);
    jatekba = true;
}

tipp.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("gumb").click();
  }
});