const os = require("os");

// OS Name
const OSName = os.platform();
console.log("OS Name: ", OSName);

// OS Release
const releaseName = os.release();
console.log("OS Release: ", releaseName);
