var newMenu = [
    {
        "sys": { "id": "1" },
        "fields": {
            "title": "Chicken Mandi",
            "category": "Rice",
            "price": "150",
            "caleories": "220 - 280 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/cmandi.jpg" } } }
        }
    },
    {
        "sys": { "id": "2" },
        "fields": {
            "title": "Biryani",
            "category": "Rice",
            "price": "80",
            "caleories": "250 - 300 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/biryani.jpg" } } }
        }
    },
    {
        "sys": { "id": "3" },
        "fields": {
            "title": "Fried rice",
            "category": "Rice",
            "price": "150",
            "caleories": "320 - 400 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/friedrice.webp" } } }
        }
    },
    {
        "sys": { "id": "4" },
        "fields": {
            "title": "Sandwitch",
            "category": "Snacks",
            "price": "45",
            "caleories": "250 - 300 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/sandwich2.jpg" } } }
        }
    },
    {
        "sys": { "id": "5" },
        "fields": {
            "title": "Sadhya",
            "category": "Meals",
            "price": "130",
            "caleories": "230 - 285 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/sadya.jpeg" } } }
        }
    },
    {
        "sys": { "id": "6" },
        "fields": {
            "title": "Chicken fry",
            "category": "Fried foods",
            "price": "100",
            "caleories": "150 - 280 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/chickenk.jpeg" } } }
        }
    },
    {
        "sys": { "id": "7" },
        "fields": {
            "title": "Fish fry",
            "category": "Fried foods",
            "price": "80",
            "caleories": "165 - 225 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/fishfry.jpeg" } } }
        }
    },
    {
        "sys": { "id": "8" },
        "fields": {
            "title": "Egg fry",
            "category": "Fried foods",
            "price": "30",
            "caleories": "170 - 220 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/efry.webp" } } }
        }
    },
    {
        "sys": { "id": "9" },
        "fields": {
            "title": "Watermelon juice",
            "category": "Beverages",
            "price": "40",
            "caleories": "190 - 230 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/wjuice.webp" } } }
        }
    },
    {
        "sys": { "id": "10" },
        "fields": {
            "title": "Orange juice",
            "category": "Beverages",
            "price": "45",
            "caleories": "175 - 235 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/ojuice.jpeg" } } }
        }
    },
    {
        "sys": { "id": "11" },
        "fields": {
            "title": "Mango juice",
            "category": "Beverages",
            "price": "35",
            "caleories": "120 - 185 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/mjuice.webp" } } }
        }
    },
    {
        "sys": { "id": "12" },
        "fields": {
            "title": "pineapple juice",
            "category": "Beverages",
            "price": "45",
            "caleories": "135 - 210 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/pjuice.webp" } } }
        }
    },
    {
        "sys": { "id": "13" },
        "fields": {
            "title": "grape juice",
            "category": "Beverages",
            "price": "40",
            "caleories": "140 - 156 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/gjuice.jpg" } } }
        }
    },
    {
        "sys": { "id": "14" },
        "fields": {
            "title": "tea",
            "category": "Beverages",
            "price": "10",
            "caleories": "241 - 321 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/tea.webp" } } }
        }
    },
    {
        "sys": { "id": "15" },
        "fields": {
            "title": "coffee",
            "category": "Beverages",
            "price": "20",
            "caleories": "265 - 321 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/coffee.webp" } } }
        }
    },
    {
        "sys": { "id": "16" },
        "fields": {
            "title": "chicken curry",
            "category": "Curry",
            "price": "100",
            "caleories": "155 - 210 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/ccurry.jpeg" } } }
        }
    },
    {
        "sys": { "id": "17" },
        "fields": {
            "title": "egg curry",
            "category": "Curry",
            "price": "35",
            "caleories": "155 - 210 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/ecurry.jpg" } } }
        }
    },
    {
        "sys": { "id": "18" },
        "fields": {
            "title": "fish curry",
            "category": "Curry",
            "price": "35",
            "caleories": "155 - 210 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/fishcurry.jpg" } } }
        }
    },
    {
        "sys": { "id": "19" },
        "fields": {
            "title": "Cream bun",
            "category": "Snacks",
            "price": "35",
            "caleories": "255 - 360 Kcal",
            "image": { "fields": {"file": { "url": "assets/images/cream bun.jpg" } } }
        }
    },

]

