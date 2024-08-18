let products=[
    {
    image:'adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name:'Adult Plain T-shirt - 2pack',
    rating:{
        star:3.5,
        count:86
    },
    priceCents:1090
},
{
    image:'plain-hooded-fleece-sweatshirt-yellow.jpg',
    name:'Plain hooded fleece sweatshirt yellow',
    rating:{
        star:4,
        count:46
    },
    priceCents:846
},
{ image:'umbrella.jpg',
    name:'umbrella',
    rating:{
        star:3.5,
        count:34
    },
    priceCents:525
},
{ image:'intermediate-composite-basketball.jpg',
    name:'Intermediate Composite Basketball',
    rating:{
        star:3.5,
        count:34
    },
    priceCents:525
},
{ image:'men-athletic-shoes-green.jpg',
    name:'Men athletic shoes with Green line',
    rating:{
        star:4.5,
        count:77
    },
    priceCents:2370
},
{ image:'men-navigator-sunglasses-brown.jpg',
    name:'Men Navigator Sunglasses Brown- 2 pair',
    rating:{
        star:3,
        count:32
    },
    priceCents:780
},
{ image:'facial-tissue-2-ply-18-boxes.jpg',
    name:'Facial Tissue 2 ply 18 Boxes',
    rating:{
        star:4.5,
        count:56
    },
    priceCents:530
},
{ image:'trash-can-with-foot-pedal-50-liter.jpg',
    name:'Trash Can with foot pedal 50 liter',
    rating:{
        star:2.5,
        count:23
    },
    priceCents:3077
},
{ image:'electric-glass-and-steel-hot-water-kettle.webp',
    name:'Electric glass and steel hot water kettle',
    rating:{
        star:4,
        count:87
    },
    priceCents:77
},
{ image:'men-chino-pants-beige.jpg',
    name:'Men chino pants beige 2-pairs',
    rating:{
        star:5,
        count:115
    },
    priceCents:6060
},
{ image:'liquid-laundry-detergent-plain.jpg',
    name:'Liquid laundry detergent plain',
    rating:{
        star:2.5,
        count:35
    },
    priceCents:1287
},
{ image:'backpack.jpg',
    name:'Backpack full of black with 2 holders',
    rating:{
        star:4,
        count:87
    },
    priceCents:6507
},
{ image:'vanity-mirror-silver.jpg',
    name:'vanity mirror silver',
    rating:{
        star:2.5,
        count:36
    },
    priceCents:3287
},
{ image:'women-beach-sandals.jpg',
    name:'Women Beach Sandals',
    rating:{
        star:3.5,
        count:11
    },
    priceCents:2294
},
{ image:'women-chiffon-beachwear-coverup-black.jpg',
    name:'women chiffon beachwear coverup black',
    rating:{
        star:4.5,
        count:87
    },
    priceCents:5476
},
{ image:'women-chunky-beanie-gray.webp',
    name:'women chunky beanie gray',
    rating:{
        star:3.5,
        count:56
    },
    priceCents:934
},
{ image:'women-french-terry-fleece-jogger-camo.jpg',
    name:'women french terry fleece jogger',
    rating:{
        star:2.5,
        count:99
    },
    priceCents:534
},
{ image:'women-knit-ballet-flat-black.jpg',
    name:'women knit ballet flat black',
    rating:{
        star:4,
        count:26
    },
    priceCents:512
},
{ image:'women-stretch-popover-hoodie-black.jpg',
    name:'women stretch popover hoodie blackr',
    rating:{
        star:4.5,
        count:234
    },
    priceCents:7576
},
{ image:'6-piece-non-stick-baking-set.webp',
    name:'6-piece non stick baking set',
    rating:{
        star:3.5,
        count:12
    },
    priceCents:234
},
{ image:'6-piece-white-dinner-plate-set.jpg',
    name:'6-piece white dinner plate set',
    rating:{
        star:2.5,
        count:365
    },
    priceCents:124
}
]
let productsHTML=''
products.forEach((product)=>{
    productsHTML +=`<div class="products-container">
                    <div class="product-image-container">
                        <img class="product-image" src="${product.image}" alt="">
                    </div>
                    <div class="product-name">
                        ${product.name}
                    </div>
                    <div class="rating-con">
                            <img src="rating-${product.rating.star*10}.png" class="rating-star">
                            <div class="rating-count">${product.rating.count}</div>                    
                    </div>
                    <div class="product-price">
                        ${(product.priceCents /100).toFixed(2)}
                      </div>
                    <div class="products-qty">
                        <select>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option> 
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                        </select>
                    </div>
                    <button class="add-to-cart-btn">Add to cart</button>
                </div>`
})
document.querySelector('.js-grid').innerHTML=productsHTML;