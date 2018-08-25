function RegisterModal(){
    this.createDom();
    this.addListener();
}
RegisterModal.template =`<div class="modal fade" id="registerModal" tabindex="-1" role="dialog">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                                    <h4 class="modal-title" id="registerModalLabel">用户注册</h4>
                                </div>
                                <div class="modal-body">
                                    <form class="register-form">
                                        <div class="form-group">
                                            <label for="registerUsername">用户名</label>
                                            <input type="text" name="username" class="form-control" id="registerUsername" placeholder="请输入用户名">
                                        </div>
                                        <div class="form-group">
                                            <label for="registerPassword">密码</label>
                                            <input type="password" name="password" class="form-control" id="registerPassword" placeholder="请输入密码">
                                        </div>
                                        <div class="form-group">
                                            <label for="registerConfPassword">确认密码</label>
                                            <input type="password" class="form-control" id="registerConfPassword" placeholder="请再次输入密码">
                                        </div>
                                        <div class="form-group">
                                            <label for="registerEmail">邮箱</label>
                                            <input type="email" name="email" class="form-control" id="registerEmail" placeholder="请输入e-mail地址">
                                        </div>
                                        <div class="form-group">
                                            <label for="registerCode">验证码</label>
                                            <input type="text" class="form-control" id="registerCode" placeholder="请输入验证码">
                                            <p class="help-block code-img"></p>
                                            <span class="code-info" style="color:red;"><span>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                                    <button type="button" class="btn register-btn btn-primary">注册</button>
                                </div>
                                </div>
                            </div>
                        </div>`;

$.extend(RegisterModal.prototype, {
    createDom(){
        $(RegisterModal.template).appendTo("body");
    },
    addListener(){
        $("#registerCode").on("blur", this.verifyHandler);
        $('.register-btn').on("click", this.registerHandler);
    },
    verifyHandler(){
        var code = $("#registerCode").val();
        $.getJSON("/captcha/verify", {code}, (data)=>{
            console.log(data);
            if(data.res_code === 1){
                $(".code-info").text("验证码正确");
            }else{
                $(".code-info").text("验证码有误");
            }
        });
    },
    registerHandler(){
        var data = $(".register-form").serialize();
        $.post("/users/register", data, (resData)=>{
            console.log(resData);
        },"json");
    }
});      