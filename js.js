var mychoice;
var enemychoice;
var myscore = 0;
var enemyscore = 0;
var enemy;

function resulthide()
{
    document.getElementById("p1default").style.display="none";
    document.getElementById("p1rock").style.display="none";
    document.getElementById("p1paper").style.display="none";
    document.getElementById("p1scissors").style.display="none";
    document.getElementById("p2default").style.display = "none";
    document.getElementById("p2rock").style.display="none";
    document.getElementById("p2paper").style.display="none";
    document.getElementById("p2scissors").style.display="none";
}
function showrock()
{
    document.getElementById("p1rock").style.display="block";
}
function showpaper()
{
    document.getElementById("p1paper").style.display="block";
}
function showscissors()
{
    document.getElementById("p1scissors").style.display="block";
}

function MyRock()
{
    mychoice = "rock";
    resulthide();
    showrock();
    EnemyChoice();
}

function MyPaper()
{
    mychoice = "paper";
    resulthide();
    showpaper();
    EnemyChoice();
}
function MyScissors()
{
    mychoice = "scissors";
    resulthide();
    showscissors();
    EnemyChoice();
}

function EnemyChoice()
{

    enemy = Math.floor(Math.random() * 3) + 1;

    if(enemy == 1)
    {
        enemychoice = "rock"; // rock
        ScoreSystem();
        document.getElementById("p2rock").style.display="block";
    }
    else if(enemy == 2)
    {
        enemychoice = "paper"; // paper
        ScoreSystem();
        document.getElementById("p2paper").style.display="block";
    }
    else if(enemy == 3)
    {
        enemychoice = "scissors"; // scissors
        ScoreSystem();
        document.getElementById("p2scissors").style.display="block";
    }
}

function ScoreSystem()
{
    if(mychoice == "rock")
    {
        if(enemychoice == "rock") // rock : rock = draw
        {
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
            console.log("draw");
        }
        else if(enemychoice == "paper") // rock : paper = I lost
        {
            enemyscore++;
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
            console.log("i lose");
        }
        else if(enemychoice == "scissors") // rock : scissors = I won
        {
            myscore++;
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
            console.log("i win");
        }
    }
    else if(mychoice == "paper")
    {
        if(enemychoice == "rock") // paper : rock = I won
        {
            myscore++;
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
            console.log("i win");
        }
        else if(enemychoice == "paper") // paper : paper = draw
        {
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
            console.log("draw");
        }
        else if(enemychoice == "scissors") // rock : scissors = I lost
        {
            enemyscore++;
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
            console.log("i lose");
        }
    }
    else if(mychoice == "scissors")
    {
        if(enemychoice == "rock") // scissors : rock = I lost
        {
            enemyscore++;
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
        }
        else if(enemychoice == "paper") // scissors : paper = I won
        {
            myscore++;
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
        }
        else if(enemychoice == "scissors") // scissors : scissors = draw
        {
            document.getElementById("score").innerHTML = myscore + ":" + enemyscore;
        }
    }
}