// Menu Section -
const menuSection = document.querySelector('.menu-section');
// Menu Filter Buttons -
const menuFilterBtns = document.querySelectorAll('#menu-filter');

function filtering(addToCartBtn){
    // Menu Items Filteration
    menuFilterBtns.forEach( btn => {
        btn.addEventListener('click', (e)=>{
            const Category = e.currentTarget.dataset.id;

            // Current Btn Indication - 
            btn.classList.add('current')
            menuFilterBtns.forEach(i =>{
                if(i.dataset.id != Category){i.classList.remove('current')}
            })

            // Filtering Menu Items -
            addToCartBtn.forEach(item => {
                let id = item.dataset.id;
                let menuItemClass = item.parentElement.parentElement.parentElement.parentElement
                if (Category === newMenu[id-1].fields.category){
                    menuItemClass.classList.remove('display-none')
                    menuItemClass.classList.add('show')
                }
                if (Category != newMenu[id-1].fields.category){
                    menuItemClass.classList.add('display-none')
                }
                if (Category === 'all'){
                    menuItemClass.classList.remove('display-none')
                    menuItemClass.classList.add('show')
                }
            })
        })
    })
}

// Function To Create Menu Cards & Add to HTML
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `
        <article class="menu-item">
            <img src="${item.fields.image.fields.file.url}" loading="lazy" alt="Product image">
            <div class="item-info">
            <figure>
                <h2>${item.fields.title}</h2>
                <div class="item-category">${item.fields.category}</div>
                <div class="flex" style="margin-top: 10px;">
                    <i class="fas fa-fire"></i>
                    <p>${item.fields.caleories}</p>
                </div>
            </figure>
            <hr style="margin: 10px 0;">
            <div class="menu-cart-functionality">
                <div class="price">&#8377;${item.fields.price}</div>
                <div class="cart-btn-container">
                    <button class="bag-btn" id="add-to-cart-btn" data-id=${item.sys.id}>Add to Cart</i></button>
                </div>
            </div>
            </div>
        </article>
        `;
    });

    displayMenu = displayMenu.join('');
    if (menuSection) {menuSection.innerHTML = displayMenu;}
}

// ------------------ Menu.html Menu Cards END ------------------------

// ---------------- Cart Functioning ----------------
// Inside Cart Container
const cartItemsContainer = document.querySelector('.cart-items-container');
// Nav Cart Items Indicator
const cartItems = document.querySelector('.cart-items');
// Total Bill
const cartTotal = document.querySelector('.cart-total');

// Clear Cart Btn
const clearCart = document.querySelector('.clear-cart');

// Clear Cart Btn
const checkOutBtn = document.querySelector('.check-out');

// Nav Cart btn Values
const cartValues = document.querySelectorAll('#cart-values');

// Item Quantity -
var quantity = 1;

// Cart
var addItem = [];

// Add Id & quantity of Food Item - 
function foodItemCartBtn(data_id, quantity, trimedEmailID, addItem){
    // Add Food ID to object
    var product = {
        FoodID: data_id,
        Quantity: quantity
    }
    // add that to last position
    addItem.push(product);

    if (addItem.length != 0){
        // Save to Firebase DB
        firebase.database().ref('Users_Carts/' + trimedEmailID + '_Cart').set({
            Details: addItem,
            Total_Amount: 0
        });
    }
}

// Add Items in User Cart -
function showUserCart(addItem, trimedEmailID){

    let totalAmount = 0;
    let No_of_Item = 0;
  
    // Remove All Stored Previous items
    cartItemsContainer.innerHTML = ''

    addItem.forEach(item => {
        let id = item.FoodID - 1;
        // Quantity of Current Item
        let quantity = item.Quantity;
        No_of_Item += quantity;
        // Menu Fields
        let inMenu = newMenu[id].fields;
        // Total Amount Calc
        totalAmount = totalAmount + (quantity * inMenu.price);
        // Creating Cart Item in Cart
        var div = document.createElement('article');
        div.classList.add('cart-item')
        div.innerHTML = `
            <div><img src="${inMenu.image.fields.file.url}" alt="Food item image"></div>
            <div class="cart-info">
                <h3 id'c-title'>${inMenu.title}</h3>
                <p>&#8377;${inMenu.price}</p>
                <span class="remove-item" data-id=${id+1}>remove</span>
            </div>
            <div class="flex-column"> 
                <i class="fas fa-chevron-up" data-id=${id+1}></i>
                <p class="item-amount">${item.Quantity}</p>
                <i class="fas fa-chevron-down" data-id=${id+1}></i>
            </div>
        ` 
        cartItemsContainer.appendChild(div);
    })

    // Set Total Amount Value in Firebase DB & UI-
    firebase
    .database()
    .ref('Users_Carts/' + trimedEmailID + '_Cart')
    .update({Details: addItem, Total_Amount: totalAmount})
    // UI
    cartTotal.innerHTML = totalAmount;
    cartValues.forEach(values=>{values.innerHTML = No_of_Item;})

    // If user orders than send cart to orders
    userCart = { Details: addItem, Total_Amount: totalAmount }
    return userCart
}

