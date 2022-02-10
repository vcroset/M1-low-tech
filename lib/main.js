function readTime(text) {
    var length = text.split(" ").length
    var time = length * 0.6
    return Math.round(time / 60)
}
