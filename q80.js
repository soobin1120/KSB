const_LOGIN_ID="cat";
const_LOGIN_PW="1234"


var i;
var p;
var login_box;

var id;
var pw;

function login(){
    id= i.value;
    pw=p.value;
    if(id==LOGIN_ID&&pw==LOGIN_PW){
        procLogin();
    }else{
        alert("로그인 실패")
    }
}
function procLogin(){
    login_box.innerHtml="<p>" + id + "회원님 반갑습니다.</p>";
}
window.onload=function(){
    i=document.getElementById("i");
    p=document.getElementById("p");
    login_box=getElementById("login_box");
}