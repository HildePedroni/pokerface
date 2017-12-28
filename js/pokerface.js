
/*
    Call this function to fill a template with desired data
    template_src : the html source
    data : Json data, with params to be replaced in template
    callbackFunction : A function to deal with the final data
*/
function loadTemplate(template_src, data, callbackFunction){
    loadHtml(template_src, function(template){
        jsonData = JSON.parse(data);
        var regex1 = /\:\|(.*?)\|\:/g;
        var match;
        var final_html_template = template;
        do {
            match = regex1.exec(template);
            if (match) {
                if(jsonData.hasOwnProperty(match[1])){
                    var property = match[0];
                    var data_to_replace = jsonData[match[1]];
                    final_html_template = final_html_template.replace(match[0], jsonData[match[1]]);
                }
            }
        } while (match);
        callbackFunction(final_html_template);        
    });
}

function loadHtml(template_src, callback){
    $.ajax({
        url: template_src,
        type: 'GET',
        dataType: 'text',
        success: function(template) {            
            callback(template);
        },
        error: function(error) {
            console.log('Error loading template', error);
        }        
    });
    
}