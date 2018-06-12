<?php 
header("Content-type","text/html;charset=utf-8");
//获取数据
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];

	//2、处理(连接数据库，进行查询)
	//1)、连接数据库
	$conn = mysql_connect("localhost","root","root");
	//2）、选择数据库
	mysql_select_db("mydb1802",$conn);
	
	//3)、执行SQL语句
	$sqlstr="select * from usertable where username='".$username."' and userpass='".$userpass."'";
	$result = mysql_query($sqlstr,$conn);
	if(mysql_num_rows($result)>0){
		$rows =1;
	}else{
		$rows =0;
	}
	//4）、关闭数据库
	mysql_close($conn);
		
	//3、响应
	echo $rows;
 ?>