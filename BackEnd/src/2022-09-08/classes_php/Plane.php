<?php
//define('ROOT_PATH', dirname(__DIR__));
//require_once ROOT_PATH . '/classes_php/Vehicle.php';

class Plane extends Vehicle
{
	function __construct(string $make, $model, int $year, int $wheels)
    {
		parent::__construct($make, $model, $year);

		$this->wheels = $wheels;
	}

	public function getFuelType()
    {
		return [5];
	}
}