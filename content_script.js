// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.type === 'scrape-28') {
//     sendResponse(28);
//   }
// });

// Code originally from
// https://github.com/jpsim/xkcd-substitutions/
// Modified with substitutions from
// ChrstphrHll

walk(document.body);

function walk(node) 
{
	// They stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\b28\b/gi, "28!");
	v = v.replace(/\b1028\b/gi, "1028!!!!!!");

	textNode.nodeValue = v;
}