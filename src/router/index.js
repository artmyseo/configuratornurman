import VueRouter from 'vue-router'
import Equip from '../Equip'
import Drag from '../drag'

export default new VueRouter ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Equip
        },
        {
            path: '/drag',
            component: Drag
        },

    ]

})