import Home from "./views/Home"
import Products from "./views/Products"
import Product from "./views/Products/Product"
import AboutUs from "./views/AboutUs"
import Contacts from "./views/Contacts"

const routes = [
  {
    text: "Home",
    href: "/",
    inMainNavigation: true,
    component: Home,
  },
  {
    text: "Products",
    href: "/products",
    inMainNavigation: true,
    component: Products,
  },
  {
    text: "Product",
    href: "/products/:id",
    inMainNavigation: false,
    component: Product,
  },
  {
    text: "About us",
    href: "/about-us",
    inMainNavigation: true,
    component: AboutUs,
  },
  {
    text: "Contacts",
    href: "/contacts",
    inMainNavigation: true,
    component: Contacts,
  },
]

export default routes
