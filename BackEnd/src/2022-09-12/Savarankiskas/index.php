<?php

require_once __DIR__ . '/classes/User.php';
//require_once __DIR__ . '/classes/Driver.php';
require_once __DIR__ . '/classes/Student.php';
var_dump(__DIR__ . '/classes/Worker.php');
//require_once __DIR__ . '/classes/Worker.php';


//Sukurkite vieną studentą ir viena vairuotoją
// ir užduokite jiems visas reikiamas savybes.
//Vardą ir amžių nustatykite sukurimo metu

$student = new Student('Vardenis', 20, 199);
//$driver = new Driver('Antanas', 54, ['A', 'B']);
var_dump($student);
//var_dump($driver);


//var_dump($student);
//var_dump($student->getName());
//var_dump($student->getAge());