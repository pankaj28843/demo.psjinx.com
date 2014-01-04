importScripts('//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js');
importScripts('jszip.js');
importScripts('xlsx.js');
importScripts('xlsx-reader.js');
onmessage = function(event) {
    var file = event.data;
    XLSXReader(file, true, function(data){
            postMessage(data);
    });
};
