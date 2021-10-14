let filesThatNeedUpdating = [

]

function fileNeedsUpdating(file) {
    return filesThatNeedUpdating.find(fileName => fileName === file)
}

module.exports = fileNeedsUpdating
