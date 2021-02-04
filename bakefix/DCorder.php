<?php

$con = mysqli_connect('localhost','root');
mysqli_select_db($con,'bakefix');
if($con){
	header("Content-Type: application/json; charset=UTF-8"); //tell the browser that we are sending json data
	header("Access-Control-Allow-Origin:".$_SERVER['HTTP_ORIGIN']."");
    $query = "SELECT * FROM customorder";
    $result = mysqli_query($con,$query);
            
    if(mysqli_num_rows($result)>0){
            
        $members = array();

        while(($row = mysqli_fetch_assoc($result))!=null){
            $member = array(
                'order_id'=> $row['order_id'],
                'flavour'=> $row['flavour'],
                'filling'=> $row['filling'],
                'topping' => $row['topping'],
                'cust_name' => $row['cust_name'],
                'address' => $row['address'],
                'contact' => $row['contact'],
                'delivery_date' => $row['delivery_date'],
                'delivery_time' => $row['delivery_time'],
                'payment' => $row['payment'],
                'Write_up' => $row['Write_up'],
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

   