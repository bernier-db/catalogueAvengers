'use strict';

angular.module('Avengers.version', [
  'Avengers.version.interpolate-filter',
  'Avengers.version.version-directive'
])

.value('version', '0.1');
