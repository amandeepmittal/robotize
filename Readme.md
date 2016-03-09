# robotize

[![npm version][version-badge]][version-url]
[![build status][build-badge]][build-url]
[![dependency status][dependency-badge]][dependency-url]
[![devdependency status][devdependency-badge]][devdependency-url]
[![downloads][downloads-badge]][downloads-url]

> Generates a robots.txt

This module generates a robots.txt. The generated robots.txt conforms to the [standards set by Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_txt). Use it to programmatically generate a robots.txt file for your site.

## Installation

```
$ npm install robotize
```

## Example

```javascript
const robotize = require('robotize');
const opts = {
  useragent: 'googlebot',
  allow: ['index.html', 'about.html'],
  disallow: ['404.html'],
  sitemap: 'https://www.site.com/sitemap.xml'
};

robotize(opts, (err, robots) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log(robots);
  }
});
```
Will log
```
User-agent: googlebot
Allow: index.html
Allow: about.html
Disallow: 404.html
Sitemap: https://www.site.com/sitemap.xml
```

## Options

Robotize accepts an object with options. The options are:

* `useragent`: the useragent - String, default: `*`
* `allow`: an array of the url(s) to allow - Array of Strings
* `disallow`: an array of the url(s) to disallow - Array of Strings
* `sitemap`: the sitemap url - String

Robotize expects at least one of the last three options. So either `allow`, `disallow` or `sitemap` must be passed.

## Credits

Forked from [robots-generator](https://github.com/haydenbleasel/robots-generator)

## License

MIT

[build-badge]: https://travis-ci.org/superwolff/robotize.svg
[build-url]: https://travis-ci.org/superwolff/robotize
[dependency-badge]: https://david-dm.org/superwolff/robotize.svg
[dependency-url]: https://david-dm.org/superwolff/robotize
[devdependency-badge]: https://david-dm.org/superwolff/robotize/dev-status.svg
[devdependency-url]: https://david-dm.org/superwolff/robotize#info=devDependencies
[downloads-badge]: https://img.shields.io/npm/dm/robotize.svg
[downloads-url]: https://www.npmjs.com/package/robotize
[version-badge]: https://img.shields.io/npm/v/robotize.svg
[version-url]: https://www.npmjs.com/package/robotize
