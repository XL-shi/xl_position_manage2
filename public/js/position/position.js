function Position(){
    this.loadHeader();
    this.createDom();
    this.addListener();
}
Position.template = `<div class="modal fade" id="addPosModal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                                <h4 class="modal-title" id="registerModalLabel">职位信息</h4>
                            </div>
                            <div class="modal-body">
                                <form class="position-form">
                                    <div class="form-group">
                                        <label for="logo">公司logo</label>
                                        <input type="file" name="logo" class="form-control" id="logo">
                                    </div>
                                    <div class="form-group">
                                        <label for="posName">职位名称</label>
                                        <input type="text" name="posName" class="form-control" id="posName" placeholder="请输入职位">
                                    </div>
                                    <div class="form-group">
                                        <label for="companyName">公司名称</label>
                                        <input type="text" class="form-control" id="companyName" placeholder="请输入公司名称">
                                    </div>
                                    <div class="form-group">
                                        <label for="exp">工作经验</label>
                                        <input type="text" name="exp" class="form-control" id="exp" placeholder="请输入工作经验">
                                    </div>
                                    <div class="form-group">
                                        <label for="city">工作地点</label>
                                        <input type="text" class="form-control" id="city" placeholder="请输入工作地点">
                                    </div>
                                    <div class="form-group">
                                        <label for="salary">岗位薪资</label>
                                        <input type="text" class="form-control" id="salary" placeholder="请输入岗位薪资">
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                                <button type="button" class="btn add-btn btn-primary">添加</button>
                            </div>
                            </div>
                        </div>
                    </div>`;


$.extend(Position.prototype, {  
    loadHeader(){
       $(".position-nav li:first").removeClass("active").siblings().addClass("active");
    },
    createDom(){
        $(Position.template).appendTo("body");
    },
    addListener(){
        $(".add-btn").on("click", this.addPositionHandler);
    },
    addPositionHandler(){
        const formData = new FormData($(".position-form")[0]);
        $.ajax({
            type:"post",
            url:"/position/add",
            data: formData,
            processData: false,
            contentType: false,
            success:function(data){
                console.log(data);
            },
            dataType:"json"
        })
    }
});
new Position();