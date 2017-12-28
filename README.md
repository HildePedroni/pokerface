# pokerface :|
A tiny lib to use html templates in JS

#Dependecies
This lib uses jquery to work
Put this script at the begining of your html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

then puth de pokerface.js
<script src="js/pokerface.js"></script>

#Usage

Create a template that you want and put the desired data between the pokerface delimiter :| |:

<div>
    <h1>:|my_title|:</h1>
</div>

then in yout JS file, you can call the loadTemplate function, passind a json

var data = {
    'my_title':'Here comes a title'
}
loadTemplate('path_to_your_template/template.html', 
              JSON.stringify(data), 
              function(finalTemplate){
                    //Put the template whatever you want
                    $('#id_title').html(finalTemplate);
              });

have fun!






