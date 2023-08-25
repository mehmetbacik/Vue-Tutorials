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

//1-'const app = Vue.createApp({ ... }).mount("#app");': This line creates a Vue application and mounts it to the HTML element with the id #app. In other words, the Vue application will run within this HTML element.
/*2-'data() { ... }': This function defines the data model of the Vue application. It contains variables used to store the application's state.
  -Variables like 'title', 'description', and 'url' store the page's title, description, and a URL.
  -The 'allLinkContent' object holds the text, target, URL, and alternative content of a link.
  -'variable' represents a text value.
  -'coords' is an object containing x and y coordinates.*/
/*3-'methods: { ... }': This section contains the functions (methods) that the Vue application can use.
  -'changeTitle(pTitle)': The title-changing function takes a parameter and updates the 'title' data using this parameter.
  -'updateCoords(message, event)': The coordinates update function takes a message and an event object. This function updates the title with coordinates and sets the 'coords' data to the updated coordinates.*/