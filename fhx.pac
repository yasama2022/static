function FindProxyForURL(url, host) {

    if (host == "testproxy") {
        return "PROXY localhost:8913";
    }
    //if (!confirmEnding(host, ".com")) {
     //   return "DIRECT";
   // }
    if ( (host) == "csclient.zlongame.com") {
        return "PROXY 127.0.0.1:8913";
    }
    return "DIRECT";
}
