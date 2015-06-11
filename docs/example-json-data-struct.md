# Example JSON data structure proposal for Fedora Hubs / Angular

## Example JSON data representation of single widget (example url - https://hubs-api.fp.org/widget/4edce4) :
```json
{
    "id": "4edce4",
    "url": "https:\/\/api-hubs.fedoraproject.org\/api\/widget\/stats",
    "name": "Stats widget",
    "descr": "Hello Universe, i am Stats widget !",
    "enabled": true,
    "lastSync": "2015-06-11 20:17:03",
    "data": {
        "stats": {
            "members": 32468,
            "followers": 5636,
            "subscribers": 18358
        },
        "other": {
            "one": 1,
            "two": 3
        }
    }
}
```

## Example JSON data representation of collection of widget's available for one hub (example url - https://hubs-api.fp.org/widgets/hub/716f89) :
```json
[
    {
        "id": "4edce4",
        "url": "https:\/\/api-hubs.fedoraproject.org\/api\/widget\/stats",
        "name": "Stats widget",
        "descr": "Hello Universe, i am Stats widget !",
        "enabled": true,
        "lastSync": "2015-06-11 20:17:03",
        "data": {
            "stats": {
                "members": 32468,
                "followers": 5636,
                "subscribers": 18358
            },
            "other": {
                "one": 1,
                "two": 3
            }
        }
    }, 
    {
        "id": "18c815",
        "url": "https:\/\/api-hubs.fedoraproject.org\/api\/widget\/about",
        "name": "About widget",
        "descr": "Hello Universe, i am About widget !",
        "enabled": true,
        "lastSync": "2015-06-11 20:17:03",
        "data": {}
    }, 
    {
        "id": "925ee2",
        "url": "https:\/\/api-hubs.fedoraproject.org\/api\/widget\/avatar",
        "name": "Avatar widget",
        "descr": "Hello Universe, i am Avatar widget !",
        "enabled": true,
        "lastSync": "2015-06-11 20:17:03",
        "data": {}
    }, 
    {
        "id": "688d25",
        "url": "https:\/\/api-hubs.fedoraproject.org\/api\/widget\/badges",
        "name": "Badges widget",
        "descr": "Hello Universe, i am Badges widget",
        "enabled": true,
        "lastSync": "2015-06-11 20:17:03",
        "data": {}
    }, 
    {
        "id": "e2b72c",
        "url": "https:\/\/api-hubs.fedoraproject.org\/api\/widget\/rules",
        "name": "Rules widget",
        "descr": "Hello Universe, i am Rules widget",
        "enabled": true,
        "lastSync": "2015-06-11 20:17:03",
        "data": {}
    }
]
```

## Example JSON data representation of one hub (example url - https://hubs-api.fp.org/hubs/design) :
--------------------------------------------------
```json
{
    "id":"716f89",
    "name":"design",
    "descr":"Design team hub",
    "splash":"img\/hub_bg1.png",
    "motd":"If you never did, you should. These things are fun and fun is good.",
    "subscribers":62599,
    "followers":56642,
    "widgets":[
        {
            "id":"4edce4",
            "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/stats",
            "name":"Stats widget",
            "descr":"Hello Universe, i am Stats widget !",
            "enabled":true,
            "lastSync":"2015-06-11 20:17:03",
            "data":{
                "stats":{
                    "members":32468,
                    "followers":5636,
                    "subscribers":18358
                },
                "other":{
                    "one":1,
                    "two":3
                }
            }
        },
        {
            "id":"18c815",
            "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/about",
            "name":"About widget",
            "descr":"Hello Universe, i am About widget !",
            "enabled":true,
            "lastSync":"2015-06-11 20:17:03",
            "data":{

            }
        },
        {
            "id":"925ee2",
            "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/avatar",
            "name":"Avatar widget",
            "descr":"Hello Universe, i am Avatar widget !",
            "enabled":true,
            "lastSync":"2015-06-11 20:17:03",
            "data":{

            }
        },
        {
            "id":"688d25",
            "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/badges",
            "name":"Badges widget",
            "descr":"Hello Universe, i am Badges widget",
            "enabled":true,
            "lastSync":"2015-06-11 20:17:03",
            "data":{

            }
        },
        {
            "id":"e2b72c",
            "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/rules",
            "name":"Rules widget",
            "descr":"Hello Universe, i am Rules widget",
            "enabled":true,
            "lastSync":"2015-06-11 20:17:03",
            "data":{

            }
        }
    ]
}
```
--------------------------------------------------

