<?php
// @todo
$baseUrl = 'http://fedora-hubs.dev';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <meta name="description" content="Fedora Hubs on AngularJS / Material design">

        <link rel="shortcut icon" href="img/favicon.ico">
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/0.9.0/angular-material.min.css">

        <!-- Loading local styles -->
        <link rel="stylesheet" href="css/styles.css">

        <title>Fedora Hubs demo UI</title>

        <link href='http://fonts.googleapis.com/css?family=Comfortaa:400,700' rel='stylesheet' type='text/css'>

        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-aria.min.js"></script>

        <script src="<?php echo $baseUrl; ?>/js/libs/vendor/angular-ui-router.js"></script>
        <script src="<?php echo $baseUrl; ?>/js/libs/vendor/angular-material.js"></script>
        <script src="<?php echo $baseUrl; ?>/js/libs/vendor/underscore-min.js"></script>

        <!-- Load app-specific files -->
        <script src="<?php echo $baseUrl; ?>/js/app.js"></script>

        <script type="text/javascript">
            // this param may be used for scripts out of the angularjs app
            window.baseUrl = '<?php echo $baseUrl; ?>';
            // put specific app configurations here
            window.appConfig = {
                baseUrl: '<?php echo $baseUrl; ?>'
            };
        </script>
    </head>

    <body ng-app="fedoraHubs" style="font-family: 'Roboto';">

    </body>
</html>
