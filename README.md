# manifestGenerator

This is a simple tool for generate manifestmd5.txt file for our product.

## Setup
- Clone this repository.
- Run `npm install`.
- Done.

## How to use
- Put your game built folder into `target` folder, the folder structure should be `[GAME_NAME]/HTML5/[files]`.
- Change your `releaseDate` in `config.json`.
- Run `npm run start`.
- Check the dist folder, your `manifestmd5.txt` file(s) should have be generated.
- Done.