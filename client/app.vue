<template>
  <div id="app">
    <div id="cover" />
    <Header />
    <p>{{ fullName }} {{ counter }}</p>
    <p>{{ textC }}</p>
    <p>{{ textPlus }}</p>
    <router-link to="/app/123">
      app123
    </router-link>
    <router-link to="/app/456">
      app456
    </router-link>
    <router-link to="/login">
      login
    </router-link>
    <!-- <router-link to="/login/exact">
      login exact
    </router-link> -->
    <!-- <todo /> -->
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'

// console.log(Header.__docs)

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    // textA () {
    //   return this.$store.state.a.text
    // },
    // ...mapState(['count']),
    ...mapState({
      counter: (state) => state.count,
      textA: state => state.a.text,
      textC: state => state.c.text
    }),
    // ...mapState({
    //   counter: 'count'
    // }),
    ...mapGetters({
      fullName: 'fullName',
      textPlus: 'a/textPlus'
    })
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  mounted () {
    // console.log(this.$route)
    console.log(this.$store)
    // let i = 1
    // this.$store.state.count = 5
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++)
    // }, 1000)

    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })

    this.updateCountAsync({
      num: 5,
      time: 2000
    })

    // this.updateText('123')
    // this['a/updateText']('123')
    this['a/add']()
    // setInterval(() => {
    //   this.updateCount(i++)
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/add']),
    ...mapMutations(['updateCount', 'a/updateText'])
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>
