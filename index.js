let courses = {
    0: "",
    1: "Feedback",
    2: "Poetry",
    3: "Design Thinking",
    4: "This title is really long and I don't think it has to be"
};

function addText(context, text, x, y) {

}

function createDownloadButton(url) {
    let a = document.createElement('a');
    a.className = 'btn btn-primary';
    a.download = 'VirgilCon2019.png';
    a.href = url.toDataURL();
    a.textContent = 'Download certificate';
    document.getElementById('nav').appendChild(a);
}

function setAttributes(canvas, image, context) {
    canvas.width = image.width;
    canvas.height = image.height;
    context.font = 'italic 100pt Calibri';
    context.fillStyle = "black";
}

function renderBlankCertificate() {
    renderNewCertificate("", 0);
}

function renderNewCertificate(name, course) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext('2d');
    let image = new Image();
    image.src = "certificate.png";
    image.onload = function() {
        setAttributes(canvas, image, context);
        context.drawImage(image, 0, 0);
        context.fillText(name, 1800, 1500);
        context.fillText(courses[course], 1900, 2000);
        // addText(context, "Some name", 922, 1530);
        // x = imageWidth-textWidth/2
        createDownloadButton(canvas);
    };
}

document.addEventListener('DOMContentLoaded', renderBlankCertificate, false);



