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

	v = v.replace(/\b28\b/gi, "<span>28!!!!!!!!!!!!!!!!!!</span>");
	v = v.replace(/\ballegedly\b/gi, "kinda probably");
	v = v.replace(/\bnew study\b/gi, "Tumblr post");
	v = v.replace(/\brebuild\b/gi, "avenge");
	v = v.replace(/\bspace\b/gi, "spaaace");
	v = v.replace(/\bgoogle glass\b/gi, "Virtual Boy");
	v = v.replace(/\bsmartphone\b/gi, "Pokédex");
	v = v.replace(/\belectric\b/gi, "atomic");
	v = v.replace(/\bsenator\b/gi, "Elf-Lord");
	v = v.replace(/\bcar\b/gi, "cat");
	v = v.replace(/\belection\b/gi, "eating contest");
	v = v.replace(/\bcongressional leaders\b/gi, "river spirits");
	v = v.replace(/\bhomeland security\b/gi, "homestar runner");
	v = v.replace(/\bcould not be reached for comment\b/gi, "is guilty and everyone knows it");
	
	textNode.nodeValue = v;
}