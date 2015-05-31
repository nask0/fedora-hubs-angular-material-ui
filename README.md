## Preface
---
This repository contains draft proposals for improvements of existing Fedora websites and / or creating of new ones. It was inspired by Fedora Foundations (especially: First - innovation), rewriting of FAS (FAS_3.0), proposal of creating Fedora developers portal (http://developer.fedoraproject.org/) and other complaints from  websites mailing list.
If you have questions, suggestions or ideas that you think should go into the document below, please send me pull request or contact me at nask0[at]cod3r.net.

## Goals
---
* Merge of some of the existent web projects (i have in mind : Fedora Badges, FAS, Fedora apps [https://apps.fedoraproject.org/] , Fedora Wiki, Fedora Documentation [others ?]) into modern, stylish, useful and user friendly web portal for Fedora community .
* Build of unified interface for all web projects, that is easy to use from administrators, contributors and users
* Facilitation of process of contributing to Fedora Project (not only for one project)
* Adopt modern web technologies like [AngularJS](https://angularjs.org/) and [Material](http://www.google.com/design/spec/) (Angular have pretty good intregation with Material: https://material.angularjs.org/).  This will :
 - Speed up development cycle and effort of implementing new features
 - Separate data representation from data sources
 - Unified and trival way for creating future or upgrading (expanding) existing web projects
 - Improve maintainability of code and features
 - Easy, unified and constinent UI for all web projects, responsive design, good mobile experience

## Ideas / Todo's / Concepts
---

#### Think about adopting modern web technologies like AngularJS and Material Design:

- Everyone is exited about AngularJS; it is and will continue to be "web.next" framework 
>"First represents our commitment to innovation."

- Angular have pretty good documentation, growing friendly community

- Angular have "native" intregation with Material: https://material.angularjs.org/

- Speed up development cycle and effort of implementing new features

- Separate data representation from data sources

- Unified and trivial way for creating new features or upgrading (expanding) existing ones.

- Improve maintainability of code and features

- Easy, unified and constinent UI for all web projects, responsive design, good mobile experience

* Note: AngularJS has nothing to do with jQuery, they have completely different purposes


#### Secure web client -> server conection
##### Implement secure connection between trusted HTTP client (for example frontend part of of web application or other third-party client's and web service like FAS, Badges, etc. : 

* ##### Caveats: 
[CLIENT] - usually web site JavaScript client that consumes REST API / static json files or whatever data provided. Have configured API keys for accessing different API's ( FAS, Badges, Docs, etc. )   
[SERVER] - server that accepts incoming requests (e.g. admin.fedoraproject.org/api, badges.fedoraproject.org etc.)

* #####  Proposed mechanism: 
1. [CLIENT] Before making the REST API call, combine a bunch of unique data together (this is typically all the parameters and values intended to sending)
2. [CLIENT] Generate HMAC hash (e.g. HMAC-SHA256) with client private key and send the server genrated HMAC hash of :
 *  some user-identifiable information like an API Key and user ID or something else that can be used to identify who the client is (This is the public API key, never the private API key - public value that anyone, even evil masterminds can know and you don’t mind. It is just a way for the system to know WHO is sending the request, not if it should trust the sender or not.   
 * Blob of all the data (parameters and values) intended to send anyway. Probably unencrypted if they are harmless values, like “mode=start&number=4&order=desc” or other operating nonsense; if the values are private - encrypt them.
 *  UTC! timestamp of the request, along with the request so the server can decide if this is an “old” request, and deny it. The timestamp must be included into the HMAC generation (effectively stamping a created-on time on the hash) in addition to being checked “within acceptable bounds” on the server.
4. [SERVER] Receive all the data from the client. Compare the current server’s timestamp to the timestamp the client sent. Make sure the difference between the two timestamps it within an acceptable time limit (5-15mins maybe) to hinder replay attacks (As pointed out by a few folks, just use UTC time and forget about the DST issues).
5. [SERVER] Using the user-identifying data sent along with the request (e.g. API Key) look the user up in the DB and load their private key, then :
 1. Re-combine the same data together that the client did in the same way the client did it. Then hash (generate HMAC) that data blob using the private key you looked up from the DB. Include the timestamp from the client in the HMAC re-calculation on the server. Since you already determined this timestamp was within acceptable bounds to be accepted, you have to re-apply it to the hash calculation to make sure it was the same timestamp sent from the client originally, and not a made-up timestamp from a man-in-the-middle attack.
 2. Run that mess of data through the HMAC hash, exactly like the client.
8. [SERVER] Compare the hash on the server, with the hash the client sent; if they match, then the client is considered legit, so process the command. Otherwise reject the command ! 
9. Other tips / best practices:
 * Use “nonce” (1-time-use-server-generated) tokens to stop replay attacks AND implement idempotentcy in API.
 * Remove all the security complexity by sending all traffic to go over SSL (HTTPS)!
 * Instead of passing all secure info as GET params, make all these values get jammed into one giant “Authorization” HTTP header.

## How i can help
---
* With concept ideas, UX/UI, mockups 
* JavaScript - AngularJs (i already have built some really awesome projects with it), Angular-Material, etc.
* Can write everything for web in PHP ( not wide used within Fedora websites community as long i can see :) ). Good knowledge of [Zephir](zephir-lang.com), [Phalcon](http://phalconphp.com/),   [ZeroMQ](http://zeromq.org/)
* Learning Python recently

## Future work & discussion
---
Taking into account the fact that i am not completely familiar with whole current  infrastructure of web projects, do not hesitate to contact me for further discussions, suggestions, advices and support.   
I already have implemented above "secured connection" scenario on Angular and currently working on some mockups / UI in order to describe / illustrate better the idea. I will add mockups in this repo.

## Useful resources
A better way to (quick) learn AngularJS: https://thinkster.io/a-better-way-to-learn-angularjs/
http://www.nganimate.org/ - basic animations
https://angular-ui.github.io/
https://material.angularjs.org/latest/
https://github.com/angular-ui/ui-router/wiki
https://scotch.io/quick-tips/pretty-urls-in-angularjs-removing-the-hashtag
https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties
https://www.linkedin.com/pulse/material-design-intro-coding-guidelines-sergio-villasenor
https://blog.cesarandreu.com/posts/handling_user_states_in_angularjs
http://www.bossable.com/1338/angular-material-design-toolbar-examples/
https://www.youtube.com/watch?v=6sqtNUqNQYY