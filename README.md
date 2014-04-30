TRIS GAME

This document first explains in what the game consists of, next illustrates the implementation through Web Technologies.

WHAT DOES THE GAME CONSIST OF?

Tris is a game when two players play against each other. In this case, one player is the computer engine.
The game consists of a three cols and three rows grid, in which each player ticks with own token an empty box with the aim of realize a tris combination.
A tris combination is formed by three boxes filled by the same token, they must be adjacent horizontally, vertically or diagonally.
For example (e indicates empty boxes):

	xxx	xoe	eex
	ooe	xee	exo
	eee	xeo	xoo

Above, the player owning the "x" token has performed a tris in every grid!

IMPLEMENTATION THROUGH: Html5, CSS, Javascript and Jquery

The user owns the "X" Token, the computer engine the "O" token.

- The GRID consists of a div element, each BOX is a child div of the grid
- When the user click on a BOX, Jquery Event Action will be triggered
- The JQuery Event Action will fill the box with the user's token if the box is empty, if true next call a method that checks if the user has performed a tris, if true the game will be closed and the winner declared! Else, a computer engine method will be called that exams the grid situation and returns the index of box to be filled, finally with this index the sub-method will fill the corresponding box.

ONE MIND: during the engine elaboration the other boxes events mustn't be on, otherwise will be returned an unexpected result.

THE COMPUTER ENGINE METHOD-ALGORITHM

This method should contain an algorithm that studies the tris grid situation and react returning the index of the box to be filled. Here is a minimal example in natural language:
- The computer, if can, performs a tris;
- Else, checks if the user's going to do tris, if true the box to be filled is what blocks the tris
- Else if there's at least one computer token, the nearest to it will be filled with aim to perform a bis, so next may occur a tris if the user doesn't block the bis;
- Else, fills any box

But for now the method will return a casual box to be filled.

THE METHOD THAT CHECKS IF THERE'S A TRIS

This method in the file trisgame.html is called "isThereTris(token)", "token" is the token which the method checks.
