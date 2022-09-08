<?php
class Vehicle
{
    protected $make;
    protected $model;
    protected $year;

	function __construct(string $make, $model, int $year)
    {
		$this->make  = $make;
		$this->model = $model;
		$this->year  = $year;
	}

	public function setWheelsNumber(int $wheels):void
    {
		$this->wheels = $wheels;
	}

    public function getIntroduction()
    {
		return $this->make . ' ' . $this->model;
	}

    public function getAge():int
    {
		return (date('Y')) -  $this->year;
	}

    public function getAgeText()
    {
		if ($this->getAge() <= 10) {
			return '10 years or newer';
		} else {
			return '11 years or older';
		}
	}

    public function getWheelsNumber()
    {
		return Number($this->wheels) || 0;
	}

    public function getWheelsNumberText()
    {
		return static::class . 'has' . $this->getWheelsNumber() . 'wheels';
	}

    public function getFuelType()
    {
		throw new Exception('Fuel type not found');
	}
}