let str;
let gameNumber;
let playerWins = 0;
let computerWins = 0;



let computerPlay = function(){
            // Return random choice for Rock Paper Scissor;   
    let rng;
    let choice;
    rng = Math.random();
    rng = rng*10;
    rng = parseInt(rng);
    rng = rng + 1;
    // console.log(rng); Used this to determine what the RNJesus spit out;
    if (rng <= 3) { // If random number is equal to or less than 3 continue;
        if (rng > 0){  // If random number is greater than 0 continued;
            switch (rng){
                case 1:
                    choice = "Rock";
                break;
                case 2:
                    choice = "Paper";
                break;
                case 3:
                    choice = "Scissor";
                break;
            }
            console.log("Computer choice is " + choice); // Display random number gentered before returning value;
            return(parseInt(rng));
        }
        else{
            return computerPlay(); // If random number is 0 then re run computerPlay() try to get a valid value;
        }
    }
    else{
        return computerPlay(); // If Rng is greater than 3 then run computerPlay() to try to get a valid value;
    }             
}

let playGame = function(playerSelection, computerSelection){
            // plays a round of Rock Paper Scissor;
            // accepts 2 integers converted from player input of string choice(rock, paper scissor) one player selected, one randomized computer choice;
            // compares 2 integers to determine winner;                        
                // Rock = 1, Paper = 2, Scissor = 3;
                    // 1 beats 3;
                    // 2 beats 1;
                    // 3 beats 2;
            // return a string to player saying that the player has won or lost;
            // console.log("Within playGame: playerSelection = " + playerSelection); Was having issues with variable passing so I wanted to check the value from within funcition;
            // console.log("computerSelection = " + computerSelection); Was having issues with NaN sometimes(only on times that the RNG didnt get a int between 1 and 3 on first try. If it failed to get between 1 and 3 on first attempt then it returned NaN). turns out I wasnt returning computerPlay() from the 2 else conditions in computerPlay() function;
            if (playerSelection == 1){
                if (computerSelection == 1){
                    console.log("Game is a TIE!!");
                    gameNumber = gameNumber - 1;
                    h3Content.textContent = 'Game is a TIE!!';
                    container.appendChild(h3Content);
                }
                else if(computerSelection == 2){
                    computerWins++;
                    console.log("Player Loses!!");
                    cWins.textContent = "Computer Wins: " + computerWins;
                    h3Content.textContent = 'Player Loses!!';
                    container.appendChild(h3Content);
                }
                else if(computerSelection == 3){
                    playerWins++;
                    console.log("Player Wins!! Computer Loses!!");
                    pWins.textContent = "Player Wins: " + playerWins;
                    h3Content.textContent = 'Player Wins!!';
                    container.appendChild(h3Content);
                }
                else {
                    console.log("Error has occured.");
                    h3Content.textContent = 'ERROR';
                    container.appendChild(h3Content);
                }
            }
            else if (playerSelection == 2){
                if (computerSelection == 1){
                    playerWins++;
                    console.log("Player Wins!! Computer Loses!!");   
                    pWins.textContent = "Player Wins: " + playerWins;                                                             
                    h3Content.textContent = 'Player Wins!!';
                    container.appendChild(h3Content);
                }
                else if(computerSelection == 2){
                    console.log("Game is a TIE!!");
                    gameNumber =gameNumber - 1;
                    h3Content.textContent = 'Game is a TIE!!';
                    container.appendChild(h3Content);
                }
                else if(computerSelection == 3){
                    computerWins++;
                    console.log("Humanity Loses!! Comuter Wins!!");
                    cWins.textContent = "Computer Wins: " + computerWins;
                    h3Content.textContent = 'Player Loses!!';
                    container.appendChild(h3Content);
                }
                else {
                    console.log("Error has occured.");
                    h3Content.textContent = 'ERROR';
                    container.appendChild(h3Content);
                }
            }
            else if (playerSelection == 3){
                if (computerSelection == 1){
                    computerWins++;
                    console.log("Human Loses!! Computer Wins!!");        
                    cWins.textContent = "Computer Wins: " + computerWins;                                                        
                    h3Content.textContent = 'Player Loses!!';
                    container.appendChild(h3Content);
                }
                else if(computerSelection == 2){
                    playerWins++;
                    console.log("Human Wins!! Computer Loses!!");
                    pWins.textContent = "Player Wins: " + playerWins;
                    h3Content.textContent = 'Player Wins!!';
                    container.appendChild(h3Content);
                }
                else if(computerSelection == 3){                                
                    console.log("Game is a TIE!!");
                    gameNumber = gameNumber - 1;
                    h3Content.textContent = 'Game is a TIE!!';
                    container.appendChild(h3Content);
                }
                else {
                    console.log("Error has occured.");
                    h3Content.textContent = 'ERROR';
                    container.appendChild(h3Content);
                }
            }
}            

