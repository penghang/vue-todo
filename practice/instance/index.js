import Vue from 'vue'

const app = new Vue({
  data: {
    text: 0
  },
  destroyed () {
    console.log('destroyed')
  },
  // el: '#root',
  template: '<div>{{text}}</div>'
})

app.$mount('#root')

// app.text = 'text1'

// setInterval(() => {
//   app.text += 1
// }, 1000)
setTimeout(() => {
  app.$destroy()
}, 1000)
