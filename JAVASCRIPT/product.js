(() =>
{
    const getProducts = async () => 
    {
        const res = await fetch("../products.json");
        const data = await res.json();
        const products = data.products;
        return products;
    }

    // Display products
    const displayProducts = (products, center) =>
    {
        let display = products.map(({title, image, price}) => 
        `
            <div class="product-box">
                <div class="product-header">
                    <div class="img-box" style="background-image: url(${image}); background-repeat: no-repeat; background-position: center center; background-size: cover; width: 25rem; height: 25rem;"></div>
                </div>
                <div class="product-footer">
                    <h3>${title}</h3>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="product-price">
                        <h4>$${price}</h4>
                    </div>
                    <ul>
                        <li><a href="#"><i class="fa fa-eye"></i></a></li>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-cart-plus"></i></a></li>
                    </ul>
                </div>
            </div>
        `);
        display = display.join("");
        center.innerHTML = display;
    }


    // Filter product
    const cateContainer = document.querySelector(".sort-category");
    const filterBtns = [ ... document.querySelectorAll(".filter-btn")];

    // console.log(filterBtns);
    if(cateContainer)
    {
        cateContainer.addEventListener("click", async(event) =>
        {
            const target = event.target.closest(".section-title");
            if(!target) return;

            const getID = target.getAttribute("data-id");
            const products = await getProducts();

            if(getID)
            {
                filterBtns.forEach(item => 
                {
                    item.classList.remove("active");   
                });
                target.classList.add("active");
            }
        });
    }

    // filtercontainer.addEventListener("click", (event) =>
    // {
    //     if(event.target.classList.contains("filter-btn"))
    //     {
            
    //     }
    // });

})();