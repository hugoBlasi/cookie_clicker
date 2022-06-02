var Score = 0;
var Click = 1;

var NamiCost = 20;
var Nami = 0;
var NamiV = 1;
var ChopperCost = 50;
var Chopper = 0;
var ChopperV = 5;
var UsoppCost = 100;
var Usopp = 0;
var UsoppV = 10;
var RobinCost = 150;
var Robin = 0;
var RobinV = 20;
var SanjiCost = 200;
var Sanji = 0;
var SanjiV = 50;
var ZoroCost = 99999;
var Zoro = 0;
var ZoroV = 100;



function buyNami() {
    if (Score >= NamiCost) {
        Score = Score - NamiCost;
        Nami = Nami + 1;
        NamiCost = Math.round(NamiCost * 1.15);

        document.getElementById("Score").innerHTML = Score;
        document.getElementById("NamiCost").innerHTML = NamiCost;
        document.getElementById("Nami").innerHTML = Nami;
        AjoutBerryGPS();

    }
    if (Nami == 25) {
        NamiV = NamiV * 2;
    }
    if (Nami == 50) {
        NamiV = NamiV * 2;
    }
    if (Nami == 100) {
        NamiV = NamiV * 2;
    } else {
        alert('snif');
    }
}

function buyChopper() {
    if (Score >= ChopperCost) {
        Score = Score - ChopperCost;
        Chopper = Chopper + 1;
        ChopperCost = Math.round(ChopperCost * 1.15);

        document.getElementById("Score").innerHTML = Score;
        document.getElementById("ChopperCost").innerHTML = ChopperCost;
        document.getElementById("Chopper").innerHTML = Chopper;
        AjoutBerryGPS();
    }
    if (Chopper == 25) {
        ChopperV = ChopperV * 2;
    }
    if (Chopper == 50) {
        ChopperV = ChopperV * 2;
    }
    if (Chopper == 100) {
        ChopperV = ChopperV * 2;
    } else {
        alert('snif');
    }
} 


function buyUsopp() {
    if (Score >= UsoppCost) {
        Score = Score - UsoppCost;
        Usopp = Usopp + 1;
        UsoppCost = Math.round(UsoppCost * 1.15);

        document.getElementById("Score").innerHTML = Score;
        document.getElementById("UsoppCost").innerHTML = UsoppCost;
        document.getElementById("Usopp").innerHTML = Usopp;
        AjoutBerryGPS();
    }
    if (Usopp == 25) {
        UsoppV = UsoppV * 2;
    }
    if (Usopp == 50) {
        UsoppV = UsoppV * 2;
    }
    if (Usopp == 100) {
        UsoppV = UsoppV * 2;
    } else {
        alert('snif');
    }
}

function buyRobin() {
    if (Score >= RobinCost) {
        Score = Score - RobinCost;
        Robin = Robin + 1;
        RobinCost = Math.round(RobinCost * 1.15);

        document.getElementById("Score").innerHTML = Score;
        document.getElementById("RobinCost").innerHTML = RobinCost;
        document.getElementById("Robin").innerHTML = Robin;
        AjoutBerryGPS();
    }
    if (Robin == 25) {
        RobinV = RobinV * 2;
    }
    if (Robin == 50) {
        RobinV = RobinV * 2;
    }
    if (Robin == 100) {
        RobinV = RobinV * 2;
    } else {
        alert('snif');
    }
}

function buySanji() {
    if (Score >= SanjiCost) {
        Score = Score - SanjiCost;
        Sanji = Sanji + 1;
        SanjiCost = Math.round(SanjiCost * 1.15);

        document.getElementById("Score").innerHTML = Score;
        document.getElementById("SanjiCost").innerHTML = SanjiCost;
        document.getElementById("Sanji").innerHTML = Sanji;
        AjoutBerryGPS();
    }
    if (Sanji == 25) {
        SanjiV = SanjiV * 2;
    }
    if (Sanji == 50) {
        SanjiV = SanjiV * 2;
    }
    if (Sanji == 100) {
        SanjiV = SanjiV * 2;
    } else {
        alert('snif');
    }
}

