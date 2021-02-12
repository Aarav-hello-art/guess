function login() {
    var p1 = document.getElementById("player1_name").value
    var p2 = document.getElementById("player2_name").value
    localStorage.setItem("player1",p1)
    localStorage.setItem("player2",p2)
    window.location = "game.html"
}



