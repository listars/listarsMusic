/**
 * Created by Jackie on 2017/2/14.
 */

import Home from './components/index.vue'
import Sheet from './components/views/songSheet.vue'
import Song from './components/views/song.vue'

 const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/playLists/:id',
        component: Sheet
    },
    {
        path: '/song',
        component: Song
    }

]

export default routes