<?php

$con = mysqli_connect('localhost','root');
mysqli_select_db($con,'bakefix');
if($con){
  $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);
        print_r($request);


        }
else{
    echo "not connected";
}
   }
?>
