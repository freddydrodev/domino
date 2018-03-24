import Dashboard from '../pages/Dashboard/Dashboard'
import Shops from '../pages/Shops/Shops'
import Categories from '../pages/Categories/Categories'
import Products from '../pages/Products/Products'
import Tags from '../pages/Tags/Tags'
import Orders from '../pages/Orders/Orders'
import Sales from '../pages/Sales/Sales'
import Delivery from '../pages/Delivery/Delivery'
import Employees from '../pages/Employees/Employees'
import Customers from '../pages/Customers/Customers'
import Activities from '../pages/Activities/Activities'

const prefix = 'app'
export default (routers = [
    {
        title: 'Dashboard',
        path: '/' + prefix + '/Dashboard',
        component: Dashboard
    },
    {
        title: 'Shops',
        path: '/' + prefix + '/Shops',
        component: Shops
    },
    {
        title: 'Categories',
        path: '/' + prefix + '/Categories',
        component: Categories
    },
    {
        title: 'Products',
        path: '/' + prefix + '/Products',
        component: Products
    },
    {
        title: 'Tags',
        path: '/' + prefix + '/Tags',
        component: Tags
    },
    {
        title: 'Orders',
        path: '/' + prefix + '/Orders',
        component: Orders
    },
    {
        title: 'Sales',
        path: '/' + prefix + '/Sales',
        component: Sales
    },
    {
        title: 'Delivery',
        path: '/' + prefix + '/Delivery',
        component: Delivery
    },
    {
        title: 'Employees',
        path: '/' + prefix + '/Employees',
        component: Employees
    },
    {
        title: 'Customers',
        path: '/' + prefix + '/Customers',
        component: Customers
    },
    {
        title: 'Activities',
        path: '/' + prefix + '/Activities',
        component: Activities
    }
    // {
    //     title: 'Tools',
    //     path: '/' + prefix + '/Tools',
    //     component: Tools
    // },
    // {
    //     title: 'Layouts',
    //     path: '/' + prefix + '/Layouts',
    //     component: Layouts
    // },
])
