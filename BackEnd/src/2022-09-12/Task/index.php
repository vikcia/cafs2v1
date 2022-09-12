<?php
require_once __DIR__ . '/classes/Person.php';

require_once __DIR__ . '/classes/Programmer.php';
require_once __DIR__ . '/classes/Student.php';
require_once __DIR__ . '/classes/Teacher.php';


$programmer = new Programmer();
$student = new Student();
$teacher = new Teacher();

var_dump($programmer->getGreetings());
var_dump($student->getGreetings());
var_dump($teacher->getGreetings());
var_dump($teacher->getGreetings());