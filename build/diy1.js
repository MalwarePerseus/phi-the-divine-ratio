
document.getElementById('imp').onchange = function(e) {
    let img1 = new Image();
    img1.onload = drawfc;
    img1.onerror = failed;
    img1.src = URL.createObjectURL(this.files[0]);
};

function drawfc() {
    let canvasfc = document.getElementById('canvasfc');
    canvasfc.width = this.width;
    canvasfc.height = this.height;
    var ctx = canvasfc.getContext('2d');
    ctx.drawImage(this, 0,0);
    }

function failed() {
        console.error("The provided file couldn't be loaded as an Image media");	
}    