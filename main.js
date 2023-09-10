let menu = document.querySelector(".menu")
let ul = document.querySelectorAll("header .links .ul li")
let page = document.querySelector(".page")
let closePage = document.querySelector(".close")

let overLow = document.querySelector(".overlow")
let iconShop = document.querySelector(".icon-shop")
// get
let shop = document.querySelector(".shop")
let price = document.querySelector(".price")
let discount = document.querySelector(".discount")
let discountTotal = document.querySelector(".discount-total")
let add = document.querySelector(".content .add");
let counter = document.querySelector(".counter")
let finalPrice = document.querySelector(".final-price")
let overImage = document.querySelector(".over-image");
let images = document.querySelector(".images");
let imagesTwo = document.querySelector(".imagestwo")

let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let number = document.querySelector(".number")
let arrLeft = document.querySelector(".arr-left")
let arrRight = document.querySelector(".arr-right")

let arrLeft2 = document.querySelector(".arr-left2")
let arrRight2 = document.querySelector(".arr-right2")

let count = 1;
let main = document.querySelector(".main")
let main2 = document.querySelector(".main2")

let close2 = document.querySelector(".close2")


let containImages = document.querySelectorAll(".contain-images .imgs img")
let containImages2 = document.querySelectorAll(".imagestwo .imgs2 img")
let tmp;
// let shopBox;

let imgs;
// let mainImg;


// let dataPro = []
let dataPro;
if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product)
} else {
    dataPro = []
}

add.onclick = function() {
    createElement()
}

function createElement() {
    let data = {
        img: `${imgs}`,
        // img: "images/image-product-1-thumbnail.jpg",
        title: `Fall Limited Edition Sneakers`,
        price: price.textContent,
        discount: "50%",
        number: number.textContent,
        discountTotal: price.textContent * number.textContent,
    }
    dataPro.push(data)
    localStorage.setItem("product", JSON.stringify(dataPro))
    showData()
}

let addImage = document.querySelector(".addImage")


// Start Center imgs 
function addImg() {
    addImage.onclick = function() {
        arrLeft2.style.cssText = 'display: block; z-index: 1001;color:white;'
        arrRight2.style.cssText = 'display: block; z-index: 1001;color:white;'
        imagesTwo.style.cssText = 'display: block; z-index:1000;';
        overImage.style.cssText = 'position: absolute;top: 0;left: 0;width: 100%;height: 654px;background-color: rgb(0 0 0 / 80%);z-index: 10; display:block;';
    };
}

function removeImg() {
    close2.onclick = function() {
        imagesTwo.style.cssText = 'display: none;'
        overImage.style.cssText = 'display:none;';
    };
}

function showData() {
    let table = ''
    for (let i = 0; i < dataPro.length; i++) {
        table += `
        <div class="line" style="text-align:left;color:black;">Cart</div>
        <div class="box" style="position: relative; top:-50px;margin-bottom:-85px; width: 380px;">
            <div class="" style="width: 370px;">
                <div class="d-flex">
                    <img class="rounded mt-5" src="${dataPro[i].img}" alt="">
                    <div class="info ms-3 mt-5" style="color: #777;text-align: left;">
                        <span class"">${dataPro[i].title}</span>
                        <div>
                            $${dataPro[i].price}.00 * ${dataPro[i].number + " =" }
                            <span class="final-price" style="font-weight: bold; color:black;">$${dataPro[i].discountTotal}.00
                            </span>
                        </div>
                    </div>
                    <i class="trash bi bi-trash3 ms-4 pt-4 text-right" style="margin-top: 55px;color:#acaeb1; cursor: pointer;"></i>
                </div>
                <button class="button btn btn-lg px-5 mt-4" style="background-color: #ff7d1b; color: white; margin-bottom: -20px;width: 100%;">checkout</button>
            </div>
        </div>
        `
        let box = document.querySelectorAll(".box")
        // shopBox = box
        tmp = i
    } 
    shop.innerHTML = table
    
    heightScroll()
    deleteElements()
    ContainImg()

    // shop.style.width = '415px';
    
    function deleteElements() {
    const trashIcons = document.querySelectorAll('.trash');
    // Add event listeners to the trash icons
    trashIcons.forEach((trash, index) => {
            trash.addEventListener('click', function() {
                dataPro.splice(index, 1)
                localStorage.product = JSON.stringify(dataPro)
                showData()
            });
        });
    }
}
showData()

