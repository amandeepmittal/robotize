/* eslint-env mocha */
'use strict';

const assert = require('assert');
const robotize = require('..');

describe('robotize', () => {
  it('should accept an allow option', () => {
    const expected = 'User-agent: *\nAllow: allowed.html';
    const opts = {
      allow: ['allowed.html']
    };

    robotize(opts, (err, actual) => {
      if (err) {
        Error(err);
      } else {
        assert.equal(actual, expected);
      }
    });
  });

  it('should accept a disallow option', () => {
    const expected = 'User-agent: *\nDisallow: disallowed.html';
    const opts = {
      disallow: ['disallowed.html']
    };

    robotize(opts, (err, actual) => {
      if (err) {
        Error(err);
      } else {
        assert.equal(actual, expected);
      }
    });
  });

  it('should return an error for a robots.txt without allow, disallow or sitemap', () => {
    assert.throws(() => {
      robotize({}, (err) => {
        assert.ifError(err);
      });
    }, /No "allow", "disallow" or "sitemap" option defined for for useragent "*"/);
  });

  it('should accept a sitemap option', () => {
    const expected = 'User-agent: *\nSitemap: https://www.site.com/sitemap.xml';
    const opts = {
      sitemap: 'https://www.site.com/sitemap.xml'
    };

    robotize(opts, (err, actual) => {
      if (err) {
        Error(err);
      } else {
        assert.equal(actual, expected);
      }
    });
  });

  it('should accept a useragent option', () => {
    const expected = 'User-agent: googlebot\nAllow: allowed.html';
    const opts = {
      useragent: 'googlebot',
      allow: ['allowed.html']
    };

    robotize(opts, (err, actual) => {
      if (err) {
        Error(err);
      } else {
        assert.equal(actual, expected);
      }
    });
  });
});
