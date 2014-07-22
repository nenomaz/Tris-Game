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

function TrisMatch(userToken,computerToken,emptyToken) {
	
    if (emptyToken === undefined)
        emptyToken = " ";
    this.tokens = { user:userToken, computer:computerToken, empty:emptyToken };
    this.grid = [ [this.tokens.empty, this.tokens.empty, this.tokens.empty], [this.tokens.empty, this.tokens.empty, this.tokens.empty], [this.tokens.empty, this.tokens.empty, this.tokens.empty] ];

    this.combinationsOfThreeBoxes = [ [ [0,0], [0,1], [0,2] ], [ [1,0], [1,1], [1,2] ], [ [2,0], [2,1], [2,2] ] , [ [0,0], [1,0], [2,0] ], [ [0,1], [1,1], [2,1] ], [ [0,2], [1,2], [2,2] ], [ [0,0], [1,1], [2,2] ], [ [0,2], [1,1], [2,0] ] ];
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
        @pre-conditions:
            params x and y must be numbers comprised into the "grid" range, else returned value will be false
            param playerToken must be equal to tokens.user or tokens.computer of the "tokens" object field
            box to be filled must be free, therefore it must contains the token "tokens.empty"
        @return boolean
            true IF the box has been filled, because it was empty
            false IF it hasn't been filled, therefore it is busy
    */
    this.fillABox = function(x,y,playerToken) {
        // First Pre-Conditions
        if (typeof x === "number" && typeof y === "number" && (playerToken == this.tokens.user || playerToken == this.tokens.computer)) {
            // Consecutive Pre-Conditions
            if (x < 3 && x >= 0 && y < 3 && y >= 0) {
                if (this.grid[x][y] == this.tokens.empty)
                {
                    this.grid[x][y] = playerToken;
                    return true;
                }
                else
                    return false;
            }
            else
                return false;
        }
        else
            return false;
    }

    /*
        Check if in the grid there is a tris done by one of the players
        @param playerToken is the token of the player of which is being checked the tris
        @pre-conditions
            param playerToken must be equal to tokens.user or tokens.computer
        @return [  boolean,  [ [], [], [] ]  ]
            [true, combination_of_three_boxes_that_contains_the_tris] IF there is a tris with playerToken
            [false, undefined] IF there is no tris with playerToken
    */
    this.checkTris = function(playerToken) {
        // Pre-Conditions
        if (playerToken === this.tokens.user || playerToken === this.tokens.computer) {
            // FOR each combination of three boxes in the grid (all combinations are in instance field "combinationsOfThreeBoxes")
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
                if (this.grid[box_one_x][box_one_y] === playerToken)
                    return [ true, this.combinationsOfThreeBoxes[combination] ];
            }
            // IF no tris has been performed, flow of statements reaches up to here, otherwise it has finished returning true with the combination of tris
            return [ false, undefined ];
        }
        else
            return [ false, undefined ];
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

/*
 * 
 */
function trisMatchTest(userToken,computerToken,emptyToken) {
	
	
}