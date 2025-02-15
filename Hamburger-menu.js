 // عند النقر على الهامبرغر لفتح وإغلاق القائمة
 function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

// إغلاق القائمة عند النقر على أي رابط داخل القائمة
var menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // لا نستخدم event.preventDefault() هنا لأننا نريد أن ننتقل إلى الرابط.
        document.getElementById('menu').classList.remove('open');
    });
});

// إغلاق القائمة عند النقر في أي مكان آخر على الصفحة
document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var hamburger = document.querySelector('.hamburger-menu');
    
    // إذا تم النقر خارج القائمة ورمز الهامبرغر، أغلق القائمة
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('open');
    }
});