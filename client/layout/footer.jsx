import '../assets/styles/footer.styl'
// css module 格式, id={className.footer}
// import className from '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: 'Jokcy'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
