// Slider
(() =>
{
    const slider = document.getElementById("glide1");
    if(slider)
    {
        new Glide(slider, 
        {
            type: "carousel",
            startAt: 0,
            perView: 1,
            autoplay: 4000,
            animationDuration: 900,
            animationTimingFunc: "linear",
        }).mount();
    }
})();



// Brand
(() =>
{
    const brand = document.getElementById("glide2");
    if(brand)
    {
        new Glide(brand, 
        {
            type: "carousel",
            startAt: 0,
            perView: 1,
            autoplay: 2000,
            perView: 5,
            animationDuration: 800,
            animationTimingFunc: "linear",
            breakpoints:
            {
                1200: 
                {
                    perView: 3,
                },
            },
        }).mount();
    }
})();