## Example JSON data representation of collection of available hubs (example url - https://hubs-api.fp.org/hubs) :
--------------------------------------------------
```json
[
    {
        "id":"716f89",
        "name":"design",
        "descr":"Design team hub",
        "splash":"img\/hub_bg1.png",
        "motd":"If you never did, you should. These things are fun and fun is good.",
        "subscribers":62599,
        "followers":56642,
        "widgets":[
            {
                "id":"4edce4",
                "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/stats",
                "name":"Stats widget",
                "descr":"Hello Universe, i am Stats widget !",
                "enabled":true,
                "lastSync":"2015-06-11 20:17:03",
                "data":{
                    "stats":{
                        "members":32468,
                        "followers":5636,
                        "subscribers":18358
                    },
                    "other":{
                        "one":1,
                        "two":3
                    }
                }
            },
            {
                "id":"18c815",
                "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/about",
                "name":"About widget",
                "descr":"Hello Universe, i am About widget !",
                "enabled":true,
                "lastSync":"2015-06-11 20:17:03",
                "data":{

                }
            },
            {
                "id":"925ee2",
                "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/avatar",
                "name":"Avatar widget",
                "descr":"Hello Universe, i am Avatar widget !",
                "enabled":true,
                "lastSync":"2015-06-11 20:17:03",
                "data":{

                }
            },
            {
                "id":"688d25",
                "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/badges",
                "name":"Badges widget",
                "descr":"Hello Universe, i am Badges widget",
                "enabled":true,
                "lastSync":"2015-06-11 20:17:03",
                "data":{

                }
            },
            {
                "id":"e2b72c",
                "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/rules",
                "name":"Rules widget",
                "descr":"Hello Universe, i am Rules widget",
                "enabled":true,
                "lastSync":"2015-06-11 20:17:03",
                "data":{

                }
            }
        ]
    },
    {
        "id":"6a35dd",
        "name":"infrastructure",
        "descr":"Infrastructure team hub",
        "splash":"img\/hub_bg1.png",
        "motd":"Lorem lipsum dol sir amet !",
        "subscribers":23900,
        "followers":24489,
        "widgets":[
            {
                "id":"4edce4",
                "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/stats",
                "name":"Stats widget",
                "descr":"Hello Universe, i am Stats widget !",
                "enabled":true,
                "lastSync":"2015-06-11 20:17:03",
                "data":{
                    "stats":{
                        "members":32468,
                        "followers":5636,
                        "subscribers":18358
                    },
                    "other":{
                        "one":1,
                        "two":3
                    }
                }
            },
            {
                "id":"18c815",
                "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/about",
                "name":"About widget",
                "descr":"Hello Universe, i am About widget !",
                "enabled":true,
                "lastSync":"2015-06-11 20:17:03",
                "data":{

                }
            },
            {
                "id":"925ee2",
                "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/avatar",
                "name":"Avatar widget",
                "descr":"Hello Universe, i am Avatar widget !",
                "enabled":true,
                "lastSync":"2015-06-11 20:17:03",
                "data":{

                }
            },
            {
                "id":"688d25",
                "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/badges",
                "name":"Badges widget",
                "descr":"Hello Universe, i am Badges widget",
                "enabled":true,
                "lastSync":"2015-06-11 20:17:03",
                "data":{

                }
            },
            {
                "id":"e2b72c",
                "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/rules",
                "name":"Rules widget",
                "descr":"Hello Universe, i am Rules widget",
                "enabled":true,
                "lastSync":"2015-06-11 20:17:03",
                "data":{

                }
            }
        ]
    }
]
```
--------------------------------------------------
