var swf_url = "SSF2BetaWindows.v.1.4.0.1.portable/SSF2Portable.swf"
window.RufflePlayer = window.RufflePlayer || {};
window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    // player.style.width = "600px"; 
    // player.style.height = "400px";
    const container = document.getElementById("container");
    container.appendChild(player);
    player.ruffle().load(swf_url);
});