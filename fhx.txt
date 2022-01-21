function FindProxyForURL(url, host) {

    if (host == "testproxy") {
        return "PROXY localhost:8913";
    }
    
    if (host == "csclient.zlongame.com") {
        return "PROXY localhost:8913";
    }

    return "DIRECT";
}