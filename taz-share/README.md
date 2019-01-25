[Blog post](http://blog.beekley.xyz/Who-Talks-Most-in-The-Adventure-Zone/)

## Who talks most in The Adventure Zone?

This was a small project to get some data on how much the players and characters talk on the The Adventure Zone podcast. To generate data, do the following steps:

First, clone the project and install dependencies. Assumption: Node >8 is installed already.

```
git clone https://github.com/beekley/sandbox
cd taz-share
npm install
```

Then, download the transcripts from [TAZ Transcribed](http://tazscripts.tumblr.com) and save them as text files in an `./output` directory at the root of the project. Run the transcription script.

```
node index.js
```

The results will be printed to console in the following format:

```
[
  { episode, name, wordCount, lineCount, characterCount },
  ...
]
```

For ease of manipulation, I loaded those rows into sqlite and ran the query in `./cleanup.sql`.
