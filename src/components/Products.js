// Styles
import '../styles/Products.css';
import React, { useEffect, useState } from 'react';
// npm i react-responsive-carousel + styles
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


// Shopping Cart Content
const CartContent = ({cart, setCart}) => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='cart-header'>
            <div className='cart-header-content'>
                <div>
                    <a className='cart-link' onClick={() => setToggle(!toggle)} href>
                        <h3><i class='inline-icon shopping-icon material-icons'>shopping_cart</i>
                        Shopping Cart ({cart.length})</h3>
                    </a>
                </div>
            </div>
            <div>
                {toggle && (<ShoppingCart cart={cart} setCart={setCart}></ShoppingCart>)}
            </div>
        </div>
    )
}

// Shopping Cart
const ShoppingCart = ({cart, setCart}) => {

    // Change Amount to buy
    const changeAmount = (index, value) => {
        let backupCart = [...cart];
        
        backupCart[index].amount += value;

        if(backupCart[index].amount === 0) {
            backupCart.splice(index, 1);
        }

        setCart(backupCart);
    }

    // Calculate total
    const total = cart.reduce((value, item) => 
        value + item.amount * item.price, 0);

    return (
        <div className='shopping-cart-content'>
            <h1>Shopping Cart</h1>
            <div className='cart-list'>
            {
                cart.length ? cart?.map((item, index) => (
                    <div className='cart-element' key={item.id}>
                        <div>
                            <img className='cart-image' src={item.thumbnail} alt='Thumbnail'/>
                        </div>
                        <div>
                            <h2>{item.title}</h2>
                        </div>
                        <div className='set-amount'>
                            <button onClick={() => changeAmount(index, 1)} className='add-btn'><i className='material-icons'>add</i></button>
                            <button className='amount-btn'>{item.amount}</button>
                            <button onClick={() => changeAmount(index, -1)} className='remove-btn'><i className='material-icons'>remove</i></button>
                        </div>
                        <div>
                            <h2>{item.price}$</h2>
                        </div>
                    </div>
                )) : <h3>There is nothing in the cart yet!</h3> 
            }
            </div>
            {
                cart.length ? 
                <div className='total'>
                    <h2>Total: {total}$</h2>
                </div> : <></>
            }
        </div>
    )
}


