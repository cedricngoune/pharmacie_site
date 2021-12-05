import { Home } from '../pages/Home/home';
import { Gardes} from '../pages/Gardes/gardes'
import Contact from '../pages/Contact/contact';
import { NumeroUtiles } from '../pages/Numeros-utiles/numero-utiles';
import { News } from '../pages/Actualites/actualites';


export const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/gardes",
        component: Gardes
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/numeros-utiles",       
        component: NumeroUtiles
    },
    {
        path:'/actualites',
        component: News  
    },
 
]