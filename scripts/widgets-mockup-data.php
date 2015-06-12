<?php
/**
 * Mockup data generation / representation
 */
mb_internal_encoding('UTF-8');

$_timestamp = new DateTime('now', new DateTimeZone('UTC') );
$_ts = $_timestamp->format('Y-m-d H:i:s');

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

class JsonMockObj extends ArrayIterator
{
    public function __construct( array $data ) { parent::__construct( $data ); }
    public function __toString() { return json_encode( $this->getArrayCopy() ); }
    public function toArray() { return $this->getArrayCopy(); }
    public function toJson() { return json_encode( $this->getArrayCopy() ); }
}

function saveStaticJson( $fileName, $data ) {
    if ( empty($fileName) || empty($data) ) {
        echo "You must provide file name and data.\n\n";
        return false;
    }

    $fileName = $fileName . '.static.json';
    $dataDir = realpath(dirname(__FILE__).'/../')
             . DIRECTORY_SEPARATOR
             . 'data/static/json'
             . DIRECTORY_SEPARATOR;

    $file = $dataDir . (string) $fileName;

    echo "Writing $fileName to $dataDir ...\n";

    $fp = fopen($file, 'w+');
    fwrite($fp, (string) $data);

    if ( fclose($fp) ) {
        echo "File $fileName was saved sucessfully !\n";
        echo "Try to request data/static/json/$fileName now.\n\n";
        return true;
    } else {
        echo "Error occured while saving $file !\n\n";
        return false;
    }
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
                'some_stat' => mt_rand(100,99999),
                'some_stat2' => mt_rand(999, 10000),
                'some_stat3' => mt_rand(100,99999)
            ],
            'more_stats' => [
                'evenMoreStats' => mt_rand(100,99999),
                'andMoreStats' => mt_rand(100,99999)
            ]
        ]
        )
    ]
]);

$widgets = [
    $statsWidget,
    new JsonMockObj([
        'id' => substr(hash('sha512', 'about_widget'), 0, 6),
        'url' => 'https://api-hubs.fedoraproject.org/api/widget/about',
        'name' => 'About widget',
        'descr' => 'Hello Universe, i am About widget !',
        'enabled' => true,
        'lastSync' => $_ts,
        'data' => new JsonMockObj([])
    ]),
    new JsonMockObj([
        'id' => substr(hash('sha512', 'avatar_widget'), 0, 6),
        'url' => 'https://api-hubs.fedoraproject.org/api/widget/avatar',
        'name' => 'Avatar widget',
        'descr' => 'Hello Universe, i am Avatar widget !',
        'enabled' => true,
        'lastSync' => $_ts,
        'data' => new JsonMockObj([])
    ]),
    new JsonMockObj([
        'id' => substr(hash('sha512', 'badges_widget'), 0, 6),
        'url' => 'https://api-hubs.fedoraproject.org/api/widget/badges',
        'name' => 'Badges widget',
        'descr' => 'Hello Universe, i am Badges widget',
        'enabled' => true,
        'lastSync' => $_ts,
        'data' => new JsonMockObj([])
    ]),
    new JsonMockObj([
        'id' => substr(hash('sha512', 'rules_widget'), 0, 6),
        'url' => 'https://api-hubs.fedoraproject.org/api/widget/rules',
        'name' => 'Rules widget',
        'descr' => 'Hello Universe, i am Rules widget',
        'enabled' => true,
        'lastSync' => $_ts,
        'data' => new JsonMockObj([])
    ])
];

$availableWidgetIds = [];
foreach ( $widgets as $w ) {
    $availableWidgetIds[] = $widgetId = $w['id'];
    saveStaticJson("widgets-single-$widgetId", json_encode($widgets));
}

// only available widgets for hub
saveStaticJson('widgets', json_encode($availableWidgetIds));

//echo json_encode($widgets);

