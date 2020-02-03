export default {
  methods: {
    notificationTrigger(message, type) {
      this.$buefy.notification.open({
        duration: 2000,
        message: `${message}`,
        position: 'is-bottom-right',
        type: `is-${type}`
      });
    }
  }
}