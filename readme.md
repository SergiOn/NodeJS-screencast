<h1>NodeJS screencast</h1>

<a target="_blank" href="https://www.youtube.com/playlist?list=PLDyvV36pndZFWfEQpNixIHVvp191Hb3Gg">Link to screencast</a>

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

