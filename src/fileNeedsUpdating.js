let filesThatNeedUpdating = [
    "attendants.js",
    "draw.js",
    "enter.js",
    "update.js",
]

function fileNeedsUpdating(file) {
    return filesThatNeedUpdating.find(fileName => fileName === file)
}

module.exports = fileNeedsUpdating
