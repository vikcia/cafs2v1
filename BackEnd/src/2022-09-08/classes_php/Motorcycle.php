<?php
class Motorcycle extends Vehicle
{
	function __construct($make, $model, $year, $wheels)
    {
		parent::__construct($make, $model, $year);
//---------------------
		$this->setWheelsNumber($wheels);
	}

	public function getFuelType() {
		return [1,2];
	}
}