function buyZoro() {
    if (Score >= ZoroCost) {
        Score = Score - ZoroCost;
        Zoro = Zoro + 1;
        ZoroCost = Math.round(ZoroCost * 1.15);

        document.getElementById("Score").innerHTML = Score;
        document.getElementById("ZoroCost").innerHTML = ZoroCost;
        document.getElementById("Zoro").innerHTML = Zoro;
        AjoutBerryGPS();
    }
    if (Zoro == 25) {
        ZoroV = ZoroV * 2;
    }
    if (Zoro == 50) {
        ZoroV = ZoroV * 2;
    }
    if (Zoro == 100) {
        ZoroV = ZoroV * 2;
    } else {
        alert('snif');
    }
}


function addToScore(amount) {
    Score = Score + amount;
    document.getElementById("Score").innerHTML = Score;
}

function AjoutBerryGPS() {
    ScoreGPS = (NamiV * Nami) + (ChopperV * Chopper) + (UsoppV * Usopp) + (RobinV * Robin) + (SanjiV * Sanji) + (ZoroV * Zoro);
    document.getElementById("ScoreGPS").innerHTML = ScoreGPS;
}


function load() {
    var save = JSON.parse(localStorage.getItem("gameSave"));

    if (typeof save.Score !== "undefined") Score = save.Score;
    if (typeof save.Nami !== "undefined") Nami = save.Nami;
    if (typeof save.NamiCost !== "undefined") NamiCost = save.NamiCost;
    if (typeof save.Chopper !== "undefined") Chopper = save.Chopper;
    if (typeof save.ChopperCost !== "undefined") ChopperCost = save.ChopperCost;
    if (typeof save.Usopp !== "undefined") Usopp = save.Usopp;
    if (typeof save.UsoppCost !== "undefined") UsoppCost = save.UsoppCost;
    if (typeof save.Robin !== "undefined") Robin = save.Robin;
    if (typeof save.RobinCost !== "undefined") RobinCost = save.RobinCost;
    if (typeof save.Sanji !== "undefined") Sanji = save.Sanji;
    if (typeof save.SanjiCost !== "undefined") SanjiCost = save.SanjiCost;
    if (typeof save.Zoro !== "undefined") Zoro = save.Zoro;
    if (typeof save.ZoroCost !== "undefined") ZoroCost = save.ZoroCost;

}

function save() {
    var gameSave = {

        Score: Score,
        Nami: Nami,
        NamiCost: NamiCost,
        Chopper:Chopper,
        ChopperCost:ChopperCost,
        Usopp: Usopp,
        UsoppCost: UsoppCost,
        Robin: Robin,
        RobinCost: RobinCost,
        Sanji: Sanji,
        SanjiCost: SanjiCost,
        Zoro: Zoro,
        ZoroCost: ZoroCost
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

window.onload = function () {
    load();
    AjoutBerryGPS();
    document.getElementById("Score").innerHTML = Score;
    document.getElementById("NamiCost").innerHTML = NamiCost;
    document.getElementById("Nami").innerHTML = Nami;
    document.getElementById("ChopperCost").innerHTML = ChopperCost;
    document.getElementById("Chopper").innerHTML = Chopper;
    document.getElementById("UsoppCost").innerHTML = UsoppCost;
    document.getElementById("Usopp").innerHTML = Usopp;
    document.getElementById("RobinCost").innerHTML = RobinCost;
    document.getElementById("Robin").innerHTML = Robin;
    document.getElementById("SanjiCost").innerHTML = SanjiCost;
    document.getElementById("Sanji").innerHTML = Sanji;
    document.getElementById("ZoroCost").innerHTML = ZoroCost;
    document.getElementById("Zoro").innerHTML = Zoro;

}


setInterval(function () {
    Score = Score + NamiV * Nami;
    Score = Score + ChopperV * Chopper;
    Score = Score + UsoppV * Usopp;
    Score = Score + RobinV * Robin;
    Score = Score + SanjiV * Sanji;
    Score = Score + ZoroV * Zoro;
    document.getElementById("Score").innerHTML = Score;
}, 1000);

setInterval(function () {
    save();
}, 30000);


function music() {
let music = new Audio('son/ost.mp3');
        music.play();
}