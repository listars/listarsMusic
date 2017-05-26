/**
 * Created by Jackie on 2017/2/14.
 */

import Home from './components/index.vue'
import Sheet from './components/views/songSheet.vue'
import Song from './components/views/song.vue'
import FineSong from './components/views/fineSong.vue'
import Billboard from './components/views/billboard.vue'
import Search from './components/views/search.vue'

 const routes = [
    {
        path: '/',
        meta:{ title:'listarMusic' },
        component: Home
    },
    {
        path: '/playLists/:id',
        meta:{ title:'歌单详情' },
        component: Sheet
    },
    {
        path: '/song',
        meta:{ title:'歌曲' },
        component: Song
    },
     {
         path: '/fineSong',
         meta: { title:'精品歌单' },
         component: FineSong
     },
     {
         path: '/billboard',
         component: Billboard
     },
     {
         path: '/search',
         component: Search
     }

]

export default routes