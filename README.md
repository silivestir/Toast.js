# Toast.js

Toast.js is a simple and customizable JavaScript library for displaying toast notifications in web applications. It provides an easy way to show brief messages to users in a non-intrusive manner.

## Features

- Display toast notifications with customizable messages, colors, and durations.
- Position toasts relative to any DOM element or center them in the viewport.
- Simple API for quick integration into any web project.
- Automatically fades out after a specified duration.

## Installation

To use Toast.js, simply include it in your HTML file or import it into your JavaScript module as follows:

### Option 1: Directly in HTML

```html
<script src="path/to/toast.js"></script>
```

### Option 2: Importing in JavaScript

If you are using a module system, you can import it as follows:

```javascript
import Toast from 'path/to/toast.js';
```

## Usage

### Creating and Showing a Toast

You can create and display a toast notification by using the `makeText` static method provided by the Toast class.

```javascript
Toast.makeText("This is a toast message!", 3000, "#ff5733");
```

### Parameters

- `message` (string): The message you want to display in the toast.
- `duration` (number, optional): The time (in milliseconds) for which the toast should be visible before it fades out. Default is `3000` (3 seconds).
- `color` (string, optional): The background color of the toast. Default is `#333`.
- `contextId` (string, optional): The ID of the HTML element you want the toast to be positioned relative to. If not provided, the toast will be centered in the viewport.

### Example with Context ID

To position the toast below a specific DOM element:

```html
<div id="myElement" style="margin-top: 100px;">Hello, I'm a context element!</div>

<script>
    Toast.makeText("This is a toast above myElement", 3000, "#ff5733", "myElement");
</script>
```

## Customization

Feel free to modify the default styles in the `configureToastElement` method to fit your design requirements. You can change the background color, text color, padding, border radius, and transition effects.

## Contributing

If you would like to contribute to this project, feel free to submit pull requests or open issues for discussion.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or feedback, feel free to open an issue in the repository, or reach out to the author.

---

This README provides a basic overview of how to use Toast.js. For further customization or advanced usage, please consult the source code or contribute as necessary.
