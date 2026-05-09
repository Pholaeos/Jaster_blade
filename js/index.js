document.addEventListener("DOMContentLoaded", function() {
    // twitch_embed_other();
    // twitch_embed_pc();
});

function twitch_embed_other() {
    // TODO: changer le parent pour que ça marche sur d'autres sites
    var embed = new Twitch.Embed("twitch_embed_other", {
        width: 400,
        height: 300,
        channel: "jaster__blade",
        layout: "video",
        autoplay: false,
        // Only needed if this page is going to be embedded on other websites
        parent: ["pholaeos.github.io"]
    });

    embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        var player = embed.getPlayer();
        player.play();
    });
}

function twitch_embed_pc() {
    // TODO: changer le parent pour que ça marche sur d'autres sites
    var embed = new Twitch.Embed("twitch_embed_pc", {
        width: 1189, // 16:9 aspect ratio => 889 = 16/9 * 500 et rajout espace pour le chat
        height: 500,
        channel: "jaster__blade",
        // layout: "video",
        autoplay: false,
        // Only needed if this page is going to be embedded on other websites
        parent: ["pholaeos.github.io"]
    });

    embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        var player = embed.getPlayer();
        player.play();
    });
}