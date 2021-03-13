/*------------------------------ Open navbar ------------------------------*/
(() =>
{
    const nav = document.querySelector(".nav-menu"),
    navigation = document.querySelector(".navigation"),
    openBtn = document.querySelector(".hamburger"),
    closeBtn = document.querySelector(".close");

    // Open Menu
    openBtn.addEventListener("click", () =>
    {
        navigation.classList.add("show");
        nav.classList.add("show");
        document.body.classList.add("show");
    });

    closeBtn.addEventListener("click", () =>
    {
        navigation.classList.remove("show");
        nav.classList.remove("show");
        document.body.classList.remove("show");
    });

    

    // Fix navbar
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () =>
    {
        if(window.pageYOffset > 1)
        {
            header.classList.add("fix-nav");
        }
        else
        {
            header.classList.remove("fix-nav");
        }
    });
})();



/*------------------------------ Popup ------------------------------*/
(() =>
{
    const popup = document.querySelector(".popup");
    const closePopup = document.querySelector(".popup-close");

    window.addEventListener("load", () =>
    {
        setTimeout(() => { popup.classList.add("show"); }, 3000);
    });

    closePopup.addEventListener("click", () =>
    {
        popup.classList.remove("show");
    });
})();



/*------------------------------ To Top ------------------------------*/
(() =>
{
    const toTop = document.querySelector(".to-top");

    window.addEventListener("scroll", () =>
    {
        if(window.pageYOffset > 150)
        {
            toTop.classList.add("active");
        }
        else
        {
            toTop.classList.remove("active");
        }
    });
})();