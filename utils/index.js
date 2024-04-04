export const checkImageURL = (url, debug) => {
    if (!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        const result = pattern.test(url);
        if(debug) {
            console.log(`image url test for '${url}' got result '${result}'`);
        }
        return result;
    }
};
