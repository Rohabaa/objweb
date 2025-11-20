var beautyproducts = {
    skincareproduct: {
        Jenepharm: {
            cleanserwash: {
                name: "Dermive Moisturizing Wash",
                price: 1198,
                vol: 100,
                src: "https://jenpharm.com/cdn/shop/files/b-a-images-680x690_1.jpg?v=1760008805",
                description: "Ideal for dry, eczema prone skin. Cleanses skin effectively.  Provides hydration.  Repairs skin barrier.  Soothes inflamed skin."
            },
            moisturizer: {
                name: "Dermive Oil Free Moisturizer",

                price: 998,
                vol: 100,
                src: "https://jenpharm.com/cdn/shop/files/b-a-main-images-680x690.jpg?v=1757332758",
                description: "Calms and soothes skin.  Provides hydration without feeling sticky.  Light weight. Protects skin against UV rays. Makes skin plump"
            },
            SunBlock: {
                name: "Spectra Block SPF60",

                price: 998,
                vol: 40,
                src: "https://jenpharm.com/cdn/shop/files/b-a-images-680x690_fd483543-d6bf-4e3b-8c7d-e105d44fc1a1.jpg?v=1757332748",
                description: "Contains SPF 60 ,Broad Spectrum Sunblock  ,No White Cast ,Prevents Premature Aging  ,Shine Free  Suitable for Face and Body"
            },
            cream: {
                name: "Maxdif Brightening Cream",
                price: 1498,
                vol: 40,
                src: "https://jenpharm.com/cdn/shop/files/b-a-maxdif-main-images-680x690-_1.jpg?v=1757332741",
                description: " 97% saw even skin tone and brighter skin  ,93% saw reduced post-breakout dark spots. ,90% saw reduced hyperpigmentation.,Clinically proven to reduce dark patches. "
            }

        },
        organictraveller: {
            moisturizer: {
                name: "Brightening Moisturizer",
                price: 2000,
                vol: 50,
                src: "https://organictraveller.store/cdn/shop/files/BM_be1ee7d1-bf1b-4aa0-b3a4-c64081c86793.png?v=1762916695&width=1200",
                description: "1. Treats skin discoloration which can appear on your cheeks, chin or forehead 2. Fades dark spots  3. Fights skin hyperpigmentation"

            },
            sunscreen: {
                name: "Barrier Hydrate Sunscreen",
                price: 2000,
                vol: 60,
                src: "https://organictraveller.store/cdn/shop/files/BHS_4d45246f-3cb8-478e-b2f0-b16da76c6637.png?v=1762916430&width=1200",
                description: "* Broad-spectrum SPF 40 PA+++ protection, * Hybrid (mineral + chemical) filters for high performance + comfort *"
            },
            toner: {
                name: "Glow Tonic: Pore minimising toner",
                price: 1599,
                vol: 150,
                src: "https://organictraveller.store/cdn/shop/files/GT_b3aadaa8-7e9e-4aeb-9363-b11fa6b27ef4.png?v=1762917131&width=1200",
                description: "* Tightens and reduces pore size ,Replenishes and balances skins natural moisture level  Removes dead skin cells Adds natural glows ,Antibacterial"
            },
            serums: {
                name: "Super C: Vitamin C serum",
                price: 2099,
                vol: 50,
                src: "https://organictraveller.store/cdn/shop/files/Artboard_7_fa3961da-684d-4e0b-a14c-9800ee13d235.png?v=1763106749&width=1200",
                description: "     Fights free radicals  ,Brightens hyperpigmentation ,Stimulates collagenproduction,Reverses oxidative damage ,Diminishes the appearance of fine lines and wrinkles"

            }
        },
        CeraVe: {
            facewash: {
                name: "Hydrating Foaming Oil Cleanser",
                price: 1599,
                src: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/products/hydrating-foaming-oil-cleanser/hydrating-foaming-oil-cleanser-cleanser_front.jpg?rev=0485cf4c9d554e5faf1a831ddb5425a0&w=900&hash=C36FB47AA33D43B0FCC9DA9CCBA3CC9B",
                description: "  this cleanser is perfect for all skin types—a rarity in the cleanser aisle! It leaves my patients’ skin clean, removing all makeup, dirt and debris without over-drying."

            },
            moisturizer: {
                name: "Ultra-Light Moisturizing Gel",
                price: 199,
                src: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/skincare/moisturizers/facial-moisturizers/ultra-light-moisturizing-gel/ultra-light-moisturizing-gel_front.jpg?rev=224096b1aaad41f68bc4b46f39af988c&w=900&hash=507023F84C78F3A6572F17FB03222CBD",
                description: "  Moisturizing Gel is like giving my skin a drink of water. The cool gel texture is exactly the kind of thing I would want to put on my face in the summer."

            },
            EyeCream: {
                name: " Eye Repair Cream",
                price: 199,
                src: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/products/eye-repair-cream/700x785_v2024/57278fce7a30ee57bf6279eb1d561a56b1464fdc-700x785-v1.jpg?rev=1393f4a48ac44a36ac517adaad484c73&sc_lang=en-us&w=900&hash=25620B417AD63E1B1C4F5D199C2F194D",
                description: "  Hyaluronic acid improves hydration of the epidermis by binding to water and giving the skin a plump, hydrated appearance."
            }
        }
    },
    makeup: {},
    haircare: {},
    bodycare: {},
    fragnance: {},
}
for (products in beautyproducts) {
    // console.log(products);
    for (brands in beautyproducts[products]) {
        // console.log(brands);
        for (items in beautyproducts[products][brands]) {
            // console.log(items);
            var allprod = document.getElementById("allproducts")
                allprod.innerHTML += `<div class="col">
    <div class="card">
      <img src="${beautyproducts[products][brands][items].src}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${beautyproducts[products][brands][items].name}</h5>
        <p class="card-text">${beautyproducts[products][brands][items].description}.</p>
      </div>
      <div class="card-footer">
        <h5 class="price">Rs.${beautyproducts[products][brands][items].price}/-</h5>
      </div>
    </div>
  </div>`
            
        }
    }



}