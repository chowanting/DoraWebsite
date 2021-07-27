//宣告變數
var sticky;
var menubar;


//html 載入後執行
window.onload = function() {
    menubar = document.getElementById('menu-bar'); //取得menu-bar
    var service = document.getElementById('service_box'); //取得service區塊
    sticky = service_box.offsetTop; //設定臨界點(下拉至多少會固定menu-bar)
};

//設定捲動監聽
window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        menubar.classList.add('sticky');
    } else {
        menubar.classList.remove('sticky');
    }
};