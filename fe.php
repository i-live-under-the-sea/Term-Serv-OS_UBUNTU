<?php 
    if(isset($_GET['path'])){
        if($_GET['path'] == "home"){
            $output = shell_exec("ls ./users/".$_SERVER['HTTP_HOST']);
            echo $output;
        }else{
            $output = shell_exec("ls ".$_GET['path']);
            echo $output;
        }
    }elseif($_GET['rename']){
        $output = shell_exec("mv ".$_GET['rename']." ".$_GET['newname']);
    }elseif($_GET['trash']){
        $output = shell_exec("mv ".$_GET['trash']. " ./users/localhost:8080/.trash");
    }elseif($_GET['del']){
        $output = shell_exec("rm -rf ".$_GET['del']);
    }elseif($_GET['compress']){
        $output = shell_exec("zip ".$_GET['compress'].".zip"." ".$_GET['compress']);
    }elseif($_GET['createfo']){
        $output = shell_exec("mkdir ".$_GET['createfo']);
    }elseif($_GET['dell']){
        $output = shell_exec("rm ".$_GET['dell']);
    }elseif($_GET['tc']){
        $output = shell_exec("touch ".$_GET['tc']);
    }elseif($_GET['mk']){
        $output = shell_exec("mkdir ".$_GET['mk']);
    }elseif($_GET['emptrash']){
        $files = glob('users/'.$_SERVER['HTTP_HOST'].'/.trash/*');
        foreach($files as $file){
            if(is_file($file)) {
                unlink($file);
            }
        }
    }
?>