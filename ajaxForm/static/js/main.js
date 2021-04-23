// 學會獲取json格式資料並顯示在demo上面
$(function(){
    $.getJSON('http://httpbin.org/ip', function(data){
        $("#demo").text(data.origin)
    })
})

// 學會將json格式資料用table呈現 範例code
// $(function(){
//     $("#btn1").click(function(){
//         // 建立空的表格元素
//         var table = $('<table border="1"></table>');  
    
//     // 網頁載入時 用 getJSON() 載入含HTTP表頭資訊的 JSON 物件
//         $.getJSON('http://httpbin.org/headers', function(data){
//             // 利用 $.each() 逐一處理物件中屬性
//             $.each(data.headers, function(property, value){
//                 // 建立 th 元素物件, 並放入屬性名稱
//                 var th = $('<th></th>').text(property);
//                 // 建立 td 元素物件, 並放入屬性值
//                 var td = $('<td></td>').text(value);
//                 // 建立 tr 元素物件, 並附加剛才建立的 th, td 元素
//                 var row = $('<tr></tr>').append(th).append(td);
//                 // 將 tr 元素附加到表格中
//                 table.append(row);
//             });
//             // 將表格元素附加到文件中
//             $('#table').append(table);
//             }
//         );
//     });
// });

$(function(){
    $("#btn1").click(function(){
        url = 'http://httpbin.org/headers';
        var table2 = $(`<table id = "table2" border = 1></table>`);
        $.getJSON(url,function(data){
            for (let key in data.headers){
                var row = `
                <tr>
                    <th>${key}</th>
                    <td>${data.headers[key]}</td>
                </tr>
                `
                table2.append(row)
                // console.log(key)
            }
            // console.log(dict);
        })
        $("#table").append(table2)    
    })
})

// 獲取json檔案中的資料呈現在網頁上 
$(function(){
    $("#btn2").click(function(){
        $.getJSON("static/json/users.json", function(data){
            $("#div2").html(`<h1>name: ${data.name}</h1> <h1>email: ${data.email}</h1>`)
            console.log(data);
        })
    });
  });


// ajax ()用法
$(function(){
    $("#btn3").click(function(){
        url =  "static/json/demo.json";
        $.ajax({
            type: 'GET',
            url: url,
            datatype: "json",
            success: function(result){
                
                // 創建表單
                var table = $("<table border = 1 id = 'rtable'></table>")
                        
                for (let key in result){
                    // console.log(key);
                    // 取出memebers的內容, 將members內容表格化
                    if (key == 'members'){
                        // 先處理columns
                        let members = result[key]

                        let member = result[key][0]
                        var columns = $(`<tr></tr>`)
                        for(key in member){
                            columns.append(`<th>${key}</th>`)
                        }
                        table.append(columns);
                        
                        // 處理資料
                        console.log(members)
                        
                        members.forEach(element => {
                            let row = $(`
                                <tr>
                                    <td>${element.name}</td>
                                    <td>${element.age}</td>
                                    <td>${element.secretIdentity}</td>
                                    <td>${element.powers}</td>
                                </tr>
                                `);
                            table.append(row)
                        });
                    }
                }
                $("#result").append(table)   
            }, 
            error: function(result){
                console.log('error' + result);
        }});
    })
})
