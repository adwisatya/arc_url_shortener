<?php
	include("connect.php");
	$cmd = $_POST['command'];
	if(isset($cmd)){
		$url = $_POST['url'];
		if(isset($_POST['optShorten'])){
			$shorten = $_POST['optShorten'];
		}else{
			$shorten = substr(md5($url),0,5);
		}
		switch ($cmd){
			case 0 : 
				mysql_query("INSERT INTO shorter (`shorten`,`link`) VALUES ('$shorten', '$url')");
				break;
			case 1 : 
				break :
		}
	}
	
	function searchURL($url){
		
	}
?>