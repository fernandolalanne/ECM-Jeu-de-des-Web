document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';
document.getElementById('dice-3').style.display = 'none';

document.getElementById('myBoton').addEventListener('click',function(){
    var valorSeleccionado = document.getElementById('miSelect').value;
    if (valorSeleccionado === '3'){
        var scores, roundScore, activePlayer, gamePlaying;

        function init() {
            scores = [0, 0];
            activePlayer = 0; // we begin with the first player
            roundScore = 0; // the score in the current round for the active player
            gamePlaying = true; // bool that indicates if someone is playing the game or not

            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.getElementById('dice-3').style.display = 'none';

            document.getElementById('score-0').textContent = '0'; // score of the first player
            document.getElementById('score-1').textContent = '0'; // score of the first player
            document.getElementById('current-0').textContent = '0'; // score obtained in the dice rolls in the current round for player 1
            document.getElementById('current-1').textContent = '0'; // score obtained in the dice rolls in the current round for player 2
            document.getElementById('name-0').textContent = 'Player 1';
            document.getElementById('name-1').textContent = 'Player 2';
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        }
        init();

        var lastDice = [0,0,0];

        document.querySelector('.btn-roll').addEventListener('click', function() {
            if(gamePlaying) {
                // 1. Random number
                var dice1 = Math.floor(Math.random() * 6) + 1;
                var dice2 = Math.floor(Math.random() * 6) + 1;
                var dice3 = Math.floor(Math.random() * 6) + 1;

                //2. Display the result
            
                document.getElementById('dice-1').style.display = 'block';
                document.getElementById('dice-2').style.display = 'block';
                document.getElementById('dice-3').style.display = 'block';


                document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
                document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
                document.getElementById('dice-3').src = 'dice-' + dice3 + '.png';

                //3. Update the round score IF the rolled number was NOT a 1
                if (lastDice[0] !== 6 && lastDice[1] !== 6 && lastDice[2] !== 6 &&
                    dice1 !== 1 && dice2 !== 1 && dice3 !== 1) {
                    // Add score
                    roundScore += dice1 + dice2 + dice3;
                    document.querySelector('#current-' + activePlayer).textContent = roundScore;
                } else {
                    // Next player
                    nextPlayer();
                }

                lastDice = [dice1, dice2, dice3];
                
            }   
        });


        document.querySelector('.btn-hold').addEventListener('click', function() {
            if (gamePlaying) {
                // Add CURRENT score to GLOBAL score
                scores[activePlayer] += roundScore;

                // Update the UI
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                
                var input = document.querySelector('.final-score').value;
                var winningScore;
                
                // Undefined, 0, null or "" are COERCED to false
                // Anything else is COERCED to true
                if(input) {
                    winningScore = input;
                } else {
                    winningScore = 100;
                }
                
                // Check if player won the game
                if (scores[activePlayer] >= winningScore) {
                    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                    document.getElementById('dice-1').style.display = 'none';
                    document.getElementById('dice-2').style.display = 'none';
                    document.getElementById('dice-3').style.display = 'none';
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                    gamePlaying = false;
                } else {
                    //Next player
                    nextPlayer();
                }
            }
        });


        function nextPlayer() {
            //Next player
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');

            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.getElementById('dice-3').style.display = 'none';
        }

        document.querySelector('.btn-new').addEventListener('click', init);

    }   if (valorSeleccionado === '2'){  
        var scores, roundScore, activePlayer, gamePlaying;

        function init() {
            scores = [0, 0];
            activePlayer = 0; // we begin with the first player
            roundScore = 0; // the score in the current round for the active player
            gamePlaying = true; // bool that indicates if someone is playing the game or not

            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';

            document.getElementById('score-0').textContent = '0'; // score of the first player
            document.getElementById('score-1').textContent = '0'; // score of the first player
            document.getElementById('current-0').textContent = '0'; // score obtained in the dice rolls in the current round for player 1
            document.getElementById('current-1').textContent = '0'; // score obtained in the dice rolls in the current round for player 2
            document.getElementById('name-0').textContent = 'Player 1';
            document.getElementById('name-1').textContent = 'Player 2';
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        }
        init();

        var lastDice = [0,0];

        document.querySelector('.btn-roll').addEventListener('click', function() {
            if(gamePlaying) {
                // 1. Random number
                var dice1 = Math.floor(Math.random() * 6) + 1;
                var dice2 = Math.floor(Math.random() * 6) + 1;

                //2. Display the result
            
                document.getElementById('dice-1').style.display = 'block';
                document.getElementById('dice-2').style.display = 'block';


                document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
                document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

                //3. Update the round score IF the rolled number was NOT a 1
                if (lastDice[0] !== 6 && lastDice[1] !== 6 &&
                    dice1 !== 1 && dice2 !== 1) {
                    // Add score
                    roundScore += dice1 + dice2;
                    document.querySelector('#current-' + activePlayer).textContent = roundScore;
                } else {
                    // Next player
                    nextPlayer();
                }

                lastDice = [dice1, dice2];
                
            }   
        });


        document.querySelector('.btn-hold').addEventListener('click', function() {
            if (gamePlaying) {
                // Add CURRENT score to GLOBAL score
                scores[activePlayer] += roundScore;

                // Update the UI
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                
                var input = document.querySelector('.final-score').value;
                var winningScore;
                
                // Undefined, 0, null or "" are COERCED to false
                // Anything else is COERCED to true
                if(input) {
                    winningScore = input;
                } else {
                    winningScore = 100;
                }
                
                // Check if player won the game
                if (scores[activePlayer] >= winningScore) {
                    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                    document.getElementById('dice-1').style.display = 'none';
                    document.getElementById('dice-2').style.display = 'none';
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                    gamePlaying = false;
                } else {
                    //Next player
                    nextPlayer();
                }
            }
        });


        function nextPlayer() {
            //Next player
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');

            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
        }

        document.querySelector('.btn-new').addEventListener('click', init);      
    }       if (valorSeleccionado === '1'){
            var scores, roundScore, activePlayer, gamePlaying;

            function init() {
                scores = [0, 0];
                activePlayer = 0; // we begin with the first player
                roundScore = 0; // the score in the current round for the active player
                gamePlaying = true; // bool that indicates if someone is playing the game or not

                document.getElementById('dice-1').style.display = 'none';

                document.getElementById('score-0').textContent = '0'; // score of the first player
                document.getElementById('score-1').textContent = '0'; // score of the first player
                document.getElementById('current-0').textContent = '0'; // score obtained in the dice rolls in the current round for player 1
                document.getElementById('current-1').textContent = '0'; // score obtained in the dice rolls in the current round for player 2
                document.getElementById('name-0').textContent = 'Player 1';
                document.getElementById('name-1').textContent = 'Player 2';
                document.querySelector('.player-0-panel').classList.remove('winner');
                document.querySelector('.player-1-panel').classList.remove('winner');
                document.querySelector('.player-0-panel').classList.remove('active');
                document.querySelector('.player-1-panel').classList.remove('active');
                document.querySelector('.player-0-panel').classList.add('active');
            }
            init();

            var lastDice = [0];

            document.querySelector('.btn-roll').addEventListener('click', function() {
                if(gamePlaying) {
                    // 1. Random number
                    var dice1 = Math.floor(Math.random() * 6) + 1;

                    //2. Display the result
                
                    document.getElementById('dice-1').style.display = 'block';


                    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';

                    //3. Update the round score IF the rolled number was NOT a 1
                    if (lastDice[0] !== 6 &&
                        dice1 !== 1) {
                        // Add score
                        roundScore += dice1;
                        document.querySelector('#current-' + activePlayer).textContent = roundScore;
                    } else {
                        // Next player
                        nextPlayer();
                    }

                    lastDice = [dice1];
                    
                }   
            });


            document.querySelector('.btn-hold').addEventListener('click', function() {
                if (gamePlaying) {
                    // Add CURRENT score to GLOBAL score
                    scores[activePlayer] += roundScore;

                    // Update the UI
                    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                    
                    var input = document.querySelector('.final-score').value;
                    var winningScore;
                    
                    // Undefined, 0, null or "" are COERCED to false
                    // Anything else is COERCED to true
                    if(input) {
                        winningScore = input;
                    } else {
                        winningScore = 100;
                    }
                    
                    // Check if player won the game
                    if (scores[activePlayer] >= winningScore) {
                        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                        document.getElementById('dice-1').style.display = 'none';
                        document.getElementById('dice-2').style.display = 'none';
                        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                        gamePlaying = false;
                    } else {
                        //Next player
                        nextPlayer();
                    }
                }
            });


            function nextPlayer() {
                //Next player
                activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                roundScore = 0;

                document.getElementById('current-0').textContent = '0';
                document.getElementById('current-1').textContent = '0';

                document.querySelector('.player-0-panel').classList.toggle('active');
                document.querySelector('.player-1-panel').classList.toggle('active');

                //document.querySelector('.player-0-panel').classList.remove('active');
                //document.querySelector('.player-1-panel').classList.add('active');

                document.getElementById('dice-1').style.display = 'none';
            }

            document.querySelector('.btn-new').addEventListener('click', init);      
            
    }
});
