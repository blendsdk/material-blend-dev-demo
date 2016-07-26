<!DOCTYPE html>
<html>

<head>
    <title>BlendJS Development Demos</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link id="theme" href="blend/css/default/default.css" rel="stylesheet" type="text/css">
    <link id="theme" href="css/style.css" rel="stylesheet" type="text/css">
    <script src="blend/js/blend-debug.js"></script>
    <style>
        .main {
            margin:1%;
            padding:1%;
        }

        .transx {
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            will-change: transform;
            transition-duration: .2s;
            transition-timing-function: cubic-bezier(.4,0,.2,1);
            transition-property: transform;
            transition-property: transform,-webkit-transform;
        }

        .trans_close {
            -webkit-transform: translateX(-250px);
            transform: translateX(-250px);
        }

        .trans_open {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }

        .side {
            z-index:4
        }

        .content {
            z-index:5;
            border:1px solid red
        }
    </style>
</head>

<body class="material default">
<?php
    $demoName = isset($_GET['d']) ?  $_GET['d'] : "!";
    $demoFile = __DIR__ . '/js/' . $demoName . '.js';
    if(file_exists($demoFile)) {
        echo "<script src=\"js/{$demoName}.js\"></script>";
    } else {
        $files = glob(__DIR__.'/js/*.js');
        foreach($files as $index => $file) {
            $file = str_replace(__DIR__.'/js/','',$file);
            $name = str_replace(".js","",$file);
            $ucName = ucfirst($name);
            $files[$index] = "<a href=\"?d=$name\">{$ucName} Prototype</a>";
        }
        echo "<div class='main paper'><h5>Here are some development demos. We use these for internal testing.</h5><br/>";
        echo implode("<br/>\n",$files);
        echo "</div>";
    }
?>
</body>
</html>