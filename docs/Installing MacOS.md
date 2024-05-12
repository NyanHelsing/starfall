# Installing Starfall on MacOS

## Text Editor

It is recommended to use a text editor to view and edit the list of blocked users, make changes to the automation instructions, and to make changes to the configuration, (Such as which browser to use, or TikTok credentials). While it is possible to run Starfall without a text editor, it might be more difficult.

NyanHelsing's personally uses [Zed](https://zed.dev/) for its integrated multiplayer editing.

[VS Code](https://code.visualstudio.com/) may be a more popular text editor available for MacOS.

If you're not sure why you need a text editor, or how to use one, consider reading [Why You Need a Plain Text Editor](https://www.howtogeek.com/795509/why-you-need-a-plain-text-editor/)

## Terminal

This project currently requires the use of a terminal.

The terminal is a command-line interface that allows you to interact with your computer using text commands.

Zed and VS Code both have terminal integrations, so it is also possible to use the terminal from within the text editor. There is a standalone terminal application that comes with MacOS, available in the Applications folder under Utilities. You can open the terminal by searching for it in the spotlight search or by pressing `Cmd + Space` and typing `Terminal`.

To learn more about the terminal, consider the following articles:

- [Terminal User Guide](https://support.apple.com/guide/terminal/welcome/mac)
- [16 Terminal Commands Every Mac User Should Know](https://www.howtogeek.com/729038/16-terminal-commands-every-mac-user-should-know/)

If you can't find the terminal or are having trouble using it, please reach out to us for help on TikTok or open an issue on this repository.

## Installing Brew

[Brew](https://brew.sh/) is a package manager for MacOS. It makes it easy to install software packages from the command line, and is the recommended way to install some of the dependencies for Starfall.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Installing Git

Often an application will be distributed as a `zip`, `app`, `pkg` or `dmg` file, but Starfall is distributed as a _git repository_.

If Starfall was distributed as a `zip`, `app`, `pkg`, or `dmg`, it would be complicated to support changes to the block list or new automation instructions, and it would be complicated to support folks who want to change or add to the block list or automation instructions.

Git is a version control system that is used to manage the source code for Starfall. It is used to download (clone) the repository to your local machine, and to push changes back to the repository.

Based on the [git website's instructions](https://git-scm.com/download/mac), the reccommended way to install `git` is with `brew`.

```
brew install git
```

## Installing Node.js

While it is possible to install node.js using brew or the node.js website, it is recommended to use [nvm](nvm.sh) to manage node.js versions.

There are many different versions of node.js as bugs and features have changed over time. Because the features have changed, projects (such as Starfall) that use node.js may require a specific version of node.js to run correctly. Using nvm allows you to switch between different versions of node.js easily.

In the README.md for nvm, you can find the [detailed installation instructions](https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating)

Once you have nvm installed, you can install the version of node.js that Starfall requires.

```
nvm install --lts
nvm alias default
```

For more detailed instructions, also see the [Linode guide to installing node.js with nvm](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/)

## Installing pnpm

Starfall uses `pnpm` as a node package manager. `pnpm` is a package manager that is similar to `brew`, but for node.js packages.

The recommended way install `pnpm` is with `corepack`, which is part of node.js,
and should be included with the installation of node.js.

```
corepack add pnpm
corepack use pnpm@latest
```

See the [pnpm installation docs](https://pnpm.io/installation) for more information.

## Cloning the Repository

Once you have `git`, `node.js`, and `pnpm` installed, you can clone the repository to your local machine.

The recommended way to clone the repository is to [use the ssh url because it is more secure](https://www.howtogeek.com/devops/should-you-use-https-or-ssh-for-git/), which requires you to [have an ssh key set up with your github account.]( https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?tool=webui)

If you don't already have a github account, you will need to create one. GitHub has [detailed instructions for creating an account](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github)

If you don't already have an ssh key set up, probably all you need to do is run the following command in the terminal. The command will generate a new ssh key, prompting for a password to protect the key. This password is totally unrelated to your github password, and we recommend using a different password for the ssh key than you use for your github account.

```
ssh-keygen ed25519
ssh-keygen -t ed25519 -C "your_email@example.com"
```

[More information on generating an ssh key]( https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)

At this point you should have a public key and a private key. The public key is what you will add to your github account. The following command will display the public key in the terminal:

```
cat ~/.ssh/id_ed25519.pub
```

Copt add the Public Key to your Github Account under Settings -> SSH and GPG keys -> New SSH Key; paste the public key into the key field and click Add SSH Key.

[For more information on setting up an ssh key](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)

Once you have an ssh key set up, you can clone the repository. Git will use the ssh key to authenticate you with github, and will ask you to enter your ssh key's password.

```
git clone git@github.com:NyanHelsing/starfall.git
```

Now that the repository is cloned, the source code is on your machine. You can navigate to the repository in the terminal.

```

## Installing Starfall Node Dependencies

Starfall uses node.js to run the automation scripts. The node dependencies are listed in the `package.json` file. You can install the dependencies with the following command:

```
pnpm install
```

if this is the first time you have installed Playwright, you may need to install the Playwright dependencies with the following command:

```
pnpm exec playwright install
```

## Running Starfall

Congratulations! You have installed all the dependencies for Starfall. You can now run the automation scripts.

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
