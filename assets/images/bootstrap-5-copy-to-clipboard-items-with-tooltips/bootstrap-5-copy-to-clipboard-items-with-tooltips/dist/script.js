function copy(text, target) {
setTimeout(function() {
$('#copied_tip').remove();
}, 800);
$(target).append("<div class='tip' id='copied_tip'>Copied!</div>");
var input = document.createElement('input');
input.setAttribute('value', text);
document.body.appendChild(input);
input.select();
var result = document.execCommand('copy');
document.body.removeChild(input)
return result;
}