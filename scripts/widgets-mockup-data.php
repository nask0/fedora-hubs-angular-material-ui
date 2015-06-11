<?php
/**
 * Mockup data generation / representation
 */

$_timestamp = new DateTime('now', new DateTimeZone('UTC') );
$_ts = $_timestamp->format('Y-m-d H:i:s');

class JsonMockObj extends ArrayIterator
{
    public function __construct( array $data ) { parent::__construct( $data ); }
    public function __toString() { return json_encode( $this->getArrayCopy() ); }
    public function toArray() { return $this->getArrayCopy(); }
    public function toJson() { return json_encode( $this->getArrayCopy() ); }
}

$statsWidget = new JsonMockObj([
    'id' => substr(hash('sha512', 'stats_widget'), 0, 6),
    'url' => 'https://api-hubs.fedoraproject.org/api/widget/stats',
    'name' => 'Stats widget',
    'descr' => 'Hello Universe, i am Stats widget !',
    'enabled' => true,
    'lastSync' => $_ts,
    'data' => [
        new JsonMockObj([
            'stats' => [
                'members' => mt_rand(100,99999),
                'followers' => mt_rand(999, 10000),
                'subscribers' => mt_rand(100,99999)
            ]
        ])
    ]
]);

function dataAsJson( $data, $title, $exit = false ) {
    echo "## $title\n";

    if ( is_array($data) ) {
        echo str_repeat('-', 50)."\n";
        echo json_encode($data)."\n";
        echo str_repeat('-', 50)."\n\n";
    } else {
        echo str_repeat('-', 50)."\n";
        echo $data."\n";
        echo str_repeat('-', 50)."\n\n";
    }

    if (true === $exit)
        exit;
}

$widgets = [
    $statsWidget,
    new JsonMockObj([
        'id' => substr(hash('sha512', 'about_widget'), 0, 6),
        'url' => 'https://api-hubs.fedoraproject.org/api/widget/about',
        'name' => 'About widget',
        'descr' => 'Hello Universe, i am About widget !',
        'enabled' => true,
        'lastSync' => $_ts,
        'data' => [new JsonMockObj([])]
    ]),
    new JsonMockObj([
        'id' => substr(hash('sha512', 'avatar_widget'), 0, 6),
        'url' => 'https://api-hubs.fedoraproject.org/api/widget/avatar',
        'name' => 'Avatar widget',
        'descr' => 'Hello Universe, i am Avatar widget !',
        'enabled' => true,
        'lastSync' => $_ts,
        'data' => [new JsonMockObj([])]
    ]),
    new JsonMockObj([
        'id' => substr(hash('sha512', 'badges_widget'), 0, 6),
        'url' => 'https://api-hubs.fedoraproject.org/api/widget/badges',
        'name' => 'Badges widget',
        'descr' => 'Hello Universe, i am Badges widget',
        'enabled' => true,
        'lastSync' => $_ts,
        'data' => [new JsonMockObj([])]
    ]),
    new JsonMockObj([
        'id' => substr(hash('sha512', 'rules_widget'), 0, 6),
        'url' => 'https://api-hubs.fedoraproject.org/api/widget/rules',
        'name' => 'Rules widget',
        'descr' => 'Hello Universe, i am Rules widget',
        'enabled' => true,
        'lastSync' => $_ts,
        'data' => [new JsonMockObj([])]
    ])
];

//echo json_encode($widgets);

/* Single API response for one hub (e.g. api/hubs/<id> || <name>) */
$designHubData = new JsonMockObj([
    'id' => substr(hash('sha512', 'design'), 0, 6),
    'name' => 'design',
    'descr' => 'Design team hub',
    'splash' => 'img/hub_bg1.png',
    'motd' => 'If you never did, you should. These things are fun and fun is good.',
    'subscribers' => mt_rand(1,100000),
    'followers' => mt_rand(1,100000),
    'widgets' => $widgets
]);

/* Single API response for one hub (e.g. api/hubs/<id> || <name>) */
$infraHubData = new JsonMockObj([
    'id' => substr(hash('sha512', 'infrastructure'), 0, 6),
    'name' => 'infrastructure',
    'descr' => 'Infrastructure team hub',
    'splash' => 'img/hub_bg1.png',
    'motd' => 'Lorem lipsum dol sir amet !',
    'subscribers' => mt_rand(1,100000),
    'followers' => mt_rand(1,100000),
    'widgets' => $widgets
]);


/* Single API response for hubs available on page (e.g. api/hubs) */
$availableHubs = new JsonMockObj([
    $designHubData,
    $infraHubData
]);
// echo "\n".$availableHubs->toJson()."\n\n"; exit;


/* Single API response for single hub  */
// echo "\n".$designHubData->toJson()."\n\n"; exit;


dataAsJson($statsWidget, 'Example JSON data representation of single widget (example url - https://hubs-api.fp.org/widget/4edce4) :');

dataAsJson($widgets, 'Example JSON data representation of collection of widget\'s available for one hub (example url - https://hubs-api.fp.org/widgets/hub/716f89) :');

dataAsJson($designHubData, 'Example JSON data representation of one hub (example url - https://hubs-api.fp.org/hubs/design) :');

dataAsJson($availableHubs, 'Example JSON data representation of collection of available hubs (example url - https://hubs-api.fp.org/hubs) :');


