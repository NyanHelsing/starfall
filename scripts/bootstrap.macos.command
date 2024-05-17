#!/usr/bin/env bash

# This script will install the necessary dependencies for the project
# and will also install the project itself.

# In the future we can make an install wizard that runs this script
# through a browser window. This way we can guide the user through
# the installation process and provide them with the necessary
# information to get started.
#
# ```
# open ../insall.html
# ```

# Check for the existence of brew
if ! command -v brew &> /dev/null
then
    # Prompt user for password
    # This is required to install Homebrew
    PASSWORD=$(osascript -e "Tell application \"System Events\" to display dialog \"Enter your password:\" default answer \"\" with hidden answer" -e "text returned of result")

    # Handle empty password
    while [ -z "$PASSWORD" ]; do
        PASSWORD=$(osascript -e "Tell application \"System Events\" to display dialog \"A password wasn't entered. \n\nEnter your password:\" default answer \"\" with hidden answer" -e "text returned of result")
    done

    # Install Homebrew using the captured password
    # Homebrew is a package manager for macOS.
    echo $PASSWORD | sudo -S /usr/bin/env bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    if [ $? -eq 0 ]; then
        echo "Homebrew installation successful."
    else
        echo "Homebrew installation failed."
        osascript -e "Tell application \"System Events\" to display dialog \"Homebrew installation failed.\n\n That's a problem and it means Starfall can't be installed.\" buttons {\"OK\"} default button \"OK\""
        exit 1
    fi
else
    echo "Homebrew is already installed."
fi


# Check for the existence of git

if ! command -v git &> /dev/null
then
    # Install git using Homebrew
    /usr/bin/env bash -c "brew install git"
    if [ $? -eq 0 ]; then
        echo "Git installation successful."
    else
        echo "Git installation failed."
        osascript -e "Tell application \"System Events\" to display dialog \"Git installation failed.\n\n That's a problem and it means Starfall can't be installed.\" buttons {\"OK\"} default button \"OK\""
        exit 1
    fi
else
    echo "Git is already installed."
fi

# Install nvm
# nvm is a version manager for node.js.
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# and pnpm, a package manager that has better dependency resolution.
corepack add pnpm
corepack use pnpm@latest

# Clone the project to tmp directory so we can launch the browser to automate account creation etc.
rm -rf /tmp/starfall
cd /tmp/ && git clone https://github.com/NyanHelsing/starfall.git
cd starfall


# Install and use node 20
nvm install 20
nvm use 20

# AppleScript command to show a Yes/No modal dialog
HAS_GITHUB_ACCOUNT_RESPONSE=$(osascript <<EOF
tell application "System Events"
    set userResponse to button returned of (display dialog "Do you already have a GitHub account?" buttons {"No", "Yes"} default button "No")
end tell
EOF
)

# Check the response and set a shell variable
if [ "$HAS_GITHUB_ACCOUNT_RESPONSE" = "Yes" ]; then
    echo "Has GitHub account"
else
    echo "Does not have GitHub account"

fi


# Check if the user has a ssh key
if [ -f ~/.ssh/id_ed25519.pub ]; then
    echo "SSH key exists"
else
    echo "SSH key does not exist"
    SSH_KEY_COMMENT=$(osascript <<EOF
tell application "System Events"
    set sshKeyComment to text returned of (display dialog "Enter a comment for your SSH key. If or when some change is contributed back to starfall, this key is used. Since it's possible to have multiple keys, for example if you have multiple accounts or multiple devices, this comment helps distinguish what change was made where. It may be publicly visible so do not use a sensitive phrase or word but feel free to make it something fun if you like!" default answer "starfall" buttons {"OK"} default button "OK")
end tell
EOF
    )
    ssh-keygen -t ed25519 -C "$SSH_KEY_COMMENT"
fi
