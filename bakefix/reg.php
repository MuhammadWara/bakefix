<?php
header("Access-Control-Allow-Origin:".$_SERVER['HTTP_ORIGIN']."");
$con1 = mysqli_connect('localhost','root');
mysqli_select_db($con1,'bakefix');


if($con1){
//	header("Content-Type: application/json; charset=UTF-8"); //tell the browser that we are sending json data
	
  $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata))
    {
    	
        $request = json_decode($postdata);
        print_r($request);

        $name = $request->{'name'};
        $email = $request->{'email'};
        $password = $request->{'password'};
        $phone = $request->{'phone'};

       	
            $query = "INSERT INTO members(username,user_email,password,contact) VALUE('".$name."','".$email."','".$password."','".$phone."')";

        $result = mysqli_query($con1,$query);
            
            if($result){
                $response['status'] = true;
                $response['response_code'] = 301;
                $response['message'] = 'Product Added Successfully';
            }
            else{
                $response['status'] = false;
                $response['response_code'] = 401;
                $response['message'] = 'Product insertion failed';
            }


        }
  }
else{
    echo "not connected";
}
   
?>
