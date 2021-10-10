let filesThatNeedUpdating = [
    "attend.js",
    "attendants.js",
    "draw.js",
    "enter.js",
    "makeTutor.js",
    "nickname.js",
    "pleb.js",
    "update.js",
]

function fileNeedsUpdating(file) {
    return filesThatNeedUpdating.find(fileName => fileName === file)
}

module.exports = fileNeedsUpdating
