function copyElementText(id) {
    var text = document.getElementById("example-code").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);

    document.getElementById('tooltip-copy').setAttribute('data-tooltip-title', 'Copied to clipboard');

    setInterval(function() {
        document.getElementById('tooltip-copy').setAttribute('data-tooltip-title', "Click to copy to clipboard")
    }, 3000)


}