function ContainImg() {
    containImages.forEach((img)=>{
        img.addEventListener("click", (e) =>{
            main.src = img.src
        if (e.target === img) {
            imgs = img.src
        } else {
            imgs = main.src
        }
        containImages.forEach((image)=> {
            image.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
    })
    })
    containImages2.forEach((img)=>{
        img.addEventListener("click", (e) =>{
        if (e.target === img) {
            imgs = img.src
            main2.src = img.src
        } 
        // else {
        //     imgs = "images/image-product-1.jpg"
        //     main2.src = imgs;
        // }
        containImages2.forEach((image)=> {
            image.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
        // localStorage.setItem("activeImg", e.currentTarget.classList);
        // localStorage.setItem("activeImg", e.currentTarget.classList)
    })
    })
}
// function ContainImg() {
//     containImages.forEach((img) => {
//         img.addEventListener("click", (e) => {
//             main.src = img.src;
//             containImages.forEach((image) => {
//                 image.classList.remove('active');
//             });
//             e.currentTarget.classList.add('active');
//             localStorage.setItem("activeImg", e.currentTarget.classList);
//         });
//     });

//     // Retrieve the active class from localStorage when the page is loaded
//     const activeClass = localStorage.getItem("activeImg");
//     if (activeClass) {
//         const activeImage = document.querySelector(`.${activeClass}`);
//         if (activeImage) {
//             activeImage.classList.add('active');
//         }
//     }
// }

// Start open and close menu
function clickMenu() {
    menu.onclick = function() {
        page.style.display = 'block'
        overLow.style.display = 'block'
    }
} 
function closeMenu() {
    closePage.onclick = function() {
        page.style.display = 'none'
        overLow.style.display = 'none'
    }
}
// End open and close menu

// Start Open Shop
function openShop() {
    iconShop.onclick = function() {
        shop.classList.toggle('yes')
        // box.style.cssText = 'width: 415px;'
    }
}
// End Open Shop


openShop()
clickMenu()
closeMenu()
addImg();
removeImg()
increase()

// Start Increase Numbers
function increase() {
    number.innerHTML = 1
    plus.onclick = function() {
        number.innerHTML++
    }
    decrease()
}
function decrease() {
    minus.onclick = function() {
        number.innerHTML--
    }
}
// End Increase Numbers

// Start Scroll 
function heightScroll() {
    if (dataPro.length === 0) {
        shop.style.cssText = 'height: 230px;'
        let shoptext = document.createElement("div")
        shoptext.textContent = 'Your cart is empty'
        shoptext.className = 'shoptext'
        shop.appendChild(shoptext)
        let shoptext2 = document.createElement("div")
        shoptext2.textContent = 'Cart'
        shoptext2.className = 'shoptext2'
        shop.appendChild(shoptext2)
    } else if (dataPro.length === 1){
        shop.style.cssText = 'width:387px;height: auto; height: 250px;'
    } else if (dataPro.length === 2) {
        shop.style.cssText = 'width:387px;height: auto; height: 430px;'
    } else {
        shop.style.cssText = 'width:415px;height: auto; height: 500px; overflow-y:auto;'
    }
} 
showData()
// End Scroll 

// Start Next image 1
arrRight.onclick = function() {
fetch(`/index.json`)
    .then((response)=> response.json())
    .then((repositories)=> {
        let imgMain = document.querySelector(".img-main")
            if (arrRight.onclick) {
                if (count < repositories.length) {
                    let image = document.createElement("img");
                    image.src = repositories[count].src;
                    imgs = image.src;
                    image.style.cssText = 'width: 400px; border-radius: 8px;'
                    imgMain.innerHTML = '';
                    imgMain.appendChild(image);
                    count++;
                }
            }
    })
}
arrLeft.onclick = function() {
if (count > 0) {
    count-- 
    fetch(`/index.json`)
    .then((response)=> response.json())
    .then((repositories)=> {
        let imgMain = document.querySelector(".img-main")
            if (arrRight.onclick) {
                if (count < repositories.length) {
                    let image = document.createElement("img");
                    imgs = image.src;
                    image.src = repositories[count].src;
                    image.style.cssText = 'width: 400px; border-radius: 8px;'
                    imgMain.innerHTML = '';
                    imgMain.appendChild(image);
                }
            }
    })
}
// End Next Image 1

// Start Next image 2
}
arrRight2.onclick = function() {
fetch(`/index.json`)
    .then((response)=> response.json())
    .then((repositories)=> {
        let imgMain = document.querySelector(".img-main2")
            if (arrRight2.onclick) {
                if (count < repositories.length) {
                    let image = document.createElement("img");
                    image.src = repositories[count].src;
                    imgs = image.src;
                    image.style.cssText = 'width: 350px; border-radius: 8px;'
                    imgMain.innerHTML = '';
                    imgMain.appendChild(image);
                    count++;
                }
            }
    })
}
arrLeft2.onclick = function() {
if (count > 0) {
    count-- 
    fetch(`/index.json`)
    .then((response)=> response.json())
    .then((repositories)=> {
        let imgMain = document.querySelector(".img-main2")
            if (arrRight2.onclick) {
                if (count < repositories.length) {
                    let image = document.createElement("img");
                    imgs = image.src;
                    image.src = repositories[count].src;
                    image.style.cssText = 'width: 350px; border-radius: 8px;'
                    imgMain.innerHTML = '';
                    imgMain.appendChild(image);
                }
            }
    })
}
}

// End Next Image 2