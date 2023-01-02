var accountValue = document.getElementById("account");
var passwordValue = document.getElementById("password");
var account = 123456;
var password = 123456;

btn.addEventListener("click", function(){
    if(account == accountValue.value && password == passwordValue.value){
        window.location.href='D:/大學/HTMLpractice/orderSystem/waiter/waiterUI.html';
    }else{
        alert("帳號或密碼錯誤");
    }
})