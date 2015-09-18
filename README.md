# Citizens Advice
===
www.citizensadvice.org.uk design elements
---

The design elements repository is used for three purposes:
1. A resource for design styles, to be referenced by other Citizens Advice digital services
2. A visual guide to show examples of design patterns and approved design styles
3. A location to develop and test new patterns

> Alternate name title needed, possibly cab-style-guide
---

## Structure

Use the following file structuring conventions:

* Place all code in the **lib** folder
  * **modules** directory is reserved for code that doesn't output CSS directly. Things like mixin declarations, functions, and variables.
  * **partials** directory is for 
```
/libs

```
* Place html examples in the **example** folder
```

```


Use **.npmignore** to set what should be included in the package.

## How to use

Call in the less files required for your project 

To use in another project add the following to your [package.json](https://docs.npmjs.com/files/package.json) file.

Replace the version tag with the tag for the version you want.

```json
{
    "dependencies": {
        "cab-npm-ui": "git://github.com/citizensadvice/cab-npm-ui.git#v1.0.4"
    }
}
```
