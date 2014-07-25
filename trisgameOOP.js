// 

/*
    The Class/Prototype
*/

/* function trisMatch(UserToken,ComputerToken) {

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

/*
 * 
 */
function trisMatchTest(userToken,computerToken,emptyToken) {
	
}

function TrisMatch(userToken,computerToken,emptyToken) {
	
    if (emptyToken === undefined)
        emptyToken = " ";
    this.tokens = { user:userToken, computer:computerToken, empty:emptyToken };
    this.grid = [ [this.tokens.empty, this.tokens.empty, this.tokens.empty], [this.tokens.empty, this.tokens.empty, this.tokens.empty], [this.tokens.empty, this.tokens.empty, this.tokens.empty] ];

    /** combinationsOfThreeBoxes 
    * Three-dimensional array containing coordinates of all possible combinations of three boxes in the grid
    * Its structure: combinationsOfThreeBoxes[combination][box][coordinate x or y]
    */
    this.combinationsOfThreeBoxes = [ [ [0,0], [0,1], [0,2] ], [ [1,0], [1,1], [1,2] ], [ [2,0], [2,1], [2,2] ] , [ [0,0], [1,0], [2,0] ], [ [0,1], [1,1], [2,1] ], [ [0,2], [1,2], [2,2] ], [ [0,0], [1,1], [2,2] ], [ [0,2], [1,1], [2,0] ] ];
    
    /** endGame
     * It is false while game hasn't finished
     * Become true when field "actionsCount" reaches 9 or one of the players (user or computer) perform tris
     */
    this.endGame = false;
    
    /** actionsCount
     * Count of total actions (done by user and computer), when it reaches 9 implies that all boxes into grid have been filled, so field "endGame" must become true
     */ 
    this.actionsCount = 0;

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
        @pre-conditions:
            params x and y type must be number, and they must be comprised into the "grid" range, else returned value will be false
            param playerToken must be equal to tokens.user or tokens.computer of the "tokens" object field
            box to be filled must be free, therefore it must contains the token "tokens.empty"
        @returns boolean
            true IF the box has been filled, because it was empty
            false IF it hasn't been filled, therefore it is busy
    */
    this.fillABox = function(x,y,playerToken) {
        // First Pre-Conditions
        var typeOfX = typeof x, typeOfY = typeof y;
        if (typeOfX === "number" && typeOfY === "number" && (playerToken == this.tokens.user || playerToken == this.tokens.computer)) {
            // Consecutive Pre-Conditions
            if (x < 3 && x >= 0 && y < 3 && y >= 0) {
                if (this.grid[x][y] == this.tokens.empty)
                {
                    this.grid[x][y] = playerToken;
                    return true;
                }
            }
        }
        return false;
    }

    /*
        Check if in the grid there is a tris done by one of the players
        @param playerToken is the token of the player of which is being checked the tris
        @pre-conditions
            param playerToken must be equal to tokens.user or tokens.computer
        @returns [  boolean,  [ [], [], [] ]  ]
            [true, combination_of_three_boxes_that_contains_the_tris] IF there is a tris with playerToken
            [false, undefined] IF there is no tris with playerToken
    */
    this.checkTris = function(playerToken) {
        // Pre-Conditions
        if (playerToken === this.tokens.user || playerToken === this.tokens.computer) {
            // FOR each combination of three boxes in the grid (all combinations are into instance field "combinationsOfThreeBoxes")
            for (var combination = 0; combination < this.combinationsOfThreeBoxes.length; combination++) {
                // Preparation of boxes' coordinates variables
                var box_one_x, box_one_y, box_two_x, box_two_y, box_three_x, box_three_y;
                box_one_x = this.combinationsOfThreeBoxes[combination][0][0];
                box_one_y = this.combinationsOfThreeBoxes[combination][0][1];
                box_two_x = this.combinationsOfThreeBoxes[combination][1][0];
                box_two_y = this.combinationsOfThreeBoxes[combination][1][1];
                box_three_x = this.combinationsOfThreeBoxes[combination][2][0];
                box_three_y = this.combinationsOfThreeBoxes[combination][2][1];
                // IF box_one, box_two and box_three are filled with playerToken
                if (this.grid[box_one_x][box_one_y] === playerToken && this.grid[box_two_x][box_two_y] === playerToken && this.grid[box_three_x][box_three_y] === playerToken)
                    return [ true, this.combinationsOfThreeBoxes[combination] ];
            }
        }
        // IF no tris has been performed, flow of statements reaches up to here, otherwise it has finished returning true with the combination of tris
        return [ false, undefined ];
    }

    /**
     * 
     * @returns {undefined}
     */
    this.computerAction = function() {
        var casualX, casualY, filled = false;
        while (filled == false) {
            casualX = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
            casualY = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
            filled = this.fillABox(casualX, casualY, this.tokens.computer);
        }
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
