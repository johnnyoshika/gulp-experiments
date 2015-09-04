'use strict';

document.querySelector('[data-action="dosomething"]').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('[data-target="dosomething"]').style.display = 'block';;
}, false);
"use strict";

(function () {
  var foo = [1, 2, 3].map(function (i) {
    return i * 2;
  });
  var test = [1, 2, 3].map(function (i) {
    return i * 7;
  });
})();
//# sourceMappingURL=app.js.map