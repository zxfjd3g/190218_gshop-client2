import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile.vue'

export default [{
    path: '/msite',
    component: MSite
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },

  {
    path: '/', // 项目根路径
    redirect: '/msite'
  }
]