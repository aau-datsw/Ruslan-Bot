let filesThatNeedUpdating = [
    "some.js"
]

function fileNeedsUpdating(file) {
    return filesThatNeedUpdating.find(fileName => fileName === file)
}

module.exports = fileNeedsUpdating
