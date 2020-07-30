/*!
 *
 *  # Bibi | EPUB Reader on your website.                        (℠)
 *
 *  * © Satoru Matsushima - https://bibi.epub.link or https://github.com/satorumurmur/bibi
 *  * Open source under the MIT License - https://github.com/satorumurmur/bibi/blob/master/LICENSE
 *
 *  * Including:
 *      - sML.js : © Satoru Matsushima - https://github.com/satorumurmur/sML / Licensed under the MIT License - https://github.com/satorumurmur/sML/blob/master/LICENSE
 *
 */
!function(e) {
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                n.d(i, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return i
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 47)
}({
    0: function(e, t) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (i = window)
        }
        e.exports = i
    },
    2: function(e, t, n) {
        (function(t) {
            var n = this;
            function i(e) {
                throw new Error('"' + e + '" is read-only')
            }
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            !function(i) {
                e.exports ? e.exports = i : (void 0 !== t ? t : void 0 !== n ? n : self).sML = i
            }(function() {
                "use strict";
                var e, t, n, o, a, s, c, l, u, d, p, f, g = {
                    version: "1.0.28"
                }, h = navigator.userAgent, b = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$1";
                    return e ? (t = new RegExp("^.*" + e + "[ :\\/]?(\\d+([\\._]\\d+)*).*$")).test(h) ? h.replace(t, n).replace(/_/g, ".").split(".").map((function(e) {
                        return parseInt(e) || 0
                    }
                    )) : [] : []
                };
                return g.OperatingSystem = (e = {},
                /Mac OS X/.test(h) ? /\(iP(hone|ad|od touch);/.test(h) ? e.iOS = b("CPU (iPhone )?OS", "$2") : void 0 !== document.ontouchend ? e.iOS = e.iPadOS = b() : /Mac OS X 10[\._]\d/.test(h) && (e.macOS = b("Mac OS X ")) : /Windows( NT)? \d/.test(h) ? e.Windows = 6 != (t = b("Windows( NT)?", "$2"))[0] ? t : t[1] >= 3 ? [8, 1] : t[1] >= 2 ? [8] : t[1] >= 1 ? [7] : t : /Android \d/.test(h) ? e.Android = b("Android") : /CrOS/.test(h) ? e.Chrome = b() : /X11;/.test(h) ? e.Linux = b() : /Firefox/.test(h) && (e.Firefox = b()),
                e),
                g.UserAgent = (n = {},
                / Gecko\/\d/.test(h) ? (n.Gecko = b("rv"),
                / Waterfox\/\d/.test(h) ? n.Waterfox = b("Waterfox") : / Firefox\/\d/.test(h) && (n.Firefox = b("Firefox"))) : / Edge\/\d/.test(h) ? n.EdgeHTML = n.Edge = b("Edge") : / Chrom(ium|e)\/\d/.test(h) ? (n.Blink = n.Chromium = function(e) {
                    return e[0] ? e : b("Chrome")
                }(b("Chromium")),
                / EdgA?\/\d/.test(h) ? n.Edge = function(e) {
                    return e[0] ? e : b("Edg")
                }(b("EdgA")) : / OPR\/\d/.test(h) ? n.Opera = b("OPR") : / Silk\/\d/.test(h) ? n.Silk = b("Silk") : / Vivaldi\/\d/.test(h) ? n.Vivaldi = b("Vivaldi") : / Phoebe\/\d/.test(h) ? n.Phoebe = b("Phoebe") : n.Chrome = function(e) {
                    return e[0] ? e : n.Chromium
                }(b("Chrome"))) : / AppleWebKit\/\d/.test(h) ? (n.WebKit = b("AppleWebKit"),
                / CriOS \d/.test(h) ? n.Chrome = b("CriOS") : / FxiOS \d/.test(h) ? n.Firefox = b("FxiOS") : / EdgiOS\/\d/.test(h) ? n.Edge = b("EdgiOS") : / Version\/\d/.test(h) && (n.Safari = b("Version"))) : / Trident\/\d/.test(h) && (n.Trident = b("Trident"),
                n.InternetExplorer = function(e) {
                    return e[0] ? e : b("MSIE")
                }(b("rv"))),
                /[\[; ]FB(AN|_IAB)\//.test(h) && (n.Facebook = b("FBAV")),
                / Line\/\d/.test(h) && (n.LINE = b("Line")),
                n),
                g.Environments = [g.OperatingSystem, g.UserAgent].reduce((function(e, t) {
                    for (var n in t)
                        t[n] && e.push(n);
                    return e
                }
                ), []),
                Object.defineProperties(g, {
                    OS: {
                        get: function() {
                            return g.OperatingSystem
                        }
                    },
                    UA: {
                        get: function() {
                            return g.UserAgent
                        }
                    }
                }),
                g.forEach = function(e) {
                    return function(t) {
                        for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window || self, i = e.length, r = 0; r < i && "break" != t.call(n, e[r], r, e); r++)
                            ;
                    }
                }
                ,
                g.replace = function(e, t) {
                    if (!(t[0]instanceof Array))
                        return e.replace(t[0], t[1]);
                    for (var n = t.length, i = 0; i < n; i++)
                        e = e.replace(t[i][0], t[i][1]);
                    return e
                }
                ,
                g.capitalise = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }
                ,
                g.capitalize = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }
                ,
                g.limitMin = function(e, t) {
                    return e < t ? t : e
                }
                ,
                g.limitMax = function(e, t) {
                    return t < e ? t : e
                }
                ,
                g.limitMinMax = function(e, t, n) {
                    return n < t ? NaN : e < t ? t : n < e ? n : e
                }
                ,
                g.random = function(e, t) {
                    isNaN(e) && isNaN(t) ? (e = 0,
                    t = 1) : isNaN(e) ? e = 0 : isNaN(t) && (t = 0);
                    var n = Math.min(e, t)
                      , i = Math.max(e, t);
                    return Math.floor(Math.random() * (i - n + 1)) + n
                }
                ,
                g.edit = function(e) {
                    var t = arguments.length <= 1 ? 0 : arguments.length - 1;
                    if (e.tagName)
                        for (var n = 0; n < t; n++) {
                            var i = n + 1 < 1 || arguments.length <= n + 1 ? void 0 : arguments[n + 1];
                            for (var r in i)
                                "data" != r && "on" != r && "style" != r && (e[r] = i[r]);
                            if (i.data)
                                for (var o in i.data)
                                    e.setAttribute("data-" + o, i.data[o]);
                            if (i.on)
                                for (var a in i.on)
                                    e.addEventListener(a, i.on[a]);
                            i.style && g.CSS.setStyle(e, i.style)
                        }
                    else
                        for (var s = 0; s < t; s++) {
                            var c = s + 1 < 1 || arguments.length <= s + 1 ? void 0 : arguments[s + 1];
                            for (var l in c)
                                e[l] = c[l]
                        }
                    return e
                }
                ,
                g.create = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        n[i - 1] = arguments[i];
                    return g.edit.apply(g, [document.createElement(e)].concat(n))
                }
                ,
                g.hatch = function(e) {
                    var t = g.create("div", {
                        innerHTML: e
                    })
                      , n = document.createDocumentFragment();
                    return Array.prototype.forEach.call(t.childNodes, (function() {
                        return n.appendChild(t.firstChild)
                    }
                    )),
                    n
                }
                ,
                g.clone = function(e) {
                    var t = new Function;
                    return t.prototype = e,
                    new t
                }
                ,
                g.apply = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    if (e.From && e.To)
                        if (t)
                            for (var n in e.From)
                                "function" != typeof e.To[n] && "function" != typeof e.From[n] && (e.To[n] = e.From[n]);
                        else
                            for (var i in e.From)
                                e.To[i] = e.From[i];
                    return e.To
                }
                ,
                g.applyLtR = function(e, t, n) {
                    return g.apply({
                        From: e,
                        To: t
                    }, n)
                }
                ,
                g.applyRtL = function(e, t, n) {
                    return g.apply({
                        From: t,
                        To: e
                    }, n)
                }
                ,
                g.replaceClass = function(e, t, n) {
                    return e.classList.contains(t) && e.classList.remove(t),
                    e.classList.add(n)
                }
                ,
                g.CSS = {
                    _get_sMLStyle_sheet: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                        return e.sMLStyle || (e.sMLStyle = e.createElement("style"),
                        e.sMLStyle.appendChild(e.createTextNode("")),
                        e.head.appendChild(e.sMLStyle)),
                        e.sMLStyle.sheet
                    },
                    appendRule: function(e, t) {
                        var n = document;
                        "string" != typeof arguments[0] && (n = arguments[0],
                        e = arguments[1],
                        t = arguments[2]);
                        var i = this._get_sMLStyle_sheet(n);
                        return i.insertRule((e instanceof Array ? e.join(", ") : e) + " { " + (t instanceof Array ? t.join(" ") : t) + " }", i.cssRules.length)
                    },
                    deleteRule: function(e) {
                        var t = document;
                        "number" != typeof arguments[0] && (t = arguments[0],
                        e = arguments[1]);
                        var n = this._get_sMLStyle_sheet(t);
                        if (n)
                            return n.deleteRule(e)
                    },
                    setStyle: function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                            n[i - 1] = arguments[i];
                        if (e instanceof Array)
                            for (var r = e.length, o = 0; o < r; o++) {
                                var a;
                                (a = g.CSS).setStyle.apply(a, [e[o]].concat(n))
                            }
                        else
                            for (var s = n.length, c = 0; c < s; c++)
                                for (var l in n[c])
                                    e.style[l] = n[c][l];
                        return Promise.resolve()
                    },
                    _add_sMLTransitionEndListener: function(e, t) {
                        var n = this;
                        e._sMLTransitionEndListener && this._remove_sMLTransitionEndListener(e),
                        e._sMLTransitionEndListener = function(i) {
                            return t.call(e, i) && n._remove_sMLTransitionEndListener(e)
                        }
                        ,
                        e.addEventListener("transitionend", e._sMLTransitionEndListener)
                    },
                    _remove_sMLTransitionEndListener: function(e) {
                        e._sMLTransitionEndListener && (e.removeEventListener("transitionend", e._sMLTransitionEndListener),
                        delete e._sMLTransitionEndListener)
                    },
                    setTransition: function(e) {
                        for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                            i[r - 1] = arguments[r];
                        if (e instanceof Array) {
                            for (var o = [], a = e.length, s = 0; s < a; s++) {
                                var c;
                                o.push((c = g.CSS).setTransition.apply(c, [e[s]].concat(i)))
                            }
                            return Promise.all(o)
                        }
                        return new Promise((function(n) {
                            for (var r = e.getAttribute("style"), o = [r ? r.trim() : ""], a = i.length, s = 0; s < a; s++)
                                for (var c in i[s]) {
                                    var l = i[s][c];
                                    "" !== l ? o.push(c + ": " + l + ";") : o[0] && (o[0] = o[0].replace(new RegExp(c + "[ :\\-].+?(; *|$)","g"), "").trim())
                                }
                            t._add_sMLTransitionEndListener(e, (function(e) {
                                return n(e)
                            }
                            )),
                            e.style = o.join(" ")
                        }
                        ))
                    }
                },
                g.appendCSSRule = function() {
                    return g.CSS.appendRule.apply(g.CSS, arguments)
                }
                ,
                g.deleteCSSRule = function() {
                    return g.CSS.deleteRule.apply(g.CSS, arguments)
                }
                ,
                g.style = function() {
                    return g.CSS.setStyle.apply(g.CSS, arguments)
                }
                ,
                g.transition = function() {
                    return g.CSS.setTransition.apply(g.CSS, arguments)
                }
                ,
                g.Coords = {
                    getXY: function(e, t) {
                        return {
                            X: e,
                            Y: t
                        }
                    },
                    getWidthHeight: function(e, t) {
                        return {
                            Width: e,
                            Height: t
                        }
                    },
                    getScreenSize: function() {
                        return this.getWidthHeight(screen.availWidth, screen.availHeight)
                    },
                    getScrollSize: function(e) {
                        return e && e != window && e != document || (e = document.documentElement),
                        this.getWidthHeight(e.scrollWidth, e.scrollHeight)
                    },
                    getOffsetSize: function(e) {
                        return e && e != window || (e = document.documentElement),
                        e == document ? this.getScrollSize(document.documentElement) : this.getWidthHeight(e.offsetWidth, e.offsetHeight)
                    },
                    getClientSize: function(e) {
                        return e && e != window || (e = document.documentElement),
                        e == document ? this.getScrollSize(document.documentElement) : this.getWidthHeight(e.clientWidth, e.clientHeight)
                    },
                    getDocumentSize: function() {
                        return this.getScrollSize(document.documentElement)
                    },
                    getWindowSize: function() {
                        return this.getOffsetSize(document.documentElement)
                    },
                    getElementSize: function(e) {
                        return this.getOffsetSize(e)
                    },
                    getWindowCoord: function(e) {
                        return this.getXY(window.screenLeft || window.screenX, window.screenTop || window.screenY)
                    },
                    getElementCoord: function(e) {
                        for (var t = e.offsetLeft, n = e.offsetTop; e.offsetParent; )
                            t += (e = e.offsetParent).offsetLeft,
                            n += e.offsetTop;
                        return this.getXY(t, n)
                    },
                    getScrollCoord: function(e) {
                        return e && e != window ? this.getXY(e.scrollLeft, e.scrollTop) : this.getXY(window.scrollX || window.pageXOffset || document.documentElement.scrollLeft, window.scrollY || window.pageYOffset || document.documentElement.scrollTop)
                    },
                    getScrollLimitCoord: function(e) {
                        e && e != window || (e = document.documentElement);
                        var t = this.getScrollSize(e)
                          , n = this.getClientSize(e);
                        return this.getXY(t.Width - n.Width, t.Height - n.Height)
                    },
                    getEventCoord: function(e) {
                        return e ? this.getXY(e.pageX, e.pageY) : this.getXY(0, 0)
                    },
                    getCoord: function(e) {
                        var t, n;
                        return e.tagName ? (t = this.getElementCoord(e),
                        n = this.getOffsetSize(e)) : e == window ? (t = this.getScrollCoord(),
                        n = this.getOffsetSize(document.documentElement)) : e == document ? (t = {
                            X: 0,
                            Y: 0
                        },
                        n = this.getScrollSize(document.documentElement)) : e == screen && (t = {
                            X: 0,
                            Y: 0
                        },
                        n = this.getScreenSize()),
                        {
                            X: t.X,
                            Y: t.Y,
                            Top: t.Y,
                            Right: t.X + n.Width,
                            Bottom: t.Y + n.Height,
                            Left: t.X,
                            Width: n.Width,
                            Height: n.Height
                        }
                    }
                },
                g.getCoord = function() {
                    return g.Coords.getCoord.apply(g.Coords, arguments)
                }
                ,
                g.preventDefault = function(e) {
                    return e.preventDefault()
                }
                ,
                g.stopPropagation = function(e) {
                    return e.stopPropagation()
                }
                ,
                g.CustomEvents = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "sml"
                      , t = e + "EventListener"
                      , n = e + "BindedEventListeners"
                      , i = new RegExp("^" + e + ":[\\w\\d\\-:]+$");
                    return this.add = function(e, n) {
                        var o = this
                          , a = document;
                        return arguments.length > 2 && (a = arguments[0],
                        e = arguments[1],
                        n = arguments[2]),
                        a instanceof Array ? a.forEach((function(t) {
                            return o.add(t, e, n)
                        }
                        )) || n : e instanceof Array ? e.forEach((function(e) {
                            return o.add(a, e, n)
                        }
                        )) || n : n instanceof Array ? n.forEach((function(t) {
                            return o.add(a, e, t)
                        }
                        )) || n : !("object" != r(a) || !i.test(e) || "function" != typeof n) && (n[t] || (n[t] = function(e) {
                            return n.call(a, e.detail)
                        }
                        ),
                        a.addEventListener(e, n[t], !1),
                        n)
                    }
                    ,
                    this.remove = function(e, n) {
                        var o = this
                          , a = document;
                        return arguments.length > 2 && (a = arguments[0],
                        e = arguments[1],
                        n = arguments[2]),
                        a instanceof Array ? a.forEach((function(t) {
                            return o.remove(t, e, n)
                        }
                        )) || n : e instanceof Array ? e.forEach((function(e) {
                            return o.remove(a, e, n)
                        }
                        )) || n : n instanceof Array ? n.forEach((function(t) {
                            return o.remove(a, e, t)
                        }
                        )) || n : !("object" != r(a) || !i.test(e) || "function" != typeof n) && (a.removeEventListener(e, n[t]),
                        n)
                    }
                    ,
                    this.bind = function(e, t) {
                        var o = this
                          , a = document;
                        return arguments.length > 2 && (a = arguments[0],
                        e = arguments[1],
                        t = arguments[2]),
                        a instanceof Array ? a.forEach((function(n) {
                            return o.bind(n, e, t)
                        }
                        )) || t : e instanceof Array ? e.forEach((function(e) {
                            return o.bind(a, e, t)
                        }
                        )) || t : t instanceof Array ? t.forEach((function(t) {
                            return o.bind(a, e, t)
                        }
                        )) || t : !("object" != r(a) || !i.test(e) || "function" != typeof t) && (a[n] || (a[n] = {}),
                        a[n][e]instanceof Array || (a[n][e] = []),
                        a[n][e] = a[n][e].filter((function(e) {
                            return e != t
                        }
                        )),
                        a[n][e].push(t),
                        t)
                    }
                    ,
                    this.unbind = function(e, t) {
                        var o = this
                          , a = document;
                        return arguments.length > 2 && (a = arguments[0],
                        e = arguments[1],
                        t = arguments[2]),
                        a instanceof Array ? a.forEach((function(n) {
                            return o.unbind(n, e, t)
                        }
                        )) || t : e instanceof Array ? e.forEach((function(e) {
                            return o.unbind(a, e, t)
                        }
                        )) || t : t instanceof Array ? t.forEach((function(t) {
                            return o.unbind(a, e, t)
                        }
                        )) || t : !("object" != r(a) || !i.test(e) || "function" != typeof t) && (!!(a[n] && a[n][e]instanceof Array) && (a[n][e] = a[n][e].filter((function(e) {
                            return e != t
                        }
                        )),
                        t))
                    }
                    ,
                    this.dispatch = function(e, t) {
                        var o = this
                          , a = document;
                        return arguments.length > 2 && (a = arguments[0],
                        e = arguments[1],
                        t = arguments[2]),
                        a instanceof Array ? a.forEach((function(n) {
                            return o.dispatch(n, e, t)
                        }
                        )) || t : e instanceof Array ? e.forEach((function(e) {
                            return o.dispatch(a, e, t)
                        }
                        )) || t : !("object" != r(a) || !i.test(e)) && (a[n] && a[n][e]instanceof Array && a[n][e].forEach((function(e) {
                            return "function" == typeof e && e.call(a, t)
                        }
                        )),
                        a.dispatchEvent(new CustomEvent(e,{
                            detail: t
                        })),
                        t)
                    }
                    ,
                    this
                }
                ,
                g.Scroller = {
                    scrollTo: function(e) {
                        var t, n = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = e.Frame && e.Frame instanceof HTMLElement ? e.Frame : window, a = {};
                        if (o.sMLScrollerSetting ? (a = o.sMLScrollerSetting).cancel() : ((a = o.sMLScrollerSetting = {
                            Frame: o
                        }).scrollTo = a.Frame === window ? function(e, t) {
                            return window.scrollTo(e, t)
                        }
                        : function(e, t) {
                            a.Frame.scrollLeft = e,
                            a.Frame.scrollTop = t
                        }
                        ,
                        a.cancel = function() {
                            a.removeScrollCancelation(),
                            a.oncanceled && a.oncanceled()
                        }
                        ,
                        a.addScrollCancelation = function() {
                            return ["keydown", "mousedown", "touchstart", "wheel"].forEach((function(e) {
                                return a.Frame.addEventListener(e, a.cancel)
                            }
                            ))
                        }
                        ,
                        a.removeScrollCancelation = function() {
                            return ["keydown", "mousedown", "touchstart", "wheel"].forEach((function(e) {
                                return a.Frame.removeEventListener(e, a.cancel)
                            }
                            ))
                        }
                        ,
                        a.preventUserScrolling = function() {
                            return ["keydown", "mousedown", "touchstart", "wheel"].forEach((function(e) {
                                return a.Frame.addEventListener(e, g.preventDefault)
                            }
                            ))
                        }
                        ,
                        a.allowUserScrolling = function() {
                            return ["keydown", "mousedown", "touchstart", "wheel"].forEach((function(e) {
                                return a.Frame.removeEventListener(e, g.preventDefault)
                            }
                            ))
                        }
                        ),
                        e instanceof HTMLElement ? a.Target = g.Coord.getElementCoord(e) : a.Target = "number" == typeof e ? {
                            Y: e
                        } : e ? {
                            X: e.X,
                            Y: e.Y
                        } : {},
                        a.Start = g.Coords.getScrollCoord(a.Frame),
                        a.StartedOn = (new Date).getTime(),
                        "number" != typeof a.Target.X && (a.Target.X = a.Start.X),
                        "number" != typeof a.Target.Y && (a.Target.Y = a.Start.Y),
                        a.Duration = "number" == typeof i.Duration && i.Duration >= 0 ? i.Duration : 100,
                        !a.Duration)
                            return a.scrollTo(a.Target.X, a.Target.Y),
                            Promise.resolve();
                        switch (r(i.ease)) {
                        case "function":
                            a.ease = i.ease;
                            break;
                        case "string":
                            a.ease = g.Easing[i.ease] ? g.Easing[i.ease] : g.Easing.linear;
                            break;
                        default:
                            a.ease = g.Easing.linear
                        }
                        return a.ForceScroll = i.ForceScroll,
                        a.ForceScroll ? (a.preventUserScrolling(),
                        t = function() {
                            return a.allowUserScrolling()
                        }
                        ) : (a.addScrollCancelation(),
                        t = function() {
                            return a.removeScrollCancelation()
                        }
                        ),
                        a.after = function() {
                            clearTimeout(a.Timer),
                            delete a.oncanceled,
                            delete n.Scrolling,
                            t()
                        }
                        ,
                        new Promise((function(e, t) {
                            a.oncanceled = function() {
                                a.after(),
                                t()
                            }
                            ,
                            a.resolve = function() {
                                return e()
                            }
                            ,
                            n.Scrolling = a,
                            n.scrollInProgress()
                        }
                        )).then((function() {
                            a.scrollTo(a.Target.X, a.Target.Y),
                            a.after()
                        }
                        ))
                    },
                    scrollInProgress: function() {
                        var e = this
                          , t = this.Scrolling
                          , n = (new Date).getTime() - t.StartedOn;
                        if (t.Duration <= n)
                            return t.resolve();
                        var i = t.ease(n / t.Duration);
                        t.scrollTo(Math.round(t.Start.X + (t.Target.X - t.Start.X) * i), Math.round(t.Start.Y + (t.Target.Y - t.Start.Y) * i)),
                        t.Timer = setTimeout((function() {
                            return e.scrollInProgress()
                        }
                        ), g.limitMax(10, t.Duration - n))
                    }
                },
                g.scrollTo = function() {
                    return g.Scroller.scrollTo.apply(g.Scroller, arguments)
                }
                ,
                g.Easing = (o = Math.pow,
                a = Math.sqrt,
                s = Math.sin,
                c = Math.cos,
                l = Math.PI,
                d = (u = 2 * l / 3) / 1.5,
                f = function(e) {
                    return (e *= 2.75) < 1 ? o(e, 2) : e < 2 ? o(e - 1.5, 2) + .75 : e < 2.5 ? o(e - 2.25, 2) + .9375 : o(e - 2.625, 2) + .984375
                }
                ,
                {
                    linear: function(e) {
                        return e
                    },
                    easeInSine: function(e) {
                        return 1 - c(e * l / 2)
                    },
                    easeOutSine: function(e) {
                        return s(e * l / 2)
                    },
                    easeInOutSine: function(e) {
                        return (1 - c(e * l)) / 2
                    },
                    easeInQuad: (p = function(e, t) {
                        switch (e) {
                        case "i":
                            return function(e) {
                                return o(e, t)
                            }
                            ;
                        case "o":
                            return function(e) {
                                return 1 - o(1 - e, t)
                            }
                            ;
                        case "io":
                            return function(e) {
                                return ((e *= 2) < 1 ? o(e, t) : 1 - o(1 - e, t)) / 2
                            }
                        }
                    }
                    )("i", 2),
                    easeOutQuad: p("o", 2),
                    easeInOutQuad: p("io", 2),
                    easeInCubic: p("i", 3),
                    easeOutCubic: p("o", 3),
                    easeInOutCubic: p("io", 3),
                    easeInQuart: p("i", 4),
                    easeOutQuart: p("o", 4),
                    easeInOutQuart: p("io", 4),
                    easeInQuint: p("i", 5),
                    easeOutQuint: p("o", 5),
                    easeInOutQuint: p("io", 5),
                    easeInExpo: function(e) {
                        return e ? o(2, 10 * --e) : 0
                    },
                    easeOutExpo: function(e) {
                        return 1 == e ? 1 : 1 - o(2, -10 * e)
                    },
                    easeInOutExpo: function(e) {
                        return e ? 1 == e ? 1 : ((e *= 2) < 1 ? o(2, 10 * --e) : 2 - o(2, -10 * --e)) / 2 : 0
                    },
                    easeInCirc: function(e) {
                        return 1 - a(1 - o(e, 2))
                    },
                    easeOutCirc: function(e) {
                        return a(1 - o(e - 1, 2))
                    },
                    easeInOutCirc: function(e) {
                        return ((e *= 2) < 1 ? 1 - a(1 - o(e, 2)) : 1 + a(1 - o(e - 2, 2))) / 2
                    },
                    easeInBack: function(e) {
                        return 2.70158 * o(e, 3) - 1.70158 * o(e, 2)
                    },
                    easeOutBack: function(e) {
                        return 1 + 2.70158 * o(e - 1, 3) + 1.70158 * o(e - 1, 2)
                    },
                    easeInOutBack: function(e) {
                        return ((e *= 2) < 1 ? 3.5949095 * o(e, 3) - 2.5949095 * o(e, 2) : 2 + 3.5949095 * o(e - 2, 3) + 2.5949095 * o(e - 2, 2)) / 2
                    },
                    easeInElastic: function(e) {
                        return e ? 1 == e ? 1 : -1 * o(2, 10 * --e) * s((10 * e - .75) * u) : 0
                    },
                    easeOutElastic: function(e) {
                        return e ? 1 == e ? 1 : 1 + o(2, -10 * e) * s((10 * e - .75) * u) : 0
                    },
                    easeInOutElastic: function(e) {
                        return e ? 1 == e ? 1 : ((e *= 2) < 1 ? -1 * o(2, 10 * --e) * s((10 * e - 1.125) * d) : 2 + o(2, -10 * --e) * s((10 * e - 1.125) * d)) / 2 : 0
                    },
                    easeInBounce: function(e) {
                        return 1 - f(1 - e)
                    },
                    easeOutBounce: function(e) {
                        return f(e)
                    },
                    easeInOutBounce: function(e) {
                        return ((e *= 2) < 1 ? 1 - f(1 - e) : 1 + f(e - 1)) / 2
                    }
                }),
                g.Cookies = {
                    read: function(e) {
                        if ("string" != typeof e || !e)
                            return "";
                        e = encodeURIComponent(e);
                        for (var t = document.cookie.split("; "), n = "", i = t.length, r = 0; r < i; r++)
                            if (t[r].substr(0, e.length + 1) == e + "=") {
                                n = t[r].substr(e.length + 1, t[r].length);
                                break
                            }
                        return decodeURIComponent(n)
                    },
                    write: function(e, t, n) {
                        var i = new Date;
                        return !(!e || "string" != typeof e || "string" != typeof t) && ("object" != r(n) && (n = {}),
                        e = encodeURIComponent(e),
                        t = encodeURIComponent(t),
                        n.Path = "string" == typeof n.Path ? n.Path : location.pathname.replace(/[^\/]+$/, ""),
                        n.Expires = "number" == typeof n.Expires ? n.Expires : 864e5,
                        document.cookie = [e + "=" + t, "path=" + n.Path, "expires=" + i.toGMTString(i.setTime(i.getTime() + n.Expires))].join("; "),
                        document.cookie)
                    }
                },
                g.Ranges = {
                    selectRange: function(e) {
                        if (!e)
                            return null;
                        var t = window.getSelection();
                        return t.removeAllRanges(),
                        t.addRange(e),
                        e
                    },
                    getRange: function() {
                        var e = "object" == r(arguments[0]) ? arguments[0] : this._searchSidesOfText.apply(this, arguments);
                        if (!e)
                            return null;
                        var t = e.Start.Node.ownerDocument.createRange();
                        return t.setStart(e.Start.Node, "number" == typeof e.Start.Index ? e.Start.Index : e.Start.Node.textContent.indexOf(e.Start.Text)),
                        t.setEnd(e.End.Node, "number" == typeof e.End.Index ? e.End.Index : e.End.Node.textContent.indexOf(e.End.Text) + e.End.Text.length),
                        t
                    },
                    _searchSidesOfText: function(e, t) {
                        if (t || (t = document.body),
                        "string" != typeof e || !e || this._flat(t.textContent).indexOf(e) < 0)
                            return null;
                        if (3 == t.nodeType)
                            return {
                                Start: {
                                    Node: t,
                                    Text: e
                                },
                                End: {
                                    Node: t,
                                    Text: e
                                }
                            };
                        for (var n = [], r = {}, o = 0, a = t.childNodes.length - 1, s = "", c = 0; c <= a; c++) {
                            if (this._flat(t.childNodes[c].textContent).indexOf(e) >= 0)
                                return this._searchSidesOfText(e, t.childNodes[c]);
                            n.push(t.childNodes[c].textContent)
                        }
                        for (s = this._distill(n, o + 1, a); s && this._flat(s).indexOf(e) >= 0; )
                            o++,
                            s = this._distill(n, o + 1, a);
                        var l = t.childNodes[o]
                          , u = 0
                          , d = ""
                          , p = l.textContent.length - 1;
                        for (s = this._distill(l.textContent, u, p); this._flat(s) && !new RegExp("^" + this._escape(this._flat(s))).test(e); )
                            u++,
                            s = this._distill(l.textContent, u, p);
                        for (d = this._flat(s); 3 != l.nodeType; )
                            i("F"),
                            l = (r = this._find(d, l)).Start.Node,
                            d = r.Start.Text;
                        for (s = this._distill(n, o, a - 1); s && this._flat(s).indexOf(e) >= 0; )
                            a--,
                            s = this._distill(n, o, a - 1);
                        var f = t.childNodes[a]
                          , g = ""
                          , h = f.textContent.length - 1;
                        for (s = this._distill(f.textContent, 0, h); this._flat(s) && !new RegExp(this._escape(this._flat(s)) + "$").test(e); )
                            h--,
                            s = this._distill(f.textContent, 0, h);
                        for (g = this._flat(s); 3 != f.nodeType; )
                            i("F"),
                            f = (r = this._searchSidesOfText(g, f)).End.Node,
                            g = r.End.Text;
                        return {
                            Start: {
                                Node: l,
                                Text: d
                            },
                            End: {
                                Node: f,
                                Text: g
                            }
                        }
                    },
                    _flat: function(e) {
                        return e.replace(/[\r\n]/g, "")
                    },
                    _escape: function(e) {
                        return e.replace(/([\(\)\{\}\[\]\,\.\-\+\*\?\!\:\^\$\/\\])/g, "\\$1")
                    },
                    _distill: function(e, t, n) {
                        for (var i = "", r = t; r <= n; r++)
                            i += e[r];
                        return i
                    }
                },
                g.Fullscreen = {
                    polyfill: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window || self
                          , t = e.document
                          , n = e.Element.prototype;
                        if (void 0 === t.fullscreenEnabled) {
                            if ("function" != typeof Promise)
                                throw new Error("sML.Fullscreen.polyfill requires Promise.");
                            var i = t.webkitFullscreenEnabled ? "webkit" : t.msFullscreenEnabled ? "ms" : "";
                            switch (i) {
                            case "webkit":
                                t.addEventListener("webkitfullscreenchange", (function() {
                                    return t.dispatchEvent(new Event("fullscreenchange",{
                                        bubbles: !0,
                                        cancelable: !1
                                    }))
                                }
                                ));
                                break;
                            case "ms":
                                t.onmsfullscreenchange = function() {
                                    return t.dispatchEvent((e = t.createEvent("Event")).initEvent("fullscreenchange", !0, !1) || e);
                                    var e
                                }
                                ;
                                break;
                            default:
                                return t.fullscreenEnabled = !1,
                                t.fullscreenElement = null,
                                void (t.exitFullscreen = n.requestFullscreen = function() {
                                    return Promise.reject()
                                }
                                )
                            }
                            Object.defineProperties(t, {
                                fullscreenEnabled: {
                                    get: function() {
                                        return t[i + "FullscreenEnabled"]
                                    }
                                },
                                fullscreenElement: {
                                    get: function() {
                                        return t[i + "FullscreenElement"]
                                    }
                                }
                            }),
                            t.exitFullscreen = function() {
                                var e = arguments
                                  , n = this;
                                return new Promise((function(r, o) {
                                    if (!t.fullscreenElement)
                                        return o();
                                    t.addEventListener("fullscreenchange", (function e(n) {
                                        r(n),
                                        t.removeEventListener("fullscreenchange", e)
                                    }
                                    )),
                                    n[i + "ExitFullscreen"].apply(n, e)
                                }
                                ))
                            }
                            ,
                            n.requestFullscreen = function() {
                                var e = arguments
                                  , n = this;
                                return new Promise((function(r, o) {
                                    if (t.fullscreenElement)
                                        return o();
                                    t.addEventListener("fullscreenchange", (function e(n) {
                                        r(n),
                                        t.removeEventListener("fullscreenchange", e)
                                    }
                                    )),
                                    n[i + "RequestFullscreen"].apply(n, e)
                                }
                                ))
                            }
                        }
                    }
                },
                g
            }())
        }
        ).call(this, n(0))
    },
    29: function(e, t, n) {
        var i = n(3)
          , r = n(30);
        "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.i, r, ""]]);
        var o = {
            insert: "head",
            singleton: !1
        };
        i(r, o);
        e.exports = r.locals || {}
    },
    3: function(e, t, n) {
        "use strict";
        var i, r = function() {
            return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)),
            i
        }, o = function() {
            var e = {};
            return function(t) {
                if (void 0 === e[t]) {
                    var n = document.querySelector(t);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                        try {
                            n = n.contentDocument.head
                        } catch (e) {
                            n = null
                        }
                    e[t] = n
                }
                return e[t]
            }
        }(), a = [];
        function s(e) {
            for (var t = -1, n = 0; n < a.length; n++)
                if (a[n].identifier === e) {
                    t = n;
                    break
                }
            return t
        }
        function c(e, t) {
            for (var n = {}, i = [], r = 0; r < e.length; r++) {
                var o = e[r]
                  , c = t.base ? o[0] + t.base : o[0]
                  , l = n[c] || 0
                  , u = "".concat(c, " ").concat(l);
                n[c] = l + 1;
                var d = s(u)
                  , p = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
                -1 !== d ? (a[d].references++,
                a[d].updater(p)) : a.push({
                    identifier: u,
                    updater: b(p, t),
                    references: 1
                }),
                i.push(u)
            }
            return i
        }
        function l(e) {
            var t = document.createElement("style")
              , i = e.attributes || {};
            if (void 0 === i.nonce) {
                var r = n.nc;
                r && (i.nonce = r)
            }
            if (Object.keys(i).forEach((function(e) {
                t.setAttribute(e, i[e])
            }
            )),
            "function" == typeof e.insert)
                e.insert(t);
            else {
                var a = o(e.insert || "head");
                if (!a)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a.appendChild(t)
            }
            return t
        }
        var u, d = (u = [],
        function(e, t) {
            return u[e] = t,
            u.filter(Boolean).join("\n")
        }
        );
        function p(e, t, n, i) {
            var r = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
            if (e.styleSheet)
                e.styleSheet.cssText = d(t, r);
            else {
                var o = document.createTextNode(r)
                  , a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
            }
        }
        function f(e, t, n) {
            var i = n.css
              , r = n.media
              , o = n.sourceMap;
            if (r ? e.setAttribute("media", r) : e.removeAttribute("media"),
            o && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
            e.styleSheet)
                e.styleSheet.cssText = i;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(i))
            }
        }
        var g = null
          , h = 0;
        function b(e, t) {
            var n, i, r;
            if (t.singleton) {
                var o = h++;
                n = g || (g = l(t)),
                i = p.bind(null, n, o, !1),
                r = p.bind(null, n, o, !0)
            } else
                n = l(t),
                i = f.bind(null, n, t),
                r = function() {
                    !function(e) {
                        if (null === e.parentNode)
                            return !1;
                        e.parentNode.removeChild(e)
                    }(n)
                }
                ;
            return i(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                        return;
                    i(e = t)
                } else
                    r()
            }
        }
        e.exports = function(e, t) {
            (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = r());
            var n = c(e = e || [], t);
            return function(e) {
                if (e = e || [],
                "[object Array]" === Object.prototype.toString.call(e)) {
                    for (var i = 0; i < n.length; i++) {
                        var r = s(n[i]);
                        a[r].references--
                    }
                    for (var o = c(e, t), l = 0; l < n.length; l++) {
                        var u = s(n[l]);
                        0 === a[u].references && (a[u].updater(),
                        a.splice(u, 1))
                    }
                    n = o
                }
            }
        }
    },
    30: function(e, t, n) {
        (t = n(4)(!1)).push([e.i, "/*! Bibi Book Style */body,html{margin:0;padding:0;border:0}html img.bibi-spine-item-image{display:block;margin:0;border:0;padding:0;width:auto;height:auto}html.bibi-columned iframe,html.bibi-columned image,html.bibi-columned img,html.bibi-columned picture,html.bibi-columned svg,html.bibi-columned video{-webkit-column-break-inside:avoid;page-break-inside:avoid;break-inside:avoid}html.bibi-flick-active.bibi-flick-hot{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.bibi-flick-active img{pointer-events:none}html.bibi-with-gutters>head{display:block}html.bibi-with-gutters>head>:not(bibi-neck){display:none}html.bibi-with-gutters>head>bibi-neck{display:block;position:relative;z-index:-99999999999;margin:0;border:0;padding:0}html.bibi-with-gutters>head>bibi-neck>bibi-throat{display:block;float:left;margin:0;border:0;padding:0}", ""]),
        e.exports = t
    },
    4: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map((function(t) {
                    var n = function(e, t) {
                        var n = e[1] || ""
                          , i = e[3];
                        if (!i)
                            return n;
                        if (t && "function" == typeof btoa) {
                            var r = (a = i,
                            s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                            c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),
                            "/*# ".concat(c, " */"))
                              , o = i.sources.map((function(e) {
                                return "/*# sourceURL=".concat(i.sourceRoot || "").concat(e, " */")
                            }
                            ));
                            return [n].concat(o).concat([r]).join("\n")
                        }
                        var a, s, c;
                        return [n].join("\n")
                    }(t, e);
                    return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                }
                )).join("")
            }
            ,
            t.i = function(e, n, i) {
                "string" == typeof e && (e = [[null, e, ""]]);
                var r = {};
                if (i)
                    for (var o = 0; o < this.length; o++) {
                        var a = this[o][0];
                        null != a && (r[a] = !0)
                    }
                for (var s = 0; s < e.length; s++) {
                    var c = [].concat(e[s]);
                    i && r[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n),
                    t.push(c))
                }
            }
            ,
            t
        }
    },
    47: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = {};
        n.r(i),
        n.d(i, "Bibi", (function() {
            return x
        }
        )),
        n.d(i, "B", (function() {
            return A
        }
        )),
        n.d(i, "L", (function() {
            return k
        }
        )),
        n.d(i, "R", (function() {
            return _
        }
        )),
        n.d(i, "I", (function() {
            return H
        }
        )),
        n.d(i, "P", (function() {
            return D
        }
        )),
        n.d(i, "U", (function() {
            return R
        }
        )),
        n.d(i, "D", (function() {
            return N
        }
        )),
        n.d(i, "S", (function() {
            return F
        }
        )),
        n.d(i, "C", (function() {
            return z
        }
        )),
        n.d(i, "O", (function() {
            return U
        }
        )),
        n.d(i, "E", (function() {
            return W
        }
        )),
        n.d(i, "M", (function() {
            return j
        }
        )),
        n.d(i, "X", (function() {
            return X
        }
        ));
        var r = n(2)
          , o = n.n(r)
          , a = arguments;
        function s(e, t) {
            return u(e) || l(e, t) || M(e, t) || c()
        }
        function c() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function l(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = []
                  , i = !0
                  , r = !1
                  , o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value),
                    !t || n.length !== t); i = !0)
                        ;
                } catch (e) {
                    r = !0,
                    o = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (r)
                            throw o
                    }
                }
                return n
            }
        }
        function u(e) {
            if (Array.isArray(e))
                return e
        }
        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function p(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function f(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && L(e, t)
        }
        function g(e) {
            var t = S();
            return function() {
                var n, i = P(e);
                if (t) {
                    var r = P(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return h(this, n)
            }
        }
        function h(e, t) {
            return !t || "object" !== I(t) && "function" != typeof t ? b(e) : t
        }
        function b(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function m(e) {
            var t = "function" == typeof Map ? new Map : void 0;
            return (m = function(e) {
                if (null === e || !y(e))
                    return e;
                if ("function" != typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e))
                        return t.get(e);
                    t.set(e, n)
                }
                function n() {
                    return v(e, arguments, P(this).constructor)
                }
                return n.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                L(n, e)
            }
            )(e)
        }
        function v(e, t, n) {
            return (v = S() ? Reflect.construct : function(e, t, n) {
                var i = [null];
                i.push.apply(i, t);
                var r = new (Function.bind.apply(e, i));
                return n && L(r, n.prototype),
                r
            }
            ).apply(null, arguments)
        }
        function S() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function y(e) {
            return -1 !== Function.toString.call(e).indexOf("[native code]")
        }
        function L(e, t) {
            return (L = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function P(e) {
            return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function I(e) {
            return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function T(e) {
            return B(e) || E(e) || M(e) || w()
        }
        function w() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function M(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return C(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? C(e, t) : void 0
            }
        }
        function E(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }
        function B(e) {
            if (Array.isArray(e))
                return C(e)
        }
        function C(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        var x = {
            version: "1.2.0",
            href: "https://bibi.epub.link",
            Status: "",
            TimeOrigin: Date.now(),
            SettingTypes: {
                boolean: ["allow-placeholders", "prioritise-fallbacks"],
                "yes-no": ["autostart", "autostart-embedded", "fix-nav-ttb", "fix-reader-view-mode", "flip-pages-during-sliding", "full-breadth-layout-in-scroll", "start-embedded-in-new-window", "use-arrows", "use-bookmarks", "use-font-size-changer", "use-full-height", "use-history", "use-keys", "use-loupe", "use-menubar", "use-nombre", "use-slider", "zoom-out-for-utilities"],
                string: ["book", "default-page-progression-direction", "on-doubletap", "on-tripletap", "pagination-method", "reader-view-mode"],
                integer: ["item-padding-bottom", "item-padding-left", "item-padding-right", "item-padding-top", "spread-gap", "spread-margin"],
                number: ["base-font-size", "flipper-width", "font-size-scale-per-step", "loupe-max-scale", "loupe-scale-per-step", "orientation-border-ratio"],
                array: ["content-draggable", "orthogonal-edges", "orthogonal-arrow-keys", "orthogonal-touch-moves", "orthogonal-wheelings"]
            },
            SettingTypes_PresetOnly: {
                boolean: ["accept-base64-encoded-data", "accept-blob-converted-data", "allow-scripts-in-content", "remove-bibi-website-link"],
                "yes-no": ["accept-local-file", "keep-settings", "resume-from-last-position"],
                string: ["bookshelf", "website-name-in-title", "website-name-in-menu", "website-href"],
                integer: ["max-bookmarks", "max-history"],
                number: [],
                array: ["extensions", "extract-if-necessary", "trustworthy-origins"]
            },
            SettingTypes_UserOnly: {
                boolean: ["debug", "wait", "zine"],
                "yes-no": [],
                string: ["edge", "epubcfi", "p"],
                integer: ["log", "nav", "parent-bibi-index"],
                number: ["iipp", "sipp"],
                array: []
            },
            verifySettingValue: function(e, t, n, i) {
                return x.verifySettingValue[e](t, n, i)
            }
        };
        (function(e) {
            for (var t in e)
                x.verifySettingValue[t] = e[t]
        }
        )({
            boolean: function(e, t, n) {
                return "boolean" == typeof t ? t : "true" === t || "1" === t || 1 === t || "false" !== t && "0" !== t && 0 !== t && (!n && void 0)
            },
            "yes-no": function(e, t, n) {
                return /^(yes|no|mobile|desktop)$/.test(t) ? t : "true" === t || "1" === t || 1 === t ? "yes" : "false" === t || "0" === t || 0 === t || n ? "no" : void 0
            },
            string: function(e, t, n) {
                if ("string" == typeof t) {
                    switch (e) {
                    case "edge":
                        return /^(head|foot)$/.test(t) ? t : void 0;
                    case "book":
                        return (t = decodeURIComponent(t).trim()) ? t : void 0;
                    case "default-page-progression-direction":
                        return "rtl" == t ? t : "ltr";
                    case "on-doubletap":
                    case "on-tripletap":
                        return /^(panel|zoom)$/.test(t) ? t : void 0;
                    case "p":
                        return /^([a-z]+|[1-9]\d*((\.[1-9]\d*)*|-[a-z]+))$/.test(t) ? t : void 0;
                    case "pagination-method":
                        return "x" == t ? t : "auto";
                    case "reader-view-mode":
                        return /^(paged|horizontal|vertical)$/.test(t) ? t : "paged"
                    }
                    return t
                }
                if (n)
                    return ""
            },
            integer: function(e, t, n) {
                if ("number" == typeof (t *= 1) && isFinite(t)) {
                    switch (t = Math.max(Math.round(t), 0),
                    e) {
                    case "log":
                    case "max-bookmarks":
                        return Math.min(t, 9);
                    case "max-history":
                        return Math.min(t, 19)
                    }
                    return t
                }
                if (n)
                    return 0
            },
            number: function(e, t, n) {
                return "number" == typeof (t *= 1) && isFinite(t) && t >= 0 ? t : n ? 0 : void 0
            },
            array: function(e, t, n) {
                if (Array.isArray(t)) {
                    switch (e) {
                    case "content-draggable":
                        t.length = 2;
                        for (var i = 0; i < 2; i++)
                            t[i] = !1 !== t[i] && "false" !== t[i] && "0" !== t[i] && 0 !== t[i];
                        return t;
                    case "extensions":
                        return t.filter((function(e) {
                            return "string" == typeof e.src && (e.src = e.src.trim())
                        }
                        ));
                    case "extract-if-necessary":
                        return (t = t.map((function(e) {
                            return "string" == typeof e ? e.trim().toLowerCase() : ""
                        }
                        ))).includes("*") ? ["*"] : t.filter((function(e) {
                            return /^(\.[\w\d]+)*$/.test(e)
                        }
                        ));
                    case "orthogonal-arrow-keys":
                    case "orthogonal-edges":
                    case "orthogonal-touch-moves":
                    case "orthogonal-wheelings":
                        t.length = 2;
                        for (var r = 0; r < 2; r++)
                            t[r] = "string" == typeof t[r] ? t[r] : "";
                        return t;
                    case "trustworthy-origins":
                        return t.reduce((function(e, t) {
                            return !("string" != typeof t || !/^https?:\/\/[^\/]+$/.test(t = t.trim().replace(/\/$/, "")) || e.includes(t)) && (e.push(t) && e)
                        }
                        ), [])
                    }
                    return t.filter((function(e) {
                        return "function" != typeof e
                    }
                    ))
                }
                if (n)
                    return []
            }
        }),
        x.applyFilteredSettingsTo = function(e, t, n, i) {
            return n.forEach((function(n) {
                var r = function(r) {
                    n[r].forEach((function(n) {
                        var o = x.verifySettingValue[r](n, t[n]);
                        i ? (e[n] = x.verifySettingValue[r](n, e[n]),
                        void 0 === o && void 0 !== e[n] || (e[n] = x.verifySettingValue[r](n, t[n], !0))) : t.hasOwnProperty(n) && void 0 !== o && (e[n] = o)
                    }
                    ))
                };
                for (var o in n)
                    r(o)
            }
            )),
            e
        }
        ,
        x.ErrorMessages = {
            Canceled: "Fetch Canceled",
            CORSBlocked: "Probably CORS Blocked",
            DataInvalid: "Data Invalid",
            NotFound: "404 Not Found"
        },
        x.at1st = function() {
            return x.at1st.List.forEach((function(e) {
                return "function" != typeof e || e()
            }
            ))
        }
        ,
        x.at1st.List = [],
        x.hello = function() {
            return new Promise((function(e) {
                x.at1st(),
                U.log.initialize(),
                U.log("Hello!", "<b:>"),
                U.log("[ja] ".concat(x.href)),
                U.log("[en] https://github.com/satorumurmur/bibi"),
                e()
            }
            )).then(x.initialize).then(x.loadExtensions).then(x.ready).then(x.getBookData).then(x.loadBook).then(x.bindBook).then(x.openBook).catch(U.error)
        }
        ,
        x.initialize = function() {
            var e, t;
            if (U.Origin = location.origin || location.protocol + "//" + (location.host || location.hostname + (location.port ? ":" + location.port : "")),
            U.Local = "file:" == location.protocol,
            U.RequestedURL = location.href,
            U.contentWindow = window,
            U.contentDocument = document,
            U.HTML = document.documentElement,
            U.Head = document.head,
            U.Body = document.body,
            U.Info = document.getElementById("bibi-info"),
            U.Title = document.getElementsByTagName("title")[0],
            (e = U.HTML.classList).add.apply(e, T(sML.Environments).concat(["Bibi", "welcome"])),
            (U.TouchOS = !(!sML.OS.iOS && !sML.OS.Android)) && (U.HTML.classList.add("touch"),
            sML.OS.iOS && (U.Head.appendChild(sML.create("meta", {
                name: "apple-mobile-web-app-capable",
                content: "yes"
            })),
            U.Head.appendChild(sML.create("meta", {
                name: "apple-mobile-web-app-status-bar-style",
                content: "white"
            })))),
            x.Dev && U.HTML.classList.add("dev"),
            x.Debug && U.HTML.classList.add("debug"),
            U.HTML.classList.add("default-lang-" + (U.Language = function(e) {
                Array.isArray(navigator.languages) && (e = e.concat(navigator.languages)),
                navigator.language && navigator.language != e[0] && e.unshift(navigator.language);
                for (var t = e.length, n = 0; n < t; n++) {
                    var i = e[n].split ? e[n].split("-")[0] : "";
                    if ("ja" == i)
                        return "ja";
                    if ("en" == i)
                        break
                }
                return "en"
            }([]))),
            W.initialize(),
            U.Biscuits.initialize(),
            D.initialize(),
            R.initialize(),
            N.initialize(),
            F.initialize(),
            H.initialize(),
            U.Embedded = function() {
                if (window.parent == window)
                    return U.HTML.classList.add("window-direct"),
                    0;
                U.HTML.classList.add("window-embedded");
                try {
                    if (location.host == parent.location.host || parent.location.href)
                        return 1
                } catch (e) {}
                return -1
            }(),
            U.ParentBibi = 1 === U.Embedded && "number" == typeof F["parent-bibi-index"] && window.parent["bibi:jo"].Bibis[F["parent-bibi-index"]] || null,
            U.ParentOrigin = U.ParentBibi ? window.parent.location.origin : "",
            U.FullscreenTarget = (t = (U.Embedded ? U.ParentBibi ? (sML.Fullscreen.polyfill(window.parent),
            U.ParentBibi.Frame) : void 0 : (sML.Fullscreen.polyfill(window),
            U.HTML)) || null) && t.ownerDocument.fullscreenEnabled ? (U.HTML.classList.add("fullscreen-enabled"),
            t) : (U.HTML.classList.add("fullscreen-disabled"),
            null),
            U.ParentBibi && (U.ParentBibi.Window = window,
            U.ParentBibi.Document = document,
            U.ParentBibi.HTML = U.HTML,
            U.ParentBibi.Body = U.Body,
            ["bibi:initialized", "bibi:readied", "bibi:prepared", "bibi:opened"].forEach((function(e) {
                return W.add(e, (function(t) {
                    return U.ParentBibi.dispatch(e, t)
                }
                ))
            }
            )),
            window.addEventListener("message", j.receive, !1)),
            sML.UA.Trident && !(sML.UA.Trident[0] >= 7))
                throw H.note("Your Browser Is Not Compatible", 99999999999, "ErrorOccured"),
                H.Veil.byebye({
                    en: "<span>Sorry....</span> <span>Your Browser Is</span> <span>Not Compatible.</span>",
                    ja: "<span>大変申し訳ありません。</span> <span>お使いのブラウザでは、</span><span>動作しません。</span>"
                });
            H.note('<span class="non-visual">Welcome!</span>'),
            U.WritingModeProperty = (n = getComputedStyle(U.HTML),
            /^(vertical|horizontal)-/.test(n["writing-mode"]) || sML.UA.Trident ? "writing-mode" : /^(vertical|horizontal)-/.test(n["-webkit-writing-mode"]) ? "-webkit-writing-mode" : /^(vertical|horizontal)-/.test(n["-epub-writing-mode"]) ? "-epub-writing-mode" : void 0);
            var n, i = U.Body.appendChild(sML.create("div", {
                id: "bibi-style-checker",
                innerHTML: " aAａＡあ亜　",
                style: {
                    width: "auto",
                    height: "auto",
                    left: "-1em",
                    top: "-1em"
                }
            }));
            U.VerticalTextEnabled = i.offsetWidth < i.offsetHeight,
            U.DefaultFontSize = Math.min(i.offsetWidth, i.offsetHeight),
            i.style.fontSize = "0.01px",
            U.MinimumFontSize = Math.min(i.offsetWidth, i.offsetHeight),
            i.setAttribute("style", ""),
            i.innerHTML = "",
            H.Slider.Size = F["use-slider"] ? i.offsetWidth : 0,
            H.Menu.Height = F["use-menubar"] ? i.offsetHeight : 0,
            document.body.removeChild(i),
            U.Body.style.width = "101vw",
            U.Body.style.height = "101vh",
            U.Scrollbars = {
                Width: window.innerWidth - U.HTML.offsetWidth,
                Height: window.innerHeight - U.HTML.offsetHeight
            },
            U.HTML.style.width = U.Body.style.width = "100%",
            U.Body.style.height = "",
            U.HTML.classList.toggle("book-full-height", F["use-full-height"]),
            U.HTML.classList.remove("welcome"),
            W.dispatch("bibi:initialized", x.Status = x.Initialized = "Initialized")
        }
        ,
        x.loadExtensions = function() {
            return new Promise((function(e, t) {
                var n = [];
                F["allow-scripts-in-content"] || n.push("sanitizer.js");
                var i = !1
                  , r = !1;
                F.book ? (U.isToBeExtractedIfNecessary(F.book) && (i = !0),
                F.zine && (r = !0)) : (F["accept-local-file"] || F["accept-blob-converted-data"]) && (i = r = !0),
                r && n.unshift("zine.js"),
                (i ? (F.book ? U.tryRangeRequest().then((function() {
                    return "on-the-fly"
                }
                )) : Promise.reject()).catch((function() {
                    return "at-once"
                }
                )).then((function(e) {
                    return n.unshift("extractor/" + e + ".js")
                }
                )) : Promise.resolve()).then((function() {
                    if (n.length && n.forEach((function(e) {
                        return F.extensions.unshift({
                            src: new URL("../../extensions/" + e,x.Script.src).href
                        })
                    }
                    )),
                    0 == F.extensions.length)
                        return t();
                    U.log("Loading Extension".concat(F.extensions.length > 1 ? "s" : "", "..."), "<g:>");
                    !function t(n) {
                        X.load(F.extensions[n]).then((function(e) {}
                        )).catch((function(e) {
                            U.log(e)
                        }
                        )).then((function() {
                            F.extensions[n + 1] ? t(n + 1) : e()
                        }
                        ))
                    }(0)
                }
                ))
            }
            )).then((function() {
                U.log("Extensions: %O", X.Extensions),
                U.log(X.Extensions.length ? "Loaded. (".concat(X.Extensions.length, " Extension").concat(X.Extensions.length > 1 ? "s" : "", ")") : "No Extension.", "</g>")
            }
            )).catch((function() {
                return !1
            }
            ))
        }
        ,
        x.ready = function() {
            return new Promise((function(e) {
                U.HTML.classList.add("ready"),
                U.ReadiedURL = location.href,
                W.add("bibi:readied", e),
                setTimeout((function() {
                    return W.dispatch("bibi:readied", x.Status = x.Readied = "Readied")
                }
                ), U.TouchOS && !U.Embedded ? 1234 : 0)
            }
            )).then((function() {
                U.HTML.classList.remove("ready")
            }
            ))
        }
        ,
        x.getBookData = function() {
            return F["book-data"] ? Promise.resolve({
                BookData: F["book-data"],
                BookDataMIMEType: F["book-data-mimetype"]
            }) : F.book ? Promise.resolve({
                Book: F.book
            }) : F["accept-local-file"] ? new Promise((function(e) {
                x.getBookData.resolve = function(t) {
                    e(t),
                    U.HTML.classList.remove("waiting-file")
                }
                ,
                U.HTML.classList.add("waiting-file")
            }
            )) : Promise.reject("Tell me EPUB name via ".concat(U.Embedded ? "embedding tag" : "URI", "."))
        }
        ,
        x.setBookData = function(e) {
            return x.getBookData.resolve ? x.getBookData.resolve(e) : Promise.reject(e)
        }
        ,
        x.busyHerself = function() {
            return new Promise((function(e) {
                U.Busy = !0,
                U.HTML.classList.add("busy"),
                U.HTML.classList.add("loading"),
                window.addEventListener(W.resize, _.resetBibiHeight),
                x.busyHerself.resolve = function() {
                    e(),
                    delete x.busyHerself
                }
            }
            )).then((function() {
                window.removeEventListener(W.resize, _.resetBibiHeight),
                U.Busy = !1,
                U.HTML.classList.remove("busy"),
                U.HTML.classList.remove("loading")
            }
            ))
        }
        ,
        x.loadBook = function(e) {
            return Promise.resolve().then((function() {
                return x.busyHerself(),
                H.note("Loading..."),
                U.log("Initializing Book...", "<g:>"),
                k.initializeBook(e).then((function(e) {
                    U.log("".concat(e, ": %O"), A),
                    U.log("Initialized. (as ".concat(/^[aiueo]/i.test(e) ? "an" : "a", " ").concat(e, ")"), "</g>")
                }
                ))
            }
            )).then((function() {
                F.update(),
                _.updateOrientation(),
                _.resetStage()
            }
            )).then((function() {
                return U.log("Creating Cover...", "<g:>"),
                A.CoverImage.Source ? (U.log("Cover Image: %O", A.CoverImage.Source),
                U.log("Will Be Created.", "</g>")) : U.log("Will Be Created. (w/o Image)", "</g>"),
                k.createCover()
            }
            )).then((function() {
                return A.Nav.Source ? (U.log("Loading Navigation...", "<g:>"),
                k.loadNavigation().then((function(e) {
                    U.log("".concat(A.Nav.Type, ": %O"), A.Nav.Source),
                    U.log("Loaded.", "</g>"),
                    W.dispatch("bibi:loaded-navigation", A.Nav.Source)
                }
                ))) : U.log("No Navigation.")
            }
            )).then((function() {
                if (W.dispatch("bibi:prepared", x.Status = x.Prepared = "Prepared"),
                !F.autostart && !k.Played)
                    return k.wait()
            }
            )).then((function() {
                return k.preprocessResources()
            }
            )).then((function() {
                U.log("Loading Items in Spreads...", "<g:>");
                var e = []
                  , t = {
                    TargetSpreadIndex: 0,
                    Destination: {
                        Edge: "head"
                    },
                    resetter: function() {
                        t.Reset = !0,
                        t.removeResetter()
                    },
                    addResetter: function() {
                        window.addEventListener("resize", t.resetter)
                    },
                    removeResetter: function() {
                        window.removeEventListener("resize", t.resetter)
                    }
                };
                if ("object" == I(_.StartOn)) {
                    var n = "object" == I(_.StartOn.Item) ? _.StartOn.Item : function() {
                        if ("number" == typeof _.StartOn.ItemIndex) {
                            var e = _.StartOn.ItemIndex;
                            return e < 0 ? _.StartOn = {
                                ItemIndex: 0
                            } : e >= _.Items.length && (_.StartOn = {
                                ItemIndex: _.Items.length - 1
                            }),
                            _.Items[_.StartOn.ItemIndex]
                        }
                        if ("number" == typeof _.StartOn.ItemIndexInSpine) {
                            var t = _.StartOn.ItemIndexInSpine;
                            t < 0 ? t = 0 : t >= A.Package.Spine.length && (t = A.Package.Spine.length - 1);
                            var n = A.Package.Spine[_.StartOn.ItemIndexInSpine];
                            return n.Spread || (_.StartOn = {
                                ItemIndex: 0
                            },
                            n = _.Items[0]),
                            n
                        }
                        if ("string" == typeof _.StartOn.P) {
                            var i = 1 * _.StartOn.P.split(".").shift() - 1;
                            return i < 0 ? (i = 0,
                            _.StartOn = {
                                P: String(i + 1)
                            }) : i >= _.Items.length && (i = _.Items.length - 1,
                            _.StartOn = {
                                P: String(i + 1)
                            }),
                            _.Items[i]
                        }
                        if ("number" == typeof _.StartOn.IIPP) {
                            var r = Math.floor(_.StartOn.IIPP);
                            return r < 0 ? (r = 0,
                            _.StartOn = {
                                IIPP: r
                            }) : r >= _.Items.length && (r = _.Items.length - 1,
                            _.StartOn = {
                                IIPP: r
                            }),
                            _.Items[r]
                        }
                        if ("string" == typeof _.StartOn.Edge)
                            switch (_.StartOn = "foot" != _.StartOn.Edge ? {
                                Edge: "head"
                            } : {
                                Edge: "foot"
                            },
                            _.StartOn.Edge) {
                            case "head":
                                return _.Items[0];
                            case "foot":
                                return _.Items[_.Items.length - 1]
                            }
                    }();
                    t.TargetSpreadIndex = n && n.Spread ? n.Spread.Index : 0,
                    t.Destination = _.StartOn
                }
                t.addResetter();
                var i = 0;
                return _.Spreads.forEach((function(n) {
                    return e.push(new Promise((function(e) {
                        return k.loadSpread(n, {
                            AllowPlaceholderItems: F["allow-placeholders"] && n.Index != t.TargetSpreadIndex
                        }).then((function() {
                            i += n.Items.length,
                            H.note("Loading... (".concat(i, "/").concat(_.Items.length, " Items Loaded.)")),
                            t.Reset ? e() : _.layOutSpreadAndItsItems(n).then(e)
                        }
                        ))
                    }
                    )))
                }
                )),
                Promise.all(e).then((function() {
                    return U.log("Loaded. (".concat(_.Items.length, " in ").concat(_.Spreads.length, ")"), "</g>"),
                    t
                }
                ))
            }
            ))
        }
        ,
        x.bindBook = function(e) {
            return e.Reset || (_.organizePages(),
            _.layOutStage()),
            _.layOutBook(e).then((function() {
                return e.removeResetter(),
                W.dispatch("bibi:laid-out-for-the-first-time", e),
                e
            }
            ))
        }
        ,
        x.openBook = function(e) {
            return new Promise((function(e) {
                x.busyHerself.resolve(),
                H.Veil.close(),
                k.Opened = !0,
                document.body.click(),
                H.note(""),
                U.log("Enjoy Readings!", "</b>"),
                W.dispatch("bibi:opened", x.Status = x.Opened = "Opened"),
                W.dispatch("bibi:scrolled"),
                e()
            }
            )).then((function() {
                var t = _.hatchPage(e.Destination) || _.Pages[0];
                H.History.List.length || (H.History.List = [{
                    UI: x,
                    Item: t.Item,
                    PageProgressInItem: t.IndexInItem / t.Item.Pages.length
                }],
                H.History.update()),
                F["allow-placeholders"] && W.add("bibi:scrolled", (function() {
                    return H.PageObserver.turnItems()
                }
                )),
                F["resume-from-last-position"] && W.add("bibi:changed-intersection", (function() {
                    try {
                        U.Biscuits && U.Biscuits.memorize("Book", {
                            Position: {
                                IIPP: H.PageObserver.getIIPP()
                            }
                        })
                    } catch (e) {}
                }
                )),
                W.add("bibi:commands:move-by", _.moveBy),
                W.add("bibi:commands:scroll-by", _.scrollBy),
                W.add("bibi:commands:focus-on", _.focusOn),
                W.add("bibi:commands:change-view", _.changeView),
                x.Dev && "localhost" != location.hostname ? x.createDevNote() : delete x.createDevNote
            }
            ))
        }
        ,
        x.createDevNote = function() {
            var e = x.IsDevMode = U.Body.appendChild(sML.create("div", {
                id: "bibi-is-dev-mode"
            }));
            x.createDevNote.logBorderLine(),
            x.createDevNote.appendParagraph("<strong>This Bibi seems to be a</strong> <strong>Development Version</strong>"),
            x.createDevNote.appendParagraph("<span>Please don't forget</span> <span>to create a production version</span> <span>before publishing on the Internet.</span>"),
            x.createDevNote.appendParagraph('<span class="non-visual">(To create a production version, run it on terminal: `</span><code>npm run build</code><span class="non-visual">`)</span>'),
            x.createDevNote.appendParagraph("<em>Close</em>", "NoLog").addEventListener("click", (function() {
                return e.className = "hide"
            }
            )),
            x.createDevNote.logBorderLine(),
            [W.pointerdown, W.pointerup, W.pointermove, W.pointerover, W.pointerout, "click"].forEach((function(t) {
                return e.addEventListener(t, (function(e) {
                    return e.preventDefault(),
                    e.stopPropagation(),
                    !1
                }
                ))
            }
            )),
            setTimeout((function() {
                return e.className = "show"
            }
            ), 0),
            delete x.createDevNote
        }
        ,
        x.createDevNote.logBorderLine = function(e, t) {
            U.log("========================", "<*/>")
        }
        ,
        x.createDevNote.appendParagraph = function(e, t) {
            var n = x.IsDevMode.appendChild(sML.create("p", {
                innerHTML: e
            }));
            return t || U.log(e.replace(/<[^<>]*>/g, ""), "<*/>"),
            n
        }
        ,
        x.createElement = function() {
            for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                n[i] = arguments[i];
            var r = n[0];
            if (x.Elements || (x.Elements = {}),
            window.customElements)
                x.Elements[r] || (x.Elements[r] = function(e) {
                    f(n, e);
                    var t = g(n);
                    function n() {
                        return p(this, n),
                        t.call(this)
                    }
                    return n
                }(m(HTMLElement)),
                window.customElements.define(r, x.Elements[r]));
            else if (document.registerElement)
                return x.Elements[r] || (x.Elements[r] = document.registerElement(r)),
                sML.edit(new (x.Elements[n.shift()]), n);
            return (e = sML).create.apply(e, n)
        }
        ;
        var A = {
            Path: "",
            PathDelimiter: " > ",
            DataElement: null,
            Container: {
                Source: {
                    Path: "META-INF/container.xml"
                }
            },
            Package: {
                Source: {},
                Metadata: {},
                Manifest: {},
                Spine: []
            },
            Nav: {},
            CoverImage: {},
            FileDigit: 0
        }
          , k = {
            Opened: !1,
            wait: function() {
                return k.Waiting = !0,
                U.Busy = !1,
                U.HTML.classList.remove("busy"),
                U.HTML.classList.add("waiting"),
                W.dispatch("bibi:waits"),
                U.log("(Waiting...)", "<i/>"),
                H.note(""),
                new Promise((function(e) {
                    return k.wait.resolve = e
                }
                )).then((function() {
                    return k.Waiting = !1,
                    U.Busy = !0,
                    U.HTML.classList.add("busy"),
                    U.HTML.classList.remove("waiting"),
                    H.note("Loading..."),
                    new Promise((function(e) {
                        return setTimeout(e, 99)
                    }
                    ))
                }
                ))
            },
            openNewWindow: function(e) {
                var t = window.open(e);
                return t || (location.href = e)
            },
            play: function() {
                if (F["start-in-new-window"])
                    return k.openNewWindow(location.href);
                k.Played = !0,
                _.resetStage(),
                k.wait.resolve(),
                W.dispatch("bibi:played")
            },
            initializeBook: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new Promise((function(t, n) {
                    var i = function(e) {
                        return n("Failed to open the book (".concat(e, ")"))
                    };
                    if (!e.Book && !e.BookData)
                        return i(x.ErrorMessages.DataInvalid);
                    var r = "string" == typeof e.Book ? "URI" : "string" == typeof e.BookData ? "Base64" : "object" == I(e.BookData) && e.BookData.size && e.BookData.type ? e.BookData.name ? "File" : "Blob" : "";
                    if (!r)
                        return i(x.ErrorMessages.DataInvalid);
                    if (A.Type = F.book ? F.zine ? "Zine" : "EPUB" : "",
                    "EPUB" != A.Type && (A.ZineData = {
                        Source: {
                            Path: "zine.yaml"
                        }
                    }),
                    "URI" == r) {
                        if (U.Local)
                            return n("Bibi can't open books via ".concat(N.book ? "data-bibi-book" : "URL", " on local mode"));
                        A.Path = e.Book;
                        var o = ("Zine" == A.Type ? A.ZineData : A.Container).Source
                          , a = []
                          , s = function(e) {
                            return {
                                Promised: ("folder" == e ? U.download(o).then((function() {
                                    return (A.PathDelimiter = "/") && ""
                                }
                                )) : U.RangeLoader ? U.extract(o).then((function() {
                                    return "on-the-fly"
                                }
                                )) : U.loadZippedBookData(A.Path).then((function() {
                                    return "at-once"
                                }
                                ))).then((function(n) {
                                    A.ExtractionPolicy = n,
                                    t("".concat(A.Type, " ").concat(e))
                                }
                                )).catch((function(t) {
                                    return a.push(t = /404/.test(String(t)) ? x.ErrorMessages.NotFound : String(t).replace(/^Error: /, "")),
                                    U.log("Failed as ".concat(/^[aiueo]/i.test(A.Type) ? "an" : "a", " ").concat(A.Type, " ").concat(e, ": ") + t),
                                    Promise.reject()
                                }
                                )),
                                or: function(e) {
                                    return this.Promised.catch(e)
                                },
                                or_reject: function(e) {
                                    return this.or((function() {
                                        return i(a.length < 2 || a[0] == a[1] ? a[0] : "as a file: ".concat(a[0], " / as a folder: ").concat(a[1]))
                                    }
                                    ))
                                }
                            }
                        };
                        U.isToBeExtractedIfNecessary(A.Path) ? s("file").or((function() {
                            return s("folder").or_reject()
                        }
                        )) : s("folder").or_reject()
                    } else {
                        var c, l = e.BookData, u = {
                            EPUB: /^application\/epub\+zip$/,
                            Zine: /^application\/(zip|x-zip(-compressed)?)$/
                        };
                        if ("File" == r) {
                            if (!F["accept-local-file"])
                                return n("Local file is set to unacceptable");
                            if (!l.name)
                                return n("File without a name is unacceptable");
                            if (!/\.[\w\d]+$/.test(l.name))
                                return n("Local file without extension is set to unacceptable");
                            if (!U.isToBeExtractedIfNecessary(l.name))
                                return n("File with this extension is set to unacceptable");
                            if (l.type && (/\.epub$/i.test(l.name) ? !u.EPUB.test(l.type) : !/\.zip$/i.test(l.name) || !u.Zine.test(l.type)))
                                return n("File of this type is unacceptable");
                            c = "file",
                            A.Path = "[Local File] " + l.name
                        } else {
                            if ("Base64" == r) {
                                if (!F["accept-base64-encoded-data"])
                                    return n("Base64 encoded data is set to unacceptable");
                                try {
                                    for (var d = atob(l.replace(/^.*,/, "")), p = new Uint8Array(d.length), f = d.length, g = 0; g < f; g++)
                                        p[g] = d.charCodeAt(g);
                                    if (!(l = new Blob([p.buffer],{
                                        type: e.BookDataMIMEType
                                    })) || !l.size || !l.type)
                                        throw ""
                                } catch (e) {
                                    return n(x.ErrorMessages.DataInvalid)
                                }
                                A.Path = "[Base64 Encoded Data]"
                            } else {
                                if (!F["accept-blob-converted-data"])
                                    return n("Blob converted data is set to unacceptable");
                                A.Path = "[Blob Converted Data]"
                            }
                            if (!u.EPUB.test(l.type) && !u.Zine.test(l.type))
                                return n("File of this type is unacceptable");
                            c = "data"
                        }
                        U.loadZippedBookData(l).then((function() {
                            switch (A.Type) {
                            case "EPUB":
                            case "Zine":
                                return A.ExtractionPolicy = "at-once",
                                t("".concat(A.Type, " ").concat(c));
                            default:
                                return i(x.ErrorMessages.DataInvalid)
                            }
                        }
                        )).catch(i)
                    }
                }
                )).then((function(e) {
                    return delete F["book-data"],
                    delete F["book-data-mimetype"],
                    ("Zine" == A.Type ? X.Zine.loadZineData() : k.loadContainer().then(k.loadPackage)).then((function() {
                        return W.dispatch("bibi:initialized-book")
                    }
                    )).then((function() {
                        return e
                    }
                    ))
                }
                ))
            },
            loadContainer: function() {
                return U.openDocument(A.Container.Source).then(k.loadContainer.process)
            }
        };
        k.loadContainer.process = function(e) {
          console.log(e.getElementsByTagName("rootfile")[0].getAttribute("full-path"))
            return A.Package.Source.Path = e.getElementsByTagName("rootfile")[0].getAttribute("full-path")
        }
        ,
        k.loadPackage = function() {
            return U.openDocument(A.Package.Source).then(k.loadPackage.process)
        }
        ,
        k.loadPackage.process = function(e) {
            var t = e.getElementsByTagName("package")[0]
              , n = e.getElementsByTagName("metadata")[0]
              , i = A.Package.Metadata
              , r = e.getElementsByTagName("manifest")[0]
              , o = A.Package.Manifest
              , a = e.getElementsByTagName("spine")[0]
              , s = A.Package.Spine
              , c = {}
              , l = t.getAttribute("xmlns:dc") || n.getAttribute("xmlns:dc")
              , u = t.getAttribute("unique-identifier")
              , d = u ? e.getElementById(u) : null
              , p = d ? d.textContent : "";
            i["unique-identifier"] = p ? p.trim() : "",
            ["identifier", "language", "title", "creator", "publisher"].forEach((function(t) {
                return sML.forEach(e.getElementsByTagNameNS(l, t))((function(e) {
                    return (i[t] ? i[t] : i[t] = []).push(e.textContent.trim())
                }
                ))
            }
            )),
            sML.forEach(n.getElementsByTagName("meta"))((function(e) {
                if (!e.getAttribute("refines")) {
                    var t = e.getAttribute("property");
                    if (t)
                        /^dcterms:/.test(t) ? (i[t] || (i[t] = []),
                        i[t].push(e.textContent.trim())) : i[t] = e.textContent.trim();
                    else {
                        var n = e.getAttribute("name");
                        n && (i[n] = e.getAttribute("content").trim())
                    }
                }
            }
            )),
            i.identifier || (i.identifier = i["dcterms:identifier"] || []),
            i.language || (i.language = i["dcterms:language"] || ["en"]),
            i.title || (i.title = i["dcterms:title"] || i.identifier),
            i["rendition:layout"] || (i["rendition:layout"] = "reflowable"),
            i["omf:version"] && (i["rendition:layout"] = "pre-paginated"),
            i["rendition:orientation"] && "auto" != i["rendition:orientation"] || (i["rendition:orientation"] = "portrait"),
            i["rendition:spread"] && "auto" != i["rendition:spread"] || (i["rendition:spread"] = "landscape"),
            i["original-resolution"] && (i["original-resolution"] = U.getViewportByOriginalResolution(i["original-resolution"])),
            i["rendition:viewport"] && (i["rendition:viewport"] = U.getViewportByMetaContent(i["rendition:viewport"])),
            i["fixed-layout-jp:viewport"] && (i["fixed-layout-jp:viewport"] = U.getViewportByMetaContent(i["fixed-layout-jp:viewport"])),
            i["omf:viewport"] && (i["omf:viewport"] = U.getViewportByMetaContent(i["omf:viewport"])),
            A.ICBViewport = i["original-resolution"] || i["rendition:viewport"] || i["fixed-layout-jp:viewport"] || i["omf:viewport"] || null;
            var f = A.Package.Source.Path.replace(/\/?[^\/]+$/, "");
            if (sML.forEach(r.getElementsByTagName("item"))((function(e) {
                var t = {
                    id: e.getAttribute("id"),
                    href: e.getAttribute("href"),
                    "media-type": e.getAttribute("media-type")
                };
                if (!t.id || !t.href || !t["media-type"] && "EPUB" == A.Type)
                    return !1;
                t.Path = U.getPath(f, t.href),
                o[t.Path] && (t = Object.assign(o[t.Path], t)),
                t.Content || (t.Content = ""),
                t.Of = [];
                var n = e.getAttribute("properties");
                n && ((n = n.trim().replace(/\s+/g, " ").split(" ")).includes("cover-image") ? A.CoverImage.Source = t : n.includes("nav") && (A.Nav.Source = t,
                A.Nav.Type = "Navigation Document"));
                var i = e.getAttribute("fallback");
                i && (t.fallback = i),
                o[t.Path] = t,
                c[t.id] = t.Path
            }
            )),
            [A.Container, A.Package].forEach((function(e) {
                e && e.Source && (e.Source.Content = "")
            }
            )),
            !A.Nav.Source) {
                var g = o[c[a.getAttribute("toc")]];
                g && (A.Nav.Source = g,
                A.Nav.Type = "TOC-NCX")
            }
            A.Nav.Source && A.Nav.Source.Of.push(A.Nav),
            A.CoverImage.Source && A.CoverImage.Source.Of.push(A.CoverImage),
            A.PPD = a.getAttribute("page-progression-direction"),
            A.PPD && /^(ltr|rtl)$/.test(A.PPD) || (A.PPD = F["default-page-progression-direction"]);
            var h, b, m = /^((rendition:)?(layout|orientation|spread|page-spread))-(.+)$/;
            "rtl" == A.PPD ? (h = "right",
            b = "left") : (h = "left",
            b = "right");
            var v = document.createDocumentFragment();
            sML.forEach(a.getElementsByTagName("itemref"))((function(e) {
                var t = e.getAttribute("idref");
                if (!t)
                    return !1;
                var n = o[c[t]];
                if (!n)
                    return !1;
                var r = sML.create("iframe", {
                    className: "item",
                    scrolling: "no",
                    allowtransparency: "true"
                });
                if (r.idref = t,
                r.Source = n,
                r.AnchorPath = n.Path,
                r.FallbackChain = [],
                F["prioritise-fallbacks"])
                    for (; r.Source.fallback; ) {
                        var a = o[c[r.Source.fallback]];
                        a ? r.FallbackChain.push(r.Source = a) : delete r.Source.fallback
                    }
                r.Source.Of.push(r);
                var l = e.getAttribute("properties");
                if (l && (l = l.trim().replace(/\s+/g, " ").split(" ")).forEach((function(t) {
                    m.test(t) && (e[t.replace(m, "$1")] = t.replace(m, "$4"))
                }
                )),
                r["rendition:layout"] = e["rendition:layout"] || i["rendition:layout"],
                r["rendition:orientation"] = e["rendition:orientation"] || i["rendition:orientation"],
                r["rendition:spread"] = e["rendition:spread"] || i["rendition:spread"],
                r["rendition:page-spread"] = e["rendition:page-spread"] || e["page-spread"] || void 0,
                r.IndexInSpine = s.push(r) - 1,
                "no" == e.getAttribute("linear"))
                    r.linear = "no",
                    r.IndexInNonLinearItems = _.NonLinearItems.push(r) - 1;
                else {
                    r.linear = "yes",
                    r.Index = _.Items.push(r) - 1;
                    var u = null;
                    if ("pre-paginated" == r["rendition:layout"] && r["rendition:page-spread"] == b && r.Index > 0) {
                        var d = _.Items[r.Index - 1];
                        "pre-paginated" == r["rendition:layout"] && d["rendition:page-spread"] == h && (d.SpreadPair = r,
                        r.SpreadPair = d,
                        (u = r.Spread = d.Spread).Box.classList.remove("single-item-spread-before", "single-item-spread-" + h),
                        u.Box.classList.add(r["rendition:layout"]))
                    }
                    if (!u) {
                        if ((u = r.Spread = sML.create("div", {
                            className: "spread",
                            Items: [],
                            Pages: [],
                            Index: _.Spreads.length
                        })).Box = sML.create("div", {
                            className: "spread-box " + r["rendition:layout"],
                            Inside: u,
                            Spread: u
                        }),
                        r["rendition:page-spread"])
                            switch (u.Box.classList.add("single-item-spread-" + r["rendition:page-spread"]),
                            r["rendition:page-spread"]) {
                            case h:
                                u.Box.classList.add("single-item-spread-before");
                                break;
                            case b:
                                u.Box.classList.add("single-item-spread-after")
                            }
                        _.Spreads.push(v.appendChild(u.Box).appendChild(u))
                    }
                    if (r.IndexInSpread = u.Items.push(r) - 1,
                    r.Box = u.appendChild(sML.create("div", {
                        className: "item-box " + r["rendition:layout"],
                        Inside: r,
                        Item: r
                    })),
                    r.Pages = [],
                    "pre-paginated" == r["rendition:layout"]) {
                        r.PrePaginated = !0,
                        0 == r.IndexInSpread && (u.PrePaginated = !0);
                        var p = sML.create("span", {
                            className: "page",
                            Spread: u,
                            Item: r,
                            IndexInItem: 0
                        });
                        r.Pages.push(r.Box.appendChild(p)),
                        H.PageObserver.observePageIntersection(p)
                    } else
                        r.PrePaginated = u.PrePaginated = !1
                }
            }
            )),
            _.createSpine(v),
            A.FileDigit = String(s.length).length,
            A.ID = i["unique-identifier"] || i.identifier[0] || "",
            A.Language = i.language[0].split("-")[0],
            A.Title = i.title.join(", "),
            A.Creator = i.creator ? i.creator.join(", ") : "",
            A.Publisher = i.publisher ? i.publisher.join(", ") : "";
            var S = [A.Title];
            A.Creator && S.push(A.Creator),
            A.Publisher && S.push(A.Publisher),
            A.FullTitle = S.join(" - ").replace(/&amp;?/gi, "&").replace(/&lt;?/gi, "<").replace(/&gt;?/gi, ">"),
            U.Title.innerHTML = "",
            U.Title.appendChild(document.createTextNode(A.FullTitle + " | " + (F["website-name-in-title"] ? F["website-name-in-title"] : "Published with Bibi")));
            try {
                U.Info.querySelector("h1").innerHTML = document.title
            } catch (e) {}
            A.WritingMode = /^(zho?|chi|kor?|ja|jpn)$/.test(A.Language) ? "rtl" == A.PPD ? "tb-rl" : "lr-tb" : /^(aze?|ara?|ui?g|urd?|kk|kaz|ka?s|ky|kir|kur?|sn?d|ta?t|pu?s|bal|pan?|fas?|per|ber|msa?|may|yid?|heb?|arc|syr|di?v)$/.test(A.Language) ? "rl-tb" : /^(mo?n)$/.test(A.Language) ? "tb-lr" : "lr-tb",
            A.AllowPlaceholderItems = "at-once" != A.ExtractionPolicy && "pre-paginated" == i["rendition:layout"],
            W.dispatch("bibi:processed-package")
        }
        ,
        k.createCover = function() {
            var e, t = H.Veil.Cover, n = H.Panel.BookInfo.Cover;
            return t.Info.innerHTML = n.Info.innerHTML = (e = [],
            A.Title && e.push("<strong>".concat(k.createCover.optimizeString(A.Title), "</strong>")),
            A.Creator && e.push("<em>".concat(k.createCover.optimizeString(A.Creator), "</em>")),
            A.Publisher && e.push("<span>".concat(k.createCover.optimizeString(A.Publisher), "</span>")),
            e.join(" ")),
            Promise.resolve(new Promise((function(e, t) {
                if (!A.CoverImage.Source || !A.CoverImage.Source.Path)
                    return t();
                var n = !1
                  , i = setTimeout((function() {
                    n = !0,
                    t()
                }
                ), 5e3);
                U.file(A.CoverImage.Source, {
                    URI: !0
                }).then((function(t) {
                    n || e(t.URI)
                }
                )).catch((function() {
                    n || t()
                }
                )).then((function() {
                    return clearTimeout(i)
                }
                ))
            }
            )).then((function(e) {
                t.className = n.className = "with-cover-image",
                sML.style(t, {
                    "background-image": "url(" + e + ")"
                }),
                n.insertBefore(sML.create("img", {
                    src: e
                }), n.Info)
            }
            )).catch((function() {
                t.className = n.className = "without-cover-image",
                t.insertBefore(H.getBookIcon(), t.Info),
                n.insertBefore(H.getBookIcon(), n.Info)
            }
            )))
        }
        ,
        k.createCover.optimizeString = function(e) {
            return "<span>" + e.replace(/([ 　・／]+)/g, "</span><span>$1") + "</span>"
        }
        ,
        k.loadNavigation = function() {
            return U.openDocument(A.Nav.Source).then((function(e) {
                var t = H.Panel.BookInfo.Navigation = H.Panel.BookInfo.insertBefore(sML.create("div", {
                    id: "bibi-panel-bookinfo-navigation"
                }), H.Panel.BookInfo.firstElementChild);
                t.innerHTML = "";
                var n = document.createDocumentFragment();
                if ("Navigation Document" == A.Nav.Type)
                    sML.forEach(e.querySelectorAll("nav"))((function(e) {
                        switch (e.getAttribute("epub:type")) {
                        case "toc":
                            e.classList.add("bibi-nav-toc");
                            break;
                        case "landmarks":
                            e.classList.add("bibi-nav-landmarks");
                            break;
                        case "page-list":
                            e.classList.add("bibi-nav-page-list")
                        }
                        sML.forEach(e.getElementsByTagName("*"))((function(e) {
                            return e.removeAttribute("style")
                        }
                        )),
                        n.appendChild(e)
                    }
                    ));
                else {
                    var i = function e(t) {
                        for (var n = t.childNodes, i = void 0, r = n.length, o = 0; o < r; o++)
                            if (1 == n[o].nodeType && /^navPoint$/i.test(n[o].tagName)) {
                                var a = n[o]
                                  , s = (a.getElementsByTagName("navLabel")[0],
                                a.getElementsByTagName("content")[0])
                                  , c = a.getElementsByTagName("text")[0];
                                i || (i = document.createElement("ul"));
                                var l = sML.create("li", {
                                    id: a.getAttribute("id")
                                });
                                l.setAttribute("playorder", a.getAttribute("playorder"));
                                var u = sML.create("a", {
                                    href: s.getAttribute("src"),
                                    innerHTML: c.innerHTML.trim()
                                });
                                i.appendChild(l).appendChild(u);
                                var d = e(a);
                                d && l.appendChild(d)
                            }
                        return i
                    }(e.getElementsByTagName("navMap")[0]);
                    i && n.appendChild(document.createElement("nav")).appendChild(i)
                }
                return t.appendChild(n),
                k.coordinateLinkages(A.Nav.Source.Path, t, "InNav"),
                1 == A.Nav.Source.Of.length && (A.Nav.Source.Content = ""),
                t
            }
            ))
        }
        ,
        k.coordinateLinkages = function(e, t, n) {
            var i = t.getElementsByTagName("a");
            if (i)
                for (var r = function(t, r) {
                    var o = i[r];
                    n && (o.NavANumber = r + 1,
                    o.addEventListener(W.pointerdown, (function(e) {
                        return e.stopPropagation()
                    }
                    )),
                    o.addEventListener(W.pointerup, (function(e) {
                        return e.stopPropagation()
                    }
                    )));
                    var a = o.getAttribute("href")
                      , s = "href";
                    if (!a) {
                        if (!(a = o.getAttribute("xlink:href")))
                            return n && (o.addEventListener("click", (function(e) {
                                return e.preventDefault(),
                                e.stopPropagation(),
                                !1
                            }
                            )),
                            o.classList.add("bibi-bookinfo-inactive-link")),
                            "continue";
                        s = "xlink:href"
                    }
                    if (/^[a-zA-Z]+:/.test(a)) {
                        if (a.split("#")[0] != location.href.split("#")[0])
                            return o.addEventListener("click", (function(e) {
                                return e.preventDefault(),
                                e.stopPropagation(),
                                window.open(o.href),
                                !1
                            }
                            )),
                            "continue";
                        var c = a.split("#")[1];
                        a = c ? "#" + c : _.Items[0].AnchorPath
                    }
                    var l = U.getPath(e.replace(/\/?([^\/]+)$/, ""), (/^\.*\/+/.test(a) ? "" : "./") + (/^#/.test(a) ? e.replace(/^.+?([^\/]+)$/, "$1") : "") + a)
                      , u = l.split("#")
                      , d = u[0] ? u[0] : e
                      , p = u[1] ? u[1] : "";
                    sML.forEach(_.Items)((function(e) {
                        if (d == e.AnchorPath)
                            return o.setAttribute("data-bibi-original-href", a),
                            o.setAttribute(s, A.Path + "/" + l),
                            o.InNav = n,
                            o.Destination = {
                                ItemIndex: e.Index
                            },
                            "pre-paginated" == e["rendition:layout"] ? o.Destination.PageIndexInItem = 0 : p && (o.Destination.ElementSelector = "#" + p),
                            k.coordinateLinkages.setJump(o),
                            "break"
                    }
                    )),
                    p && /^epubcfi\(.+?\)$/.test(p) && (o.setAttribute("data-bibi-original-href", a),
                    o.setAttribute(s, A.Path + "/#" + p),
                    X.EPUBCFI ? (o.InNav = n,
                    o.Destination = X.EPUBCFI.getDestination(p),
                    k.coordinateLinkages.setJump(o)) : o.addEventListener("click", (function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        H.note("ja" == U.Language ? "<small>このリンクの利用には EPUBCFI エクステンションが必要です</small>" : '"EPUBCFI" extension is required to use this link.'),
                        !1
                    }
                    ))),
                    n && _.StartOn && _.StartOn.Nav == r + 1 && o.Destination && (_.StartOn = o.Destination)
                }, o = i.length, a = 0; a < o; a++)
                    r(0, a)
        }
        ,
        k.coordinateLinkages.setJump = function(e) {
            return e.addEventListener("click", (function(t) {
                return t.preventDefault(),
                t.stopPropagation(),
                e.Destination && new Promise((function(t) {
                    return e.InNav ? H.Panel.toggle().then(t) : t()
                }
                )).then((function() {
                    return k.Opened ? (H.History.add(),
                    _.focusOn({
                        Destination: e.Destination,
                        Duration: 0
                    }).then((function(e) {
                        return H.History.add({
                            UI: A,
                            SumUp: !1,
                            Destination: e
                        })
                    }
                    ))) : !!k.Waiting && (F["start-in-new-window"] ? k.openNewWindow(location.href + (location.hash ? "&" : "#") + "jo(nav=" + e.NavANumber + ")") : (_.StartOn = e.Destination,
                    void k.play()))
                }
                )),
                !1
            }
            ))
        }
        ,
        k.preprocessResources = function() {
            W.dispatch("bibi:is-going-to:preprocess-resources");
            var e = []
              , t = []
              , n = function(n, i) {
                return e.push(U.file(n, {
                    Preprocess: !0,
                    URI: i
                }).then((function() {
                    return t.push(n)
                }
                )))
            };
            if (A.ExtractionPolicy)
                for (var i in A.Package.Manifest) {
                    var r = A.Package.Manifest[i];
                    /\/(css|javascript)$/.test(r["media-type"]) && (e.length || U.log("Preprocessing Resources...", "<g:>"),
                    n(r, !0))
                }
            return Promise.all(e).then((function() {
                t.length && (U.log("Preprocessed: %O", t),
                U.log("Preprocessed. (".concat(t.length, " Resource").concat(t.length > 1 ? "s" : "", ")"), "</g>")),
                W.dispatch("bibi:preprocessed-resources")
            }
            ))
        }
        ,
        k.loadSpread = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise((function(n, i) {
                e.AllowPlaceholderItems = F["allow-placeholders"] && t.AllowPlaceholderItems;
                var r = 0
                  , o = 0;
                e.Items.forEach((function(i) {
                    k.loadItem(i, {
                        IsPlaceholder: t.AllowPlaceholderItems
                    }).then((function() {
                        return r++
                    }
                    )).catch((function() {
                        return o++
                    }
                    )).then((function() {
                        r + o == e.Items.length && n(e)
                    }
                    ))
                }
                ))
            }
            ))
        }
        ,
        k.loadItem = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = F["allow-placeholders"] && "pre-paginated" == e["rendition:layout"] && t.IsPlaceholder;
            if (n === e.IsPlaceholder)
                return e.Loading ? e.Loading : Promise.resolve(e);
            e.IsPlaceholder = n;
            var i = e.Box;
            return i.classList.remove("loaded"),
            i.classList.toggle("placeholder", e.IsPlaceholder),
            e.Loading = (e.IsPlaceholder ? Promise.reject() : e.ContentURL ? Promise.resolve() : /\.(html?|xht(ml)?|xml)$/i.test(e.Source.Path) ? U.file(e.Source, {
                Preprocess: A.ExtractionPolicy || sML.UA.Gecko,
                initialize: function() {
                    F["allow-scripts-in-content"] || (e.Source.Content = e.Source.Content.replace(/<script(\s+[\w\-]+(\s*=\s*('[^'']*'|"[^""]*"))?)*\s*\/>/gi, ""),
                    U.sanitizeItemSource(e.Source, {
                        As: "HTML"
                    }))
                }
            }).then((function(e) {
                return e.Content
            }
            )) : /\.(gif|jpe?g|png)$/i.test(e.Source.Path) ? U.file(e.Source, {
                URI: !0
            }).then((function(t) {
                return ["pre-paginated" == e["rendition:layout"] && A.ICBViewport ? '<meta name="viewport" content="width='.concat(A.ICBViewport.Width, ", height=").concat(A.ICBViewport.Height, '" />') : "", '<img class="bibi-spine-item-image" alt="" src="'.concat(e.Source.URI, '" />')]
            }
            )) : /\.(svg)$/i.test(e.Source.Path) ? U.file(e.Source, {
                Preprocess: !!A.ExtractionPolicy,
                initialize: function() {
                    var t = /<\?xml-stylesheet\s*(.+?)\s*\?>/g
                      , n = e.Source.Content.match(t);
                    F["allow-scripts-in-content"] || U.sanitizeItemSource(e.Source, {
                        As: "SVG"
                    }),
                    e.Source.Content = (n ? n.map((function(e) {
                        return e.replace(t, '<link rel="stylesheet" $1 />')
                    }
                    )).join("") : "") + "<bibi:boundary/>" + e.Source.Content
                }
            }).then((function(e) {
                return e.Content.split("<bibi:boundary/>")
            }
            )) : e.Skipped = Promise.resolve([])).then((function(t) {
                return new Promise((function(n) {
                    if (!e.ContentURL) {
                        var r = "string" == typeof t ? t : ["<!DOCTYPE html>", "<html>", "<head>", '<meta charset="utf-8" />', "<title>".concat(A.FullTitle, " - #").concat(e.Index + 1, "/").concat(_.Items.length, "</title>"), (t[0] ? t[0] + "\n" : "") + "</head>", "<body>", (t[1] ? t[1] + "\n" : "") + "</body>", "</html>"].join("\n");
                        if (r = r.replace(/(<head(\s[^>]+)?>)/i, '$1\n<link rel="stylesheet" id="'.concat("bibi-default-style", '" href="').concat(x.BookStyleURL, '" />') + (A.ExtractionPolicy || e.Source.Preprocessed ? "" : '\n<base href="'.concat(U.fullPath(e.Source.Path), '" />'))),
                        U.Local || sML.UA.LINE || sML.UA.Trident || sML.UA.EdgeHTML)
                            return r = r.replace(/^<\?.+?\?>/, "").replace("</head>", "<script id=\"bibi-onload\">window.addEventListener('load', function() { parent.R.Items[".concat(e.Index, "].onLoaded(); return false; });<\/script>\n</head>")),
                            e.onLoaded = function() {
                                n(),
                                e.contentDocument.head.removeChild(e.contentDocument.getElementById("bibi-onload")),
                                delete e.onLoaded
                            }
                            ,
                            e.src = "",
                            i.insertBefore(e, i.firstChild),
                            e.contentDocument.open(),
                            e.contentDocument.write(r),
                            void e.contentDocument.close();
                        e.ContentURL = U.createBlobURL("Text", r, F["allow-scripts-in-content"] && /\.(xht(ml)?|xml)$/i.test(e.Source.Path) ? "application/xhtml+xml" : "text/html"),
                        e.Source.Content = ""
                    }
                    e.onload = n,
                    e.src = e.ContentURL,
                    i.insertBefore(e, i.firstChild)
                }
                ))
            }
            )).then((function() {
                return k.postprocessItem(e)
            }
            )).then((function() {
                i.classList.add("loaded"),
                W.dispatch("bibi:loaded-item", e),
                e.Loaded = !0,
                e.Turned = "Up"
            }
            )).catch((function() {
                e.parentElement && e.parentElement.removeChild(e),
                e.onload = e.onLoaded = void 0,
                e.src = "",
                e.HTML = e.Head = e.Body = e.Pages[0],
                e.Loaded = !1,
                e.Turned = "Down"
            }
            )).then((function() {
                return delete e.Loading,
                Promise.resolve(e)
            }
            ))
        }
        ,
        k.postprocessItem = function(e) {
            var t;
            e.HTML = e.contentDocument.getElementsByTagName("html")[0],
            (t = e.HTML.classList).add.apply(t, T(sML.Environments)),
            e.Head = e.contentDocument.getElementsByTagName("head")[0],
            e.Body = e.contentDocument.getElementsByTagName("body")[0],
            e.HTML.Item = e.Head.Item = e.Body.Item = e;
            var n = e.HTML.getAttribute("xml:lang")
              , i = e.HTML.getAttribute("lang");
            n || i ? n ? i || e.HTML.setAttribute("lang", n) : e.HTML.setAttribute("xml:lang", i) : (e.HTML.setAttribute("xml:lang", A.Language),
            e.HTML.setAttribute("lang", A.Language)),
            sML.forEach(e.Body.getElementsByTagName("link"))((function(t) {
                return e.Head.appendChild(t)
            }
            )),
            sML.appendCSSRule(e.contentDocument, "html", "-webkit-text-size-adjust: 100%;"),
            sML.UA.Trident && sML.forEach(e.Body.getElementsByTagName("svg"))((function(e) {
                var t = e.getElementsByTagName("image");
                if (1 == t.length) {
                    var n = t[0];
                    n.getAttribute("width") && n.getAttribute("height") && (e.setAttribute("width", n.getAttribute("width")),
                    e.setAttribute("height", n.getAttribute("height")))
                }
            }
            )),
            k.coordinateLinkages(e.Source.Path, e.Body);
            var r = e.contentDocument.querySelectorAll("body>*:not(script):not(style)");
            if (r && 1 == r.length) {
                var o = e.contentDocument.querySelector("body>*:not(script):not(style)");
                /^svg$/i.test(o.tagName) ? e.Outsourcing = e.OnlySingleSVG = !0 : /^img$/i.test(o.tagName) ? e.Outsourcing = e.OnlySingleIMG = !0 : /^iframe$/i.test(o.tagName) ? e.Outsourcing = !0 : U.getElementInnerText(e.Body) || (e.Outsourcing = !0)
            }
            return ("pre-paginated" == e["rendition:layout"] ? Promise.resolve() : k.patchItemStyles(e)).then((function() {
                return W.dispatch("bibi:postprocessed-item", e),
                e
            }
            ))
        }
        ,
        k.patchItemStyles = function(e) {
            return new Promise((function(t) {
                e.StyleSheets = [],
                sML.forEach(e.HTML.querySelectorAll("link, style"))((function(t) {
                    if (/^link$/i.test(t.tagName)) {
                        if (!t.href)
                            return;
                        if (!/^(alternate )?stylesheet$/.test(t.rel))
                            return;
                        if ((sML.UA.Safari || sML.OS.iOS) && "alternate stylesheet" == t.rel)
                            return
                    }
                    e.StyleSheets.push(t)
                }
                ));
                var n = function() {
                    return !(e.contentDocument.styleSheets.length < e.StyleSheets.length) && (clearInterval(e.CSSLoadingTimerID),
                    delete e.CSSLoadingTimerID,
                    t(),
                    !0)
                };
                n() || (e.CSSLoadingTimerID = setInterval(n, 33))
            }
            )).then((function() {
                if (!e.Source.Preprocessed) {
                    if (A.Package.Metadata["ebpaj:guide-version"]) {
                        var t = A.Package.Metadata["ebpaj:guide-version"].split(".");
                        1 * t[0] == 1 && 1 * t[1] == 1 && 1 * t[2] <= 3 && (e.Body.style.textUnderlinePosition = "under left")
                    }
                    if (sML.UA.Trident) {
                        var n = /^(zho?|chi|kor?|ja|jpn)$/.test(A.Language);
                        U.editCSSRules(e.contentDocument, (function(e) {
                            /(-(epub|webkit)-)?column-count: 1; /.test(e.cssText) && (e.style.columnCount = e.style.msColumnCount = "auto"),
                            /(-(epub|webkit)-)?writing-mode: vertical-rl; /.test(e.cssText) && (e.style.writingMode = "tb-rl"),
                            /(-(epub|webkit)-)?writing-mode: vertical-lr; /.test(e.cssText) && (e.style.writingMode = "tb-lr"),
                            /(-(epub|webkit)-)?writing-mode: horizontal-tb; /.test(e.cssText) && (e.style.writingMode = "lr-tb"),
                            /(-(epub|webkit)-)?(text-combine-upright|text-combine-horizontal): all; /.test(e.cssText) && (e.style.msTextCombineHorizontal = "all"),
                            n && / text-align: justify; /.test(e.cssText) && (e.style.textJustify = "inter-ideograph")
                        }
                        ))
                    } else
                        U.editCSSRules(e.contentDocument, (function(e) {
                            /(-(epub|webkit)-)?column-count: 1; /.test(e.cssText) && (e.style.columnCount = e.style.webkitColumnCount = "auto")
                        }
                        ))
                }
                var i = getComputedStyle(e.HTML)
                  , r = getComputedStyle(e.Body);
                i[U.WritingModeProperty] != r[U.WritingModeProperty] && (e.HTML.style.writingMode = r[U.WritingModeProperty]),
                e.WritingMode = U.getWritingMode(e.HTML),
                /-rl$/.test(e.WritingMode) ? e.HTML.classList.add("bibi-vertical-text") : /-lr$/.test(e.WritingMode) && e.HTML.classList.add("bibi-horizontal-text"),
                [[e.Box, i, e.HTML], [e, r, e.Body]].forEach((function(e) {
                    ["backgroundColor", "backgroundImage", "backgroundRepeat", "backgroundPosition", "backgroundSize"].forEach((function(t) {
                        return e[0].style[t] = e[1][t]
                    }
                    )),
                    e[2].style.background = "transparent"
                }
                )),
                sML.forEach(e.Body.querySelectorAll("svg, img"))((function(e) {
                    e.BibiDefaultStyle = {
                        width: e.style.width ? e.style.width : "",
                        height: e.style.height ? e.style.height : "",
                        maxWidth: e.style.maxWidth ? e.style.maxWidth : "",
                        maxHeight: e.style.maxHeight ? e.style.maxHeight : ""
                    }
                }
                ))
            }
            ))
        }
        ;
        var _ = {
            Spreads: [],
            Items: [],
            Pages: [],
            NonLinearItems: [],
            IntersectingPages: [],
            Current: {},
            createSpine: function(e) {
                _.Main = U.Body.insertBefore(sML.create("main", {
                    id: "bibi-main"
                }), U.Body.firstElementChild),
                _.Main.Book = _.Main.appendChild(sML.create("div", {
                    id: "bibi-main-book"
                })),
                _.Main.Book.appendChild(e)
            },
            resetBibiHeight: function() {
                var e = window.innerHeight;
                return U.TouchOS && (U.HTML.style.height = U.Body.style.height = e + "px"),
                e
            },
            resetStage: function() {
                var e, t = _.resetBibiHeight();
                _.Stage = {},
                _.Columned = !1,
                _.Main.style.padding = _.Main.style.width = _.Main.style.height = "",
                _.Main.Book.style.padding = _.Main.Book.style.width = _.Main.Book.style.height = "";
                var n = (F["use-slider"] && "paged" == F.RVM && U.Scrollbars[z.A_SIZE_B] ? U.Scrollbars[z.A_SIZE_B] : 0) + 2 * F["spread-margin"];
                sML.style(_.Main.Book, (d(e = {}, z.A_SIZE_b, n > 0 ? "calc(100% - " + n + "px)" : ""),
                d(e, z.A_SIZE_l, ""),
                e)),
                _.Stage.Width = U.Body.clientWidth,
                _.Stage.Height = t,
                _.Stage[z.A_SIZE_B] -= (F["use-slider"] || "paged" != F.RVM ? U.Scrollbars[z.A_SIZE_B] : 0) + 2 * F["spread-margin"],
                window.scrollTo(0, 0),
                F["use-full-height"] || (_.Stage.Height -= H.Menu.Height),
                F["spread-margin"] > 0 && (_.Main.Book.style["padding" + z.L_BASE_S] = _.Main.Book.style["padding" + z.L_BASE_E] = F["spread-margin"] + "px")
            },
            layOutSpreadAndItsItems: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (1 == e.Items.length ? _.layOutItem(e.Items[0]) : t.Reverse ? _.layOutItem(e.Items[1]).then((function() {
                    return _.layOutItem(e.Items[0])
                }
                )) : _.layOutItem(e.Items[0]).then((function() {
                    return _.layOutItem(e.Items[1])
                }
                ))).then((function() {
                    return _.layOutSpread(e, t)
                }
                ))
            },
            layOutSpread: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new Promise((function(n) {
                    t.Makeover && (e.PreviousSpreadBoxLength = e.Box["offset" + z.L_SIZE_L],
                    e.OldPages = e.Pages.concat()),
                    e.Pages = [],
                    e.Items.forEach((function(t) {
                        return t.Pages.forEach((function(t) {
                            return t.IndexInSpread = e.Pages.push(t) - 1
                        }
                        ))
                    }
                    ));
                    var i = {
                        Width: 0,
                        Height: 0
                    }
                      , r = e.Box;
                    if (1 == e.Items.length) {
                        var o = e.Items[0];
                        e.Spreaded = !!o.Spreaded,
                        i.Width = e.Spreaded && "pre-paginated" == o["rendition:layout"] && o["rendition:page-spread"] ? A.ICBViewport ? o.Box.offsetHeight * A.ICBViewport.Width * 2 / A.ICBViewport.Height : _.Stage.Width : o.Box.offsetWidth,
                        i.Height = o.Box.offsetHeight
                    } else {
                        var a = e.Items[0]
                          , s = e.Items[1];
                        e.Spreaded = !(!a.Spreaded && !s.Spreaded),
                        "pre-paginated" == a["rendition:layout"] && "pre-paginated" == s["rendition:layout"] ? e.Spreaded || "vertical" != F.RVM ? (i.Width = a.Box.offsetWidth + s.Box.offsetWidth,
                        i.Height = Math.max(a.Box.offsetHeight, s.Box.offsetHeight)) : (i.Width = Math.max(a.Box.offsetWidth, s.Box.offsetWidth),
                        i.Height = a.Box.offsetHeight + s.Box.offsetHeight) : "horizontal" == F.SLA ? (i.Width = a.Box.offsetWidth + s.Box.offsetWidth,
                        i.Height = Math.max(a.Box.offsetHeight, s.Box.offsetHeight),
                        x.Dev && (U.log("Paired Items incl/Reflowable (Horizontal)", "<g:>"),
                        U.log("[0] w".concat(a.Box.offsetWidth, "/h").concat(a.Box.offsetHeight, " %O"), a),
                        U.log("[1] w".concat(s.Box.offsetWidth, "/h").concat(s.Box.offsetHeight, " %O"), s),
                        U.log("-=> w".concat(i.Width, "/h").concat(i.Height, " %O"), e, "</g>"))) : (i.Width = Math.max(a.Box.offsetWidth, s.Box.offsetWidth),
                        i.Height = a.Box.offsetHeight + s.Box.offsetHeight,
                        x.Dev && (U.log("Paired Items incl/Reflowable (Vertical)", "<g:>"),
                        U.log("[0] w".concat(a.Box.offsetWidth, "/h").concat(a.Box.offsetHeight, " %O"), a),
                        U.log("[1] w".concat(s.Box.offsetWidth, "/h").concat(s.Box.offsetHeight, " %O"), s),
                        U.log("-=> w".concat(i.Width, "/h").concat(i.Height, " %O"), e, "</g>")))
                    }
                    var c = "paged" == F.RVM || 0 != e.Index && e.Index != _.Spreads.length - 1 ? 0 : Math.floor((_.Stage[z.L_SIZE_L] - i[z.L_SIZE_L]) / 2);
                    if (c > 0 ? (0 == e.Index && (e.style["padding" + z.L_BASE_B] = c + "px",
                    i[z.L_SIZE_L] += c),
                    e.Index == _.Spreads.length - 1 && (e.style["padding" + z.L_BASE_A] = c + "px",
                    i[z.L_SIZE_L] += c)) : e.style.padding = "",
                    U.Scrollbars.Height && "vertical" == F.SLA && "vertical" != F.ARA ? (r.style.minHeight = "paged" == F.RVM ? "calc(100vh - " + U.Scrollbars.Height + "px)" : "",
                    r.style.marginBottom = e.Index == _.Spreads.length - 1 ? U.Scrollbars.Height + "px" : "") : r.style.minHeight = r.style.marginBottom = "",
                    r.classList.toggle("spreaded", e.Spreaded),
                    r.style[z.L_SIZE_b] = "",
                    e.style[z.L_SIZE_b] = Math.ceil(i[z.L_SIZE_B]) + "px",
                    r.style[z.L_SIZE_l] = e.style[z.L_SIZE_l] = Math.ceil(i[z.L_SIZE_L]) + "px",
                    t.Makeover) {
                        e.PrePaginated || _.replacePages(e.OldPages, e.Pages);
                        var l = e.Box["offset" + z.L_SIZE_L] - e.PreviousSpreadBoxLength;
                        if (0 != l) {
                            var u = "X" == z.L_AXIS_L && U.getElementCoord(e, _.Main).X + e.offsetWidth <= _.Main.scrollLeft + _.Main.offsetWidth;
                            _.Main.Book.style[z.L_SIZE_l] = parseFloat(getComputedStyle(_.Main.Book)[z.L_SIZE_l]) + l + "px",
                            u && (_.Main.scrollLeft += l,
                            H.Slider.resetUISize(),
                            H.Slider.progress())
                        }
                        delete e.OldPages,
                        delete e.PreviousSpreadBoxLength
                    }
                    n(e)
                }
                ))
            },
            layOutItem: function(e) {
                return new Promise((function(t) {
                    e.Scale = 1,
                    "pre-paginated" != e["rendition:layout"] ? _.renderReflowableItem(e) : _.renderPrePaginatedItem(e),
                    t(e)
                }
                ))
            },
            renderReflowableItem: function(e) {
                var t, n, i, r = F["item-padding-" + z.L_BASE_s] + F["item-padding-" + z.L_BASE_e], o = F["item-padding-" + z.L_BASE_b] + F["item-padding-" + z.L_BASE_a], a = _.Stage[z.L_SIZE_B] - r, s = _.Stage[z.L_SIZE_L] - o, c = o;
                ["b", "a", "s", "e"].forEach((function(t) {
                    var n = z["L_BASE_" + t];
                    e.style["padding-" + n] = F["item-padding-" + n] + "px"
                }
                )),
                sML.style(e.HTML, {
                    width: "",
                    height: ""
                }),
                e.WithGutters && (e.HTML.classList.remove("bibi-with-gutters"),
                e.Neck.parentNode && e.Neck.parentNode.removeChild(e.Neck),
                e.Neck.innerHTML = "",
                delete e.Neck);
                var l = !sML.UA.Trident && !sML.UA.EdgeHTML;
                if (e.Columned && (sML.style(e.HTML, {
                    "column-fill": "",
                    "column-width": "",
                    "column-gap": "",
                    "column-rule": ""
                }),
                e.HTML.classList.remove("bibi-columned"),
                l && e.ReversedColumned && (e.HTML.style.direction = "",
                sML.forEach(e.contentDocument.querySelectorAll("body > *"))((function(e) {
                    return e.style.direction = ""
                }
                )))),
                e.WithGutters = !1,
                e.Columned = !1,
                e.ColumnBreadth = 0,
                e.ColumnLength = 0,
                e.ReversedColumned = !1,
                e.Half = !1,
                e.Spreaded = "horizontal" == F.SLA && ("x" == F["pagination-method"] || /-tb$/.test(e.WritingMode)) && ("both" == e["rendition:spread"] || _.Orientation == e["rendition:spread"] || "landscape" == _.Orientation),
                e.Spreaded) {
                    var u = Math.floor((s - c) / 2);
                    u >= Math.floor(a * F["orientation-border-ratio"] / 2) ? s = u : e.Spreaded = !1
                }
                sML.style(e, (d(t = {}, z.L_SIZE_b, a + "px"),
                d(t, z.L_SIZE_l, s + "px"),
                t));
                var p = sML.appendCSSRule(e.contentDocument, "*", "word-wrap: break-word;");
                sML.forEach(e.Body.querySelectorAll("img, svg"))((function(t) {
                    var n;
                    if (t.BibiDefaultStyle && (["width", "height", "maxWidth", "maxHeight"].forEach((function(e) {
                        return t.style[e] = t.BibiDefaultStyle[e]
                    }
                    )),
                    !("horizontal" == F.RVM && /-(rl|lr)$/.test(e.WritingMode) || "vertical" == F.RVM && /-tb$/.test(e.WritingMode)))) {
                        var i = parseFloat(getComputedStyle(t)[z.L_SIZE_b])
                          , r = Math.floor(Math.min(parseFloat(getComputedStyle(e.Body)[z.L_SIZE_b]), a))
                          , o = parseFloat(getComputedStyle(t)[z.L_SIZE_l])
                          , c = Math.floor(Math.min(parseFloat(getComputedStyle(e.Body)[z.L_SIZE_l]), s));
                        (i > r || o > c) && sML.style(t, (d(n = {}, z.L_SIZE_b, Math.floor(parseFloat(getComputedStyle(t)[z.L_SIZE_b]) * Math.min(r / i, c / o)) + "px"),
                        d(n, z.L_SIZE_l, "auto"),
                        d(n, "maxWidth", "100vw"),
                        d(n, "maxHeight", "100vh"),
                        n))
                    }
                }
                ));
                var f = "";
                switch (e.Outsourcing || ("x" == F["pagination-method"] ? "paged" == F.RVM && e.HTML["offset" + z.L_SIZE_L] > s ? f = "S" : e.HTML["offset" + z.L_SIZE_B] > a && (f = "C") : ("paged" == F.RVM || e.HTML["offset" + z.L_SIZE_B] > a) && (f = "C")),
                f) {
                case "S":
                    e.HTML.classList.add("bibi-columned"),
                    sML.style(e.HTML, (d(n = {}, z.L_SIZE_b, "auto"),
                    d(n, z.L_SIZE_l, s + "px"),
                    d(n, "column-fill", "auto"),
                    d(n, "column-width", a + "px"),
                    d(n, "column-gap", 0),
                    d(n, "column-rule", ""),
                    n));
                    var g = Math.ceil((sML.UA.Trident ? e.Body.clientHeight : e.HTML.scrollHeight) / a);
                    sML.style(e.HTML, {
                        width: "",
                        height: "",
                        "column-fill": "",
                        "column-width": "",
                        "column-gap": "",
                        "column-rule": ""
                    }),
                    e.HTML.classList.remove("bibi-columned"),
                    e.HTML.classList.add("bibi-with-gutters");
                    var h = (s + c) * g - c;
                    e.HTML.style[z.L_SIZE_L] = h + "px";
                    for (var b = [], m = 1; m < g; m++) {
                        var v = a
                          , S = (s + c) * m
                          , y = S - c;
                        b.push(0),
                        b.push(y),
                        b.push(v),
                        b.push(y),
                        b.push(v),
                        b.push(S),
                        b.push(0),
                        b.push(S)
                    }
                    /^tb-/.test(e.WritingMode) && b.reverse();
                    for (var L = [], P = "", I = b.length, T = 0; T < I; T++) {
                        var w = b[T] + (b[T] ? "px" : "");
                        T % 2 == 0 ? P = w : L.push(P + " " + w)
                    }
                    var M = x.createElement("bibi-neck")
                      , E = M.appendChild(x.createElement("bibi-throat"))
                      , B = E.attachShadow ? E.attachShadow({
                        mode: "open"
                    }) : E.createShadowRoot ? E.createShadowRoot() : E;
                    B.appendChild(document.createElement("style")).textContent = (B != E ? ":host" : "bibi-throat") + " { ".concat(z.L_SIZE_b, ": ").concat(a, "px; ").concat(z.L_SIZE_l, ": ").concat(h, "px; shape-outside: polygon(").concat(L.join(", "), "); }"),
                    e.Neck = e.Head.appendChild(M),
                    e.WithGutters = !0;
                    break;
                case "C":
                    if (e.HTML.classList.add("bibi-columned"),
                    sML.style(e.HTML, (d(i = {}, z.L_SIZE_b, a + "px"),
                    d(i, "column-fill", "auto"),
                    d(i, "column-width", s + "px"),
                    d(i, "column-gap", c + "px"),
                    d(i, "column-rule", ""),
                    i)),
                    _.Columned = !0,
                    e.Columned = !0,
                    e.ColumnBreadth = a,
                    e.ColumnLength = s,
                    l) {
                        var C = !1;
                        switch (e.WritingMode) {
                        case "lr-tb":
                        case "tb-lr":
                            "ltr" != F["page-progression-direction"] && (C = !0);
                            break;
                        case "rl-tb":
                        case "tb-rl":
                            "rtl" != F["page-progression-direction"] && (C = !0)
                        }
                        C && (e.ReversedColumned = !0,
                        sML.forEach(e.contentDocument.querySelectorAll("body > *"))((function(e) {
                            return e.style.direction = getComputedStyle(e).direction
                        }
                        )),
                        e.HTML.style.direction = F["page-progression-direction"])
                    }
                }
                sML.deleteCSSRule(e.contentDocument, p);
                var A = sML.UA.Trident ? e.Body["client" + z.L_SIZE_L] : e.HTML["scroll" + z.L_SIZE_L]
                  , k = Math.ceil((A + c) / (s + c));
                A = (s + c) * k - c,
                e.style[z.L_SIZE_l] = e.HTML.style[z.L_SIZE_l] = A + "px",
                sML.UA.Trident && (e.HTML.style[z.L_SIZE_l] = "100%");
                var O = a + r
                  , D = A + o;
                e.Box.style[z.L_SIZE_b] = O + "px",
                e.Box.style[z.L_SIZE_l] = D + "px",
                e.Pages.forEach((function(t) {
                    H.PageObserver.unobservePageIntersection(t),
                    e.Box.removeChild(t)
                }
                )),
                e.Pages = [];
                for (var R = 0; R < k; R++) {
                    var N = e.Box.appendChild(sML.create("span", {
                        className: "page"
                    }));
                    N.Item = e,
                    N.Spread = e.Spread,
                    N.IndexInItem = e.Pages.length,
                    e.Pages.push(N),
                    H.PageObserver.observePageIntersection(N)
                }
                return e
            },
            renderPrePaginatedItem: function(e) {
                sML.style(e, {
                    width: "",
                    height: "",
                    transform: ""
                });
                var t = _.Stage[z.L_SIZE_B]
                  , n = _.Stage[z.L_SIZE_L];
                e.Spreaded = !("paged" != F.RVM && F["full-breadth-layout-in-scroll"] || "both" != e["rendition:spread"] && _.Orientation != e["rendition:spread"] && "landscape" != _.Orientation),
                e.Viewport || (e.Viewport = _.getItemViewport(e));
                var i = null;
                if (e.Spreaded)
                    if (i = _.getItemLayoutViewport(e),
                    e.SpreadPair) {
                        var r = e.SpreadPair;
                        r.Spreaded = !0,
                        r.Viewport || (r.Viewport = _.getItemViewport(r));
                        var o = _.getItemLayoutViewport(r)
                          , a = null
                          , s = null
                          , c = null
                          , l = null;
                        r.Index > e.Index ? (a = e,
                        s = i,
                        c = r,
                        l = o) : (a = r,
                        s = o,
                        c = e,
                        l = i),
                        c.Scale = s.Height / l.Height;
                        var u = {
                            Width: s.Width + l.Width * c.Scale,
                            Height: s.Height
                        };
                        a.Scale = Math.min(t / u[z.L_SIZE_B], n / u[z.L_SIZE_L]),
                        c.Scale *= a.Scale
                    } else {
                        var d = {
                            Width: i.Width * (/^(left|right)$/.test(e["rendition:page-spread"]) ? 2 : 1),
                            Height: i.Height
                        };
                        e.Scale = Math.min(t / d[z.L_SIZE_B], n / d[z.L_SIZE_L])
                    }
                else
                    i = _.getItemLayoutViewport(e),
                    "paged" != F.RVM && F["full-breadth-layout-in-scroll"] ? e.Scale = t / i[z.L_SIZE_B] : e.Scale = Math.min(t / i[z.L_SIZE_B], n / i[z.L_SIZE_L]);
                var p = Math.floor(i[z.L_SIZE_L] * e.Scale)
                  , f = Math.floor(i[z.L_SIZE_B] * (p / i[z.L_SIZE_L]));
                return e.Box.style[z.L_SIZE_l] = p + "px",
                e.Box.style[z.L_SIZE_b] = f + "px",
                sML.style(e, {
                    width: i.Width + "px",
                    height: i.Height + "px",
                    transform: "scale(" + e.Scale + ")"
                }),
                e
            },
            getItemViewport: function(e) {
                return e.IsPlaceholder ? null : (t = e.Head.querySelector('meta[name="viewport"]')) ? U.getViewportByMetaContent(t.getAttribute("content")) : e.OnlySingleSVG ? U.getViewportByViewBox(e.Body.firstElementChild.getAttribute("viewBox")) : e.OnlySingleIMG ? U.getViewportByImage(e.Body.firstElementChild) : null;
                var t
            },
            getItemLayoutViewport: function(e) {
                return e.Viewport ? e.Viewport : A.ICBViewport ? A.ICBViewport : {
                    Width: _.Stage.Height * F["orientation-border-ratio"] / (/^(left|right)$/.test(e["rendition:page-spread"]) ? 2 : 1),
                    Height: _.Stage.Height
                }
            },
            organizePages: function() {
                return _.Pages = _.Spreads.reduce((function(e, t) {
                    return t.Pages.reduce((function(e, t) {
                        return t.Index = e.push(t) - 1,
                        e
                    }
                    ), e)
                }
                ), [])
            },
            replacePages: function(e, t) {
                for (var n, i = e[0].Index, r = e.length, o = t.length, a = t.length, s = 0; s < a; s++)
                    t[s].Index = i + s;
                if (o != r)
                    for (var c = o - r, l = e[r - 1].Index + 1; _.Pages[l]; )
                        _.Pages[l].Index += c,
                        l++;
                return (n = _.Pages).splice.apply(n, [i, r].concat(T(t))),
                _.Pages
            },
            layOutStage: function() {
                var e = 0;
                _.Spreads.forEach((function(t) {
                    return e += t.Box["offset" + z.L_SIZE_L]
                }
                )),
                "pre-paginated" != F["book-rendition-layout"] && "paged" == F["reader-view-mode"] || (e += F["spread-gap"] * (_.Spreads.length - 1)),
                _.Main.Book.style[z.L_SIZE_l] = e + "px"
            },
            layOutBook: function(e) {
                return new Promise((function(t, n) {
                    if (_.LayingOut)
                        return n();
                    H.ScrollObserver.History = [],
                    _.LayingOut = !0,
                    U.log("Laying out...", "<g:>"),
                    e ? U.log("Option: %O", e) : e = {},
                    e.DoNotCloseUtilities || W.dispatch("bibi:closes-utilities"),
                    W.dispatch("bibi:is-going-to:lay-out", e),
                    U.Busy = !0,
                    U.HTML.classList.add("busy"),
                    U.HTML.classList.add("laying-out"),
                    e.NoNotification || H.note("Laying out..."),
                    e.Destination || (e.Destination = {
                        IIPP: H.PageObserver.getIIPP()
                    }),
                    e.Setting && F.update(e.Setting);
                    var i = {};
                    if (["reader-view-mode", "spread-layout-direction", "apparent-reading-direction"].forEach((function(e) {
                        return i[e] = F[e]
                    }
                    )),
                    U.log("Layout: %O", i),
                    "function" == typeof e.before && e.before(),
                    e.Reset) {
                        _.resetStage();
                        var r = [];
                        _.Spreads.forEach((function(e) {
                            return r.push(_.layOutSpreadAndItsItems(e))
                        }
                        )),
                        Promise.all(r).then((function() {
                            _.organizePages(),
                            _.layOutStage(),
                            t()
                        }
                        ))
                    } else
                        t()
                }
                )).then((function() {
                    return _.focusOn({
                        Destination: e.Destination,
                        Duration: 0
                    })
                }
                )).then((function() {
                    U.Busy = !1,
                    U.HTML.classList.remove("busy"),
                    U.HTML.classList.remove("laying-out"),
                    e.NoNotification || H.note(""),
                    _.LayingOut = !1,
                    W.dispatch("bibi:laid-out"),
                    U.log("Laid out.", "</g>")
                }
                ))
            },
            updateOrientation: function() {
                var e = _.Orientation;
                if (void 0 !== window.orientation)
                    _.Orientation = 0 == window.orientation || 180 == window.orientation ? "portrait" : "landscape";
                else {
                    var t = window.innerWidth - ("vertical" == F.ARA ? U.Scrollbars.Width : 0)
                      , n = window.innerHeight - ("horizontal" == F.ARA ? U.Scrollbars.Height : 0);
                    _.Orientation = t / n < F["orientation-border-ratio"] ? "portrait" : "landscape"
                }
                _.Orientation != e && (e && W.dispatch("bibi:changes-orientation", _.Orientation),
                U.HTML.classList.remove("orientation-" + e),
                U.HTML.classList.add("orientation-" + _.Orientation),
                e && W.dispatch("bibi:changed-orientation", _.Orientation))
            },
            changeView: function(e) {
                if (F["fix-reader-view-mode"] || !e || "string" != typeof e.Mode || !/^(paged|horizontal|vertical)$/.test(e.Mode) || F.RVM == e.Mode && !e.Force)
                    return !1;
                if (k.Opened) {
                    W.dispatch("bibi:changes-view"),
                    U.Busy = !0,
                    U.HTML.classList.add("busy"),
                    U.HTML.classList.add("changing-view");
                    var t = [U.TouchOS ? 99 : 3, U.TouchOS ? 99 : 33];
                    setTimeout((function() {
                        W.dispatch("bibi:closes-utilities")
                    }
                    ), t[0]),
                    setTimeout((function() {
                        _.layOutBook({
                            Reset: !0,
                            NoNotification: e.NoNotification,
                            Setting: {
                                "reader-view-mode": e.Mode
                            }
                        }).then((function() {
                            U.HTML.classList.remove("changing-view"),
                            U.HTML.classList.remove("busy"),
                            U.Busy = !1,
                            setTimeout((function() {
                                return W.dispatch("bibi:changed-view", e.Mode)
                            }
                            ), 0)
                        }
                        ))
                    }
                    ), t[0] + t[1])
                } else
                    F.update({
                        "reader-view-mode": e.Mode
                    }),
                    k.play();
                F["keep-settings"] && U.Biscuits && U.Biscuits.memorize("Book", {
                    RVM: e.Mode
                })
            }
        };
        Object.defineProperties(_, {
            Current: {
                get: function() {
                    return H.PageObserver.Current
                }
            },
            updateCurrent: {
                get: function() {
                    return H.PageObserver.updateCurrent
                }
            }
        }),
        _.focusOn = function(e) {
            return new Promise((function(t, n) {
                if (_.Moving)
                    return n();
                if (("number" == typeof e || /^\d+$/.test(e)) && (e = {
                    Destination: 1 * e
                }),
                !e)
                    return n();
                var i = e.Destination = _.hatchDestination(e.Destination);
                if (!i)
                    return n();
                W.dispatch("bibi:is-going-to:focus-on", e),
                _.Moving = !0,
                e.FocusPoint = 0,
                "reflowable" == F["book-rendition-layout"] ? ("number" == typeof i.Point ? e.FocusPoint = i.Point : (e.FocusPoint = U.getElementCoord(i.Page)[z.L_AXIS_L],
                "after" == i.Side && (e.FocusPoint += (i.Page["offset" + z.L_SIZE_L] - _.Stage[z.L_SIZE_L]) * z.L_AXIS_D),
                "rtl" == F.SLD && (e.FocusPoint += i.Page.offsetWidth)),
                "rtl" == F.SLD && (e.FocusPoint -= _.Stage.Width)) : _.Stage[z.L_SIZE_L] >= i.Page.Spread["offset" + z.L_SIZE_L] ? (e.FocusPoint = U.getElementCoord(i.Page.Spread)[z.L_AXIS_L],
                e.FocusPoint -= Math.floor((_.Stage[z.L_SIZE_L] - i.Page.Spread["offset" + z.L_SIZE_L]) / 2)) : (e.FocusPoint = U.getElementCoord(i.Page)[z.L_AXIS_L],
                _.Stage[z.L_SIZE_L] > i.Page["offset" + z.L_SIZE_L] ? e.FocusPoint -= Math.floor((_.Stage[z.L_SIZE_L] - i.Page["offset" + z.L_SIZE_L]) / 2) : "after" == i.Side && (e.FocusPoint += (i.Page["offset" + z.L_SIZE_L] - _.Stage[z.L_SIZE_L]) * z.L_AXIS_D)),
                "number" == typeof i.TextNodeIndex && _.selectTextLocation(i);
                var r = {
                    Frame: _.Main,
                    X: 0,
                    Y: 0
                };
                return r[z.L_AXIS_L] = e.FocusPoint,
                F["use-full-height"] || "vertical" != F.RVM || (r.Y -= H.Menu.Height),
                sML.scrollTo(r, {
                    ForceScroll: !0,
                    Duration: "number" == typeof e.Duration ? e.Duration : F.SLA == F.ARA && "paged" != F.RVM ? 222 : 0,
                    Easing: function(e) {
                        return 1 === e ? 1 : -1 * Math.pow(2, -10 * e) + 1
                    }
                }).then((function() {
                    t(i),
                    W.dispatch("bibi:focused-on", e)
                }
                )).catch(n).then((function() {
                    _.Moving = !1
                }
                ))
            }
            )).catch((function() {
                return Promise.resolve()
            }
            ))
        }
        ,
        _.hatchDestination = function(e) {
            if (!e)
                return null;
            if ("reflowable" == F.BRL && ("vertical" == F.SLA && /-tb$/.test(A.WritingMode) || "horizontal" == F.SLA && /^tb-/.test(A.WritingMode)) && (e.P & /\./.test(e.P) || e.Element || e.ElementSelector))
                return e.Point = _.hatchPoint(e),
                e;
            if (delete e.Point,
            e.Page) {
                if (_.Pages[e.Page.Index] == e.Page)
                    return e;
                delete e.Page
            }
            if ("number" == typeof e || "string" == typeof e && /^\d+$/.test(e))
                return {
                    Page: _.Items[e].Pages[0]
                };
            if ("string" == typeof e)
                "head" == e || "foot" == e ? e = {
                    Edge: e
                } : X.EPUBCFI && (e = X.EPUBCFI.getDestination(e));
            else if ("number" == typeof e.IndexInItem) {
                if (_.Pages[e.Index] == e)
                    return {
                        Page: e
                    }
            } else {
                if ("number" == typeof e.Index)
                    return {
                        Page: e.Pages[0]
                    };
                e.tagName && (e = {
                    Element: e
                })
            }
            return e.Page = _.hatchPage(e),
            e
        }
        ,
        _.hatchPage = function(e) {
            if ("string" == typeof e.P && e.P && Object.assign(e, _.getPDestination(e.P)),
            e.Page)
                return e.Page;
            if ("number" == typeof e.PageIndex)
                return _.Pages[e.PageIndex];
            if ("number" == typeof e.SIPP && ("number" != typeof e.PageIndexInSpread && "number" != typeof e.PageProgressInSpread || "number" != typeof e.SpreadIndex && !e.Spread) && (e.SpreadIndex = Math.floor(e.SIPP),
            e.PageProgressInSpread = 1 * String(e.SIPP).replace(/^\d*\./, "0.")),
            "number" == typeof e.IIPP && ("number" != typeof e.PageIndexInItem && "number" != typeof e.PageProgressInItem || "number" != typeof e.ItemIndex && !e.Item) && (e.ItemIndex = Math.floor(e.IIPP),
            e.PageProgressInItem = 1 * String(e.IIPP).replace(/^\d*\./, "0.")),
            "head" == e.Edge)
                return _.Pages[0];
            if ("foot" == e.Edge)
                return _.Pages[_.Pages.length - 1];
            try {
                if ("string" == typeof e.ElementSelector && (e.Item || (e.Item = _.hatchItem(e)),
                e.Item && (e.Element = e.Item.contentDocument.querySelector(e.ElementSelector)),
                delete e.ElementSelector),
                e.Element) {
                    var t = _.hatchNearestPageOfElement(e.Element);
                    if (t)
                        return t
                }
                return "number" == typeof e.PageIndexInItem ? _.hatchItem(e).Pages[e.PageIndexInItem] : "number" == typeof e.PageIndexInSpread ? _.hatchSpread(e).Pages[e.PageIndexInSpread] : "number" == typeof e.PageProgressInItem ? (i = _.hatchItem(e)).Pages[sML.limitMax(Math.floor(i.Pages.length * e.PageProgressInItem), i.Pages.length - 1)] : "number" == typeof e.PageProgressInSpread ? (n = _.hatchSpread(e)).Pages[sML.limitMax(Math.floor(n.Pages.length * e.PageProgressInSpread), n.Pages.length - 1)] : (_.hatchItem(e) || _.hatchSpread(e)).Pages[0]
            } catch (e) {}
            var n, i;
            return null
        }
        ,
        _.hatchItem = function(e) {
            if (e.Item)
                return e.Item;
            if ("number" == typeof e.ItemIndex)
                return _.Items[e.ItemIndex];
            if ("number" == typeof e.ItemIndexInSpine)
                return A.Package.Spine[e.ItemIndexInSpine];
            if ("number" == typeof e.ItemIndexInSpread)
                try {
                    return _.hatchSpread(e).Items[e.ItemIndexInSpread]
                } catch (e) {
                    return null
                }
            return null
        }
        ,
        _.hatchSpread = function(e) {
            return e.Spread ? e.Spread : "number" == typeof e.SpreadIndex ? _.Spreads[e.SpreadIndex] : null
        }
        ,
        _.hatchNearestPageOfElement = function(e) {
            if (!e || !e.tagName)
                return null;
            var t, n, i = e.ownerDocument.body.Item;
            return i && i.Pages ? (i.Columned ? (n = U.getElementCoord(e)[z.L_AXIS_B],
            "rtl" == F.PPD && "vertical" == F.SLA && (n = i.Body.offsetWidth - n - e.offsetWidth),
            t = i.Pages[n <= 0 ? 0 : Math.floor(n / i.ColumnBreadth)]) : (n = U.getElementCoord(e)[z.L_AXIS_L],
            "rtl" == F.PPD && "horizontal" == F.SLA && (n = i.HTML.offsetWidth - n - e.offsetWidth),
            t = i.Pages[Math.floor(n / _.Stage[z.L_SIZE_L])]),
            t) : null
        }
        ,
        _.hatchPoint = function(e) {
            try {
                if ("string" == typeof e.P && e.P && Object.assign(e, _.getPDestination(e.P)),
                "string" == typeof e.ElementSelector && (e.Element = _.hatchItem(e).contentDocument.querySelector(e.ElementSelector),
                delete e.ElementSelector),
                e.Element)
                    return _.hatchPointOfElement(e.Element)
            } catch (e) {}
            return null
        }
        ,
        _.hatchPointOfElement = function(e) {
            if (!e || !e.tagName)
                return null;
            var t, n = e.ownerDocument.body.Item;
            return n && n.Pages ? (n.Columned ? (t = U.getElementCoord(e)[z.L_AXIS_B],
            "rtl" == F.PPD && "vertical" == F.SLA && (t = n.Body.offsetWidth - t - e.offsetWidth)) : (t = U.getElementCoord(e)[z.L_AXIS_L],
            "rtl" == F.PPD && "horizontal" == F.SLA && (t += e.offsetWidth)),
            U.getElementCoord(n)[z.L_AXIS_L] + F["item-padding-" + z.L_OOBL_l] + t) : null
        }
        ,
        _.getPDestination = function(e) {
            if (!(e = x.verifySettingValue("string", "p", e)))
                return null;
            if (/^[a-z]+$/.test(e))
                return "head" == e || "foot" == e ? {
                    Edge: e
                } : null;
            var t = e.split(/-[a-z]+$/.test(e) ? "-" : ".")
              , n = parseInt(t.shift()) - 1;
            if (n < 0)
                return {
                    Edge: "head"
                };
            if (n > _.Items.length - 1)
                return {
                    Edge: "foot"
                };
            var i = _.Items[n];
            if (t.length)
                if (/^[a-z]+$/.test(t[0])) {
                    if ("end" == t[0])
                        return {
                            Page: i.Pages[i.Pages.length - 1]
                        }
                } else {
                    var r = "body";
                    t.forEach((function(e) {
                        return r += ">*:nth-child(" + e + ")"
                    }
                    ));
                    var o = i.contentDocument.querySelector(r);
                    if (o)
                        return {
                            Element: o
                        }
                }
            return {
                Page: i.Pages[0]
            }
        }
        ,
        _.selectTextLocation = function(e) {
            if ("number" != typeof e.TextNodeIndex || !e.Element)
                return !1;
            var t = e.Element.childNodes[e.TextNodeIndex];
            if (t && t.textContent) {
                var n = {
                    Start: {
                        Node: t,
                        Index: 0
                    },
                    End: {
                        Node: t,
                        Index: t.textContent.length
                    }
                };
                if (e.TermStep)
                    if (e.TermStep.Preceding || e.TermStep.Following) {
                        if (n.Start.Index = e.TermStep.Index,
                        n.End.Index = e.TermStep.Index,
                        e.TermStep.Preceding && (n.Start.Index -= e.TermStep.Preceding.length),
                        e.TermStep.Following && (n.End.Index += e.TermStep.Following.length),
                        n.Start.Index < 0 || t.textContent.length < n.End.Index)
                            return;
                        if (t.textContent.substr(n.Start.Index, n.End.Index - n.Start.Index) != e.TermStep.Preceding + e.TermStep.Following)
                            return
                    } else if (e.TermStep.Side && "a" == e.TermStep.Side) {
                        for (n.Start.Node = t.parentNode.firstChild; n.Start.Node.childNodes.length; )
                            n.Start.Node = n.Start.Node.firstChild;
                        n.End.Index = e.TermStep.Index - 1
                    } else {
                        for (n.Start.Index = e.TermStep.Index,
                        n.End.Node = t.parentNode.lastChild; n.End.Node.childNodes.length; )
                            n.End.Node = n.End.Node.lastChild;
                        n.End.Index = n.End.Node.textContent.length
                    }
                return sML.Ranges.selectRange(sML.Ranges.getRange(n))
            }
        }
        ,
        _.moveBy = function(e) {
            return new Promise((function(t, n) {
                if (_.Moving || !k.Opened)
                    return n();
                if (!e)
                    return n();
                switch (I(e)) {
                case "string":
                case "number":
                    e = {
                        Distance: e
                    };
                case "object":
                    e.Distance *= 1
                }
                if ("number" != typeof e.Distance || !isFinite(e.Distance) || !e.Distance)
                    return n();
                W.dispatch("bibi:is-going-to:move-by", e);
                var i = (e.Distance > 0 ? H.PageObserver.Current.List.slice(-1) : H.PageObserver.Current.List)[0]
                  , r = i.Page
                  , o = (r.Item,
                e.Distance > 0 ? "before" : "after");
                i.PageIntersectionStatus.Oversized ? e.Distance > 0 ? i.PageIntersectionStatus.Entering ? (e.Distance = 0,
                o = "before") : i.PageIntersectionStatus.Headed && (e.Distance = 0,
                o = "after") : (i.PageIntersectionStatus.Footed || i.PageIntersectionStatus.Passing) && (e.Distance = 0,
                o = "before") : e.Distance > 0 ? i.PageIntersectionStatus.Entering && (e.Distance = 0,
                o = "before") : i.PageIntersectionStatus.Passing && (e.Distance = 0,
                o = "before");
                var a = r.Index + e.Distance;
                a < 0 ? (a = 0,
                o = "before") : a > _.Pages.length - 1 && (a = _.Pages.length - 1,
                o = "after");
                var s = _.Pages[a];
                "pre-paginated" == F.BRL && s.Item.SpreadPair && "horizontal" == F.SLA && _.Stage[z.L_SIZE_L] > s.Spread["offset" + z.L_SIZE_L] && (e.Distance < 0 && 0 == s.IndexInSpread && (s = s.Spread.Pages[1]),
                e.Distance > 0 && 1 == s.IndexInSpread && (s = s.Spread.Pages[0])),
                e.Destination = {
                    Page: s,
                    Side: o
                },
                _.focusOn(e).then((function() {
                    return e.Destination
                }
                )).then((function(n) {
                    t(n),
                    W.dispatch("bibi:moved-by", e)
                }
                ))
            }
            )).catch((function() {
                return Promise.resolve()
            }
            ))
        }
        ,
        _.scrollBy = function(e) {
            return new Promise((function(t, n) {
                if (!e)
                    return n();
                if ("number" == typeof e && (e = {
                    Distance: e
                }),
                !e.Distance || "number" != typeof e.Distance)
                    return n();
                W.dispatch("bibi:is-going-to:scroll-by", e),
                _.Moving = !0;
                var i = {
                    Frame: _.Main,
                    X: 0,
                    Y: 0
                };
                switch (F.SLD) {
                case "ttb":
                    i.Y = _.Main.scrollTop + _.Stage.Height * e.Distance;
                    break;
                case "ltr":
                    i.X = _.Main.scrollLeft + _.Stage.Width * e.Distance;
                    break;
                case "rtl":
                    i.X = _.Main.scrollLeft + _.Stage.Width * e.Distance * -1
                }
                sML.scrollTo(i, {
                    Duration: "number" == typeof e.Duration ? e.Duration : "paged" != F.RVM && F.SLA == F.ARA ? 100 : 0,
                    ForceScroll: !e.Cancelable,
                    ease: "function" == typeof e.ease ? e.ease : null
                }).catch((function() {
                    return !0
                }
                )).then((function() {
                    _.Moving = !1,
                    t()
                }
                ))
            }
            )).then((function() {
                return W.dispatch("bibi:scrolled-by", e)
            }
            ))
        }
        ;
        var H = {
            initialize: function() {
                H.Utilities.create(),
                H.TouchObserver.create(),
                H.Notifier.create(),
                H.Veil.create(),
                W.bind("bibi:readied", (function() {
                    H.ScrollObserver.create(),
                    H.ResizeObserver.create(),
                    H.PageObserver.create(),
                    H.Catcher.create(),
                    H.Menu.create(),
                    H.Panel.create(),
                    H.Help.create(),
                    H.PoweredBy.create(),
                    H.FontSizeChanger.create(),
                    H.Loupe.create()
                }
                )),
                W.bind("bibi:initialized-book", (function() {
                    H.BookmarkManager.create()
                }
                )),
                W.bind("bibi:prepared", (function() {
                    H.FlickObserver.create(),
                    H.WheelObserver.create(),
                    H.PinchObserver.create(),
                    H.KeyObserver.create(),
                    H.EdgeObserver.create(),
                    H.Nombre.create(),
                    H.Slider.create(),
                    H.Flipper.create(),
                    H.Arrows.create(),
                    H.AxisSwitcher.create(),
                    H.Spinner.create()
                }
                ))
            }
        };
        H.Utilities = {
            create: function() {
                var e = H.Utilities = H.setToggleAction({
                    openGracefuly: function() {
                        return !_.Moving && !_.Breaking && "active" != e.UIState && e.open()
                    },
                    closeGracefuly: function() {
                        return !_.Moving && !_.Breaking && "default" != e.UIState && e.close()
                    },
                    toggleGracefuly: function() {
                        return !_.Moving && !_.Breaking && e.toggle()
                    }
                }, {
                    onopened: function() {
                        return W.dispatch("bibi:opens-utilities")
                    },
                    onclosed: function() {
                        return W.dispatch("bibi:closes-utilities")
                    }
                });
                W.add("bibi:commands:open-utilities", (function() {
                    return H.Utilities.open()
                }
                )),
                W.add("bibi:commands:close-utilities", (function() {
                    return H.Utilities.close()
                }
                )),
                W.add("bibi:commands:toggle-utilities", (function() {
                    return H.Utilities.toggleGracefuly()
                }
                ))
            }
        },
        H.ScrollObserver = {
            create: function() {
                var e = H.ScrollObserver = {
                    History: [],
                    Count: 0,
                    onScroll: function(t) {
                        !_.LayingOut && k.Opened && (e.Scrolling || (e.Scrolling = !0,
                        U.HTML.classList.add("scrolling")),
                        W.dispatch("bibi:is-scrolling"),
                        e.History.unshift(Math.ceil(_.Main["scroll" + z.L_OOBL_L])),
                        e.History.length > 2 && e.History.pop(),
                        8 == ++e.Count && (e.Count = 0,
                        W.dispatch("bibi:scrolled")),
                        clearTimeout(_.Timer_onScrollEnd),
                        _.Timer_onScrollEnd = setTimeout((function() {
                            e.Scrolling = !1,
                            e.Count = 0,
                            U.HTML.classList.remove("scrolling"),
                            W.dispatch("bibi:scrolled")
                        }
                        ), 123))
                    },
                    observe: function() {
                        _.Main.addEventListener("scroll", e.onScroll)
                    },
                    breakCurrentScrolling: function() {
                        try {
                            _.Breaking = !0,
                            sML.Scroller.Scrolling.cancel(),
                            setTimeout((function() {
                                return _.Breaking = !1
                            }
                            ), 333)
                        } catch (e) {
                            _.Breaking = !1
                        }
                    },
                    forceStopScrolling: function() {
                        e.breakCurrentScrolling(),
                        _.Main.style.overflow = "hidden",
                        _.Main.scrollLeft = _.Main.scrollLeft,
                        _.Main.scrollTop = _.Main.scrollTop,
                        _.Main.style.overflow = ""
                    }
                };
                W.bind("bibi:opened", e.observe),
                W.dispatch("bibi:created-scroll-observer")
            }
        },
        H.PageObserver = {
            create: function() {
                var e = H.PageObserver = {
                    IntersectingPages: [],
                    PagesToBeObserved: [],
                    observePageIntersection: function(t) {
                        return e.PagesToBeObserved.includes(t) ? e.PagesToBeObserved.length : e.PagesToBeObserved.push(t)
                    },
                    unobservePageIntersection: function(t) {
                        return (e.PagesToBeObserved = e.PagesToBeObserved.filter((function(e) {
                            return e != t
                        }
                        ))).length
                    },
                    observeIntersection: function() {
                        var t = new IntersectionObserver((function(t) {
                            return t.forEach((function(t) {
                                var n = t.target
                                  , i = !1;
                                t.isIntersecting ? e.IntersectingPages.includes(n) || (i = !0,
                                e.IntersectingPages.push(n)) : e.IntersectingPages.includes(n) && (i = !0,
                                e.IntersectingPages = e.IntersectingPages.filter((function(e) {
                                    return e != n
                                }
                                ))),
                                i && (e.IntersectingPages.length && e.IntersectingPages.sort((function(e, t) {
                                    return e.Index - t.Index
                                }
                                )),
                                W.dispatch("bibi:changes-intersection", e.IntersectingPages),
                                clearTimeout(e.Timer_IntersectionChange),
                                e.Timer_IntersectionChange = setTimeout((function() {
                                    W.dispatch("bibi:changed-intersection", e.IntersectingPages)
                                }
                                ), 9))
                            }
                            ))
                        }
                        ),{
                            root: _.Main,
                            rootMargin: "0px",
                            threshold: 0
                        });
                        e.observePageIntersection = function(e) {
                            return t.observe(e)
                        }
                        ,
                        e.unobservePageIntersection = function(e) {
                            return t.unobserve(e)
                        }
                        ,
                        e.PagesToBeObserved.forEach((function(e) {
                            return t.observe(e)
                        }
                        )),
                        delete e.PagesToBeObserved
                    },
                    Current: {
                        List: [],
                        Pages: [],
                        Frame: {}
                    },
                    updateCurrent: function() {
                        var t = e.getFrame();
                        if (t) {
                            e.Current.Frame = t;
                            var n = e.getList();
                            n && (e.Current.List = n,
                            e.Current.Pages = n.map((function(e) {
                                return e.Page
                            }
                            )),
                            e.classify())
                        }
                        return e.Current
                    },
                    getFrame: function() {
                        var e = {};
                        return e.Length = _.Main["offset" + z.L_SIZE_L],
                        e[z.L_OOBL_L] = Math.ceil(_.Main["scroll" + z.L_OOBL_L]),
                        e["Top" == z.L_OOBL_L ? "Bottom" : "Right"] = e[z.L_OOBL_L] + e.Length,
                        {
                            Before: e[z.L_BASE_B],
                            After: e[z.L_BASE_A],
                            Length: e.Length
                        }
                    },
                    getCandidatePageList: function() {
                        for (var t = Math.ceil((_.Stage.Width - 1) / 4), n = Math.ceil((_.Stage.Height - 1) / 4), i = [5, 6, 4, 2, 8], r = i.length, o = 0; o < r; o++) {
                            var a = i[o]
                              , s = document.elementFromPoint(t * (a % 3 || 3), n * Math.ceil(a / 3));
                            if (s) {
                                if (s.IndexInItem)
                                    return [s];
                                if (s.Pages)
                                    return s.Pages;
                                if (s.Inside)
                                    return s.Inside.Pages
                            }
                        }
                        return e.IntersectingPages.length ? e.IntersectingPages : []
                    },
                    getList: function() {
                        var t = []
                          , n = []
                          , i = e.getCandidatePageList();
                        if (!i.length || "number" != typeof i[0].Index)
                            return null;
                        for (var r = sML.limitMin(i[0].Index - 2, 0), o = sML.limitMax(i[i.length - 1].Index + 2, _.Pages.length - 1), a = 0, s = r; s <= o; s++) {
                            var c = _.Pages[s]
                              , l = e.getIntersectionStatus(c, "WithDetail");
                            if (l.Ratio < a) {
                                if (t.length)
                                    break
                            } else {
                                var u = {
                                    Page: c,
                                    PageIntersectionStatus: l
                                };
                                if (t.length) {
                                    var d = t[t.length - 1];
                                    d.Page.Item == c.Item && (u.ItemIntersectionStatus = d.ItemIntersectionStatus),
                                    d.Page.Spread == c.Spread && (u.SpreadIntersectionStatus = d.SpreadIntersectionStatus)
                                }
                                u.ItemIntersectionStatus || (u.ItemIntersectionStatus = e.getIntersectionStatus(c.Item.Box)),
                                u.SpreadIntersectionStatus || (u.SpreadIntersectionStatus = e.getIntersectionStatus(c.Spread)),
                                1 == u.SpreadIntersectionStatus.Ratio && n.push(u),
                                l.Ratio > a ? (t = [u],
                                a = l.Ratio) : t.push(u)
                            }
                        }
                        return n.length ? n : t.length ? t : null
                    },
                    getIntersectionStatus: function(t, n) {
                        var i = sML.getCoord(t)
                          , r = z.L_AXIS_D
                          , o = Math.min(e.Current.Frame.After * r, i[z.L_BASE_A] * r) - Math.max(e.Current.Frame.Before * r, i[z.L_BASE_B] * r)
                          , a = o <= 0 || !i[z.L_SIZE_L] || isNaN(o) ? 0 : o / i[z.L_SIZE_L]
                          , s = {
                            Ratio: a
                        };
                        if (a <= 0)
                            ;
                        else if (n)
                            if (a >= 1)
                                s.Contained = !0;
                            else {
                                var c = e.Current.Frame.Before * r
                                  , l = e.Current.Frame.After * r
                                  , u = i[z.L_BASE_B] * r
                                  , d = i[z.L_BASE_A] * r;
                                c < u ? s.Entering = !0 : c == u ? s.Headed = !0 : d == l ? s.Footed = !0 : d < l && (s.Passing = !0),
                                _.Main["offset" + k] < i[z.L_SIZE_L] && (s.Oversized = !0)
                            }
                        return s
                    },
                    classify: function() {
                        var t = []
                          , n = _.Main.Book.querySelectorAll(".current");
                        e.Current.List.forEach((function(e) {
                            var n = e.Page
                              , i = n.Item.Box
                              , r = n.Spread.Box;
                            t.includes(r) || (r.classList.add("current"),
                            t.push(r)),
                            t.includes(i) || (i.classList.add("current"),
                            t.push(i)),
                            n.classList.add("current"),
                            t.push(n)
                        }
                        )),
                        sML.forEach(n)((function(e) {
                            t.includes(e) || e.classList.remove("current")
                        }
                        ))
                    },
                    observeCurrent: function() {
                        W.bind(["bibi:changed-intersection", "bibi:scrolled"], e.updateCurrent)
                    },
                    Past: {
                        List: [{
                            Page: null,
                            PageIntersectionStatus: null
                        }]
                    },
                    observePageMove: function() {
                        W.bind("bibi:scrolled", (function() {
                            var t = e.Current.List[0]
                              , n = e.Current.List.slice(-1)[0]
                              , i = t.Page
                              , r = n.Page
                              , o = t.PageIntersectionStatus
                              , a = n.PageIntersectionStatus
                              , s = e.Past.List[0]
                              , c = e.Past.List.slice(-1)[0]
                              , l = s.Page
                              , u = c.Page
                              , d = _.Pages.length - 1
                              , p = !1
                              , f = !1
                              , g = !1;
                            if (i != l || r != u)
                                p = !0,
                                0 == i.Index && (o.Contained || o.Headed) && (f = !0),
                                r.Index == d && (a.Contained || a.Footed) && (g = !0);
                            else {
                                var h = s.PageIntersectionStatus
                                  , b = c.PageIntersectionStatus;
                                0 != i.Index || !o.Contained && !o.Headed || h.Contained || h.Headed || (f = !0),
                                r.Index != d || !a.Contained && !a.Footed || b.Contained || b.Footed || (g = !0)
                            }
                            var m = {
                                Past: e.Past,
                                Current: e.Current
                            };
                            p && W.dispatch("bibi:flipped", m),
                            f && W.dispatch("bibi:got-to-the-beginning", m),
                            g && W.dispatch("bibi:got-to-the-end", m),
                            Object.assign(e.Past, e.Current)
                        }
                        ))
                    },
                    getIIPP: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , n = t.Page && "number" == typeof t.Page.IndexInItem ? t.Page : e.Current.Pages[0] || (t.Item && t.Item.IndexInSpine ? t.Item.Pages[0] : _.Pages[0]);
                        return n.Item.Index + n.IndexInItem / n.Item.Pages.length
                    },
                    getP: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , n = null
                          , i = null;
                        if (t.Element && t.Element.ownerDocument && t.Element.ownerDocument.body.Item)
                            n = t.Element.ownerDocument.body.Item,
                            i = t.Element;
                        else {
                            if ("pre-paginated" == A.Package.Metadata["rendition:layout"])
                                return {
                                    P: String((e.Current.Pages[0] || _.Pages[0]).Item.Index + 1)
                                };
                            t.Page && "number" == typeof t.Page.IndexInItem || (t.Page = null);
                            var r = t.Page ? t.Page : "tb" == A.WritingMode.split("-")[0] && "vertical" == F.SLA || "tb" == A.WritingMode.split("-")[1] && "horizontal" == F.SLA ? e.Current.Pages[0] : e.IntersectingPages.filter((function(t) {
                                return _.Stage[z.L_SIZE_L] * e.getIntersectionStatus(t).Ratio > 3
                            }
                            ))[0];
                            if (!r)
                                return "";
                            n = r.Item;
                            var o = U.getElementCoord(r, _.Main)
                              , a = {
                                Left: o.X,
                                Right: o.X + r.offsetWidth,
                                Top: o.Y,
                                Bottom: o.Y + r.offsetHeight
                            };
                            a[z.L_OOBL_B] += F["item-padding-" + z.L_OOBL_b],
                            a[z.L_OEBL_B] -= F["item-padding-" + z.L_OEBL_b],
                            n.Columned && (a[z.L_OOBL_L] += F["item-padding-" + z.L_OOBL_l],
                            a[z.L_OEBL_L] -= F["item-padding-" + z.L_OEBL_l]);
                            var s = U.getElementCoord(n, _.Main)
                              , c = {
                                Left: s.X + F["item-padding-left"],
                                Top: s.Y + F["item-padding-top"]
                            };
                            c.Right = c.Left + n.HTML.offsetWidth,
                            c.Bottom = c.Top + n.HTML.offsetHeight;
                            var l = {
                                Left: _.Main.scrollLeft,
                                Right: _.Main.scrollLeft + _.Stage.Width,
                                Top: _.Main.scrollTop,
                                Bottom: _.Main.scrollTop + _.Stage.Height
                            }
                              , u = t.Page ? {
                                Left: Math.max(a.Left, c.Left) - c.Left,
                                Right: Math.min(a.Right, c.Right) - c.Left,
                                Top: Math.max(a.Top, c.Top) - c.Top,
                                Bottom: Math.min(a.Bottom, c.Bottom) - c.Top
                            } : {
                                Left: Math.max(a.Left, c.Left, l.Left) - c.Left,
                                Right: Math.min(a.Right, c.Right, l.Right) - c.Left,
                                Top: Math.max(a.Top, c.Top, l.Top) - c.Top,
                                Bottom: Math.min(a.Bottom, c.Bottom, l.Bottom) - c.Top
                            };
                            u.Right--,
                            u.Bottom--;
                            var d = 1
                              , p = 1
                              , f = function(e, t) {
                                return n.contentDocument.elementFromPoint(e, t)
                            };
                            "rtl" == F.ARD ? d *= -1 : "ttb" == F.ARD && ("rtl" == F.PPD && (p *= -1),
                            f = function(e, t) {
                                return n.contentDocument.elementFromPoint(t, e)
                            }
                            ),
                            t.TagNames && (t.TagNames = Array.isArray(t.TagNames) ? t.TagNames.map((function(e) {
                                return "string" != typeof e ? "" : e.replace(/\s+/, "").toLowerCase()
                            }
                            )).filter((function(e) {
                                return !!e
                            }
                            )) : null),
                            t.TagNames && t.TagNames.length || delete t.TagNames;
                            e: for (var g = u[z.A_BASE_B], h = Math.round((u[z.A_BASE_A] - u[z.A_BASE_B]) / 9); g * d < u[z.A_BASE_A] * d; g += h)
                                for (var b = u[z.A_BASE_S], m = Math.round((u[z.A_BASE_E] - u[z.A_BASE_S]) / 3); b * p < u[z.A_BASE_E] * p; b += m) {
                                    var v = f(g, b);
                                    if (t.TagNames ? t.TagNames.includes(v.tagName.toLowerCase()) && (i = v) : v != n.HTML && v != n.Body && (i = v),
                                    i)
                                        break e
                                }
                            if (!i)
                                return r.IndexInItem < n.Pages.length - 1 ? e.getP({
                                    Page: n.Pages[r.IndexInItem + 1],
                                    TagNames: t.TagNames
                                }) : n.Index < _.Items.length - 1 ? n.Index + 2 : "foot"
                        }
                        for (var S = [], y = i, L = function() {
                            var e = 0;
                            sML.forEach(y.parentElement.childNodes)((function(t, n) {
                                if (1 == t.nodeType)
                                    return e++,
                                    t == y ? (S.unshift(e),
                                    y = y.parentElement,
                                    "break") : void 0
                            }
                            ))
                        }; y != n.Body; )
                            L();
                        return S.unshift(n.Index + 1),
                        S.join(".")
                    },
                    MaxTurning: 4,
                    TurningItems_FaceUp: [],
                    TurningItems_FaceDown: [],
                    getTurningOriginItem: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                          , n = e.Current.List.length ? e.Current.List : e.IntersectingPages.length ? e.IntersectingPages : null;
                        try {
                            return (t > 0 ? n[0] : n[n.length - 1]).Page.Item
                        } catch (e) {}
                        return null
                    },
                    turnItems: function(t) {
                        if (!_.DoNotTurn && F["allow-placeholders"]) {
                            "object" != I(t) && (t = {});
                            var n = H.ScrollObserver.History.length > 1 && H.ScrollObserver.History[1] * z.L_AXIS_D > H.ScrollObserver.History[0] * z.L_AXIS_D ? -1 : 1
                              , i = t.Origin || e.getTurningOriginItem(n);
                            if (i) {
                                var r = [i]
                                  , o = []
                                  , a = []
                                  , s = _.Items[i.Index + n];
                                s && r.push(s);
                                var c = _.Items[i.Index - n];
                                c && r.push(c),
                                r.forEach((function(t) {
                                    "Up" != t.Turned && (e.TurningItems_FaceUp.includes(t) ? a : o).push(t)
                                }
                                ));
                                for (var l = 1; ++l < 9 && a.length + o.length < e.MaxTurning; ) {
                                    var u = _.Items[i.Index + l * n];
                                    if (!u)
                                        break;
                                    r.includes(u) || "Up" != u.Turned && (e.TurningItems_FaceUp.includes(u) ? a : o).push(u)
                                }
                                e.TurningItems_FaceUp.forEach((function(t) {
                                    if (!a.includes(t)) {
                                        if (a.length + o.length < e.MaxTurning)
                                            return a.push(t);
                                        clearTimeout(t.Timer_Turn),
                                        e.turnItem(t, {
                                            Down: !0
                                        })
                                    }
                                }
                                )),
                                o.forEach((function(t, n) {
                                    return e.turnItem(t, {
                                        Up: !0,
                                        Delay: (r.includes(t) ? 99 : 999) * n
                                    })
                                }
                                ))
                            }
                        }
                    },
                    turnItem: function(t, n) {
                        return new Promise((function(i) {
                            if (!_.DoNotTurn && F["allow-placeholders"]) {
                                if (t || (t = e.getTurningOriginItem()),
                                "object" != I(n) && (n = {
                                    Up: !0
                                }),
                                n.Up) {
                                    if (e.TurningItems_FaceUp.includes(t))
                                        return i();
                                    e.TurningItems_FaceUp.push(t),
                                    e.TurningItems_FaceDown = e.TurningItems_FaceDown.filter((function(e) {
                                        return e != t
                                    }
                                    ))
                                } else {
                                    if (e.TurningItems_FaceDown.includes(t))
                                        return i();
                                    e.TurningItems_FaceDown.push(t),
                                    e.TurningItems_FaceUp = e.TurningItems_FaceUp.filter((function(e) {
                                        return e != t
                                    }
                                    )),
                                    U.RangeLoader && U.cancelExtraction(t.Source)
                                }
                                t.Timer_Turn = setTimeout((function() {
                                    return k.loadItem(t, {
                                        IsPlaceholder: !n.Up
                                    }).then((function() {
                                        n.Up ? e.TurningItems_FaceUp = e.TurningItems_FaceUp.filter((function(e) {
                                            return e != t
                                        }
                                        )) : e.TurningItems_FaceDown = e.TurningItems_FaceDown.filter((function(e) {
                                            return e != t
                                        }
                                        )),
                                        _.layOutItem(t).then((function() {
                                            return _.layOutSpread(t.Spread, {
                                                Makeover: !0,
                                                Reverse: n.Reverse
                                            })
                                        }
                                        )).then((function() {
                                            return i(t)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), n.Delay || 0)
                            }
                        }
                        ))
                    }
                };
                W.bind("bibi:laid-out-for-the-first-time", (function(t) {
                    e.IntersectingPages = [_.Spreads[t.TargetSpreadIndex].Pages[0]],
                    e.observeIntersection()
                }
                )),
                W.bind("bibi:opened", (function() {
                    e.updateCurrent(),
                    e.observeCurrent(),
                    e.observePageMove()
                }
                )),
                W.dispatch("bibi:created-page-observer")
            }
        },
        H.ResizeObserver = {
            create: function() {
                var e = H.ResizeObserver = {
                    Resizing: !1,
                    TargetPageAfterResizing: null,
                    onResize: function(t) {
                        !_.LayingOut && k.Opened && (e.Resizing || (e.Resizing = !0,
                        e.TargetPageAfterResizing = H.PageObserver.Current.List[0] ? H.PageObserver.Current.List[0].Page : null,
                        U.Busy = !0,
                        U.HTML.classList.add("busy"),
                        U.HTML.classList.add("resizing")),
                        clearTimeout(e.Timer_onResizeEnd),
                        e.Timer_onResizeEnd = setTimeout((function() {
                            _.updateOrientation();
                            var n = e.TargetPageAfterResizing || (H.PageObserver.Current.List[0] ? H.PageObserver.Current.List[0].Page : null);
                            _.layOutBook({
                                Reset: !0,
                                Destination: n ? {
                                    ItemIndex: n.Item.Index,
                                    PageProgressInItem: n.IndexInItem / n.Item.Pages.length
                                } : null
                            }).then((function() {
                                W.dispatch("bibi:resized", t),
                                U.HTML.classList.remove("resizing"),
                                U.HTML.classList.remove("busy"),
                                U.Busy = !1,
                                e.Resizing = !1
                            }
                            ))
                        }
                        ), sML.UA.Trident ? 1200 : U.TouchOS ? 600 : 300))
                    },
                    observe: function() {
                        window.addEventListener(W.resize, e.onResize)
                    }
                };
                W.bind("bibi:opened", e.observe),
                W.dispatch("bibi:created-resize-observer")
            }
        },
        H.TouchObserver = {
            create: function() {
                var e = H.TouchObserver = {
                    observeElementHover: function(e) {
                        return e.BibiHoverObserver || (e.BibiHoverObserver = {
                            onHover: function(t) {
                                return W.dispatch(e, "bibi:hovered", t)
                            },
                            onUnHover: function(t) {
                                return W.dispatch(e, "bibi:unhovered", t)
                            }
                        },
                        e.addEventListener(W.pointerover, (function(t) {
                            return e.BibiHoverObserver.onHover(t)
                        }
                        )),
                        e.addEventListener(W.pointerout, (function(t) {
                            return e.BibiHoverObserver.onUnHover(t)
                        }
                        ))),
                        e
                    },
                    setElementHoverActions: function(e) {
                        return W.add(e, "bibi:hovered", (function(t) {
                            return e.Hover || e.isAvailable && !e.isAvailable(t) || (e.Hover = !0,
                            e.classList.add("hover"),
                            e.showHelp && e.showHelp()),
                            e
                        }
                        )),
                        W.add(e, "bibi:unhovered", (function(t) {
                            return e.Hover ? (e.Hover = !1,
                            e.classList.remove("hover"),
                            e.hideHelp && e.hideHelp(),
                            e) : e
                        }
                        )),
                        e
                    },
                    observeElementTap: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!e.BibiTapObserver) {
                            var n = {
                                D2U: 300,
                                U2D: 300
                            };
                            e.BibiTapObserver = {
                                care: t.PreventDefault ? t.StopPropagation ? function(e) {
                                    return e.preventDefault() || e.stopPropagation()
                                }
                                : function(e) {
                                    return e.preventDefault()
                                }
                                : t.StopPropagation ? function(e) {
                                    return e.stopPropagation()
                                }
                                : function() {}
                                ,
                                onPointerDown: function(e) {
                                    if ("number" == typeof e.buttons && 1 !== e.buttons || e.ctrlKey)
                                        return !0;
                                    this.care(e),
                                    clearTimeout(this.Timer_forgetFloating),
                                    clearTimeout(this.Timer_fireTap);
                                    var t = Date.now();
                                    this.Touching = {
                                        Time: t,
                                        Coord: U.getBibiEventCoord(e),
                                        Event: e
                                    },
                                    this.Floating && (t - this.Floating.Time < n.U2D ? (this.Floating.PreviousTouching.Event.preventDefault(),
                                    this.Floating.Event.preventDefault(),
                                    e.preventDefault()) : delete this.Floating)
                                },
                                onPointerUp: function(t) {
                                    var i = this;
                                    if (this.care(t),
                                    this.Touching) {
                                        var r = Date.now();
                                        if (r - this.Touching.Time < n.D2U) {
                                            var o = U.getBibiEventCoord(t);
                                            if (Math.abs(o.X - this.Touching.Coord.X) < 3 && Math.abs(o.Y - this.Touching.Coord.Y) < 3) {
                                                var a = 0
                                                  , s = {
                                                    Time: r,
                                                    Event: t,
                                                    PreviousTouching: this.Touching
                                                };
                                                this.Floating ? (a = this.Floating.WaitingFor,
                                                this.Floating = Object.assign(s, {
                                                    WaitingFor: ++this.Floating.WaitingFor
                                                })) : (a = 1,
                                                this.Floating = Object.assign(s, {
                                                    WaitingFor: 2
                                                })),
                                                this.Timer_forgetFloating = setTimeout((function() {
                                                    delete i.Floating
                                                }
                                                ), n.U2D),
                                                this.Timer_fireTap = setTimeout((function() {
                                                    switch (a) {
                                                    case 1:
                                                        return e.BibiTapObserver.onTap(t);
                                                    case 2:
                                                        return e.BibiTapObserver.onDoubleTap(t);
                                                    case 3:
                                                        return e.BibiTapObserver.onTripleTap(t)
                                                    }
                                                }
                                                ), n.U2D)
                                            } else
                                                delete this.Floating
                                        }
                                        delete this.Touching
                                    }
                                },
                                onTap: function(t) {
                                    return W.dispatch(e, "bibi:tapped", t)
                                },
                                onDoubleTap: function(t) {
                                    return W.dispatch(e, "bibi:doubletapped", t)
                                },
                                onTripleTap: function(t) {
                                    return W.dispatch(e, "bibi:tripletapped", t)
                                }
                            },
                            e.addEventListener(W.pointerdown, (function(t) {
                                return e.BibiTapObserver.onPointerDown(t)
                            }
                            )),
                            e.addEventListener(W.pointerup, (function(t) {
                                return e.BibiTapObserver.onPointerUp(t)
                            }
                            ))
                        }
                        return e
                    },
                    setElementTapActions: function(e) {
                        var t = function() {
                            switch (e.Type) {
                            case "toggle":
                                return function(t) {
                                    if ("disabled" == e.UIState)
                                        return !1;
                                    H.setUIState(e, "default" == e.UIState ? "active" : "default")
                                }
                                ;
                            case "radio":
                                return function(t) {
                                    if ("disabled" == e.UIState)
                                        return !1;
                                    e.ButtonGroup.Buttons.forEach((function(t) {
                                        t != e && H.setUIState(t, "")
                                    }
                                    )),
                                    H.setUIState(e, "active")
                                }
                                ;
                            default:
                                return function(t) {
                                    if ("disabled" == e.UIState)
                                        return !1;
                                    H.setUIState(e, "active"),
                                    clearTimeout(e.Timer_deactivate),
                                    e.Timer_deactivate = setTimeout((function() {
                                        return H.setUIState(e, "disabled" == e.UIState ? "disabled" : "")
                                    }
                                    ), 200)
                                }
                            }
                        }();
                        return W.add(e, "bibi:tapped", (function(n) {
                            return e.isAvailable && !e.isAvailable(n) || "disabled" == e.UIState || "active" == e.UIState && "radio" == e.Type || (t(n),
                            e.hideHelp && e.hideHelp(),
                            e.note && setTimeout(e.note, 0)),
                            e
                        }
                        )),
                        e
                    },
                    PointerEventNames: U.TouchOS ? [["touchstart", "mousedown"], ["touchend", "mouseup"], ["touchmove", "mousemove"]] : void 0 !== document.onpointermove ? ["pointerdown", "pointerup", "pointermove"] : ["mousedown", "mouseup", "mousemove"],
                    PreviousPointerCoord: {
                        X: 0,
                        Y: 0
                    },
                    activateHTML: function(t) {
                        e.observeElementTap(t);
                        var n = e.PointerEventNames;
                        W.add(t, "bibi:tapped", (function(e) {
                            return W.dispatch("bibi:tapped", e)
                        }
                        )),
                        W.add(t, "bibi:doubletapped", (function(e) {
                            return W.dispatch("bibi:doubletapped", e)
                        }
                        )),
                        W.add(t, "bibi:tripletapped", (function(e) {
                            return W.dispatch("bibi:tripletapped", e)
                        }
                        )),
                        W.add(t, n[0], (function(e) {
                            return W.dispatch("bibi:downed-pointer", e)
                        }
                        ), W.Cpt1Psv0),
                        W.add(t, n[1], (function(e) {
                            return W.dispatch("bibi:upped-pointer", e)
                        }
                        ), W.Cpt1Psv0),
                        W.add(t, n[2], (function(t) {
                            var n = U.getBibiEventCoord(t)
                              , i = e.PreviousPointerCoord;
                            W.dispatch(i.X != n.X || i.Y != n.Y ? "bibi:moved-pointer" : "bibi:stopped-pointer", t),
                            e.PreviousPointerCoord = n,
                            t.stopPropagation()
                        }
                        ), W.Cpt1Psv0)
                    }
                }
                  , t = function(e) {
                    switch (F.RVM) {
                    case "horizontal":
                        if (e.Coord.Y > window.innerHeight - U.Scrollbars.Height)
                            return !1;
                        break;
                    case "vertical":
                        if (e.Coord.X > window.innerWidth - U.Scrollbars.Width)
                            return !1
                    }
                    if (e.Target.ownerDocument) {
                        if (U.isPointableContent(e.Target))
                            return !1;
                        if (H.Slider.ownerDocument && (e.Target == H.Slider || H.Slider.contains(e.Target)))
                            return !1
                    }
                    return !0
                };
                W.bind("bibi:readied", (function() {
                    return e.activateHTML(U.HTML)
                }
                )),
                W.bind("bibi:postprocessed-item", (function(t) {
                    return e.activateHTML(t.HTML)
                }
                )),
                W.add("bibi:tapped", (function(e) {
                    if (H.isPointerStealth())
                        return !1;
                    if (H.OpenedSubpanel)
                        return H.OpenedSubpanel.close() && !1;
                    var n = U.getBibiEvent(e);
                    return !!t(n) && ("center" == n.Division.X && "middle" == n.Division.Y ? W.dispatch("bibi:tapped-center", e) : W.dispatch("bibi:tapped-not-center", e))
                }
                )),
                W.add("bibi:doubletapped", (function(e) {
                    if (H.isPointerStealth() || !k.Opened)
                        return !1;
                    if (H.OpenedSubpanel)
                        return H.OpenedSubpanel.close() && !1;
                    var n = U.getBibiEvent(e);
                    return !!t(n) && ("center" == n.Division.X && "middle" == n.Division.Y ? W.dispatch("bibi:doubletapped-center", e) : W.dispatch("bibi:doubletapped-not-center", e))
                }
                )),
                W.add("bibi:tapped-center", (function() {
                    return H.Utilities.toggleGracefuly()
                }
                )),
                W.dispatch("bibi:created-touch-observer")
            }
        },
        H.FlickObserver = {
            create: function() {
                var e = H.FlickObserver = {
                    Moving: 0,
                    getDegree: function(e) {
                        return (t = 180 * Math.atan2(-1 * e.Y, e.X) / Math.PI) < 0 ? t + 360 : t;
                        var t
                    },
                    onTouchStart: function(t) {
                        if (k.Opened) {
                            if (e.LastEvent)
                                return e.onTouchEnd();
                            if (!H.Loupe.Transforming) {
                                e.LastEvent = t;
                                var n = U.getBibiEventCoord(t);
                                e.StartedAt = {
                                    X: n.X,
                                    Y: n.Y,
                                    Item: t.target.ownerDocument.body.Item || null,
                                    TimeStamp: t.timeStamp,
                                    ScrollLeft: _.Main.scrollLeft,
                                    ScrollTop: _.Main.scrollTop,
                                    OriginList: H.PageObserver.updateCurrent().List
                                },
                                W.add("bibi:moved-pointer", e.onTouchMove),
                                W.add("bibi:upped-pointer", e.onTouchEnd)
                            }
                        }
                    },
                    cancel: function() {
                        delete e.StartedAt,
                        delete e.LastEvent,
                        W.remove("bibi:moved-pointer", e.onTouchMove),
                        W.remove("bibi:upped-pointer", e.onTouchEnd),
                        e.Moving = 0
                    },
                    onTouchMove: function(t) {
                        if (H.ScrollObserver.breakCurrentScrolling(),
                        e.StartedAt) {
                            if (!e.Moving) {
                                var n = t.timeStamp - e.StartedAt.TimeStamp;
                                if (U.TouchOS || "mousemove" != t.type && "mouse" != t.pointerType) {
                                    if (n > 234)
                                        return e.cancel()
                                } else if (n < 234)
                                    return e.cancel();
                                e.StartedAt.TimeStamp = t.timeStamp
                            }
                            var i = U.getBibiEventCoord(t)
                              , r = {
                                X: i.X - e.StartedAt.X,
                                Y: i.Y - e.StartedAt.Y
                            };
                            if (++e.Moving <= 3) {
                                var o = e.getDegree(r);
                                e.StartedAt.LaunchingAxis = 315 <= o || o <= 45 || 135 <= o && o <= 225 ? "X" : 45 < o && o < 135 || 225 < o && o < 315 ? "Y" : ""
                            }
                            if (e.StartedAt.LaunchingAxis == z.A_AXIS_B)
                                ;
                            else {
                                if ("paged" != F.RVM && "touchmove" == t.type)
                                    return e.cancel();
                                F["content-draggable"]["paged" == F.RVM ? 0 : 1] && H.isScrollable() && (_.Main["scroll" + z.L_OOBL_L] = e.StartedAt["Scroll" + z.L_OOBL_L] + -1 * r[z.L_AXIS_L])
                            }
                            if (t.preventDefault(),
                            e.StartedAt.Item && (e.StartedAt.Item.HTML.classList.add("bibi-flick-hot"),
                            e.StartedAt.Item.contentWindow.getSelection().empty()),
                            e.LastEvent = t,
                            i[z.A_AXIS_L] <= 0 || i[z.A_AXIS_L] >= _.Stage[z.A_SIZE_L] || i[z.A_AXIS_B] <= 0 || i[z.A_AXIS_B] >= _.Stage[z.A_SIZE_B])
                                return e.onTouchEnd(t, {
                                    Swipe: !0
                                })
                        }
                    },
                    onTouchEnd: function(t, n) {
                        t || (t = e.LastEvent),
                        W.remove("bibi:moved-pointer", e.onTouchMove),
                        W.remove("bibi:upped-pointer", e.onTouchEnd),
                        e.Moving = 0;
                        var i = void 0
                          , r = {};
                        if (e.StartedAt) {
                            var o = U.getBibiEventCoord(t)
                              , a = {
                                X: o.X - e.StartedAt.X,
                                Y: o.Y - e.StartedAt.Y
                            };
                            e.StartedAt.Item && e.StartedAt.Item.HTML.classList.remove("bibi-flick-hot"),
                            H.Loupe.Transforming || (e.StartedAt.LaunchingAxis == z.A_AXIS_B && Math.abs(a[z.A_AXIS_B] / 100) >= 1 && (i = e.getOrthogonalTouchMoveFunction()),
                            !i && (Math.abs(a.X) >= 3 || Math.abs(a.Y) >= 3) && (t.preventDefault(),
                            r.Speed = Math.sqrt(Math.pow(a.X, 2) + Math.pow(a.Y, 2)) / (t.timeStamp - e.StartedAt.TimeStamp),
                            r.Deg = e.getDegree(a),
                            U.getViewportZooming() <= 1 && t.timeStamp - e.StartedAt.TimeStamp <= 300 ? (r.OriginList = e.StartedAt.OriginList,
                            i = n && n.Swipe ? e.onSwipe : e.onFlick) : H.isScrollable() && (i = e.onPanRelease))),
                            delete e.StartedAt
                        }
                        return delete e.LastEvent,
                        i ? i(t, r) : Promise.resolve()
                    },
                    onFlick: function(t, n) {
                        if ("paged" != F.RVM && !F["content-draggable"]["paged" == F.RVM ? 0 : 1])
                            return Promise.resolve();
                        if ("number" != typeof n.Deg)
                            return Promise.resolve();
                        var i = n.Deg
                          , r = 330 <= i || i <= 30 ? "left" : 60 <= i && i <= 120 ? "bottom" : 150 <= i && i <= 210 ? "right" : 240 <= i && i <= 300 ? "top" : ""
                          , o = z.d2d(r, "move" == H.orthogonal("touch-moves"));
                        if (o) {
                            if ("paged" == F.RVM || F.RVM != (/^[lr]/.test(r) ? "horizontal" : /^[tb]/.test(r) ? "vertical" : "")) {
                                var a = o > 0 ? n.OriginList.slice(-1)[0].Page.Index : n.OriginList[0].Page.Index;
                                return _.focusOn({
                                    Destination: {
                                        Page: _.Pages[a + o] ? _.Pages[a + o] : _.Pages[a]
                                    },
                                    Duration: H.isScrollable() && ("paged" != F.RVM || F["content-draggable"][0]) ? 123 : 0
                                })
                            }
                            return _.scrollBy({
                                Distance: o * (n.Speed ? 333 * sML.limitMinMax(.08 * Math.round(100 * n.Speed), .33, 10) / ("ttb" == F.SLD ? _.Stage.Height : _.Stage.Width) : 1),
                                Duration: 1234,
                                Cancelable: !0,
                                ease: function(e) {
                                    return -1 * (Math.pow(e - 1, 4) - 1)
                                }
                            })
                        }
                        return new Promise((function(t) {
                            e.getOrthogonalTouchMoveFunction()(),
                            t()
                        }
                        ))
                    },
                    onSwipe: function(t, n) {
                        return e.onFlick(t, n)
                    },
                    onPanRelease: function(e, t) {
                        if ("paged" != F.RVM || !F["content-draggable"][0])
                            return Promise.resolve();
                        var n = t.Deg
                          , i = 270 < n || n < 90 ? "left" : 90 < n && n < 270 ? "right" : ""
                          , r = z.d2d(i)
                          , o = H.PageObserver.updateCurrent().List;
                        return _.focusOn({
                            Destination: {
                                Page: r >= 0 ? o.slice(-1)[0].Page : o[0].Page
                            },
                            Duration: H.isScrollable() && F["content-draggable"][0] ? 123 : 0
                        })
                    },
                    getOrthogonalTouchMoveFunction: function() {
                        switch (H.orthogonal("touch-moves")) {
                        case "switch":
                            if (H.AxisSwitcher)
                                return H.AxisSwitcher.switchAxis;
                            break;
                        case "utilities":
                            return H.Utilities.toggleGracefuly
                        }
                    },
                    getCNPf: function(e) {
                        return e.ownerDocument == document ? "" : "bibi-"
                    },
                    activateElement: function(t) {
                        if (!t)
                            return !1;
                        t.addEventListener(W.pointerdown, e.onTouchStart, W.Cpt1Psv0);
                        var n = e.getCNPf(t);
                        t.ownerDocument.documentElement.classList.add(n + "flick-active"),
                        H.isScrollable() && t.ownerDocument.documentElement.classList.add(n + "flick-scrollable")
                    },
                    deactivateElement: function(t) {
                        if (!t)
                            return !1;
                        t.removeEventListener(W.pointerdown, e.onTouchStart, W.Cpt1Psv0);
                        var n = e.getCNPf(t);
                        t.ownerDocument.documentElement.classList.remove(n + "flick-active"),
                        t.ownerDocument.documentElement.classList.remove(n + "flick-scrollable")
                    }
                };
                e.activateElement(_.Main),
                W.add("bibi:loaded-item", (function(t) {
                    return e.activateElement(t.HTML)
                }
                )),
                W.dispatch("bibi:created-flick-observer")
            }
        },
        H.WheelObserver = {
            create: function() {
                var e = H.WheelObserver = {
                    TotalDelta: 0,
                    Turned: !1,
                    Wheels: [],
                    reset: function() {
                        e.TotalDelta = 0,
                        e.Progress = 0,
                        e.Turned = !1,
                        e.Wheels = []
                    },
                    reserveResetWith: function(t) {
                        clearTimeout(e.Timer_resetWheeling);
                        try {
                            t()
                        } catch (e) {}
                        e.Timer_resetWheeling = setTimeout(e.reset, 234)
                    },
                    careTurned: function() {
                        e.reserveResetWith((function() {
                            return e.Turned = !0
                        }
                        ))
                    },
                    heat: function() {
                        clearTimeout(e.Timer_coolDown),
                        e.Hot = !0,
                        e.Timer_coolDown = setTimeout((function() {
                            return e.Hot = !1
                        }
                        ), 234)
                    },
                    onWheel: function(t) {
                        var n = Math.abs(t.deltaX) > Math.abs(t.deltaY) ? "X" : "Y"
                          , i = {}
                          , r = e.Wheels
                          , o = r.length;
                        if (i.Axis = n,
                        i.Direction = "X" == n ? t.deltaX < 0 ? "left" : "right" : t.deltaY < 0 ? "top" : "bottom",
                        i.Distance = z.d2d(i.Direction, "Allow Orthogonal Direction"),
                        i.Delta = Math.abs(t["delta" + n]),
                        r[o - 1]) {
                            if (i.Axis != r[o - 1].Axis)
                                return e.careTurned();
                            i.Distance != r[o - 1].Distance ? (i.Accel = 1,
                            i.Wheeled = o >= 3 && r[o - 2].Distance != i.Distance && r[o - 3].Distance != i.Distance ? "reverse" : "") : i.Delta > r[o - 1].Delta ? (i.Accel = 1,
                            i.Wheeled = o >= 3 && -1 == r[o - 1].Accel && -1 == r[o - 2].Accel && -1 == r[o - 3].Accel ? "serial" : "") : i.Delta < r[o - 1].Delta ? (i.Accel = -1,
                            i.Wheeled = "") : (i.Accel = r[o - 1].Accel,
                            i.Wheeled = "")
                        } else
                            i.Accel = 1,
                            i.Wheeled = "start";
                        e.reserveResetWith((function() {
                            r.push(i),
                            o > 3 && r.shift(),
                            e.Progress = (e.TotalDelta += t["delta" + n]) / 3 / 100
                        }
                        ));
                        var a = n != z.A_AXIS_L ? H.orthogonal("wheelings") : "paged" == F.RVM ? "move" : e.OverlaidUIs.filter((function(e) {
                            return e.contains(t.target)
                        }
                        )).length ? "simulate" : "";
                        if (a && !e.Hot)
                            switch (a) {
                            case "simulate":
                                return e.scrollNatural(t, n);
                            case "across":
                                return e.scrollAcross(t, n);
                            case "move":
                                return e.move(i);
                            case "utilities":
                                return e.toggleUtilities(i);
                            case "switch":
                                return e.switchAxis(i)
                            }
                    },
                    scrollNatural: function(e, t) {
                        switch (t) {
                        case "X":
                            _.Main.scrollLeft += e.deltaX;
                            break;
                        case "Y":
                            _.Main.scrollTop += e.deltaY
                        }
                    },
                    scrollAcross: function(e, t) {
                        switch (t) {
                        case "X":
                            _.Main.scrollTop += e.deltaX;
                            break;
                        case "Y":
                            _.Main.scrollLeft += e.deltaY * ("rtl" == F.ARD ? -1 : 1)
                        }
                    },
                    move: function(t) {
                        t.Wheeled && (e.heat(),
                        _.moveBy({
                            Distance: t.Distance,
                            Duration: H.isScrollable() && F["content-draggable"][0] ? 123 : 0
                        }))
                    },
                    toggleUtilities: function(t) {
                        t.Wheeled && (e.heat(),
                        H.Utilities.toggleGracefuly())
                    },
                    switchAxis: function() {
                        !H.AxisSwitcher || Math.abs(e.Progress) < 1 || (e.heat(),
                        H.AxisSwitcher.switchAxis())
                    },
                    OverlaidUIs: []
                };
                document.addEventListener("wheel", (function(e) {
                    return W.dispatch("bibi:is-wheeling", e)
                }
                ), W.Cpt1Psv0),
                W.add("bibi:loaded-item", (function(e) {
                    return e.contentDocument.addEventListener("wheel", (function(e) {
                        return W.dispatch("bibi:is-wheeling", e)
                    }
                    ), W.Cpt1Psv0)
                }
                )),
                W.add("bibi:opened", (function() {
                    [H.Menu, H.Slider].forEach((function(t) {
                        t.ownerDocument && (t.addEventListener("wheel", (function(e) {
                            e.preventDefault(),
                            e.stopPropagation()
                        }
                        ), W.Cpt1Psv0),
                        e.OverlaidUIs.push(t))
                    }
                    )),
                    W.add("bibi:is-wheeling", e.onWheel),
                    U.HTML.classList.add("wheel-active")
                }
                )),
                W.dispatch("bibi:created-wheel-observer")
            }
        },
        H.PinchObserver = {
            create: function() {
                var e = H.PinchObserver = {
                    Pinching: 0,
                    getEventCoords: function(e) {
                        var t = e.touches[0]
                          , n = e.touches[1]
                          , i = (e.target.ownerDocument,
                        t.screenX)
                          , r = t.screenY;
                        return {
                            Center: {
                                X: (i + n.screenX) / 2,
                                Y: (r + n.screenY) / 2
                            },
                            Distance: Math.sqrt(Math.pow(n.screenX - t.screenX, 2) + Math.pow(n.screenY - t.screenY, 2))
                        }
                    },
                    onTouchStart: function(t) {
                        k.Opened && 2 == t.touches.length && (U.HTML.classList.add("pinching"),
                        e.Hot = !0,
                        t.preventDefault(),
                        t.stopPropagation(),
                        e.PinchStart = {
                            Scale: H.Loupe.CurrentTransformation.Scale,
                            Coords: e.getEventCoords(t)
                        })
                    },
                    onTouchMove: function(t) {
                        if (2 == t.touches.length && e.PinchStart) {
                            t.preventDefault(),
                            t.stopPropagation();
                            var n = e.getEventCoords(t).Distance / e.PinchStart.Coords.Distance;
                            clearTimeout(e.Timer_TransitionRestore),
                            sML.style(_.Main, {
                                transition: "none"
                            }),
                            H.Loupe.scale(e.PinchStart.Scale * n, {
                                Center: e.PinchStart.Coords.Center,
                                Stepless: !0
                            }),
                            e.Timer_TransitionRestore = setTimeout((function() {
                                return sML.style(_.Main, {
                                    transition: ""
                                })
                            }
                            ), 234)
                        }
                    },
                    onTouchEnd: function(t, n) {
                        e.Pinching = 0,
                        delete e.LastScale,
                        delete e.PinchStart,
                        delete e.Hot,
                        U.HTML.classList.remove("pinching")
                    },
                    getCNPf: function(e) {
                        return e == document ? "" : "bibi-"
                    },
                    activateElement: function(t) {
                        if (!t)
                            return !1;
                        t.addEventListener("touchstart", e.onTouchStart, W.Cpt1Psv0),
                        t.addEventListener("touchmove", e.onTouchMove, W.Cpt1Psv0),
                        t.addEventListener("touchend", e.onTouchEnd, W.Cpt1Psv0),
                        t.ownerDocument.documentElement.classList.add(e.getCNPf(t) + "pinch-active")
                    },
                    deactivateElement: function(t) {
                        if (!t)
                            return !1;
                        t.removeEventListener("touchstart", e.onTouchStart, W.Cpt1Psv0),
                        t.removeEventListener("touchmove", e.onTouchMove, W.Cpt1Psv0),
                        t.removeEventListener("touchend", e.onTouchEnd, W.Cpt1Psv0),
                        t.ownerDocument.documentElement.classList.remove(e.getCNPf(t) + "pinch-active")
                    }
                };
                e.activateElement(_.Main),
                W.add("bibi:loaded-item", (function(t) {
                    return e.activateElement(t.HTML)
                }
                )),
                W.dispatch("bibi:created-pinch-observer")
            }
        },
        H.KeyObserver = {
            create: function() {
                if (F["use-keys"]) {
                    var e = H.KeyObserver = {
                        ActiveKeys: {},
                        KeyCodes: {
                            keydown: {},
                            keyup: {},
                            keypress: {}
                        },
                        updateKeyCodes: function(t, n) {
                            "function" != typeof t.join && (t = [t]),
                            "function" == typeof n && (n = n()),
                            t.forEach((function(t) {
                                return e.KeyCodes[t] = sML.edit(e.KeyCodes[t], n)
                            }
                            ))
                        },
                        KeyParameters: {},
                        initializeKeyParameters: function() {
                            var t = {
                                End: "foot",
                                Home: "head"
                            };
                            for (var n in t)
                                t[n.toUpperCase()] = "head" == t[n] ? "foot" : "foot" == t[n] ? "head" : t[n];
                            e.KeyParameters = t
                        },
                        updateKeyParameters: function() {
                            var t = H.orthogonal("arrow-keys")
                              , n = function() {
                                switch (F.ARA) {
                                case "horizontal":
                                    return Object.assign({
                                        "Left Arrow": z.d2d("left"),
                                        "Right Arrow": z.d2d("right")
                                    }, "move" == t ? {
                                        "Up Arrow": z.d2d("top", 9),
                                        "Down Arrow": z.d2d("bottom", 9)
                                    } : {
                                        "Up Arrow": t,
                                        "Down Arrow": t
                                    });
                                case "vertical":
                                    return Object.assign({
                                        "Up Arrow": z.d2d("top"),
                                        "Down Arrow": z.d2d("bottom")
                                    }, "move" == t ? {
                                        "Left Arrow": z.d2d("left", 9),
                                        "Right Arrow": z.d2d("right", 9)
                                    } : {
                                        "Left Arrow": t,
                                        "Right Arrow": t
                                    })
                                }
                            }();
                            for (var i in n)
                                n[i.toUpperCase()] = -1 == n[i] ? "head" : 1 == n[i] ? "foot" : n[i];
                            Object.assign(e.KeyParameters, n)
                        },
                        getBibiKeyName: function(t) {
                            var n = e.KeyCodes[t.type][t.keyCode];
                            return n || ""
                        },
                        onEvent: function(t) {
                            return !!k.Opened && (t.BibiKeyName = e.getBibiKeyName(t),
                            t.BibiModifierKeys = [],
                            t.shiftKey && t.BibiModifierKeys.push("Shift"),
                            t.ctrlKey && t.BibiModifierKeys.push("Control"),
                            t.altKey && t.BibiModifierKeys.push("Alt"),
                            t.metaKey && t.BibiModifierKeys.push("Meta"),
                            t.BibiKeyName && t.preventDefault(),
                            !0)
                        },
                        onKeyDown: function(t) {
                            if (!e.onEvent(t))
                                return !1;
                            t.BibiKeyName && (e.ActiveKeys[t.BibiKeyName] ? W.dispatch("bibi:is-holding-key", t) : e.ActiveKeys[t.BibiKeyName] = Date.now()),
                            W.dispatch("bibi:downed-key", t)
                        },
                        onKeyUp: function(t) {
                            if (!e.onEvent(t))
                                return !1;
                            e.ActiveKeys[t.BibiKeyName] && Date.now() - e.ActiveKeys[t.BibiKeyName] < 300 && W.dispatch("bibi:touched-key", t),
                            t.BibiKeyName && e.ActiveKeys[t.BibiKeyName] && delete e.ActiveKeys[t.BibiKeyName],
                            W.dispatch("bibi:upped-key", t)
                        },
                        onKeyPress: function(t) {
                            if (!e.onEvent(t))
                                return !1;
                            W.dispatch("bibi:pressed-key", t)
                        },
                        observe: function(t) {
                            ["keydown", "keyup", "keypress"].forEach((function(n) {
                                return t.addEventListener(n, e["onKey" + sML.capitalise(n.replace("key", ""))], !1)
                            }
                            ))
                        },
                        onKeyTouch: function(t) {
                            if (!t.BibiKeyName)
                                return !1;
                            var n = e.KeyParameters[t.shiftKey ? t.BibiKeyName.toUpperCase() : t.BibiKeyName];
                            if (!n)
                                return !1;
                            switch (t.preventDefault(),
                            I(n)) {
                            case "number":
                                H.Flipper.isAbleToFlip(n) && (H.Arrows && W.dispatch(H.Arrows[n], "bibi:tapped", t),
                                H.Flipper.flip(n));
                                break;
                            case "string":
                                switch (n) {
                                case "head":
                                case "foot":
                                    return _.focusOn({
                                        Destination: n,
                                        Duration: 0
                                    });
                                case "utilities":
                                    return H.Utilities.toggleGracefuly();
                                case "switch":
                                    return !!H.AxisSwitcher && H.AxisSwitcher.switchAxis()
                                }
                            }
                        }
                    };
                    e.updateKeyCodes(["keydown", "keyup", "keypress"], {
                        32: "Space"
                    }),
                    e.updateKeyCodes(["keydown", "keyup"], {
                        33: "Page Up",
                        34: "Page Down",
                        35: "End",
                        36: "Home",
                        37: "Left Arrow",
                        38: "Up Arrow",
                        39: "Right Arrow",
                        40: "Down Arrow"
                    }),
                    W.add("bibi:postprocessed-item", (function(t) {
                        return !t.IsPlaceholder && e.observe(t.contentDocument)
                    }
                    )),
                    W.add("bibi:opened", (function() {
                        e.initializeKeyParameters(),
                        e.updateKeyParameters(),
                        W.add("bibi:changed-view", (function() {
                            return e.updateKeyParameters()
                        }
                        )),
                        e.observe(document),
                        W.add(["bibi:touched-key", "bibi:is-holding-key"], (function(t) {
                            return e.onKeyTouch(t)
                        }
                        ))
                    }
                    )),
                    W.dispatch("bibi:created-key-observer")
                }
            }
        },
        H.EdgeObserver = {
            create: function() {
                var e = H.EdgeObserver = {};
                W.add("bibi:opened", (function() {
                    W.add(["bibi:tapped-not-center", "bibi:doubletapped-not-center"], (function(e) {
                        if (H.isPointerStealth())
                            return !1;
                        var t = U.getBibiEvent(e)
                          , n = H.Flipper.getDirection(t.Division)
                          , i = H.orthogonal("edges")
                          , r = z.d2d(n, "move" == i);
                        if (r)
                            H.Arrows && H.Arrows.areAvailable(t) && W.dispatch(H.Arrows[r], "bibi:tapped", e),
                            H.Flipper.isAbleToFlip(r) && H.Flipper.flip(r);
                        else if ("string" == typeof z.DDD[n])
                            switch (i) {
                            case "utilities":
                                H.Utilities.toggleGracefuly();
                                break;
                            case "switch":
                                H.AxisSwitcher && H.AxisSwitcher.switchAxis()
                            }
                    }
                    )),
                    U.TouchOS || (W.add("bibi:moved-pointer", (function(t) {
                        if (H.isPointerStealth())
                            return !1;
                        var n = U.getBibiEvent(t);
                        if (H.Arrows.areAvailable(n)) {
                            var i = H.Flipper.getDirection(n.Division)
                              , r = H.orthogonal("edges")
                              , o = z.d2d(i, "move" == r);
                            if (o && H.Flipper.isAbleToFlip(o)) {
                                if (e.Hovering = !0,
                                H.Arrows) {
                                    var a = H.Arrows[o];
                                    W.dispatch(a, "bibi:hovered", t),
                                    W.dispatch(a.Pair, "bibi:unhovered", t)
                                }
                                var s = n.Target.ownerDocument.documentElement;
                                return void (e.HoveringHTML != s && (e.HoveringHTML && e.HoveringHTML.removeAttribute("data-bibi-cursor"),
                                (e.HoveringHTML = s).setAttribute("data-bibi-cursor", i)))
                            }
                        }
                        e.Hovering && (e.Hovering = !1,
                        H.Arrows && W.dispatch([H.Arrows.Back, H.Arrows.Forward], "bibi:unhovered", t),
                        e.HoveringHTML && (e.HoveringHTML.removeAttribute("data-bibi-cursor"),
                        e.HoveringHTML = null))
                    }
                    )),
                    sML.forEach(U.Body.querySelectorAll("img"))((function(e) {
                        return e.addEventListener(W.pointerdown, U.preventDefault)
                    }
                    )))
                }
                )),
                U.TouchOS || W.add("bibi:loaded-item", (function(e) {
                    return sML.forEach(e.Body.querySelectorAll("img"))((function(e) {
                        return e.addEventListener(W.pointerdown, U.preventDefault)
                    }
                    ))
                }
                )),
                W.dispatch("bibi:created-edge-observer")
            }
        },
        H.Notifier = {
            create: function() {
                var e = H.Notifier = U.Body.appendChild(sML.create("div", {
                    id: "bibi-notifier",
                    show: function(t, n) {
                        clearTimeout(e.Timer_hide),
                        e.P.className = n ? "error" : "",
                        e.P.innerHTML = t,
                        U.HTML.classList.add("notifier-shown"),
                        k.Opened && !n && e.addEventListener(U.TouchOS ? W.pointerdown : W.pointerover, e.hide)
                    },
                    hide: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        clearTimeout(e.Timer_hide),
                        e.Timer_hide = setTimeout((function() {
                            k.Opened && e.removeEventListener(U.TouchOS ? W.pointerdown : W.pointerover, e.hide),
                            U.HTML.classList.remove("notifier-shown")
                        }
                        ), t)
                    },
                    note: function(t, n, i) {
                        if (!t)
                            return e.hide();
                        e.show(t, i),
                        void 0 === n && (n = U.Busy && !k.Opened ? 8888 : 2222),
                        "number" == typeof n && e.hide(n)
                    }
                }));
                e.P = e.appendChild(document.createElement("p")),
                H.note = e.note,
                W.dispatch("bibi:created-notifier")
            }
        },
        H.note = function() {
            return !1
        }
        ,
        H.Veil = {
            create: function() {
                var e = H.Veil = H.setToggleAction(U.Body.appendChild(sML.create("div", {
                    id: "bibi-veil"
                })), {
                    onopened: function() {
                        return U.HTML.classList.add("veil-opened"),
                        e.classList.remove("closed")
                    },
                    onclosed: function() {
                        return e.classList.add("closed"),
                        U.HTML.classList.remove("veil-opened")
                    }
                });
                ["touchstart", "pointerdown", "mousedown", "click"].forEach((function(t) {
                    return e.addEventListener(t, (function(e) {
                        return e.stopPropagation()
                    }
                    ), W.Cpt0Psv0)
                }
                )),
                e.open();
                var t = (U.TouchOS ? "Tap" : "Click") + " to Open"
                  , n = e.PlayButton = e.appendChild(sML.create("p", {
                    id: "bibi-veil-play",
                    title: t,
                    innerHTML: '<span class="non-visual">'.concat(t, "</span>"),
                    play: function(e) {
                        return e.stopPropagation(),
                        k.play(),
                        W.dispatch("bibi:played:by-button")
                    },
                    hide: function() {
                        return sML.style(n, {
                            opacity: 0,
                            cursor: "default"
                        }).then((function(t) {
                            return e.removeChild(n)
                        }
                        ))
                    },
                    on: {
                        click: function(e) {
                            return n.play(e)
                        }
                    }
                }));
                W.add("bibi:played", (function() {
                    return n.hide()
                }
                )),
                e.byebye = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e.innerHTML = "",
                    e.ByeBye = e.appendChild(sML.create("p", {
                        id: "bibi-veil-byebye"
                    })),
                    ["en", "ja"].forEach((function(n) {
                        return e.ByeBye.innerHTML += '<span lang="'.concat(n, '">').concat(t[n], "</span>")
                    }
                    )),
                    U.HTML.classList.remove("welcome"),
                    e.open(),
                    t.en ? t.en.replace(/<[^>]*>/g, "") : ""
                }
                ,
                e.Cover = e.appendChild(sML.create("div", {
                    id: "bibi-veil-cover"
                })),
                e.Cover.Info = e.Cover.appendChild(sML.create("p", {
                    id: "bibi-veil-cover-info"
                })),
                W.dispatch("bibi:created-veil")
            }
        },
        H.Catcher = {
            create: function() {
                if (!F["book-data"] && !F.book && F["accept-local-file"]) {
                    var e = H.Catcher = U.Body.appendChild(sML.create("div", {
                        id: "bibi-catcher"
                    }));
                    if (e.insertAdjacentHTML("afterbegin", H.distillLabels.distillLanguage({
                        default: ['<div class="pgroup" lang="en">', "<p><strong>Pass Me Your EPUB File!</strong></p>", "<p><em>You Can Open Your Own EPUB.</em></p>", "<p><span>Please ".concat(U.TouchOS ? "Tap Screen" : "Drag & Drop It Here. <br />Or Click Screen", " and Choose It.</span></p>"), "<p><small>(Open in Your Device without Uploading)</small></p>", "</div>"].join(""),
                        ja: ['<div class="pgroup" lang="ja">', "<p><strong>EPUBファイルをここにください！</strong></p>", "<p><em>お持ちの EPUB ファイルを<br />開くことができます。</em></p>", "<p><span>".concat(U.TouchOS ? "画面をタップ" : "ここにドラッグ＆ドロップするか、<br />画面をクリック", "して選択してください。</span></p>"), "<p><small>（外部に送信されず、この端末の中で開きます）</small></p>", "</div>"].join("")
                    })[U.Language]),
                    e.title = e.querySelector("span").innerHTML.replace(/<br( ?\/)?>/g, "\n").replace(/<[^>]+>/g, "").trim(),
                    e.Input = e.appendChild(sML.create("input", {
                        type: "file"
                    })),
                    !F["extract-if-necessary"].includes("*") && F["extract-if-necessary"].length) {
                        var t = [];
                        F["extract-if-necessary"].includes(".epub") && t.push("application/epub+zip"),
                        F["extract-if-necessary"].includes(".zip") && (t.push("application/zip"),
                        t.push("application/x-zip"),
                        t.push("application/x-zip-compressed")),
                        t.length && e.Input.setAttribute("accept", t.join(","))
                    }
                    e.Input.addEventListener("change", (function(e) {
                        var t = {};
                        try {
                            t = e.target.files[0]
                        } catch (e) {}
                        x.getBookData.resolve({
                            BookData: t
                        })
                    }
                    )),
                    e.addEventListener("click", (function(t) {
                        return e.Input.click(t)
                    }
                    )),
                    U.TouchOS || (e.addEventListener("dragenter", (function(e) {
                        e.preventDefault(),
                        U.HTML.classList.add("dragenter")
                    }
                    ), 1),
                    e.addEventListener("dragover", (function(e) {
                        e.preventDefault()
                    }
                    ), 1),
                    e.addEventListener("dragleave", (function(e) {
                        e.preventDefault(),
                        U.HTML.classList.remove("dragenter")
                    }
                    ), 1),
                    e.addEventListener("drop", (function(e) {
                        e.preventDefault();
                        var t = {};
                        try {
                            t = e.dataTransfer.files[0]
                        } catch (e) {}
                        x.getBookData.resolve({
                            BookData: t
                        })
                    }
                    ), 1)),
                    e.appendChild(H.getBookIcon()),
                    W.dispatch("bibi:created-catcher")
                }
            }
        },
        H.Menu = {
            create: function() {
                F["use-menubar"] || U.HTML.classList.add("without-menubar");
                var e = H.Menu = U.Body.appendChild(sML.create("div", {
                    id: "bibi-menu"
                }, H.Menu));
                delete e.create,
                H.TouchObserver.setElementHoverActions(e),
                H.setToggleAction(e, {
                    onopened: function() {
                        U.HTML.classList.add("menu-opened"),
                        W.dispatch("bibi:opened-menu")
                    },
                    onclosed: function() {
                        U.HTML.classList.remove("menu-opened"),
                        W.dispatch("bibi:closed-menu")
                    }
                }),
                W.add("bibi:commands:open-menu", e.open),
                W.add("bibi:commands:close-menu", e.close),
                W.add("bibi:commands:toggle-menu", e.toggle),
                W.add("bibi:opens-utilities", (function(e) {
                    return W.dispatch("bibi:commands:open-menu", e)
                }
                )),
                W.add("bibi:closes-utilities", (function(e) {
                    return W.dispatch("bibi:commands:close-menu", e)
                }
                )),
                W.add("bibi:opened", e.close),
                U.TouchOS || W.add("bibi:opened", (function() {
                    W.add("bibi:moved-pointer", (function(t) {
                        if (H.isPointerStealth())
                            return !1;
                        var n = U.getBibiEvent(t);
                        clearTimeout(e.Timer_close),
                        "top" == n.Division.Y ? W.dispatch(e, "bibi:hovered", t) : e.Hover && (e.Timer_close = setTimeout((function() {
                            return W.dispatch(e, "bibi:unhovered", t)
                        }
                        ), 123))
                    }
                    ))
                }
                )),
                e.L = e.appendChild(sML.create("div", {
                    id: "bibi-menu-l"
                })),
                e.R = e.appendChild(sML.create("div", {
                    id: "bibi-menu-r"
                })),
                [e.L, e.R].forEach((function(e) {
                    e.ButtonGroups = [],
                    e.addButtonGroup = function(e) {
                        var t = H.createButtonGroup(e);
                        return t ? (this.ButtonGroups.push(t),
                        this.appendChild(t)) : null
                    }
                }
                ));
                var t = "html.appearance-vertical:not(.veil-opened):not(.slider-opened)"
                  , n = " div#bibi-menu";
                sML.appendCSSRule(t + n, "width: calc(100% - " + U.Scrollbars.Width + "px);"),
                sML.appendCSSRule([t + ".panel-opened" + n, t + ".subpanel-opened" + n].join(", "), "padding-right: " + U.Scrollbars.Width + "px;"),
                H.OpenedSubpanel = null,
                H.Subpanels = [],
                e.Config.create(),
                W.dispatch("bibi:created-menu")
            }
        },
        H.Menu.Config = {
            create: function() {
                var e = H.Menu
                  , t = [];
                if (F["fix-reader-view-mode"] || t.push("ViewModeSection"),
                U.Embedded && t.push("NewWindowButton"),
                U.FullscreenTarget && !U.TouchOS && t.push("FullscreenButton"),
                F["website-href"] && /^https?:\/\/[^\/]+/.test(F["website-href"]) && F["website-name-in-menu"] && t.push("WebsiteLink"),
                F["remove-bibi-website-link"] || t.push("BibiWebsiteLink"),
                t.length) {
                    var n = e.Config = sML.applyRtL(H.createSubpanel({
                        id: "bibi-subpanel_config"
                    }), e.Config);
                    delete n.create;
                    n.bindOpener(e.R.addButtonGroup({
                        Sticky: !0
                    }).addButton({
                        Type: "toggle",
                        Labels: {
                            default: {
                                default: "Configure Setting",
                                ja: "設定を変更"
                            },
                            active: {
                                default: "Close Setting-Menu",
                                ja: "設定メニューを閉じる"
                            }
                        },
                        Help: !0,
                        Icon: '<span class="bibi-icon bibi-icon-config"></span>'
                    }));
                    t.includes("ViewModeSection") ? n.ViewModeSection.create() : delete n.ViewModeSection,
                    t.includes("NewWindowButton") || t.includes("FullscreenButton") ? n.WindowSection.create(t) : delete n.WindowSection,
                    t.includes("WebsiteLink") || t.includes("BibiWebsiteLink") ? n.LinkageSection.create(t) : delete n.LinkageSection,
                    W.dispatch("bibi:created-config")
                } else
                    delete H.Menu.Config
            }
        },
        H.Menu.Config.ViewModeSection = {
            create: function() {
                var e, t, n = H.Menu.Config, i = (e = '<span class="bibi-shape bibi-shape-spread">'.concat((t = '<span class="bibi-shape bibi-shape-item"></span>') + t, "</span>")) + e + e, r = n.ViewModeSection = n.addSection({
                    Labels: {
                        default: {
                            default: "View Mode",
                            ja: "閲覧モード"
                        }
                    },
                    ButtonGroups: [{
                        ButtonType: "radio",
                        Buttons: [{
                            Mode: "paged",
                            Labels: {
                                default: {
                                    default: "Spread / Page",
                                    ja: "見開き／ページ"
                                }
                            },
                            Icon: '<span class="bibi-icon bibi-icon-view bibi-icon-view-paged"><span class="bibi-shape bibi-shape-spreads bibi-shape-spreads-paged">'.concat(i, "</span></span>")
                        }, {
                            Mode: "horizontal",
                            Labels: {
                                default: {
                                    default: '<span class="non-visual-in-label">⇄ </span>Horizontal Scroll',
                                    ja: '<span class="non-visual-in-label">⇄ </span>横スクロール'
                                }
                            },
                            Icon: '<span class="bibi-icon bibi-icon-view bibi-icon-view-horizontal"><span class="bibi-shape bibi-shape-spreads bibi-shape-spreads-horizontal">'.concat(i, "</span></span>")
                        }, {
                            Mode: "vertical",
                            Labels: {
                                default: {
                                    default: '<span class="non-visual-in-label">⇅ </span>Vertical Scroll',
                                    ja: '<span class="non-visual-in-label">⇅ </span>縦スクロール'
                                }
                            },
                            Icon: '<span class="bibi-icon bibi-icon-view bibi-icon-view-vertical"><span class="bibi-shape bibi-shape-spreads bibi-shape-spreads-vertical">'.concat(i, "</span></span>")
                        }].map((function(e) {
                            return sML.edit(e, {
                                Notes: !0,
                                action: function() {
                                    return _.changeView({
                                        Mode: e.Mode,
                                        NoNotification: !0
                                    })
                                }
                            })
                        }
                        ))
                    }, {
                        Buttons: [{
                            Name: "full-breadth-layout-in-scroll",
                            Type: "toggle",
                            Notes: !1,
                            Labels: {
                                default: {
                                    default: "Full Width for Each Page <small>(in Scrolling Mode)</small>",
                                    ja: "スクロール表示で各ページを幅一杯に</small>"
                                }
                            },
                            Icon: '<span class="bibi-icon bibi-icon-full-breadth-layout"></span>',
                            action: function() {
                                var e = "active" == this.UIState;
                                F.update({
                                    "full-breadth-layout-in-scroll": e
                                }),
                                e ? U.HTML.classList.add("book-full-breadth") : U.HTML.classList.remove("book-full-breadth"),
                                "horizontal" != F.RVM && "vertical" != F.RVM || _.changeView({
                                    Mode: F.RVM,
                                    Force: !0
                                }),
                                F["keep-settings"] && U.Biscuits && U.Biscuits.memorize("Book", {
                                    FBL: F["full-breadth-layout-in-scroll"]
                                })
                            }
                        }]
                    }]
                });
                W.add("bibi:updated-settings", (function() {
                    r.ButtonGroups[0].Buttons.forEach((function(e) {
                        return H.setUIState(e, e.Mode == F.RVM ? "active" : "default")
                    }
                    ))
                }
                )),
                W.add("bibi:updated-settings", (function() {
                    var e = r.ButtonGroups[r.ButtonGroups.length - 1];
                    e.style.display = "pre-paginated" == F.BRL ? "" : "none",
                    e.Buttons.forEach((function(e) {
                        return H.setUIState(e, F[e.Name] ? "active" : "default")
                    }
                    ))
                }
                ))
            }
        },
        H.Menu.Config.WindowSection = {
            create: function(e) {
                var t = H.Menu.Config
                  , n = [];
                (e.includes("NewWindowButton") && n.push({
                    Type: "link",
                    Labels: {
                        default: {
                            default: "Open in New Window",
                            ja: "あたらしいウィンドウで開く"
                        }
                    },
                    Icon: '<span class="bibi-icon bibi-icon-open-newwindow"></span>',
                    id: "bibi-button-open-newwindow",
                    href: U.RequestedURL,
                    target: "_blank"
                }),
                e.includes("FullscreenButton") && (n.push({
                    Type: "toggle",
                    Labels: {
                        default: {
                            default: "Enter Fullscreen",
                            ja: "フルスクリーンモード"
                        },
                        active: {
                            default: "Exit Fullscreen",
                            ja: "フルスクリーンモード解除"
                        }
                    },
                    Icon: '<span class="bibi-icon bibi-icon-toggle-fullscreen"></span>',
                    id: "bibi-button-toggle-fullscreen",
                    action: function() {
                        U.Fullscreen ? U.FullscreenTarget.ownerDocument.exitFullscreen() : U.FullscreenTarget.requestFullscreen(),
                        t.close()
                    }
                }),
                U.FullscreenTarget.ownerDocument.addEventListener("fullscreenchange", (function() {
                    U.FullscreenButton || (U.FullscreenButton = document.getElementById("bibi-button-toggle-fullscreen")),
                    this.fullscreenElement == U.FullscreenTarget ? (U.Fullscreen = !0,
                    U.HTML.classList.add("fullscreen"),
                    H.setUIState(U.FullscreenButton, "active")) : U.Fullscreen && (U.Fullscreen = !1,
                    U.HTML.classList.remove("fullscreen"),
                    H.setUIState(U.FullscreenButton, "default"))
                }
                ))),
                n.length) && (t.WindowSection = t.addSection({
                    Labels: {
                        default: {
                            default: "Window Control",
                            ja: "ウィンドウ制御"
                        }
                    }
                })).addButtonGroup({
                    Buttons: n
                })
            }
        },
        H.Menu.Config.LinkageSection = {
            create: function(e) {
                var t = H.Menu.Config
                  , n = [];
                (e.includes("WebsiteLink") && n.push({
                    Type: "link",
                    Labels: {
                        default: {
                            default: F["website-name-in-menu"].replace(/&/gi, "&amp;").replace(/</gi, "&lt;").replace(/>/gi, "&gt;")
                        }
                    },
                    Icon: '<span class="bibi-icon bibi-icon-open-newwindow"></span>',
                    href: F["website-href"],
                    target: "_blank"
                }),
                e.includes("BibiWebsiteLink") && n.push({
                    Type: "link",
                    Labels: {
                        default: {
                            default: "Bibi | Official Website"
                        }
                    },
                    Icon: '<span class="bibi-icon bibi-icon-open-newwindow"></span>',
                    href: x.href,
                    target: "_blank"
                }),
                n.length) && (t.LinkageSection = t.addSection({
                    Labels: {
                        default: {
                            default: "Link".concat(n.length > 1 ? "s" : ""),
                            ja: "リンク"
                        }
                    }
                })).addButtonGroup({
                    Buttons: n
                })
            }
        },
        H.Panel = {
            create: function() {
                var e = H.Panel = U.Body.appendChild(sML.create("div", {
                    id: "bibi-panel"
                }));
                H.setToggleAction(e, {
                    onopened: function() {
                        U.HTML.classList.add("panel-opened"),
                        W.dispatch("bibi:opened-panel")
                    },
                    onclosed: function() {
                        U.HTML.classList.remove("panel-opened"),
                        W.dispatch("bibi:closed-panel")
                    }
                }),
                W.add("bibi:commands:open-panel", e.open),
                W.add("bibi:commands:close-panel", e.close),
                W.add("bibi:commands:toggle-panel", e.toggle),
                W.add("bibi:closes-utilities", e.close),
                H.setFeedback(e, {
                    StopPropagation: !0
                }),
                W.add(e, "bibi:tapped", (function() {
                    return W.dispatch("bibi:commands:toggle-panel")
                }
                )),
                e.BookInfo = e.appendChild(sML.create("div", {
                    id: "bibi-panel-bookinfo"
                })),
                e.BookInfo.Cover = e.BookInfo.appendChild(sML.create("div", {
                    id: "bibi-panel-bookinfo-cover"
                })),
                e.BookInfo.Cover.Info = e.BookInfo.Cover.appendChild(sML.create("p", {
                    id: "bibi-panel-bookinfo-cover-info"
                }));
                var t = e.Opener = H.Menu.L.addButtonGroup({
                    Sticky: !0
                }).addButton({
                    Type: "toggle",
                    Labels: {
                        default: {
                            default: "Open Index",
                            ja: "目次を開く"
                        },
                        active: {
                            default: "Close Index",
                            ja: "目次を閉じる"
                        }
                    },
                    Help: !0,
                    Icon: '<span class="bibi-icon bibi-icon-toggle-panel">'.concat(function(e) {
                        for (var t = 1; t <= 6; t++)
                            e += "<span></span>";
                        return e
                    }(""), "</span>"),
                    action: function() {
                        return e.toggle()
                    }
                });
                W.add("bibi:opened-panel", (function() {
                    return H.setUIState(t, "active")
                }
                )),
                W.add("bibi:closed-panel", (function() {
                    return H.setUIState(t, "")
                }
                )),
                W.add("bibi:started", (function() {
                    return sML.style(t, {
                        display: "block"
                    })
                }
                )),
                "panel" == F["on-doubletap"] && W.add("bibi:doubletapped", (function() {
                    return e.toggle()
                }
                )),
                "panel" == F["on-tripletap"] && W.add("bibi:tripletapped", (function() {
                    return e.toggle()
                }
                )),
                W.dispatch("bibi:created-panel")
            }
        },
        H.Help = {
            create: function() {
                var e = H.Help = U.Body.appendChild(sML.create("div", {
                    id: "bibi-help"
                }));
                e.Message = e.appendChild(sML.create("p", {
                    className: "hidden",
                    id: "bibi-help-message"
                })),
                e.show = function(t) {
                    clearTimeout(e.Timer_deactivate1),
                    clearTimeout(e.Timer_deactivate2),
                    e.classList.add("active"),
                    e.Message.innerHTML = t,
                    setTimeout((function() {
                        return e.classList.add("shown")
                    }
                    ), 0)
                }
                ,
                e.hide = function() {
                    e.Timer_deactivate1 = setTimeout((function() {
                        e.classList.remove("shown"),
                        e.Timer_deactivate2 = setTimeout((function() {
                            return e.classList.remove("active")
                        }
                        ), 200)
                    }
                    ), 100)
                }
            }
        },
        H.PoweredBy = {
            create: function() {
                H.PoweredBy = U.Body.appendChild(sML.create("div", {
                    id: "bibi-poweredby",
                    innerHTML: '<p><a href="'.concat(x.href, '" target="_blank" title="Bibi | Official Website">Bibi</a></p>')
                }))
            }
        },
        H.FontSizeChanger = {
            create: function() {
                var e = H.FontSizeChanger = {};
                if (("number" != typeof F["font-size-scale-per-step"] || F["font-size-scale-per-step"] <= 1) && (F["font-size-scale-per-step"] = 1.25),
                F["use-font-size-changer"] && F["keep-settings"] && U.Biscuits) {
                    var t = U.Biscuits.remember("Bibi");
                    t && t.FontSize && null != t.FontSize.Step && (e.Step = 1 * t.FontSize.Step)
                }
                if (("number" != typeof e.Step || e.Step < -2 || 2 < e.Step) && (e.Step = 0),
                W.bind("bibi:postprocessed-item", (function(t) {
                    if ("pre-paginated" == t["rendition:layout"])
                        return !1;
                    if (t.changeFontSize = function(e) {
                        t.FontSizeStyleRule && sML.deleteCSSRule(t.contentDocument, t.FontSizeStyleRule),
                        t.FontSizeStyleRule = sML.appendCSSRule(t.contentDocument, "html", "font-size: " + e + "px !important;")
                    }
                    ,
                    t.changeFontSizeStep = function(e) {
                        return t.changeFontSize(t.FontSize.Base * Math.pow(F["font-size-scale-per-step"], e))
                    }
                    ,
                    t.FontSize = {
                        Default: 1 * getComputedStyle(t.HTML).fontSize.replace(/[^\d]*$/, "")
                    },
                    t.FontSize.Base = t.FontSize.Default,
                    t.Source.Preprocessed && (sML.UA.Chrome || sML.UA.Trident) ? sML.forEach(t.HTML.querySelectorAll("body, body *"))((function(e) {
                        return e.style.fontSize = parseInt(getComputedStyle(e).fontSize) / t.FontSize.Base + "rem"
                    }
                    )) : U.editCSSRules(t.contentDocument, (function(e) {
                        if (e && e.selectorText && !/^@/.test(e.selectorText)) {
                            try {
                                if (t.contentDocument.querySelector(e.selectorText) == t.HTML)
                                    return
                            } catch (e) {}
                            var n = {
                                pt: / font-size: (\d[\d\.]*)pt; /,
                                px: / font-size: (\d[\d\.]*)px; /
                            };
                            n.pt.test(e.cssText) && (e.style.fontSize = e.cssText.match(n.pt)[1] * (96 / 72) / t.FontSize.Base + "rem"),
                            n.px.test(e.cssText) && (e.style.fontSize = e.cssText.match(n.px)[1] / t.FontSize.Base + "rem")
                        }
                    }
                    )),
                    "number" == typeof F["base-font-size"] && F["base-font-size"] > 0) {
                        var n = 0
                          , i = {};
                        sML.forEach(t.Body.querySelectorAll("p, p *"))((function(e) {
                            if (e.innerText.replace(/\s/g, "")) {
                                var t = Math.round(100 * getComputedStyle(e).fontSize.replace(/[^\d]*$/, "")) / 100;
                                i[t] || (i[t] = []),
                                i[t].push(e)
                            }
                        }
                        ));
                        var r = 0;
                        for (var o in i)
                            i[o].length > r && (r = i[o].length,
                            n = o);
                        n && (t.FontSize.Base = t.FontSize.Base * (F["base-font-size"] / n)),
                        t.changeFontSizeStep(e.Step)
                    } else
                        0 != e.Step && t.changeFontSizeStep(e.Step)
                }
                )),
                e.changeFontSizeStep = function(t, n) {
                    "pre-paginated" != F.BRL && t != e.Step && (n || (n = {}),
                    W.dispatch("bibi:changes-font-size"),
                    "function" == typeof n.before && n.before(),
                    e.Step = t,
                    F["use-font-size-changer"] && F["keep-settings"] && U.Biscuits && U.Biscuits.memorize("Book", {
                        FontSize: {
                            Step: t
                        }
                    }),
                    setTimeout((function() {
                        _.layOutBook({
                            before: function() {
                                return _.Items.forEach((function(e) {
                                    e.changeFontSizeStep && e.changeFontSizeStep(t)
                                }
                                ))
                            },
                            Reset: !0,
                            DoNotCloseUtilities: !0,
                            NoNotification: !0
                        }).then((function() {
                            W.dispatch("bibi:changed-font-size", {
                                Step: t
                            }),
                            "function" == typeof n.after && n.after()
                        }
                        ))
                    }
                    ), 88))
                }
                ,
                F["use-font-size-changer"]) {
                    var n = function() {
                        var t = this;
                        e.changeFontSizeStep(t.Step, {
                            before: function() {
                                return t.ButtonGroup.Busy = !0
                            },
                            after: function() {
                                return t.ButtonGroup.Busy = !1
                            }
                        })
                    };
                    H.createSubpanel({
                        Opener: H.Menu.R.addButtonGroup({
                            Sticky: !0,
                            id: "bibi-buttongroup_font-size"
                        }).addButton({
                            Type: "toggle",
                            Labels: {
                                default: {
                                    default: "Change Font Size",
                                    ja: "文字サイズを変更"
                                },
                                active: {
                                    default: "Close Font Size Menu",
                                    ja: "文字サイズメニューを閉じる"
                                }
                            },
                            Icon: '<span class="bibi-icon bibi-icon-change-fontsize"></span>',
                            Help: !0
                        }),
                        id: "bibi-subpanel_font-size",
                        open: function() {}
                    }).addSection({
                        Labels: {
                            default: {
                                default: "Choose Font Size",
                                ja: "文字サイズを選択"
                            }
                        }
                    }).addButtonGroup({
                        ButtonType: "radio",
                        Buttons: [{
                            Labels: {
                                default: {
                                    default: '<span class="non-visual-in-label">Font Size:</span> Ex-Large',
                                    ja: '<span class="non-visual-in-label">文字サイズ：</span>最大'
                                }
                            },
                            Icon: '<span class="bibi-icon bibi-icon-fontsize bibi-icon-fontsize-exlarge"></span>',
                            action: n,
                            Step: 2
                        }, {
                            Labels: {
                                default: {
                                    default: '<span class="non-visual-in-label">Font Size:</span> Large',
                                    ja: '<span class="non-visual-in-label">文字サイズ：</span>大'
                                }
                            },
                            Icon: '<span class="bibi-icon bibi-icon-fontsize bibi-icon-fontsize-large"></span>',
                            action: n,
                            Step: 1
                        }, {
                            Labels: {
                                default: {
                                    default: '<span class="non-visual-in-label">Font Size:</span> Medium <small>(default)</small>',
                                    ja: '<span class="non-visual-in-label">文字サイズ：</span>中<small>（初期値）</small>'
                                }
                            },
                            Icon: '<span class="bibi-icon bibi-icon-fontsize bibi-icon-fontsize-medium"></span>',
                            action: n,
                            Step: 0
                        }, {
                            Labels: {
                                default: {
                                    default: '<span class="non-visual-in-label">Font Size:</span> Small',
                                    ja: '<span class="non-visual-in-label">文字サイズ：</span>小'
                                }
                            },
                            Icon: '<span class="bibi-icon bibi-icon-fontsize bibi-icon-fontsize-small"></span>',
                            action: n,
                            Step: -1
                        }, {
                            Labels: {
                                default: {
                                    default: '<span class="non-visual-in-label">Font Size:</span> Ex-Small',
                                    ja: '<span class="non-visual-in-label">文字サイズ：</span>最小'
                                }
                            },
                            Icon: '<span class="bibi-icon bibi-icon-fontsize bibi-icon-fontsize-exsmall"></span>',
                            action: n,
                            Step: -2
                        }]
                    }).Buttons.forEach((function(t) {
                        t.Step == e.Step && H.setUIState(t, "active")
                    }
                    ))
                }
                W.dispatch("bibi:created-font-size-changer")
            }
        },
        H.Loupe = {
            create: function() {
                F["loupe-max-scale"] <= 1 && (F["loupe-max-scale"] = 4),
                F["loupe-scale-per-step"] <= 1 && (F["loupe-scale-per-step"] = 1.6),
                F["loupe-scale-per-step"] > F["loupe-max-scale"] && (F["loupe-scale-per-step"] = F["loupe-max-scale"]);
                var e = H.Loupe = {
                    CurrentTransformation: {
                        Scale: 1,
                        TranslateX: 0,
                        TranslateY: 0
                    },
                    defineZoomOutPropertiesForUtilities: function() {
                        var t = F["use-menubar"] && F["use-full-height"] ? H.Menu.Height : 0
                          , n = "vertical" == F.ARA ? H.Slider.Size : 0
                          , i = "horizontal" == F.ARA ? H.Slider.Size : 0
                          , r = {};
                        "horizontal" == F.ARA ? (r.Scale = (_.Main.offsetHeight - (t + i)) / (_.Main.offsetHeight - (F.ARA != F.SLA || "paged" == F.RVM && !H.Slider.ownerDocument ? 0 : U.Scrollbars.Height)),
                        r.TranslateX = 0) : (r.Scale = Math.min((_.Main.offsetWidth - n) / (_.Main.offsetWidth - U.Scrollbars.Width), (_.Main.offsetHeight - t) / _.Main.offsetHeight),
                        r.TranslateX = _.Main.offsetWidth * (1 - r.Scale) / -2),
                        r.TranslateY = t - _.Main.offsetHeight * (1 - r.Scale) / 2;
                        var o = U.Body["offset" + z.A_SIZE_L] / r.Scale - _.Main["offset" + z.A_SIZE_L]
                          , a = {};
                        a[z.A_BASE_B] = o / 2 + (F["use-full-height"] || "vertical" != F.ARA ? 0 : H.Menu.Height),
                        a[z.A_BASE_A] = o / 2;
                        var s = {};
                        F.ARA == F.SLA && (s["horizontal" == F.ARA ? "Right" : "Bottom"] = o / 2),
                        e.ZoomOutPropertiesForUtilities = {
                            Transformation: r,
                            Stretch: o,
                            OuterPadding: a,
                            InnerPadding: s
                        }
                    },
                    getNormalizedTransformation: function(t) {
                        var n = Object.assign({}, e.CurrentTransformation);
                        return t && ("number" == typeof t.Scale && (n.Scale = t.Scale),
                        "number" == typeof t.TranslateX && (n.TranslateX = t.TranslateX),
                        "number" == typeof t.TranslateY && (n.TranslateY = t.TranslateY)),
                        n
                    },
                    getActualTransformation: function(t) {
                        var n = e.getNormalizedTransformation(t);
                        if (1 == n.Scale && e.IsZoomedOutForUtilities) {
                            var i = e.ZoomOutPropertiesForUtilities.Transformation;
                            n.Scale *= i.Scale,
                            n.TranslateX += i.TranslateX,
                            n.TranslateY += i.TranslateY
                        }
                        return n
                    },
                    transform: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return new Promise((function(i, r) {
                            t = e.getNormalizedTransformation(t);
                            e.CurrentTransformation;
                            if (e.Transforming = !0,
                            clearTimeout(e.Timer_onTransformEnd),
                            U.HTML.classList.add("transforming"),
                            t.Scale > 1) {
                                var o = window.innerWidth * (.5 * (t.Scale - 1))
                                  , a = window.innerHeight * (.5 * (t.Scale - 1));
                                t.TranslateX = sML.limitMinMax(t.TranslateX, -1 * o - ("vertical" != F.RVM ? 0 : "active" == H.Slider.UIState ? H.Slider.Size - U.Scrollbars.Width : 0) + U.Scrollbars.Width, o),
                                t.TranslateY = sML.limitMinMax(t.TranslateY, -1 * a - ("vertical" == F.RVM ? 0 : "active" == H.Slider.UIState ? H.Slider.Size - U.Scrollbars.Height : 0) + U.Scrollbars.Height, a + ("active" == H.Menu.UIState ? H.Menu.Height : 0))
                            }
                            e.CurrentTransformation = t;
                            var s, c = e.getActualTransformation(t);
                            sML.style(_.Main, {
                                transform: (s = [],
                                c.TranslateX && c.TranslateY ? s.push("translate(" + c.TranslateX + "px, " + c.TranslateY + "px)") : c.TranslateX ? s.push("translateX(" + c.TranslateX + "px)") : c.TranslateY && s.push("translateY(" + c.TranslateY + "px)"),
                                1 != c.Scale && s.push("scale(" + c.Scale + ")"),
                                s.length ? s.join(" ") : "")
                            }),
                            e.Timer_onTransformEnd = setTimeout((function() {
                                1 == e.CurrentTransformation.Scale ? (U.HTML.classList.remove("zoomed-in"),
                                U.HTML.classList.remove("zoomed-out")) : e.CurrentTransformation.Scale < 1 ? (U.HTML.classList.remove("zoomed-in"),
                                U.HTML.classList.add("zoomed-out")) : (U.HTML.classList.add("zoomed-in"),
                                U.HTML.classList.remove("zoomed-out")),
                                U.HTML.classList.remove("transforming"),
                                e.Transforming = !1,
                                i(),
                                W.dispatch("bibi:transformed-book", {
                                    Transformation: t,
                                    ActualTransformation: c,
                                    Temporary: n.Temporary
                                })
                            }
                            ), 345)
                        }
                        ))
                    },
                    scale: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        t = "number" == typeof t ? sML.limitMinMax(t, 1, F["loupe-max-scale"]) : 1,
                        n.Stepless || (t = Math.round(100 * t) / 100);
                        var i = e.CurrentTransformation;
                        if (t == i.Scale)
                            return Promise.resolve();
                        W.dispatch("bibi:changes-scale", t);
                        var r = 0
                          , o = 0;
                        if (t < 1)
                            r = _.Main.offsetWidth * (1 - t) / 2,
                            o = _.Main.offsetHeight * (1 - t) / 2;
                        else if (t > 1) {
                            if ("active" != e.UIState)
                                return Promise.resolve();
                            n.Center || (n.Center = {
                                X: window.innerWidth / 2,
                                Y: window.innerHeight / 2
                            }),
                            r = i.TranslateX + (n.Center.X - window.innerWidth / 2 - i.TranslateX) * (1 - t / i.Scale),
                            o = i.TranslateY + (n.Center.Y - window.innerHeight / 2 - i.TranslateY) * (1 - t / i.Scale)
                        }
                        return e.transform({
                            Scale: t,
                            TranslateX: r,
                            TranslateY: o
                        })
                    },
                    BookStretchingEach: 0,
                    transformToDefault: function() {
                        return e.transform({
                            Scale: 1,
                            TranslateX: 0,
                            TranslateY: 0
                        })
                    },
                    transformForUtilities: function(t) {
                        if (!e.isAvailable())
                            return Promise.resolve();
                        var n = function() {};
                        if (t) {
                            if (e.IsZoomedOutForUtilities)
                                return Promise.resolve();
                            e.IsZoomedOutForUtilities = !0;
                            var i = e.ZoomOutPropertiesForUtilities.OuterPadding
                              , r = e.ZoomOutPropertiesForUtilities.InnerPadding;
                            for (var o in i)
                                _.Main.style["padding" + o] = i[o] + "px";
                            for (var a in r)
                                _.Main.Book.style["padding" + a] = r[a] + "px";
                            e.BookStretchingEach = e.ZoomOutPropertiesForUtilities.Stretch / 2
                        } else {
                            if (!e.IsZoomedOutForUtilities)
                                return Promise.resolve();
                            e.IsZoomedOutForUtilities = !1,
                            n = function() {
                                _.Main.style.padding = _.Main.Book.style.padding = "",
                                e.BookStretchingEach = 0
                            }
                        }
                        return e.transform(null, {
                            Temporary: !0
                        }).then(n).then((function() {
                            return H.Slider.ownerDocument ? H.Slider.progress() : void 0
                        }
                        ))
                    },
                    isAvailable: function() {
                        return !!k.Opened && "active" == e.UIState
                    },
                    checkAndGetBibiEventForTaps: function(t) {
                        if (!t || !e.isAvailable())
                            return null;
                        var n = U.getBibiEvent(t);
                        if (n.Target.tagName) {
                            if (/bibi-menu|bibi-slider/.test(n.Target.id))
                                return null;
                            if (U.isPointableContent(n.Target))
                                return null;
                            if ("horizontal" == F.RVM && n.Coord.Y > window.innerHeight - U.Scrollbars.Height)
                                return null
                        }
                        return n
                    },
                    onTap: function(t, n) {
                        if (!(1 != n || H.KeyObserver.ActiveKeys && H.KeyObserver.ActiveKeys.Space))
                            return Promise.resolve();
                        var i = e.checkAndGetBibiEventForTaps(t);
                        if (!i)
                            return Promise.resolve();
                        t.preventDefault();
                        try {
                            t.target.ownerDocument.body.Item.contentWindow.getSelection().empty()
                        } catch (e) {}
                        return e.CurrentTransformation.Scale >= F["loupe-max-scale"] && !t.shiftKey ? e.scale(1) : e.scale(e.CurrentTransformation.Scale * (t.shiftKey ? 1 / F["loupe-scale-per-step"] : F["loupe-scale-per-step"]), {
                            Center: i.Coord
                        })
                    },
                    onPointerDown: function(t) {
                        e.PointerDownCoord = U.getBibiEvent(t).Coord,
                        e.PointerDownTransformation = {
                            Scale: e.CurrentTransformation.Scale,
                            TranslateX: e.CurrentTransformation.TranslateX,
                            TranslateY: e.CurrentTransformation.TranslateY
                        }
                    },
                    onPointerUp: function(t) {
                        U.HTML.classList.remove("dragging"),
                        e.Dragging = !1,
                        delete e.PointerDownCoord,
                        delete e.PointerDownTransformation
                    },
                    onPointerMove: function(t) {
                        if (H.PinchObserver.Hot)
                            return !1;
                        if (!e.isAvailable())
                            return !1;
                        if (1 == e.CurrentTransformation.Scale || !e.PointerDownCoord)
                            return !1;
                        t.preventDefault(),
                        e.Dragging = !0,
                        U.HTML.classList.add("dragging");
                        var n = U.getBibiEvent(t);
                        clearTimeout(e.Timer_TransitionRestore),
                        sML.style(_.Main, {
                            transition: "none"
                        }, {
                            cursor: "move"
                        }),
                        e.transform({
                            Scale: e.CurrentTransformation.Scale,
                            TranslateX: e.PointerDownTransformation.TranslateX + (n.Coord.X - e.PointerDownCoord.X),
                            TranslateY: e.PointerDownTransformation.TranslateY + (n.Coord.Y - e.PointerDownCoord.Y)
                        }),
                        e.Timer_TransitionRestore = setTimeout((function() {
                            return sML.style(_.Main, {
                                transition: ""
                            }, {
                                cursor: ""
                            })
                        }
                        ), 234)
                    }
                };
                if (H.isPointerStealth.addChecker((function() {
                    return !!e.Dragging || !(!H.KeyObserver.ActiveKeys || !H.KeyObserver.ActiveKeys.Space)
                }
                )),
                H.setToggleAction(e, {
                    onopened: function() {
                        U.HTML.classList.add("loupe-active")
                    },
                    onclosed: function() {
                        e.transformToDefault(),
                        U.HTML.classList.remove("loupe-active")
                    }
                }),
                W.add("bibi:commands:activate-loupe", (function() {
                    return e.open()
                }
                )),
                W.add("bibi:commands:deactivate-loupe", (function() {
                    return e.close()
                }
                )),
                W.add("bibi:commands:toggle-loupe", (function() {
                    return e.toggle()
                }
                )),
                W.add("bibi:commands:scale", (function(t) {
                    return e.scale(t)
                }
                )),
                W.add("bibi:tapped", (function(t) {
                    return e.onTap(t, 1)
                }
                )),
                "zoom" == F["on-doubletap"] && W.add("bibi:doubletapped", (function(t) {
                    return e.onTap(t, 2)
                }
                )),
                "zoom" == F["on-tripletap"] && W.add("bibi:tripletapped", (function(t) {
                    return e.onTap(t, 3)
                }
                )),
                W.add("bibi:downed-pointer", (function(t) {
                    return e.onPointerDown(t)
                }
                )),
                W.add("bibi:upped-pointer", (function(t) {
                    return e.onPointerUp(t)
                }
                )),
                W.add("bibi:moved-pointer", (function(t) {
                    return e.onPointerMove(t)
                }
                )),
                F["zoom-out-for-utilities"] && (W.add("bibi:opens-utilities", (function() {
                    return e.transformForUtilities(!0)
                }
                )),
                W.add("bibi:closes-utilities", (function() {
                    return e.transformForUtilities(!1)
                }
                ))),
                W.add("bibi:opened", (function() {
                    return e.open()
                }
                )),
                W.add("bibi:laid-out", (function() {
                    return e.defineZoomOutPropertiesForUtilities()
                }
                )),
                W.add("bibi:changed-view", (function() {
                    return e.transformToDefault()
                }
                )),
                F["use-loupe"]) {
                    var t = H.Menu.R.addButtonGroup({
                        Sticky: !0,
                        Tiled: !0,
                        id: "bibi-buttongroup_loupe",
                        Buttons: [{
                            Labels: {
                                default: {
                                    default: "Zoom-in",
                                    ja: "拡大する"
                                }
                            },
                            Icon: '<span class="bibi-icon bibi-icon-loupe bibi-icon-loupe-zoomin"></span>',
                            Help: !0,
                            action: function() {
                                return e.scale(e.CurrentTransformation.Scale * F["loupe-scale-per-step"])
                            },
                            updateState: function(t) {
                                H.setUIState(this, "string" == typeof t ? t : e.CurrentTransformation.Scale >= F["loupe-max-scale"] ? "disabled" : "default")
                            }
                        }, {
                            Labels: {
                                default: {
                                    default: "Reset Zoom-in/out",
                                    ja: "元のサイズに戻す"
                                }
                            },
                            Icon: '<span class="bibi-icon bibi-icon-loupe bibi-icon-loupe-reset"></span>',
                            Help: !0,
                            action: function() {
                                return e.scale(1)
                            },
                            updateState: function(t) {
                                H.setUIState(this, "string" == typeof t ? t : 1 == e.CurrentTransformation.Scale ? "disabled" : "default")
                            }
                        }, {
                            Labels: {
                                default: {
                                    default: "Zoom-out",
                                    ja: "縮小する"
                                }
                            },
                            Icon: '<span class="bibi-icon bibi-icon-loupe bibi-icon-loupe-zoomout"></span>',
                            Help: !0,
                            action: function() {
                                return e.scale(e.CurrentTransformation.Scale / F["loupe-scale-per-step"])
                            },
                            updateState: function(t) {
                                H.setUIState(this, "string" == typeof t ? t : e.CurrentTransformation.Scale <= 1 ? "disabled" : "default")
                            }
                        }]
                    });
                    e.updateButtonState = function(e) {
                        return t.Buttons.forEach((function(t) {
                            return t.updateState(e)
                        }
                        ))
                    }
                    ,
                    W.add("bibi:opened", (function() {
                        return e.updateButtonState()
                    }
                    )),
                    W.add("bibi:transformed-book", (function() {
                        return e.updateButtonState()
                    }
                    ))
                }
                W.dispatch("bibi:created-loupe")
            }
        },
        H.Nombre = {
            create: function() {
                if (F["use-nombre"]) {
                    var e = H.Nombre = U.Body.appendChild(sML.create("div", {
                        id: "bibi-nombre",
                        clearTimers: function() {
                            clearTimeout(e.Timer_hot),
                            clearTimeout(e.Timer_vanish),
                            clearTimeout(e.Timer_autohide)
                        },
                        show: function() {
                            e.clearTimers(),
                            e.classList.add("active"),
                            e.Timer_hot = setTimeout((function() {
                                return e.classList.add("hot")
                            }
                            ), 10)
                        },
                        hide: function() {
                            e.clearTimers(),
                            e.classList.remove("hot"),
                            e.Timer_vanish = setTimeout((function() {
                                return e.classList.remove("active")
                            }
                            ), 255)
                        },
                        progress: function(t) {
                            if (e.clearTimers(),
                            t || (t = H.PageObserver.Current),
                            t.List.length) {
                                var n, i = t.List[0].Page.Index + 1, r = t.List.slice(-1)[0].Page.Index + 1, o = Math.floor(r / _.Pages.length * 100);
                                e.Current.innerHTML = (n = i,
                                i != r && (n += '<span class="delimiter">-</span>' + r),
                                n),
                                e.Delimiter.innerHTML = "/",
                                e.Total.innerHTML = _.Pages.length,
                                e.Percent.innerHTML = "(".concat(o, '<span class="unit">%</span>)'),
                                e.show(),
                                "active" != H.Slider.UIState && (e.Timer_autohide = setTimeout(e.hide, 1234))
                            }
                        }
                    }));
                    e.Current = e.appendChild(sML.create("span", {
                        className: "bibi-nombre-current"
                    })),
                    e.Delimiter = e.appendChild(sML.create("span", {
                        className: "bibi-nombre-delimiter"
                    })),
                    e.Total = e.appendChild(sML.create("span", {
                        className: "bibi-nombre-total"
                    })),
                    e.Percent = e.appendChild(sML.create("span", {
                        className: "bibi-nombre-percent"
                    })),
                    W.add("bibi:opened", (function() {
                        return setTimeout((function() {
                            e.progress(),
                            W.add(["bibi:is-scrolling", "bibi:scrolled", "bibi:opened-slider"], (function() {
                                return e.progress()
                            }
                            )),
                            W.add("bibi:closed-slider", e.hide)
                        }
                        ), 321)
                    }
                    )),
                    sML.appendCSSRule("html.view-paged div#bibi-nombre", "bottom: " + (U.Scrollbars.Height + 2) + "px;"),
                    sML.appendCSSRule("html.view-horizontal div#bibi-nombre", "bottom: " + (U.Scrollbars.Height + 2) + "px;"),
                    sML.appendCSSRule("html.view-vertical div#bibi-nombre", "right: " + (U.Scrollbars.Height + 2) + "px;"),
                    W.dispatch("bibi:created-nombre")
                }
            }
        },
        H.History = {
            List: [],
            Updaters: [],
            update: function() {
                return H.History.Updaters.forEach((function(e) {
                    return e()
                }
                ))
            },
            add: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e.UI || (e.UI = x);
                var t = _.hatchPage(H.History.List.slice(-1)[0])
                  , n = e.Destination ? _.hatchPage(e.Destination) : (H.PageObserver.updateCurrent(),
                H.PageObserver.Current.List[0].Page);
                if (n != t && (e.SumUp && H.History.List.slice(-1)[0].UI == e.UI && H.History.List.pop(),
                H.History.List.push({
                    UI: e.UI,
                    IIPP: H.PageObserver.getIIPP({
                        Page: n
                    })
                }),
                H.History.List.length - 1 > F["max-history"])) {
                    var i = H.History.List.shift();
                    H.History.List.shift(),
                    H.History.List.unshift(i)
                }
                H.History.update()
            },
            back: function() {
                if (H.History.List.length <= 1)
                    return Promise.reject();
                _.hatchPage(H.History.List.pop());
                var e = _.hatchPage(H.History.List.slice(-1)[0]);
                return H.History.update(),
                _.focusOn({
                    Destination: e,
                    Duration: 0
                })
            }
        },
        H.Slider = {
            create: function() {
                if (!F["use-slider"])
                    return !1;
                var e = H.Slider = U.Body.appendChild(sML.create("div", {
                    id: "bibi-slider",
                    RailProgressMode: "end",
                    Size: H.Slider.Size,
                    initialize: function() {
                        var t = e.appendChild(sML.create("div", {
                            id: "bibi-slider-edgebar-box"
                        }));
                        e.Edgebar = t.appendChild(sML.create("div", {
                            id: "bibi-slider-edgebar"
                        })),
                        e.Rail = t.appendChild(sML.create("div", {
                            id: "bibi-slider-rail"
                        })),
                        e.RailGroove = e.Rail.appendChild(sML.create("div", {
                            id: "bibi-slider-rail-groove"
                        })),
                        e.RailProgress = e.RailGroove.appendChild(sML.create("div", {
                            id: "bibi-slider-rail-progress"
                        })),
                        e.Thumb = t.appendChild(sML.create("div", {
                            id: "bibi-slider-thumb",
                            Labels: {
                                default: {
                                    default: "Slider Thumb",
                                    ja: "スライダー上の好きな位置からドラッグを始められます"
                                }
                            }
                        })),
                        H.setFeedback(e.Thumb),
                        F["use-history"] && (e.classList.add("bibi-slider-with-history"),
                        e.History = e.appendChild(sML.create("div", {
                            id: "bibi-slider-history"
                        })),
                        e.History.add = function(t) {
                            return H.History.add({
                                UI: e,
                                SumUp: !1,
                                Destination: t
                            })
                        }
                        ,
                        e.History.Button = e.History.appendChild(H.createButtonGroup()).addButton({
                            id: "bibi-slider-history-button",
                            Type: "normal",
                            Labels: {
                                default: {
                                    default: "History Back",
                                    ja: "移動履歴を戻る"
                                }
                            },
                            Help: !1,
                            Icon: '<span class="bibi-icon bibi-icon-history"></span>',
                            action: function() {
                                return H.History.back()
                            },
                            update: function() {
                                this.Icon.style.transform = "rotate(".concat(360 * (H.History.List.length - 1), "deg)"),
                                H.History.List.length <= 1 ? H.setUIState(this, "disabled") : "disabled" == this.UIState && H.setUIState(this, "default")
                            }
                        }),
                        H.History.Updaters.push((function() {
                            return e.History.Button.update()
                        }
                        ))),
                        F["use-nombre"] && (W.add(e.Edgebar, ["mouseover", "mousemove"], (function(t) {
                            e.Touching || H.Nombre.progress({
                                List: [{
                                    Page: e.getPointedPage(U.getBibiEventCoord(t)[z.A_AXIS_L])
                                }]
                            })
                        }
                        )),
                        W.add(e.Edgebar, "mouseout", (function(t) {
                            e.Touching || H.Nombre.progress()
                        }
                        )))
                    },
                    resetUISize: function() {
                        e.MainLength = _.Main["scroll" + z.L_SIZE_L];
                        var t = _.Main["offset" + z.L_SIZE_L] / e.MainLength * 100;
                        e.RailGroove.style[z.A_SIZE_b] = e.Thumb.style[z.A_SIZE_b] = "",
                        e.RailGroove.style[z.A_SIZE_l] = 100 - ("center" == e.RailProgressMode ? t : 0) + "%",
                        e.Thumb.style[z.A_SIZE_l] = t + "%",
                        setTimeout((function() {
                            return e.Thumb.classList.toggle("min", (t = getComputedStyle(e.Thumb, "::after")).width == t.height);
                            var t
                        }
                        ), 0),
                        e.Edgebar.Before = U.getElementCoord(e.Edgebar)[z.A_AXIS_L],
                        e.Edgebar.Length = e.Edgebar["offset" + z.A_SIZE_L],
                        e.Edgebar.After = e.Edgebar.Before + e.Edgebar.Length,
                        e.RailGroove.Before = U.getElementCoord(e.RailGroove)[z.A_AXIS_L],
                        e.RailGroove.Length = e.RailGroove["offset" + z.A_SIZE_L],
                        e.RailGroove.After = e.RailGroove.Before + e.RailGroove.Length,
                        e.Thumb.Length = e.Thumb["offset" + z.A_SIZE_L]
                    },
                    onTouchStart: function(t) {
                        H.ScrollObserver.forceStopScrolling(),
                        t.preventDefault(),
                        e.Touching = !0,
                        e.StartedAt = {
                            ThumbBefore: U.getElementCoord(e.Thumb)[z.A_AXIS_L],
                            RailProgressLength: e.RailProgress["offset" + z.A_SIZE_L],
                            MainScrollBefore: Math.ceil(_.Main["scroll" + z.L_OOBL_L])
                        },
                        e.StartedAt.Coord = t.target == e.Thumb ? U.getBibiEventCoord(t)[z.A_AXIS_L] : e.StartedAt.ThumbBefore + e.Thumb.Length / 2,
                        clearTimeout(e.Timer_onTouchEnd),
                        U.HTML.classList.add("slider-sliding"),
                        W.add("bibi:moved-pointer", e.onTouchMove)
                    },
                    onTouchMove: function(t) {
                        clearTimeout(e.Timer_move);
                        var n = U.getBibiEventCoord(t)[z.A_AXIS_L];
                        if (e.Touching) {
                            var i = sML.limitMinMax(n - e.StartedAt.Coord, e.Edgebar.Before - e.StartedAt.ThumbBefore, e.Edgebar.After - (e.StartedAt.ThumbBefore + e.Thumb.Length));
                            sML.style(e.Thumb, {
                                transform: "translate" + z.A_AXIS_L + "(" + i + "px)"
                            }),
                            sML.style(e.RailProgress, d({}, z.A_SIZE_l, e.StartedAt.RailProgressLength + i * ("rtl" == F.ARD ? -1 : 1) + "px"))
                        }
                        e.flipPagesDuringSliding(n)
                    },
                    flipPagesDuringSliding: function(t) {
                        return (e.flipPagesDuringSliding = F["flip-pages-during-sliding"] ? function(t) {
                            _.DoNotTurn = !0,
                            e.flip(t),
                            e.Timer_move = setTimeout((function() {
                                _.DoNotTurn = !1,
                                e.flip(t, "FORCE")
                            }
                            ), 333)
                        }
                        : function() {
                            return !1
                        }
                        )(t)
                    },
                    onTouchEnd: function(t) {
                        if (e.Touching) {
                            clearTimeout(e.Timer_move),
                            e.Touching = !1,
                            W.remove("bibi:moved-pointer", e.onTouchMove);
                            var n = U.getBibiEventCoord(t)[z.A_AXIS_L];
                            n == e.StartedAt.Coord && (e.StartedAt.Coord = e.StartedAt.ThumbBefore + e.Thumb.Length / 2),
                            _.DoNotTurn = !1,
                            e.flip(n, "FORCE").then((function() {
                                sML.style(e.Thumb, {
                                    transform: ""
                                }),
                                sML.style(e.RailProgress, d({}, z.A_SIZE_l, "")),
                                e.progress(),
                                e.History && e.History.add()
                            }
                            )),
                            delete e.StartedAt,
                            e.Timer_onTouchEnd = setTimeout((function() {
                                return U.HTML.classList.remove("slider-sliding")
                            }
                            ), 123)
                        }
                    },
                    flip: function(t, n) {
                        return new Promise((function(n) {
                            switch (F.RVM) {
                            case "paged":
                                var i = e.getPointedPage(t);
                                return H.PageObserver.Current.Pages.includes(i) ? n() : _.focusOn({
                                    Destination: i,
                                    Duration: 0
                                }).then((function() {
                                    return n()
                                }
                                ));
                            default:
                                return _.Main["scroll" + z.L_OOBL_L] = e.StartedAt.MainScrollBefore + (t - e.StartedAt.Coord) * (e.MainLength / e.Edgebar.Length),
                                n()
                            }
                        }
                        )).then((function() {
                            n && H.PageObserver.turnItems()
                        }
                        ))
                    },
                    progress: function() {
                        if (!e.Touching) {
                            var t = Math.ceil(_.Main["scroll" + z.L_OOBL_L]);
                            switch (F.ARA != F.SLA && "rtl" == F.ARD && (t = e.MainLength - t - _.Main.offsetHeight),
                            F.ARA) {
                            case "horizontal":
                                e.Thumb.style.top = "",
                                e.RailProgress.style.height = "";
                                break;
                            case "vertical":
                                e.Thumb.style.left = "",
                                e.RailProgress.style.width = ""
                            }
                            e.Thumb.style[z.A_OOBL_l] = t / e.MainLength * 100 + "%",
                            e.RailProgress.style[z.A_SIZE_l] = e.getRailProgressLength(U.getElementCoord(e.Thumb)[z.A_AXIS_L] - e.RailGroove.Before) / e.RailGroove.Length * 100 + "%"
                        }
                    },
                    getRailProgressLength: function(t) {
                        return (e.getRailProgressLength = "center" == e.RailProgressMode ? function(t) {
                            return "rtl" != F.ARD ? t + e.Thumb.Length / 2 : e.RailGroove.Length - (t + e.Thumb.Length / 2)
                        }
                        : function(t) {
                            return "rtl" != F.ARD ? t + e.Thumb.Length : e.RailGroove.Length - t
                        }
                        )(t)
                    },
                    getPointedPage: function(t) {
                        var n = (t - e.Edgebar.Before) / e.Edgebar["offset" + z.A_SIZE_L]
                          , i = sML.limitMinMax(Math.round(_.Pages.length * ("rtl" == F.ARD ? 1 - n : n)), 0, _.Pages.length - 1)
                          , r = _.Main["scroll" + z.L_SIZE_L] * ("rtl" == F.ARD && "ttb" == F.SLD ? 1 - n : n)
                          , o = _.Pages[i]
                          , a = e.getPageDistanceFromPoint(o, r);
                        return [-1, 1].forEach((function(t) {
                            for (var n = i + t; _.Pages[n]; n += t) {
                                var s = _.Pages[n]
                                  , c = e.getPageDistanceFromPoint(s, r);
                                if (!(c < a))
                                    break;
                                o = s,
                                a = c
                            }
                        }
                        )),
                        o
                    },
                    getPageDistanceFromPoint: function(e, t) {
                        return Math.abs(t - (U.getElementCoord(e, _.Main)[z.L_AXIS_L] + .5 * e["offset" + z.L_SIZE_L]))
                    }
                }));
                e.initialize(),
                H.setToggleAction(e, {
                    onopened: function() {
                        U.HTML.classList.add("slider-opened"),
                        setTimeout(e.resetUISize, 0),
                        W.dispatch("bibi:opened-slider")
                    },
                    onclosed: function() {
                        new Promise((function(e) {
                            return setTimeout(e, F["zoom-out-for-utilities"] ? 111 : 0)
                        }
                        )),
                        U.HTML.classList.remove("slider-opened"),
                        setTimeout(e.resetUISize, 0),
                        W.dispatch("bibi:closed-slider")
                    }
                }),
                W.add("bibi:commands:open-slider", e.open),
                W.add("bibi:commands:close-slider", e.close),
                W.add("bibi:commands:toggle-slider", e.toggle),
                W.add("bibi:opens-utilities", (function(e) {
                    return W.dispatch("bibi:commands:open-slider", e)
                }
                )),
                W.add("bibi:closes-utilities", (function(e) {
                    return W.dispatch("bibi:commands:close-slider", e)
                }
                )),
                W.add("bibi:loaded-item", (function(t) {
                    return t.HTML.addEventListener(W.pointerup, e.onTouchEnd)
                }
                )),
                W.add("bibi:opened", (function() {
                    e.Edgebar.addEventListener(W.pointerdown, e.onTouchStart),
                    e.Thumb.addEventListener(W.pointerdown, e.onTouchStart),
                    U.HTML.addEventListener(W.pointerup, e.onTouchEnd),
                    e.History && e.History.Button.addEventListener(W.pointerup, e.onTouchEnd),
                    W.add(["bibi:is-scrolling", "bibi:scrolled"], e.progress),
                    e.progress()
                }
                )),
                W.add(["bibi:opened-slider", "bibi:closed-slider", "bibi:laid-out"], (function() {
                    e.resetUISize(),
                    e.progress()
                }
                ));
                var t = "div#bibi-slider"
                  , n = "html.appearance-horizontal " + t
                  , i = U.Scrollbars.Height
                  , r = Math.ceil(i / 2)
                  , o = "html.appearance-vertical " + t
                  , a = U.Scrollbars.Width
                  , s = Math.ceil(a / 2)
                  , c = function(e) {
                    return ["top", "right", "bottom", "left"].reduce((function(t, n) {
                        return t + n + ": " + -1 * e + "px; "
                    }
                    ), "").trim()
                };
                sML.appendCSSRule(n, "height: " + i + "px;"),
                sML.appendCSSRule("html.appearance-horizontal div#bibi-slider-thumb:before", c(r) + " border-radius: " + r / 2 + "px; min-width: " + r + "px;"),
                sML.appendCSSRule(o, "width: " + a + "px;"),
                sML.appendCSSRule("html.appearance-vertical div#bibi-slider-thumb:before", c(s) + " border-radius: " + s / 2 + "px; min-height: " + s + "px;"),
                W.dispatch("bibi:created-slider")
            }
        },
        H.BookmarkManager = {
            create: function() {
                if (F["use-bookmarks"] && U.Biscuits) {
                    var e = H.BookmarkManager = {
                        Bookmarks: [],
                        initialize: function() {
                            e.Subpanel = H.createSubpanel({
                                Opener: H.Menu.L.addButtonGroup({
                                    Sticky: !0,
                                    id: "bibi-buttongroup_bookmarks"
                                }).addButton({
                                    Type: "toggle",
                                    Labels: {
                                        default: {
                                            default: "Manage Bookmarks",
                                            ja: "しおりメニューを開く"
                                        },
                                        active: {
                                            default: "Close Bookmarks Menu",
                                            ja: "しおりメニューを閉じる"
                                        }
                                    },
                                    Icon: '<span class="bibi-icon bibi-icon-manage-bookmarks"></span>',
                                    Help: !0
                                }),
                                Position: "left",
                                id: "bibi-subpanel_bookmarks",
                                updateBookmarks: function() {
                                    return e.update()
                                },
                                onopened: function() {
                                    W.add("bibi:scrolled", e.Subpanel.updateBookmarks),
                                    e.Subpanel.updateBookmarks()
                                },
                                onclosed: function() {
                                    W.remove("bibi:scrolled", e.Subpanel.updateBookmarks)
                                }
                            }),
                            e.ButtonGroup = e.Subpanel.addSection({
                                id: "bibi-subpanel-section_bookmarks",
                                Labels: {
                                    default: {
                                        default: "Bookmarks",
                                        ja: "しおり"
                                    }
                                }
                            }).addButtonGroup();
                            var t = U.Biscuits.remember("Book", "Bookmarks");
                            Array.isArray(t) && t.length && (e.Bookmarks = t),
                            delete e.initialize
                        },
                        exists: function(t) {
                            for (var n = e.Bookmarks.length, i = 0; i < n; i++)
                                if (e.Bookmarks[i].IIPP == t.IIPP)
                                    return e.Bookmarks[i];
                            return null
                        },
                        add: function(t) {
                            if (e.exists(t))
                                return e.update();
                            t.IsHot = !0,
                            e.Bookmarks.push(t),
                            e.update({
                                Added: t
                            })
                        },
                        remove: function(t) {
                            e.Bookmarks = e.Bookmarks.filter((function(e) {
                                return e.IIPP != t.IIPP
                            }
                            )),
                            e.update({
                                Removed: t
                            })
                        },
                        update: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.Subpanel.Opener.ButtonGroup.style.display = "",
                            e.ButtonGroup.Buttons && (e.ButtonGroup.Buttons = [],
                            e.ButtonGroup.innerHTML = "");
                            var n = []
                              , i = [];
                            if (Array.isArray(t.Bookmarks) && (e.Bookmarks = t.Bookmarks),
                            t.Added ? n = [t.Added] : k.Opened && (H.PageObserver.updateCurrent(),
                            n = H.PageObserver.Current.Pages.map((function(e) {
                                return {
                                    IIPP: H.PageObserver.getIIPP({
                                        Page: e
                                    }),
                                    "%": Math.floor((e.Index + 1) / _.Pages.length * 100)
                                }
                            }
                            ))),
                            e.Bookmarks.length) {
                                for (var r = [], o = function(t, o) {
                                    var a = e.Bookmarks[o];
                                    if ("number" == typeof a)
                                        a = {
                                            IIPP: a
                                        };
                                    else {
                                        if (!a)
                                            return "continue";
                                        "number" != typeof a.IIPP && (a.ItemIndex ? a.IIPP = a.ItemIndex + (a.PageProgressInItem ? a.PageProgressInItem : 0) : "pre-paginated" == A.Package.Metadata["rendition:layout"] && ("number" == typeof a.PageNumber && (a.PageIndex = a.PageNumber - 1),
                                        "number" == typeof a.PageIndex && (a.IIPP = a.PageIndex)))
                                    }
                                    if ("number" != typeof a.IIPP)
                                        return "continue";
                                    /^(\d*\.)?\d+?$/.test(a["%"]) ? a["%"] *= 1 : delete a["%"];
                                    var s = ""
                                      , c = ""
                                      , l = "bibi-bookmark"
                                      , u = _.hatchPage(a)
                                      , d = 0;
                                    if (u && "number" == typeof u.Index ? d = u.Index + 1 : "pre-paginated" == A.Package.Metadata["rendition:layout"] && (d = Math.floor(a.IIPP) + 1),
                                    d && (s += '<span class="'.concat(l, '-page"><span class="').concat(l, '-unit">P.</span><span class="').concat(l, '-number">').concat(d, "</span></span>"),
                                    _.Pages.length)) {
                                        if (d > _.Pages.length)
                                            return "continue";
                                        s += '<span class="'.concat(l, '-total-pages">/<span class="').concat(l, '-number">').concat(_.Pages.length, "</span></span>"),
                                        a["%"] = Math.floor(d / _.Pages.length * 100)
                                    }
                                    "number" == typeof a["%"] && (s += s ? ' <span class="'.concat(l, '-percent"><span class="').concat(l, '-parenthesis">(</span><span class="').concat(l, '-number">').concat(a["%"], '</span><span class="').concat(l, '-unit">%</span><span class="').concat(l, '-parenthesis">)</span></span>') : '<span class="'.concat(l, '-percent">') + '<span class="'.concat(l, '-number">').concat(a["%"], '</span><span class="').concat(l, '-unit">%</span>') + "</span>");
                                    var p = s ? {
                                        default: {
                                            default: s,
                                            ja: s
                                        }
                                    } : {
                                        default: {
                                            default: "Bookmark #".concat(r.length + 1),
                                            ja: "しおり #".concat(r.length + 1)
                                        }
                                    };
                                    n.reduce((function(e, t) {
                                        return a.IIPP == t.IIPP || e
                                    }
                                    ), !1) && (i.push(a),
                                    c = "bibi-button-bookmark-is-current",
                                    p.default.default += ' <span class="'.concat(l, '-is-current"></span>'),
                                    p.default.ja += ' <span class="'.concat(l, "-is-current ").concat(l, '-is-current-ja"></span>'));
                                    var f = e.ButtonGroup.addButton({
                                        className: c,
                                        Type: "normal",
                                        Labels: p,
                                        Icon: '<span class="bibi-icon bibi-icon-bookmark bibi-icon-a-bookmark"></span>',
                                        Bookmark: a,
                                        action: function() {
                                            return k.Opened ? _.focusOn({
                                                Destination: a
                                            }).then((function(t) {
                                                return H.History.add({
                                                    UI: e,
                                                    SumUp: !1,
                                                    Destination: t
                                                })
                                            }
                                            )) : !!k.Waiting && (F["start-in-new-window"] ? k.openNewWindow(location.href + (location.hash ? "&" : "#") + "jo(iipp=" + a.IIPP + ")") : (_.StartOn = {
                                                IIPP: a.IIPP
                                            },
                                            void k.play()))
                                        },
                                        remove: function() {
                                            return e.remove(a)
                                        }
                                    })
                                      , g = f.appendChild(sML.create("span", {
                                        className: "bibi-remove-bookmark",
                                        title: "しおりを削除"
                                    }));
                                    H.setFeedback(g, {
                                        StopPropagation: !0
                                    }),
                                    W.add(g, "bibi:tapped", (function() {
                                        return f.remove()
                                    }
                                    )),
                                    g.addEventListener(W["pointer-over"], (function(e) {
                                        return e.stopPropagation()
                                    }
                                    )),
                                    a.IsHot ? (delete a.IsHot,
                                    H.setUIState(f, "active"),
                                    setTimeout((function() {
                                        return H.setUIState(f, i.includes(a) ? "disabled" : "default")
                                    }
                                    ), 234)) : i.includes(a) ? H.setUIState(f, "disabled") : H.setUIState(f, "default");
                                    var h = {
                                        IIPP: a.IIPP
                                    };
                                    a["%"] && (h["%"] = a["%"]),
                                    r.push(h)
                                }, a = e.Bookmarks.length, s = 0; s < a; s++)
                                    o(a, s);
                                e.Bookmarks = r
                            } else
                                k.Opened || (e.Subpanel.Opener.ButtonGroup.style.display = "none");
                            e.Bookmarks.length < F["max-bookmarks"] && (e.AddButton = e.ButtonGroup.addButton({
                                id: "bibi-button-add-a-bookmark",
                                Type: "normal",
                                Labels: {
                                    default: {
                                        default: "Add a Bookmark to Current Page",
                                        ja: "現在のページにしおりを挟む"
                                    }
                                },
                                Icon: '<span class="bibi-icon bibi-icon-bookmark bibi-icon-add-a-bookmark"></span>',
                                action: function() {
                                    return !!n.length && e.add(n[0])
                                }
                            }),
                            n.length && !i.length || H.setUIState(e.AddButton, "disabled")),
                            U.Biscuits.memorize("Book", {
                                Bookmarks: e.Bookmarks
                            }),
                            W.dispatch("bibi:updated-bookmarks", e.Bookmarks),
                            t.Added && W.dispatch("bibi:added-bookmark", e.Bookmarks),
                            t.Removed && W.dispatch("bibi:removed-bookmark", e.Bookmarks)
                        }
                    };
                    e.initialize(),
                    W.dispatch("bibi:created-bookmark-manager")
                }
            }
        },
        H.Flipper = {
            create: function() {
                var e = H.Flipper = {
                    PreviousDistance: 0,
                    Back: {
                        Distance: -1
                    },
                    Forward: {
                        Distance: 1
                    },
                    getDirection: function(e) {
                        switch (F.ARA) {
                        case "horizontal":
                            return "center" != e.X ? e.X : e.Y;
                        case "vertical":
                            return "middle" != e.Y ? e.Y : e.X
                        }
                    },
                    isAbleToFlip: function(e) {
                        if (k.Opened && !H.OpenedSubpanel && "number" == typeof (1 * e) && e && (H.PageObserver.Current.List.length || H.PageObserver.updateCurrent(),
                        H.PageObserver.Current.List.length)) {
                            var t, n, i;
                            if (e < 0 ? (t = H.PageObserver.Current.List[0],
                            n = _.Pages[0],
                            i = "Headed") : (t = H.PageObserver.Current.List.slice(-1)[0],
                            n = _.Pages.slice(-1)[0],
                            i = "Footed"),
                            t.Page != n)
                                return !0;
                            if (!t.PageIntersectionStatus.Contained && !t.PageIntersectionStatus[i])
                                return !0
                        }
                        return !1
                    },
                    flip: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if ("number" != typeof (t *= 1) || !isFinite(t) || 0 === t)
                            return Promise.resolve();
                        H.ScrollObserver.forceStopScrolling();
                        var i = H.History.List.slice(-1)[0].UI == e && (t < 0 ? -1 : 1) == (e.PreviousDistance < 0 ? -1 : 1);
                        if (e.PreviousDistance = t,
                        "pre-paginated" == F["book-rendition-layout"]) {
                            var r = [H.PageObserver.Current.List[0].Page.Index, H.PageObserver.Current.List.slice(-1)[0].Page.Index]
                              , o = r[t < 0 ? 0 : 1] + t;
                            r.forEach((function(e) {
                                try {
                                    _.Pages[e].Spread.Box.classList.remove("current")
                                } catch (e) {}
                            }
                            ));
                            try {
                                _.Pages[o].Spread.Box.classList.add("current")
                            } catch (e) {}
                        }
                        return _.moveBy({
                            Distance: t,
                            Duration: n.Duration
                        }).then((function(t) {
                            return H.History.add({
                                UI: e,
                                SumUp: i,
                                Destination: t
                            })
                        }
                        ))
                    }
                };
                e[-1] = e.Back,
                e[1] = e.Forward
            }
        },
        H.Arrows = {
            create: function() {
                if (!F["use-arrows"])
                    return H.Arrows = null;
                var e, t = H.Arrows = {
                    navigate: function() {
                        return setTimeout((function() {
                            [t.Back, t.Forward].forEach((function(e) {
                                return !!H.Flipper.isAbleToFlip(e.Distance) && e.classList.add("glowing")
                            }
                            )),
                            setTimeout((function() {
                                return [t.Back, t.Forward].forEach((function(e) {
                                    return e.classList.remove("glowing")
                                }
                                ))
                            }
                            ), 1234)
                        }
                        ), 400)
                    },
                    toggleState: function() {
                        return [t.Back, t.Forward].forEach((function(e) {
                            var t = H.Flipper.isAbleToFlip(e.Distance);
                            e.classList.toggle("available", t),
                            e.classList.toggle("unavailable", !t)
                        }
                        ))
                    },
                    areAvailable: function(e) {
                        if (!k.Opened)
                            return !1;
                        if (H.OpenedSubpanel)
                            return !1;
                        if (H.Panel && "active" == H.Panel.UIState)
                            return !1;
                        if (e.Coord.X <= 3 || e.Coord.Y <= 3)
                            return !1;
                        if ("horizontal" == F.ARA) {
                            if (e.Coord.X >= window.innerWidth - 3 || e.Coord.Y >= window.innerHeight - U.Scrollbars.Height - 3)
                                return !1
                        } else if ("vertical" == F.ARA && (e.Coord.Y >= window.innerHeight - 3 || e.Coord.X >= window.innerWidth - U.Scrollbars.Width - 3))
                            return !1;
                        return e.Target.ownerDocument.documentElement != U.HTML ? !U.isPointableContent(e.Target) : e.Target == U.HTML || e.Target == U.Body || e.Target == H.Menu || (!!/^(bibi-main|bibi-arrow|bibi-help|bibi-poweredby)/.test(e.Target.id) || !!/^(spread|item|page)( |-|$)/.test(e.Target.className))
                    }
                };
                U.HTML.classList.add("arrows-active"),
                t.Back = U.Body.appendChild(sML.create("div", {
                    className: "bibi-arrow",
                    id: "bibi-arrow-back",
                    Labels: {
                        default: {
                            default: "Back",
                            ja: "戻る"
                        }
                    },
                    Distance: -1
                })),
                t.Forward = U.Body.appendChild(sML.create("div", {
                    className: "bibi-arrow",
                    id: "bibi-arrow-forward",
                    Labels: {
                        default: {
                            default: "Forward",
                            ja: "進む"
                        }
                    },
                    Distance: 1
                })),
                t[-1] = t.Forward.Pair = H.Flipper.Back.Arrow = t.Back,
                t[1] = t.Back.Pair = H.Flipper.Forward.Arrow = t.Forward,
                [t.Back, t.Forward].forEach((function(e) {
                    H.setFeedback(e);
                    var t = [e.showHelp, e.hideHelp, e.BibiTapObserver.onTap, e.BibiTapObserver.onDoubleTap];
                    U.TouchOS || t.push(e.BibiHoverObserver.onHover, e.BibiHoverObserver.onUnHover),
                    t.forEach((function(e) {
                        return function() {}
                    }
                    ))
                }
                )),
                W.add("bibi:commands:move-by", (function(e) {
                    return !!(k.Opened && "number" == typeof (e *= 1) && isFinite(e) && (e = Math.round(e))) && W.dispatch(e < 0 ? t.Back : t.Forward, "bibi:tapped", null)
                }
                )),
                W.add("bibi:loaded-item", (function(e) {
                    sML.appendCSSRule(e.contentDocument, "html[data-bibi-cursor]", "cursor: pointer;")
                }
                )),
                W.add("bibi:opened", (function() {
                    return setTimeout((function() {
                        t.toggleState(),
                        t.navigate()
                    }
                    ), 123)
                }
                )),
                W.add("bibi:scrolled", (function() {
                    return t.toggleState()
                }
                )),
                W.add("bibi:changed-view", (function() {
                    return t.navigate()
                }
                )),
                W.dispatch("bibi:created-arrows"),
                (e = function(e, t, n) {
                    return sML.appendCSSRule("".concat(e, " div#bibi-arrow-back, ").concat(e, " div#bibi-arrow-forward"), "".concat(t, ": calc(100% - ").concat(n, "px); ").concat(t, ": calc(100v").concat(t.charAt(0), " - ").concat(n, "px);"))
                }
                )("html.appearance-horizontal.book-full-height:not(.slider-opened)", "height", U.Scrollbars.Width),
                e("html.appearance-horizontal:not(.book-full-height):not(.slider-opened)", "height", U.Scrollbars.Width + H.Menu.Height),
                e("html.appearance-vertical:not(.slider-opened)", "width", U.Scrollbars.Width)
            }
        },
        H.AxisSwitcher = {
            create: function() {
                if (F["fix-reader-view-mode"])
                    return H.AxisSwitcher = null;
                H.AxisSwitcher = {
                    switchAxis: function() {
                        return new Promise((function(e) {
                            if ("paged" == F.RVM)
                                return e();
                            var t = "horizontal" == F.RVM ? "vertical" : "horizontal";
                            H.Menu.Config.ViewModeSection.ButtonGroups[0].Buttons.filter((function(e) {
                                return e.Mode == t
                            }
                            ))[0].BibiTapObserver.onTap(),
                            e()
                        }
                        ))
                    }
                };
                W.dispatch("bibi:created-axis-switcher")
            }
        },
        H.Spinner = {
            create: function() {
                for (var e = H.Spinner = U.Body.appendChild(sML.create("div", {
                    id: "bibi-spinner"
                })), t = 1; t <= 12; t++)
                    e.appendChild(document.createElement("span"));
                W.dispatch("bibi:created-spinner")
            }
        },
        H.createButtonGroup = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (e.Area && e.Area.tagName) {
                var t = e.Area;
                return delete e.Area,
                t.addButtonGroup(e)
            }
            "string" == typeof e.className && e.className || delete e.className,
            "string" == typeof e.id && e.id || delete e.id;
            var n = ["bibi-buttongroup"];
            e.Tiled && n.push("bibi-buttongroup-tiled"),
            e.Sticky && n.push("sticky"),
            e.className && n.push(e.className),
            e.className = n.join(" ");
            var i = Array.isArray(e.Buttons) ? e.Buttons : e.Button ? [e.Button] : [];
            delete e.Buttons,
            delete e.Button;
            var r = sML.create("ul", e);
            return r.Buttons = [],
            r.addButton = function(e) {
                var t = H.createButton(e);
                return t ? (t.ButtonGroup = this,
                t.ButtonBox = t.ButtonGroup.appendChild(sML.create("li", {
                    className: "bibi-buttonbox bibi-buttonbox-" + t.Type
                })),
                U.TouchOS || (H.TouchObserver.observeElementHover(t.ButtonBox),
                H.TouchObserver.setElementHoverActions(t.ButtonBox)),
                t.ButtonBox.appendChild(t),
                t.ButtonGroup.Buttons.push(t),
                t) : null
            }
            ,
            i.forEach((function(t) {
                !t.Type && e.ButtonType && (t.Type = e.ButtonType),
                r.addButton(t)
            }
            )),
            r.Busy = !1,
            r
        }
        ,
        H.createButton = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            "string" == typeof e.className && e.className || delete e.className,
            "string" == typeof e.id && e.id || delete e.id,
            e.Type = "string" == typeof e.Type && /^(normal|toggle|radio|link)$/.test(e.Type) ? e.Type : "normal";
            var t = ["bibi-button", "bibi-button-" + e.Type];
            e.className && t.push(e.className),
            e.className = t.join(" "),
            void 0 === e.Icon || e.Icon.tagName || ("string" == typeof e.Icon && e.Icon ? e.Icon = sML.hatch(e.Icon) : delete e.Icon);
            var n = sML.create("string" == typeof e.href ? "a" : "span", e);
            return n.Icon && (n.IconBox = n.appendChild(sML.create("span", {
                className: "bibi-button-iconbox"
            })),
            n.IconBox.appendChild(n.Icon),
            n.Icon = n.IconBox.firstChild,
            n.IconBox.Button = n.Icon.Button = n),
            n.Label = n.appendChild(sML.create("span", {
                className: "bibi-button-label"
            })),
            H.setFeedback(n, {
                Help: e.Help,
                Checked: e.Checked,
                StopPropagation: !0,
                PreventDefault: !n.href
            }),
            n.isAvailable = function() {
                return !n.Busy && ((!n.ButtonGroup || !n.ButtonGroup.Busy) && "disabled" != n.UIState)
            }
            ,
            "function" == typeof n.action && W.add(n, "bibi:tapped", (function() {
                return n.isAvailable() ? n.action.apply(n, a) : null
            }
            )),
            n.Busy = !1,
            n
        }
        ,
        H.createSubpanel = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            "string" == typeof e.className && e.className || delete e.className,
            "string" == typeof e.id && e.id || delete e.id;
            var t = ["bibi-subpanel", "bibi-subpanel-" + ("left" == e.Position ? "left" : "right")];
            e.className && t.push(e.className),
            e.className = t.join(" ");
            var n = Array.isArray(e.Sections) ? e.Sections : e.Section ? [e.Section] : [];
            delete e.Sections,
            delete e.Section;
            var i = U.Body.appendChild(sML.create("div", e));
            return i.Sections = [],
            i.addEventListener(W.pointerdown, (function(e) {
                return e.stopPropagation()
            }
            )),
            i.addEventListener(W.pointerup, (function(e) {
                return e.stopPropagation()
            }
            )),
            H.setToggleAction(i, {
                onopened: function(t) {
                    H.Subpanels.forEach((function(e) {
                        return e == i || e.close({
                            ForAnotherSubpanel: !0
                        })
                    }
                    )),
                    H.OpenedSubpanel = this,
                    this.classList.add("opened"),
                    U.HTML.classList.add("subpanel-opened"),
                    i.Opener && H.setUIState(i.Opener, "active"),
                    e.onopened && e.onopened.apply(i, arguments)
                },
                onclosed: function(t) {
                    this.classList.remove("opened"),
                    H.OpenedSubpanel == this && setTimeout((function() {
                        return H.OpenedSubpanel = null
                    }
                    ), 222),
                    t && t.ForAnotherSubpanel || U.HTML.classList.remove("subpanel-opened"),
                    i.Opener && H.setUIState(i.Opener, "default"),
                    e.onclosed && e.onclosed.apply(i, arguments)
                }
            }),
            i.bindOpener = function(e) {
                return W.add(e, "bibi:tapped", (function() {
                    return i.toggle()
                }
                )),
                i.Opener = e,
                i.Opener
            }
            ,
            i.Opener && i.bindOpener(i.Opener),
            W.add("bibi:opened-panel", i.close),
            W.add("bibi:closes-utilities", i.close),
            H.Subpanels.push(i),
            i.addSection = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = H.createSubpanelSection(e);
                return t ? (t.Subpanel = this,
                this.appendChild(t),
                this.Sections.push(t),
                t) : null
            }
            ,
            n.forEach((function(e) {
                return i.addSection(e)
            }
            )),
            i
        }
        ,
        H.createSubpanelSection = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            "string" == typeof e.className && e.className || delete e.className,
            "string" == typeof e.id && e.id || delete e.id;
            var t = ["bibi-subpanel-section"];
            e.className && t.push(e.className),
            e.className = t.join(" ");
            Array.isArray(e.PGroups) ? e.PGroups : e.PGroup && e.PGroup;
            delete e.PGroups,
            delete e.PGroup;
            var n = Array.isArray(e.ButtonGroups) ? e.ButtonGroups : e.ButtonGroup ? [e.ButtonGroup] : [];
            delete e.ButtonGroups,
            delete e.ButtonGroup;
            var i = sML.create("div", e);
            return i.Labels && (i.Labels = H.distillLabels(i.Labels),
            i.appendChild(sML.create("div", {
                className: "bibi-hgroup"
            })).appendChild(sML.create("p", {
                className: "bibi-h"
            })).appendChild(sML.create("span", {
                className: "bibi-h-label",
                innerHTML: i.Labels.default[U.Language]
            }))),
            i.ButtonGroups = [],
            i.addButtonGroup = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = H.createButtonGroup(e);
                return this.appendChild(t),
                this.ButtonGroups.push(t),
                t
            }
            ,
            n.forEach((function(e) {
                e && i.addButtonGroup(e)
            }
            )),
            i
        }
        ,
        H.setToggleAction = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return sML.edit(e, {
                UIState: "default",
                open: function(n) {
                    return new Promise((function(i) {
                        "default" == e.UIState && (H.setUIState(e, "active"),
                        t.onopened && t.onopened.call(e, n)),
                        i(n)
                    }
                    ))
                },
                close: function(n) {
                    return new Promise((function(i) {
                        "active" == e.UIState && (H.setUIState(e, "default"),
                        t.onclosed && t.onclosed.call(e, n)),
                        i(n)
                    }
                    ))
                },
                toggle: function(t) {
                    return "default" == e.UIState ? e.open(t) : e.close(t)
                }
            })
        }
        ,
        H.setFeedback = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e.Labels = H.distillLabels(e.Labels),
            e.Labels && (t.Help && (e.showHelp = function() {
                return H.Help && e.Labels[e.UIState] && H.Help.show(e.Labels[e.UIState][U.Language]),
                e
            }
            ,
            e.hideHelp = function() {
                return H.Help && H.Help.hide(),
                e
            }
            ),
            e.Notes && (e.note = function() {
                return e.Labels[e.UIState] && setTimeout((function() {
                    return H.note(e.Labels[e.UIState][U.Language])
                }
                ), 0),
                e
            }
            )),
            U.TouchOS || (H.TouchObserver.observeElementHover(e),
            H.TouchObserver.setElementHoverActions(e)),
            H.TouchObserver.observeElementTap(e, t),
            H.TouchObserver.setElementTapActions(e),
            H.setUIState(e, t.Checked ? "active" : "default"),
            e
        }
        ,
        H.setUIState = function(e, t) {
            if (t || (t = "default"),
            e.PreviousUIState = e.UIState,
            t != e.UIState)
                return e.UIState = t,
                e.tagName && (e.Labels && e.Labels[e.UIState] && e.Labels[e.UIState][U.Language] && (e.title = e.Labels[e.UIState][U.Language].replace(/<[^>]+>/g, ""),
                e.Label && (e.Label.innerHTML = e.Labels[e.UIState][U.Language])),
                sML.replaceClass(e, e.PreviousUIState, e.UIState)),
                e.UIState
        }
        ,
        H.isPointerStealth = function() {
            var e = !1;
            return H.isPointerStealth.Checkers.forEach((function(t) {
                return e = !!t() || e
            }
            )),
            e
        }
        ,
        H.isPointerStealth.Checkers = [],
        H.isPointerStealth.addChecker = function(e) {
            return "function" != typeof e || H.isPointerStealth.Checkers.includes(e) ? H.isPointerStealth.Checkers.length : H.isPointerStealth.Checkers.push(e)
        }
        ,
        H.distillLabels = function(e) {
            for (var t in "object" == I(e) && e || (e = {}),
            e)
                e[t] = H.distillLabels.distillLanguage(e[t]);
            return e.default || (e.default = H.distillLabels.distillLanguage()),
            !e.active && e.default && (e.active = e.default),
            !e.disabled && e.default && (e.disabled = e.default),
            e
        }
        ,
        H.distillLabels.distillLanguage = function(e) {
            return "object" == I(e) && e || (e = {
                default: e
            }),
            "string" != typeof e.default && ("string" == typeof e.en ? e.default = e.en : "string" == typeof e[U.Language] ? e.default = e[U.Language] : e.default = ""),
            "string" != typeof e[U.Language] && ("string" == typeof e.default ? e[U.Language] = e.default : "string" == typeof e.en ? e[U.Language] = e.en : e[U.Language] = ""),
            e
        }
        ,
        H.orthogonal = function(e) {
            return F["orthogonal-" + e]["paged" == F.RVM ? 0 : 1]
        }
        ,
        H.isScrollable = function() {
            return F.ARA == F.SLA && 1 == H.Loupe.CurrentTransformation.Scale
        }
        ,
        H.getBookIcon = function() {
            return sML.create("div", {
                className: "book-icon",
                innerHTML: "<span></span>"
            })
        }
        ;
        var D = {};
        x.preset = function(e) {
            return x.at1st.List.push((function() {
                x.applyFilteredSettingsTo(D, e, [x.SettingTypes, x.SettingTypes_PresetOnly], "Fill"),
                delete D.book,
                D.Script = document.getElementById("bibi-preset")
            }
            ))
        }
        ,
        D.initialize = function() {
            var e, t = location.href.split("?")[0];
            D.bookshelf = new URL(D.bookshelf || "../../bibi-bookshelf",D.Script.src).href.replace(/\/$/, ""),
            D.extensions = ((e = document.getElementById("bibi-preset").getAttribute("data-bibi-extensions")) && (e = e.trim().replace(/\s+/, " ").split(" ").map((function(e) {
                return {
                    src: new URL(e,t).href
                }
            }
            ))).length && (D.extensions = e),
            Array.isArray(D.extensions) ? D.extensions.filter((function(e) {
                if (e.hasOwnProperty("-spell-of-activation-")) {
                    var t = e["-spell-of-activation-"];
                    if (!t || !/^[a-zA-Z0-9_\-]+$/.test(t) || !R.hasOwnProperty(t))
                        return !1
                }
                return !(!e || !e.src || "string" != typeof e.src) && (e.src = new URL(e.src,D.Script.src).href)
            }
            )) : []),
            delete D.initialize
        }
        ;
        var R = {
            translateData: function(e) {
                var t = s(e, 2)
                  , n = t[0]
                  , i = t[1];
                switch (n) {
                case "paged":
                case "horizontal":
                case "vertical":
                    i = n,
                    n = "reader-view-mode";
                    break;
                case "view":
                case "rvm":
                    n = "reader-view-mode";
                    break;
                case "dppd":
                case "default-ppd":
                    n = "default-page-progression-direction";
                    break;
                case "pagination":
                    n = "pagination-method"
                }
                return [n, i]
            }
        };
        x.at1st.List.unshift((function() {
            var e = location.search;
            if ("string" == typeof e) {
                var t = e.replace(/^\?/, "").split("&").reduce((function(e, t) {
                    var n = s(t.split("="), 2)
                      , i = n[0]
                      , r = n[1];
                    switch (r || (r = void 0),
                    i) {
                    case "log":
                        r || (r = "1");
                        break;
                    case "book":
                        if (!r)
                            return e;
                        break;
                    case "zine":
                    case "wait":
                    case "debug":
                        r || (r = "true");
                        break;
                    default:
                        var o = s(R.translateData([i, r]), 2);
                        i = o[0],
                        r = o[1]
                    }
                    return e[i] = r,
                    e
                }
                ), {});
                Object.assign(R, x.applyFilteredSettingsTo(t, t, [x.SettingTypes, x.SettingTypes_UserOnly])),
                R.book || delete R.zine,
                R.debug && (x.Debug = !0,
                R.log = 9)
            }
        }
        )),
        R.initialize = function() {
            var e = x.applyFilteredSettingsTo({}, R, [x.SettingTypes, x.SettingTypes_UserOnly])
              , t = function() {
                var e = location.hash;
                if ("string" != typeof e)
                    return {};
                var t = {}
                  , n = e.match(new RegExp("([&#])([a-zA-Z_]+)\\(([^\\(\\)]+)\\)","g"));
                for (var i in n && n.length && n.forEach((function(n) {
                    var i = n.match(new RegExp("([&#])([a-zA-Z_]+)\\(([^\\(\\)]+)\\)"))
                      , r = i[2].toLowerCase()
                      , o = i[3];
                    o && (r = "bibi" == r ? "Bibi" : "jo" == r ? "Jo" : "epubcfi" == r ? "EPUBCFI" : void 0) && (t[r] = o),
                    e = e.replace(n, i[1])
                }
                )),
                t["#"] = e.replace(/^#|&$/, ""),
                t)
                    if ("EPUBCFI" != i) {
                        var r = R.initialize.parseDataString(t[i]);
                        r && (t[i] = x.applyFilteredSettingsTo({}, r, [x.SettingTypes, x.SettingTypes_UserOnly]),
                        delete t[i].book)
                    }
                return t
            }();
            for (var n in t["#"] && Object.assign(e, e["#"] = t["#"]),
            t.Bibi && Object.assign(e, e.Bibi = t.Bibi),
            t.Jo && (Object.assign(e, e.Jo = t.Jo),
            history.replaceState && history.replaceState(null, null, location.href.replace(/[&#]jo\([^\)]*\)$/g, ""))),
            t.EPUBCFI && (e.EPUBCFI = t.EPUBCFI),
            e.Query = {},
            R)
                "function" != typeof R[n] && (e.Query[n] = R[n]),
                R[n] = void 0,
                delete R[n];
            Object.assign(R, e),
            "number" == typeof R.nav ? R.nav < 1 ? delete R.nav : _.StartOn = {
                Nav: R.nav
            } : "string" == typeof R.p ? _.StartOn = {
                P: R.p
            } : "number" == typeof R.iipp ? _.StartOn = {
                IIPP: R.iipp
            } : "string" == typeof R.edge ? _.StartOn = {
                Edge: R.edge
            } : "string" == typeof R.EPUBCFI && W.add("bibi:readied", (function() {
                X.EPUBCFI && (_.StartOn = X.EPUBCFI.getDestination(R.EPUBCFI))
            }
            ))
        }
        ,
        R.initialize.parseDataString = function(e) {
            if ("string" != typeof e || !e)
                return null;
            var t = {}
              , n = !1;
            return e.split("&").forEach((function(e) {
                var i = R.translateData(e.split("="));
                i && null != i[1] && (t[i[0]] = i[1],
                n = !0)
            }
            )),
            n ? t : null
        }
        ;
        var N = {
            initialize: function() {
                var e = document.getElementById("bibi-preset").getAttribute("data-bibi-bookshelf");
                e && (N.bookshelf = new URL(e,location.href.split("?")[0])),
                document.body.getAttribute("data-bibi-book") && (N.book = document.body.getAttribute("data-bibi-book"));
                var t = document.getElementById("bibi-book-data");
                if (t) {
                    var n = t.innerText.trim();
                    if (n) {
                        var i = t.getAttribute("data-bibi-book-mimetype");
                        /^application\/(epub\+zip|zip|x-zip(-compressed)?)$/i.test(i) && (N["book-data"] = n,
                        N["book-data-mimetype"] = i)
                    }
                    t.innerHTML = "",
                    t.parentNode.removeChild(t)
                }
                if (N.book || N["book-data"]) {
                    var r = location.href.replace(/([\?&])book=[^&]*&?/, "$1");
                    r.split("?")[1] || (r = r.split("?")[0]),
                    history.replaceState(null, document.title, r)
                }
                delete N.initialize
            }
        }
          , F = {
            initialize: function() {
                for (var e in F)
                    "function" != typeof F[e] && delete F[e];
                if (sML.applyRtL(F, D, "ExceptFunctions"),
                sML.applyRtL(F, R, "ExceptFunctions"),
                sML.applyRtL(F, N, "ExceptFunctions"),
                x.SettingTypes["yes-no"].concat(x.SettingTypes_PresetOnly["yes-no"]).concat(x.SettingTypes_UserOnly["yes-no"]).forEach((function(e) {
                    return F[e] = "yes" == F[e] || "mobile" == F[e] && U.TouchOS || "desktop" == F[e] && !U.TouchOS
                }
                )),
                F["trustworthy-origins"].includes(U.Origin) || F["trustworthy-origins"].unshift(U.Origin),
                F.book = !F["book-data"] && "string" == typeof F.book && F.book ? new URL(F.book,F.bookshelf + "/").href : "",
                !F["book-data"] && F.book && !F["trustworthy-origins"].includes(new URL(F.book).origin))
                    throw "The Origin of the Path of the Book Is Not Allowed.";
                "number" != typeof F["parent-bibi-index"] && delete F["parent-bibi-index"],
                F.book || !window.File ? (F["accept-local-file"] = !1,
                F["accept-blob-converted-data"] = !1,
                F["accept-base64-encoded-data"] = !1) : F["accept-local-file"] = !(!F["accept-local-file"] || !(F["extract-if-necessary"].includes("*") || F["extract-if-necessary"].includes(".epub") || F["extract-if-necessary"].includes(".zip"))),
                F.autostart = !F.wait && (!F.book || (window.parent != window ? F["autostart-embedded"] : F.autostart)),
                F["start-in-new-window"] = window.parent != window && !F.autostart && F["start-embedded-in-new-window"],
                F["default-page-progression-direction"] = "rtl" == F["default-page-progression-direction"] ? "rtl" : "ltr",
                ["history", "bookmarks"].forEach((function(e) {
                    0 == F["max-" + e] && (F["use-" + e] = !1),
                    F["use-" + e] || (F["max-" + e] = 0)
                }
                )),
                F["use-menubar"] || (F["use-full-height"] = !0),
                (sML.UA.Trident || sML.UA.EdgeHTML) && (F["pagination-method"] = "auto"),
                F["reader-view-mode"] || (F["reader-view-mode"] = "paged"),
                U.Biscuits && W.bind("bibi:initialized-book", (function() {
                    var e = U.Biscuits.remember("Book");
                    F["keep-settings"] && (!R["reader-view-mode"] && e.RVM && (F["reader-view-mode"] = e.RVM),
                    !R["full-breadth-layout-in-scroll"] && e.FBL && (F["full-breadth-layout-in-scroll"] = e.FBL)),
                    F["resume-from-last-position"] && !_.StartOn && e.Position && e.Position.IIPP && (_.StartOn = sML.clone(e.Position))
                }
                )),
                F.Modes = {
                    "book-rendition-layout": {
                        SH: "BRL",
                        CNP: "book"
                    },
                    "reader-view-mode": {
                        SH: "RVM",
                        CNP: "view"
                    },
                    "page-progression-direction": {
                        SH: "PPD",
                        CNP: "page"
                    },
                    "spread-layout-axis": {
                        SH: "SLA",
                        CNP: "spread"
                    },
                    "spread-layout-direction": {
                        SH: "SLD",
                        CNP: "spread"
                    },
                    "apparent-reading-axis": {
                        SH: "ARA",
                        CNP: "appearance"
                    },
                    "apparent-reading-direction": {
                        SH: "ARD",
                        CNP: "appearance"
                    },
                    "navigation-layout-direction": {
                        SH: "NLD",
                        CNP: "nav"
                    }
                };
                var t = function(e) {
                    var t = F.Modes[e];
                    Object.defineProperty(F, t.SH, {
                        get: function() {
                            return F[e]
                        },
                        set: function(t) {
                            return F[e] = t
                        }
                    }),
                    delete t.SH
                };
                for (var n in F.Modes)
                    t(n);
                W.dispatch("bibi:initialized-settings")
            },
            update: function(e) {
                var t = {};
                for (var n in F.Modes)
                    t[n] = F[n];
                if ("object" == I(e))
                    for (var i in e)
                        "function" != typeof F[i] && (F[i] = e[i]);
                for (var r in F["book-rendition-layout"] = A.Package.Metadata["rendition:layout"],
                F["allow-placeholders"] = F["allow-placeholders"] && A.AllowPlaceholderItems,
                F.FontFamilyStyleIndex && sML.deleteCSSRule(F.FontFamilyStyleIndex),
                F["ui-font-family"] && (F.FontFamilyStyleIndex = sML.appendCSSRule("html", "font-family: " + F["ui-font-family"] + " !important;")),
                F["page-progression-direction"] = A.PPD,
                "x" == F["pagination-method"] ? F["spread-layout-axis"] = "vertical" == F["reader-view-mode"] ? "vertical" : "horizontal" : F["spread-layout-axis"] = function() {
                    if ("paged" != F["reader-view-mode"])
                        return F["reader-view-mode"];
                    if ("reflowable" == F["book-rendition-layout"])
                        switch (A.WritingMode) {
                        case "tb-rl":
                        case "tb-lr":
                            return "vertical"
                        }
                    return "horizontal"
                }(),
                F["apparent-reading-axis"] = "paged" == F["reader-view-mode"] ? "horizontal" : F["reader-view-mode"],
                F["apparent-reading-direction"] = "vertical" == F["reader-view-mode"] ? "ttb" : F["page-progression-direction"],
                F["spread-layout-direction"] = "vertical" == F["spread-layout-axis"] ? "ttb" : F["page-progression-direction"],
                F["navigation-layout-direction"] = F["fix-nav-ttb"] || "rtl" != F["page-progression-direction"] ? "ttb" : "rtl",
                F.Modes) {
                    var o = F.Modes[r].CNP + "-"
                      , a = o + t[r]
                      , s = o + F[r];
                    a != s && U.HTML.classList.remove(a),
                    U.HTML.classList.add(s)
                }
                z.update(),
                W.dispatch("bibi:updated-settings", F)
            }
        }
          , z = {
            update: function() {
                z.probe("L", F["spread-layout-axis"]),
                z.probe("A", F["apparent-reading-axis"]),
                z.DDD = function() {
                    switch (F.PPD) {
                    case "ltr":
                        return "ttb" != F.ARD ? {
                            left: -1,
                            right: 1,
                            top: "-1",
                            bottom: "1"
                        } : {
                            left: "-1",
                            right: "1",
                            top: -1,
                            bottom: 1
                        };
                    case "rtl":
                        return "ttb" != F.ARD ? {
                            left: 1,
                            right: -1,
                            top: "-1",
                            bottom: "1"
                        } : {
                            left: "1",
                            right: "-1",
                            top: -1,
                            bottom: 1
                        }
                    }
                }()
            },
            probe: function(e, t) {
                var n = ["left", "right"];
                "ltr" != F.PPD && n.reverse(),
                "horizontal" == t ? (z._app(e, "BASE", {
                    b: n[0],
                    a: n[1],
                    s: "top",
                    e: "bottom"
                }),
                z._app(e, "SIZE", {
                    b: "height",
                    l: "width"
                }),
                z._app(e, "OOBL", {
                    b: "top",
                    l: "left"
                }),
                z._app(e, "OEBL", {
                    b: "bottom",
                    l: "right"
                }),
                z._app(e, "AXIS", {
                    b: "y",
                    l: "x"
                }),
                z[e + "_AXIS_D"] = "ltr" == F.PPD ? 1 : -1) : (z._app(e, "BASE", {
                    b: "top",
                    a: "bottom",
                    s: n[0],
                    e: n[1]
                }),
                z._app(e, "SIZE", {
                    b: "width",
                    l: "height"
                }),
                z._app(e, "OOBL", {
                    b: "left",
                    l: "top"
                }),
                z._app(e, "OEBL", {
                    b: "right",
                    l: "bottom"
                }),
                z._app(e, "AXIS", {
                    b: "x",
                    l: "y"
                }),
                z[e + "_AXIS_D"] = 1)
            },
            _app: function(e, t, n) {
                for (var i in n)
                    z[[e, t, i].join("_")] = n[i],
                    z[[e, t, sML.capitalise(i)].join("_")] = sML.capitalise(n[i])
            },
            d2d: function(e, t) {
                var n = z.DDD[e];
                return t ? 1 * n : "number" == typeof n ? n : 0
            }
        }
          , U = {
            log: function(e, t, n) {
                var i = ""
                  , r = "";
                switch (n ? (i = t,
                r = n) : /^<..>$/.test(t) ? r = t : t && (i = t),
                r) {
                case "<e/>":
                    return console.error(e);
                case "</g>":
                    U.log.Depth--
                }
                if ((e || i) && (U.log.Depth <= U.log.Limit || "<b:>" == r || "</b>" == r || "<*/>" == r)) {
                    var o = U.log.Depth <= 1 ? U.stamp(e) : 0
                      , a = []
                      , s = [];
                    if (e)
                        switch (r) {
                        case "<b:>":
                            a.unshift("📕"),
                            a.push("%c" + e),
                            s.push(U.log.BStyle),
                            a.push("%c(v".concat(x.version, ")") + (x.Dev ? ":%cDEV" : "")),
                            s.push(U.log.NStyle),
                            x.Dev && s.push(U.log.BStyle);
                            break;
                        case "</b>":
                            a.unshift("📖"),
                            a.push("%c" + e),
                            s.push(U.log.BStyle),
                            U.log.Limit && (a.push("%c(".concat(Math.floor(o / 1e3) + "." + String(o % 1e3).padStart(3, 0), "sec)")),
                            s.push(U.log.NStyle));
                            break;
                        case "<g:>":
                            a.unshift("┌"),
                            a.push(e);
                            break;
                        case "</g>":
                            a.unshift("└"),
                            a.push(e);
                            break;
                        default:
                            a.unshift("-"),
                            a.push(e)
                        }
                    for (var c = U.log.Depth; c > 1; c--)
                        a.unshift("│");
                    a.unshift("%cBibi:"),
                    s.unshift(U.log.NStyle),
                    U.log.log("log", a, s, i)
                }
                switch (r) {
                case "<g:>":
                    U.log.Depth++
                }
            }
        };
        U.log.initialize = function() {
            if (parent && parent != window)
                return U.log = function() {
                    return !0
                }
                ;
            U.log.Limit = R.hasOwnProperty("log") && "number" == typeof (R.log *= 1) ? R.log : 0,
            U.log.Depth = 1,
            U.log.NStyle = "font: normal normal 10px/1 Menlo, Consolas, monospace;",
            U.log.BStyle = "font: normal bold   10px/1 Menlo, Consolas, monospace;",
            U.log.distill = sML.UA.Trident || sML.UA.EdgeHTML ? function(e, t) {
                return [e.join(" ").replace(/%c/g, "")]
            }
            : function(e, t) {
                return [e.join(" ")].concat(t)
            }
            ,
            U.log.log = function(e, t, n, i) {
                var r = U.log.distill(t, n);
                i && r.push(i),
                console[e].apply(console, r)
            }
        }
        ,
        U.error = function(e) {
            U.Busy = !1,
            U.HTML.classList.remove("busy"),
            U.HTML.classList.remove("loading"),
            U.HTML.classList.remove("waiting"),
            H.note(e, 99999999999, "ErrorOccured"),
            U.log(e, "<e/>"),
            W.dispatch("bibi:x_x", "string" == typeof e ? new Error(e) : e)
        }
        ,
        U.TimeCard = {},
        U.getTimeLabel = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now() - x.TimeOrigin;
            return [e / 1e3 / 60 / 60, e / 1e3 / 60 % 60, e / 1e3 % 60].map((function(e) {
                return String(Math.floor(e)).padStart(2, 0)
            }
            )).join(":") + "." + String(e % 1e3).padStart(3, 0)
        }
        ,
        U.stamp = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.TimeCard
              , n = Date.now() - x.TimeOrigin
              , i = U.getTimeLabel(n);
            return t[i] || (t[i] = []),
            t[i].push(e),
            n
        }
        ,
        U.isToBeExtractedIfNecessary = function(e) {
            if (!e || !F["extract-if-necessary"].length)
                return !1;
            if (F["extract-if-necessary"].includes("*"))
                return !0;
            if (F["extract-if-necessary"].includes(""))
                return !/(\.[\w\d]+)+$/.test(e);
            for (var t = F["extract-if-necessary"].length, n = 0; n < t; n++)
                if (new RegExp(F["extract-if-necessary"][n].replace(/\./g, "\\.") + "$","i").test(e))
                    return !0;
            return !1
        }
        ,
        U.src = function(e) {
            return A.Package.Manifest[e.Path] || (A.Package.Manifest[e.Path] = e),
            e["media-type"] || (e["media-type"] = U.getContentType(e.Path)),
            A.Package.Manifest[e.Path]
        }
        ,
        U.RangeLoader = null,
        U.cancelExtraction = function(e) {
            return e.Resources && e.Resources.forEach((function(e) {
                return e.Retlieved ? Promise.resolve() : U.RangeLoader.abort(e.Path)
            }
            )),
            e.Retlieved ? Promise.resolve() : U.RangeLoader.abort(e.Path)
        }
        ,
        U.extract = function(e) {
            return (e = U.src(e)).Retlieving ? e.Retlieving : e.Content ? Promise.resolve(e) : e.URI ? U.download(e) : e.Retlieving = U.RangeLoader.getBuffer(e.Path).then((function(t) {
                return U.isBin(e) ? (e.DataType = "Blob",
                e.Content = new Blob([t],{
                    type: e["media-type"]
                })) : (e.DataType = "Text",
                e.Content = new TextDecoder("utf-8").decode(new Uint8Array(t))),
                e.Retlieved = !0,
                delete e.Retlieving,
                e
            }
            )).catch((function(t) {
                return delete e.Retlieving,
                Promise.reject(/404/.test(t) ? x.ErrorMessages.NotFound : /aborted/.test(t) ? x.ErrorMessages.Canceled : /fetch/.test(t) ? x.ErrorMessages.CORSBlocked : /not found/.test(t) || /invalid/.test(t) ? x.ErrorMessages.DataInvalid : t)
            }
            ))
        }
        ,
        U.download = function(e) {
            if ((e = U.src(e)).Retlieving)
                return e.Retlieving;
            if (e.Content)
                return Promise.resolve(e);
            var t = U.isBin(e)
              , n = new XMLHttpRequest
              , i = e.URI ? e.URI : (/^([a-z]+:\/\/|\/)/.test(e.Path) ? "" : A.Path + "/") + e.Path;
            return e.Retlieving = new Promise((function(e, r) {
                n.open("GET", i, !0),
                n.responseType = t ? "blob" : "text",
                n.onloadend = function() {
                    return 200 == n.status ? e() : r()
                }
                ,
                n.onerror = function() {
                    return r()
                }
                ,
                n.send(null)
            }
            )).then((function() {
                return e.DataType = t ? "Blob" : "Text",
                e.Content = n.response,
                e.Retlieved = !0,
                delete e.Retlieving,
                e
            }
            )).catch((function() {
                return delete e.Retlieving,
                Promise.reject(404 == n.status ? x.ErrorMessages.NotFound : 0 == n.status ? x.ErrorMessages.CORSBlocked : n.status + " " + n.statusText)
            }
            ))
        }
        ,
        U.tryRangeRequest = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x.Script.src
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0-0";
            return new Promise((function(n, i) {
                var r = new XMLHttpRequest;
                r.onloadend = function() {
                    return 206 != r.status ? i() : n()
                }
                ,
                r.open("GET", e, !0),
                r.setRequestHeader("Range", "bytes=" + t),
                r.send(null)
            }
            ))
        }
        ,
        U.file = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise((function(n, i) {
                if (e = U.src(e),
                t.URI && e.URI)
                    return n(e);
                (function() {
                    if (e.Content)
                        return Promise.resolve(e);
                    if (e.URI || !A.ExtractionPolicy)
                        return U.download(e);
                    switch (A.ExtractionPolicy) {
                    case "on-the-fly":
                        return U.extract(e);
                    case "at-once":
                        return Promise.reject('File Not Included: "'.concat(e.Path, '"'))
                    }
                }
                )().then((function(e) {
                    return "function" == typeof t.initialize && t.initialize(e),
                    t.Preprocess && !e.Preprocessed ? U.preprocess(e) : e
                }
                )).then((function(e) {
                    t.URI && (e.URI || (e.URI = U.createBlobURL(e.DataType, e.Content, e["media-type"])),
                    e.Content = ""),
                    n(e)
                }
                )).catch(i)
            }
            ))
        }
        ,
        U.isBin = function(e) {
            return /\.(aac|gif|jpe?g|m4[av]|mp[g34]|ogg|[ot]tf|pdf|png|web[mp]|woff2?)$/i.test(e.Path)
        }
        ,
        U.createBlobURL = function(e, t, n) {
            return URL.createObjectURL("Text" == e ? new Blob([t],{
                type: n
            }) : t)
        }
        ,
        U.ContentTypes = {
            pdf: "application/pdf",
            "xht(ml)?": "application/xhtml+xml",
            xml: "application/xml",
            aac: "audio/aac",
            mp3: "audio/mpeg",
            otf: "font/opentype",
            ttf: "font/truetype",
            woff: "font/woff",
            woff2: "font/woff2",
            gif: "image/gif",
            "jpe?g": "image/jpeg",
            png: "image/png",
            svg: "image/svg+xml",
            webp: "image/webp",
            css: "text/css",
            js: "text/javascript",
            "html?": "text/html",
            mp4: "video/mp4",
            webm: "video/webm",
            "ya?ml": "application/x-yaml"
        },
        U.getContentType = function(e) {
            for (var t in U.ContentTypes)
                if (new RegExp("\\." + t + "$").test(e))
                    return U.ContentTypes[t];
            return null
        }
        ,
        U.preprocess = function(e) {
            e = U.src(e);
            var t = []
              , n = U.preprocess.getSetting(e.Path);
            if (!n)
                return Promise.resolve(e);
            var i = [];
            if (n.ReplaceRules && (e.Content = n.ReplaceRules.reduce((function(e, t) {
                return e.replace(t[0], t[1])
            }
            ), e.Content)),
            n.ResolveRules) {
                var r = e.Path.replace(/\/?[^\/]+$/, "");
                n.ResolveRules.forEach((function(n) {
                    return n.Patterns.forEach((function(o) {
                        var a = n.getRE(o.Attribute)
                          , s = e.Content.match(a);
                        if (s) {
                            var c = new RegExp("\\.(" + o.Extensions + ")$","i");
                            s.forEach((function(o) {
                                var s = o.replace(a, n.PathRef)
                                  , l = U.getPath(r, (/^(\.*\/+|#)/.test(s) ? "" : "./") + s).split("#");
                                if (c.test(l[0])) {
                                    var u = U.src({
                                        Path: l[0]
                                    });
                                    t.push(u),
                                    i.push(U.file(u, {
                                        Preprocess: !0,
                                        URI: !0
                                    }).then((function(t) {
                                        l[0] = t.URI,
                                        e.Content = e.Content.replace(o, o.replace(s, l.join("#")))
                                    }
                                    )))
                                }
                            }
                            ))
                        }
                    }
                    ))
                }
                ))
            }
            return Promise.all(i).then((function() {
                return e.Preprocessed = !0,
                e.Resources = t,
                e
            }
            ))
        }
        ,
        U.preprocess.getSetting = function(e) {
            var t = U.preprocess.Settings;
            for (var n in t)
                if (new RegExp("\\.(" + n + ")$","i").test(e))
                    return "function" == typeof t[n].init ? t[n].init() : t[n];
            return null
        }
        ,
        U.preprocess.Settings = {
            css: {
                ReplaceRules: [[/\/\*[.\s\S]*?\*\/|[^\{\}]+\{\s*\}/gm, ""], [/[\r\n]+/g, "\n"]],
                ResolveRules: [{
                    getRE: function() {
                        return /@import\s+["'](?!(?:https?|data):)(.+?)['"]/g
                    },
                    PathRef: "$1",
                    Patterns: [{
                        Extensions: "css"
                    }]
                }, {
                    getRE: function() {
                        return /@import\s+url\(["']?(?!(?:https?|data):)(.+?)['"]?\)/g
                    },
                    PathRef: "$1",
                    Patterns: [{
                        Extensions: "css"
                    }]
                }, {
                    getRE: function() {
                        return /url\(["']?(?!(?:https?|data):)(.+?)['"]?\)/g
                    },
                    PathRef: "$1",
                    Patterns: [{
                        Extensions: "gif|png|jpe?g|svg|ttf|otf|woff"
                    }]
                }],
                init: function() {
                    var e = this.ReplaceRules;
                    return e.push([/(-(epub|webkit)-)?column-count\s*:\s*1\s*([;\}])/gm, "column-count: auto$3"]),
                    e.push([/(-(epub|webkit)-)?text-underline-position\s*:/gm, "text-underline-position:"]),
                    sML.UA.Chromium || sML.UA.WebKit ? this : (e.push([/-(epub|webkit)-/gm, ""]),
                    sML.UA.Gecko ? (e.push([/text-combine-horizontal\s*:\s*([^;\}]+)\s*([;\}])/gm, "text-combine-upright: $1$2"]),
                    e.push([/text-combine\s*:\s*horizontal\s*([;\}])/gm, "text-combine-upright: all$1"]),
                    this) : (sML.UA.EdgeHTML && (e.push([/text-combine-(upright|horizontal)\s*:\s*([^;\}\s]+)\s*([;\}])/gm, "text-combine-horizontal: $2; text-combine-upright: $2$3"]),
                    e.push([/text-combine\s*:\s*horizontal\s*([;\}])/gm, "text-combine-horizontal: all; text-combine-upright: all$1"])),
                    sML.UA.Trident && (e.push([/writing-mode\s*:\s*vertical-rl\s*([;\}])/gm, "writing-mode: tb-rl$1"]),
                    e.push([/writing-mode\s*:\s*vertical-lr\s*([;\}])/gm, "writing-mode: tb-lr$1"]),
                    e.push([/writing-mode\s*:\s*horizontal-tb\s*([;\}])/gm, "writing-mode: lr-tb$1"]),
                    e.push([/text-combine-(upright|horizontal)\s*:\s*([^;\}\s]+)\s*([;\}])/gm, "-ms-text-combine-horizontal: $2$3"]),
                    e.push([/text-combine\s*:\s*horizontal\s*([;\}])/gm, "-ms-text-combine-horizontal: all$1"])),
                    /^(zho?|chi|kor?|ja|jpn)$/.test(A.Language) && e.push([/text-align\s*:\s*justify\s*([;\}])/gm, "text-align: justify; text-justify: inter-ideograph$1"]),
                    this))
                }
            },
            svg: {
                ReplaceRules: [[/<!--\s+[.\s\S]*?\s+-->/gm, ""]],
                ResolveRules: [{
                    getRE: function(e) {
                        return new RegExp("<\\??[a-zA-Z:\\-]+[^>]*? (" + e + ")\\s*=\\s*[\"'](?!(?:https?|data):)(.+?)['\"]","g")
                    },
                    PathRef: "$2",
                    Patterns: [{
                        Attribute: "href",
                        Extensions: "css"
                    }, {
                        Attribute: "src",
                        Extensions: "svg"
                    }, {
                        Attribute: "src|xlink:href",
                        Extensions: "gif|png|jpe?g"
                    }]
                }]
            },
            "html?|xht(ml)?|xml": {
                ReplaceRules: [[/<!--\s+[.\s\S]*?\s+-->/gm, ""]],
                ResolveRules: [{
                    getRE: function(e) {
                        return new RegExp("<\\??[a-zA-Z:\\-]+[^>]*? (" + e + ")\\s*=\\s*[\"'](?!(?:https?|data):)(.+?)['\"]","g")
                    },
                    PathRef: "$2",
                    Patterns: [{
                        Attribute: "href",
                        Extensions: "css"
                    }, {
                        Attribute: "src",
                        Extensions: "js|svg"
                    }, {
                        Attribute: "src|xlink:href",
                        Extensions: "gif|png|jpe?g|mp([34]|e?g)|m4[av]"
                    }, {
                        Attribute: "poster",
                        Extensions: "gif|png|jpe?g"
                    }]
                }]
            }
        },
        U.openDocument = function(e) {
          console.log("hi");
          console.log(e.Content);
          console.log(e.Path);
            return U.file(e).then((function(e) {
                return (new DOMParser).parseFromString(e.Content, /\.(xml|opf|ncx)$/i.test(e.Path) ? "text/xml" : "text/html")
            }
            ))
        }
        ,
        U.editCSSRules = function() {
            var e, t;
            "function" == typeof arguments[0] ? (e = arguments[1],
            t = arguments[0]) : "function" == typeof arguments[1] && (e = arguments[0],
            t = arguments[1]),
            e || (e = document),
            e.styleSheets && "function" == typeof t && sML.forEach(e.styleSheets)((function(e) {
                return U.editCSSRulesOfStyleSheet(e, t)
            }
            ))
        }
        ,
        U.editCSSRulesOfStyleSheet = function(e, t) {
            try {
                if (!e.cssRules)
                    return
            } catch (e) {
                return
            }
            for (var n = e.cssRules.length, i = 0; i < n; i++) {
                var r = e.cssRules[i];
                r.cssRules ? U.editCSSRulesOfStyleSheet(r, t) : r.styleSheet ? U.editCSSRulesOfStyleSheet(r.styleSheet, t) : t(r)
            }
        }
        ,
        U.getWritingMode = function(e) {
            var t = getComputedStyle(e);
            return U.WritingModeProperty ? /^vertical-/.test(t[U.WritingModeProperty]) ? ("rtl" == t.direction ? "bt" : "tb") + "-" + (/-lr$/.test(t[U.WritingModeProperty]) ? "lr" : "rl") : /^horizontal-/.test(t[U.WritingModeProperty]) ? ("rtl" == t.direction ? "rl" : "lr") + "-" + (/-bt$/.test(t[U.WritingModeProperty]) ? "bt" : "tb") : /^(lr|rl|tb|bt)-/.test(t[U.WritingModeProperty]) ? t[U.WritingModeProperty] : void 0 : "rtl" == t.direction ? "rl-tb" : "lr-tb"
        }
        ,
        U.getElementInnerText = function(e) {
            var t = "InnerText"
              , n = document.createElement("div");
            return n.innerHTML = e.innerHTML.replace(/ (src(set)?|source|(xlink:)?href)=/g, " data-$1="),
            sML.forEach(n.querySelectorAll("svg"))((function(e) {
                return e.parentNode.removeChild(e)
            }
            )),
            sML.forEach(n.querySelectorAll("video"))((function(e) {
                return e.parentNode.removeChild(e)
            }
            )),
            sML.forEach(n.querySelectorAll("audio"))((function(e) {
                return e.parentNode.removeChild(e)
            }
            )),
            sML.forEach(n.querySelectorAll("img"))((function(e) {
                return e.parentNode.removeChild(e)
            }
            )),
            sML.forEach(n.querySelectorAll("script"))((function(e) {
                return e.parentNode.removeChild(e)
            }
            )),
            sML.forEach(n.querySelectorAll("style"))((function(e) {
                return e.parentNode.removeChild(e)
            }
            )),
            void 0 !== n.textContent ? t = n.textContent : void 0 !== n.innerText && (t = n.innerText),
            t.replace(/[\r\n\s\t ]/g, "")
        }
        ,
        U.getElementCoord = function(e, t) {
            var n = {
                X: e.offsetLeft,
                Y: e.offsetTop
            };
            for (t = t && t.tagName ? t : null; e.offsetParent != t; )
                e = e.offsetParent,
                n.X += e.offsetLeft,
                n.Y += e.offsetTop;
            return n
        }
        ,
        U.getViewportZooming = function() {
            return document.body.clientWidth / window.innerWidth
        }
        ,
        U.getPath = function() {
            var e = ""
              , t = arguments[0];
            if (2 == arguments.length && /^[\w\d]+:\/\//.test(arguments[1]))
                t = arguments[1];
            else
                for (var n = arguments.length, i = 1; i < n; i++)
                    t += "/" + arguments[i];
            for (t.replace(/^([a-zA-Z]+:\/\/[^\/]+)?\/*(.*)$/, (function(n, i, r) {
                e = i,
                t = r
            }
            )); /([^:\/])\/{2,}/.test(t); )
                t = t.replace(/([^:\/])\/{2,}/g, "$1/");
            for (; /\/\.\//.test(t); )
                t = t.replace(/\/\.\//g, "/");
            for (; /[^\/]+\/\.\.\//.test(t); )
                t = t.replace(/[^\/]+\/\.\.\//g, "");
            return t = t.replace(/^(\.\/)+/g, ""),
            e && (t = e + "/" + t),
            t
        }
        ,
        U.fullPath = function(e) {
            return A.Path + A.PathDelimiter + e
        }
        ,
        U.getViewportByMetaContent = function(e) {
            if ("string" == typeof e && /width/.test(e) && /height/.test(e)) {
                var t = 1 * (e = e.replace(/\s+/g, "")).replace(/^.*?width=(\d+).*$/, "$1")
                  , n = 1 * e.replace(/^.*?height=(\d+).*$/, "$1");
                if (!isNaN(t) && !isNaN(n))
                    return {
                        Width: t,
                        Height: n
                    }
            }
            return null
        }
        ,
        U.getViewportByViewBox = function(e) {
            if ("string" == typeof e) {
                var t = e.replace(/^\s+/, "").replace(/\s+$/, "").split(/\s+/);
                if (4 == t.length) {
                    var n = 1 * t[2]
                      , i = 1 * t[3];
                    if (!isNaN(n) && !isNaN(i))
                        return {
                            Width: n,
                            Height: i
                        }
                }
            }
            return null
        }
        ,
        U.getViewportByImage = function(e) {
            if (e && /^img$/i.test(e.tagName)) {
                var t = getComputedStyle(e);
                return {
                    Width: parseInt(t.width),
                    Height: parseInt(t.height)
                }
            }
            return null
        }
        ,
        U.getViewportByOriginalResolution = function(e) {
            if ("string" == typeof e) {
                var t = e.replace(/\s+/, "").split("x");
                if (2 == t.length) {
                    var n = 1 * t[0]
                      , i = 1 * t[1];
                    if (!isNaN(n) && !isNaN(i))
                        return {
                            Width: n,
                            Height: i
                        }
                }
            }
            return null
        }
        ,
        U.isPointableContent = function(e) {
            for (; e; ) {
                if (/^(a|audio|video)$/i.test(e.tagName))
                    return !0;
                e = e.parentElement
            }
            return !1
        }
        ,
        U.stopPropagation = function(e) {
            return e.stopPropagation(),
            !1
        }
        ,
        U.preventDefault = function(e) {
            return e.preventDefault(),
            !1
        }
        ,
        U.getBibiEvent = function(e) {
            if (!e)
                return {};
            var t, n, i, r, o = U.getBibiEventCoord(e), a = F["flipper-width"], s = {
                X: o.X / window.innerWidth,
                Y: o.Y / window.innerHeight
            };
            a < 1 ? (r = t = a,
            n = i = 1 - a) : (n = 1 - (r = a / window.innerWidth),
            i = 1 - (t = a / window.innerHeight));
            var c = {};
            return c.X = s.X < r ? "left" : n < s.X ? "right" : "center",
            c.Y = s.Y < t ? "top" : i < s.Y ? "bottom" : "middle",
            {
                Target: e.target,
                Coord: o,
                Ratio: s,
                Division: c
            }
        }
        ,
        U.getBibiEventCoord = function(e) {
            var t = {
                X: 0,
                Y: 0
            };
            return /^touch/.test(e.type) ? (t.X = e.changedTouches[0].pageX,
            t.Y = e.changedTouches[0].pageY) : (t.X = e.pageX,
            t.Y = e.pageY),
            t = U.getCoordInViewport(t, e.target.ownerDocument)
        }
        ,
        U.getCoordInViewport = function(e, t) {
            if (t == document)
                e.X -= U.Body.scrollLeft,
                e.Y -= U.Body.scrollTop;
            else {
                var n = _.Main
                  , i = H.Loupe.CurrentTransformation || {
                    Scale: 1,
                    TranslateX: 0,
                    TranslateY: 0
                }
                  , r = i.Scale
                  , o = n.offsetWidth / 2
                  , a = n.offsetHeight / 2
                  , s = i.TranslateX
                  , c = i.TranslateY
                  , l = t.documentElement.Item
                  , u = l.Scale
                  , d = U.getElementCoord(l, n);
                "pre-paginated" == l["rendition:layout"] || l.Outsourcing || (d.X += F["item-padding-left"],
                d.Y += F["item-padding-top"]),
                e.X = Math.floor(n.offsetLeft + (o + s + (d.X + e.X * u - n.scrollLeft - o) * r)),
                e.Y = Math.floor(n.offsetTop + (a + c + (d.Y + e.Y * u - n.scrollTop - a) * r))
            }
            return e
        }
        ,
        U.Cookies = {
            Label: "bibi",
            remember: function(e) {
                var t = JSON.parse(sML.Cookies.read(U.Cookies.Label) || "{}");
                return console.log("Cookies:", t),
                "string" == typeof e && e ? t[e] : t
            },
            eat: function(e, t, n) {
                if ("string" != typeof e || !e)
                    return !1;
                if ("object" != I(t))
                    return !1;
                var i = U.Cookies.remember();
                for (var r in "object" != I(i[e]) && (i[e] = {}),
                t) {
                    var o = t[r];
                    "function" != typeof o && (i[e][r] = o)
                }
                n || (n = {}),
                n.Path = location.pathname.replace(/[^\/]+$/, ""),
                n.Expires || (n.Expires = F["cookie-expires"]),
                sML.Cookies.write(U.Cookies.Label, JSON.stringify(i), n)
            }
        },
        U.Biscuits = {
            Memories: {},
            Labels: {},
            initialize: function(e) {
                if (!localStorage)
                    return U.Biscuits = null;
                if ("string" != typeof e)
                    return U.Biscuits.LabelBase = "BibiBiscuits:" + D.Script.src.replace(new RegExp("^" + U.Origin.replace(/([\/\.])/g, "\\$1")), ""),
                    W.bind("bibi:initialized", (function() {
                        return U.Biscuits.initialize("Bibi")
                    }
                    )),
                    W.bind("bibi:initialized-book", (function() {
                        return U.Biscuits.initialize("Book")
                    }
                    )),
                    null;
                switch (e) {
                case "Bibi":
                    break;
                case "Book":
                    if (A.ID)
                        break;
                default:
                    return null
                }
                var t = U.Biscuits.Labels[e] = U.Biscuits.LabelBase + ("Book" == e ? "#" + A.ID : "")
                  , n = localStorage.getItem(t);
                return U.Biscuits.Memories[t] = n ? JSON.parse(n) : {},
                U.Biscuits.Memories[t]
            },
            remember: function(e, t) {
                if (!e || "string" != typeof e || !U.Biscuits.Labels[e])
                    return U.Biscuits.Memories;
                var n = U.Biscuits.Labels[e];
                return t && "string" == typeof t ? U.Biscuits.Memories[n][t] : U.Biscuits.Memories[n]
            },
            memorize: function(e, t) {
                if (!e || "string" != typeof e || !U.Biscuits.Labels[e])
                    return !1;
                var n = U.Biscuits.Labels[e];
                if (t && "object" == I(t))
                    for (var i in t) {
                        var r = t[i];
                        try {
                            if (!r || "function" == typeof r || void 0 === JSON.parse(JSON.stringify(d({}, i, r)))[i])
                                throw "";
                            U.Biscuits.Memories[n][i] = r
                        } catch (e) {
                            delete U.Biscuits.Memories[n][i]
                        }
                    }
                return localStorage.setItem(n, JSON.stringify(U.Biscuits.Memories[n]))
            },
            forget: function(e, t) {
                if (e)
                    if ("string" == typeof e && U.Biscuits.Labels[e]) {
                        var n = U.Biscuits.Labels[e];
                        t ? ("string" == typeof t && (t = [t]),
                        Array.isArray(t) && t.forEach((function(e) {
                            return !("string" != typeof e || !e) && delete U.Biscuits.Memories[n][e]
                        }
                        )),
                        localStorage.setItem(n, JSON.stringify(U.Biscuits.Memories[n]))) : (localStorage.removeItem(n),
                        delete U.Biscuits.Memories[n])
                    } else
                        ;
                else
                    localStorage.removeItem(U.Biscuits.Labels.Bibi),
                    localStorage.removeItem(U.Biscuits.Labels.Book),
                    U.Biscuits.Memories = {};
                return U.Biscuits.Memories
            }
        };
        var W = {
            initialize: function() {
                void 0 !== document.onpointerdown ? (W.pointerdown = "pointerdown",
                W.pointermove = "pointermove",
                W.pointerup = "pointerup",
                W.pointerover = "pointerover",
                W.pointerout = "pointerout") : U.TouchOS && void 0 !== document.ontouchstart ? (W.pointerdown = "touchstart",
                W.pointermove = "touchmove",
                W.pointerup = "touchend") : (W.pointerdown = "mousedown",
                W.pointermove = "mousemove",
                W.pointerup = "mouseup",
                W.pointerover = "mouseover",
                W.pointerout = "mouseout"),
                W.resize = U.TouchOS ? "orientationchange" : "resize",
                W.Cpt0Psv0 = {
                    capture: !1,
                    passive: !1
                },
                W.Cpt1Psv0 = {
                    capture: !0,
                    passive: !1
                },
                W.CustomEvents = new sML.CustomEvents("bibi"),
                W.add = function(e, t, n) {
                    var i = arguments;
                    if (Array.isArray(arguments[0]))
                        return arguments[0].forEach((function(e) {
                            return W.add(e, i[1], i[2], i[3])
                        }
                        ));
                    if (Array.isArray(arguments[1]))
                        return arguments[1].forEach((function(e) {
                            return W.add(i[0], e, i[2], i[3])
                        }
                        ));
                    if (Array.isArray(arguments[2]) && "function" == typeof arguments[2][0])
                        return arguments[2].forEach((function(e) {
                            return W.add(i[0], i[1], e, i[3])
                        }
                        ));
                    var r = document;
                    return "function" != typeof t && (r = arguments[0],
                    e = arguments[1],
                    t = arguments[2],
                    n = arguments[3]),
                    /^bibi:/.test(e) ? W.CustomEvents.add(r, e, t) : r.addEventListener(e, t, n)
                }
                ,
                W.remove = function(e, t, n) {
                    var i = arguments;
                    if (Array.isArray(arguments[0]))
                        return arguments[0].forEach((function(e) {
                            return W.remove(e, i[1], i[2], i[3])
                        }
                        ));
                    if (Array.isArray(arguments[1]))
                        return arguments[1].forEach((function(e) {
                            return W.remove(i[0], e, i[2], i[3])
                        }
                        ));
                    if (Array.isArray(arguments[2]) && "function" == typeof arguments[2][0])
                        return arguments[2].forEach((function(e) {
                            return W.remove(i[0], i[1], e, i[3])
                        }
                        ));
                    var r = document;
                    return "function" != typeof t && (r = arguments[0],
                    e = arguments[1],
                    t = arguments[2],
                    n = arguments[3]),
                    /^bibi:/.test(e) ? W.CustomEvents.remove(r, e, t) : r.removeEventListener(e, t, n)
                }
                ,
                W.bind = function() {
                    return W.CustomEvents.bind.apply(W.CustomEvents, arguments)
                }
                ,
                W.unbind = function() {
                    return W.CustomEvents.unbind.apply(W.CustomEvents, arguments)
                }
                ,
                W.dispatch = function() {
                    return W.CustomEvents.dispatch.apply(W.CustomEvents, arguments)
                }
                ,
                delete W.initialize
            }
        }
          , j = {
            judge: function(e, t) {
                return U.ParentBibi && e && "string" == typeof e && t && "string" == typeof t && F["trustworthy-origins"].includes(t)
            },
            post: function(e) {
                return !!j.judge(e, U.ParentOrigin) && window.parent.postMessage(e, window.parent.location.origin)
            },
            receive: function(e) {
                if (!e || !j.judge(e.data, e.origin))
                    return !1;
                try {
                    var t = JSON.parse(e.data);
                    if (!t || "object" != I(t))
                        return !1;
                    for (var n in t)
                        /^bibi:commands:/.test(n) && W.dispatch(n, t[n]);
                    return !0
                } catch (e) {}
                return !1
            }
        }
          , X = {
            Extensions: [],
            Bibi: {},
            load: function(e) {
                return new Promise((function(t, n) {
                    if (!e.src || "string" != typeof e.src)
                        return n('"path" of the Extension Seems to Be Invalid. ("'.concat(e.src, '")'));
                    var i = new URL(e.src).origin;
                    if (!F["trustworthy-origins"].includes(i))
                        return n('The Origin Is Not Allowed. ("'.concat(e.src, '")'));
                    e.Script = document.head.appendChild(sML.create("script", {
                        className: "bibi-extension-script",
                        src: e.src,
                        Extension: e,
                        resolve: t,
                        reject: function() {
                            n(),
                            document.head.removeChild(this)
                        }
                    }))
                }
                ))
            },
            add: function(e) {
                var t = document.currentScript;
                if (void 0 === e.id)
                    return t.reject('"id" of the extension is undefined.');
                if ("string" != typeof e.id)
                    return t.reject('"id" of the extension is invalid.');
                if (!e.id)
                    return t.reject('"id" of the extension is blank.');
                if (X[e.id])
                    return t.reject('"id" of the extension is reserved or already used by another. ("'.concat(e.id, '")'));
                t.setAttribute("data-bibi-extension-id", e.id),
                X[e.id] = t.Extension = sML.applyRtL(e, t.Extension),
                X[e.id].Index = X.Extensions.length,
                X.Extensions.push(X[e.id]),
                t.resolve(X[e.id]);
                var n = X[e.id];
                return function(e) {
                    return n && "function" == typeof e && W.bind("bibi:readied", (function() {
                        return e.call(n, n)
                    }
                    )),
                    function(e) {
                        return n && "function" == typeof e && W.bind("bibi:prepared", (function() {
                            return e.call(n, n)
                        }
                        )),
                        function(e) {
                            n && "function" == typeof e && W.bind("bibi:opened", (function() {
                                return e.call(n, n)
                            }
                            ))
                        }
                    }
                }
            }
        };
        for (var Z in x.x = X.add,
        self.sML = o.a,
        i)
            self[Z] = i[Z];
        n(29),
        document.addEventListener("DOMContentLoaded", (function() {
            Bibi.Script = document.getElementById("bibi-script"),
            function(e) {
                if (!window.Promise)
                    return document.head.insertBefore(o.a.create("script", {
                        className: "bibi-polyfill",
                        src: Bibi.Script.src.replace(/\/bibi\.js$/, "/polyfills/bundle.js"),
                        onload: e
                    }), Bibi.Script);
                var t = []
                  , n = new URL("./polyfills",Bibi.Script.src).href;
                if (window.TextDecoder || t.push(n + "/encoding.js"),
                window.IntersectionObserver || t.push(n + "/intersection-observer.js"),
                !t.length)
                    return e();
                var i = [];
                t.forEach((function(e) {
                    return i.push(new Promise((function(t) {
                        return document.head.insertBefore(o.a.create("script", {
                            className: "bibi-polyfill",
                            src: e,
                            onload: t
                        }), Bibi.Script)
                    }
                    )))
                }
                )),
                Promise.all(i).then(e)
            }((function() {
                for (var e = "", t = Bibi.Script.nextElementSibling; t; ) {
                    if (/^style$/i.test(t.tagName) && /^\/\*! Bibi Book Style \*\//.test(t.textContent)) {
                        e = t.textContent.replace(/\/*.*?\*\//g, "").trim(),
                        t.innerHTML = "",
                        document.head.removeChild(t);
                        break
                    }
                    t = t.nextElementSibling
                }
                if (Bibi.BookStyleURL = O.createBlobURL("Text", e, "text/css"),
                o.a.UA.Trident) {
                    document.documentElement.style.display = "none";
                    var n = Array.prototype.map.call(document.head.querySelectorAll("#bibi-style, #bibi-dress"), (function(e) {
                        return e.HREF = e.getAttribute("href"),
                        e.href = "",
                        e
                    }
                    ));
                    return setTimeout((function() {
                        n.forEach((function(e) {
                            e.href = e.HREF,
                            delete e.HREF
                        }
                        )),
                        document.documentElement.style.display = "",
                        Bibi.hello()
                    }
                    ), 0)
                }
                Bibi.hello()
            }
            ))
        }
        ))
    }
});
