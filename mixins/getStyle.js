export default {
  name: "getStyle",
  data() {
    return {
      potenzialStyle: {},
    };
  },
  methods: {
    getStyle() {
      this.potenzialStyle = window.localStorage.getItem("activeStyle");

      if (this.potenzialStyle !== null) {
        this.$store.commit("setActiveStyle", this.potenzialStyle);
      }
    },
  },
};
