$(function(){
    var data = {
        'title':'Here comes a title',
        'my_div_text':'It Works!!'
    }
    loadTemplate('templates/template.html', JSON.stringify(data), function(finalTemplate){
        $('#id_title').html(finalTemplate);
    });
});