# pokerface :|
A tiny lib to use html templates with JS

# Dependecies
This lib uses jquery to work.

the jquery have to come before porkerface lib

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/pokerface.js"></script>
```
# Usage

Create a template that you want and put the desired data between the pokerface delimiter :| |:
```html
<div>
    <h1>:|my_title|:</h1>
</div>
```
Then in yout JS file, you can call the loadTemplate function using a Json Data.
The key value must match with the value inside the  :|my_title|:

```javascript

var data = {
    'my_title':'Here comes a title'
}
loadTemplate('path_to_your_template/template.html', 
              JSON.stringify(data), 
              function(finalTemplate){
                    //Put the template whatever you want
                    $('#id_title').html(finalTemplate);
              });
```

You can use a JsonArray to loop through a template and get a list of templates filled with data.
Use this to fill lists and tables.

Example: 

```javascript
    //Build the array
    //... another code
    var array = [];
    $(my_iterable).each(function () {
        var data = {
            'name': this.name,
            'email': this.email
        };
        array.push(data);
    });

    var tbody = $("#my_table");
    loadTemplateList('path_to_your_template/template.html', JSON.stringify(array), 
    function (template_filled) {
        tbody.append(template_filled);
        //... whathever you wanto to execute when done loading the template
    });

```




have fun!

