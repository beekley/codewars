/**
 * This file parses transacripts from http://tazscripts.tumblr.com/ and produces a JSON of their content
 */

const { promises: fs } = require('fs');

/**
 * Parses a text transcript and returns a JSON version with summary
 * @param {String} file - Path to file to read from
 * @return {Object} { file, transcript, speakers, errors }
 */
const transcribe = async file => {

  // Array of lines of format { speaker: line }
  const transcript = [];
  // Map of speaker -> words spoken, lines spoken
  const speakers = {};
  // Errors
  const errors = [];

  // const filehandle = await fs.open(file);
  const fileContents = (await fs.readFile(file)).toString();

  // Split the file into lines
  fileContents
    .split('\n')
    // Filter empty lines
    .filter(line => {
      const emptyLine = line === '';
      return !emptyLine;
    })
    // Filter lines that don't have speaker specified
    .filter(line => {
      const hasSpeakerRegex = /\w+:/;
      const hasSpeaker = line.match(hasSpeakerRegex);
      if (!hasSpeaker) errors.push(`Skipping line that is missing speaker info: ${line}`);
      return hasSpeaker;
    })
    // Iterate through lines
    .forEach(line => {
      try {

        // Parse out speaker and line
        const speakerRegex = /(\w+):/;
        const speaker = line.match(speakerRegex)[1];
        const spokenLineRegex = /\w+: (.+)/;
        const spokenLine = line.match(spokenLineRegex)[1];

        // Transcribe
        transcript.push({ speaker, spokenLine });

        // Count words
        if (!speakers[speaker]) speakers[speaker] = { wordCount: 0, lineCount: 0, characterCount: 0 };
        speakers[speaker].wordCount += spokenLine.split(' ').length;
        speakers[speaker].lineCount += 1;
        speakers[speaker].characterCount += spokenLine.length;

      }
      catch (error) {
        errors.push({ error, line });
      }
    });

  return { file, transcript, speakers, errors };

};

/**
 *
 */
// const writeSummaryToFile = async () => {
//   await fs.writeFile(output, JSON.stringify({ speakers, errors })), 'utf8';
//   console.log(`${file} done!`);
// };

module.exports = {
  transcribe,
  // writeSummaryToFile
};
