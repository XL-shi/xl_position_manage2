function Header(){
    this.createDom();
    this.loadLoginModal();
    this.loadRegisterModal();
    this.addListener();
}
Header.template = `<nav class="navbar navbar-inverse navbar-default">
                        <div class="container-fluid">
                            <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">职位管理系统</a>
                            </div>
                        
                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav position-nav navbar-nav">
                                <li class="active"><a href="/">首页</a></li>
                                <li><a href="/html/position.html">职位管理</a></li>
                            </ul>
                            <ul class="nav navbar-nav not-login navbar-right">
                                <li class="link-login" data-toggle="modal" data-target="#loginModal"><a href="#">登录</a></li>
                                <li class="link-register" data-toggle="modal" data-target="#registerModal"><a href="#">注册</a></li>                 
                            </ul>
                            <ul class="nav navbar-nav login-success navbar-right hide">
                                <li><a href="#">hello, xiaoli</a></li>
                                <li><a href="#">注销</a></li>                 
                            </ul>
                            </div>
                        </div>
                    </nav>`;

$.extend(Header.prototype, {
    createDom(){
        $(Header.template).appendTo(".header");
    },
    loadLoginModal(){
        new LoginModal();
    },
    loadRegisterModal(){
        new RegisterModal();
    },
    // 注册事件监听
    addListener(){
        $(".link-login, .link-register").on("click", this.genCaptchaHandler);
    },
    genCaptchaHandler(){
        $.get("/captcha/gencode",(data)=>{
            $(".code-img").html(data);
        },"text");
    }
});

new Header();