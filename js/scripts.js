$(document).ready(function() {
  var nextMarker;
  // this gets the amount of objects in cloud
  var faceQttyPromise = $.getJSON('https://sh1a.qingstor.com/cbfaces/?stats');
  var firstPromise = $.getJSON('https://sh1a.qingstor.com/cbfaces/?limit=1000');
  var nextPromise;
  var batchQtty;
  var count;
  var keys = [];
  var face;
  var name;

  // makes the first request without marker
  $.when(firstPromise, faceQttyPromise).then(function(firstBatch, statusData){
    nextMarker = firstBatch[2].responseJSON.next_marker;
    batchQtty = firstBatch[2].responseJSON.keys.length;
    count = statusData[2].responseJSON.count;
    count = (count - batchQtty).toString();
    keys = keys.concat(firstBatch[2].responseJSON.keys);
    nextPromise = $.getJSON('https://sh1a.qingstor.com/cbfaces/?limit=' + count + '&marker=' + nextMarker);

    $.when(nextPromise).then(function(nextBatch){
      keys = keys.concat(nextBatch.keys);
      keys = keys.sort(function(a,b){
        return new Date(b.created).getTime() - new Date(a.created).getTime();
      });

      console.log(keys.length);

      for (var i = 0; i < keys.length; i++){
        name = keys[i].key.split(".")
        if(name[1] == "jpg"){
          face = '<img src="https://sh1a.qingstor.com/cbfaces/' + keys[i].key + '" alt="face" class="face-thumb float-left img-thumbnail"/>';
          $("#pic-box").append(face);
          // console.log(keys[i]);
        };
      }
    }); // $.when(nextPromise)
  }); // $.when(firstPromise)
}); // $(document).ready

function callAPI(marker, quantity){

}
