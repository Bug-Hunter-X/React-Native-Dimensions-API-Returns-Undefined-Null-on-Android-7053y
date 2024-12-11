# React Native Dimensions API Returns Undefined/Null

This repository demonstrates a common issue in React Native where the `Dimensions` API returns `undefined` or `null` for window or screen dimensions, particularly noticeable on Android devices. This can lead to crashes if you try to access the width or height properties before they are available.

The `DimensionsBug.js` file showcases the problematic code. The `DimensionsSolution.js` file provides a solution to gracefully handle this unexpected behavior.

## How to reproduce:
1. Clone this repository
2. Run `npx react-native run-android`
3. Observe the behavior (crash or incorrect values) in the app.
4. Then replace the DimensionsBug.js with DimensionsSolution.js and observe the improved functionality