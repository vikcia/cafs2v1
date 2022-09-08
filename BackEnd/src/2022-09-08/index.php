<?php

//function include_all_php($folder){
//    foreach (glob("{$folder}/*.php") as $filename)
//    {
//        include $filename;
//    }
//}
//include_all_php("classes_php");
require_once __DIR__ . '/classes_php/Vehicle.php';
require_once __DIR__ . '/classes_php/Plane.php';
require_once __DIR__ . '/classes_php/Motorcycle.php';
require_once __DIR__ . '/classes_php/Car.php';
require_once __DIR__ . '/classes_php/Bus.php';
require_once __DIR__ . '/classes_php/Boat.php';
require_once __DIR__ . '/classes_php/Cars/Bmw.php';



$vehicle = new Vehicle('Zapas', 330, 2022);
$plane = new Plane('Kukuruznikas','Super', 1998, 2);
$motorcycle = new Motorcycle('Honda', 'XL600', 1994, 2);
//$car = new Car();
//$bus = new Bus();
//$boat = new Boat();
//$bmw = new Bmw();


var_dump($vehicle);
var_dump($plane);
var_dump($motorcycle);