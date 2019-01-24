/**
 * This file is the main function for calculating speaking share of each player in The Adventure Zone
 */

const { transcribe } = require('./src/parse_transcript');
const { promises: fs } = require('fs');
const inputDir = `./input`;
// const outputDir = `./output`;

/**
 * @description Main function
 */
const main = async () => {

  // Get a list of input files
  const files = await fs.readdir(inputDir);

  // Iterate through input files and parse them
  const summaries = await Promise.all(files
    .map(fileName => `${inputDir}/${fileName}`)
    .map(transcribe)
  );

  // Convert to rows
  const rows = [];
  summaries.forEach(summary => {
    const episode = summary.file;
    Object.entries(summary.speakers).forEach(speaker => {
      const name = speaker[0];
      const { wordCount, lineCount, characterCount } = speaker[1];
      rows.push({ episode, name, wordCount, lineCount, characterCount });
    });
  });
  console.log(JSON.stringify(rows));

};

main()
  .then(console.log)
  .catch(console.error);
