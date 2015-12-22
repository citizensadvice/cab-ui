# Citizens Advice UI

Design elements to be used across all Citizens Advice products.

© Citizens Advice

The style guide is available on http://citizensadvice.github.io/cab-ui/

## CSS size reduction

Currently the CSS file is bloated, and far too large. Here are some tips for keeping file size down;

### Don't compile mixin classes

Less won't compile mixins by themselves. This means that adding `()` at the end of a class will prevent it from outputting to the css. For example:

```less
// This will compile into the stylesheet
.icon {
    font-family: 'cab-icons';
}
```
```less
// This won't
.icon() {
    font-family: 'cab-icons';
}
```

This also reduces the size of styles calling the mixin. For example:

```less
// Without ()
.icon {
    font-family: 'cab-icons';
}
.search,
.email {
  .icon;
}
// Compiles into
.icon,
.search,
.email {
  font-family: 'cab-icons';
}
```
Whereas with `()`;
```less
.icon() {
    font-family: 'cab-icons';
}
.search,
.email {
  .icon;
}
// Compiles into
.search,
.email {
  font-family: 'cab-icons';
}
```

### Be careful nesting common mixin classes

Keep in mind that everytime a mixin is used, its entire contents are compiled into the class. This means that any style that doesn't use a variable defined in the mixin should probably be defined outside the mixin. For example:

```less
.mixin(@x) {
  margin: 0;
  .icon {
    background-color: @x;
    padding: 0;
    margin: 0;
    &:hover {
      text-decoration: underline;
    }
  }
}
.red-button {
  .mixin(red);
}
.blue-button {
  .mixin(blue);
}
// Compiles into (325 bytes)
.red-button {
  margin: 0;
}
.red-button .icon {
  background-color: red;
  padding: 0;
  margin: 0;
}
.red-button .icon:hover {
  text-decoration: underline;
}
.blue-button {
  margin: 0;
}
.blue-button .icon {
  background-color: blue;
  padding: 0;
  margin: 0;
}
.blue-button .icon:hover {
  text-decoration: underline;
}
```
Whereas;
```less
.mixin(@x) {
  margin: 0;
  .icon {
    background-color: @x;
  }
}
.icon {
  padding: 0;
  margin: 0;
  &:hover {
    text-decoration: underline;
  }
}
.red-button {
  .mixin(red);
}
.blue-button {
  .mixin(blue);
}
//Compiles into (237 bytes)
.icon {
  padding: 0;
  margin: 0;
}
.icon:hover {
  text-decoration: underline;
}
.red-button {
  margin: 0;
}
.red-button .icon {
  background-color: red;
}
.blue-button {
  margin: 0;
}
.blue-button .icon {
  background-color: blue;
}
```

The diference is negligable in this example, but in situations such as the revealables the result is a very considerable filesize improvement.