// User Operations in Cart
function cartFunctionalities (addItem, trimedEmailID, addToCartBtn){
    // In Cart Buttons & Functionalities -
    cartItemsContainer.addEventListener('click', event => {
        // When Remove Btn is clicked
        if (event.target.classList.contains('remove-item')){
            let removeBtn = event.target;
            let id = removeBtn.dataset.id;

            // Remove Item From Array -
            addItem.forEach(item => {
                if (item.FoodID === id){ 
                    addItem.splice(addItem.indexOf(item) ,1) 
                    if ( window.location != 'https://mescecanteen.netlify.app/user-orders.html'){
                        // Enable removed items btn
                        addToCartBtn[item.FoodID-1].disabled = false;
                        addToCartBtn[item.FoodID-1].innerHTML = 'Add to Cart';
                    }
                    if (addItem.length === 0){
                        cartItemsContainer.innerHTML = '';
                        cartValues.forEach(values => { values.innerHTML = '0';})
                        cartTotal.innerHTML = '0';
                        
                        // Remove in Firebase DB
                        firebase
                        .database()
                        .ref('Users_Carts/' + trimedEmailID + '_Cart')
                        .remove()
                    }
                }
            })

            // If last element in cart if removed - 
            if (addItem.length === 0){ 
                cartItemsContainer.innerHTML = '';
                cartValues.forEach(values => { values.innerHTML = '0';})
            }
            
            // Remove (i.e update) In Firebase DB
            firebase
            .database()
            .ref('Users_Carts/' + trimedEmailID + '_Cart')
            .update({Details: addItem})
        }
        // When Add Quantity is clicked
        else if (event.target.classList.contains('fa-chevron-up')){
            let addAmount = event.target;
            let id = addAmount.dataset.id;

            // Update Array -
            addItem.forEach(item => {                
                if (item.FoodID === id){
                    item.Quantity += 1;
                }
            })
            // Update in Firebase DB
            firebase.database()
            .ref('Users_Carts/' + trimedEmailID + '_Cart')
            .update({ Details: addItem })
        }
        // When lower Quantity is clicked
        else if (event.target.classList.contains('fa-chevron-down')){
            let lowerAmount = event.target;
            let id = lowerAmount.dataset.id;

            // Update Array -
            addItem.forEach(item => {                
                if (item.FoodID === id && item.Quantity >= 1){
                    item.Quantity -= 1;
                    if (item.Quantity === 0){
                        if ( window.location != 'https://mescecanteen.netlify.app/user-orders.html'){
                            // Enable Buttons - so user can use them again
                            // Enable removed items btn
                            addToCartBtn[item.FoodID-1].disabled = false;
                            addToCartBtn[item.FoodID-1].innerHTML = 'Add to Cart';
                        }
                        // Update Array -
                        addItem.splice(addItem.indexOf(item) ,1);
                        if (addItem.length === 0){
                            cartItemsContainer.innerHTML = '';
                            cartValues.forEach(values => { values.innerHTML = '0';})
                            cartTotal.innerHTML = '0';
                            // Remove in Firebase DB
                            firebase
                            .database()
                            .ref('Users_Carts/' + trimedEmailID + '_Cart')
                            .remove()
                        }
                    }
                }
            })

            // Update in Firebase DB
            firebase
            .database()
            .ref('Users_Carts/' + trimedEmailID + '_Cart')
            .update({ Details: addItem })
        }
    })
}

