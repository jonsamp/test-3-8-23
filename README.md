# Test for react-async-hook

This is a test for the following issue:

> Hi. My (android) app is building fine with eas (in other worlds: eas build --profile production --platform android works just fine). But eas update fails with a mysterious error related to a dependency in node_modules. I'm getting the dreaded:

> `While trying to resolve module 'react-async-hook' from file /node_modules/.../[insert library].js, the /.../package.json was found. However, this package itself speficies a 'main' module field that could not be resolved (.../react-async-hook.esm.js). Indeed, none of these files exist: [follows various extensions e.g ts, tsx, jsx, json, cjs...etc]`

> But I made sure in my metro.config.js, to include 'cjs' in the sourceExts array.

## Get started

1. Install with `npm install`
2. See the app with `npx expo start`
3. Configure updates with `eas update:configure`
4. Create an update with `eas update --auto`