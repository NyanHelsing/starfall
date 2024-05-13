# Starfall

This repository contains a script that can be used to block users on TikTok. The script uses the TikTok web interface to block users. The script uses the Playwright library to automate the browser interactions.

## [See it in action]( https://www.tiktok.com/@nyanhelsing/video/7368043327578590507)

## [How it works]( https://www.tiktok.com/@nyanhelsing/video/7368196079432650027)

## Quick Start

> The Quick Start section lists the basic steps to get started with the project for folks familiar with these tools. If these steps don't have enough detail, consider reading the [INSTALLATION.md](./INSTALLATION.md) file, which provides a more detailed explanation of the steps to install the project.

- Install Node.js and npm
    - https://nodejs.org/en/download
- Install pnpm
    - `npm install -g pnpm`
- Clone this repository to your local machine
    - If you do not have a GitHub Account or SSH Key (**Easier**):
        - `git clone https://github.com/NyanHelsing/starfall.git`
    - If you have a GitHub Account and an SSH Key (**Recommended**):
        - `git clone git@github.com:NyanHelsing/starfall.git`
- run `pnpm install`
    - This will install the dependencies for the project, such as dotenv and playwright.
    - If this is the first time installing playwright, probably you need to do `pnpm exec playwright install`.
- run `pnpm run starfall:auth`
    - This will open a browser window to authenticate with TikTok.
    - After authenticating and landing on your profile page, the browser will close and the console will display a message indicating that the authentication was successful.
- run `pnpm run starfall:block`
    - This will run the block script. The browser will open and navigate to the TikTok profile page, block the user, and close the browser. (You will see the browser open and close quickly, for some time while the script is running.)


## Running Starfall

If all the dependencies for Starfall are installed, automation scripts can now be run!

### Running the Authentication Script

This will open a browser window and prompt you to log in to TikTok. Once you have logged in, the script will save browser state that will be used by the other Starfall scripts.

> ** IMPORTANT **: The recommended way to log in is with a TikTok account; using a tiktok username and password. (Not phone number or email).

Using the text editor, copy the `example.env` file to a new file called `.env`, and fill in the `TIKTOK_USERNAME` and `TIKTOK_PASSWORD` fields with your TikTok username and password.

It is possible to log in without the `.env` file, but you must log in manually, select the "login with username / email / password" option, and then click the "Login with email or username" button. Use your tiktok *username* and password to log in; (the email and phone number options are not recommended).

The QR Code login option is not recommended, it seems like TikTok disables it for browsers using automation. Google and Facebook also seem to detect that the browser is being automated, and will not allow you to log in using those methods.

```
pnpm run starfall:auth
```

It should not be neccesary to rerun the authentication script unless you log out of TikTok, or if the browser state is lost.

### Running the Block List

This script will block all the users in the `./data/bl.mjs` file. The blocklist is a list of TikTok usernames, one per line. For each username, the script will open the browser, block that user, and then close the browser, repeating until all the users in the blocklist are blocked.

```
pnpm run starfall:block
```

### Running the Follow List

```
pnpm run starfall:follow
```

OR run specific scopes to follow users from the list

#### Block Party
```
pnpm run starfall:follow:pb
```

#### Pro Palestine
```
pnpm run starfall:follow:pali
```

#### Covid-19 Conscious
```
pnpm run starfall:follow:c19
```

#### Congo Crisis Awarenss
```
pnpm run starfall:follow:congo
```

### Run All

This will run auth, block, and follow (all scpoes) scripts in sequence.

```
pnpn run starfall
```
