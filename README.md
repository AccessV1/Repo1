# The Access App Development

This is the repository for "The Access App"

Currently in Development

## Rules

**Code Standards**: We want to keep this codebase as clean and readable as possible so please don't overcomplicate your code & do not repeat yourself. Most importantly ***Comment Everything***.

**Contributing**:Any contributions/push requests require the review and approval of another engineer to ensure main stays stable.

**File & Folder Names**: Please keep the names of new files/folders reasonable, we should be able to tell what a file exists for just by it's name.

## Quick Start

To have the smoothest setup accross all devices, please follow this setup:  

*Important Downloads*:  

- Make sure you have **Expo Go** installed on your mobile device, we use it to run development
- Install **NVM** on your windows device to have control over your Node.js, currently we use Node verson 18.18.0. For mac users you might not have to do this but if you do let us know in the Slack. You can install it [here](https://github.com/coreybutler/nvm-windows?tab=readme-ov-file).

*Setup*:

To setup all dependencies so you can start contributing follow these steps:

To see if you already have Node.js & npm installed check the version with
```node -v``` & ```npm -v```. If installed you should see the versions of each.  

- Mac: From the root repo folder, you can just do ```npm install``` from the terminal & all dependencies should install.  

- Windows: To make sure Windows users run smoothly start by opening the terminal and running ```nvm```. With ```nvm``` you should see options for commands. If not, make sure you have it installed & restart your computer, then retry. 
Then, make sure you have the right version of ```node``` installed by doing ```node -v```, if its less than 18.18.0, do ```nvm install 18.18.0```. To make sure you now use this version, do ```nvm use 18.18.0```.  
To start off, try running ```npm install``` from the root repository folder. This should install any dependencies. If at any point you run into an error, it is probably a cache issue. Go down to *Windows Debugging*.

Once you confirm your dependecies have installed, you can ```cd``` into frontend (```cd frontend```) & do ```npm start```. 

If all goes well a QR Code will appear which you can scan with your phone, it will open *Expo Go* on your phone. **Please make sure your device & mobile device are on the same wifi, if not it will crash. Also, do not close the application will the build is setting up.**

*Windows Debugging*:

- In your terminal, start by clearing your cache with ```npm cache clean --force```. You will see it clear. After that, make sure you have no node_modules folder. Do ```rm -rf node_modules``` which will remove the node_modules folder (If applicable).  
Finally, you can do ```npm install``` which will install all dependencies.  

## Possible Issues

If for any reason you get an error when trying to ```npm start``` then delete node_modules with ```rm -rf node_modules``` & then ```npm install``` from the root repo again. (issues with cache happen often)
