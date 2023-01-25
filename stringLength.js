const StringLength = (string) => {
    return string.length >= 1 && string.length <= 10 ? string.length : false;
}
module.exports = StringLength;