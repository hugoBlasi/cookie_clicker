var Score = 0;
var Click = 1;
var gps = 0;

function addToScore(amount) {
    Score = Score + amount;
}

var minions = [
    { name: "Nami", cost: 20, AjoutBerryGPS: 1, owned: 0 },
    { name: "Chopper", cost: 50, AjoutBerryGPS: 5, owned: 0 },
    { name: "Usopp", cost: 100, AjoutBerryGPS: 10, owned: 0 },
    { name: "Robin", cost: 150, AjoutBerryGPS: 20, owned: 0 },
    { name: "Sanji", cost: 200, AjoutBerryGPS: 50, owned: 0 },
    { name: "Zoro", cost: 99999, AjoutBerryGPS: 100, owned: 0 },
]

function getGPS() {
    gps = 0;
    minions.forEach(function (minions) {
        gps += minions.AjoutBerryGPS * minions.owned;
        
    })
}

var palier = 50;

var palierdebase = [
    { palier: 25 },
    { palier: 25 },
    { palier: 25 },
    { palier: 25 },
    { palier: 25 },
    { palier: 25 },
]

function buyMinion(id) {

    if (Score >= minions[id].cost) {
        var g = Score - minions[id].cost;
        var o = minions[id].owned + 1;
        Score = g;
        minions[id].owned = o;
        minions[id].cost = Math.round(minions[id].cost *= 1.15);
        getGPS();
        
    } else {
        alert('snif');
    }

    if (minions[0].owned + minions[1].owned + minions[2].owned + minions[3].owned == palier) {
        palier += 50;
        Score *= 2;
    }

    if (minions[id].owned == palierdebase[id].palier) {

        if (palierdebase[id].palier <= 100) {
            palierdebase[id].palier *= 2;
            minions[id].gps *= 2;
        }

        if (palierdebase[id].palier == 200) {
            palierdebase[id].palier += 50;
            minions[id].gps *= 2;
        }

        else if (palierdebase[id].palier == 250) {
            palierdebase[id].palier += 750;
            minions[id].gps *= 2;
        }
    }
}

setInterval(function(){

        document.getElementById("Score").innerHTML = Score;
        document.getElementById("NamiCost").innerHTML = minions[0].cost;
        document.getElementById("Nami").innerHTML = minions[0].owned;
        document.getElementById("ChopperCost").innerHTML = minions[1].cost;
        document.getElementById("Chopper").innerHTML = minions[1].owned;
        document.getElementById("UsoppCost").innerHTML = minions[2].cost;
        document.getElementById("Usopp").innerHTML = minions[2].owned;
        document.getElementById("RobinCost").innerHTML = minions[3].cost;
        document.getElementById("Robin").innerHTML = minions[3].owned;
        document.getElementById("SanjiCost").innerHTML = minions[4].cost;
        document.getElementById("Sanji").innerHTML = minions[4].owned;
        document.getElementById("ZoroCost").innerHTML = minions[5].cost;
        document.getElementById("Zoro").innerHTML = minions[5].owned;
        document.getElementById("ScoreGPS").innerHTML = gps;
    
},);

setInterval(function(){
    minions.forEach(function (minions) {     
        Score += minions.AjoutBerryGPS * minions.owned;     
    })},1000)