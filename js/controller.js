

function sayHi(){
    console.log('HI');
    
}

function toggleNav() {
    let sidebar = document.getElementById("sidebar");
    let menuToggle = document.getElementById("menu-toggle");
    let icon = menuToggle.querySelector("i");

    // טוגל לתפריט הצד
    sidebar.classList.toggle("open");

    // שינוי אייקון כפתור המבורגר
    if (sidebar.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times"); // X כשפתוח
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars"); // חזרה להמבורגר
    }
}


