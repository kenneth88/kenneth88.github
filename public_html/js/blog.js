$(function () {
    var APPLICATION_ID = "01C45C3C-1A36-B211-FFCB-8ECE4D2EC100",
    SECRET_KEY = "B264B60B-124A-6834-FFF6-6240D396AE00",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var user = new Backendless.user();
    user.email = "kenneth.peralta@hotmail.com";
    user.password = "sfgiantsRule8";
    Backendless.userService.register(user);
    
});


