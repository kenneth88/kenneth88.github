$(function () {
    var APPLICATION_ID = "01C45C3C-1A36-B211-FFCB-8ECE4D2EC100",
    SECRET_KEY = "B264B60B-124A-6834-FFF6-6240D396AE00",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);
    
    $('.main-container').html(loginTemplate);
    
    $(document).on('Submit', '.form-signin', function(event){
        event.preventDefault();
        
        var data = $(this).serializeArray(),
            email = data[0].value,
            password = data[1].value;
        
      Backendless.UserService.login(email, password, true, new Backendless.Async(userLoggedIn, gotError));
    });
  });

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}



