#!/bin/bash

isGitInitialized(){
    personal_access_token=$1
    dotGitDir=".git"
    if ! [ -d "$dotGitDir" ]; then
        promptMessage="Project not initialized with git. Would you like to initialize with git? "
        dialog --yesno "$promptMessage " 22 76
        response=$?
        if [ "$response" -eq 0 ]; then
            isNewRepository "$personal_access_token"
        else
            echo "Git is initialized on this project"
            git add .
            read -p "commit message? " commitMessage
            git commit -m "$commitMessage"
            git push -u origin main
        fi
    else
        git add .
        read -p "commit message? " commitMessage
        git commit -m "$commitMessage"
        git push 
        echo "Done"
    fi
}
export -f isGitInitialized