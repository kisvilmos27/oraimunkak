kocka = document.getElementById("koczka");
szamlalo = 0;
talalt = 0;
kattintott = false;
started = true;
function start()
{
    if(started)
    {
        started = !started;
        ido = setInterval(function()
            {
                kattintott = false;
                szamlalo++;
                document.getElementById("katt").innerHTML = szamlalo;
                x = Math.floor(Math.random() * 30) * 20;
                y = Math.floor(Math.random() * 30) * 20;
                kocka.style.top = y+"px";
                kocka.style.left = x+"px";
            }, 1500
        );
    }
}

kocka.addEventListener("click", function()
    {
        if(kattintott == false)
        {
            talalt++;
            document.getElementById("talat").innerHTML = talalt;
            kattintott = true;
        }
    }
);