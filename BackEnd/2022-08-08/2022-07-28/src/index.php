<?php
//$pyramidTop = 1;
//$pyramidHeight = 9;
//while($pyramidTop <= $pyramidHeight) {
//    for( $i=0 ; $i<$pyramidTop ; $i++ ){
//        echo $pyramidTop;
//    }
//    echo "<br/>";
//    $pyramidTop++;
//}
//?>
<!--Sukurti masyvą, kuris aprašytų knygos duomenis: title, author, year, genre-->
<!---->
<!--Sukurti masyvą, kurio elementai būtų masyvai aprašantys knygas. Minimum 3.-->
<!---->
<!--Išvesti visus knygų masyvo elementus su var_dump;-->
<!---->
<!--Išvesti visų visų knygų metų vidurkį;-->
<?php
//$book1 = [
//    "title" => "Da Vinci Code". "<br>",
//    "author" => "Brown, Dan". "<br>",
//    "year" => 2003,
//    "genre" => "Crime, Thriller & Adventure". "<br>",
//];
//$book2 = [
//    "title" => "Harry Potter and the Deathly Hallows" . "<br>",
//    "author" => "Rowling, J.K." . "<br>",
//    "year" => 2007,
//    "genre" => "Children's Fiction" . "<br>",
//];
//$book3 = [
//    "title" => "Fifty Shades of Grey" . "<br>",
//    "author" => "James, E. L." . "<br>",
//    "year" => 2011,
//    "genre" => "Romance & Sagas" . "<br>",
//];
//var_dump($book1);
//echo('---------------------------------') . "<br>";
//var_dump($book2);
//echo('---------------------------------') . "<br>";
//var_dump($book3);
//echo('---------------------------------') . "<br>";
//$average = (($book1["year"]+$book2["year"]+$book3["year"])/3);
//var_dump('Vidurkis', $average);
////$combinedArray = [$book1["year"], $book2["year"], $book3["year"]];
////var_dump($combinedArray);
//?>
<?php
//Sukurkite dvimatį masyvą. Pirmieji du raktai yra lt ir en.
//
//Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai.
//
//Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
//
//Parodikite dabartinės dienos pavadinimą
//
//Sukurkite kintamuosius lang (reikšmės lt arba en) ir parodykite dieną
$days =
[
    'lt' => [
        1 => 'Pirmadienis'. "<br>",
        2 => 'Antradienis'. "<br>",
        3 => 'Treciadienis'. "<br>",
        4 => 'Ketvirtadienis'. "<br>",
        5 => 'Penktadienis'. "<br>",
        6 => 'Sekmadienis'. "<br>",
        7 => 'Sekmadienis'. "<br>",
        ],
    'en' => [
        1 => 'Monday'. "<br>",
        2 => 'Tuesday'. "<br>",
        3 => 'Wednesday'. "<br>",
        4 => 'Thursday'. "<br>",
        5 => 'Friday'. "<br>",
        6 => 'Saturday'. "<br>",
        7 => 'Sunday'. "<br>",
    ],
];
var_dump($days['lt']);
var_dump($days['en']);

$today = [date('N')];

var_dump($days['lt'][date('N')]);
var_dump($days['en'][date('N')]);
?>