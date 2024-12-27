/****************************************************
 Dependencies
 ****************************************************/

let pdfService = dependencies.pdf;

/****************************************************
 Public API - Generic Functions
 ****************************************************/

exports.generatePdf = {};

exports.mergeDocuments = {};

exports.splitDocument = {};

exports.replaceHeaderAndFooter = {};

exports.fillForm = {};

exports.fillFormSync = {};

exports.replaceImages = {};

exports.addImages = {};

exports.convertPdfToImages = {};

exports.convertPdfToText = {};

exports.generatePdf = function(template, data, settings, callbackData, callbacks) {
    if (!settings || typeof settings != 'object') {
        settings = {};
    }
    if (!template || !data) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [template,data].');
        return;
    }
    sys.logs.debug('[pdf] from: generatePdf');
    let options = {template: template, data: data, settings: settings};
    return pdfService.generatePdf(options, callbackData, callbacks);
};

exports.mergeDocuments = function(documents, callbackData, callbacks) {
    if (!documents) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [documents].');
        return;
    }
    for (let i in documents) {
        let doc = documents[i];
        if (!doc.file || (doc.start && doc.end && parseInt(doc.start) > parseInt(doc.end))) {
            throw 'Invalid document settings for ' + JSON.stringify(doc);
        }
    }
    sys.logs.debug('[pdf] from: mergeDocuments');
    let options = {documents: documents};
    return pdfService.mergeDocuments(options, callbackData, callbacks);
};

exports.splitDocument = function(fileId, interval, callbackData, callbacks) {
    if (!fileId || !interval) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId,interval].');
        return;
    }
    sys.logs.debug('[pdf] from: splitDocument');
    let options = {fileId: fileId, interval: interval};
    return pdfService.splitDocument(options, callbackData, callbacks);
};

exports.replaceHeaderAndFooter = function(fileId, settings, callbackData, callbacks) {
    if (!fileId || !settings) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId,settings].');
        return;
    }
    sys.logs.debug('[pdf] from: replaceHeaderAndFooter');
    let options = {fileId: fileId, settings: settings};
    return pdfService.replaceHeaderAndFooter(options, callbackData, callbacks);
};

exports.fillForm = function(fileId, settings, callbackData, callbacks) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    sys.logs.debug('[pdf] from: fillForm');
    let options = {fileId: fileId, settings: settings || {}};
    return pdfService.fillForm(options, callbackData, callbacks);
};

exports.fillFormSync = function(fileId, settings, callbackData, callbacks) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    sys.logs.debug('[pdf] from: fillFormSync');
    let options = {fileId: fileId, sync: true, settings: settings || {}};
    return pdfService.fillFormSync(options, callbackData, callbacks);
};

exports.replaceImages = function(fileId, settings, callbackData, callbacks) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    sys.logs.debug('[pdf] from: replaceImages');
    let options = {fileId: fileId, settings: settings || {}};
    return pdfService.replaceImages(options, callbackData, callbacks);
};

exports.addImages = function(fileId, settings, callbackData, callbacks) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    sys.logs.debug('[pdf] from: addImages');
    let options = {fileId: fileId, settings: settings || {}};
    return pdfService.addImages(options, callbackData, callbacks);
};

exports.convertPdfToImages = function(fileIds, dpi, settings, callbackData, callbacks) {
    if (!fileIds || !dpi) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileIds,dpi].');
        return;
    }
    sys.logs.debug('[pdf] from: convertPdfToImages');
    let options = {fileIds: fileIds, dpi: dpi, settings: settings || {}};
    return pdfService.convertPdfToImages(options, callbackData, callbacks);
};

exports.convertPdfToText = function(fileId, callbackData, callbacks) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    sys.logs.debug('[pdf] from: convertPdfToText');
    let options = {fileId: fileId};
    return pdfService.convertPdfToText(options, callbackData, callbacks);
};
