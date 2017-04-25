$(document).ready(function() {
  var name;
  var face;
  $.getJSON('https://sh1a.qingstor.com/cbfaces/', function(data){
    // sort the keys by their date
    var keys = data.keys.sort(function(a,b){
      return new Date(b.created).getTime() - new Date(a.created).getTime();
    });
    console.log(keys);
    for (var i = 0; i < keys.length; i++){
      name = keys[i].key.split(".")
      if(name[1] == "jpg"){
        face = '<img src="https://sh1a.qingstor.com/cbfaces/' + keys[i].key + '" alt="face" class="face-thumb img-thumbnail float-left"/>';
        $(".pic-box").append(face);
        console.log(keys[i]);
      };
    }
  });
});
