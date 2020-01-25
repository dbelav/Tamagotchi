let interval;
let time = 0;
let live;
let cheking;
let rand;

let robert = {
    food: 0,
    clean: 0,
    happy: 0,
    health: 0,
    socialization: 0,
    money: 0,
    key: function(n) {
        return this[Object.keys(this)[n]];
    }
};

function mode(stats) {
    for (let key in robert) {
        robert[key] -= stats;
    }
}

function check() {
    for (let key in robert) {
        if (robert[key] <= 0) {
            clearTimeout(interval);
            robert[key] = 0;
            robert = {
                food: 0,
                clean: 0,
                happy: 0,
                health: 0,
                socialization: 0,
                money: 0,
            };
            
            clearTimeout(live);

        }

        if (robert[key] > 100) {
            robert[key] = 100;
        }
    }
}

function timeLived() {
    time++;
    document.getElementById('time').innerHTML = `Time: ${time}s`;
}

function random(min, max) {
    for (let key in robert) {
        robert[key] += Math.floor(Math.random() * (+max - +min)) + min;
    }
}

function output() {
    document.getElementById('food').innerHTML = `food: ${robert.food} `;
    document.getElementById('clean').innerHTML = `clean: ${robert.clean}`;
    document.getElementById('happy').innerHTML = `happy: ${robert.happy}`;
    document.getElementById('health').innerHTML = `health: ${robert.health}`;
    document.getElementById('socialization').innerHTML = `socialization: ${robert.socialization}`;
    document.getElementById('money').innerHTML = `money: ${robert.money}`;
}


let clickFluffy = document.getElementById('easy');
clickFluffy.addEventListener('click', function () {
    random(50, 100);
    interval = setInterval(function () {
        mode(3);
    }, 5000, 5);
    setInterval(output, 1);
    live = setInterval(timeLived, 1000);
    cheking = setInterval(check, 1);
});

let clickLazy = document.getElementById('hard');
clickLazy.addEventListener('click', function () {
    random(50, 70);
    interval = setInterval(mode, 5000, 5);
    setInterval(output, 1);
    live = setInterval(timeLived, 1000);
    cheking = setInterval(check, 1);
});


let clickNinja = document.getElementById('ninja');
clickNinja.addEventListener('click', function () {
    random(50, 150);
    interval = setInterval(mode, 5000, 10);
    setInterval(output, 1);
    live = setInterval(timeLived, 1000);

    cheking = setInterval(function (params) {
        for (let key in robert) {
            if (robert[key] <= 0) {
                clearTimeout(interval);
                robert[key] = 0;
                robert = {
                    food: 0,
                    clean: 0,
                    happy: 0,
                    health: 0,
                    socialization: 0,
                    money: 0,
                };
                clearTimeout(live);
            }
        }
    }, 1);


});

let clickEat = document.getElementById('eat');
clickEat.addEventListener('click', function () {
    robert.food += 40;
    robert.clean -= 30;
});

let clickWash = document.getElementById('wash');
clickWash.addEventListener('click', function () {
    robert.clean += 40;
    robert.happy -= 20;
});

let clickHappy = document.getElementById('run');
clickHappy.addEventListener('click', function () {
    robert.happy += 15;
    robert.food -= 10;
});

let visitDoctor = document.getElementById('doctor');
visitDoctor.addEventListener('click', function () {
    robert.health += 30;
    robert.money -= 20;
});

let goBar = document.getElementById('bar');
goBar.addEventListener('click', function () {
    robert.socialization += 40;
    robert.money -= 20;
    robert.food += 10;
    robert.health -= 10;
});

let goWork = document.getElementById('work');
goWork.addEventListener('click', function () {
    robert.socialization -= 20;
    robert.money += 50;
    robert.food -= 10;
    robert.health -= 10;
});

let buyFood = document.getElementById('buy_food');
buyFood.addEventListener('click', function () {
    robert.money -= 20;
    robert.food += 20;
});

let startBusiness = document.getElementById('buisness');
startBusiness.addEventListener('click', function () {
    robert.socialization += 20;
    robert.money += 100;
    robert.health -= 100;
    robert.happy += 100;
});

let restart = document.getElementById('restart');
restart.addEventListener('click', function () {
    location.reload();
});
