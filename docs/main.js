/**
 * URL解析して、クエリ文字列を返す
 * @returns {Array} クエリ文字列
 */
function getUrlVars() {
    var qHash = {};
    if (location.search) {
        var qStr = decodeURIComponent(location.search).substr(1).split("&");
        for (var i = 0; i < qStr.length; i++) {
            var qData = qStr[i].split("=");
            qHash[qData[0]] = qData[1];
        }
    }
    return qHash;
}

const className = "dokaben"
const audio = new Audio("op.mp3");

window.onload = () => {
    var hash = getUrlVars().moji;
    if (!hash)
        window.location.search = "moji=" + "ドカベンベン";
    else {
        $("input").val(hash);
        setTimeout(function() {
            dokaben();
        }, 100);

    };
};

function start() {
    window.location.search = "moji=" + $("input").val();
}

function dokaben() {
    $('#moji').removeClass(className);
    $('#moji')[0].offsetWidth = $('#moji')[0].offsetWidth;
    $('#moji').addClass(className);

    var hash = getUrlVars().moji;
    var vw = 100 / hash.length;
    $('#moji').css("font-size", vw + "vw");
    document.getElementById("moji").innerText = hash;

    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0.75;
    audio.play();
}