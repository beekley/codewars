const fs = require('fs');

// Imports the Google Cloud client library
const speech = require('@google-cloud/speech').v1p1beta1;

// Creates a client
const client = new speech.SpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const fileName = './clip1.opus';

const config = {
  languageCode: `en-US`,
  encoding: `OGG_OPUS`,
  sampleRateHertz: 24000,
  enableSpeakerDiarization: true,
  diarizationSpeakerCount: 4,
  model: `default`,
};

const audio = {
  // content: fs.readFileSync(fileName).toString('base64'),
  uri: `gs://taz-clips/taz/clip1.opus`,
};

const request = {
  config: config,
  audio: audio,
};

client
  .longRunningRecognize(request)
  .then(responses => {
    const operation = responses[0];
    const initialApiResponse = responses[1];

    console.log({ operation, initialApiResponse });

    // Operation#promise starts polling for the completion of the LRO.
    return operation.promise();
  })
  .then(responses => {
    // The final result of the operation.
    const result = responses[0];

    // The metadata value of the completed operation.
    const metadata = responses[1];

    // The response of the api call returning the complete operation.
    const finalApiResponse = responses[2];

    console.log({ result, metadata, finalApiResponse });
  })
  .catch(err => {
    console.error(err);
  });
