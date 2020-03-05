module.exports = {
  name: 'barista-components-button',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/barista-components/button',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
