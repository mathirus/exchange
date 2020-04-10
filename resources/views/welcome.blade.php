<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
  
    
        <!-- Styles -->
        <script src="{{ asset('js/app.js') }}" defer></script>

    </head>
    <body>
        <div id="app">
            <header-component></header-component>
            <router-view></router-view>
        </div>
    </body>
</html>
