const site = window.location.hostname;
const injectEditedStyles = (css) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = 'text/css';
    link.href = chrome.runtime.getURL(css);
    document.head.appendChild(link);
};

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