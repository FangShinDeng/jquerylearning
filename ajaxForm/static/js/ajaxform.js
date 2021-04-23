$(function(){
    $("#btn").click(function(){
        user = $("input[name='user']").val()
        // console.log(user);
        $.ajax({
            url: '/process',
            type: 'post',
            data: {'name':user},
            success: function(data, status, xhr){
                console.log(data);
                $("#result").text(data.Message)
            },
            error: function(data, status, xhr){
                console.log('error' + data);
            }
        })
    })
})