$(function () {
    var APPLICATION_ID = "01C45C3C-1A36-B211-FFCB-8ECE4D2EC100",
    SECRET_KEY = "B264B60B-124A-6834-FFF6-6240D396AE00",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var dataStore = Backendless.Persistence.of(Posts);
    var post = new Posts({title:"My First Blog Post", content:"my first blog post contnet", authorEmail:"email@email.com"});
    dataStore.save(post);
    
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

