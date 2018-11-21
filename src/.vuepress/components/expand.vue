<template lang="pug">
  .expand(:class="{'is-open': open}")
    .title(v-on:click="onClick")
      | {{ title }}
      span.openclose
    .contents
      slot
</template>

<script>

export default {
  name: 'Expnd',
  data: () => ({
    open: false
  }),
  props: ['title'],
  computed: {
  },
  components: {
  },
  watch: {
  },
  methods: {
    onClick: function() {
      this.open = !this.open
    }
  },
  mounted() {
  }
};
</script>

<style scoped lang="sass">

$title-height: 50px

.expand
  .title
    display: flex
    position: relative
    align-items: center
    justify-content: space-between
    height: $title-height
    width: 100%
    background: rgba(27,31,35,.05)
    border-top: 1px solid #eaecef
    border-bottom: 1px solid #eaecef
    padding: 0 30px
    color: #666
    font-weight: bold
    box-sizing: border-box
    .openclose
      position: absolute
      width: $title-height
      height: $title-height
      top: 0
      right: 0
      &:before,
      &:after
        position: absolute
        display: block
        content: ''
        width: 50%
        height: 1px
        background: #666
        top: 50%
        left: 50%
        transform: translate3d(-50%, -50%, 0) rotate(0deg)
      &:after
        transform: translate3d(-50%, -50%, 0) rotate(90deg)

  .contents
    display: none
    padding: 0 30px
    width: 100%
    height: auto
    background: rgba(27,31,35,.05)
    color: #666
    box-sizing: border-box

  &.is-open
    .title
      .openclose
        &:before
          transform: translate3d(-50%, -50%, 0) rotate(45deg)
        &:after
          transform: translate3d(-50%, -50%, 0) rotate(-45deg)
    .contents
      display: inline-block

</style>
