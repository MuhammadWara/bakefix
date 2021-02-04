  <?php
header("Access-Control-Allow-Origin:".$_SERVER['HTTP_ORIGIN']."");
$con1 = mysqli_connect('localhost','root');
mysqli_select_db($con1,'bakefix');


if($con1){


   
    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata))
    {
        
        $request = json_decode($postdata);
        print_r($request);

            $name = $request->{'name'};
            $password = $request->{'password'};
            $Loggedin = $request->{'Loggedin'};
            
            

            $name=mysqli_real_escape_string($con1,$name);
            $password=mysqli_real_escape_string($con1,$password);
            $query = "SELECT * FROM members WHERE username = '".$name."' and password = '".$password."'";
            //echo $query;
            $result = mysqli_query($con1,$query);
            
            // if($result){
                 if(mysqli_num_rows($result)>0){
                   $request = "true";
                    echo "login check";
                    
                $user = array();
                while(($row = mysqli_fetch_assoc($result))!=null){
                    $user = array();
                    $user['user_id'] = $row['mem_id'];
                    $user['user_name'] = $row['username'];
                    $user['user_email'] =  $row['user_email'];
                    $user['user_password'] =  $row['password'];
                        

                    $user[] = $user;
                }
                $response['status'] = true;
                $response['response_code'] = 302;
                $response['message'] = 'user available';
                $response['user'] = $user;
            }
               
            // }
            else{
               $request = "false";
                echo "not logged in";
                $response['status'] = false;
                $response['response_code'] = 300;
                $response['message'] = 'user not available';
                 
            }
             }
         }
else{
    echo "not connected";
}

?>