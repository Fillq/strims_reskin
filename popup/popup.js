const checkbox = document.getElementById('enableReskin');
const reloadBtn = document.getElementById('reloadButton');

chrome.storage.sync.get(['reskinEnabled'], (result) => {
  checkbox.checked = result.reskinEnabled ?? true;
});

checkbox.addEventListener('change', () => {
  chrome.storage.sync.set({ reskinEnabled: checkbox.checked });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (tab?.url?.includes("strimsy.top") && tab.id) {
      chrome.tabs.reload(tab.id);
    } else {
      alert("This action only works on strimsy.top");
    }
  });
});