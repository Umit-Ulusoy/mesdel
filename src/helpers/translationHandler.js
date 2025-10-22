function _t(key, params = []) {

    if (!Array.isArray(params)) {
      console.error('Params should be an array.');
      return '';
    }
  
    try {
      return chrome.i18n.getMessage(key, params);
    } catch (error) {
      console.error('Error retrieving translation message for key:', key, error);
      return '';
    }
  }
  
  export {
    _t
  }