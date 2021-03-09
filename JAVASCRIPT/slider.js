// Slider
(() =>
{
    const slider1 = document.getElementById("glide1");
    if(slider1)
    {
        new Glide(slider1, 
        {
            type: "carousel",
            startAt: 0,
            perView: 1,
            autoPlay: true,
            hoverpause: true,
            animationDuration: 900,
            animationTimingFunc: "linear"
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
            autoPlay: true,
            hoverpause: false,
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