const app = Vue.createApp({
  data() {
      return {
        title: "Hello World",
        description: "Lorem ipsum dolor sit amet.",
        url: "https://github.com/mehmetbacik",
        allLinkContent: {
          title:"Title",
          target:"_blank",
          url:"https://github.com/mehmetbacik",
          alt:"Alt Content",
        }, 
        variable: "Lorem",
        coords: {
          x: 0,
          y: 0,
        },
      };
  },
  methods: {
    /*changeTitle() {
      //alert();
      this.title = "Change Title";
    },*/
    changeTitle(pTitle) {
      this.title = pTitle;
    },
    /*updateCoords() {
      console.log('Updated Coords')
    },*/
    updateCoords(message, event) {
      //console.log(message, event.x, event.y);
      this.changeTitle(`${event.x},${event.y}`);
      this.coords = {
        x: event.x,
        y: event.y,
      }
    },
  },
}).mount("#app");