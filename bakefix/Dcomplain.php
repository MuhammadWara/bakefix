<?php

$con = mysqli_connect('localhost','root');
mysqli_select_db($con,'bakefix');
if($con){
	header("Content-Type: application/json; charset=UTF-8"); //tell the browser that we are sending json data
	header("Access-Control-Allow-Origin:".$_SERVER['HTTP_ORIGIN']."");
    $query = "SELECT * FROM complain";
    $result = mysqli_query($con,$query);
            
    if(mysqli_num_rows($result)>0){
            
        $complains = array();

        while(($row = mysqli_fetch_assoc($result))!=null){
            $complain = array(
                'com_id'=> $row['com_id'],
                'Cname'=> $row['Cname'],
                'Cemail'=> $row['Cemail'],
                'subject' => $row['subject'],
                'message' => $row['message']
            );
            array_push($complains,$complain);
        }
        $response= array(
			'status' => true,
			'response_code' => 302,
			'message'=> 'products available',
			'members'=> $complains
			);
        echo json_encode($response);   
    }
}
else{
    echo "not connected";
}
   
?>

   