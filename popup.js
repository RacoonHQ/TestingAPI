function showPopup(message) {
    // Load Google Font (only once)
    if (!document.getElementById("popup-google-font")) {
        const fontLink = document.createElement("link");
        fontLink.id = "popup-google-font";
        fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap";
        fontLink.rel = "stylesheet";
        document.head.appendChild(fontLink);
    }

    // Create the popup container
    const popupContainer = document.createElement("div");
    popupContainer.style.position = "fixed";
    popupContainer.style.top = "0";
    popupContainer.style.left = "0";
    popupContainer.style.width = "100%";
    popupContainer.style.height = "100%";
    popupContainer.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    popupContainer.style.backdropFilter = "blur(4px)";
    popupContainer.style.display = "flex";
    popupContainer.style.justifyContent = "center";
    popupContainer.style.alignItems = "center";
    popupContainer.style.zIndex = "1000";
    popupContainer.style.animation = "fadeInPopup 0.3s ease";

    // Create the popup content
    const popupContent = document.createElement("div");
    popupContent.style.backgroundColor = "#ffffff";
    popupContent.style.borderRadius = "16px";
    popupContent.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
    popupContent.style.padding = "32px 24px";
    popupContent.style.textAlign = "center";
    popupContent.style.position = "relative";
    popupContent.style.width = "90%";
    popupContent.style.maxWidth = "400px";
    popupContent.style.fontFamily = "'Inter', sans-serif";
    popupContent.style.transform = "scale(0.95)";
    popupContent.style.animation = "scaleInPopup 0.3s ease forwards";
    popupContent.style.border = "2px solid #dee2e6"; // Border abu-abu

    // Add the message
    const popupMessage = document.createElement("p");
    popupMessage.textContent = message;
    popupMessage.style.fontSize = "18px";
    popupMessage.style.fontWeight = "600";
    popupMessage.style.color = "#212529";
    popupMessage.style.marginBottom = "24px";
    popupContent.appendChild(popupMessage);

    // Add the close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "Tutup";
    closeButton.className = "popup-close-btn";
    closeButton.addEventListener("click", () => {
        document.body.removeChild(popupContainer);
    });
    popupContent.appendChild(closeButton);

    // Append to DOM
    popupContainer.appendChild(popupContent);
    document.body.appendChild(popupContainer);

    // Auto close in 5 seconds
    setTimeout(() => {
        if (document.body.contains(popupContainer)) {
            document.body.removeChild(popupContainer);
        }
    }, 5000);

    // Inject styles only once
    if (!document.getElementById("popup-style")) {
        const style = document.createElement("style");
        style.id = "popup-style";
        style.textContent = `
            @keyframes fadeInPopup {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes scaleInPopup {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
            }

            .popup-close-btn {
                background-image: linear-gradient(135deg, #0d6efd, #0b5ed7);
                color: #ffffff;
                border: none;
                border-radius: 8px;
                padding: 12px 24px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            }

            .popup-close-btn:hover {
                transform: translateY(-4px);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            }
        `;
        document.head.appendChild(style);
    }
}