// Product fetch API with Limit/Search/Category
const Products = () => {

    const [product, setProduct] = useState([]);
    const [listAllProducts, setListAllProducts] = useState([]);

    // Get All Products (with max limit)
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
        .then(data => data.json())
        .then(data => setListAllProducts(data.products))
    }, []);


    const [limit, setLimit] = useState("");
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("");

    const [cart, setCart] = useState([]);

    // Limit
    const fetchLimit = () => {
        fetch(`https://dummyjson.com/products?limit=${limit}`)
        .then(data => data.json())
        .then(data => { setProduct(data.products); })
    }

    // Search
    const fetchSearch = () => {
        fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then(data => data.json())
        .then(data => { setProduct(data.products); })
    }

    // Category
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const fetchCategory = () => {
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then(data => data.json())
        .then(data => { setProduct(data.products); })
    }
    
    
    // Add To Cart
    const addToCart = (id) => {

        const element = listAllProducts.find((item) => item.id === id);

        if (cart.some((cartItem) => cartItem.id === element.id)) {
            setCart((cart) => cart.map((cartItem) => cartItem.id === element.id
                ? {
                    ...cartItem,
                    amount: cartItem.amount + 1
                  }
                : cartItem
            )
          );
          return;
        }
    
        setCart((cart) => [
          ...cart,
          { ...element, amount: 1 }
        ]);

        console.log(`Product '${element.title}' (ID: ${element.id}) has been added to shopping cart!`);
    };


    return (
        <div className='product-content'>

            <CartContent cart={cart} setCart={setCart}/>

            <div className='set-limit'>
                <h1>Set Product Limit</h1>
                <input type='text' placeholder='Set product limit...' className='limit-input'
                    value={limit} onChange={(e) => setLimit(e.target.value)}></input>
                <button className='set-btn' disabled={!limit} 
                    onClick={function() { fetchLimit(); setQuery(""); setCategory("");}}><i class='material-icons'>power_settings_new</i></button>
            </div>

            <div className='search-products'>
                <h1>Search For A Product</h1>
                <input type='text' placeholder='Search...' className='search-input'
                    value={query} onChange={(e) => setQuery(e.target.value)}></input>
                <button className='search-btn' disabled={!query} 
                    onClick={function() { fetchSearch(); setLimit(""); setCategory("");}}><i class='material-icons'>search</i></button>
                <h3>Found products: {(query) ? product?.length : '0'}</h3>
            </div>

            <div className='choose-category'>
                <h1>Choose Category</h1>
                <div className='categories'>
                    <div className='block-category'>
                        <div>
                            <input type="radio" id="smartphones-category" name="category" value="smartphones" 
                                onChange={handleCategory} checked={category === 'smartphones'} />
                            <label for="smartphones-category">Smartphones</label>
                        </div>
                        <div>
                            <input type="radio" id="laptops-category" name="category" value="laptops"
                                onChange={handleCategory} checked={category === 'laptops'} />
                            <label for="laptops-category">Laptops</label>
                        </div>
                        <div>
                            <input type="radio" id="fragrances-category" name="category" value="fragrances"
                                onChange={handleCategory} checked={category === 'fragrances'}/>
                            <label for="fragrances-category">Fragrances</label>
                        </div>
                        <div>
                            <input type="radio" id="skincare-category" name="category" value="skincare"
                                onChange={handleCategory} checked={category === 'skincare'}/>
                            <label for="skincare-category">Skincare</label>
                        </div>
                        <div>
                            <input type="radio" id="groceries-category" name="category" value="groceries"
                                onChange={handleCategory} checked={category === 'groceries'}/>
                            <label for="groceries-category">Groceries</label>
                        </div>
                    </div>

                    <div className='block-category'>
                        <div>
                            <input type="radio" id="dec-category" name="category" value="home-decoration"
                                onChange={handleCategory} checked={category === 'home-decoration'}/>
                            <label for="dec-category">Home Decoration</label>
                        </div>
                        <div>
                            <input type="radio" id="furniture-category" name="category" value="furniture"
                                onChange={handleCategory} checked={category === 'furniture'}/>
                            <label for="furniture-category">Furniture</label>
                        </div>
                        <div>
                            <input type="radio" id="tops-category" name="category" value="tops"
                                onChange={handleCategory} checked={category === 'tops'}/>
                            <label for="tops-category">Tops</label>
                        </div>
                        <div>
                            <input type="radio" id="dresses-category" name="category" value="womens-dresses"
                                onChange={handleCategory} checked={category === 'womens-dresses'}/>
                            <label for="dresses-category">Women's Dresses</label>
                        </div>
                        <div>
                            <input type="radio" id="womenshoes-category" name="category" value="womens-shoes"
                                onChange={handleCategory} checked={category === 'womens-shoes'}/>
                            <label for="womenshoes-category">Women's Shoes</label>
                        </div>
                    </div>

                    <div className='block-category'>
                        <div>
                            <input type="radio" id="menshirts-category" name="category" value="mens-shirts"
                                onChange={handleCategory} checked={category === 'mens-shirts'}/>
                            <label for="menshirts-category">Men's Shirts</label>
                        </div>
                        <div>
                            <input type="radio" id="menshoes-category" name="category" value="mens-shoes"
                                onChange={handleCategory} checked={category === 'mens-shoes'}/>
                            <label for="menshoes-category">Men's Shoes</label>
                        </div>
                        <div>
                            <input type="radio" id="menswatches-category" name="category" value="mens-watches"
                                onChange={handleCategory} checked={category === 'mens-watches'}/>
                            <label for="menswatches-category">Men's Watches</label>
                        </div>
                        <div>
                            <input type="radio" id="womenswatches-category" name="category" value="womens-watches"
                                onChange={handleCategory} checked={category === 'womens-watches'}/>
                            <label for="womenswatches-category">Women's Watches</label>
                        </div>
                        <div>
                            <input type="radio" id="womensbags-category" name="category" value="womens-bags"
                                onChange={handleCategory} checked={category === 'womens-bags'}/>
                            <label for="womensbags-category">Women's Bags</label>
                        </div>
                    </div>

                    <div className='block-category'>
                        <div>
                            <input type="radio" id="womensjewellery-category" name="category" value="womens-jewellery"
                                onChange={handleCategory} checked={category === 'womens-jewellery'}/>
                            <label for="womensjewellery-category">Women's Jewellery</label>
                        </div>
                        <div>
                            <input type="radio" id="sunglasses-category" name="category" value="sunglasses"
                                onChange={handleCategory} checked={category === 'sunglasses'}/>
                            <label for="sunglasses-category">Sunglasses</label>
                        </div>
                        <div>
                            <input type="radio" id="automotive-category" name="category" value="automotive"
                                onChange={handleCategory} checked={category === 'automotive'}/>
                            <label for="automotive-category">Automotive</label>
                        </div>
                        <div>
                            <input type="radio" id="motorcycle-category" name="category" value="motorcycle"
                                onChange={handleCategory} checked={category === 'motorcycle'}/>
                            <label for="motorcycle-category">Motorcycle</label>
                        </div>
                        <div>
                            <input type="radio" id="lighting-category" name="category" value="lighting"
                                onChange={handleCategory} checked={category === 'lighting'}/>
                            <label for="lighting-category">Lighting</label>
                        </div>
                    </div>
                </div>

                <button className='category-btn' disabled={!category} 
                    onClick={function() { setLimit(""); setQuery(""); fetchCategory();}}><i class='material-icons'>check_circle</i></button>
            </div>

            <div class='text-list'>
                <h1>Product List:</h1>
            </div>

            <div class='product-list'>
                {
                product?.map((item) => (
                    <div className='product-element' key={item.id}>
                        <Carousel showArrows={true} transitionTime="1000" dynamicHeight={false}
                        showThumbs={false} infiniteLoop>
                            <div>
                                <img src={item.thumbnail} alt='Thumbnail'/>
                            </div>
                            <div>
                                <img src={item.images[0]} alt='Img 1'/>
                            </div>
                            <div>
                                <img src={item.images[1]} alt='Img 2'/>
                            </div>
                            <div>
                                <img src={item.images[2]} alt='Img 3'/>
                            </div>
                        </Carousel>

                        <h2 className='title'>{item.title}</h2>
                        <p className='desc'>{item.description}</p>
                        <p className='rating'><i className="inline-icon gold-rating material-icons">star</i>&nbsp;&nbsp;{item.rating} / 5</p>
                        <p className='pricing'><i className="inline-icon material-icons">payments</i>&nbsp;&nbsp;{item.price}$</p>

                        <div className='productoperation-content'>
                            <button className='cart-btn' onClick={() => addToCart(item.id)}><i class='material-icons'>shopping_cart</i></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;