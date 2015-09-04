[![Build Status](https://travis-ci.org/wildjaybillyboy/copyrighter.svg?branch=master)](https://travis-ci.org/wildjaybillyboy/copyrighter)
### Welcome to Copyrighter!
This is a personal learning exercise and a small tool that I hope will help myself and others to mark up meteor built webpages with copyrights.
### Installation
To install, add the package in Meteor > 0.9.0:
```sh
$ meteor add nwdev:copyrighter
```
### How to use
Enter your copyright information in Meteor.startUp.  See data parameters in the documentation below.  This example features a trademark for 'My Company' which was established in 2015.  Note that I will use the optional callback to log any errors.
/client/client.js
```javascript
if (Meteor.startUp) {
    Meteor.call('setCopyright', {name:'My Company', date: 2014, mark: 'trademark', style: 'small-copyright'}, function (err, result) {
        console.log(err ? err : result);
    });
}
```
Within the meteor project the html will be marked up with a call to the template "cTemplate".
/client/main.html
```html
{{> cTemplate}}
```
### Reference
The meteor method 'setCopyright' is passed data with 4 parameters: name, date, mark and style.
* `name`: Set the name to the mark's owner.
* `date`: Set the date to the 4 digit year the mark was established.
* `mark`: Set the mark type to either 'trademark' (&reg;) or 'copyright' (&copy;).
* `style`: The style parameter is a call to the html's css class identifier.  This package includes simple css styles for "small-copyright", "medium-copyright", and "large-copyright".  You can override this with your own style by passing your own class name and adding the corresponding code to your project's css stylesheet.

### Example
Owner's name is nwdev, copyrighted in 2014. I'll create a nice small red copyright to use in my meteor app.
/client/client.js
```javascript
if (Meteor.startUp) {
    Meteor.call('setCopyright', {name: 'nwdev', date: '2014', mark: 'copyright', style='red-copyright'}, function (err, result) {
        console.log(err ? err : result);
    })
}
```
/client/main.html
```html
<div class="head">
    Nwdev's meteor app
</div>
<div class="body">
    content
</div>
<div class="foot">
    {{> cTemplate}}
</div>
```
/lib/main.css
```css
.red-copyright {
    font-style: normal;
    font-size: small;
    color: red;
}
