import Home from "./views/Home"
import Products from "./views/Products"
import Product from "./views/Products/Product"
import AboutUs from "./views/AboutUs"
import Contacts from "./views/Contacts"

const mainRoutes = [
  {
    text: "Home",
    href: "/",
    component: Home,
  },
  {
    text: "Products",
    href: "/products",
    component: Products,
  },
  {
    text: "About us",
    href: "/about-us",
    component: AboutUs,
  },
  {
    text: "Contacts",
    href: "/contacts",
    component: Contacts,
  },
]

export default mainRoutes
