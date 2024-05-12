# Starfall

This repository contains a script that can be used to block users on TikTok. The script uses the TikTok web interface to block users. The script uses the Playwright library to automate the browser interactions.

## Quick Start

> The Quick Start section lists the basic steps to get started with the project for folks familiar with these tools. If these steps don't have enough detail, consider reading the [INSTALLING.md](./docs/INSTALLING.md) file, which provides a more detailed explanation of the steps to install the project.

- Install Node.js and npm
    - https://nodejs.org/en/download
- Install pnpm
    - `npm install -g pnpm`
- Clone this repository to your local machine
    - `git clone git@github.com:NyanHelsing/starfall.git`
- run `pnpm install`
    - This will install the dependencies for the project, such as dotenv and playwright.
    - If this is the first time installing playwright, probably you need to do `pnpm exec playwright install`.
- run `pnpm run starfall:auth`
    - This will open a browser window to authenticate with TikTok.
    - After authenticating and landing on your profile page, the browser will close and the console will display a message indicating that the authentication was successful.
- run `pnpm run starfall:block`
    - This will run the block script. The browser will open and navigate to the TikTok profile page, block the user, and close the browser. (You will see the browser open and close quickly, for some time while the script is running.)
