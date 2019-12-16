var comTabEle =
document.getElementById("com");

var comTabContentEle =
document.getElementById("com-container");



var pemTabEle =
document.getElementById("pem");

var pemTabContentEle =
document.getElementById("pem-container");



var activeClass =
'active'; 

comTabEle.addEventListener("click",
selectComTab);

pemTabEle.addEventListener("click",
selectPemTab);



function selectComTab() {

// Activate current tab

comTabEle.classList.add(activeClass);
// activate tab

comTabContentEle.classList.add(activeClass);
// activate tab content



// Hide the other tab

pemTabEle.classList.remove(activeClass);

pemTabContentEle.classList.remove(activeClass);

}



function selectPemTab() {

// Activate current tab

pemTabEle.classList.add(activeClass);
// activate tab

pemTabContentEle.classList.add(activeClass);
// activate tab content



// Hide the other tab

comTabEle.classList.remove(activeClass);

comTabContentEle.classList.remove(activeClass);

}







function factorial(number) {

var value =
number;

for (var
i = number;
i > 1; 
i--)

value *= i -
1;

return value;


};

function combination(n1,
k1) {

if (k1 >
n1 || n1 ==
"" || k1=="")

{

alert ("You must enter decimal number for n and k. Also k <= n.");

document.getElementById("n1").value =
"";

document.getElementById("n1").focus();

document.getElementById("k1").value =
"";

document.getElementById("k1").focus();

return "Math error";

}

else if (n1 ==
k1)

return 1;

return factorial(n1) / (factorial(k1) *
factorial(n1 -
k1));



}

;

document.getElementById("combination").onclick =
function () {

var n1 =
parseFloat(document.getElementById('n1').value),

k1 = parseFloat(document.getElementById('k1').value);


if (n1 &&
k1) {

document.getElementById("result").innerHTML =
combination(n1,
k1);

}

};





function permutation(n2,
k2) {

if ( k2 >
n2 || n2 ==
"" || k2 ==
"") {

alert ("You must enter decimal number for n and k. Also k <= n.");

document.getElementById("n2").value =
"";

document.getElementById("n2").focus();

document.getElementById("k2").value =
"";

document.getElementById("k2").focus();

return "Math error";

} else if (n2 ==
k2) {

return 1;

}



var isChecked =
document.querySelector('#hello').checked;


if (isChecked) {

// use formula 1

return n2**k2;

} else {

// use formula 2

return factorial(n2) /
factorial(n2 -
k2);

}

}



document.getElementById("permutation").onclick =
function () {

var n2 =
parseFloat(document.getElementById('n2').value),

k2 = parseFloat(document.getElementById('k2').value);


if (n2 &&
k2) {

document.getElementById("result").innerHTML =
permutation(n2,
k2);

}
}
