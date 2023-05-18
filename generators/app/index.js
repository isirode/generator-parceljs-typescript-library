var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  
  // WARN : I have an error when utilizing this syntax

  // installingTypescript() {
  //   this.npmInstall(['typescript'], { 'save-dev': true });
  // }

  // installingParcelJS() {
  //   this.npmInstall(['parcel'], { 'save-dev': true });
  // }

  // installingNodeTypes() {
  //   this.npmInstall(['@types/node'], { 'save-dev': true });
  // }

  updatingPackageJSON() {
    const pkgJson = {
      license: "SEE LICENSE IN COPYING",
      source: "src/index.ts",
      main: "dist/main.js",
      types: "dist/types.d.ts",
      scripts: {
        start: "parcel --no-cache",
        prebuild: "rimraf dist",
        build: "parcel build --no-cache",
        test: "jest --config jest.config.js"
      },
      devDependencies: {
        "@parcel/packager-ts": "2.8.3",
        "@parcel/transformer-typescript-tsc": "2.8.3",
        "@parcel/transformer-typescript-types": "2.8.3",
        "@types/node": "20.1.4",
        "@types/jest": "^29.4.0",
        "events": "3.3.0",
        "parcel": "2.8.3",
        "typescript": "5.0.4",
        "rimraf": "4.1.3",
        "jest": "29.4.2",
        "ts-jest": "29.0.5",
        "ts-mockito": "2.6.1",
      },
    };
    
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  copyResources() {
    this.fs.copyTpl(
      this.templatePath('src/index.ts'),
      this.destinationPath('src/index.ts'),
      { /*aKey: 'a value'*/ }
    );
    this.fs.copyTpl(
      this.templatePath('src/MyInterface.ts'),
      this.destinationPath('src/MyInterface.ts'),
      { /*aKey: 'a value'*/ }
    );
    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore'),
      { /*aKey: 'a value'*/ }
    );
    this.fs.copyTpl(
      this.templatePath('.parcelrc'),
      this.destinationPath('.parcelrc'),
      { /*aKey: 'a value'*/ }
    );
    this.fs.copyTpl(
      this.templatePath('jest.config.js'),
      this.destinationPath('jest.config.js'),
      { /*aKey: 'a value'*/ }
    );
    // TODO : could support multiple licenses
    this.fs.copyTpl(
      this.templatePath('COPYING'),
      this.destinationPath('COPYING'),
      { /*aKey: 'a value'*/ }
    );
    this.fs.copyTpl(
      this.templatePath('COPYING.LESSER'),
      this.destinationPath('COPYING.LESSER'),
      { /*aKey: 'a value'*/ }
    );
    // TODO : add the license at the end of the README
    this.fs.copyTpl(
      this.templatePath('DEVELOPER.md'),
      this.destinationPath('DEVELOPER.md'),
      { /*aKey: 'a value'*/ }
    );
  }
};