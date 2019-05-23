var mychoice;
var enemychoice;
var myscore = 0;
var enemyscore = 0;

function DrawRock()
{
    mychoice = "rock";
}
function DrawPaper()
{
    mychoice = "paper";
}
function DrawScissors()
{
    mychoice = "scissors";
}

var enemy;
function enemychoice()
{
    enemy = Math.floor(Math.random() * 3) + 1;

    if(enemy == 1)
    {
        enemyscore = 1;
    }
    else if(enemy == 2)
    {
        enemyscore = 2;
    }
    else if(enemy == 3)
    {
        enemyscore = 3;
    }
}