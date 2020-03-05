module.exports = {
  name: 'barista-components-icon',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/barista-components/icon',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
