# cordova-plugin-android-image-file-input

This is a tiny cordova plugin thats only purpose is to help the file input
element work like it does on the mobile web, when within a Cordova app.

## Purpose

When you set the attribute `accept="image/*"` on an html input with `type="file"` on
the mobile web, on both iOS and Android, you get a small dialog that allows you to
select from an image in your gallery or to just open your camera and take a picture. But in a Cordova Android app, you can only select from your gallery. There
is a long running issue
([816](https://github.com/apache/cordova-android/issues/816)) that has recognized
this issue since 2019, and their is a pull request
([1385](https://github.com/apache/cordova-android/pull/1385)) that has been open
since 2021 with a fix, but that hasn't been merged in.

Until this is fixed in the core Cordova Android platform, this plugin exists
to fill in the gap until that is ready.

## Important Note

This plugin functions by replacing the CordovaLib `SystemWebChromeClient.java`.
It does this by copying a file from this plugin into the correct folder in the
android platform. It patches the issue, but is very heavy handed and prone to
breakage. As soon as the Cordova Android is patched this plugin should be
abandoned.

## Installation

```sh
cordova plugin add cordova-plugin-android-image-file-input
```
