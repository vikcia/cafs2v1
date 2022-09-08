<?php
class Car extends Vehicle
{
	function __construct(string $make, $model, int $year) {
		parent::__construct($make, $model, $year);

		$this->wheels = 4;
	}

	public function getFuelType() {
		return [1,2];
	}
}