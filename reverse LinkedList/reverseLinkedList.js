var Range = function (start, end, step) {

    this.start = start
    if (!end) {
        this.end = start
    } else {
        this.end = end
    }
    if (!step) {
        this.step = (this.start <= this.end) ? 1 : -1
    } else {
        this.step = step
    }
}
<<<<<<< HEAD
​
var reverseLinkedList = function(linkedList) {
  // your code here...
  var prev;
  var head= linkedList.head
  while (head.next) {
    var next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  head.next = prev;
  return head;
};
=======


Range.prototype.size = function () {
    return Math.floor((this.start - this.end) / this.step) + 1
};

Range.prototype.each = function (callback) {
    for (var x = this.start; this.step > 0 ? x <= this.end; x += this.step) {
        callback(x)
    }
}

Range.prototype.includes = function (val) {
    if (this.step > 0) {
        return (val >= this.start && val <= this.end &&
            (((val - this.start) / step) % 1 === 0))
    } else {
        return (val <= this.start && val >= this.end &&
            (((val - this.start) / step) % 1 === 0))
    }
};
>>>>>>> 94a97edeb556c240b870788df4b3608b75e8bfab
