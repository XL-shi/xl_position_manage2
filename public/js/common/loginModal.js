function LoginModal(){
    this.createDom();
    this.addListener();
}
LoginModal.template = `<div class="modal fade" id="loginModal" tabindex="-1" role="dialog">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                                    <h4 class="modal-title" id="loginModalLabel">用户登录</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-danger login-err hide">用户名或密码错误</div>
                                    <form class="login-form">
                                        <div class="form-group">
                                            <label for="loginUsername">用户名</label>
                                            <input type="text" name="username" class="form-control" id="loginUsername" placeholder="请输入用户名">
                                        </div>
                                        <div class="form-group">
                                            <label for="loginPassword">密码</label>
                                            <input type="password" name="password" class="form-control" id="loginPassword" placeholder="请输入密码">
                                        </div>
                                        <div class="form-group">
                                            <label for="loginCode">验证码</label>
                                            <input type="text" class="form-control" id="loginCode" placeholder="请输入验证码">
                                            <p class="help-block code-img"></p>
                                            <span class="code-info" style="color:red;"><span>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                                    <button type="button" class="btn btn-login btn-primary">登录</button>
                                </div>
                                </div>
                            </div>
                        </div>`;
            
$.extend(LoginModal.prototype, {
    createDom(){
        $(LoginModal.template).appendTo("body");
    },
    addListener(){
        $("#loginCode").on('blur', this.verifyHandler);
        $(".btn-login").on("click", this.loginHandler);
    },
    verifyHandler(){
        var code = $("#loginCode").val();
        $.getJSON("/captcha/verify", {code}, (data)=>{
            if(data.res_code === 1){
                $(".code-info").text("验证码正确");
            }else{
                $(".code-info").text("验证码有误");
            }
        });
    },
    loginHandler(){
        var data = $(".login-form").serialize();
        $.post("/users/login", data, (resData)=>{
            console.log(resData);
            if(resData.res_code === 1){
                const loginUsername = $("#loginUsername").val();
                $("#loginModal").modal("hide");
                $(".login-success").removeClass("hide").find("a:first").text("hello, " + loginUsername);
                $(".not-login").remove();
                // 将登录成功的用户信息保存到 sessionStorage中
                // sessionStorage.setItem("loginUser", JSON.stringify(resData.res_body));
				sessionStorage.loginUser = JSON.stringify(resData.res_body);

            }else {
                $(".login-err").removeClass("hide");
            }
        });
    }
});