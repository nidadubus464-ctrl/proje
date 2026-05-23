let kayitliMail = "";
let kayitliSifre = "";
let girisYapildi = false;

function showPage(pageId){

let sections = document.querySelectorAll("section");

sections.forEach(section => {
section.classList.remove("active");
});

document.getElementById(pageId).classList.add("active");

window.scrollTo({
top:0,
behavior:"smooth"
});

}

/* KAYIT */

document.getElementById("kayitForm").addEventListener("submit", function(e){

e.preventDefault();

let ad = document.getElementById("kayitAd").value;
let mail = document.getElementById("kayitMail").value;
let sifre = document.getElementById("kayitSifre").value;
let sifre2 = document.getElementById("kayitSifre2").value;

if(sifre !== sifre2){
alert("Şifreler eşleşmiyor!");
return;
}

kayitliMail = mail;
kayitliSifre = sifre;

alert(ad + " başarıyla kayıt oldu!");

showPage("giris");

});

/* GİRİŞ */

document.getElementById("girisForm").addEventListener("submit", function(e){

e.preventDefault();

let mail = document.getElementById("girisMail").value;
let sifre = document.getElementById("girisSifre").value;

if(mail === kayitliMail && sifre === kayitliSifre){

girisYapildi = true;

alert("Giriş başarılı!");

showPage("anasayfa");

}else{
alert("E-Posta veya şifre yanlış!");
}

});

/* BAĞIŞ KONTROL */
/* SAHİPLENME KONTROL */

function kontrolSahiplenme(){

if(!girisYapildi){

alert("Sahiplenme formunu açabilmek için önce kayıt olup giriş yapmalısınız!");

showPage("kayit");

}else{

showPage("sahiplenme");

}

}
function kontrolBagis(){

if(!girisYapildi){

alert("Bağış yapabilmek için önce kayıt olup giriş yapmalısınız!");

showPage("kayit");

}else{

showPage("bagis");

}

}

/* BAĞIŞ */

document.getElementById("bagisForm").addEventListener("submit", function(e){

e.preventDefault();

alert("Bağışınız için teşekkür ederiz 💖");

});

/* HAYVAN BİLDİR */

document.getElementById("bildirimForm").addEventListener("submit", function(e){

e.preventDefault();

alert("Bildiriminiz alınmıştır. En kısa sürede ekiplerimiz yönlendirilecektir.");

});