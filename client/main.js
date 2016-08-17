import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
//require('./main.html');

Template.browse.helpers({
  
  menucontent: [
    {title: "Categorías", url: "categorias"},
	{title: "Trending", url: "trending"},
	{title: "Más valoradas", url: "top"}
  ],

});

Template.nav.helpers({

  isNotLast: function(a) {
    return (a.last !== true);
  },

  menucontent: [
  {title: "Home", url: ""},
  {title: "Iniciar Sesion", url: "login"},
  {title: "Registrarse", url: "registro", last: true}
  ],

});

/*
Template.browsecontent.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});*/
//getters

/*
Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
//manejador de eventos
//*/