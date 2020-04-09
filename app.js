var app = new Vue({
  el: "#app",
  data: {
    current_hide_state: true,
    dog_pics: [
      {
        title: "Cute small dog",
        pic_link:
          "https://cdn.mos.cms.futurecdn.net/QjuZKXnkLQgsYsL98uhL9X.jpg",
      },
      {
        title: "Cute lab",
        pic_link:
          "https://www.guidingeyes.org/wp-content/uploads/2020/01/1-1.jpg",
      },
    ],
    current_index: 0,
  },
  methods: {
    changeIndex: function (event) {
      if (this.current_index >= this.dog_pics.length - 1) {
        this.current_index = 0;
      } else {
        this.current_index += 1;
      }
    },
    changeHideState: function (event) {
      this.current_hide_state = !this.current_hide_state;
    },
  },
});
