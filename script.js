const randomNumber = Math.random();
        let result;
        function pickComputerMove(){
            let computerMove = '';
            if (randomNumber>=0 && randomNumber<1/3){
                computerMove = 'rock';
            }else if (randomNumber>=1/3 && randomNumber<2/3){
                computerMove = 'paper';
            }else if (randomNumber>=2/3 && randomNumber<1){
                computerMove = 'scissors';
            }
            return computerMove;

        }
