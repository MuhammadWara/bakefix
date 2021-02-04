<?php

$con = mysqli_connect('localhost','root');
mysqli_select_db($con,'bakefix');
if($con){
	header("Content-Type: application/json; charset=UTF-8"); //tell the browser that we are sending json data
	header("Access-Control-Allow-Origin:".$_SERVER['HTTP_ORIGIN']."");
    $query = "SELECT * FROM members";
    $result = mysqli_query($con,$query);
            
    if(mysqli_num_rows($result)>0){
            
        $members = array();

        while(($row = mysqli_fetch_assoc($result))!=null){
            $member = array(
                'mem_id'=> $row['mem_id'],
                'mem_name'=> $row['username'],
                'mem_email'=> $row['user_email'],
                'password' => $row['password'],
                'mem_contact' => $row['contact']
            );
            array_push($members,$member);
        }
        $response= array(
			'status' => true,
			'response_code' => 302,
			'message'=> 'products available',
			'members'=> $members
			);
        echo json_encode($response);   
    }
}
else{
    echo "not connected";
}
   
?>

   