<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield("title")</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css">
    </head>
    <body>
        @yield("content")
    </body>
    {{Html::script("https://code.jquery.com/jquery-3.2.1.js")}}
    {{Html::script("https://www.gstatic.com/firebasejs/4.8.1/firebase.js")}}
    {{Html::script("js/main.js")}}
</html>