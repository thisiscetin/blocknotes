# blocknotes

A simple note taking application on your favourite EVM-compatible blockchain.

## features

### application

- application will have basic list of notes selectable from the navigation on the left window
- application will encrypt/decrypt all notes with a user selected password
- application will persist encrypted notes to an IPFS network and save IPFS hash to local storage
- on demand, application IPFS hash will be written to the blockchain - with a manual button trigger
- application will need Metamask extension to save a copy of notes hash to blockchain

### notes

- notes will be versioned, moving in the history of the note should be possible
- in MVP note taking will be simple a note will have,
  - header
  - body
  - created_at
  - updated_at

## environment variables

- application will need to know contract address - blockchain id to run

