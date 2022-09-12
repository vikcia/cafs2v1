<?php
//Sukurkite klasę Worker, kuri paveldės
// User klasę ir įneš papildomą viešai
//neprienamą savybę salary ir viešai
// prieinamus metodus getSalary ir setSalary.
class Worker extends User
{
    function __construct($name, $age, private int $salary)
    {
        parent::__construct($name, $age);
//        $this->salary = $salary;
    }

    public function getSalary(): int
    {
        return $this->salary;
    }

    public function setSalary(int $salary)
    {
        $this->salary = $salary;
    }
}