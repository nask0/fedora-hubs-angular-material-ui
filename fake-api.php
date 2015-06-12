<?php
mb_internal_encoding('UTF-8');

// @todo
$clientPublicToken = substr(hash('sha512', 'clientPublicToken'), 0, 24);
$clientPrivateToken = substr(hash('sha512', 'clientPrivateToken'), 0, 32);

$id = (empty($_GET['id'])) ? false : (string) $_GET['id'];
$route = (empty($_GET['route'])) ? false : (string) $_GET['route'];
$subRoute = (empty($_GET['sub_route'])) ? false : (string) $_GET['sub_route'];

$dataDir = realpath(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'data/static/json' . DIRECTORY_SEPARATOR;

$jsonFile = $dataDir;
if ( $route && (!$subRoute && !$id) ) {
    $jsonFile .= $route . '.static.json';
} else if ( $route && $subRoute ) {
    $jsonFile .= $route . '-'. $subRoute .'.static.json';
} else if ( $route && $id ) {
    $jsonFile .= $route . '-single-'. $id. '.static.json';
}

if ( !file_exists($jsonFile) ) {
    die("Missing json file ! $jsonFile");
}

$httpBody = file_get_contents($jsonFile);

header('Content-type: application/json; charset=UTF-8');
header('Content-Length: '.strlen($httpBody));
header('Cache-Control: public, max-age=60, s-maxage=60');

header('X-Powered-By: hubs-ui-demo-api');
header('X-Content-Type-Options: nosniff');
header('X-XSS-Protection: 1; mode=block');
header('X-Frame-Options: deny');
header('X-RateLimit-Limit: 60');
header('X-RateLimit-Remaining: 59');
header('X-FedoraHubs-Request-Id: '.uniqid(sha1('sad'.mt_rand(1,99999))));
header('X-CSRF-Token: '.substr(hash('sha256', '_csrf_token_'.mt_rand(1,99999)), 0, 32));

header('Vary: Accept');

echo $httpBody;
exit;