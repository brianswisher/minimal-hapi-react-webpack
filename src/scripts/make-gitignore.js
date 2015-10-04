'use strict';

var path = require('path');
var writeConfigFile = require('../tools/write-config-file');
var config = require('../../config/variables');


var gitIgnore = [
    '###',
    '### WARNING: This file is generated by ' + path.basename(__filename) + ' - do not edit manually!',
    '###',
    '',
    '.DS_Store',
    '*.iml',
    '.idea/*',
    '',
    '# Generated files:',
    'nodemon.json',
    '.eslintignore',
    'webpack-assets.json',
    '',
    'node_modules/*',
    'npm-debug.log',
    '',
    path.relative(config.paths.root, config.paths.build),
    ''
];


module.exports = function () {
    writeConfigFile('.gitignore', gitIgnore.join('\n'));
};
