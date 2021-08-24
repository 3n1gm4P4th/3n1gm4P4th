let thim = new Set();
document.getElementById('go').addEventListener('mouseover', goReady);
document.getElementById('go').addEventListener('mouseout', goReady);

function goReady(){
    if(thim.has('goReady')){
        document.getElementById('go').style.width = '14%';
        document.getElementById('go').style.marginLeft = '43%'
        document.getElementById('go').style.color = 'rgb(0,80,250)';
        document.getElementById('go').style.fontSize = '20px';
        thim.delete('goReady');
        return;
    }
    document.getElementById('go').style.color = 'red';
    document.getElementById('go').style.width = '18%';
    document.getElementById('go').style.marginLeft = '41%'
    document.getElementById('go').style.fontSize = '25px';
    thim.add('goReady');
}

let h = document.getElementById('home');
let a = document.getElementById('about');
let c = document.getElementById('contact');
let d = document.getElementById('stt');
let p1 = document.getElementById('particles');
let t1 = document.getElementById('themes');
let f1 = document.getElementById('fonts')
pt = document.getElementById('pt');


h.addEventListener('mouseover', hUnOp)
h.addEventListener('mouseout', hOp)
a.addEventListener('mouseover', aUnOp)
a.addEventListener('mouseout', aOp)
c.addEventListener('mouseover', cUnOp)
c.addEventListener('mouseout', cOp)
d.addEventListener('mouseover', dUnOp)
d.addEventListener('mouseout', dOp)
p1.addEventListener('mouseover', pUnOp)
p1.addEventListener('mouseout', pOp)
t1.addEventListener('mouseover', tUnOp)
t1.addEventListener('mouseout', tOp)
f1.addEventListener('mouseover', fUnOp)
f1.addEventListener('mouseout', fOp)
pt.addEventListener('mouseover', ptUnOp)
pt.addEventListener('mouseout', ptOp)

function hUnOp(){
    h.style.opacity = '1';
}
function hOp(){
    h.style.opacity = '0.50'
}
function aUnOp(){
    a.style.opacity = '1';
}
function aOp(){
    a.style.opacity = '0.50'
}
function cUnOp(){
    c.style.opacity = '1';
}
function cOp(){
    c.style.opacity = '0.50'
}
function dUnOp(){
    d.style.opacity = '1';
}
function dOp(){
    d.style.opacity = '0.50'
}
function pUnOp(){
    p1.style.backgroundColor = 'rgb(10,10,10)';
}
function pOp(){
    p1.style.backgroundColor = '';
}
function tUnOp(){
    t1.style.backgroundColor = 'rgb(10,10,10)';
}
function tOp(){
    t1.style.backgroundColor = '';
}
function fUnOp(){
    f1.style.backgroundColor = 'rgb(10,10,10)';
}
function fOp(){
    f1.style.backgroundColor = '';
}
function ptUnOp(){
    pt.style.opacity = '1';
}
function ptOp(){
    pt.style.opacity = '0.50';
}



