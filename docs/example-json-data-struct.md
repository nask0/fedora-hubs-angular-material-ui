# Fedora Hubs / Angular JSON data structure draft

Example SON data representation for widgets and hubs


## Hubs

### Single hub (example url - https://hubs-api.fp.org/hubs/716f89) :

```json
{
    "id":"716f89",
    "name":"design",
    "descr":"Design team hub",
    "splash":"img\/hub_bg1.png",
    "motd":"If you never did, you should. These things are fun and fun is good.",
    "admins":[
        {
            "name":"threebean",
            "avatar":"<avatar_url>",
            "profile":"<profile_url>"
        },
        {
            "name":"mizmo",
            "avatar":"<avatar_url>",
            "profile":"<profile_url>"
        },
        {
            "name":"tatica",
            "avatar":"<avatar_url>",
            "profile":"<profile_url>"
        }
    ],
    "members":46171,
    "followers":63875,
    "subscribers":41204,
    "widgets":[
        "18c815",
        "4edce4",
        "925ee2"
    ],
    "settings":[
        {
            "theme":"fedora-design-blue"
        },
        {
            "option":true
        },
        {
            "deny":false
        }
    ]
}
```


## Collection of available hubs for current user (example url - https://hubs-api.fp.org/hubs) :

```json
[
    "716f89",
    "6a35dd"
]
```



## Widgets

### Single widget (example url - https://hubs-api.fp.org/widget/4edce4) :
```json
{
    "id":"4edce4",
    "url":"https:\/\/api-hubs.fedoraproject.org\/api\/widget\/stats",
    "name":"Stats widget",
    "descr":"Hello Universe, i am Stats widget !",
    "enabled":true,
    "lastSync":"2015-06-11 20:44:26",
    "data":[
        {
            "stats":{
                "some_stat":89980,
                "some_stat2":6199,
                "some_stat3":68941
            },
            "more_stats":{
                "evenMoreStats":72454,
                "andMoreStats":41128
            }
        }
    ]
}
```

### Collection of widget's available for single hub (example url - https://hubs-api.fp.org/widgets/hub/716f89) :
```json
[
    "18c815",
    "4edce4",
    "925ee2"
]
```
