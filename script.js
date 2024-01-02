var ans=Math.floor(Math.random()*10);
        var result=document.getElementById("result");
        console.log(ans);
        var score=10;
        function check()
        {
            var num=document.getElementById("num").value;
            num=Number(num);
            if(num==ans)
            {
                result.textContent="WIN";
                document.getElementById("score").innerHTML=Number(score);
            }
            else{
                result.textContent="WRONG"
                score=score-1;
                document.getElementById("score").innerHTML=Number(score);
                console.log(score)
            }
            if(num>ans){
                hint.textContent="HINT : MAX THAN GUESS ";
            }
            if(num<ans)
            {
                hint.textContent="HINT : MIN THAN GUESS ";
            }
        }
        function reset()
        {
            location.reload();
        }