/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

function successfullMessage(msg) {
    return "β:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
