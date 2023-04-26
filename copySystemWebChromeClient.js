const fs = require("fs");
const path = require("path");

module.exports = function copyFile({ hook, opts }) {
  const { projectRoot, plugin } = opts;

  const sourceFile = "./SystemWebChromeClient.java";
  const destination =
    "./platforms/android/CordovaLib/src/org/apache/cordova/engine/SystemWebChromeClient.java";

  // Create any missing directories in the destination path
  const sourcePath = path.resolve(plugin.dir, sourceFile);
  const destinationPath = path.resolve(projectRoot, destination);
  console.log("Copying " + sourcePath + " to " + destinationPath);
  fs.copyFileSync(sourcePath, destinationPath);
};