/* Single API response for one hub (e.g. api/hubs/<id> || <name>) */
$designHubData = new JsonMockObj([
    'id' => substr(hash('sha512', 'design'), 0, 6),
    'key' => 'design',
    'name' => 'Design hub',
    'descr' => 'Design team hub',
    'splash' => 'img/hub_bg1.png',
    'motd' => 'If you never did, you should. These things are fun and fun is good.',
    'admins' => [
        new JsonMockObj([
            'name' => 'threebean',
            'avatar' => '<avatar_url>',
            'profile' => '<profile_url>'
        ]),
        new JsonMockObj([
            'name' => 'mizmo',
            'avatar' => '<avatar_url>',
            'profile' => '<profile_url>'
        ]),
        new JsonMockObj([
            'name' => 'tatica',
            'avatar' => '<avatar_url>',
            'profile' => '<profile_url>'
        ]),
    ],
    'members' => mt_rand(1,100000),
    'followers' => mt_rand(1,100000),
    'subscribers' => mt_rand(1,100000),
    'widgets' => $availableWidgetIds,
    'settings' => [
        new JsonMockObj(['theme' => 'fedora-design-blue']),
        new JsonMockObj(['option' => true]),
        new JsonMockObj(['deny' => false])
    ]
]);

/* Single API response for one hub (e.g. api/hubs/<id> || <name>) */
$infraHubData = new JsonMockObj([
    'id' => substr(hash('sha512', 'infrastructure'), 0, 6),
    'key' => 'infrastructure',
    'name' => 'Infrastructure hub',
    'descr' => 'Infrastructure team hub',
    'splash' => 'img/hub_bg2.png',
    'motd' => 'Lorem lipsum dol sir amet !',
    'admins' => [
        new JsonMockObj([
            'name' => 'threebean',
            'avatar' => '<avatar_url>',
            'profile' => '<profile_url>'
        ]),
        new JsonMockObj([
            'name' => 'mizmo',
            'avatar' => '<avatar_url>',
            'profile' => '<profile_url>'
        ]),
        new JsonMockObj([
            'name' => 'tatica',
            'avatar' => '<avatar_url>',
            'profile' => '<profile_url>'
        ]),
    ],
    'members' => mt_rand(1,100000),
    'followers' => mt_rand(1,100000),
    'subscribers' => mt_rand(1,100000),
    'widgets' => $availableWidgetIds,
    'settings' => [
            new JsonMockObj(['theme' => 'fedora-blue']),
            new JsonMockObj(['option' => true]),
            new JsonMockObj(['deny' => false])
    ]
]);

/* Single API response for hubs available on page (e.g. api/hubs) */

$availableUserHubs = [];
$availableHubs = new JsonMockObj([ $designHubData, $infraHubData ]);
foreach ( $availableHubs as $hub ) {
    $availableUserHubs [] = new JsonMockObj([
        'id' => $hub['id'],
        'key' => $hub['key']
    ]);

    saveStaticJson("hubs-single-".$hub['key'], json_encode($hub));
}

saveStaticJson('hubs', json_encode($availableUserHubs));

$userGuest = new JsonMockObj([
    'fullName' => 'Guest',
    'hubs' => $availableUserHubs,
    // here goes user app specific settings - privacy, notifications, theme etc.
    'appSettings' => [
        'profileTheme' => 'default',
    ],
    'isLogged' => false,
]);

saveStaticJson('user-guest', json_encode($userGuest));

$currentUser = new JsonMockObj([
    'id' => substr(hash('md5', 'John Doe'), 0, 6),
    'openId' => substr(hash('sha1', 'John Doe'), 0, 8),
    'fullName' => 'John Doe',
    'hubs' => $availableUserHubs,
    // here goes user app specific settings - privacy, notifications, theme etc.
    'appSettings' => [
        'profileTheme' => 'blue',
        'showEmail' => false
    ],
    'isLogged' => true,
]);

saveStaticJson('user', json_encode($currentUser));

# dataAsJson($statsWidget, 'Example JSON data representation of single widget (example url - https://hubs-api.fp.org/widget/4edce4) :');
# dataAsJson($widgetsCollection, 'Example JSON data representation of collection of widget\'s available for one hub (example url - https://hubs-api.fp.org/widgets/hub/716f89) :');
# dataAsJson($designHubData, 'Example JSON data representation of single hub (example url - https://hubs-api.fp.org/hubs/design) :');
# dataAsJson($availableHubs, 'Example JSON data representation of collection of available hubs (example url - https://hubs-api.fp.org/hubs) :');