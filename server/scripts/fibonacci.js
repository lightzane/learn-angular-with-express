"use strict";

exports.__esModule = true;
exports.getSequence = void 0;
function getSequence(data, total) {
    var sum = data.x + data.y;
    var x = total ? total - 1 : 9;
    var sequence = [];
    sequence.push(data.x);
    sequence.push(data.y);
    for (var i = 1; i < x; i++) {
        sequence.push(sum);
        sum = sequence[i] + sequence[i + 1];
    }
    return sequence;
}
exports.getSequence = getSequence;
