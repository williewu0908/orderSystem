let num1 = 0;
const value1 = document.querySelector(".value1");
const btns1 = document.querySelectorAll(".btns1");
btns1.forEach((btns1) => {
    btns1.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease") && num1 > 0) {
            num1--;
        } else if (styles.contains("increase")) {
            num1++;
        } else {""
            num1 = 0;
        }
        value1.textContent = num1;
        if (num1 > 0) {
            value1.style.color = "green";
        } else {
            value1.style.color = "black";
        }
    });
});

let num2 = 0;
const value2 = document.querySelector(".value2");
const btns2 = document.querySelectorAll(".btns2");
btns2.forEach((btns2) => {
    btns2.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease") && num2 > 0) {
            num2--;
        } else if (styles.contains("increase")) {
            num2++;
        } else {""
            num2 = 0;
        }
        value2.textContent = num2;
        if (num2 > 0) {
            value2.style.color = "green";
        } else {
            value2.style.color = "black";
        }
    });
});

let num3 = 0;
const value3 = document.querySelector(".value3");
const btns3 = document.querySelectorAll(".btns3");
btns3.forEach((btns3) => {
    btns3.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease") && num3 > 0) {
            num3--;
        } else if (styles.contains("increase")) {
            num3++;
        } else {""
            num3 = 0;
        }
        value3.textContent = num3;
        if (num3 > 0) {
            value3.style.color = "green";
        } else {
            value3.style.color = "black";
        }
    });
});

let num4 = 0;
const value4 = document.querySelector(".value4");
const btns4 = document.querySelectorAll(".btns4");
btns4.forEach((btns4) => {
    btns4.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease") && num4 > 0) {
            num4--;
        } else if (styles.contains("increase")) {
            num4++;
        } else {""
            num4 = 0;
        }
        value4.textContent = num4;
        if (num4 > 0) {
            value4.style.color = "green";
        } else {
            value4.style.color = "black";
        }
    });
});

let num5 = 0;
const value5 = document.querySelector(".value5");
const btns5 = document.querySelectorAll(".btns5");
btns5.forEach((btns5) => {
    btns5.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease") && num5 > 0) {
            num5--;
        } else if (styles.contains("increase")) {
            num5++;
        } else {""
            num5 = 0;
        }
        value5.textContent = num5;
        if (num5 > 0) {
            value5.style.color = "green";
        } else {
            value5.style.color = "black";
        }
    });
});

let num6 = 0;
const value6 = document.querySelector(".value6");
const btns6 = document.querySelectorAll(".btns6");
btns6.forEach((btns6) => {
    btns6.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease") && num6 > 0) {
            num6--;
        } else if (styles.contains("increase")) {
            num6++;
        } else {""
            num6 = 0;
        }
        value6.textContent = num6;
        if (num6 > 0) {
            value6.style.color = "green";
        } else {
            value6.style.color = "black";
        }
    });
});

var tbo1 = document.getElementById("table1order");
var table1 = document.getElementById("table1");
var ct1 = document.getElementById("cleanTable1")

tbo1.addEventListener("click", function(){
    table1.style.backgroundColor = "red"; 
    value1.textContent = 0;
    value2.textContent = 0;
    value3.textContent = 0;
    value4.textContent = 0;
    value5.textContent = 0;
    value6.textContent = 0;
})

ct1.addEventListener("click", function(){
    table1.style.backgroundColor = "#198754"; 
})

var tbo2 = document.getElementById("table2order");
var table2 = document.getElementById("table2");
var ct2 = document.getElementById("cleanTable2")

tbo2.addEventListener("click", function(){
    table2.style.backgroundColor = "red"; 
    value1.textContent = 0;
    value2.textContent = 0;
    value3.textContent = 0;
    value4.textContent = 0;
    value5.textContent = 0;
    value6.textContent = 0;
})

ct2.addEventListener("click", function(){
    table2.style.backgroundColor = "#198754"; 
})

var tbo3 = document.getElementById("table3order");
var table3 = document.getElementById("table3");
var ct3 = document.getElementById("cleanTable3")

tbo3.addEventListener("click", function(){
    table3.style.backgroundColor = "red"; 
    value1.textContent = 0;
    value2.textContent = 0;
    value3.textContent = 0;
    value4.textContent = 0;
    value5.textContent = 0;
    value6.textContent = 0;
})

ct3.addEventListener("click", function(){
    table3.style.backgroundColor = "#198754"; 
})

var tbo3 = document.getElementById("table3order");
var table3 = document.getElementById("table3");
var ct3 = document.getElementById("cleanTable3")

tbo3.addEventListener("click", function(){
    table3.style.backgroundColor = "red"; 
    value1.textContent = 0;
    value2.textContent = 0;
    value3.textContent = 0;
    value4.textContent = 0;
    value5.textContent = 0;
    value6.textContent = 0;
})

ct3.addEventListener("click", function(){
    table3.style.backgroundColor = "#198754"; 
})

var tbo4 = document.getElementById("table4order");
var table4 = document.getElementById("table4");
var ct4 = document.getElementById("cleanTable4")

tbo4.addEventListener("click", function(){
    table4.style.backgroundColor = "red"; 
    value1.textContent = 0;
    value2.textContent = 0;
    value3.textContent = 0;
    value4.textContent = 0;
    value5.textContent = 0;
    value6.textContent = 0;
})

ct4.addEventListener("click", function(){
    table4.style.backgroundColor = "#198754"; 
})

var tbo5 = document.getElementById("table5order");
var table5 = document.getElementById("table5");
var ct5 = document.getElementById("cleanTable5")

tbo5.addEventListener("click", function(){
    table5.style.backgroundColor = "red"; 
    value1.textContent = 0;
    value2.textContent = 0;
    value3.textContent = 0;
    value4.textContent = 0;
    value5.textContent = 0;
    value6.textContent = 0;
})

ct5.addEventListener("click", function(){
    table5.style.backgroundColor = "#198754"; 
})

var tbo6 = document.getElementById("table6order");
var table6 = document.getElementById("table6");
var ct6 = document.getElementById("cleanTable6")

tbo6.addEventListener("click", function(){
    table6.style.backgroundColor = "red"; 
    value1.textContent = 0;
    value2.textContent = 0;
    value3.textContent = 0;
    value4.textContent = 0;
    value5.textContent = 0;
    value6.textContent = 0;
})

ct6.addEventListener("click", function(){
    table6.style.backgroundColor = "#198754"; 
})