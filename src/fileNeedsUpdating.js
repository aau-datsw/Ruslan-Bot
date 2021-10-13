let filesThatNeedUpdating = [
    "attend.js",
    "pull.js",
]

function fileNeedsUpdating(file) {
    return filesThatNeedUpdating.find(fileName => fileName === file)
}

module.exports = fileNeedsUpdating
