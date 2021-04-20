// 完整寫法
// $(document).ready(function(){
//     $("button").click(function(){
//       $("h1").hide();
//     });
// });

// 點擊後隱藏
$(function(){
    $("#hideButton").click(function(){
        $("#hide").hide();
    });
});

// 雙擊後換字
$(function(){
    $("#dblclickButton").dblclick(function(){
       if ($("#dblBefore").is(':visible')){
           $("#dblBefore").text('Change World');
       }
    });
});

// toggle (hide+show)
$(function(){
    $("#toggleButton").click(function(){
        $("#toggle").toggle()
    })
})

// fade
$(function(){
    $("#fadeButton").click(function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);            
    });
});

// slide
$(()=>{
    $("#slideButton").click(()=>{
        $("#slide2").slideToggle()
    })
})

// animate
$(()=>{
    $("#animateButton").click(()=>{
        $("#animate").animate({fontSize:'30px'})
    })
})

// stop
$(()=>{
    $("#moveButton").click(()=>{
        $("#stop").animate({fontSize:'30px'}, 5000)
    })
    $("#stopButton").click(()=>{
        $("#stop").stop()
        alert("已停止變大")
    })
})

// chaining
$(()=>{
    $("#chainButton").click(()=>{
        $("#chain").css("color","red").slideUp(2000).slideDown(2000)
    })
})

// ajax
$(()=>{
    $("#ajaxButton").click(()=>{
        $("#ajax").load('demo.txt')
    })
})

$(function(){
    $("#getButton").click(()=>{
        $.get("demo.py", function(data, status){
            $("#GET").load(data)
            $("#GET2").load(status)
        })
    })
})