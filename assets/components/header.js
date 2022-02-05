const html = `
<div class="middle-header dark_skin">
<div class="container">
 <div class="nav_block">
  <a class="navbar-brand" href="index.html">
   <img class="logo_light" src="assets/images/logo-zk.png" width="120" height="80" alt="logo" />
   <img class="logo_dark" src="assets/images/logo-zk.png" width="120" height="80" alt="logo" />
  </a>
  <div class="contact_phone order-md-last">
   <i class="linearicons-phone-wave"></i>
   <span>+234-803-842-5980</span>
  </div>
  <div class="product_search_form">
   <form>
    <div class="input-group">
     <div class="input-group-prepend">
      <div class="custom_select">
       <select class="first_null">
             <option value="">All Category</option>
             <option value="Dresses">Hair</option>
             <option value="Shirt-Tops">Shoes</option>
             <option value="T-Shirt">Bags</option>
             <option value="Pents">Clothes</option>
             <option value="Jeans">Makeup</option>
         </select>
      </div>
     </div>
     <input class="form-control" placeholder="Search Product..." required="" type="text">
     <button type="submit" class="search_btn"><i class="linearicons-magnifier"></i></button>
    </div>
   </form>
  </div>
 </div>
</div>
</div>
<div class="bottom_header light_skin main_menu_uppercase bg_dark mb-4">
<div class="container">
 <div class="row">
  <div class="col-lg-3 col-md-4 col-sm-6 col-3">
   <div class="categories_wrap">
    <button type="button" data-toggle="collapse" data-target="#navCatContent" aria-expanded="false" class="categories_btn">
                         <i class="linearicons-menu"></i><span>All Categories </span>
                     </button>
    <div id="navCatContent" class="nav_cat navbar collapse">
     <ul>
      <li class="">
       <a class="dropdown-ite nav-link" href="#"><i class="flaticon-woman"></i> <span>Hair</span></a>

      </li>

      <li class="">
       <a class="nav-link" href="#"><i class="flaticon-friendship"></i> <span>Kiddies wears</span></a>
      </li>

      <li><a class="dropdown-item nav-link nav_item" href="coming-soon.html"><i class="flaticon-jacket"></i> <span>Clothes</span></a></li>
      <li><a class="dropdown-item nav-link nav_item" href="404.html"><i class="flaticon-vintage"></i> <span>Curves</span></a></li>
      <li><a class="dropdown-item nav-link nav_item" href="404.html"><i class="flaticon-sneakers"></i> <span>Shoes</span></a></li>
      <li><a class="dropdown-item nav-link nav_item" href="login.html"><i class="ion-bag"></i> <span>Bags</span></a></li>
      <!-- <li><a class="dropdown-item nav-link nav_item" href="register.html"><i class="flaticon-necklace"></i> <span>Jewellery</span></a></li> -->
      <li><a class="dropdown-item nav-link nav_item" href="coming-soon.html"><i class="flaticon-herbal"></i> <span>Make ups</span></a></li>
      <li><a class="dropdown-item nav-link nav_item" href="404.html"><i class="ion-eye"></i> <span>Eyelashes</span></a></li>

    </div>
   </div>
  </div>
  <div class="col-lg-9 col-md-8 col-sm-6 col-9">
   <nav class="navbar navbar-expand-lg">
    <button class="navbar-toggler side_navbar_toggler" type="button" data-toggle="collapse" data-target="#navbarSidetoggle" aria-expanded="false"> 
                         <span class="ion-android-menu"></span>
                     </button>
    <div class="collapse navbar-collapse mobile_side_menu" id="navbarSidetoggle">
     <ul class="navbar-nav">
      <li class="dropdown">
       <a data-toggle="dropdown" class="nav-link dropdown-toggl active" href="#">Home</a>
      </li>
      <li class="">
       <a class="nav-link" href="#" data-toggle="">Products</a>
      </li>
      <li class="">
       <a class="nav-link" href="#" data-toggle="dropdown">Shop</a>
       <div class="dropdown-menu d-none">
        <ul class="mega-menu d-lg-flex">
         <li class="mega-menu-col col-lg-9">
          <ul class="d-lg-flex">
           <li class="mega-menu-col col-lg-4">
            <ul>
             <li class="dropdown-header">Shop Page Layout</li>
             <li><a class="dropdown-item nav-link nav_item" href="shop-list.html">shop List view</a></li>
             <li><a class="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">shop List Left Sidebar</a></li>
             <li><a class="dropdown-item nav-link nav_item" href="shop-list-right-sidebar.html">shop List Right Sidebar</a></li>
             <li><a class="dropdown-item nav-link nav_item" href="shop-left-sidebar.html">Left Sidebar</a></li>
             <li><a class="dropdown-item nav-link nav_item" href="shop-right-sidebar.html">Right Sidebar</a></li>
             <li><a class="dropdown-item nav-link nav_item" href="shop-load-more.html">Shop Load More</a></li>
            </ul>
           </li>
           <li class="mega-menu-col col-lg-4">
            <ul>
             <li class="dropdown-header">Other Pages</li>
             <li><a class="dropdown-item nav-link nav_item" href="shop-cart.html">Cart</a></li>
             <li><a class="dropdown-item nav-link nav_item" href="checkout.html">Checkout</a></li>
             <li><a class="dropdown-item nav-link nav_item" href="my-account.html">My Account</a></li>
             <li><a class="dropdown-item nav-link nav_item" href="wishlist.html">Wishlist</a></li>
             <li><a class="dropdown-item nav-link nav_item" href="compare.html">compare</a></li>
             <li><a class="dropdown-item nav-link nav_item" href="order-completed.html">Order Completed</a></li>
            </ul>
           </li>
           <li class="mega-menu-col col-lg-4">
            <ul>
             <li class="dropdown-header">Product Pages</li>
             <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail.html">Default</a></li>
             <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Left Sidebar</a></li>
             <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Right Sidebar</a></li>
             <li><a class="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Thumbnails Left</a></li>
            </ul>
           </li>
          </ul>
         </li>
         <li class="mega-menu-col col-lg-3">
          <div class="header_banner">
           <div class="header_banner_content">
            <div class="shop_banner">
             <div class="banner_img overlay_bg_40">
              <img src="assets/images/shop_banner2.jpg" alt="shop_banner2" />
             </div>
             <div class="shop_bn_content">
              <h6 class="text-uppercase shop_subtitle">New Collection</h6>
              <h5 class="text-uppercase shop_title">Sale 30% Off</h5>
              <a href="#" class="btn btn-white rounded-0 btn-xs text-uppercase">Shop Now</a>
             </div>
            </div>
           </div>
          </div>
         </li>
        </ul>
       </div>
      </li>
      <li><a class="nav-link nav_item" href="contact.html">Contact Us</a></li>
     </ul>
    </div>
    <ul class="navbar-nav attr-nav align-items-center">
     <li><a href="#" class="nav-link"><i class="linearicons-user"></i></a></li>
     <li><a href="#" class="nav-link"><i class="linearicons-heart"></i><span class="wishlist_count">0</span></a></li>
     <li class="dropdown cart_dropdown"><a class="nav-link cart_trigger" href="#" data-toggle="dropdown"><i class="linearicons-cart"></i><span class="cart_count">2</span></a>
      <div class="cart_box dropdown-menu dropdown-menu-right">
       <ul class="cart_list">
        <li>
         <a href="#" class="item_remove"><i class="ion-close"></i></a>
         <a href="#"><img src="assets/images/cart_thamb1.jpg" alt="cart_thumb1">Variable product 001</a>
         <span class="cart_quantity"> 1 x <span class="cart_amount"> <span class="price_symbole">$</span></span>78.00</span>
        </li>
        <li>
         <a href="#" class="item_remove"><i class="ion-close"></i></a>
         <a href="#"><img src="assets/images/cart_thamb2.jpg" alt="cart_thumb2">Ornare sed consequat</a>
         <span class="cart_quantity"> 1 x <span class="cart_amount"> <span class="price_symbole">$</span></span>81.00</span>
        </li>
       </ul>
       <div class="cart_footer">
        <p class="cart_total"><strong>Subtotal:</strong> <span class="cart_price"> <span class="price_symbole">$</span></span>159.00</p>
        <p class="cart_buttons"><a href="#" class="btn btn-fill-line view-cart">View Cart</a><a href="#" class="btn btn-fill-out checkout">Checkout</a></p>
       </div>
      </div>
     </li>
    </ul>
    <div class="pr_search_icon">
     <a href="javascript:void(0);" class="nav-link pr_search_trigger"><i class="linearicons-magnifier"></i></a>
    </div>
   </nav>
  </div>
 </div>
</div>
</div>
`