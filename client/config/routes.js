import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id', // /app/xxx
    props: true, // id作为props传递到组件
    // props: {
    //   id: 4567
    // },
    // props: (route) => ({ id: route.query.b }),
    component: Todo,
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'desc'
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
    component: Login
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
