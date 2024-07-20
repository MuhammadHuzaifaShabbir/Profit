// document.getElementById("Pass").addEventListener("keydown", function(event) {
//  if (event.key === "Enter") {
//      on()
//     }
// });

document.getElementById("firstdiv").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        profit();
    }
});
document.getElementById("seconddiv").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        percentage();
    }
});
document.getElementById("thirddiv").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            sale();
        }
      });
    
    // function on() {
    //     var abc = document.getElementById('Pass')
    //     var time = new Date().getMinutes()
    //     var plus = time + 5
    //     var pass = 'Profit'
    //     var pl = pass + plus
    //     if (abc.value == pl) {
    //         alert('Succcess full')
    //         abc.value = ''
    //         location.href = 'first.html'
    //     }
    //     else {
    //         alert('Un Correct Password\nPlease try again')
    //         abc.value = ''
    //     }
    // }
    
function profit() {
    var pro = document.getElementById('prfit')
    var prsale = document.getElementById('invesr')
    var percvvv = pro.value * 100 / prsale.value
    var con = percvvv.toFixed(2)
    var perce = document.getElementById('Percent')

    perce.innerHTML = con
}

function percentage() {
    var pro = document.getElementById('inves')
    var prsale = document.getElementById('perc')
    var percvvv = pro.value / 100 * prsale.value
    var con = percvvv.toFixed(2)
    var perce = document.getElementById('amount')

    perce.innerHTML = con

}
function sale() {
    var pro = document.getElementById('ale')
    var prsale = document.getElementById('cost')
    var percvvv = ((prsale.value / pro.value) * 100)
    var abc = 100 - percvvv
    var con = abc.toFixed(2)

    var perce = document.getElementById('salecost')
    var saa = document.getElementById('sa')
    saa.innerHTML = percvvv.toFixed(2)

    perce.innerHTML = con

}


function a1(){
    var pro = document.getElementById('prfit')
pro.value = pro.value.slice(0,-1)
}
function a2(){
    var pro = document.getElementById('invesr')
pro.value = pro.value.slice(0,-1)
}
function a3(){
    var pro = document.getElementById('inves')
pro.value = pro.value.slice(0,-1)
}
function a4(){
    var pro = document.getElementById('perc')
pro.value = pro.value.slice(0,-1)
}
function a5(){
    var pro = document.getElementById('ale')
pro.value = pro.value.slice(0,-1)
}
function a6(){
    var pro = document.getElementById('cost')
pro.value = pro.value.slice(0,-1)
}
