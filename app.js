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
      methods: {
          //we dedicate a method to retrieving and setting some data
          fetchEvents: function() {
              var events = [
                {
                  id: 1,
                  name: 'TIFF',
                  description: 'Toronto International Film Festival',
                  date: '2017-09-10'
                },
                {
                  id: 2,
                  name: 'Star Wars The Last Jedi Premiere',
                  description: 'Luke Skywalker is back baby!',
                  date: '2017-12-15'
                },
                {
                  id: 3,
                  name: 'SXSW',
                  description: 'Music, film, and interactive festival in Austin, TX.',
                  date: '2017-3-11'
                }
              ];

              //set the collection of events
              this.events = events;
          },

          addEvent: function() {
              if(this.event.name) {
                  this.events.push(this.event);
                  this.event = {name: '', description: '', date: '' };
              }
          },

          deleteEvent: function(index) {
              if(confirm("Are you sure you want to delete this event?")) {
                  this.events.splice(index, 1);
              }
          }
      }
});
