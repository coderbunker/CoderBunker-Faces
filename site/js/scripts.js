$(document).ready(function() {
  var name;
  var face;
  $.getJSON('https://sh1a.qingstor.com/cbfaces/', function(data){
    for (var i = 0; i < data.keys.length; i++){
      name = data.keys[i].key.split(".")
      if(name[1] == "jpg"){
        face = '<img src="https://sh1a.qingstor.com/cbfaces/' + data.keys[i].key + '" alt="face" class="face-pic img-thumbnail float-left"/>';
        $(".pic-box").append(face);
      };
    }
  });
});
