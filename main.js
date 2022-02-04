let dugme = document.getElementsByTagName("button");
//console.Log(dugme);16 buton varmıs
let ekran = document.getElementsByClassName("input")[0];
let temizle = document.getElementById("temizle");
let hesapla = document.getElementById("hesapla");
for(var i = 0; i < 16 ; i++) {
    if(i!= 12 && i!= 14) {
        dugme[i].addEventListener("click", yazdir);
    }
}
function yazdir() {
    ekran.value = ekran.value + this.value;
}

hesapla.addEventListener("click", hesap);

function hesap() {
  ekran.value = eval(ekran.value);
}

temizle.addEventListener("click", temiz);

function temiz() {
    ekran.value = "";
}