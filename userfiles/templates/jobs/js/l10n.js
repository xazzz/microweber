 
function convertEntities(b){var d,a;d=function(c){if(/&[^;]+;/.test(c)){var f=document.createElement("div");f.innerHTML=c;return !f.firstChild?c:f.firstChild.nodeValue}return c};if(typeof b==="string"){return d(b)}else{if(typeof b==="object"){for(a in b){if(typeof b[a]==="string"){b[a]=d(b[a])}}}}return b};