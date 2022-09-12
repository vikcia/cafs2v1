<?php
//Sukurkite klasę Driver, kuri paveldėtų Worker
// klasę ir įneštų papildomas savybes:
//vairavimo patirtis, vairavimo kategorija
// (A, B, C).

class Driver extends Worker
{
    function __construct($name, $age, private array $drExp)
    {
        parent::__construct($name, $age);
        $this->drExp = $drExp;
    }

    public function getDrExp(): array
    {
        return $this->drExp;
    }

    public function setDrExp(array $drExp)
    {
        $this->drExp = $drExp;
    }
}