# react-native-material-kit demo

## RNMK resources
- [GitHub][RNMK]
- [Docs (annotated source)][docs]
- [Change logs][releases]

## Running the demo

- Checkout [RNMK Demo] and [RNMK]
- Clone the project and run npm install
  ```sh
  git clone https://github.com/xinthink/rnmk-demo.git
  cd rnmk-demo
  npm install

  ```
- iOS Steps
  - Open the iOS/RNMKDemo.xcodeproj file in Xcode
  - Drag the file `node_modules/react-native-material-kit/iOS/RCTMaterialKit.codeproj` to the Libraries folder
  - Expand the `RCTMaterialKit.xcodeproj > Products` under Libraries and drag the `libRCTMaterialKit.a` to the the top of the list of Linked Frameworks and Libraries.
- Launch the packager
  - RN's packager [doesn't resolve symbolic links], so you have to use the command `npm start` or `./packager.sh` to start the packager
- And then run the rnmk-demo Xcode project
  - if the `RCTMaterialKit` project is not resolved correctly (shown as red text in Xcode), please remove it and import it again (follows the [guide][ios guide])

## License
[MIT][license]

[RNMK Demo]: https://github.com/xinthink/rnmk-demo
[RNMK]: https://github.com/xinthink/react-native-material-kit
[docs]: http://xinthink.github.io/react-native-material-kit/docs/index.html
[releases]: https://github.com/xinthink/react-native-material-kit/releases
[license]: https://raw.githubusercontent.com/xinthink/react-native-material-kit/master/LICENSE.md
[doesn't resolve symbolic links]: https://github.com/facebook/react-native/issues/637
[ios guide]: https://github.com/xinthink/react-native-material-kit#ios
