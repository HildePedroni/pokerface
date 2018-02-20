var pattern = /\:\|(.*?)\|\:/g;

/*
    Send a jsonArray to this function to generate a complete html filled with data.
 */
function loadTemplateList(template_src, dataArray, callbackFunction) {
    var jsonData = JSON.parse(dataArray);

    var template_complete = '';
    loadHtml(template_src, function (template) {
            $.each(jsonData, function (k, json) {
                template_complete += parseTemplate(template, json);
            });
            callbackFunction(template_complete);
        }
    )
}

function parseTemplate(template, json) {
    var match;
    var final_html_template = template;
    do {
        match = pattern.exec(template);
        if (match) {
            if (json.hasOwnProperty(match[1])) {
                final_html_template = final_html_template.replace(match[0], json[match[1]]);
            }
        }
    }
    while (match);
    return final_html_template;
}

/*
    Call this function to fill a template with desired data
    template_src : the html source
    data : Json data, with params to be replaced in template
    callbackFunction : A function to deal with the final data
*/
function loadTemplate(template_src, data, callbackFunction) {
    loadHtml(template_src, function (template) {
        var jsonData = JSON.parse(data);
        var parsedHtml = parseTemplate(template, jsonData);
        callbackFunction(parsedHtml)
    });
}


function loadHtml(template_src, callback) {
    var mSrc = sessionStorage.getItem('src');
    if (mSrc !== template_src) {
        //sessionStorage.setItem('src', template_src);
        $.ajax({
            url: template_src,
            type: 'GET',
            dataType: 'text',
            success: function (template) {

                // sessionStorage.setItem('html_template', template);
                callback(template);
            },
            error: function (error) {
                console.log('Error loading template', error);
            }
        });
    } else {

        var mHtmlTemplate = sessionStorage.getItem('html_template');
        callback(mHtmlTemplate);
    }
}