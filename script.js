var count = [0,0,0]
var countElement1 = document.querySelector("#likes1")
var countElement2 = document.querySelector("#likes2")
var countElement3 = document.querySelector("#likes3")

console.log(countElement);

function onClick1() {
    count[0]++;
    countElement1.innerText = count[0] + " like(s)"
    }

function onClick2() {
    count[1]++;
    countElement2.innerText = count[1] + " like(s)"
}
function onClick3() {
    count[2]++;
    countElement3.innerText = count[2] + " like(s)"
}