import Home from "./views/Home"
import Products from "./views/Products"
import Product from "./views/Products/Product"
import AboutUs from "./views/AboutUs"
import Contacts from "./views/Contacts"
import Login from "./views/Login"

const routes = [
  {
    text: "Home",
    href: "/",
    inMainNavigation: true,
    component: Home,
  },
  {
    text: "Login",
    href: "/login",
    onlyUnAuthorized: true,
    component: Login,
  },
  {
    text: "Register",
    href: "/register",
    onlyUnAuthorized: true,
    component: Login,
  },
  {
    text: "Products",
    href: "/products",
    inMainNavigation: true,
    onlyAuthorized: true,
    component: Products,
  },
  {
    text: "Product",
    href: "/products/:id",
    inMainNavigation: false,
    onlyAuthorized: true,
    component: Product,
  },
  {
    text: "About us",
    href: "/about-us",
    inMainNavigation: true,
    onlyAuthorized: true,
    component: AboutUs,
  },
  {
    text: "Contacts",
    href: "/contacts",
    inMainNavigation: true,
    onlyAuthorized: true,
    component: Contacts,
  },
]

export default routes
