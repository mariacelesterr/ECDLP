import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.browse.helpers({
  
  menucontent: function() {
    return MenuContent.find();
  }
  
//   menucontent: [
//     {title: "Categorías", url: "categorias"},
// 	{title: "Trending", url: "trending"},
// 	{title: "Más valoradas", url: "top"}
//   ],

});

Template.nav.helpers({
  
  
  
})

Template.nav.helpers({

  isNotLast: function(menunode) {
    return (!menunode.last);
  },
  
  navcontent: function() {
    return [
      {title: "Home", url: ""},
      {title: "Iniciar Sesion", url: "login"},
      {title: "Registrarse", url: "registro", last: true}
    ];
  },
  


});

/*
Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
//manejador de eventos
//*/