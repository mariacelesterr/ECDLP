Router.configure({
    layoutTemplate: 'lay_process',
    notFoundTemplate: '404'
});

//ROUTERS
Router.route('/', function () {
	this.render('Home');
	this.layout('lay_main')
});

Router.route('login', function () {
	this.render('login');
	this.layout('lay_process')
}); 

Router.route('registro', function () {
	this.render('registro');
	this.layout('lay_process')
}); 