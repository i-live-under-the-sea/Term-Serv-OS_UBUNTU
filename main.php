<?php 
		session_start();
?>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" integrity="sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA==" crossorigin="anonymous"></script>
	<title>Ubuntu</title>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Ubuntu');
		@import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');

		body{
			font-family: ubuntu;
			color: white;
		}

		.fa-terminal:before{
			color: white;
			font-family: ubuntu;
    		content: "<?php echo $_SERVER['HTTP_HOST'].":"; ?>";
		}
	</style>
</head>
<body onload="localStorage.setItem('path', './users/<?php echo $_SERVER['HTTP_HOST']; ?>/')">
	<?php 
		if(file_exists("./users/".$_SERVER["HTTP_HOST"]) != true){
			shell_exec("mkdir ./users/".$_SERVER["HTTP_HOST"]);
		}
		if(file_exists("./users/".$_SERVER["HTTP_HOST"].'/desktop') != true){
			shell_exec("mkdir ./users/".$_SERVER["HTTP_HOST"].'/desktop');
		}
		if(file_exists("./users/".$_SERVER["HTTP_HOST"].'/documents') != true){
			shell_exec("mkdir ./users/".$_SERVER["HTTP_HOST"].'/documents');
		}
		if(file_exists("./users/".$_SERVER["HTTP_HOST"].'/downloads') != true){
			shell_exec("mkdir ./users/".$_SERVER["HTTP_HOST"].'/downloads');
		}
	?>
	<?php
		if(isset($_GET['logout'])){
			unset($_SESSION['login']);
			echo "<script>window.location.href='main.php'</script>";
		}

		$pwd = "Test1212";
		if(isset($_POST['pwd'])){
			if($_POST['pwd'] == $pwd){
				$_SESSION['login'] = "LOGIN";
			}else{
				echo "<p class='error'>Incorrect Password</p>";
			}
		}

		if(isset($_SESSION['login']) == false){
			//41 5 31
			echo '<link rel="stylesheet" href="public/login.css">';
			echo '
				<div class="canvas">
				<img class="icon" src="public/imgs/user.png">
				<h2 class="name">'.$_SERVER["HTTP_HOST"].'</h2>
				<p class="pwd">Password:</p>
				<form method="POST">
					<input name="pwd" id="pwd" onload="this.select()" type="password" class="txt-pwd">
					<button class="cancel">Cancel</button>
					<button class="unlock">Unlock</button>
				</form>
				</div>
			';
		}else{
			echo '
				<link rel="stylesheet" href="public/main.css">
				<link rel="stylesheet" href="public/page.css">
			';

			echo '
				<div id="task-bar" class="side-bar">
					<img onclick="apps(`fe`)" class="apps-f" src="public/imgs/expo.png">
					<img onclick="apps(`ff`)" class="appss" src="public/imgs/ff.png">
				</div>
				<div id="top-bar" class="top-bar"><span style="position: absolute; left: 1%; padding-top: 2px;">'.$_SERVER["HTTP_HOST"].'</span><div id="timing" style="text-align: center; padding-top: 2px;"></div>
					<button id="powerbtn" class="power">&#x23FB; <i class="fa fa-caret-down"></i></button>
					<div onclick="logout()" id="powermenu">Logout</div>
				</div>
			';

			echo '
				<script src="public/term.js"></script>
				<script src="public/get.js"></script>
			';
		}
	?>	
</body>
</html>