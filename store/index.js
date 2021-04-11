
export default {
  layout: () => this.$store.state.device ? 'mobile' : 'default',
  state: () => ({
  })
  }