function parseArgv(rawArg) {
  if (rawArg.length < 1) {
    console.error("No Arguments Passed. Exiting...");
    process.exit(1);
  } else {
    var returnObj = {
      status: false,
      dirname: "",
      method: "XVID"
    };

    for (var i = 0; i < rawArg.length; i++) {
      if (rawArg[i].startsWith("./") || rawArg[i].startsWith("/")) {
        returnObj.dirname = rawArg[i];
      }
    }

    if (returnObj.dirname != "") {
      returnObj.status = true;
    }

    return returnObj;
  }
}

module.exports = { parseArgv };
