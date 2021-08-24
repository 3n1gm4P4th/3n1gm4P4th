let them = new Set();
let a1 = document.getElementById('nav_despl');
let p =  document.getElementById('particles');
let t = document.getElementById('themes');
let f = document.getElementById('fonts');
let stt = document.getElementById('stt');
stt.addEventListener('mousedown', start);
let pt2 = document.getElementById('pt');
pt2.addEventListener('mousedown', ptStart);

function start(){
    if(them.has('ptStart')){
        ptStart();
    }
    if(them.has('onReady')){
    a1.style.height = '0px';
    a1.style.width = '0%';
    a1.style.position = 'absolute';
    a1.style.marginLeft = '90%';
    a1.style.marginTop = '100px';
    a1.style.border = '';

    p.style.width = '100%'
    p.style.height = '30px';
    p.style.position = 'absolute';
    p.innerHTML = '';
    t.style.width = '100%';
    t.style.height = '30px';
    t.style.position = 'absolute';
    t.style.marginTop = '0px';
    t.innerHTML = '';
    f.style.width = '100%';
    f.style.height = '30px';
    f.style.position = 'absolute';
    f.style.marginTop = '0px';
    f.innerHTML = '';
    them.delete('onReady');
    return;
    }
    a1.style.height = '90px';
    a1.style.width = '20%';
    a1.style.position = 'absolute';
    a1.style.marginLeft = '80%';
    a1.style.marginTop = '100px';
    a1.style.border = '1px solid gray';

    p.style.width = '100%'
    p.style.height = '30px';
    p.style.position = 'absolute';
    p.innerHTML = 'Dark';
    t.style.width = '100%';
    t.style.height = '30px';
    t.style.position = 'absolute';
    t.style.marginTop = '30px';
    t.innerHTML = 'White';
    f.style.width = '100%';
    f.style.height = '30px';
    f.style.position = 'absolute';
    f.style.marginTop = '60px';
    f.innerHTML = 'Hacker'
    them.add('onReady');
}


function ptStart(){
    if(them.has('onReady')){
        start();
    }
    let nv2 = document.getElementById('nav_despl2');
    let ph = document.getElementById('pHacker');
    let ps = document.getElementById('pSnow');
    let ps2 = document.getElementById('pSnow2');
    if(them.has('ptStart')){
    nv2.style.position = 'absolute';
    nv2.style.width = '20%';
    nv2.style.height = '0px';
    nv2.style.marginTop = '100px';
    nv2.style.marginLeft = '80%';
    nv2.style.border = '';

    ph.style.position = 'absolute';
    ph.style.width = '0%'
    ph.style.height = '0px'
    ph.style.marginTop = '0px';
    ph.style.textAlign = 'center';
    ph.style.textDecoration = 'none';
    ph.innerHTML = '';
    ps.style.position = 'absolute';
    ps.style.width = '0%'
    ps.style.height = '0px'
    ps.style.marginTop = '0px';
    ps.style.textAlign = 'center';
    ps.style.textDecoration = 'none';
    ps.innerHTML = '';
    ps2.style.position = 'absolute';
    ps2.style.width = '0%'
    ps2.style.height = '0px'
    ps2.style.marginTop = '0px';
    ps2.style.textAlign = 'center';
    ps2.style.textDecoration = 'none';
    ps2.innerHTML = '';
    them.delete('ptStart');
    return;
    }
    nv2.style.position = 'absolute';
    nv2.style.width = '20%';
    nv2.style.height = '90px';
    nv2.style.marginTop = '100px';
    nv2.style.marginLeft = '80%';
    nv2.style.border = '1px gray solid';

    ph.style.position = 'absolute';
    ph.style.width = '100%'
    ph.style.height = '30px'
    ph.style.marginTop = '0px';
    ph.style.textAlign = 'center';
    ph.style.textDecoration = 'none';
    ph.innerHTML = 'Hacker_Particle';
    ps.style.position = 'absolute';
    ps.style.width = '100%'
    ps.style.height = '30px'
    ps.style.marginTop = '30px';
    ps.style.textAlign = 'center';
    ps.style.textDecoration = 'none';
    ps.innerHTML = 'Snow_Particle';
    ps2.style.position = 'absolute';
    ps2.style.width = '100%'
    ps2.style.height = '30px'
    ps2.style.marginTop = '60px';
    ps2.style.textAlign = 'center';
    ps2.style.textDecoration = 'none';
    ps2.innerHTML = 'Snow2_Particle';
    them.add('ptStart')
};
document.getElementById('pSnow2').addEventListener('mousedown', getSnow2);
document.getElementById('pHacker').addEventListener('mousedown', getHacker);

function getSnow2(){
    if(hh1 == 2){
        hhh = snow2Particles2();
        return hhh;
    }
    hhh = snow2Particles();
    return hhh;
}
function getHacker(){
    if(hh1 == 3){
        hhh = hackerParticles3();
        return hhh;
    }
    if(hh1 == 2){
        hhh = hackerParticles2();
        return hhh;
    }
    if(hh1 == 1){
        hhh = hackerParticles();
        return hhh;
    }
}