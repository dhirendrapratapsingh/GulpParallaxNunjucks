

### `Dependencies/Libraries used `

[jQuery3.3](https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js),
[Fontawsome](https://fontawesome.com/v4.7.0/icons/), 
[MaterializeJS](https://materializecss.com/getting-started.html),
[npm](https://www.npmjs.com/)
[gulp](https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js)
[Nunjucks](https://mozilla.github.io/nunjucks/api.html)



### `Steps to create Project & add all dependencies in Ubntu18.04>`

`shortcut way is just download whole project install gulp >go inside project directory > gulp`

`Install nodejs npm npx` <br>
sudo apt update<br>
sudo apt install nodejs npm<br>
sudo apt install npm<br>
npm install -g npx<br>
Install gulp-cli globally using npm install -g gulp-cli.<br>
npm install gulp-nunjucks-render --save-dev<br>

cd GulpParallaxNunjucks<br>
gulp<br>

Then open http://localhost:8080/ to see your app.<br>


## Features

1. Implemented Responsive Mobile/Desktop UI as per [mockups](https://drive.google.com/drive/folders/1fCEq4JLqH5taSY21VS5vm3AjkOhOlVeH?usp=sharing)
2. for Handling responsile layout i have not used any css framework like Bootsrarap,Materialize rather my own layout classes defined in main.css. Matereialialize.js is only used for Parallax methods

# Apart from requirements 
2. Implemented Parallax [effect](https://en.wikipedia.org/wiki/Parallax) of background images for better User Experience
3. Middle level UI for i-pad views
4. Sliding Menu for mobiles
5. Proper template file management using Nuckjunks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`Libraries & framework` <br>

The following cdns are included in index.html via scipt/links
[jQuery3.3](https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js),
[Fontawsome](https://fontawesome.com/v4.7.0/icons/), 
[MaterializeJS](https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js)<br>