import { Home } from '../pages/Home';
import { Gardes} from '../pages/Gardes'
import Contact from '../pages/Contact';
import { NumeroUtiles } from '../pages/Numeros-utiles';
import { News } from '../pages/Actualites';


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