(() => {
    const app = Sammy('#rooter', function() {
        //connects both
        this.use('Handlebars', 'hbs');

        // Define all routes
        this.get('/', function(context){
            this.loadPartials(getPartials())
            .partial('./views/home.hbs');    //here comes the main layout not any partial
        });

        function getPartials(){
            return{
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            }
        }

        this.get('/register', function(context){
            this.loadPartials(getPartials())
            .partial('./views/authentication/register.hbs');
        });

    });

    app.run();
})()