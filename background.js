// const messageQueue = [];
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.type === 'get-28') {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, {type: 'scrape-28'}, (response) => {
//         sendResponse(response);
//       });
//     });
//   }
// });

