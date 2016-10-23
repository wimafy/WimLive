# Countdown Clock jQuery Plugin

Countdown Clock is a jQuery plugin. It requires [Moment.js](http://momentjs.com/) to function. It works by injecting count-down elements (ie, days, hours, minutes) into a selected element then updating the view according to the specified configuration. 

### Plugin Dependencies
* [jQuery](http://momentjs.com/)
* [Moment.js](http://momentjs.com/)

### Usage
Verify that javascripts and CSS are part of your HTML.
```html
<html>
  <head>
    ...
    <!-- Include CSS -->
    <style rel="stylesheet" href="/path/to/countdown-clock.css">
  </head>
  <body> 
    ...
    <!-- Include Dependencies  -->
    <script type="text/javascript" src="/path/to/jquery.js"></script>
    <script type="text/javascript" src="/path/to/moment.js"></script>
    <!-- Include Plugin -->
    <script src="/path/to/countdown-clock.min.js"></script>
  </body>
</html>
```

A container element needs to exist in the DOM that will be targed by the plugin.
```html
<div id="countdown-clock"></div>
```

Trigger the countdown clock with javascript. A date is the only required option. The default format is **YYYY-MM-DD**.
```html
<script type="text/javascript"> 
    $('#countdown-clock').countdownClock({ date: "2016-01-01" });
</script>
```

### Options

Options are passed to the plugin during instantiation. The defaults are listed in the example code below. Only the <b>date</b> parameter is required, other values are for overwriting default configuration.

```javascript
// Define the options
var options = {
    dateFormat: "YYYY-MM-DD",   // The date input format.
    date: undefined,            // A date string, required.
    showYears: false,           // Toggles years
    showMonths: true,           // Toggles months
    showDays: true,             // Toggles days
    showHours: true,            // Toggles hours
    showMinutes: true,          // Toggles minutes
    showSeconds: true,          // Toggles seconds
    updateInterval: 1           // Seconds
}

// Initialize the plugin
$('#countdown-clock').countdownClock(options);
```

### Style

The plugin injects a <code>div.countdown-clock</code> element into the container with corresponding span tags, ie: <code>span.years</code>, <code>span.months</code> into the div, providing an easy wrappers for styling. Note: to hide a specific time view (like years), set its option to false when initializing the plugin, <code>{showYears: false}</code>.

```html
<div id="countdown-clock">
    <div class="countdown-clock">
        <span class="years"></span> Years
        <span class="months"></span> Months
        <span class="days"></span> Days
        <span class="hours"></span> Hours
        <span class="minutes"></span> Minutes
        <span class="seconds"></span> Seconds
    </div>
</div>
```

A sass stylesheet is included in <code>/src</code>. Compiled and minified CSS are available in <code>/build</code>.

### Build

If working on codebase, this project uses gulp.js for building. Run <code>gulp</code> from the project root directory to compile sass and javascripts in <code>/src</code> to <code>/build</code>.

```
npm install gulp gulp-sass gulp-minify-css gulp-rename gulp-uglify --save-dev
```

Bower components used in HTML examples and for local development. 

```
bower install
```




