<?php

require_once('cities.php');

function optionCities($cities){
    $result = '';
    for ($i=0; $i < count($cities); $i++) {
        $value = $cities[$i];
        $result .= "<option value='{$value}'>{$value}</option>";
    }
    return $result;
}