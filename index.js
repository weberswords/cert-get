function showMarkerJs(img) {
    let mark = new markerjs.MarkerArea(img);
    mark.show((dataUrl) => {
        img.src = dataUrl;
    })
}
