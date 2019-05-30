var mychoice;
var enemychoice;
var myscore = 0;
var enemyscore = 0;
var enemy;

function resulthide()
{
    document.getElementById("p1rock").style.display="none";
    document.getElementById("p1paper").style.display="none";
    document.getElementById("p1scissors").style.display="none";
    document.getElementById("p2rock").style.display="none";
    document.getElementById("p2paper").style.display="none";
    document.getElementById("p2scissors").style.display="none";
}

function MyRock()
{
    mychoice = "rock";
}
function MyPaper()
{
    mychoice = "paper";
}
function MyScissors()
{
    mychoice = "scissors";
}

function enemychoice()
{
    enemy = Math.floor(Math.random() * 3) + 1;

    if(enemy == 1)
    {
        enemyscore = 1; // rock
        ScoreSystem();
    }
    else if(enemy == 2)
    {
        enemyscore = 2; // paper
        ScoreSystem();
    }
    else if(enemy == 3)
    {
        enemyscore = 3; // scissors
        ScoreSystem();
    }
}

function ScoreSystem()
{
    if(mychoice == "rock")
    {
        if(enemychoice == 1) // rock : rock = draw
        {
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
        }
        else if(enemychoice == 2) // rock : paper = I lost
        {
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
        }
        else if(enemychoice == 3) // rock : scissors = I won
        {
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
        }
    }
    else if(mychoice == "paper")
    {
        if(enemychoice == 1) // paper : rock = I won
        {
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
        }
        else if(enemychoice == 2) // paper : paper = draw
        {
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
        }
        else if(enemychoice == 3) // rock : scissors = I lost
        {
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
        }
    }
    else if(mychoice == "scissors")
    {
        if(enemychoice == 1) // scissors : rock = I lost
        {
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
        }
        else if(enemychoice == 2) // scissors : paper = I won
        {
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
        }
        else if(enemychoice == 3) // scissors : scissors = draw
        {
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
        }
    }
}