/**
 * Created by Jackie on 2017/2/14.
 */

import Home from './components/index.vue'
import Sheet from './components/views/songSheet.vue'

 const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/songSheet',
        component: Sheet
    }

]

export default routes