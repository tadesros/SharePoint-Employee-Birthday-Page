<script src="//code.jquery.com/jquery-3.2.1.min.js" type="text/javascript"></script>
<script type="text/javascript">

$(function(){


$("#btnClick").click(function(){
var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('EMPBDAYNANNV')/items";
$.ajax({
url: requestUri,
type: "GET",
headers: {
"accept":"application/json; odata=verbose"
},

success: onSuccess,
error: onError
});

function onSuccess(data) {
var items = data.d.results;
for (var i = 0; i < items.length; i++) {
alert(items[i].Employee+ " : " + items[i].Birthday+ " : " + items[i].Location);
}
}
function onError(error) {

alert(JSON.stringify(error));
}
});
});
</script>

<input type="button" id="btnClick" value="Get all List Items"/>