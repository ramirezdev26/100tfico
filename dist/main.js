(() => {
  function r(r, t) {
    (null == t || t > r.length) && (t = r.length);
    for (var n = 0, e = new Array(t); n < t; n++) e[n] = r[n];
    return e;
  }
  console.log("Hello webpack!");
  var t,
    n =
      (2,
      (function (r) {
        if (Array.isArray(r)) return r;
      })((t = [1, 2])) ||
        (function (r, t) {
          var n =
            null == r
              ? null
              : ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
                r["@@iterator"];
          if (null != n) {
            var e,
              o,
              l = [],
              a = !0,
              i = !1;
            try {
              for (
                n = n.call(r);
                !(a = (e = n.next()).done) && (l.push(e.value), 2 !== l.length);
                a = !0
              );
            } catch (r) {
              (i = !0), (o = r);
            } finally {
              try {
                a || null == n.return || n.return();
              } finally {
                if (i) throw o;
              }
            }
            return l;
          }
        })(t) ||
        (function (t, n) {
          if (t) {
            if ("string" == typeof t) return r(t, 2);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === e && t.constructor && (e = t.constructor.name),
              "Map" === e || "Set" === e
                ? Array.from(t)
                : "Arguments" === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                ? r(t, 2)
                : void 0
            );
          }
        })(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })());
  n[0], n[1];
})();
