<?php
//Sukurkite klasę Student.php, kuri paveldės User
// klasę ir įneš papildomas viešais
//neprienamas savybes stipendija, kursas
// bei jiems reikalingus metodus
class Student extends User
{

    function __construct($name, $age, private int $scholarship)
    {
        parent::__construct($name, $age);
        $this->scholarship = $scholarship;
    }

    public function getScholarship(): int
    {
        return $this->scholarship;
    }

    public function setScholarship(int $scholarship)
    {
        $this->scholarship = $scholarship;
    }
}