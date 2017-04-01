function boldFunction() {
    var boldText = prompt("Carpe diem. Seize the day", "I'm the greatest");
    var result = boldText.bold();
    if (boldText != null) {
        document.getElementById("yourText").innerHTML = 
        "\'" + result + "\' is a bold statement!";
    }
}