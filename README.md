
### Step 1: Add Anchor IDs

You will need to add `id` attributes to the sections of your documentation so that they can be referenced. Update your documentation like this:

 
 ```markdown
# Toast.js Documentation

Toast.js is a lightweight, customizable toast notification class for web applications. It creates non-intrusive notifications that can be displayed at various positions relative to specified context elements or centered within the viewport.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Methods](#api-methods)
  - [constructor](#constructor)
  - [configureToastElement](#configuretoastElement)
  - [show](#show)
  - [makeText](#maketext)
- [Customization](#customization)
- [Examples](#examples)
- [License](#license)

## Installation

<p id="installation"></p>
Include the `toast.js` file in your HTML:

```html
<script src="https://github.com/silivestir/Toast.js/blob/main/Toast.min.js></script>
```

## Usage

<p id="usage"></p>
To use Toast.js, you can either create an instance of the `Toast` class or use the static `makeText` method to display a toast notification.

### Example:


```javascript
// Using the static method to show a toast notification
Toast.makeText("This is a toast message!", 3000, "#FF5733");

// Creating an instance of Toast
const myToast = new Toast();
myToast.show("This is another toast message!", 5000);
```

## API Methods

```
<p id="api-methods"></p>
### constructor

<p id="constructor"></p>
```javascript
new Toast();
```

Creates a new instance of the `Toast` class. It initializes a toast element and appends it to the document body.

### configureToastElement

<p id="configureToastElement"></p>
**Note**: This method is called automatically during the initialization of the toast and does not need to be invoked manually.

Configures the default styles of the toast element, including position, background color, text color, padding, and transition effects.

### show

<p id="show"></p>

```javascript
show(message, duration = 3000, color = "#333", contextId);
```

Displays the toast notification with the specified parameters.

#### Parameters:

- `message` (string): The text message to display on the toast.
- `duration` (number, optional): How long the toast should be visible (in milliseconds). Default is `3000`.
- `color` (string, optional): The background color of the toast. Default is `#333`.
- `contextId` (string, optional): The ID of an HTML element to position the toast relative to. If omitted, the toast will be centered in the viewport.

### makeText

<p id="makeText"></p>

```javascript
static makeText(message, duration = 3000, color = "#333", contextId);
```

Static method to create and display a toast notification without needing to instantiate the `Toast` class.

#### Parameters:

- `message` (string): The text message to display on the toast.
- `duration` (number, optional): How long the toast should be visible (in milliseconds). Default is `3000`.
- `color` (string, optional): The background color of the toast. Default is `#333`.
- `contextId` (string, optional): The ID of an HTML element to position the toast relative to. If omitted, the toast will be centered in the viewport.

## Customization

<p id="customization"></p>
You can customize the default styles of the toast element by modifying the `configureToastElement` method in the `Toast` class. You can change properties like background color, text color, padding, border radius, and more according to your application’s design requirements.

## Examples

<p id="examples"></p>

```javascript
// Show a toast with a custom message and duration
Toast.makeText("Success! Your changes have been saved.", 4000, "#28a745");

// Show a toast above a button with a specific ID
Toast.makeText("Error! Please try again.", 3000, "#dc3545", "myButton");

// Show a toast that defaults to the center of the viewport
const toast = new Toast();
toast.show("Welcome to our website!", 5000);
```


## License

<p id="license"></p>
This project is licensed under the MIT License. For more details, check the LICENSE file in this repository.

```

