// 

/*
	The Class/Prototype
*/

/* function trisMatch(UserToken,ComputerToken) {
	
	FIELDS
		Grid
		User and Computer tokens

	METHODS - PUBLIC INTERFACE
	
		USER ACTION (chosenBoxToBeFilled)
			Var Result
			IF the box is free
				The box will be filled
				Result = "Your Box is filled"
				IF user has done a tris
					Result = "Tris performed by User"
				ELSE
					IF Computer action has performed
						IF computer has done a tris
							Result = "Tris performed by computer"
						ELSE
							Result += " and computer action is performed"
					ELSE
						Result += " but computer action hasn't"
			ELSE
				Result = "Box selected is not free"
			Return Result

	METHODS - PRIVATE CONTEXT
	
		FILL A BOX (coordinates,player)

		CHECK TRIS (player)

		COMPUTER ACTION

*/

function trisMatch(userToken,computerToken,emptyToken) {
	
	if (emptyToken === undefined)
		emptyToken = " ";
	this.tokens = { user:userToken, computer:computerToken, empty:emptyToken };
	this.grid = [ [tokens.empty, tokens.empty, tokens.empty], [tokens.empty, tokens.empty, tokens.empty], [tokens.empty, tokens.empty, tokens.empty] ];
	
	this.combinationsOfThreeBoxes;
	this.endGame = false;

	// PUBLIC INTERFACE

	/*
		
	*/
	this.userAction = function(x,y) {
		
	}

	// PRIVATE METHODS

	/*
		Fill a box with the index passed in input
		@param x is the x coordinate of the box
		@param y is the y coordinate of the box
		@param playerName is the name of the player wanting to fill that box, so that his token will be got from tokens object
		@return
			true IF the box has been filled, because it was empty
			false IF it hasn't been filled, therefore it is busy
	*/
	this.fillABox = function(x,y,playerName) {
		
	}

	this.checkTris = function(playerName) {
		
	}

	this.computerAction = function() {
		
	}

	this.getAnAlmostTris = function (playerName) {
		// For each combination of three boxes
			// IF it is an AlmostTris
				// Return it
	}
		
	/*
	
	*/
	this.isAnAlmostTris = function (combinationOfThreeBoxes,playerName) {
		// IF box1 and box2 are filled and box3 is empty
			// Return true and index as 3
		// IF box1 and box3 are filled and box2 is empty
			// Return true and index as 2
		// IF box2 and box3 are filled and box1 is empty
			// Return true and index as 1
		// ELSE
			// Return false
	}
}
