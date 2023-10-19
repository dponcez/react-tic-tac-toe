# Tic Tac Toe In React

The *Tic-Tac-Toe Game* was taken from [react.dev](https://react.dev/learn/tutorial-tic-tac-toe), if you want to know more about the implemantation of this game, visit their page.

In the example below, there are some changes from the original game.

##First steps

1. Open your current **CMD** or **Git Bash**.
2. Type *cd* in your **CMD** or **Git Bash**.
3. Install *Node.js*
4. Type *cd desktop*.
5. Type *mkdir* + *folder name* or 
6. Type *npx create-next-app*: this allows us to create a new :file_folder: folder project.
7. Type *code .* in your **CMD** or **Git Bash**: this method allows us to open *VSCode* (Visual Studio Code).

In your *VSCode* you'll see something like the following structure.

**NAME-PROJECT**

- :file_folder: node_modules/
- :open_file_folder: public/
  - :framed_picture: favicon.ico
  - :page_facing_up: index.html
- :open_file_folder: src/
  - :open_file_folder: components/
    - :open_file_folder: Board/
      - :page_facing_up: Board.js
      - :page_facing_up: Board.css
    - :file_folder: Squares/
  - :open_file_folder: utils/
    - :page_facing_up: check_winner.js
  - :page_facing_up: App.js
  - :page_facing_up: index.js
  - :page_facing_up: index.css
- :page_facing_up: .babelrc
- :page_facing_up: .gitignore
- :page_facing_up: package-lock.json
- :page_facing_up: package.json
- :page_facing_up: README.md
- :page_facing_up: webpack.config.js

8. In your terminal type *npm init -y* to create a package.json file. 

9. Install dependencies typing *npm* or *yarn* like so: *npm install* + *package-name* or *yarn add* + *package-name*, if you typed in your terminal *mkdir* to craete a :file_folder: folder project.

Below are some dependencies you should install in your project: 

  * a). react
  * b). react-dom
  * c). eslint-config-react-app

10. Install devDependencies *(Development Dependencies)* typing *npm* or *yarn* like so: *npm install* + *package-name --save-dev* or *npm install* + *package-name -D*, if you typed in your terminal *mkdir* to craete a :file_folder: folder project.

Below are some devDependencies you should install in your project:

  * a). babel-loader
  * b). @babel/core
  * c). @babel/preset-react
  * d). @babel/preset-env
  * f). html-loader
  * g). webpack-cli
  * h). webpack-dev-server
  * i). html-webpack-plugin
  * j). css-loader
  * k). mini-css-extract-plugin

11. Create *.gitignore* file, into this file should be include files that your project will not use in the repository.

- #dependencies
- #production
- #testing
- #misc

