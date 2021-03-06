import createCategory from '../views/Category/CreateCategory'
import category from '../views/Category/Category'
import editCategory from '../views/Category/EditCategory'

import createProduct from '../views/Products/CreateProduct'
import product from '../views/Products/Product'
import editProduct from '../views/Products/EditProduct'

import Chat from '../views/Chat'

import allProduct from '../views/user/product/allProduct'

import LogActivity from '../views/LogActivity'

import userCart from '../views/user/cart/carts'

const routes = [{
        path: '/admin/category',
        name: 'category',
        component: category
    }, {
        path: '/admin/category/create',
        name: 'createCat',
        component: createCategory
    },
    {
        path: '/admin/category/edit/:id',
        name: 'editCat',
        component: editCategory
    },
    {
        path: '/admin/products',
        name: 'products',
        component: product
    },
    {
        path: '/admin/products/create',
        name: 'createProd',
        component: createProduct
    },
    {
        path: '/admin/products/edit/:id',
        name: 'editProd',
        component: editProduct
    },
    {
        path: '/chat',
        name: 'chat',
        component: Chat
    },
    {
        path: '/admin/logs',
        name: 'log',
        component: LogActivity
    },
    // User
    {
        path: '/',
        name: 'allProducts',
        component: allProduct
    },
    {
        path: '/your-cart',
        name: 'userCart',
        component: userCart
    },

]

export default {
    mode: 'history',
    linkActiveClass: 'bg-primary text-white',
    routes
}