// Remove all items in cart
function clearUserCart(addItem, addToCartBtn, trimedEmailID){
    cartItemsContainer.innerHTML = '';
    cartValues.forEach(values => { values.innerHTML = '0';})
    cartTotal.innerHTML = '0';
    if ( window.location != 'https://mescecanteen.netlify.app/user-orders.html'){
        // Enable removed items btn
        addItem.forEach(item=>{
            addToCartBtn[item.FoodID-1].disabled = false;
            addToCartBtn[item.FoodID-1].innerHTML = 'Add to Cart';
        })
    }

    // Empty Local Cart 
    addItem = []

    // Update in Firebase DB
    firebase
    .database()
    .ref('Users_Carts/' + trimedEmailID + '_Cart')
    .remove()
}

// User Order's Management -
function userOrderManagement (trimedEmailID , userCart, userEmailID){

    const orderDate = new Date().toLocaleDateString();
    var orderTime = new Date().toLocaleTimeString();
    // To check AM or PM
    var hours = new Date().getHours();
    // Check AM or PM
    if ( hours >= 12){ orderTime = orderTime + ' PM' }
    else { orderTime = orderTime + ' AM' }
    
    // Current Order
    let current_order = {
        Email_ID: userEmailID,
        Order_Status: true,
        User_Cart: userCart,
        Payment_Status: false,
        Delivery_Status: false,
        Order_Date: orderDate,
        Order_Time: orderTime,
    }

    // Add Current Order To User Orders list 
    firebase.database()
    .ref('Users_Order/' + trimedEmailID + '_Orders')
    .push(current_order);
}

// Main.js When Content Loaded
document.addEventListener('DOMContentLoaded', () =>{
    // Client UI
    displayMenuItems(newMenu);
    showUserCart(addItem)
    const addToCartBtn = document.querySelectorAll('#add-to-cart-btn');
    // Menu Filtering items
    filtering(addToCartBtn)
    ClientDataFlow(addToCartBtn)
});

// When User Loggin and Do Stuff
function ClientDataFlow(addToCartBtn){
    // When User Is logged In
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const userEmailID = user.email
            var trimedEmailID = makeUserDataID(userEmailID);
            console.log(trimedEmailID);

            // Get Cart Items already stored
            firebase.database()
            .ref('Users_Carts/' + trimedEmailID + '_Cart')
            .on('value', function(snapshot){
                if (snapshot.exists()){
                    var userCart = snapshot.val().Details;
                    // Empty Array
                    addItem = []
                    for (let i = 0; i< userCart.length; i++){
                        // Store previouly added items to array -
                        addItem.push(userCart[i])
                        // Disable already added items
                        if (window.location != 'https://mescecanteen.netlify.app/user-orders.html'){
                            addToCartBtn[userCart[i].FoodID-1].disabled = true;
                            addToCartBtn[userCart[i].FoodID-1].innerHTML = 'In Cart';
                        }
                    }
                    cartFunctionalities(addItem, trimedEmailID, addToCartBtn);
                    showUserCart(addItem, trimedEmailID);
                }
            })
            
            // Cart Buttons -
            if (addToCartBtn){
                addToCartBtn.forEach(btn => {
                    btn.addEventListener('click', ()=> {
                        var quantity = 1;
                        const data_id = btn.dataset.id;
                        // Set Values In Firebase DB
                        foodItemCartBtn(data_id, quantity, trimedEmailID, addItem);
                    });
                });
            }

            // Remove all items from Cart -
            clearCart.addEventListener('click', ()=>{
                clearUserCart(addItem, addToCartBtn, trimedEmailID);
                addItem = []
            })

            // User Check Out's -
            checkOutBtn.addEventListener('click', ()=>{
                // Check If Cart is Empty or not -
                if (addItem.length != 0){
                    // Order
                    let userCart = showUserCart(addItem, trimedEmailID);
                    userOrderManagement(trimedEmailID, userCart, userEmailID);
                    // Empty User Cart
                    cartItemsContainer.innerHTML = '';
                    clearUserCart(addItem, addToCartBtn, trimedEmailID);
                    addItem = []
                    Swal.fire({
                        icon: 'success',
                        title: 'Order Successfully Recorded',
                    });
                    window.setTimeout(function(){
                        window.location.replace('https://mescecanteen.netlify.app/user-orders.html')
                    }, 2600)
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Empty Cart: Add Some items in Cart',
                    })
                }
            })

            // Shows Orders
            if (window.location.href === 'https://mescecanteen.netlify.app/user-orders.html'){
                setOrderDetails(trimedEmailID)
            }
        } else {
        console.log('no user logged in');
        }
    });
}