function hideAll() {
    $("#low").hide();
    $("#lowmiv").hide();
    $(".div1").hide();
    $(".div2").hide();
    $(".div3").hide();
    $(".div4").hide();
    $(".div5").hide();
}
function bat0() {
    $("alert").hide();
    $(".excla").hide();
    $("#low").hide();
    $("#lowmiv").hide();
    $(".miv").show();
    $(".div1").show();
    $(".div2").hide();
    $(".div3").hide();
    $(".div4").hide();
    $(".div5").hide();
}
function bat25() {
    $("alert").hide();
    $("#low").hide();
    $("#lowmiv").hide();
    $("#low").hide();
    $(".miv").show();
    $(".div2").show();
    $(".div3").hide();
    $(".div4").hide();
    $(".div5").hide();
}
function bat50() {
    $("#low").hide();
    $("#lowmiv").hide();
    $(".miv").show();
    $(".div2").show();
    $(".div3").show();
    $(".div4").hide();
    $(".div5").hide();
}
function bat75() {
    $("#low").hide();
    $("#lowmiv").hide();
    $(".miv").show();
    $(".div2").show();
    $(".div3").show();
    $(".div4").show();
    $(".div5").hide();
}
function bat100() {
    $("#low").hide();
    $("#lowmiv").hide();
    $(".miv").show();
    $(".div2").show();
    $(".div3").show();
    $(".div4").show();
    $(".div5").show();
    $(".feno").text('votre batterie est chargé ');
}
function lowbat() {
    $(".div1").hide();
    $(".miv").hide();
    $("#low").show();
    $("#lowmiv").show();
    $(".excla").text('!');
    $(".alert").text('votre batterie est faible veuillez le recharger')

}
function pourcentage() {
    $(".alert").hide();
    $(".btn").hide();
    bat0();
    let countdownElement = document.getElementById('pourc');
    let i = 1;
    let interval = setInterval(() => {
        $(".modulo").text('%');
        countdownElement.textContent = i; i++;
        if (i > 99) {
            clearInterval(interval);
            countdownElement.textContent = i;
        }
        if (i < 100) {
            $(".feno").text('chargement en cours...');
        }
        if (i >= 75 && i < 90) {
            // $(".div5").fadeToggle();
            $(".div4").stop();
        }
        if (i >= 50 && i < 75) {
            $(".div4").fadeToggle(200);
            $(".div3").stop();
        }
        if (i >= 25 && i < 50) {
            $(".div3").fadeToggle(200);
            $(".div2").stop();
        } if (i < 25) {
            $(".div2").fadeToggle(200);
        }

        if (i == 100) {
            bat100();

        } else
            if (i >= 75) {
                bat75();
            } else
                if (i >= 50) {
                    bat50();
                } else
                    if (i >= 25) {
                        bat25();
                    }
    }, 200);
}


//pourcentage();
//bat0();
lowbat();
//hideAll();