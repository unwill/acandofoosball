<script type="text/javascript">

var apiURL = "https://41171e59-c41b6b65e9cc.my.apitools.com/"

$("#yoOneButton").click(function(){
    //pass the username typed in input field    
    yoOne($("#yoUsername").val());
});

$("#yoAllButton").click(function(){
    yoAll();
});

var yoOne = function(yoUsername){
    var url = apiURL;
    url += "yo/";
    $.post(url, {username:yoUsername})
    .done(function( data ) {
      console.log(data);
    })
    .fail(function(xhr, textStatus, errorThrown) {
      console.log("Error",xhr.responseText);
    });
}

var yoAll =function(){
    var url = apiURL;
    url += "yoall/";

    $.post(url)
    .done(function( data ) {
      console.log(data);
    })
    .fail(function(xhr, textStatus, errorThrown) {
      console.log("Error",xhr.responseText);
    });
}
</script>