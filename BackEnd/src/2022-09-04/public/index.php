<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
//    require_once 'upload.php';
    require_once 'views/redirect.phtml';
} else {
    require_once 'views/index.phtml';
}
//header("https://codeacademy.lt/");
//$json = json_encode($_REQUEST);
//$req_dump = print_r($json, true);
//$fp = file_put_contents('request.json', $req_dump, FILE_APPEND);
////exit();
//function Redirect($url, $permanent = false)
//{
//    header('Location: ' . $url, true, $permanent ? 301 : 302);
//
//    exit();
//}
//
//Redirect('https://codeacademy.lt/', false);
////$countReq = count($_REQUEST);
//var_dump(count($_REQUEST));

//$redis = new Redis();
//$redis->connect('127.0.0.1', 6379);
//$redis->auth('REDIS_PASSWORD');
//
//$max_calls_limit  = 3;
//$time_period      = 10;
//$total_user_calls = 0;
//
//if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
//    $user_ip_address = $_SERVER['HTTP_CLIENT_IP'];
//} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
//    $user_ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
//} else {
//    $user_ip_address = $_SERVER['REMOTE_ADDR'];
//}
//
//if (!$redis->exists($user_ip_address)) {
//    $redis->set($user_ip_address, 1);
//    $redis->expire($user_ip_address, $time_period);
//    $total_user_calls = 1;
//} else {
//    $redis->INCR($user_ip_address);
//    $total_user_calls = $redis->get($user_ip_address);
//    if ($total_user_calls > $max_calls_limit) {
//        echo "User " . $user_ip_address . " limit exceeded.";
//        exit();
//    }
//}
//
//echo "Welcome " . $user_ip_address . " total calls made " . $total_user_calls . " in " . $time_period . " seconds";