let convertPlayerSelection = function(str){
            // convert string to all one case;
        str = str.toLowerCase();
            // return integer if rock paper or scissor was enered in any case. If something other than rock paper scissor was entered then request new entry.
        if (str == "rock"){
            console.log("Human's choice is Rock");
            return 1;
        }
        else if (str == "paper"){
            console.log("Human's choice is Paper");
            return 2;
        }
        else if (str == "scissor"){
            console.log("Human's choice is Scissor");
            return 3;                        
        }
        else{
            return convertPlayerSelection(prompt("Previous entry invalid. Please enter Rock Paper Scissor: ",str));
        }
}

let message = function(){
    //Display winner of best of 5;
    //reload page to reset game;
    if(playerWins==5){
        alert("Congratulations human you've won this time...");
        window.location.reload();
    }
    if(computerWins == 5){
        alert("The Machines will always win over Humans like you!");
        window.location.reload();
    }
}

let game = function(playerSelection){
            // play a game with 5 rounds;
            // use console.log() to display results of games;
            // use prompt to get input from user for each of the 5 games;
            
            //for (gameNumber=0; gameNumber<5; gameNumber++){
            //    console.log("Game: " + (gameNumber+1));
            //    const playerSelection = parseInt(convertPlayerSelection(prompt("Enter Rock Paper Scissor: ", str)));
                const computerSelection = parseInt(computerPlay());
                playGame(playerSelection,computerSelection);
            //}
            /* console.log("after 5 games test.");    
            console.log("playerWins = " + playerWins);      This block was used to verify variables used for number of wins.
            console.log("computerWins = " + computerWins); */
            
            /*
            if (playerWins>computerWins){
                console.log("Humans win the best of 5!!!");
                console.log("They will remain our slaves...for now.");
            }
            else if (playerWins<computerWins){
                console.log("The Machines have won...");
                console.log("Now we must clean their exhaust fans...with our tongues.");
            }*/
            if(playerWins==5 || computerWins == 5){
                setTimeout(function(){message();},1500);
            }                                    
}
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorBtn = document.querySelector('#scissorBtn');
const container = document.querySelector('#result');
const h3Content = document.createElement('h3');
const pWins = document.querySelector('#pWins');
const cWins = document.querySelector('#cWins');


pWins.textContent = "Player Wins: " + playerWins;
cWins.textContent = "Computer Wins: " + computerWins;
h3Content.textContent = "Game Results Displayed Here!";
container.appendChild(h3Content);
//btns.forEach(btn => btn.addEventListener('click', function(e)));
rockBtn.addEventListener('click', function(e){
    if(playerWins !=5 && computerWins != 5){
        game(1);
    }
    //console.log(e);
});

paperBtn.addEventListener('click', function(e){
    if(playerWins !=5 && computerWins != 5){
        game(2);
    }
    //console.log(e);
});

scissorBtn.addEventListener('click', function(e){
    if(playerWins !=5 && computerWins != 5){
        game(3);
    }
        //console.log(e);
});
// console.log("From Global: computerSelection = " + computerSelection);  NaN return issue debug;
//game();