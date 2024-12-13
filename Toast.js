// toast.js

(function(global) {
    class Toast {
        constructor() {
            this.toastElement = document.createElement("div");
            this.configureToastElement();
            document.body.appendChild(this.toastElement);
        }

        configureToastElement() {
            this.toastElement.style.position = "absolute"; // Changed to absolute for context positioning
            this.toastElement.style.backgroundColor = "#333"; // Default background color
            this.toastElement.style.color = "white";
            this.toastElement.style.padding = "10px";
            this.toastElement.style.borderRadius = "5px";
            this.toastElement.style.opacity = "0";
            this.toastElement.style.transition = "opacity 0.5s";
            this.toastElement.style.zIndex = "1000";
            this.toastElement.style.width = "auto";
            this.toastElement.style.maxWidth = "200px"; // Set max width
            this.toastElement.style.textAlign = "center";
            this.toastElement.style.wordWrap = "break-word"; // Wrap long text
        }

        show(message, duration = 3000, color = "#333", contextId) { // Added contextId parameter
            this.toastElement.innerText = message;
            this.toastElement.style.backgroundColor = color; // Set custom color

            // If a context ID is provided, position the toast relative to the element
            if (contextId) {
                const contextElement = document.getElementById(contextId);
                if (contextElement) {
                    const rect = contextElement.getBoundingClientRect();
                    this.toastElement.style.left = `${rect.left + (rect.width - this.toastElement.offsetWidth) / 2}px`;
                    this.toastElement.style.top = `${rect.bottom + window.scrollY + 10}px`; // Position below the context element
                    this.toastElement.style.position = "absolute"; // Ensure absolute positioning
                }
            } else {
                // Otherwise, center the toast in the viewport
                this.toastElement.style.left = `${(window.innerWidth - this.toastElement.offsetWidth) / 2}px`;
                this.toastElement.style.top = `${window.innerHeight / 2}px`;
            }

            // Show toast
            this.toastElement.style.opacity = 1;

            // Hide after specified duration
            setTimeout(() => {
                this.toastElement.style.opacity = 0;
            }, duration);
        }

        static makeText(message, duration = 3000, color = "#333", contextId) {
            const toast = new Toast();
            toast.show(message, duration, color, contextId);
        }
    }

    // Expose the Toast class to the global object
    global.Toast = Toast;
})(window);
