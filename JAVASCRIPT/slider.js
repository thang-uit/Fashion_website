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
            animationDuration: 1000,
            animationTimingFunc: "linear"
        }).mount();
    }
})();