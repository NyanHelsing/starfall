# Installing

Starfall can run on Windows, MacOS, and Linux. The following instructions will guide you through the installation process.

> These instructions are intended for folks who are new to the tools used in this project. If you are already familiar with the tools used in this project, you may be able to skip some of this information.

> The instructions try to provide as much background information as possible to help provide context and/or motivate the steps being taken; and it isn't strictly neccessary to understand all of the background information to complete the installation; but it may be helpful to have those additional resources available if you run into trouble.

> The instructions try to be as detailed as possible, but if you have trouble with any of the steps, please reach out to us on TikTok or open an issue on this repository.

## MacOS


### Text Editor

It is recommended to use a text editor to view and edit the list of blocked users, make changes to the automation instructions, and to make changes to the configuration, (Such as which browser to use, or TikTok credentials). While it is possible to run Starfall without a text editor, it might be more difficult.

NyanHelsing's personally uses [Zed](https://zed.dev/) for its integrated multiplayer editing.

[VS Code](https://code.visualstudio.com/) may be a more popular text editor available for MacOS.

If you're not sure why you need a text editor, or how to use one, consider reading [Why You Need a Plain Text Editor](https://www.howtogeek.com/795509/why-you-need-a-plain-text-editor/)

### Terminal

This project currently requires the use of a terminal.

The terminal is a command-line interface that allows you to interact with your computer using text commands.

Zed and VS Code both have terminal integrations, so it is also possible to use the terminal from within the text editor. There is a standalone terminal application that comes with MacOS, available in the Applications folder under Utilities. You can open the terminal by searching for it in the spotlight search or by pressing `Cmd + Space` and typing `Terminal`.

To learn more about the terminal, consider the following articles:

- [Terminal User Guide](https://support.apple.com/guide/terminal/welcome/mac)
- [16 Terminal Commands Every Mac User Should Know](https://www.howtogeek.com/729038/16-terminal-commands-every-mac-user-should-know/)

If you can't find the terminal or are having trouble using it, please reach out to us for help on TikTok or open an issue on this repository.

### Installing Brew

[Brew](https://brew.sh/) is a package manager for MacOS. It makes it easy to install software packages from the command line, and is the recommended way to install some of the dependencies for Starfall.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Installing Git

Often an application will be distributed as a `zip`, `app`, `pkg` or `dmg` file, but Starfall is distributed as a _git repository_.

If Starfall was distributed as a `zip`, `app`, `pkg`, or `dmg`, it would be complicated to support changes to the block list or new automation instructions, and it would be complicated to support folks who want to change or add to the block list or automation instructions.

Git is a version control system that is used to manage the source code for Starfall. It is used to download (clone) the repository to your local machine, and to push changes back to the repository.

Based on the [git website's instructions](https://git-scm.com/download/mac), the reccommended way to install `git` is with `brew`.

```
brew install git
```

#### Installing Node.js

While it is possible to install node.js using brew or the node.js website, it is recommended to use [nvm](nvm.sh) to manage node.js versions.

There are many different versions of node.js as bugs and features have changed over time. Because the features have changed, projects (such as Starfall) that use node.js may require a specific version of node.js to run correctly. Using nvm allows you to switch between different versions of node.js easily.

In the README.md for nvm, you can find the [detailed installation instructions](https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating)
