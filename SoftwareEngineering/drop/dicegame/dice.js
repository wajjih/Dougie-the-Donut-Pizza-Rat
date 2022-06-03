//================ Task 1 ==============================
        // Create a function (rollDice)
        // Roll Two "dice" one for the player and one for the computer
        // Use one variables for the (player) and one for the (computer)
        // (use a random number from 1-6 to represent a dice)
        function rollDice(){
            const player = Math.floor(Math.random()*6) + 1
            const computer = Math.floor(Math.random()*6) + 1
            let winner= ''
            
            player > computer ? winner = 'Player Wins': winner = 'Computer Wins';
            player === computer ? winner = 'Draw': winner = winner;

            // if(player > computer){
            //     winner = 'player wins'
            // }else if(computer>player){
            //     winner = 'computer wins'
            // }else{
            //     winner = 'draw'
            // }

            return [player, computer, winner] 
        }
        

        // If the player's dice roll is higher than the computer dice roll,
        // console.log("PLAYER WINS")
        // otherwise, log ("COMPUTER WINS")
        // Use a ternary to check for the winner
        // ----- After testing it, remove the console.log()
        // leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
        // FINALLY: return all three variables using an array
        // return [VALUE1, VALUE2, VALUE3]
       

      // ============ Task 2 ==============================
      // Let's update our UI (User Interface)
      // Create a function (displayScore)
      // Create a new a div displaying:
      // Computer Score: , Player Score:  & the Winner:
      // so there is a running record of game data.
      // Append the new div to the parent div on the HTML.
        function displayScore(){
            const results = rollDice()
            const displaying = document.createElement('div')
            const e = document.querySelector('#winner')
            
            if(e.textContent){
                e.removeChild(e.firstChild)
            }
            displaying.textContent = `Computer Score: ${results[1]}, PlayerScore: ${results[0]}, Winner: ${results[2]}`
            e.appendChild(displaying)
        }

      // Create a Reset Function (resetGame)
      // REMOVE the div with the game score, leaving just the parent div
      // creating a clean slate for a new set of games :)
        function resetGame(){
            const e = document.querySelector('#winner')
            while(e.firstChild){
                e.removeChild(e.firstChild)   
            }
            e.textContent = 'Dice Game'
        }
      // ==== Final Step =====================
      // Create a new function (playGame):
      // Call the rollDice and the displayScore function inside this function
        function playGameOn(){
            rollDice()
            displayScore()
        }
      // ========= Don't forget to add your events listeners
      // Attach the (playGame) function to the play game button
      // Attach the (resetGame) function to the reset button
      const playButton = document.getElementById('play-game')
        
        playButton.addEventListener('click',playGameOn)
      
      

      const resetButton = document.getElementById('reset')
     
        resetButton.addEventListener('click', resetGame)
      
      
