var swf_url = "SSF2BetaWindows.v.1.4.0.1.portable/SSF2Portable.swf"
var path = "SSF2BetaWindows.v.1.4.0.1.portable/"
window.RufflePlayer = window.RufflePlayer || {};
window.addEventListener("load", (event) => {
    window.RufflePlayer.config = {
        ...window.RufflePlayer.config,
        polyfills: true,
        base: path,
        
    }
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    // player.style.width = "600px"; 
    // player.style.height = "400px";
    const container = document.getElementById("ruffle_container");
    container.appendChild(player);
    player.ruffle().load(swf_url);
});