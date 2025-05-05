chrome.storage.sync.get(['reskinEnabled'], (result) => {
    const injectEditedStyles = (css) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = 'text/css';
        link.href = chrome.runtime.getURL(css);
        document.head.appendChild(link);
    };

    if (result.reskinEnabled ?? true) {
        const site = window.location.hostname;
        if (site.includes("strimsy.top")) {
            injectEditedStyles('../css/Edit.css');
        
            const ligi = document.querySelector('.ligi');
            if (ligi) {
                ligi.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === "||") {
                        ligi.removeChild(node);
                    }
                });
            }
        }
    }
});
