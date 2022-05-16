

const minus=document.getElementById('minus');
const max=document.getElementById('plus');
const quit=document.getElementById('close');
const zoomIn=document.getElementById('min');
const zoomOut=document.getElementById('max');

minus.addEventListener('click',minimize);
max.addEventListener('click',maximize);
quit.addEventListener('click',quitApp);
zoomIn.addEventListener('click',zoomInApp);
zoomOut.addEventListener('click',zoomOutApp);
function minimize(){
    app.window.min();
}
function maximize(){
    app.window.max();
}
function quitApp(){
    app.window.close();
}
function zoomInApp(){ 
    console.log('zoom')
    app.window.zoomIn();
}
function zoomOutApp(){
    app.window.zoomOut();
}
