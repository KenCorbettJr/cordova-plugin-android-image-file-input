const fs = require("fs");
const path = require("path");

module.exports = function copyFile({ hook, opts }) {
  const { projectRoot } = opts;
  console.log("Copying SystemWebChromeClient.java", hook, projectRoot);

  const sourceFile = "./SystemWebChromeClient.java";
  const destination =
    "./platforms/android/CordovaLib/src/org/apache/cordova/engine/SystemWebChromeClient.java";

  // Create any missing directories in the destination path
  const dirname = path.resolve(projectRoot, destination);
  console.log({ dirname });
  fs.copyFileSync(sourceFile, destination);
};
