new Vue({

      //we want to target the div with an id='events
      el: '#events',

      //here we can register any values/collections that hold data
      //for the application
      data: {
          event: { name: '', description: '', date: '' },
          events: []
      },

      //anything within the ready function will run when the app loads
      mounted: function() {
          //when the app loads, we want to call the method that initializes
          //some ddata
          this.fetchEvents();
      },

      //methods we want to use in our app are registered here
      methods: {}
});
