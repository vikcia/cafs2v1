<?php
define('UPLOAD_DIR', dirname(__FILE__) . '/uploads');
define('ALLOWED_EXTENSIONS', ['png','jpg','jpeg']);

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }

    return $randomString;
}

    if (isset($_FILES['some-file-name'])) {
        $file = $_FILES['some-file-name'];

        if ($file['error'] == UPLOAD_ERR_OK) {
            $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
            $ext = strtolower($ext);

            if (!in_array($ext, ALLOWED_EXTENSIONS)) {
                echo 'File ext not allowed';

                exit;
            }

            $path = UPLOAD_DIR . '/' . date('Y/m/d');

            if (!is_dir($path)) {
                mkdir($path, 0777, TRUE);
            }

            do {
                $name = generateRandomString(16);

                $path = sprintf('%s/%s.%s', $path, $name, $ext);
            } while (file_exists($path));

            move_uploaded_file($file['tmp_name'], $path);
            $downloadFilePath = str_replace('/var/www', '', $path);

            $image = imagecreatefromjpeg('profileimg.jpg');
            $watermarkImage = imagecreatefromjpeg($path);

            $margeRight = 830;
            $margeBottom = 430;

            $watermarkImageWidth = imagesx($watermarkImage);
            $watermarkImageHeight = imagesy($watermarkImage);

            imagecopy(
                $image,
                $watermarkImage,

                imagesx($image) - $watermarkImageWidth - $margeRight,
                imagesy($image) - $watermarkImageHeight - $margeBottom,

                0,
                0,

                imagesx($watermarkImage),
                imagesy($watermarkImage)
            );

            $fontPath = './open-sans/OpenSans-ExtraBoldItalic.ttf';

            $name = isset($_POST["name"]) ? $_POST["name"] : "";
            $surName = isset($_POST["surName"]) ? $_POST["surName"] : "";
            $city = isset($_POST["city"]) ? $_POST["city"] : "";
            $C = isset($_POST["C++"]) ? $_POST["C++"] : "";
            $PHP = isset($_POST["PHP"]) ? $_POST["PHP"] : "";
            $Python = isset($_POST["Python"]) ? $_POST["Python"] : "";
            $info = isset($_POST["info"]) ? $_POST["info"] : "";
            $colorBlack = imagecolorallocate($image, 0, 0, 0);

            imagettftext($image, 20, 0, 320, 150, $colorBlack, $fontPath, $name);
            imagettftext($image, 20, 0, 320, 235, $colorBlack, $fontPath, $surName);
            imagettftext($image, 20, 0, 320, 320, $colorBlack, $fontPath, $city);
            imagettftext($image, 25, 0, 320, 405, $colorBlack, $fontPath, $C);
            imagettftext($image, 25, 0, 390, 405, $colorBlack, $fontPath, $PHP);
            imagettftext($image, 25, 0, 480, 405, $colorBlack, $fontPath, $Python);
            imagettftext($image, 25, 0, 320, 500, $colorBlack, $fontPath, $info);

            header('Content-type: image/png');
            imagepng($image);

            imagedestroy($image);
            imagedestroy($watermarkImage);


        }
    }
//require_once 'views/index.phtml';