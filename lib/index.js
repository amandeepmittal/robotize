'use strict';

/**
 * Converts input to valid robots.txt syntax
 */
function buildRules(opts, callback) {
  // Map options to local variables
  const useragent = opts.useragent || '*';
  const allow = opts.allow || [];
  const disallow = opts.disallow || [];
  const sitemap = opts.sitemap;

  // Return error if there is no allow, disallow or sitemap
  if (!allow.length && !disallow.length && !sitemap) {
    // eslint-disable-next-line max-len
    return callback(new Error(`No "allow", "disallow" or "sitemap" option defined for for useragent "${useragent}"`));
  }

  // Build rules
  const rules = [`User-agent: ${useragent}`];

  if (allow.length) {
    for (let i = 0; i < allow.length; i++) {
      rules.push(`Allow: ${allow[i]}`);
    }
  }

  if (disallow.length) {
    for (let i = 0; i < disallow.length; i++) {
      rules.push(`Disallow: ${disallow[i]}`);
    }
  }

  if (sitemap) {
    rules.push(`Sitemap: ${sitemap}`);
  }

  return rules;
}

/**
 * Main export
 */
module.exports = function (opts, callback) {
  opts = opts || {}; // eslint-disable-line no-param-reassign

  // Build rules
  const rules = buildRules(opts, callback);

  // Join strings
  const robots = rules.join('\n');

  // Return finished robots.txt
  return callback(null, robots);
};
