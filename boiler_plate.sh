#!/bin/bash

npm init -y
npm install --save-dev prettier
npm pkg set scripts.format="npx prettier --write ."
git init
#git remote add origin urldepotdistant
touch .gitignore && echo "node_modules" >> .gitignore
mkdir src assets
cd src
mkdir js css
cd css 
mkdir base utils components pages
cd base 
touch base.css variables.css fonts.css
cd ..
cd utils
touch keyframes.css
cd ..
cd components 
touch button.css input.css form.css message.css paragraph.css nav.css
cd ..
cd pages
touch login.css home.css register.css
#dans base.css il n'y aura que des sélecteurs de type
cd ../..
cd js 
mkdir components pages containers layouts
cd components 
touch button.js input.js form.js message.js paragraph.js nav.js
cd ..
cd pages
touch login.js home.js register.js


