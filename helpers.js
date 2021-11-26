/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

function successfullMessage(msg) {
    return "✅:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
