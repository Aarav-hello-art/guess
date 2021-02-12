var p1name = localStorage.getItem("player1")
var p2name = localStorage.getItem("player2")
document.getElementById("p1_name").innerHTML = p1name+" : "
document.getElementById("p2_name").innerHTML = p2name+" : "
p1score = 0
p2score = 0
 document.getElementById("p1score").innerHTML = p1score
 document.getElementById("p2score").innerHTML = p2score

 document.getElementById("qturn").innerHTML = "Question turn : "+p1name
 document.getElementById("aturn").innerHTML = "Answer turn : "+p2name

 function send() {
     getword=document.getElementById("wordinput").value
     Qword= getword.toLowerCase()
     console.log(Qword)

     letter1 = Qword.charAt(1) 
     console.log(letter1)
     replace1 = Qword.replace(letter1," _ ")
     console.log(replace1)

     x = Math.floor(Qword.length/2)
    letter2 = Qword.charAt(x)
    console.log(letter2)
    replace2 = replace1.replace(letter2," _ ") 
    console.log(replace2)

    y = Qword.length-1
    letter3 = Qword.charAt(y)
    console.log(letter3)
    finalque = replace2.replace(letter3," _ ")
    console.log(finalque)

    qtag = `<h4>Question: ${finalque}</h4><br>`
    atag = `Answer: <input type="text" id="ansbox"><br><br>`
    btag = `<button onclick="check()" class="btn btn-primary">Check</button>`
     

    document.getElementById("output").innerHTML=qtag+atag+btag 
 }

 var questiont = "p1"
 var answert = "p2"

 function check() {
     var getanswer = document.getElementById("ansbox").value
     var ans = getanswer.toLowerCase()
     console.log("ans = "+ ans)
     console.log("Question = "+ Qword)

     if(ans==Qword){
      if (answert=="p2") {
          p2score = p2score+1
          document.getElementById("p2score").innerHTML = p2score
      }
      else{
        p1score = p1score+1
        document.getElementById("p1score").innerHTML = p1score 
      }
     }

     if (answert=="p2") {
         answert = "p1"
         document.getElementById("aturn").innerHTML = "Answer turn : "+p1name
     }
     else{
         answert = "p2"
         document.getElementById("aturn").innerHTML = "Answer turn : "+p2name
     }

     if (questiont=="p1") {
         questiont = "p2"
         document.getElementById("qturn").innerHTML = "Question turn : "+p2name
     }
     else{
         questiont = "p1"
         document.getElementById("qturn").innerHTML = "Question turn : "+p1name 
     }
     document.getElementById("output").innerHTML = ""
 }


