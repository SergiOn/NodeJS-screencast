<h1>NodeJS screencast</h1>

<a target="_blank" href="https://www.youtube.com/playlist?list=PLDyvV36pndZFWfEQpNixIHVvp191Hb3Gg">
    Link to screencast
</a>

<h3>#1 Intro-1 About</h3>

<h3>#2 Intro-2 Whatisnode</h3>

### What is node?

* Created by Ryan Dahl at 2009
* Node.JS = V8 +I/O + libraries
* V8: fast, modern, economically
* Alternatives: Rhino, JSC, WSH...

### Why is node?

1. Want JavaScript
2. Common code in client and server side
3. Solves the main tasks
4. Many connections and tasks at the same time
5. Easy to create the working prototype
6. Comfortable packet manager with many packages
7. The large and active community around

<h3>#3 Intro-3 Install</h3>
<h3>#4 Intro-4 Docs</h3>

### Installation and launching

* http://nodejs.org
* Execution of scripts
* Documentation

<h3>#5 Modules-1 Intro</h3>
<h3>#6 Modules-2 Module</h3>

### Methods of working with modules

* Object module
* Module or application? module.parent
* Module-function module.exports = function
* Caching module
* Module location: search order
* Send parameters: module-factory

<h3>#7 npm-1 Intro</h3>
<h3>#8 npm-2 Package</h3>

### npm packet

* Version: Major.Minor.Patch semver.org
* Dependencies: dependencies, devDependencies
* Entry point: main
* Further: bin, scripts
* About package.json: npm help json

<h3>#9 npm-3 Global</h3>

<h3>#10 top-1 Util</h3>

### util

* inspect
* format
* inherits

<h3>#11 top-2 Console</h3>
<h3>#12 top-3 Inherit error</h3>
<h3>#13 top-4 EventEmitter</h3>

### require('events').EventEmitter

* emit(event, args...) -> on(event, args...)
* Saves the order of the handlers
* Can check the order of the handlers
* emmit(error) without handlers -> throw
* Fights memory leaks

<h3>#14 Server-1 Intro</h3>

### Node.JS like web-server

* http.Server -> net.Server -> events.EventEmitter
* Events: listening, connection, request

<h3>#15 Server-2 Echo</h3>
<h3>#16 Server-3 Docs</h3>
<h3>#17 Dev-1 Supervisor</h3>
<h3>#18 Dev-2 Debug</h3>

### Development and debug

* supervisor
* debugger node debug
* debugger in browser Chrome
* debugger in IDE

<pre>
node-inspector
</pre>

<h3>#19 Dev-3 Log</h3>

### Logging

* module debug
* module winston
* NODE_DEBUG="cluster fs http module net times tls"

<h3>#20 Event-loop-1 Async</h3>
<h3>#21 Event-loop-2 Inside</h3>
<h3>#22 Event-loop-3 Timers</h3>
<h3>#23 fs-1 fs</h3>
<h3>#24 fs-2 path</h3>
<h3>#25 Streams-1 Readable</h3>

### Streams in NodeJS

* stream.Readable - reading
* ...from file: fs.ReadStream
* ...request user: server.on('request, ...req...)
* stream.Writable - reading
* ...to file: fs.WriteStream
* ...answer to user: server.on('request, ...res...)
* have another type of protocols

<h3>#26 Streams-2 Net</h3>
<h3>#27 Long-poll Chat</h3>
<h3>#28 Domain</h3>
<h3>#29 Process params</h3>
<h3>#30 Chat-1</h3>
<pre>
https://github.com/iliakan/nodejs-screencast/tree/master/chat
</pre>
<a target="_blank" href="https://github.com/iliakan/nodejs-screencast/tree/master/chat">
    Link to chat screencast
</a>
<h3>#31 Chat-2</h3>
<h3>#32 Chat-3</h3>
<h3>#33 Mongo Install</h3>
<h3>#34 Chat-4</h3>
<h3>#35 Chat-5</h3>

