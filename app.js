const tsConfigPaths = require('tsconfig-paths');
const tsConfig = require('./tsconfig.json');
const path = require('path');

// Register tsconfig paths
tsConfigPaths.register({
  baseUrl: path.resolve(__dirname, 'dist'),
  paths: tsConfig.compilerOptions.paths,
});

// Start the actual server
require('./dist/serverapp.js');
