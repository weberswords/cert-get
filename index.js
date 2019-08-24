function createDownloadButton(url) {
    var a = document.createElement('a');
    a.download = url;
    a.className = 'btn btn-primary';
    a.href = url;
    a.textContent = 'Download certificate';
    document.getElementById('nav').appendChild(a);
}

function renderNewCertificate() {
    let canvas=document.getElementById("canvas");
    canvas.width = 4266;
    canvas.height = 3200;
    let context = canvas.getContext('2d');
    let image=new Image();
    image.src = "certificate.png";
    image.onload = function() {
        context.drawImage(image, 0, 0);
    };
    createDownloadButton("");
}

document.addEventListener('DOMContentLoaded', renderNewCertificate, false);


