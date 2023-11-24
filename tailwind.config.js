/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/app/app.component.html",
    "src/app/sidebar/sidebar.component.html",
    "src/app/navbar/navbar.component.html",
    "src/app/home/home.component.html",
    "src/app/home/products-sale/products-sale.component.html",
    "src/app/home/products-all/products-all.component.html",
    "src/app/home/products-all/products-filter/products-filter.component.html",
    "src/app/home/products-all/product-single/product-single.component.html",
    "src/app/home/contact/contact.component.html",
    "src/app/home/about/about.component.html",
    "src/app/footer/footer.component.html",
    "src/app/cart-main/cart-main.component.html",
    "src/app/cart-main/cart-item/cart-item.component.html",
    "src/app/not-found/not-found.component.html",
  ],
  theme: {
    extend: {
      height: {
        "90vh": "90vh",
      },
      width: {
        "90vw": "90vw",
      },
    },
  },
  plugins: [],
};
