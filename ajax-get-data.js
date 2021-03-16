var xhr = new XMLHttpRequest();
xhr.open('get','https://timyiu478.github.io/ajax.github.io/ajax-data.json',true);
xhr.send();

xhr.onload = function(){
  //console.log(xhr.responseText);
  //判斷 HTTP 狀態碼是否成功連線
  if(xhr.status == 200){
  //把抓到的資料加以運用
  var str = JSON.parse(xhr.responseText);
  console.log(str);
  //選取 DOM，並渲染至網頁
  document.querySelector('#ajax_data_name').textContent = str.names;
  } else{
    console.log('資料讀取錯誤!!');
  }
  
}