12. Create a *README.md* file.
13. Type in your terminal *git init* to initialize an empty *GIT* repository. A *.git* directory has subdirectories for objects, heads, tags and templates that your project needs. More information about *git init* command, visit the following page:  [git-init documentation](https://git-scm.com/docs/git-init). :link:
14. Create a babel file: .babelrc
15. Create a webpack file: *webpack.config.js*

## Initialize our project

### Structure

1. Create an *index.html* file and include it in the *public* folder.

This file contains a basic HTML structure.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title>Tic Tac Toe in React</title>
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Abel&family=Play&display=swap"/>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

### Rendered

2. Create an *index.js* and include it in the *src* folder.

The *index.js* or *main.js* file contains the code that will be rendered.

```js
// index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)
```

### Main Component

3. Create the *App.js* file, this file contains the main logic of our file.

Usually this file **mount/render** your main React Component onto our **"root"** element. More information about this concept, visit the following page: [freecodecamp - confused of App.js file](https://forum.freecodecamp.org/t/confused-of-app-js-or-index-js/483472/4). :link:

```js
// App.js

import React from 'react';
import { Board } from './components/Board/Board';
const App = () => {
  return (
    <>
      <Board/>
    </>
  )
}

export { App }
```

### Components

4. Create a folder called *components* inside our *src* folder.

5. Inside the *components* folder there will be other components that we will use in our project.

* **Board**

The Board component is literally a basic container to contain our Squares component, that is, it will store a nine (9) buttons inside, in a single component.

But instead of creating nine (9) squares one by one, we will create a Squares component that contains a basic structure like so.

```js
// Squares.js

import React from 'react';

const Squares = () => {
  return (
    <button>X</button>
  )
}

export { Squares }
```

As you can see in the example below, we create an array called *indices*, this variable we will use to create a nine (9) squares, using the *map* method without call Squares component one by one.

Now we need to add a *key* to identify which item should be updated in our Squares component.

```js
// Board.js

import React from 'react';
import { Squares } from '../Squares/Squares';

const Board = () => {
  const indices = [0,1,2,3,4,5,6,7,8]
  return (
    <div className='container'>
      <div className='grid'>
        {indices.map(index => (
          <Squares
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export { Board }
```

* **Squares**

As you can see in the *Squares.js* example, it contains a single button on it.

Now we'll update our Squares component, passing a *value* and *onClick* props to it and we also add a class to our button like so.

```js
// Squares.js
import React from 'raect';

const Squares = ({value, onClick}) => {
  return (
    <>
      <button
        onClick={onClick}
        className='btn border'
      >
        {value}
      </button>
    </>
  )
}

export { Squares }
```

Now we will update our Board component and we will create a function called *handleClick* to add interactivity to our Squares component.

```js
// Board.js
import React from 'react';
import Squares from '../Squares/Squares';

const Board = () => {
  const indices = [0,1,2,3,4,5,6,7,8];

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div className='container'>
      <div className='grid'>
        {indices.map(index => (
          <Squares
            key={index}
            value={value}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  )
}

export { Board }
```

When you run the tic-tact-toe game, you will see in the browser, if everything works ok, nine (9) boxes or squares and an *X* as value, something like this: 

<figure>
  <img src="https://www.youcubed.org/wp-content/uploads/2017/03/Tic-Tac-Toe-Product.jpg" alt="tic-tac-toe" width="500px" height="auto"/>
  <figcaption>
    <p>Image source: <a href="https://www.youcubed.org/tasks/tic-tac-toe-products/">youcubed.org</a></p>
  </figcaption>
</figure>

When you open the *developer tool* you will see in the *console* a simple message that says 'clicked' when you press any squares.

The next step it´s to create a new component called *Game*.

* **Game**

The *Game* component allows the Board component to update props that were passed through the Game component.

Remember, the Board component is now completely controlled by the Game component, where the props were passed.

```js
// Game.js

import React, { useState } from 'react';
import { Board } from '../Board/Board';
import './Game.css';

const Game = () => {
  
  return (
    <div className='game'>
      <header className='header'>
        <h1 className='heading'>tic tac toe</h1>
      </header>
      <div className='game--board'>
        <Board/>
      </div>
      <ol className="game--list">
        
      </ol>
    </div>
  )
}

export { Game }
```

With this new implementation, when you run the game again, you can't see anything in the browser, this happend because the Board component does not recieve any parameters or states to work with, when you open the *developer tool* you will see an error message, to fix this error, we need manage the props through our Game component.

Now let's update the Game component and pass the states to our Board component.

As you can see in the example below, our states are empty and won't be abel to work well.

```js
// Game.js

import { Board } from '../Board/Board';
import './Game.css';

const Game = () => {
  
  return (
    <div className='game'>
      <header className='header'>
        <h1 className='heading'>tic tac toe</h1>
      </header>
      <div className='game--board'>
        <Board
          xIsNext={}
          squares={}
          onPlay={}
        />
      </div>
      <ol className="game--list">
        
      </ol>
    </div>
  )
}

export { Game }
```

We will complete the Game component later in the **COMPLETING THE GAME COMPONENT** section, meanwhile, let's get working with Board component.

Now in the Board component we need to add three (3) props, **xIsNext**, **squares**, and **onPlay** as a function, also, we will add a parameter to our *handleClick* function and create a checkWinner.js file to helps us to know who won the game.

Now we need to change the onClick state of the Squares component to prevent an infinite loop when you press a square, to prevent this situation we use an arrow function to our *handleClick* function, passing as argument a prop to prevent an infinite behaviour.

```js 
() => handleClick(e)
``` 

With this in mind, we need to update the Board component, to allow the handleClick function to work as desired and avoid infinite rendering.

Our Board component now looks like the following code:

```js
// Board.js

import React from 'react';
import Squares from '../Squares/Squares';
import { checkWinner } from '../../utils/check_winner';

const Board = ({xIsNext, squares, onPlay}) => {
  const indices = [0,1,2,3,4,5,6,7,8];

  const handleClick = (i) => {
    if(squares[i] || checkWinner(squares)) return;

    const nextSquares = squares.slice()
  }

  return (
    <div className='container'>
      <div className='grid'>
        {indices.map(index => (
          <Squares
            key={index}
            value={squares[index]}
            onClick={() => handleClick(squares)}
          />
        ))}
      </div>
    </div>
  )
}

export { Board }
```

### Utils

* **Check winner**

*checkWinner* is a function that helps us know who won the game and if there are no turns to take, the game stops when there's a match.

Takes an array of nine (9) squares or elements, checking for a winning combination and returning "X", "O" or "null" if applicable.

```js
// check_winner.js

export const checkWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(const line of lines){
    const [a, b, c] = line;
    if( squares[a] && 
        (squares[a] === squares[b] && 
        squares[a] === squares[c])
      ) return squares[a, b, c]
  }

  return null
}
```

As you can see in this piece of code

```js
if(squares[i] || checkWinner(squares)) return
```

we will check if the squares[i] and checkWinner(squares) function has a verify coincidence, this means if the squares prop it's filled with "X" or "O" and the checkWinner function has a winner, if so, we return them.

In this piece of code

```js
const nextSquares = squares.slice()
```

we use the *.slice()* method of JavaScript to create a copy of an array, in this case, we will create a copy of the squares array instead of changing or modifying the existing array.

Now the *handleClick* will verify if the *xIsNext* prop has changed its value when you press a squares, to do this, we use a ternary operator to check the changes.

```js
xIsNext ?
  (nextSquares[i] = 'X') :
  (nextSquares[i] = 'O')
```

You can also use an *if else* statement to check for changes to the *xIsNext* prop like so.

```js
if(xIsNext){
  nextSquares[i] = 'X'
}else{
  nextSquares[i] = 'O'
}
```

In the previous Board component example, we created three (3) props, *xIsNext*, *squares* and a function, lets dive a little bit about this *onPlay* function.

```js
onPlay(nextSquares)
```

This feature has a single implementation and it's update the state of a component, this mean the *Game* component can update the *Board* component when the player or the user press a square.

Now the *handleClick* function looks something like this:

```js
const handleClick = (i) => {
  if(squares[i] || checkWinner(squares)) return;

  const nextSquares = squares.slice();

  xIsNext ?
    (nextSquares[i] = 'X') :
    (nextSquares[i] = 'O');
  
  onPlay(nextSquares)
}
```

Now we will create a constant variable called *winner* and we'll store our *checkWinner* function into it and then we'll pass the *squares* prop.

```js
const winner = checkWinner(squares)
```

Now we will create another variable called *status*, this variable will be empty or its value will be **undefined**. 

```js
let status;
```

The status will display a text or message like *Winner: X* or *Winner: O* if the game ends and will show you what the next player's turn is if the game continues.

```js
winner ? 
  (status = `Winner: ${winner}`) :
  (status = `Next player: ${xIsNext ? 'X' : 'O'}`);

return (
  <div className='container'>
    <div className='status'>
      <p className='info'>{status}</p>
    ...
  ...
)
```

In the code below you will see how the Board component looks like.

### Updated Board Component

```js
// Board.js

import React from 'react';
import { Squares } from '../Squares/Squares';
import { checkWinner } from '../../utils/check_winner';
import './Board.css';

const Board = ({xIsNext, squares, onPlay}) => {
  const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const handleClick = (i) => {
    if(squares[i] || checkWinner(squares)) return;

    const nextSquare = squares.slice()

    xIsNext ? 
      (nextSquare[i] = 'X') :
      (nextSquare[i] = 'O');

      onPlay(nextSquare)
  }

  const winner = checkWinner(squares)

  let status;

  winner ?
    (status = `Winner: ${winner}`) :
    (status = `Next player: ${xIsNext ? 'X' : 'O'}`)

  return (
    <div className='container'>
      <div className='status'>
        <p className='info'>{status}</p>
      </div>
      <div className='grid'>
        {indices.map(index => (
          <Squares
            key={index} 
            value={squares[index]}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export { Board }
```

### Completing the Game Component

Now let's implement some variables in the Game component to update it a bit more.

We will create a variable called *spaces* and pass it an array of nine (9) null elements, and then we will create two (2) states, the first value is the current state and the second is a function to allow us to update the state when called to this function, allowing React to re-render the component to its new state value.

Next, we pass the *spaces* variable to our state, using the React **useState** hook, like this.

```js
const spaces = [Array(9).fill(null)];
const [history, setHistory] = useState(spaces);
```

The *history* is an array that represents all board states, allowing us to have moves from the first to last, to do so, you need to store the spaces array into another array, in this case, *history*, as you could see before, the *setHistory*, is an special state acting as a function, that allow us to update the state, when this function is called.

The same way as our *currentIndex* and *setCurrentIndex* states do, but in this case, *currentIndex* represents a value that is initialized to zero *0* and will be updated one by one (1), when the *setCurrentIndex* function changes its state.

```js
const [currentIndex, setCurrentIndex] = useState(0);
```

The *xIsNext* is a variable that allow us to know if the value of the *curentIndex* is even, if *xIsNext === true* or odd if *xIsNext === false*.

```js
const xIsNext = currentIndex % 2 === 0;
```

Now we create another variable called *currentSquares*, this variable stores the *history* state as an array and it should immediately update the game history when you press any squares.

```js
const currentSquares = history[currentIndex];
```

Our Game component now looks like the following code:

```js
// Game.js

import React, { useState } from 'react';
import { Board } from '../Board/Board';
import './Game.css';

const Game = () => {
  const spaces = [Array(9).fill(null)]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState(spaces);
  const xIsNext = currentIndex % 2 === 0;
  const currentSquares = history[currentIndex];

  const handlePlay = (nextSquares) => {}

  return (
    <div className='game'>
      <header className='header'>
        <h1 className='heading'>tic tac toe</h1>
      </header>
      <div className='game--board'>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <ol className="game--list">
        
      </ol>
    </div>
  )
}

export { Game }
```

In the example above, we've created a function called *handlePlay*, this function is fired when you press a square.

```js
const handlePlay = (nextSquares) => {
  
}
```

The next step is to create another variable inside the *handlePlay* function, called *nextHistory*, this variable allows us to keep the history updated, instead of adding the *nextSquares* after all the elements, for this we use (*...spread syntax*). Also, to keep the old history part, we use *history.slice(0, currentIndex + 1)* to make it possible, but we need to enclose it in square brackets, so that *setHistory* accepts it as a copy of an array.

We have to remember, that when we make a move, the state *currentIndex*, increment its value one by one (1), this will update the last history entry.

```js
const nextHistory = [...history.slice(0, currentIndex + 1), nextSquares];
setHistory(nextHistory);
```

If we want to know the length of an element in the array, we use the *.length* property of JavaScript to know the total number of that element, like this.

```js
setCurrentIndex(nextHistory.length - 1)
```

Now, our *handlePlay* function looks like this.

```js
const handlePlay = (nextSquares) => {
  const nextHistory = [...history.slice(0, currentIndex + 1), nextSquares];
  setHistory(nextHistory);
  setCurrentIndex(nextHistory.length - 1);
}
```

**Display the player's movements**

You can display a list of items when you are recording game history, to do that, you need to use a regular JavaScript object like a *&lt;button&gt;*, and pass them in your application, even, if you want to render multiple elements in a React application, you can use an array of React elements.

To transform an array of React elements that you already have into the history state, you need to use JavaScript's *.map()* method, like this.

```js
[1, 2, 3].map(number => number * 2) // 2, 4, 6
```

To display a list of button with the text "jump" or "Go to move" to pass the move, the *.map* method will be used, to transform the history moves into React elements, let's see how we can do it.

```js
const moves = history.map((squares, move) => {

  return (
    <li>
      <button>
        Jump
      </button>
    </li>
  )
})
```

When using the *.map* method, you need to add a *key* to store some information about each item in the list to be updated, each item has an *ID* associated with that item. Keys do not need to be a globally unique identifier; they just need to be unique between components and their siblings.

```js
const moves = history.map((squares, move) => {
  return (
    <li key={move}>
      ...
    ...
  )
})
```

Now we will create two (2) variables, the first will be a function that will allow us to store the *setCurrentIndex*, the second will be called *moves*, within this variable we will create another called *description*, this variable will help us know how many movements the history state has had.

The code now looks like this.

```js
const jumpToNext = (nextMove) => setCurrentIndex(nextMove);

const moves = history.map((squares, move) => {
  let description;

  move > 0 ?
    description = `Go to move: ${move}` :
    description = `Go to game start`;

  return (
    <li key={move}>
      <button
        onClick={() => jumpToNext(move)}
      >
        {description}
      </button>
    </li>
  )
})
```

In the code below you will see how the Game component looks like.

### Updated Game Component

```js
// Game.js

import React, { useState } from 'react';
import { Board } from '../Board/Board';
import { Button  } from '../Button/Button';
import './Game.css';

const Game = () => {
  const spaces = [Array(9).fill(null)]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState(spaces);
  const xIsNext = currentIndex % 2 === 0;
  const currentSquares = history[currentIndex];

  const handlePlay = (nextSquare) => {
    const nextHistory = [...history.slice(0, currentIndex + 1), nextSquare];
    setHistory(nextHistory)
    setCurrentIndex(nextHistory.length - 1);
  }

  const jumpToNext = (nextMove) => setCurrentIndex(nextMove);

  const moves = history.map((squares, move) => {
    let description;

    move > 0 ? 
      (description = `Go to move: ${move}`) :
      (description = `Go to game start`)

    return (
      <li key={move}>
        <Button
          className="jump"
          value={description}
          onClick={() => jumpToNext(move)}
        />
      </li>
    )
  })

  return (
    <div className='game'>
      <header className='header'>
        <h1 className='heading'>tic tac toe</h1>
      </header>
      <div className='game--board'>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <ol className="game--list">
        {moves}
      </ol>
    </div>
  )
}

export { Game }
```

### Updated App Component

Now the last thing that we have to do, is to change the Board component to the Game component into our App, like this.

```js
// App.js

import React from 'react';
import { Game } from './components/Game/Game';
const App = () => {
  return (
    <>
      <Game/>
    </>
  )
}

export { App }
```

