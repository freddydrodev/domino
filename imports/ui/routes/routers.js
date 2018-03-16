import P from '../components/P'
import Dashboard from '../pages/Dashboard'
import Shops from '../pages/Shops'
import Categories from '../pages/Categories'
import Products from '../pages/Products'
import Tags from '../pages/Tags'
import Orders from '../pages/Orders'
import Sales from '../pages/Sales'
import Delivery from '../pages/Delivery'
import Employees from '../pages/Employees'
import Customers from '../pages/Customers'
import Activities from '../pages/Activities'

export default (routers = [
    {
        title: 'Dashboard',
        path: '/Dashboard',
        component: Dashboard
    },
    {
        title: 'Shops',
        path: '/Shops',
        component: Shops
    },
    {
        title: 'Categories',
        path: '/Categories',
        component: Categories
    },
    {
        title: 'Products',
        path: '/Products',
        component: Products
    },
    {
        title: 'Tags',
        path: '/Tags',
        component: Tags
    },
    {
        title: 'Orders',
        path: '/Orders',
        component: Orders
    },
    {
        title: 'Sales',
        path: '/Sales',
        component: Sales
    },
    {
        title: 'Delivery',
        path: '/Delivery',
        component: Delivery
    },
    {
        title: 'Employees',
        path: '/Employees',
        component: Employees
    },
    {
        title: 'Customers',
        path: '/Customers',
        component: Customers
    },
    {
        title: 'Activities',
        path: '/Activities',
        component: Activities
    },
    // {
    //     title: 'Tools',
    //     path: '/Tools',
    //     component: Tools
    // },
    // {
    //     title: 'Layouts',
    //     path: '/Layouts',
    //     component: Layouts
    // },
    {
        title: 'Default',
        path: '/',
        exact: true,
        component: P
    }
])
