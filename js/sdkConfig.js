function init() {
    var resulSdk = document.createElement('script');
    resulSdk.setAttribute("fcm_service_path", "/firebase-messaging-sw.js");
    resulSdk.src = "https://sdk.resu.io/handlers/f4f0811b658c45e794322f307b93c235.sdk";
    resulSdk.setAttribute("defer", "defer");
    document.head.appendChild(resulSdk);
}

init();