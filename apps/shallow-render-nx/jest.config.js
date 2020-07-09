module.exports = {
  name: 'shallow-render-nx',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/shallow-render-nx',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
