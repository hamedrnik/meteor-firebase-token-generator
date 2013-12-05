Firebase Token Generator npm module packaged for Meteor
==========================

npm module lives [here](https://npmjs.org/package/firebase-token-generator)

Current version 0.1.4

## Quick Start

```sh
$ mrt add firebase-token-generator
```

**server/main.js**
```javascript
var tokenGenerator = new FirebaseTokenGenerator(YOUR_SECRET);
var date = new Date();
date.setDate(date.getDate() + 365);
var token = tokenGenerator.createToken({}, { admin: true, expires: date.getTime() / 1000 });

var firebase = new Firebase(YOUR_FIREBASE_LINK);
var storyRef = firebase.child('story');

firebase.auth(token, function(error, result){
  if(!error){
    storyRef.on('child_added', function(snapshot){
      console.log(snapshot.name() + ":" + snapshot.val());
      console.log(snapshot.val());
    });
  }
});
```

**LICENSE**
This project just a wrapper for firebase-token-generator.

```
Copyright (C) 2013  Hamed Ramezanian

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
```
