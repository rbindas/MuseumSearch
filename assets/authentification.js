<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
   <!--  <meta http-equiv="X-UA-Compatible" content="ie=edge"> -->
    <title>Museum Search</title>

    <!-- Latest compiled and minified CSS -->
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

   <!-- Optional theme -->
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

   <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cerulean/bootstrap.min.css" rel="stylesheet" integrity="sha384-zF4BRsG/fLiTGfR9QL82DrilZxrwgY/+du4p/c7J72zZj+FLYq4zY00RylP9ZjiT" crossorigin="anonymous">

   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <script src="https://use.fontawesome.com/064a5d298d.js"></script>

    <link rel="stylesheet" href="assets/css/style.css">

    <!-- LINK TO jQuery -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


    <!-- LINK TO FIREBASE -->
    <script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>

    <!-- LINK TO GOOGLE FONTS -->
    <link href="https://fonts.googleapis.com/css?family=Artifika" rel="stylesheet">

</head>

<body>
	 <nav class="navbar navbar-default fixed-top" role="navigation">
      <div class="container">
      <!-- Navbar Header [contains both toggle button and navbar brand] -->
         <div class="navbar-header">
         <!-- Toggle Button [handles opening navbar components on mobile screens]-->
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" aria-hidden="true">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
            </button>
            <!-- Navbar Brand -->
            <span class="navbar-brand">Artsy Walks</span>
         </div>

      <!-- Navbar Collapse-->
         <div class="navbar-collapse collapse">
         <!-- Navbar Menu -->
            <ul class="nav navbar-nav navbar-right">
               <li><a href="index.html"><i class="fa fa-home fa-fw " aria-hidden="true"></i>&nbsp; Home</a></li>
               <li><a href="page1.html"><i class="fa fa-list" aria-hidden="true"></i>&nbsp; Personalize Itinerary</a></li>
               <li><a></a></li>
            </ul>
         </div>
      </div>
   </nav>

   <div class="container">

      <!-- Main jumbotron for a primary marketing message or call to action -->
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Culture In Time!</h1>
          <p>Summary of what this site is</p>

        </div>
      </div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#registerModal">Register</button>
<button type="button" class="btn btn-success" data-toggle="modal" data-target="#loginModal">Login</button>
<button type="button" class="btn btn-success" data-toggle="modal" data-target="#loginModal">Google</button>

      <div class="container">
         <h3>Ready To Search?</h3>
         <br>

          <div id="museum-view"></div>

          <form id="museum-type-input">
            <label for="type-input">Type of Museum</label>
            <input type="text" id="type-input">
            <hr>
            <!-- <input id="add-museum" type="submit" value="Search"> -->
            <button class="button"><span>Search </span></button>
         </form>

      <div id="gifs-appear-here"></div>





    <script type="text/javascript" src="assets/javascript/museum.js"></script>

</div>



</body>
</html>
