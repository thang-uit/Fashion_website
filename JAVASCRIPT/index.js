(() =>
{
    const nav = document.querySelector(".nav-menu"),
    navigation = document.querySelector(".navigation"),
    openBtn = document.querySelector(".hamburger"),
    closeBtn = document.querySelector(".close");

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
})();
