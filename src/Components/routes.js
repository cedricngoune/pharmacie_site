import { Home } from '../pages/Home';
import { Gardes} from '../pages/Gardes'


export const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/gardes",
        name: 'Gardes',
        component: Gardes
    }
]