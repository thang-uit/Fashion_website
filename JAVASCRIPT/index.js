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
    window.addEventListener("scroll", () =>
    {
        if(window.pageYOffset > 1)
        {
            navigation.classList.add("fix-nav");
        }
        else
        {
            navigation.classList.remove("fix-nav");
        }
    });
})();



/*------------------------------ Popup ------------------------------*/
(() =>
{
    const popup = document.querySelector(".popup");
    const popupContent = document.querySelector(".popup-content");
    const closePopup = document.querySelector(".popup-close");

    window.addEventListener("load", () =>
    {
        setTimeout(() => { popup.classList.add("show"); }, 3000);
    });

    closePopup.addEventListener("click", () =>
    {
        popup.classList.remove("show");
    });

    popup.addEventListener("click", (event) =>
    {
        if(event.target.getAttribute("data-content") === 'popup')
        {
            popup.classList.remove("show");
            return;
        }
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



/*------------------------------ Search bar ------------------------------*/
(() =>
{
    const searchIcon = document.querySelector(".search-icon"),
    searchBar = document.querySelector(".search-bar"),
    searchCloseBtn = document.querySelector(".search-close");

    searchIcon.addEventListener("click", () =>
    {
        searchBar.classList.toggle("show");
    });

    searchCloseBtn.addEventListener("click", () =>
    {
        if(searchBar.classList.contains("show"))
        {
            searchBar.classList.remove("show");
            return;
        }
    });
})();