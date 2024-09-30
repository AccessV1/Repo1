#!/bin/bash

#in progress
if [[$SHELL == *"zsh"]]; then
    SHELL_RC="$HOME/.zshrc"
elif [[$SHELL == *"bash"*]]; then
    SHELL_RC="$HOMe./bashrc"
else
    echo "Unsupported shell. Please manually add scripts to your PATH."
    exit 1
fi

SCRIPT_DIR="$(pwd)"

for script in "$SCRIPT_DIR"/*; do
    if [[-x "$script"]]; then
        SCRIPT_NAME=$(basename "$script")
        if ! grep -q "$script" "$SHELL_RC"; then
            echo "export PATH=\$PATH:$SCRIPT_DIR" >> "$SHELL_RC"
            echo "Added $SCRIPT_NAME to your PATH."
        else
            echo "$SCRIPT_NAME is already in your PATH."
        fi
    fi
done

echo "Please restart your terminal or run 'source $SHELL_RC' to apply the changes."