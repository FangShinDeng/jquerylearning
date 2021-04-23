# jQuery w3c練習題
照著w3c完成所有jquery基本應用
https://www.w3schools.com/jquery/default.asp

## CDN 引用
https://code.jquery.com/

# 選擇器, 事件, 特效, 暫停, chain鍊, 元素處理

# ajax 異步處理
ajax 是一項古老javascript API, 用於創建XMLHttpRequest的請求, 但由於會有過多的callback hell, 導致代碼不易閱讀, 現在都用fetchAPI來處理
參考文獻: https://ithelp.ithome.com.tw/articles/10209727
fetchAPI參考文獻: https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch

## flaskForm (基礎form請求返回作法)
用flask的方式去完成表單

## flask 搭配 ajax 完成ajaxForm
file: app.py, js/ajaxform
參考文獻: https://github.com/PrettyPrinted/AJAX_Forms_jQuery_Flask

重點邏輯: 建立html後, 用jquery去獲得輸入框內的值, 然後用ajax帶data向接口請求返回內容

## ajax 用法
參考文獻: https://medium.com/tsungs-blog/jquery-ajax-67bbd322ee69
https://www.fooish.com/jquery/ajax.html

### $.ajax的一般格式
$.ajax({
    type: 'POST',
    url: url ,
    data: data ,
    success: success ,
    dataType: dataType
});

$.getJSON(url, callback)