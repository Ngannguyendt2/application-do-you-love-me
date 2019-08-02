function Yes() {
    alert('<3');
}
function No() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    document.getElementById('No').style.left = x + 'px';
    document.getElementById('No').style.top = y + 'px';
    
}