// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id', // /app/xxx
    // path: '/app',
    props: true, // id作为props传递到组件
    // props: {
    //   id: 4567
    // },
    // props: (route) => ({ id: route.query.b }),
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'desc'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
