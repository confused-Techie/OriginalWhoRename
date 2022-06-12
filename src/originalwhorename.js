const { parseArgv } = require("./options.js");
const { fileManipulation } = require("./file_ingest_outgest.js");
var fs = require("fs");
const prompts = require("prompts");
const path = require("path");

async function run(rawArg) {
  var options = parseArgv(rawArg);

  if (options.status) {
    try {
      var filenames = await fs.readdirSync(options.dirname);

      for (var i = 0; i < filenames.length; i++) {
        var newFile = await fileManipulation(filenames[i], options);

        if (newFile == "") {
          console.error(`Unable to Parse: ${filenames[i]}`);
          console.log("Skipping...");
        } else {
          var response = await prompts({
            type: 'toggle',
            name: 'config',
            message: `Change ${filenames[i]} => ${newFile}`,
            active: 'yes',
            inactive: 'no'
          });

          if (response.config) {
            fs.renameSync(`${options.dirname}${path.sep}${filenames[i]}`, `${options.dirname}${path.sep}${newFile}`);
          } else {
            // user will have to change the name manually.
          }
        }
      }
    } catch(err) {
      console.error(`ERROR: ${err}`);
      process.exit(1);
    }
  } else {
    console.error("Something went wrong parsing Arguments, or accessing the specified folder.");
    process.exit(1);
  }
}


module.exports = { run };
