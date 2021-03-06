var Laya = window.Laya = function(t, e) {
    var i = {
        __internals: [],
        __packages: {},
        __classmap: {
            Object: Object,
            Function: Function,
            Array: Array,
            String: String
        },
        __sysClass: {
            object: "Object",
            array: "Array",
            string: "String",
            dictionary: "Dictionary"
        },
        __propun: {
            writable: !0,
            enumerable: !1,
            configurable: !0
        },
        __presubstr: String.prototype.substr,
        __substr: function(t, e) {
            return 1 == arguments.length ? i.__presubstr.call(this, t) : i.__presubstr.call(this, t, e > 0 ? e : this.length + e)
        },
        __init: function(t) {
            t.forEach(function(t) {
                t.__init$ && t.__init$()
            })
        },
        __isClass: function(t) {
            return t && (t.__isclass || t == Object || t == String || t == Array)
        },
        __newvec: function(t, e) {
            var i = [];
            i.length = t;
            for (var s = 0; s < t; s++)
                i[s] = e;
            return i
        },
        __extend: function(t, e) {
            function s() {
                i.un(this, "constructor", t)
            }
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var r = Object.getOwnPropertyDescriptor(e, n)
                      , a = r.get
                      , o = r.set;
                    a || o ? a && o ? Object.defineProperty(t, n, r) : (a && Object.defineProperty(t, n, a),
                    o && Object.defineProperty(t, n, o)) : t[n] = e[n]
                }
            s.prototype = e.prototype,
            t.prototype = new s,
            i.un(t.prototype, "__imps", i.__copy({}, e.prototype.__imps))
        },
        __copy: function(t, e) {
            if (!e)
                return null;
            t = t || {};
            for (var i in e)
                t[i] = e[i];
            return t
        },
        __package: function(e, s) {
            if (!i.__packages[e]) {
                i.__packages[e] = !0;
                var n = t
                  , r = e.split(".");
                if (r.length > 1)
                    for (var a = 0, o = r.length - 1; a < o; a++) {
                        var h = n[r[a]];
                        n = h || (n[r[a]] = {})
                    }
                n[r[r.length - 1]] || (n[r[r.length - 1]] = s || {})
            }
        },
        __hasOwnProperty: function(t, e) {
            function i(t, e) {
                if (Object.hasOwnProperty.call(e.prototype, t))
                    return !0;
                var s = e.prototype.__super;
                return null == s ? null : i(t, s)
            }
            return e = e || this,
            Object.hasOwnProperty.call(e, t) || i(t, e.__class)
        },
        __typeof: function(t, e) {
            if (!t || !e)
                return !1;
            if (e === String)
                return "string" == typeof t;
            if (e === Number)
                return "number" == typeof t;
            if (e.__interface__)
                e = e.__interface__;
            else if ("string" != typeof e)
                return t instanceof e;
            return t.__imps && t.__imps[e] || t.__class == e
        },
        __as: function(t, e) {
            return this.__typeof(t, e) ? t : null
        },
        __int: function(t) {
            return t ? parseInt(t) : 0
        },
        interface: function(e, s) {
            i.__package(e, {});
            var n = i.__internals
              , r = n[e] = n[e] || {
                self: e
            };
            if (s) {
                var a = s.split(",");
                r.extend = [];
                for (u = 0; u < a.length; u++) {
                    var o = a[u];
                    n[o] = n[o] || {
                        self: o
                    },
                    r.extend.push(n[o])
                }
            }
            for (var h = t, l = e.split("."), u = 0; u < l.length - 1; u++)
                h = h[l[u]];
            h[l[l.length - 1]] = {
                __interface__: e
            }
        },
        class: function(e, s, n, r) {
            if (n && i.__extend(e, n),
            s)
                if (i.__package(s, e),
                i.__classmap[s] = e,
                s.indexOf(".") > 0) {
                    if (0 == s.indexOf("laya.")) {
                        var a = s.split(".");
                        r = r || a[a.length - 1],
                        i[r] && console.log("Warning!,this class[" + r + "] already exist:", i[r]),
                        i[r] = e
                    }
                } else
                    "Main" == s ? t.Main = e : (i[s] && console.log("Error!,this class[" + s + "] already exist:", i[s]),
                    i[s] = e);
            var o = i.un
              , h = e.prototype;
            o(h, "hasOwnProperty", i.__hasOwnProperty),
            o(h, "__class", e),
            o(h, "__super", n),
            o(h, "__className", s),
            o(e, "__super", n),
            o(e, "__className", s),
            o(e, "__isclass", !0),
            o(e, "super", function(t) {
                this.__super.call(t)
            })
        },
        imps: function(t, e) {
            function s(t) {
                var e, r;
                if ((e = i.__internals[t]) && (n[t] = !0,
                r = e.extend))
                    for (var a = 0; a < r.length; a++)
                        s(r[a].self)
            }
            if (!e)
                return null;
            var n = t.__imps || i.un(t, "__imps", {});
            for (var r in e)
                s(r)
        },
        superSet: function(t, e, i, s) {
            var n = t.prototype["_$set_" + i];
            n && n.call(e, s)
        },
        superGet: function(t, e, i) {
            var s = t.prototype["_$get_" + i];
            return s ? s.call(e) : null
        },
        getset: function(t, e, s, n, r) {
            t ? (n && (e["_$GET_" + s] = n),
            r && (e["_$SET_" + s] = r)) : (n && i.un(e, "_$get_" + s, n),
            r && i.un(e, "_$set_" + s, r)),
            n && r ? Object.defineProperty(e, s, {
                get: n,
                set: r,
                enumerable: !1,
                configurable: !0
            }) : (n && Object.defineProperty(e, s, {
                get: n,
                enumerable: !1,
                configurable: !0
            }),
            r && Object.defineProperty(e, s, {
                set: r,
                enumerable: !1,
                configurable: !0
            }))
        },
        static: function(t, e) {
            for (var i = 0, s = e.length; i < s; i += 2)
                "length" == e[i] ? t.length = e[i + 1].call(t) : function() {
                    var s = e[i]
                      , n = e[i + 1];
                    Object.defineProperty(t, s, {
                        get: function() {
                            return delete this[s],
                            this[s] = n.call(this)
                        },
                        set: function(t) {
                            delete this[s],
                            this[s] = t
                        },
                        enumerable: !0,
                        configurable: !0
                    })
                }()
        },
        un: function(t, e, s) {
            return s || (s = t[e]),
            i.__propun.value = s,
            Object.defineProperty(t, e, i.__propun),
            s
        },
        uns: function(t, e) {
            e.forEach(function(e) {
                i.un(t, e)
            })
        }
    };
    return t.console = t.console || {
        log: function() {}
    },
    t.trace = t.console.log,
    Error.prototype.throwError = function() {
        throw arguments
    }
    ,
    Object.defineProperty(Array.prototype, "fixed", {
        enumerable: !1
    }),
    i
}(window, document);
!function(t, e, i) {
    i.un,
    i.uns;
    var s = i.static
      , n = i.class
      , r = i.getset
      , a = i.__newvec;
    i.interface("laya.runtime.IMarket"),
    i.interface("laya.filters.IFilter"),
    i.interface("laya.display.ILayout"),
    i.interface("laya.resource.IDispose"),
    i.interface("laya.runtime.IConchNode"),
    i.interface("laya.webgl.shapes.IShape"),
    i.interface("laya.webgl.submit.ISubmit"),
    i.interface("laya.filters.IFilterAction"),
    i.interface("laya.webgl.text.ICharSegment"),
    i.interface("laya.runtime.ICPlatformClass"),
    i.interface("laya.webgl.canvas.save.ISaveData"),
    i.interface("laya.webgl.resource.IMergeAtlasBitmap"),
    i.interface("laya.filters.IFilterActionGL", "laya.filters.IFilterAction");
    var o = function() {
        function e() {}
        return n(e, "laya.utils.RunDriver"),
        e.FILTER_ACTIONS = [],
        e.pixelRatio = -1,
        e._charSizeTestDiv = null,
        e.now = function() {
            return Date.now()
        }
        ,
        e.getWindow = function() {
            return t
        }
        ,
        e.getPixelRatio = function() {
            if (e.pixelRatio < 0) {
                var t = et.context
                  , i = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                (e.pixelRatio = (et.window.devicePixelRatio || 1) / i) < 1 && (e.pixelRatio = 1)
            }
            return e.pixelRatio
        }
        ,
        e.getIncludeStr = function(t) {
            return null
        }
        ,
        e.createShaderCondition = function(t) {
            var e = "(function() {return " + t + ";})";
            return i._runScript(e)
        }
        ,
        e.fontMap = [],
        e.measureText = function(t, i) {
            var s = e.hanzi.test(t);
            if (s && e.fontMap[i])
                return e.fontMap[i];
            var n = et.context;
            n.font = i;
            var r = n.measureText(t);
            return s && (e.fontMap[i] = r),
            r
        }
        ,
        e.getWebGLContext = function(t) {}
        ,
        e.beginFlush = function() {}
        ,
        e.endFinish = function() {}
        ,
        e.addToAtlas = null,
        e.flashFlushImage = function(t) {}
        ,
        e.drawToCanvas = function(t, e, i, s, n, r) {
            var a = He.create("2D")
              , o = new $(i,s,a);
            return j.renders[e]._fun(t, o, n, r),
            a
        }
        ,
        e.createParticleTemplate2D = null,
        e.createGLTextur = null,
        e.createWebGLContext2D = null,
        e.changeWebGLSize = function(t, e) {}
        ,
        e.createRenderSprite = function(t, e) {
            return new j(t,e)
        }
        ,
        e.createFilterAction = function(t) {
            return new P
        }
        ,
        e.createGraphics = function() {
            return new x
        }
        ,
        e.clear = function(t) {
            X._context.ctx.clear()
        }
        ,
        e.cancelLoadByUrl = function(t) {}
        ,
        e.clearAtlas = function(t) {}
        ,
        e.isAtlas = function(t) {
            return !1
        }
        ,
        e.addTextureToAtlas = function(t) {}
        ,
        e.getTexturePixels = function(t, e, i, s, n) {
            return null
        }
        ,
        e.skinAniSprite = function() {
            return null
        }
        ,
        e.update3DLoop = function() {}
        ,
        s(e, ["hanzi", function() {
            return this.hanzi = new RegExp("^[???-???]$")
        }
        ]),
        e
    }()
      , h = (r(1, i, "alertGlobalError", null, function(t) {
        var e = 0;
        et.window.onerror = t ? function(t, i, s, n, r) {
            e++ < 5 && r && alert("?????????????????????????????????????????????\n" + t + "\n" + r.stack || r)
        }
        : null
    }),
    i.init = function(t, e, s) {
        for (var n = [], r = 2, a = arguments.length; r < a; r++)
            n.push(arguments[r]);
        if (!i._isinit) {
            ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = i._arrayBufferSlice),
            i._isinit = !0,
            et.__init__(),
            K.__init__(),
            x.__init__(),
            i.timer = new ut,
            i.scaleTimer = new ut,
            i.loader = new ee,
            ft.__init__();
            for (var r = 0, o = n.length; r < o; r++)
                n[r].enable && n[r].enable();
            return S.__init__(),
            w.__init__(),
            q.__init__(),
            st.beginCheck(),
            i._currentStage = i.stage = new Ve,
            i.stage.conchModel && i.stage.conchModel.setRootNode(),
            i.getUrlPath(),
            i.render = new X(0,0),
            i.stage.size(t, e),
            j.__init__(),
            E.__init__(),
            I.instance.__init__(i.stage, X.canvas),
            Ze.__init__(),
            G.autoStopMusic = !0,
            W.__init__(),
            X.canvas
        }
    }
    ,
    i.getUrlPath = function() {
        var t = et.window.location
          , e = t.pathname;
        e = ":" == e.charAt(2) ? e.substring(1) : e,
        H.rootPath = H.basePath = H.getPath("file:" == t.protocol ? e : t.protocol + "//" + t.host + t.pathname)
    }
    ,
    i._arrayBufferSlice = function(t, e) {
        var i = new Uint8Array(this,t,e - t)
          , s = new Uint8Array(i.length);
        return s.set(i),
        s.buffer
    }
    ,
    i._runScript = function(t) {
        return et.window["e" + String.fromCharCode(118) + "al"](t)
    }
    ,
    i.stage = null,
    i.timer = null,
    i.scaleTimer = null,
    i.loader = null,
    i.version = "1.7.19.1beta",
    i.render = null,
    i._currentStage = null,
    i._isinit = !1,
    i.MiniAdpter = {
        init: function() {
            t.navigator && t.navigator.userAgent && t.navigator.userAgent.indexOf("MiniGame") > -1 && console.error("??????????????????????????????laya.wxmini.js,???????????????https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0")
        }
    },
    s(i, ["conchMarket", function() {
        return this.conchMarket = t.conch ? conchMarket : null
    }
    , "PlatformClass", function() {
        return this.PlatformClass = t.PlatformClass
    }
    ]),
    function() {
        function t() {}
        n(t, "event.EventDict"),
        t.mainGameUI = "mainGameUI",
        t.explainInfoUI = "explainInfoUI",
        t.startGameUI = "startGameUI",
        t.gameOverUI = "gameOverUI",
        t.garbageClearCheck = "garbageClearCheck",
        t.debugInfo = "debugInfo"
    }(),
    function() {
        function t() {
            this._events = null
        }
        var e;
        n(t, "laya.events.EventDispatcher");
        var i = t.prototype;
        return i.hasListener = function(t) {
            return !!(this._events && this._events[t])
        }
        ,
        i.event = function(t, e) {
            if (!this._events || !this._events[t])
                return !1;
            var i = this._events[t];
            if (i.run)
                i.once && delete this._events[t],
                null != e ? i.runWith(e) : i.run();
            else {
                for (var s = 0, n = i.length; s < n; s++) {
                    var r = i[s];
                    r && (null != e ? r.runWith(e) : r.run()),
                    r && !r.once || (i.splice(s, 1),
                    s--,
                    n--)
                }
                0 === i.length && this._events && delete this._events[t]
            }
            return !0
        }
        ,
        i.on = function(t, e, i, s) {
            return this._createListener(t, e, i, s, !1)
        }
        ,
        i.once = function(t, e, i, s) {
            return this._createListener(t, e, i, s, !0)
        }
        ,
        i._createListener = function(t, i, s, n, r, a) {
            void 0 === a && (a = !0),
            a && this.off(t, i, s, r);
            var o = e.create(i || this, s, n, r);
            this._events || (this._events = {});
            var h = this._events;
            return h[t] ? h[t].run ? h[t] = [h[t], o] : h[t].push(o) : h[t] = o,
            this
        }
        ,
        i.off = function(t, e, i, s) {
            if (void 0 === s && (s = !1),
            !this._events || !this._events[t])
                return this;
            var n = this._events[t];
            if (null != i)
                if (n.run)
                    e && n.caller !== e || n.method !== i || s && !n.once || (delete this._events[t],
                    n.recover());
                else {
                    for (var r = 0, a = 0, o = n.length; a < o; a++) {
                        var h = n[a];
                        h ? !h || e && h.caller !== e || h.method !== i || s && !h.once || (r++,
                        n[a] = null,
                        h.recover()) : r++
                    }
                    r === o && delete this._events[t]
                }
            return this
        }
        ,
        i.offAll = function(t) {
            var e = this._events;
            if (!e)
                return this;
            if (t)
                this._recoverHandlers(e[t]),
                delete e[t];
            else {
                for (var i in e)
                    this._recoverHandlers(e[i]);
                this._events = null
            }
            return this
        }
        ,
        i._recoverHandlers = function(t) {
            if (t)
                if (t.run)
                    t.recover();
                else
                    for (var e = t.length - 1; e > -1; e--)
                        t[e] && (t[e].recover(),
                        t[e] = null)
        }
        ,
        i.isMouseEvent = function(e) {
            return t.MOUSE_EVENTS[e]
        }
        ,
        t.MOUSE_EVENTS = {
            rightmousedown: !0,
            rightmouseup: !0,
            rightclick: !0,
            mousedown: !0,
            mouseup: !0,
            mousemove: !0,
            mouseover: !0,
            mouseout: !0,
            click: !0,
            doubleclick: !0
        },
        t.__init$ = function() {
            Object.defineProperty(laya.events.EventDispatcher.prototype, "_events", {
                enumerable: !1,
                writable: !0
            }),
            e = function(t) {
                function e(t, i, s, n) {
                    e.__super.call(this, t, i, s, n)
                }
                n(e, "", l);
                return e.prototype.recover = function() {
                    this._id > 0 && (this._id = 0,
                    e._pool.push(this.clear()))
                }
                ,
                e.create = function(t, i, s, n) {
                    return void 0 === n && (n = !0),
                    e._pool.length ? e._pool.pop().setTo(t, i, s, n) : new e(t,i,s,n)
                }
                ,
                e._pool = [],
                e
            }()
        }
        ,
        t
    }())
      , l = function() {
        function t(t, e, i, s) {
            this.once = !1,
            this._id = 0,
            void 0 === s && (s = !1),
            this.setTo(t, e, i, s)
        }
        n(t, "laya.utils.Handler");
        var e = t.prototype;
        return e.setTo = function(e, i, s, n) {
            return this._id = t._gid++,
            this.caller = e,
            this.method = i,
            this.args = s,
            this.once = n,
            this
        }
        ,
        e.run = function() {
            if (null == this.method)
                return null;
            var t = this._id
              , e = this.method.apply(this.caller, this.args);
            return this._id === t && this.once && this.recover(),
            e
        }
        ,
        e.runWith = function(t) {
            if (null == this.method)
                return null;
            var e = this._id;
            if (null == t)
                var i = this.method.apply(this.caller, this.args);
            else
                i = this.args || t.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(t)) : this.method.apply(this.caller, t) : this.method.call(this.caller, t);
            return this._id === e && this.once && this.recover(),
            i
        }
        ,
        e.clear = function() {
            return this.caller = null,
            this.method = null,
            this.args = null,
            this
        }
        ,
        e.recover = function() {
            this._id > 0 && (this._id = 0,
            t._pool.push(this.clear()))
        }
        ,
        t.create = function(e, i, s, n) {
            return void 0 === n && (n = !0),
            t._pool.length ? t._pool.pop().setTo(e, i, s, n) : new t(e,i,s,n)
        }
        ,
        t._pool = [],
        t._gid = 1,
        t
    }()
      , u = function() {
        function t() {
            this._win = null,
            this._bjUrl = "img/gameView/bj.jpg",
            this._dustbinUrlImgArr = ["img/gameView/garbage1.png",
			"img/gameView/garbage2.png", "img/gameView/garbage3.png",
			"img/gameView/garbage4.png"],
            this._progressBarUrlImg = "img/gameView/bar.png",
            this._zanTingBtnUrlImg = "img/gameView/zanTing.png",
            this._jiXuBtnUrlImg = "img/gameView/jiXu.png",
            this.rightUrlImg = "img/gameView/right.png",
            this.wrongUrlImg = "img/gameView/wrong.png",
            this.uiAgent = null,
            this._rollItemAgent = null,
            this._gameStartTime = 5,
            this._gameStartDownTxt = null,
            this._gameDownTxt = null,
            this._scoreTxt = null,
            this._progressBar = null,
            this._starVec = null,
            this._dustbinVec = null,
            this._yanJingVec = null,
            this._dustbinTypeArr = [1, 2, 3, 4],
            this._offBtn = null,
            this._garbageVec = null,
            this._optResule = null,
            this._state = 0,
            this._gameNums = 0,
            this._gameOverTime = 0,
            this._curStarLv = 0,
            this._radomNum = 0,
            this._radomIndex = 0,
            this._playNum = 0,
            this._playCount = 0,
            this._playState = 0,
            this._gap = 3,
            this._animation = null,
            this._curSumScore = 0,
            this._doubleNum = 0,
            this._baseAddScore = 100,
            this._doubleAddScore = 5,
            this._doublemaxNum = 20,
            this._winSumNum = 0,
            this._starLvGoalArr = [[10, 0], [30, 1], [60, 2], [999999, 3]],
            this._progressBarBaseWidth = 0,
            this.isInit = !1,
            this.isGame = !1,
            this._progressBarMask = new Ce,
            this._win = new Ce,
            i.stage.addChild(this._win),
            this.uiAgent = new c
        }
        n(t, "gameView.GameMediator");
        var e = t.prototype;
        return e.initUI = function() {
            p.createGraphicsImg(this._win, this._bjUrl);
            this._gameDownTxt = p.createText(this._win, "180S", "#FFFFFF", 210, 70, 45, 8, "#000000"),
            this._scoreTxt = p.createText(this._win, "0", "#FFFFFF", 480, 70, 45, 8, "#000000"),
            this._progressBar = p.createGraphicsImg(this._win, this._progressBarUrlImg),
            this._progressBar.pos(712, 55),
            this._offBtn = p.createGraphicsImg(this._win, this._zanTingBtnUrlImg),
            this._offBtn.on("click", this, this.onClickOffBtn);
            var t = 0;
            for (this._starVec = [],
            t = 0; t < 3; t++) {
                var e = p.createGraphicsImg(this._win, "img/gameView/star.png");
                e.pos(1520 + 90 * t, 30),
                this._starVec.push(e)
            }
            var i = [350, 740, 1150, 1590]
              , s = [350, 400, 400, 350]
              , n = [90, 100, 100, 90]
              , r = [86, 96, 96, 86];
            for (this._dustbinVec = [],
            this._yanJingVec = [],
            t = 0; t < this._dustbinUrlImgArr.length; t++) {
                var a = p.createGraphicsImg(this._win, this._dustbinUrlImgArr[t]);
                a.pivot(a.width / 2, a.height / 2),
                a.pos(i[t], s[t]),
                this._dustbinVec.push(a);
                var o = p.createGraphicsImg(a, c.yanJingArr[t]);
                o.pos(n[t], r[t]),
                o.visible = !1,
                this._yanJingVec.push(o)
            }
            this._rollItemAgent = new d(this._win),
            this._garbageVec = [],
            this._gameStartDownTxt = p.createText(this._win, "", "#ffff00", 100, 44, 100, 10, "#000000"),
            this._gameStartDownTxt.pos(750, 550),
            this.updateStar(),
            Zt.getInstacne.on("garbageClearCheck", this, this.checkDragResult),
            this._optResule = new Ce,
            this._win.addChild(this._optResule)
        }
        ,
        e.onClickOffBtn = function(t) {
            p.playSound("sound/btn.mp3"),
            3 == this._state ? (this._state = 2,
            this._offBtn = p.changeGraphicsImg(this._offBtn, this._zanTingBtnUrlImg)) : (this._state = 3,
            this._offBtn = p.changeGraphicsImg(this._offBtn, this._jiXuBtnUrlImg))
        }
        ,
        e.start = function() {
            this._state = 1,
            this._gameStartTime = 5,
            i.timer.loop(20, this, this.onTimer),
            i.timer.loop(1e3, this, this.onTimer2)
        }
        ,
        e.onTimer2 = function(t) {
            switch (this._state) {
            case 1:
                this.updateStartTime(),
                this._gameStartTime--;
                break;
            case 2:
                this._gameOverTime--,
                this._gameOverTime <= 0 && (this._state = 4,
                this._gameOverTime = 0),
                this._gameDownTxt.text = this._gameOverTime + "S"
            }
        }
        ,
        e.playYanJing = function() {
            0 == this._playState ? (0 == this._radomNum && (this._playCount = 0,
            this._radomNum = 100 * Math.random() + 10,
            this._radomIndex = Math.floor(4 * Math.random()),
            this._radomIndex >= 4 && (this._radomIndex = 3)),
            this._playCount++,
            this._playCount >= this._radomNum && (this._playState = 1,
            this._playNum = 0,
            this._yanJingVec[this._radomIndex].visible = !0)) : 1 == this._playState && (this._playNum++,
            this._playNum >= 8 && (this._playState = 0,
            this._radomNum = 0,
            this._yanJingVec[this._radomIndex].visible = !1))
        }
        ,
        e.onTimer = function(t) {
            switch (this.playYanJing(),
            this._state) {
            case 2:
                this._gameNums++,
                0 == this._curStarLv ? (this._gameNums >= 300 && (this._gameNums = 0,
                this.createGarbageItem()),
                this._gap = 1) : 1 == this._curStarLv ? (this._gameNums >= 200 && (this._gameNums = 0,
                this.createGarbageItem()),
                this._gap = 2) : 2 == this._curStarLv ? (this._gameNums >= 100 && (this._gameNums = 0,
                this.createGarbageItem(),
                this.createGarbageItem(!0)),
                this._gap = 3) : 3 == this._curStarLv && (c.starLv = this._curStarLv,
                c.sumScore = this._curSumScore,
                this._state = 4),
                this.updateGarbageItem(),
                this._rollItemAgent.updatePos(this._gap);
                break;
            case 3:
                break;
            case 4:
                c.starLv = this._curStarLv,
                c.sumScore = this._curSumScore,
                this.hide(),
                Zt.getInstacne.event("gameOverUI")
            }
        }
        ,
        e.updateStartTime = function() {
            this._gameStartTime > 0 ? (this._gameStartDownTxt.visible = !0,
            this._gameStartDownTxt.text = "?????????:" + this._gameStartTime) : 0 == this._gameStartTime ? (this._gameStartDownTxt.visible = !0,
            this._gameStartDownTxt.text = "????????????",
            this.createGarbageItem()) : (this._state = 2,
            this._gameOverTime = 180,
            this._gameStartDownTxt.visible = !1)
        }
        ,
        e.updateGarbageItem = function() {
            for (var t = 0; t < this._garbageVec.length; t++)
                this._garbageVec[t].updatePoint(this._gap)
        }
        ,
        e.createGarbageItem = function(t) {
            void 0 === t && (t = !1);
            var e = 0;
            0 == this._curStarLv ? e = 3 : 1 == this._curStarLv ? e = 6 : 2 == this._curStarLv && (e = 30);
            if (e > this.getCurGarbageNum()) {
                var i = Math.ceil(4 * Math.random())
                  , s = this.getRandomGarbage(i);
                if (this._garbageVec.length < 30) {
                    var n = new _(this._win,this._garbageVec.length + 1);
                    n.addImg(s, i, t),
                    this._garbageVec.push(n)
                } else
                    for (var r = 0; r < this._garbageVec.length; r++)
                        if (7 == this._garbageVec[r].state) {
                            this._garbageVec[r].addImg(s, i, t);
                            break
                        }
            }
        }
        ,
        e.getCurGarbageNum = function() {
            for (var t = 0, e = 0; e < this._garbageVec.length; e++)
                2 != this._garbageVec[e].state && 7 != this._garbageVec[e].state && t++;
            return t
        }
        ,
        e.getRandomGarbage = function(t) {
            var e = ""
              , i = 0;
            return 1 == t ? (i = Math.floor(Math.random() * c.garbage1Arr.length),
            e = c.garbage1Arr[i]) : 2 == t ? (i = Math.floor(Math.random() * c.garbage2Arr.length),
            e = c.garbage2Arr[i]) : 3 == t ? (i = Math.floor(Math.random() * c.garbage3Arr.length),
            e = c.garbage3Arr[i]) : 4 == t && (i = Math.floor(Math.random() * c.garbage4Arr.length),
            e = c.garbage4Arr[i]),
            e
        }
        ,
        e.checkDragResult = function(t) {
            if (null != t) {
                for (var e = !0, i = !1, s = 0; s < this._dustbinVec.length; s++) {
                    var n = this._dustbinVec[s].height / 2 + t.garbageImg.height / 2;
                    if (Math.abs(this._dustbinVec[s].x - t.garbageImg.x) < n && Math.abs(this._dustbinVec[s].y - t.garbageImg.y) < n) {
                        e = !1,
                        t.type == this._dustbinTypeArr[s] && (i = !0);
                        break
                    }
                }
                e ? t.dropResult(i) : (this.showResult(t, i),
                this.updateInfo(i),
                t.dropResult(i),
                i ? (this.createGarbageItem(),
                p.playSound("sound/clearWin.mp3")) : p.playSound("sound/clearFail.mp3"))
            }
        }
        ,
        e.showResult = function(t, e) {
            void 0 === e && (e = !1),
            this._optResule = e ? p.changeGraphicsImg(this._optResule, this.rightUrlImg) : p.changeGraphicsImg(this._optResule, this.wrongUrlImg),
            this._optResule.pivot(this._optResule.width / 2, this._optResule.height / 2),
            this._optResule.scaleX = .1,
            this._optResule.scaleY = .1,
            this._optResule.visible = !0,
            this._optResule.pos(t.garbageImg.x, t.garbageImg.y),
            ct.to(this._optResule, {
                scaleX: 1.3,
                scaleY: 1.3
            }, 800, null, l.create(this, this.onTweenComplete))
        }
        ,
        e.onTweenComplete = function(t) {
            this._optResule.visible = !1
        }
        ,
        e.updateInfo = function(t) {
            void 0 === t && (t = !1);
            var e = 0;
            t ? (e = this._curSumScore,
            this._doubleNum >= 20 ? this._curSumScore = this._curSumScore + this._baseAddScore + this._doubleAddScore * this._doublemaxNum : this._curSumScore = this._curSumScore + this._baseAddScore + this._doubleAddScore * this._doubleNum,
            e = this._curSumScore - e,
            this._doubleNum++,
            this._winSumNum++) : (this._doubleNum = 0,
            this._curSumScore = this._curSumScore - this._baseAddScore,
            this._curSumScore < 0 && (this._curSumScore = 0)),
            e = this._baseAddScore,
            this._scoreTxt.text = "" + this._curSumScore,
            this.updateStar()
        }
        ,
        e.updateStar = function() {
            var t = 0
              , e = 0;
            for (e = 0; e < this._starLvGoalArr.length; e++)
                if (this._winSumNum < this._starLvGoalArr[e][0]) {
                    t = this._starLvGoalArr[e][1];
                    break
                }
            for (this._curStarLv = t,
            e = 0; e < this._starVec.length; e++)
                this._starVec[e].visible = this._curStarLv > e;
            this.updateProgressBar()
        }
        ,
        e.updateProgressBar = function() {
            0 == this._progressBarBaseWidth && (this._progressBarBaseWidth = this._progressBar.width);
            var t = 0
              , e = 0;
            0 == this._curStarLv ? (t = this._starLvGoalArr[this._curStarLv][0],
            e = this._winSumNum / t * this._progressBarBaseWidth) : 3 == this._curStarLv ? e = this._progressBarBaseWidth : (t = this._starLvGoalArr[this._curStarLv][0] - this._starLvGoalArr[this._curStarLv - 1][0],
            e = (this._winSumNum - this._starLvGoalArr[this._curStarLv - 1][0]) / t * this._progressBarBaseWidth),
            this._progressBarMask.graphics.clear(),
            this._progressBarMask.graphics.drawRect(0, 0, e, this._progressBar.height, "#ff0000"),
            this._progressBar.mask = this._progressBarMask
        }
        ,
        e.show = function() {
            0 == this.isInit && this.initUI(),
            this._curStarLv = 0,
            this._curSumScore = 0,
            this._doubleNum = 0,
            this._winSumNum = 0,
            this._win.visible = !0,
            this.isGame = !0,
            G.stopSound("sound/gameBJ.mp3"),
            G.stopSound("sound/bj.mp3"),
            p.playSound("sound/gameBJ.mp3", 0)
        }
        ,
        e.hide = function() {
            i.timer.clear(this, this.onTimer),
            i.timer.clear(this, this.onTimer2),
            this._win.visible = !1,
            this.isGame = !1
        }
        ,
        t
    }()
      , c = function() {
        function t() {}
        return n(t, "gameView.GameResAgent"),
        t.soundBJ = "sound/bj.mp3",
        t.soundGameBJ = "sound/gameBJ.mp3",
        t.soundBtn = "sound/btn.mp3",
        t.soundClearWin = "sound/clearWin.mp3",
        t.soundClearFail = "sound/clearFail.mp3",
        t.SWFClearWin = "swf/clearWin.swf",
        t.nvHaiYanJing = "img/donghua/nvHai.png",
        t.starLv = 0,
        t.sumScore = 0,
        t.voiceState = !0,
        t.isGame = !1,
        s(t, ["yanJingArr", function() {
            return this.yanJingArr = ["img/donghua/yanJing1.png", "img/donghua/yanJing2.png", 
			"img/donghua/yanJing3.png", "img/donghua/yanJing4.png"]
        }
        , "garbage1Arr", function() {
            return this.garbage1Arr = ["img/gameView/youHai/dengGuan.png", "img/gameView/youHai/dianChi.png",
			"img/gameView/youHai/wenDuJi.png", "img/gameView/youHai/yao.png", 
			"img/gameView/youHai/youQiTong.png"]
        }
        , "garbage2Arr", function() {
            return this.garbage2Arr = ["img/gameView/keHuiShou/baoZhi.png",
			"img/gameView/keHuiShou/keLePing.png", "img/gameView/keHuiShou/poBu.png",
			"img/gameView/keHuiShou/suLiaoDai.png", 
			"img/gameView/keHuiShou/suiBoLi.png"]
        }
        , "garbage3Arr", function() {
            return this.garbage3Arr = ["img/gameView/canChu/jiDanKe.png", 
			"img/gameView/canChu/pingGuoKe.png", "img/gameView/canChu/qingCai.png",
			"img/gameView/canChu/xiGuaPi.png", "img/gameView/canChu/yuGuTou.png"]
        }
        , "garbage4Arr", function() {
            return this.garbage4Arr = ["img/gameView/qiTa/beiKe.png", 
			"img/gameView/qiTa/feiTu.png", "img/gameView/qiTa/niaoBuShi.png",
			"img/gameView/qiTa/taoCi.png", "img/gameView/qiTa/weiShengZhi.png"]
        }
        , "allGameUrlArr", function() {
            return this.allGameUrlArr = ["img/gameView/bj.jpg", 
			"img/gameView/bar.png", "img/gameView/garbage1.png", 
			"img/gameView/garbage2.png", "img/gameView/garbage3.png",
			"img/gameView/garbage4.png", "img/gameView/gundong.png",
			"img/gameView/jiXu.png", "img/gameView/star.png", 
			"img/gameView/voiceClose.png", "img/gameView/voiceOpen.png",
			"img/gameView/zanTing.png", "img/gameView/wrong.png", 
			"img/gameView/right.png", "img/gameView/canChu/jiDanKe.png",
			"img/gameView/canChu/pingGuoKe.png", "img/gameView/canChu/qingCai.png",
			"img/gameView/canChu/xiGuaPi.png", "img/gameView/canChu/yuGuTou.png",
			"img/gameView/keHuiShou/baoZhi.png", "img/gameView/keHuiShou/keLePing.png",
			"img/gameView/keHuiShou/poBu.png", "img/gameView/keHuiShou/suLiaoDai.png",
			"img/gameView/keHuiShou/suiBoLi.png", "img/gameView/youHai/dengGuan.png",
			"img/gameView/youHai/dianChi.png", "img/gameView/youHai/wenDuJi.png", 
			"img/gameView/youHai/yao.png", "img/gameView/youHai/youQiTong.png",
			"img/gameView/qiTa/beiKe.png", "img/gameView/qiTa/feiTu.png",
			"img/gameView/qiTa/niaoBuShi.png", "img/gameView/qiTa/taoCi.png",
			"img/gameView/qiTa/weiShengZhi.png", "img/main/bj.jpg",
			"img/main/ruleBtn.png", "img/main/startBtn.png", 
			"img/gameOver/bj.jpg", "img/gameOver/shangChuanBtn.png",
			"img/gameOver/startBtn.png", "img/explain/bj.jpg", 
			"img/explain/fanHuiBtn.png", "img/explain/garbage1.png",
			"img/explain/garbage2.png", "img/explain/garbage3.png",
			"img/explain/garbage4.png", "img/explain/garbageInfo1.png", 
			"img/explain/garbageInfo2.png", "img/explain/garbageInfo3.png",
			"img/explain/garbageInfo4.png", "img/explain/garbageSel.png",
			"img/donghua/yanJing1.png", "img/donghua/yanJing2.png",
			"img/donghua/yanJing3.png", "img/donghua/yanJing4.png",
			"img/donghua/nvHai.png"]
        }
        ]),
        t
    }()
      , _ = function() {
        function t(t, e) {
            this.id = 0,
            this.type = 0,
            this.state = 0,
            this._parent = null,
            this.garbageImg = null,
            this._urlImg = "",
            this._point = new U,
            this.id = e,
            this._parent = t,
            this.garbageImg = new Ce,
            this._parent.addChild(this.garbageImg),
            this.garbageImg.on("mousedown", this, this.onMouseDown)
        }
        n(t, "gameView.GarbageItem");
        var e = t.prototype;
        return e.addImg = function(t, e, s) {
            if (void 0 === s && (s = !1),
            this.type = e,
            this.garbageImg = p.changeGraphicsImg(this.garbageImg, t),
            this.garbageImg.pivot(this.garbageImg.width / 2, this.garbageImg.height / 2),
            s) {
                this.state = 8,
                this._point.x = 600 + 1300 * Math.random(),
                this._point.y = -(this.garbageImg.height + 10),
                this.garbageImg.pos(this._point.x, this._point.y);
                var n = i.stage.height - 400 + 200 * Math.random();
                ct.to(this.garbageImg, {
                    y: n
                }, 1e3, null, l.create(this, this.onTweenComplete))
            } else
                this.state = 1,
                this._point.x = i.stage.width + 100 * Math.random() + 100,
                this._point.y = i.stage.height - 300 + 200 * Math.random(),
                this.garbageImg.pos(this._point.x, this._point.y);
            this.garbageImg.visible = !0
        }
        ,
        e.onMouseDown = function(t) {
            6 != this.state && 8 != this.state && (this.state = 3,
            i.stage.on("mouseup", this, this.onMouseUp),
            i.stage.on("mousemove", this, this.onMouseMove),
            this._point.x = this.garbageImg.x,
            this._point.y = this.garbageImg.y,
            this.garbageImg.x = i.stage.mouseX,
            this.garbageImg.y = i.stage.mouseY)
        }
        ,
        e.onMouseMove = function(t) {
            3 == this.state && (this.garbageImg.x = i.stage.mouseX,
            this.garbageImg.y = i.stage.mouseY)
        }
        ,
        e.onMouseUp = function(t) {
            this.state,
            i.stage.off("mouseup", this, this.onMouseUp),
            i.stage.off("mousemove", this, this.onMouseMove),
            Zt.getInstacne.event("garbageClearCheck", this)
        }
        ,
        e.dropResult = function(t) {
            if (1 == t)
                this.state = 5,
                this.removeShow();
            else if (this.state = 6,
            this.garbageImg.y < 760 || this.garbageImg.y > 1080) {
                var e = i.stage.height - 400 + 200 * Math.random();
                ct.to(this.garbageImg, {
                    y: e
                }, 1e3, null, l.create(this, this.onTweenComplete))
            } else
                this.onTweenComplete(null)
        }
        ,
        e.onTweenComplete = function(t) {
            this.state = 1
        }
        ,
        e.updatePoint = function(t) {
            switch (this.state) {
            case 1:
                this.garbageImg.x = this.garbageImg.x - t,
                this.garbageImg.x < -this.garbageImg.width && (this.state = 2,
                this.removeShow());
                break;
            case 2:
                this.removeShow()
            }
        }
        ,
        e.removeShow = function() {
            this.state = 7,
            this.garbageImg.visible = !1
        }
        ,
        t
    }()
      , d = function() {
        function t(t) {
            this._LineGap = 100,
            this._parent = null,
            this._win = null,
            this.listVec = null,
            this._parent = t,
            this._win = new Ce,
            this._parent.addChild(this._win),
            this._win.y = 668,
            this.initUI()
        }
        n(t, "gameView.RollItemAgent");
        var e = t.prototype;
        return e.initUI = function() {
            this.listVec = [];
            for (var t = 0; t < 22; t++) {
                var e = p.createGraphicsImg(this._win, "img/gameView/gundong.png");
                e.pos(t * this._LineGap, 0),
                this.listVec.push(e)
            }
        }
        ,
        e.updatePos = function(t) {
            for (var e = 0; e < this.listVec.length; e++)
                this.listVec[e].x = this.listVec[e].x - t;
            var i = this.listVec[0];
            i.x < -i.width && ((i = this.listVec.shift()).x = this.listVec[this.listVec.length - 1].x + this._LineGap,
            this.listVec.push(i))
        }
        ,
        t
    }()
      , f = function() {
        function t() {
            this._mainMediator = null,
            this._explainInfo = null,
            this._gameMediator = null,
            this._gameOverMediator = null,
            this._soundOpenBtn = null,
            this.soundCloseUrlImg = "img/gameView/voiceClose.png",
            this.soundOpenUrlImg = "img/gameView/voiceOpen.png",
            i.init(1920, 1080, qt),
            i.stage.alignV = "middle",
            i.stage.alignH = "center",
            i.stage.scaleMode = "exactfit",
            i.stage.bgColor = "#232628",
            i.stage.screenMode = "horizontal",
            i.loader.on("error", this, this.onLoadError),
            i.loader.load(c.allGameUrlArr, l.create(this, this.onLoadComplete), l.create(this, this.onLoadProgress), "image")
        }
        n(t, "LayaSample");
        var e = t.prototype;
        return e.onLoadError = function(t) {}
        ,
        e.onLoadProgress = function(t) {}
        ,
        e.onLoadComplete = function(t) {
            Zt.getInstacne.on("mainGameUI", this, this.onEventType, ["mainGameUI"]),
            Zt.getInstacne.on("gameOverUI", this, this.onEventType, ["gameOverUI"]),
            Zt.getInstacne.on("explainInfoUI", this, this.onEventType, ["explainInfoUI"]),
            Zt.getInstacne.on("startGameUI", this, this.onEventType, ["startGameUI"]),
            this._mainMediator = new v,
            this._explainInfo = new g,
            this._gameMediator = new u,
            this._gameOverMediator = new m,
            G.autoStopMusic = !1,
            p.playSound("sound/bj.mp3", 0),
            this.onEventType("mainGameUI"),
            this._soundOpenBtn = p.createStageGraphicsImg(this.soundOpenUrlImg),
            this._soundOpenBtn.on("click", this, this.onClickSoundBtn),
            this._soundOpenBtn.pos(1800, 20)
        }
        ,
        e.onClickSoundBtn = function(t) {
            p.playSound("sound/btn.mp3"),
            c.voiceState ? (c.voiceState = !1,
            G.stopSound("sound/gameBJ.mp3"),
            G.stopSound("sound/bj.mp3"),
            this._soundOpenBtn = p.changeGraphicsImg(this._soundOpenBtn, this.soundCloseUrlImg)) : (c.voiceState = !0,
            this._gameMediator.isGame ? p.playSound("sound/gameBJ.mp3", 0) : p.playSound("sound/bj.mp3", 0),
            this._soundOpenBtn = p.changeGraphicsImg(this._soundOpenBtn, this.soundOpenUrlImg))
        }
        ,
        e.onEventType = function(t) {
            "mainGameUI" == t ? (this._mainMediator.show(),
            this._explainInfo.hide(),
            this._gameMediator.hide(),
            this._gameOverMediator.hide()) : "explainInfoUI" == t ? (this._mainMediator.hide(),
            this._explainInfo.show(),
            this._gameMediator.hide(),
            this._gameOverMediator.hide()) : "startGameUI" == t ? (this._mainMediator.hide(),
            this._explainInfo.hide(),
            this._gameMediator.show(),
            this._gameMediator.start(),
            this._gameOverMediator.hide()) : "gameOverUI" == t && (this._mainMediator.hide(),
            this._explainInfo.hide(),
            this._gameMediator.hide(),
            this._gameOverMediator.show())
        }
        ,
        t
    }()
      , p = function() {
        function t() {}
        return n(t, "tool.GameTool"),
        t.createGraphicsImg = function(t, e) {
            void 0 === e && (e = "");
            var s = new Ce
              , n = i.loader.getRes(e);
            return null != n ? (s.graphics.drawTexture(n),
            s.size(n.width, n.height)) : s.loadImage(e),
            t.addChild(s),
            s
        }
        ,
        t.createStageGraphicsImg = function(t) {
            void 0 === t && (t = "");
            var e = new Ce
              , s = i.loader.getRes(t);
            return null != s ? (e.graphics.drawTexture(s),
            e.size(s.width, s.height)) : e.loadImage(t),
            i.stage.addChild(e),
            e
        }
        ,
        t.changeGraphicsImg = function(t, e) {
            void 0 === e && (e = ""),
            t.graphics.clear();
            var s = i.loader.getRes(e);
            return null != s ? (t.graphics.drawTexture(s),
            t.size(s.width, s.height)) : t.loadImage(e),
            t
        }
        ,
        t.createText = function(t, e, i, s, n, r, a, o, h) {
            void 0 === r && (r = 30),
            void 0 === a && (a = 3),
            void 0 === o && (o = "#FFFFFF"),
            void 0 === h && (h = !0);
            var l = new Oe;
            return l.text = e,
            l.fontSize = r,
            l.color = i,
            l.bold = h,
            l.stroke = a,
            l.strokeColor = o,
            l.pivot(l.width / 2, l.height / 2),
            l.pos(s, n),
            t.addChild(l),
            l
        }
        ,
        t.playSound = function(t, e) {
            void 0 === e && (e = 1),
            c.voiceState && G.playSound(t, e)
        }
        ,
        t
    }()
      , g = function() {
        function t() {
            this._win = null,
            this._bjUrl = "img/explain/bj.jpg",
            this._btnImgArr = ["img/explain/garbage1.png", "img/explain/garbage2.png", "img/explain/garbage3.png", "img/explain/garbage4.png"],
            this._tipsArr = ["img/explain/garbageInfo1.png", "img/explain/garbageInfo2.png", "img/explain/garbageInfo3.png", "img/explain/garbageInfo4.png"],
            this._closeUrlImg = "img/explain/fanHuiBtn.png",
            this._garbageSelUrlImg = "img/explain/garbageSel.png",
            this._selImg = null,
            this._InfoImg = null,
            this.isInit = !1,
            i.loader.load(this._tipsArr),
            this._win = new Ce,
            i.stage.addChild(this._win)
        }
        n(t, "view.ExplainInfoMediator");
        var e = t.prototype;
        return e.initUI = function() {
            var t = new Ce;
            t.loadImage(this._bjUrl),
            this._win.addChild(t),
            this._selImg = p.createGraphicsImg(this._win, this._garbageSelUrlImg),
            this._win.addChild(this._selImg);
            for (var e = 0; e < this._btnImgArr.length; e++) {
                var s = p.createGraphicsImg(this._win, this._btnImgArr[e]);
                s.pos(50, 50 + 250 * e),
                0 == e ? s.on("mousedown", this, this.onMouseClick0) : 1 == e ? s.on("mousedown", this, this.onMouseClick1) : 2 == e ? s.on("mousedown", this, this.onMouseClick2) : 3 == e && s.on("mousedown", this, this.onMouseClick3)
            }
            var n = new Je(this._closeUrlImg);
            n.on("click", this, this.onMouseClickClose),
            this._win.addChild(n),
            n.pos(i.stage.width - n.width, i.stage.height - (n.height + 50)),
            this._InfoImg = new Ce,
            this._win.addChild(this._InfoImg),
            this.updateTipsImg(0)
        }
        ,
        e.onMouseClick0 = function(t) {
            p.playSound("sound/btn.mp3"),
            this.updateTipsImg(0)
        }
        ,
        e.onMouseClick1 = function(t) {
            p.playSound("sound/btn.mp3"),
            this.updateTipsImg(1)
        }
        ,
        e.onMouseClick2 = function(t) {
            p.playSound("sound/btn.mp3"),
            this.updateTipsImg(2)
        }
        ,
        e.onMouseClick3 = function(t) {
            p.playSound("sound/btn.mp3"),
            this.updateTipsImg(3)
        }
        ,
        e.updateTipsImg = function(t) {
            this._selImg.pos(40, 40 + 250 * t),
            this._InfoImg.graphics.clear();
            var e = i.loader.getRes(this._tipsArr[t]);
            this._InfoImg.graphics.drawTexture(e),
            this._InfoImg.size(e.width, e.height),
            this._InfoImg.pos(250, 130)
        }
        ,
        e.onMouseClickClose = function(t) {
            p.playSound("sound/btn.mp3"),
            c.isGame ? Zt.getInstacne.event("gameOverUI") : Zt.getInstacne.event("mainGameUI")
        }
        ,
        e.show = function() {
            0 == this.isInit && this.initUI(),
            this._win.visible = !0
        }
        ,
        e.hide = function() {
            this._win.visible = !1
        }
        ,
        t
    }()
      , m = function() {
        function t() {
            this._gameBJ = null,
            this.isShow = !1,
            this._win = null,
            this._bjUrl = "img/gameOver/bj.jpg",
            this._shangChuanBtnUrlImg = "img/gameOver/shangChuanBtn.png",
            this._startBtnUrlImg = "img/gameOver/startBtn.png",
            this._dustbinUrlImgArr = ["img/gameView/garbage1.png", "img/gameView/garbage2.png", "img/gameView/garbage3.png", "img/gameView/garbage4.png"],
            this._explainUrlImg = "img/main/ruleBtn.png",
            this._dustbinVec = null,
            this._yanJingVec = null,
            this._nvHaiYanJing = null,
            this._starVec = null,
            this._scoreTxt = null,
            this._radomNum = 0,
            this._radomIndex = 0,
            this._playNum = 0,
            this._playCount = 0,
            this._playState = 0,
            this._isInit = !1,
            this._win = new Ce,
            i.stage.addChild(this._win)
        }
        n(t, "view.GameOverMediator");
        var e = t.prototype;
        return e.initUI = function() {
            this._gameBJ = p.createGraphicsImg(this._win, this._bjUrl),
            this._nvHaiYanJing = p.createGraphicsImg(this._win, "img/donghua/nvHai.png"),
            this._nvHaiYanJing.pos(836, 271),
            this._nvHaiYanJing.visible = !1,
            this._scoreTxt = p.createText(this._win, "0", "#FFFFFF", 100, 980, 45, 8, "#000000");
            var t = 0;
            for (this._starVec = [],
            t = 0; t < 3; t++) {
                var e = p.createGraphicsImg(this._win, "img/gameView/star.png");
                e.pos(350 + 90 * t, 930),
                this._starVec.push(e)
            }
            var i = [240, 550, 1400, 1700]
              , s = [420, 600, 600, 420]
              , n = [90, 100, 100, 90]
              , r = [86, 96, 96, 86];
            for (this._dustbinVec = [],
            this._yanJingVec = [],
            t = 0; t < this._dustbinUrlImgArr.length; t++) {
                var a = p.createGraphicsImg(this._win, this._dustbinUrlImgArr[t]);
                a.pivot(a.width / 2, a.height / 2),
                a.pos(i[t], s[t]),
                this._dustbinVec.push(a);
                var o = p.createGraphicsImg(a, c.yanJingArr[t]);
                o.pos(n[t], r[t]),
                o.visible = !1,
                this._yanJingVec.push(o)
            }
            var h = new Je(this._explainUrlImg);
            h.on("click", this, this.onMouseClickRuleBtn),
            this._win.addChild(h),
            h.pos(1300, 740);
            var l = new Je(this._startBtnUrlImg);
            l.on("click", this, this.onMouseClickStartBtn),
            this._win.addChild(l),
            l.pos(1600, 740)
        }
        ,
        e.onMouseClickRuleBtn = function(t) {
            p.playSound("sound/btn.mp3"),
            Zt.getInstacne.event("explainInfoUI")
        }
        ,
        e.showResult = function() {
            var t = 0;
            for (t = 0; t < this._starVec.length; t++)
                this._starVec[t].visible = c.starLv > t;
            this._scoreTxt.text = "?????????" + c.sumScore
        }
        ,
        e.onMouseClickStartBtn = function(t) {
            p.playSound("sound/btn.mp3"),
            Zt.getInstacne.event("startGameUI")
        }
        ,
        e.onTimer = function(t) {
            0 == this._playState ? (0 == this._radomNum && (this._playCount = 0,
            this._radomNum = 100 * Math.random() + 10,
            this._radomIndex = Math.floor(6 * Math.random())),
            this._playCount++,
            this._playCount >= this._radomNum && (this._playState = 1,
            this._playNum = 0,
            this._radomIndex >= 4 ? this._nvHaiYanJing.visible = !0 : this._yanJingVec[this._radomIndex].visible = !0)) : 1 == this._playState && (this._playNum++,
            this._playNum >= 8 && (this._playState = 0,
            this._radomNum = 0,
            this._radomIndex >= 4 ? this._nvHaiYanJing.visible = !1 : this._yanJingVec[this._radomIndex].visible = !1))
        }
        ,
        e.show = function() {
            0 == this._isInit && (this.initUI(),
            this._isInit = !0),
            this._win.visible = !0,
            this.showResult(),
            G.stopSound("sound/gameBJ.mp3"),
            G.stopSound("sound/bj.mp3"),
            p.playSound("sound/bj.mp3", 0),
            i.timer.loop(20, this, this.onTimer),
            c.isGame = !0
        }
        ,
        e.hide = function() {
            this._win.visible = !1,
            i.timer.clear(this, this.onTimer)
        }
        ,
        t
    }()
      , v = function() {
        function t() {
            this._gameBJ = null,
            this._bjUrl = "img/main/bj.jpg",
            this._explainUrlImg = "img/main/ruleBtn.png",
            this._startUrlImg = "img/main/startBtn.png",
            this._nvHaiYanJing = null,
            this.isShow = !1,
            this._win = null,
            this._radomNum = 0,
            this._radomIndex = 0,
            this._playNum = 0,
            this._playCount = 0,
            this._playState = 0,
            this._isInit = !1,
            this._win = new Ce,
            i.stage.addChild(this._win)
        }
        n(t, "view.MainMediator");
        var e = t.prototype;
        return e.initUI = function() {
            this._gameBJ = p.createGraphicsImg(this._win, this._bjUrl),
            this._nvHaiYanJing = p.createGraphicsImg(this._win, "img/donghua/nvHai.png"),
            this._nvHaiYanJing.pos(1365, 390),
            this._nvHaiYanJing.visible = !1;
            var t = new Je(this._explainUrlImg);
            t.on("click", this, this.onMouseClickRuleBtn),
            this._win.addChild(t),
            t.pos(200, 700);
            var e = new Je(this._startUrlImg);
            e.on("click", this, this.onMouseClickStarBtn),
            this._win.addChild(e),
            e.pos(500, 700)
        }
        ,
        e.onMouseClickRuleBtn = function(t) {
            p.playSound("sound/btn.mp3"),
            Zt.getInstacne.event("explainInfoUI")
        }
        ,
        e.onMouseClickStarBtn = function(t) {
            p.playSound("sound/btn.mp3"),
            Zt.getInstacne.event("startGameUI")
        }
        ,
        e.onTimer = function(t) {
            0 == this._playState ? (0 == this._radomNum && (this._playCount = 0,
            this._radomNum = 100 * Math.random() + 10,
            this._radomIndex = Math.floor(6 * Math.random())),
            this._playCount++,
            this._playCount >= this._radomNum && (this._playState = 1,
            this._playNum = 0,
            this._nvHaiYanJing.visible = !0)) : 1 == this._playState && (this._playNum++,
            this._playNum >= 8 && (this._playState = 0,
            this._radomNum = 0,
            this._nvHaiYanJing.visible = !1))
        }
        ,
        e.show = function() {
            0 == this._isInit && (this._isInit = !0,
            this.initUI()),
            this._win.visible = !0,
            i.timer.loop(20, this, this.onTimer)
        }
        ,
        e.hide = function() {
            this._win.visible = !1,
            i.timer.clear(this, this.onTimer)
        }
        ,
        t
    }()
      , y = function() {
        function t() {}
        return n(t, "Config"),
        t.WebGLTextCacheCount = 500,
        t.atlasEnable = !1,
        t.showCanvasMark = !1,
        t.animationInterval = 50,
        t.isAntialias = !1,
        t.isAlpha = !1,
        t.premultipliedAlpha = !0,
        t.isStencil = !0,
        t.preserveDrawingBuffer = !1,
        t
    }()
      , x = function() {
        function e() {
            if (this._one = null,
            this._cmds = null,
            this._render = this._renderEmpty,
            X.isConchNode) {
                this._nativeObj = new t._conchGraphics,
                this.id = this._nativeObj.conchID
            }
        }
        n(e, "laya.display.Graphics");
        var s = e.prototype;
        return s.destroy = function() {
            this.clear(),
            this._graphicBounds && this._graphicBounds.destroy(),
            this._graphicBounds = null,
            this._vectorgraphArray = null,
            this._sp && (this._sp._renderType = 0),
            this._sp = null
        }
        ,
        s.clear = function(t) {
            void 0 === t && (t = !1);
            var i = 0
              , s = 0;
            if (t) {
                var n = this._one;
                if (this._cmds) {
                    for (s = this._cmds.length,
                    i = 0; i < s; i++)
                        !(n = this._cmds[i]) || n.callee !== X._context._drawTexture && n.callee !== X._context._drawTextureWithTransform || (n[0] = null,
                        e._cache.push(n));
                    this._cmds.length = 0
                } else
                    n && (!n || n.callee !== X._context._drawTexture && n.callee !== X._context._drawTextureWithTransform || (n[0] = null,
                    e._cache.push(n)))
            } else
                this._cmds = null;
            if (this._one = null,
            this._render = this._renderEmpty,
            this._sp && (this._sp._renderType &= -514),
            this._repaint(),
            this._vectorgraphArray) {
                for (i = 0,
                s = this._vectorgraphArray.length; i < s; i++)
                    dt.getInstance().deleteShape(this._vectorgraphArray[i]);
                this._vectorgraphArray.length = 0
            }
        }
        ,
        s._clearBoundsCache = function() {
            this._graphicBounds && this._graphicBounds.reset()
        }
        ,
        s._initGraphicBounds = function() {
            this._graphicBounds || (this._graphicBounds = new A,
            this._graphicBounds._graphics = this)
        }
        ,
        s._repaint = function() {
            this._clearBoundsCache(),
            this._sp && this._sp.repaint()
        }
        ,
        s._isOnlyOne = function() {
            return !this._cmds || 0 === this._cmds.length
        }
        ,
        s.getBounds = function(t) {
            return void 0 === t && (t = !1),
            this._initGraphicBounds(),
            this._graphicBounds.getBounds(t)
        }
        ,
        s.getBoundPoints = function(t) {
            return void 0 === t && (t = !1),
            this._initGraphicBounds(),
            this._graphicBounds.getBoundPoints(t)
        }
        ,
        s._addCmd = function(t) {
            this._cmds = this._cmds || [],
            t.callee = t.shift(),
            this._cmds.push(t)
        }
        ,
        s.setFilters = function(t) {
            this._saveToCmd(X._context._setFilters, t)
        }
        ,
        s.drawTexture = function(t, i, s, n, r, a, o) {
            if (void 0 === i && (i = 0),
            void 0 === s && (s = 0),
            void 0 === n && (n = 0),
            void 0 === r && (r = 0),
            void 0 === o && (o = 1),
            !t || o < .01)
                return null;
            n || (n = t.sourceWidth),
            r || (r = t.sourceHeight),
            o = o < 0 ? 0 : o > 1 ? 1 : o;
            var h = !X.isWebGL && (et.onFirefox || et.onEdge || et.onIE || et.onSafari) ? .5 : 0
              , l = n / t.sourceWidth
              , u = r / t.sourceHeight;
            if (n = t.width * l,
            r = t.height * u,
            t.loaded && (n <= 0 || r <= 0))
                return null;
            i += t.offsetX * l,
            s += t.offsetY * u,
            this._sp && (this._sp._renderType |= 512);
            var c;
            return i -= h,
            s -= h,
            n += 2 * h,
            r += 2 * h,
            e._cache.length ? ((c = e._cache.pop())[0] = t,
            c[1] = i,
            c[2] = s,
            c[3] = n,
            c[4] = r,
            c[5] = a,
            c[6] = o) : c = [t, i, s, n, r, a, o],
            c.callee = a || 1 != o ? X._context._drawTextureWithTransform : X._context._drawTexture,
            null != this._one || a || 1 != o ? this._saveToCmd(c.callee, c) : (this._one = c,
            this._render = this._renderOneImg),
            t.loaded || t.once("loaded", this, this._textureLoaded, [t, c]),
            this._repaint(),
            c
        }
        ,
        s.cleanByTexture = function(t, e, i, s, n) {
            if (void 0 === s && (s = 0),
            void 0 === n && (n = 0),
            !t)
                return this.clear();
            if (this._one && this._render === this._renderOneImg) {
                s || (s = t.sourceWidth),
                n || (n = t.sourceHeight);
                var r = s / t.sourceWidth
                  , a = n / t.sourceHeight;
                s = t.width * r,
                n = t.height * a,
                e += t.offsetX * r,
                i += t.offsetY * a,
                this._one[0] = t,
                this._one[1] = e,
                this._one[2] = i,
                this._one[3] = s,
                this._one[4] = n,
                this._repaint()
            } else
                this.clear(),
                t && this.drawTexture(t, e, i, s, n)
        }
        ,
        s.drawTextures = function(t, e) {
            t && this._saveToCmd(X._context._drawTextures, [t, e])
        }
        ,
        s.fillTexture = function(t, e, i, s, n, r, a) {
            if (void 0 === s && (s = 0),
            void 0 === n && (n = 0),
            void 0 === r && (r = "repeat"),
            t) {
                var o = [t, e, i, s, n, r, a || U.EMPTY, {}];
                t.loaded || t.once("loaded", this, this._textureLoaded, [t, o]),
                this._saveToCmd(X._context._fillTexture, o)
            }
        }
        ,
        s._textureLoaded = function(t, e) {
            e[3] = e[3] || t.width,
            e[4] = e[4] || t.height,
            this._repaint()
        }
        ,
        s.fillCircle = function(t, e, i, s, n, r, a) {
            i.bitmap.enableMerageInAtlas = !1;
            var o = new Float32Array(2 * (a + 1))
              , h = new Float32Array(2 * (a + 1))
              , l = new Uint16Array(3 * a)
              , u = 2 * Math.PI / a
              , c = 0;
            o[0] = s,
            o[1] = n,
            h[0] = s / i.width,
            h[1] = n / i.height;
            for (var _ = 2, d = 0; d < a; d++) {
                var f = r * Math.cos(c) + s
                  , p = r * Math.sin(c) + n;
                o[_] = f,
                o[_ + 1] = p,
                h[_] = f / i.width,
                h[_ + 1] = p / i.height,
                c += u,
                _ += 2
            }
            for (_ = 0,
            d = 0; d < a; d++)
                l[_++] = 0,
                l[_++] = d + 1,
                l[_++] = d + 2 >= a + 1 ? 1 : d + 2;
            this.drawTriangles(i, t, e, o, h, l)
        }
        ,
        s.drawTriangles = function(t, e, i, s, n, r, a, o, h, l) {
            void 0 === o && (o = 1),
            this._saveToCmd(X._context.drawTriangles, [t, e, i, s, n, r, a, o, h, l])
        }
        ,
        s._saveToCmd = function(t, e) {
            return this._sp && (this._sp._renderType |= 512),
            null == this._one ? (this._one = e,
            this._render = this._renderOne) : (this._sp && (this._sp._renderType &= -2),
            this._render = this._renderAll,
            0 === (this._cmds || (this._cmds = [])).length && this._cmds.push(this._one),
            this._cmds.push(e)),
            e.callee = t,
            this._repaint(),
            e
        }
        ,
        s.clipRect = function(t, e, i, s) {
            this._saveToCmd(X._context._clipRect, [t, e, i, s])
        }
        ,
        s.fillText = function(t, e, i, s, n, r, a) {
            void 0 === a && (a = 0),
            this._saveToCmd(X._context._fillText, [t, e, i, s || S.defaultFont, n, r])
        }
        ,
        s.fillBorderText = function(t, e, i, s, n, r, a, o) {
            this._saveToCmd(X._context._fillBorderText, [t, e, i, s || S.defaultFont, n, r, a, o])
        }
        ,
        s.strokeText = function(t, e, i, s, n, r, a) {
            this._saveToCmd(X._context._strokeText, [t, e, i, s || S.defaultFont, n, r, a])
        }
        ,
        s.alpha = function(t) {
            t = t < 0 ? 0 : t > 1 ? 1 : t,
            this._saveToCmd(X._context._alpha, [t])
        }
        ,
        s.setAlpha = function(t) {
            t = t < 0 ? 0 : t > 1 ? 1 : t,
            this._saveToCmd(X._context._setAlpha, [t])
        }
        ,
        s.transform = function(t, e, i) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            this._saveToCmd(X._context._transform, [t, e, i])
        }
        ,
        s.rotate = function(t, e, i) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            this._saveToCmd(X._context._rotate, [t, e, i])
        }
        ,
        s.scale = function(t, e, i, s) {
            void 0 === i && (i = 0),
            void 0 === s && (s = 0),
            this._saveToCmd(X._context._scale, [t, e, i, s])
        }
        ,
        s.translate = function(t, e) {
            this._saveToCmd(X._context._translate, [t, e])
        }
        ,
        s.save = function() {
            this._saveToCmd(X._context._save, [])
        }
        ,
        s.restore = function() {
            this._saveToCmd(X._context._restore, [])
        }
        ,
        s.replaceText = function(t) {
            this._repaint();
            var e = this._cmds;
            if (e) {
                for (var i = e.length - 1; i > -1; i--)
                    if (this._isTextCmd(e[i].callee))
                        return e[i][0].toUpperCase ? e[i][0] = t : e[i][0].setText(t),
                        !0
            } else if (this._one && this._isTextCmd(this._one.callee))
                return this._one[0].toUpperCase ? this._one[0] = t : this._one[0].setText(t),
                !0;
            return !1
        }
        ,
        s._isTextCmd = function(t) {
            return t === X._context._fillText || t === X._context._fillBorderText || t === X._context._strokeText
        }
        ,
        s.replaceTextColor = function(t) {
            this._repaint();
            var e = this._cmds;
            if (e)
                for (var i = e.length - 1; i > -1; i--)
                    this._isTextCmd(e[i].callee) && (e[i][4] = t,
                    e[i][0].toUpperCase || (e[i][0].changed = !0));
            else
                this._one && this._isTextCmd(this._one.callee) && (this._one[4] = t,
                this._one[0].toUpperCase || (this._one[0].changed = !0))
        }
        ,
        s.loadImage = function(t, e, s, n, r, a) {
            function o(t) {
                t && (h.drawTexture(t, e, s, n, r),
                null != a && a.call(h._sp, t))
            }
            var h = this;
            void 0 === e && (e = 0),
            void 0 === s && (s = 0),
            void 0 === n && (n = 0),
            void 0 === r && (r = 0);
            var u = oe.getRes(t);
            u ? o(u) : i.loader.load(t, l.create(null, o), null, "image")
        }
        ,
        s._renderEmpty = function(t, e, i, s) {}
        ,
        s._renderAll = function(t, e, i, s) {
            for (var n, r = this._cmds, a = 0, o = r.length; a < o; a++)
                (n = r[a]).callee.call(e, i, s, n)
        }
        ,
        s._renderOne = function(t, e, i, s) {
            this._one.callee.call(e, i, s, this._one)
        }
        ,
        s._renderOneImg = function(t, e, i, s) {
            this._one.callee.call(e, i, s, this._one),
            2305 !== t._renderType && (t._renderType |= 1)
        }
        ,
        s.drawLine = function(t, e, i, s, n, r) {
            void 0 === r && (r = 1);
            var a = 0;
            X.isWebGL && (a = dt.getInstance().getId(),
            null == this._vectorgraphArray && (this._vectorgraphArray = []),
            this._vectorgraphArray.push(a));
            var o = r % 2 == 0 ? 0 : .5
              , h = [t + o, e + o, i + o, s + o, n, r, a];
            this._saveToCmd(X._context._drawLine, h)
        }
        ,
        s.drawLines = function(t, e, i, s, n) {
            void 0 === n && (n = 1);
            var r = 0;
            if (i && !(i.length < 4)) {
                X.isWebGL && (r = dt.getInstance().getId(),
                null == this._vectorgraphArray && (this._vectorgraphArray = []),
                this._vectorgraphArray.push(r));
                var a = n % 2 == 0 ? 0 : .5
                  , o = [t + a, e + a, i, s, n, r];
                this._saveToCmd(X._context._drawLines, o)
            }
        }
        ,
        s.drawCurves = function(t, e, i, s, n) {
            void 0 === n && (n = 1);
            var r = [t, e, i, s, n];
            this._saveToCmd(X._context._drawCurves, r)
        }
        ,
        s.drawRect = function(t, e, i, s, n, r, a) {
            void 0 === a && (a = 1);
            var o = r ? a / 2 : 0
              , h = r ? a : 0
              , l = [t + o, e + o, i - h, s - h, n, r, a];
            this._saveToCmd(X._context._drawRect, l)
        }
        ,
        s.drawCircle = function(t, e, i, s, n, r) {
            void 0 === r && (r = 1);
            var a = n ? r / 2 : 0
              , o = 0;
            X.isWebGL && (o = dt.getInstance().getId(),
            null == this._vectorgraphArray && (this._vectorgraphArray = []),
            this._vectorgraphArray.push(o));
            var h = [t, e, i - a, s, n, r, o];
            this._saveToCmd(X._context._drawCircle, h)
        }
        ,
        s.drawPie = function(t, e, i, s, n, r, a, o) {
            void 0 === o && (o = 1);
            var h = a ? o / 2 : 0
              , l = a ? o : 0
              , u = 0;
            X.isWebGL && (u = dt.getInstance().getId(),
            null == this._vectorgraphArray && (this._vectorgraphArray = []),
            this._vectorgraphArray.push(u));
            var c = [t + h, e + h, i - l, s, n, r, a, o, u];
            c[3] = _t.toRadian(s),
            c[4] = _t.toRadian(n),
            this._saveToCmd(X._context._drawPie, c)
        }
        ,
        s.drawPoly = function(t, e, i, s, n, r) {
            void 0 === r && (r = 1);
            var a = 0
              , o = !1;
            X.isWebGL && (a = dt.getInstance().getId(),
            null == this._vectorgraphArray && (this._vectorgraphArray = []),
            this._vectorgraphArray.push(a),
            o = !(i.length > 6));
            var h = n ? r % 2 == 0 ? 0 : .5 : 0
              , l = [t + h, e + h, i, s, n, r, a, o];
            this._saveToCmd(X._context._drawPoly, l)
        }
        ,
        s.drawPath = function(t, e, i, s, n) {
            var r = [t, e, i, s, n];
            this._saveToCmd(X._context._drawPath, r)
        }
        ,
        r(0, s, "cmds", function() {
            return this._cmds
        }, function(t) {
            this._sp && (this._sp._renderType |= 512),
            this._cmds = t,
            this._render = this._renderAll,
            this._repaint()
        }),
        e.__init__ = function() {
            if (X.isConchNode) {
                for (var t = laya.display.Graphics.prototype, e = et.window.ConchGraphics.prototype, i = ["clear", "destroy", "alpha", "rotate", "transform", "scale", "translate", "save", "restore", "clipRect", "blendMode", "fillText", "fillBorderText", "_fands", "drawRect", "drawCircle", "drawPie", "drawPoly", "drawPath", "drawImageM", "drawLine", "drawLines", "_drawPs", "drawCurves", "replaceText", "replaceTextColor", "_fillImage", "fillTexture", "setSkinMesh", "drawParticle", "drawImageS"], s = 0, n = i.length; s <= n; s++) {
                    var r = i[s];
                    t[r] = e[r]
                }
                t._saveToCmd = null,
                e.drawImageS && (t.drawTextures = function(t, e) {
                    if (t && t.loaded && t.bitmap && t.source) {
                        var i = t.uv
                          , s = t.bitmap.width
                          , n = t.bitmap.height;
                        this.drawImageS(t.bitmap.source, i[0] * s, i[1] * n, (i[2] - i[0]) * s, (i[5] - i[3]) * n, t.offsetX, t.offsetY, t.width, t.height, e)
                    }
                }
                ),
                t.drawTexture = function(t, e, i, s, n, r, a) {
                    if (void 0 === e && (e = 0),
                    void 0 === i && (i = 0),
                    void 0 === s && (s = 0),
                    void 0 === n && (n = 0),
                    void 0 === a && (a = 1),
                    t)
                        if (t.loaded) {
                            if (t.loaded && t.bitmap && t.source && (s || (s = t.sourceWidth),
                            n || (n = t.sourceHeight),
                            a = a < 0 ? 0 : a > 1 ? 1 : a,
                            s = s - t.sourceWidth + t.width,
                            n = n - t.sourceHeight + t.height,
                            !(s <= 0 || n <= 0))) {
                                e += t.offsetX,
                                i += t.offsetY;
                                var o = t.uv
                                  , h = t.bitmap.width
                                  , l = t.bitmap.height;
                                this.drawImageM(t.bitmap.source, o[0] * h, o[1] * l, (o[2] - o[0]) * h, (o[5] - o[3]) * l, e, i, s, n, r, a),
                                this._repaint()
                            }
                        } else
                            t.once("loaded", this, function() {
                                this.drawTexture(t, e, i, s, n, r)
                            })
                }
                ,
                t.fillTexture = function(t, e, i, s, n, r, a) {
                    if (void 0 === s && (s = 0),
                    void 0 === n && (n = 0),
                    void 0 === r && (r = "repeat"),
                    t && t.loaded) {
                        var o, h = X._context.ctx, l = t.bitmap.width, u = t.bitmap.height, c = t.uv;
                        o = t.uv != he.DEF_UV ? h.createPattern(t.bitmap.source, r, c[0] * l, c[1] * u, (c[2] - c[0]) * l, (c[5] - c[3]) * u) : h.createPattern(t.bitmap.source, r);
                        var _ = 0
                          , d = 0;
                        a && (e += a.x % t.width,
                        i += a.y % t.height,
                        _ -= a.x % t.width,
                        d -= a.y % t.height),
                        this._fillImage(o, e, i, _, d, s, n)
                    }
                }
            }
        }
        ,
        e._cache = [],
        e
    }()
      , b = function() {
        function t(t, i, s, n, r) {
            function a(t) {
                var i = []
                  , s = new e(i);
                return o._compileToTree(s, t.split("\n"), 0, i, r),
                s
            }
            var o = this
              , h = et.now();
            this._VS = a(i),
            this._PS = a(s),
            this._nameMap = n,
            et.now() - h > 2 && console.log("ShaderCompile use time:" + (et.now() - h) + "  size:" + i.length + "/" + s.length)
        }
        var e, i;
        n(t, "laya.webgl.utils.ShaderCompile");
        var r = t.prototype;
        return r._compileToTree = function(i, s, n, r, a) {
            var o, h, l, u, c, _, d, f = 0, p = 0, g = 0, m = 0;
            for (p = n; p < s.length; p++)
                if (!((l = s[p]).length < 1) && 0 !== (f = l.indexOf("//"))) {
                    if (f >= 0 && (l = l.substr(0, f)),
                    o = d || new e(r),
                    d = null,
                    o.text = l,
                    o.noCompile = !0,
                    (f = l.indexOf("#")) >= 0) {
                        for (u = "#",
                        m = f + 1,
                        g = l.length; m < g; m++) {
                            var v = l.charAt(m);
                            if (" " === v || "\t" === v || "?" === v)
                                break;
                            u += v
                        }
                        switch (o.name = u,
                        u) {
                        case "#ifdef":
                        case "#ifndef":
                            if (o.src = l,
                            o.noCompile = null != l.match(/[!&|()=<>]/),
                            o.noCompile ? console.log("function():Boolean{return " + l.substr(f + o.name.length) + "}") : (_ = l.replace(/^\s*/, "").split(/\s+/),
                            o.setCondition(_[1], "#ifdef" === u ? 1 : 2),
                            o.text = "//" + o.text),
                            o.setParent(i),
                            i = o,
                            a)
                                for (_ = l.substr(m).split(t._splitToWordExps3),
                                m = 0; m < _.length; m++)
                                    (l = _[m]).length && (a[l] = !0);
                            continue;
                        case "#if":
                            if (o.src = l,
                            o.noCompile = !0,
                            o.setParent(i),
                            i = o,
                            a)
                                for (_ = l.substr(m).split(t._splitToWordExps3),
                                m = 0; m < _.length; m++)
                                    (l = _[m]).length && "defined" != l && (a[l] = !0);
                            continue;
                        case "#else":
                            o.src = l,
                            h = (i = i.parent).childs[i.childs.length - 1],
                            o.noCompile = h.noCompile,
                            o.noCompile || (o.condition = h.condition,
                            o.conditionType = 1 == h.conditionType ? 2 : 1,
                            o.text = "//" + o.text + " " + h.text + " " + o.conditionType),
                            o.setParent(i),
                            i = o;
                            continue;
                        case "#endif":
                            h = (i = i.parent).childs[i.childs.length - 1],
                            o.noCompile = h.noCompile,
                            o.noCompile || (o.text = "//" + o.text),
                            o.setParent(i);
                            continue;
                        case "#include":
                            _ = t.splitToWords(l, null);
                            var y = t.includes[_[1]];
                            if (!y)
                                throw "ShaderCompile error no this include file:" + _[1];
                            if ((f = _[0].indexOf("?")) < 0) {
                                o.setParent(i),
                                l = y.getWith("with" == _[2] ? _[3] : null),
                                this._compileToTree(o, l.split("\n"), 0, r, a),
                                o.text = "";
                                continue
                            }
                            o.setCondition(_[0].substr(f + 1), 1),
                            o.text = y.getWith("with" == _[2] ? _[3] : null);
                            break;
                        case "#import":
                            c = (_ = t.splitToWords(l, null))[1],
                            r.push({
                                node: o,
                                file: t.includes[c],
                                ofs: o.text.length
                            });
                            continue
                        }
                    } else {
                        if ((h = i.childs[i.childs.length - 1]) && !h.name) {
                            r.length > 0 && t.splitToWords(l, h),
                            d = o,
                            h.text += "\n" + l;
                            continue
                        }
                        r.length > 0 && t.splitToWords(l, o)
                    }
                    o.setParent(i)
                }
        }
        ,
        r.createShader = function(t, e, i) {
            var s = {}
              , n = "";
            if (t)
                for (var r in t)
                    n += "#define " + r + "\n",
                    s[r] = !0;
            var a = this._VS.toscript(s, [])
              , o = this._PS.toscript(s, []);
            return (i || Ge.create)(n + a.join("\n"), n + o.join("\n"), e, this._nameMap)
        }
        ,
        t._parseOne = function(e, i, s, n, r, a) {
            var o = {
                type: t.shaderParamsMap[s[n + 1]],
                name: s[n + 2],
                size: isNaN(parseInt(s[n + 3])) ? 1 : parseInt(s[n + 3])
            };
            return a && ("attribute" == r ? e.push(o) : i.push(o)),
            ":" == s[n + 3] && (o.type = s[n + 4],
            n += 2),
            n += 2
        }
        ,
        t.addInclude = function(e, s) {
            if (!s || 0 === s.length)
                throw new Error("add shader include file err:" + e);
            if (t.includes[e])
                throw new Error("add shader include file err, has add:" + e);
            t.includes[e] = new i(s)
        }
        ,
        t.preGetParams = function(e, i) {
            var s = [e, i]
              , n = {}
              , r = []
              , a = []
              , o = {}
              , h = [];
            n.attributes = r,
            n.uniforms = a,
            n.defines = o;
            for (var l = 0, u = 0, c = 0; c < 2; c++) {
                s[c] = s[c].replace(t._removeAnnotation, "");
                var _, d = s[c].match(t._reg);
                for (l = 0,
                u = d.length; l < u; l++) {
                    var f = d[l];
                    if ("attribute" == f || "uniform" == f)
                        l = t._parseOne(r, a, d, l, f, !0);
                    else {
                        if ("#define" == f) {
                            h[f = d[++l]] = 1;
                            continue
                        }
                        if ("#ifdef" == f) {
                            o[_ = d[++l]] = o[_] || [];
                            for (l++; l < u; l++)
                                if ("attribute" == (f = d[l]) || "uniform" == f)
                                    l = t._parseOne(r, a, d, l, f, h[_]);
                                else if ("#else" == f)
                                    for (l++; l < u; l++)
                                        if ("attribute" == (f = d[l]) || "uniform" == f)
                                            l = t._parseOne(r, a, d, l, f, !h[_]);
                                        else if ("#endif" == f)
                                            break
                        }
                    }
                }
            }
            return n
        }
        ,
        t.splitToWords = function(t, e) {
            for (var i, s, n = [], r = -1, a = 0, o = t.length; a < o; a++)
                if (i = t.charAt(a),
                " \t=+-*/&%!<>()'\",;".indexOf(i) >= 0) {
                    if (r >= 0 && a - r > 1 && (s = t.substr(r, a - r),
                    n.push(s)),
                    '"' == i || "'" == i) {
                        var h = t.indexOf(i, a + 1);
                        if (h < 0)
                            throw "Sharder err:" + t;
                        n.push(t.substr(a + 1, h - a - 1)),
                        a = h,
                        r = -1;
                        continue
                    }
                    "(" == i && e && n.length > 0 && (s = n[n.length - 1] + ";",
                    "vec4;main;".indexOf(s) < 0 && (e.useFuns += s)),
                    r = -1
                } else
                    r < 0 && (r = a);
            return r < o && o - r > 1 && (s = t.substr(r, o - r),
            n.push(s)),
            n
        }
        ,
        t.IFDEF_NO = 0,
        t.IFDEF_YES = 1,
        t.IFDEF_ELSE = 2,
        t.IFDEF_PARENT = 3,
        t._removeAnnotation = new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)","g"),
        t._reg = new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])","g"),
        t._splitToWordExps = new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])","g"),
        t.includes = {},
        s(t, ["shaderParamsMap", function() {
            return this.shaderParamsMap = {
                float: 5126,
                int: 5124,
                bool: 35670,
                vec2: 35664,
                vec3: 35665,
                vec4: 35666,
                ivec2: 35667,
                ivec3: 35668,
                ivec4: 35669,
                bvec2: 35671,
                bvec3: 35672,
                bvec4: 35673,
                mat2: 35674,
                mat3: 35675,
                mat4: 35676,
                sampler2D: 35678,
                samplerCube: 35680
            }
        }
        , "_splitToWordExps3", function() {
            return this._splitToWordExps3 = new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]","g")
        }
        ]),
        t.__init$ = function() {
            e = function() {
                function t(t) {
                    this.childs = [],
                    this.text = "",
                    this.parent = null,
                    this.name = null,
                    this.noCompile = !1,
                    this.includefiles = null,
                    this.condition = null,
                    this.conditionType = 0,
                    this.useFuns = "",
                    this.z = 0,
                    this.src = null,
                    this.includefiles = t
                }
                n(t, "");
                var e = t.prototype;
                return e.setParent = function(t) {
                    t.childs.push(this),
                    this.z = t.z + 1,
                    this.parent = t
                }
                ,
                e.setCondition = function(t, e) {
                    t && (this.conditionType = e,
                    t = t.replace(/(\s*$)/g, ""),
                    this.condition = function() {
                        return this[t]
                    }
                    ,
                    this.condition.__condition = t)
                }
                ,
                e.toscript = function(e, i) {
                    return this._toscript(e, i, ++t.__id)
                }
                ,
                e._toscript = function(t, e, i) {
                    if (this.childs.length < 1 && !this.text)
                        return e;
                    e.length;
                    if (this.condition) {
                        var s = !!this.condition.call(t);
                        if (2 === this.conditionType && (s = !s),
                        !s)
                            return e
                    }
                    if (this.text && e.push(this.text),
                    this.childs.length > 0 && this.childs.forEach(function(s, n, r) {
                        s._toscript(t, e, i)
                    }),
                    this.includefiles.length > 0 && this.useFuns.length > 0)
                        for (var n, r = 0, a = this.includefiles.length; r < a; r++)
                            this.includefiles[r].curUseID != i && (n = this.includefiles[r].file.getFunsScript(this.useFuns)).length > 0 && (this.includefiles[r].curUseID = i,
                            e[0] = n + e[0]);
                    return e
                }
                ,
                t.__id = 1,
                t
            }(),
            i = function() {
                function e(e) {
                    this.script = null,
                    this.codes = {},
                    this.funs = {},
                    this.curUseID = -1,
                    this.funnames = "",
                    this.script = e;
                    for (var i = 0, s = 0, n = 0; ; ) {
                        if ((i = e.indexOf("#begin", i)) < 0)
                            break;
                        for (n = i + 5; ; ) {
                            if ((n = e.indexOf("#end", n)) < 0)
                                break;
                            if ("i" !== e.charAt(n + 4))
                                break;
                            n += 5
                        }
                        if (n < 0)
                            throw "add include err,no #end:" + e;
                        s = e.indexOf("\n", i);
                        var r = t.splitToWords(e.substr(i, s - i), null);
                        "code" == r[1] ? this.codes[r[2]] = e.substr(s + 1, n - s - 1) : "function" == r[1] && (s = e.indexOf("function", i),
                        s += "function".length,
                        this.funs[r[3]] = e.substr(s + 1, n - s - 1),
                        this.funnames += r[3] + ";"),
                        i = n + 1
                    }
                }
                n(e, "");
                var i = e.prototype;
                return i.getWith = function(t) {
                    var e = t ? this.codes[t] : this.script;
                    if (!e)
                        throw "get with error:" + t;
                    return e
                }
                ,
                i.getFunsScript = function(t) {
                    var e = "";
                    for (var i in this.funs)
                        t.indexOf(i + ";") >= 0 && (e += this.funs[i]);
                    return e
                }
                ,
                e
            }()
        }
        ,
        t
    }()
      , T = function() {
        function t() {
            this._texture = null,
            this._fontCharDic = {},
            this._fontWidthMap = {},
            this._complete = null,
            this._path = null,
            this._maxWidth = 0,
            this._spaceWidth = 10,
            this._padding = null,
            this.fontSize = 12,
            this.autoScaleSize = !1,
            this.letterSpacing = 0
        }
        n(t, "laya.display.BitmapFont");
        var e = t.prototype;
        return e.loadFont = function(t, e) {
            this._path = t,
            this._complete = e,
            i.loader.load([{
                url: this._path,
                type: "xml"
            }, {
                url: this._path.replace(".fnt", ".png"),
                type: "image"
            }], l.create(this, this.onLoaded))
        }
        ,
        e.onLoaded = function() {
            this.parseFont(oe.getRes(this._path), oe.getRes(this._path.replace(".fnt", ".png"))),
            this._complete && this._complete.runWith(this._texture ? this : null)
        }
        ,
        e.parseFont = function(t, e) {
            if (null != t && null != e) {
                this._texture = e;
                var i = t.getElementsByTagName("info");
                if (!i[0].getAttributeNode)
                    return this.parseFont2(t, e);
                this.fontSize = parseInt(i[0].getAttributeNode("size").nodeValue);
                var s = i[0].getAttributeNode("padding").nodeValue.split(",");
                this._padding = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])];
                var n;
                n = t.getElementsByTagName("char");
                var r = 0;
                for (r = 0; r < n.length; r++) {
                    var a = n[r]
                      , o = parseInt(a.getAttributeNode("id").nodeValue)
                      , h = parseInt(a.getAttributeNode("xoffset").nodeValue) / 1
                      , l = parseInt(a.getAttributeNode("yoffset").nodeValue) / 1
                      , u = parseInt(a.getAttributeNode("xadvance").nodeValue) / 1
                      , c = new V;
                    c.x = parseInt(a.getAttributeNode("x").nodeValue),
                    c.y = parseInt(a.getAttributeNode("y").nodeValue),
                    c.width = parseInt(a.getAttributeNode("width").nodeValue),
                    c.height = parseInt(a.getAttributeNode("height").nodeValue);
                    var _ = he.create(e, c.x, c.y, c.width, c.height, h, l);
                    this._maxWidth = Math.max(this._maxWidth, u + this.letterSpacing),
                    this._fontCharDic[o] = _,
                    this._fontWidthMap[o] = u
                }
            }
        }
        ,
        e.parseFont2 = function(t, e) {
            if (null != t && null != e) {
                this._texture = e;
                var i = t.getElementsByTagName("info");
                this.fontSize = parseInt(i[0].attributes.size.nodeValue);
                var s = i[0].attributes.padding.nodeValue.split(",");
                this._padding = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])];
                var n = t.getElementsByTagName("char")
                  , r = 0;
                for (r = 0; r < n.length; r++) {
                    var a = n[r].attributes
                      , o = parseInt(a.id.nodeValue)
                      , h = parseInt(a.xoffset.nodeValue) / 1
                      , l = parseInt(a.yoffset.nodeValue) / 1
                      , u = parseInt(a.xadvance.nodeValue) / 1
                      , c = new V;
                    c.x = parseInt(a.x.nodeValue),
                    c.y = parseInt(a.y.nodeValue),
                    c.width = parseInt(a.width.nodeValue),
                    c.height = parseInt(a.height.nodeValue);
                    var _ = he.create(e, c.x, c.y, c.width, c.height, h, l);
                    this._maxWidth = Math.max(this._maxWidth, u + this.letterSpacing),
                    this._fontCharDic[o] = _,
                    this._fontWidthMap[o] = u
                }
            }
        }
        ,
        e.getCharTexture = function(t) {
            return this._fontCharDic[t.charCodeAt(0)]
        }
        ,
        e.destroy = function() {
            if (this._texture) {
                for (var t in this._fontCharDic) {
                    var e = this._fontCharDic[t];
                    e && e.destroy()
                }
                this._texture.destroy(),
                this._fontCharDic = null,
                this._fontWidthMap = null,
                this._texture = null
            }
        }
        ,
        e.setSpaceWidth = function(t) {
            this._spaceWidth = t
        }
        ,
        e.getCharWidth = function(t) {
            var e = t.charCodeAt(0);
            return this._fontWidthMap[e] ? this._fontWidthMap[e] + this.letterSpacing : " " == t ? this._spaceWidth + this.letterSpacing : 0
        }
        ,
        e.getTextWidth = function(t) {
            for (var e = 0, i = 0, s = t.length; i < s; i++)
                e += this.getCharWidth(t.charAt(i));
            return e
        }
        ,
        e.getMaxWidth = function() {
            return this._maxWidth
        }
        ,
        e.getMaxHeight = function() {
            return this.fontSize
        }
        ,
        e.drawText = function(t, e, i, s, n, r) {
            var a, o = this.getTextWidth(t), h = 0;
            "center" === n && (h = (r - o) / 2),
            "right" === n && (h = r - o);
            for (var l = 0, u = 0, c = t.length; u < c; u++)
                (a = this.getCharTexture(t.charAt(u))) && (e.graphics.drawTexture(a, i + l + h, s),
                l += this.getCharWidth(t.charAt(u)))
        }
        ,
        t
    }()
      , w = function() {
        function t() {
            this.alpha = 1,
            this.visible = !0,
            this.scrollRect = null,
            this.blendMode = null,
            this._type = 0,
            this._tf = t._TF_EMPTY
        }
        n(t, "laya.display.css.Style");
        var e = t.prototype;
        return e.getTransform = function() {
            return this._tf
        }
        ,
        e.setTransform = function(e) {
            this._tf = "none" !== e && e ? e : t._TF_EMPTY
        }
        ,
        e.setTranslateX = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new C),
            this._tf.translateX = e
        }
        ,
        e.setTranslateY = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new C),
            this._tf.translateY = e
        }
        ,
        e.setScaleX = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new C),
            this._tf.scaleX = e
        }
        ,
        e.setScale = function(e, i) {
            this._tf === t._TF_EMPTY && (this._tf = new C),
            this._tf.scaleX = e,
            this._tf.scaleY = i
        }
        ,
        e.setScaleY = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new C),
            this._tf.scaleY = e
        }
        ,
        e.setRotate = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new C),
            this._tf.rotate = e
        }
        ,
        e.setSkewX = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new C),
            this._tf.skewX = e
        }
        ,
        e.setSkewY = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new C),
            this._tf.skewY = e
        }
        ,
        e.destroy = function() {
            this.scrollRect = null
        }
        ,
        e.render = function(t, e, i, s) {}
        ,
        e.getCSSStyle = function() {
            return ce.EMPTY
        }
        ,
        e._enableLayout = function() {
            return !1
        }
        ,
        r(0, e, "scaleX", function() {
            return this._tf.scaleX
        }, function(t) {
            this.setScaleX(t)
        }),
        r(0, e, "transform", function() {
            return this.getTransform()
        }, function(t) {
            this.setTransform(t)
        }),
        r(0, e, "translateX", function() {
            return this._tf.translateX
        }, function(t) {
            this.setTranslateX(t)
        }),
        r(0, e, "translateY", function() {
            return this._tf.translateY
        }, function(t) {
            this.setTranslateY(t)
        }),
        r(0, e, "scaleY", function() {
            return this._tf.scaleY
        }, function(t) {
            this.setScaleY(t)
        }),
        r(0, e, "block", function() {
            return 0 != (1 & this._type)
        }),
        r(0, e, "skewY", function() {
            return this._tf.skewY
        }, function(t) {
            this.setSkewY(t)
        }),
        r(0, e, "rotate", function() {
            return this._tf.rotate
        }, function(t) {
            this.setRotate(t)
        }),
        r(0, e, "skewX", function() {
            return this._tf.skewX
        }, function(t) {
            this.setSkewX(t)
        }),
        r(0, e, "paddingLeft", function() {
            return 0
        }),
        r(0, e, "paddingTop", function() {
            return 0
        }),
        r(0, e, "absolute", function() {
            return !0
        }),
        t.__init__ = function() {
            t._TF_EMPTY = new C,
            t.EMPTY = new t
        }
        ,
        t.EMPTY = null,
        t._TF_EMPTY = null,
        t
    }()
      , S = function() {
        function t(e) {
            this._type = 0,
            this._weight = 0,
            this._decoration = null,
            this._text = null,
            this.indent = 0,
            this._color = nt.create(t.defaultColor),
            this.family = t.defaultFamily,
            this.stroke = t._STROKE,
            this.size = t.defaultSize,
            e && e !== t.EMPTY && e.copyTo(this)
        }
        n(t, "laya.display.css.Font");
        var e = t.prototype;
        return e.set = function(t) {
            this._text = null;
            for (var e = t.split(" "), i = 0, s = e.length; i < s; i++) {
                var n = e[i];
                switch (n) {
                case "italic":
                    this.italic = !0;
                    continue;
                case "bold":
                    this.bold = !0;
                    continue
                }
                n.indexOf("px") > 0 && (this.size = parseInt(n),
                this.family = e[i + 1],
                i++)
            }
        }
        ,
        e.toString = function() {
            return this._text = "",
            this.italic && (this._text += "italic "),
            this.bold && (this._text += "bold "),
            this._text += this.size + "px " + this.family
        }
        ,
        e.copyTo = function(e) {
            e._type = this._type,
            e._text = this._text,
            e._weight = this._weight,
            e._color = this._color,
            e.family = this.family,
            e.stroke = this.stroke != t._STROKE ? this.stroke.slice() : t._STROKE,
            e.indent = this.indent,
            e.size = this.size
        }
        ,
        r(0, e, "password", function() {
            return 0 != (1024 & this._type)
        }, function(t) {
            t ? this._type |= 1024 : this._type &= -1025
        }),
        r(0, e, "color", function() {
            return this._color.strColor
        }, function(t) {
            this._color = nt.create(t)
        }),
        r(0, e, "italic", function() {
            return 0 != (512 & this._type)
        }, function(t) {
            t ? this._type |= 512 : this._type &= -513
        }),
        r(0, e, "bold", function() {
            return 0 != (2048 & this._type)
        }, function(t) {
            t ? this._type |= 2048 : this._type &= -2049
        }),
        r(0, e, "weight", function() {
            return "" + this._weight
        }, function(t) {
            var e = 0;
            switch (t) {
            case "normal":
                break;
            case "bold":
                this.bold = !0,
                e = 700;
                break;
            case "bolder":
                e = 800;
                break;
            case "lighter":
                e = 100;
                break;
            default:
                e = parseInt(t)
            }
            this._weight = e,
            this._text = null
        }),
        r(0, e, "decoration", function() {
            return this._decoration ? this._decoration.value : "none"
        }, function(t) {
            var e = t.split(" ");
            switch (this._decoration || (this._decoration = {}),
            e[0]) {
            case "_":
                this._decoration.type = "underline";
                break;
            case "-":
                this._decoration.type = "line-through";
                break;
            case "overline":
                this._decoration.type = "overline";
                break;
            default:
                this._decoration.type = e[0]
            }
            e[1] && (this._decoration.color = nt.create(e)),
            this._decoration.value = t
        }),
        t.__init__ = function() {
            t.EMPTY = new t(null)
        }
        ,
        t.EMPTY = null,
        t.defaultColor = "#000000",
        t.defaultSize = 12,
        t.defaultFamily = "Arial",
        t.defaultFont = "12px Arial",
        t._STROKE = [0, "#000000"],
        t._ITALIC = 512,
        t._PASSWORD = 1024,
        t._BOLD = 2048,
        t
    }()
      , C = function() {
        function t() {
            this.translateX = 0,
            this.translateY = 0,
            this.scaleX = 1,
            this.scaleY = 1,
            this.rotate = 0,
            this.skewX = 0,
            this.skewY = 0
        }
        return n(t, "laya.display.css.TransformInfo"),
        t
    }()
      , A = function() {
        function t() {
            this._cacheBoundsType = !1
        }
        n(t, "laya.display.GraphicsBounds");
        var e = t.prototype;
        return e.destroy = function() {
            this._graphics = null,
            this._temp = null,
            this._rstBoundPoints = null,
            this._bounds = null
        }
        ,
        e.reset = function() {
            this._temp && (this._temp.length = 0)
        }
        ,
        e.getBounds = function(t) {
            return void 0 === t && (t = !1),
            (!this._bounds || !this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._bounds = V._getWrapRec(this.getBoundPoints(t), this._bounds)),
            this._cacheBoundsType = t,
            this._bounds
        }
        ,
        e.getBoundPoints = function(t) {
            return void 0 === t && (t = !1),
            (!this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._temp = this._getCmdPoints(t)),
            this._cacheBoundsType = t,
            this._rstBoundPoints = _t.copyArray(this._rstBoundPoints, this._temp)
        }
        ,
        e._getCmdPoints = function(e) {
            void 0 === e && (e = !1);
            var i, s = X._context, n = this._graphics.cmds;
            if (i = this._temp || (this._temp = []),
            i.length = 0,
            n || null == this._graphics._one || (t._tempCmds.length = 0,
            t._tempCmds.push(this._graphics._one),
            n = t._tempCmds),
            !n)
                return i;
            var r;
            (r = t._tempMatrixArrays).length = 0;
            var a = t._initMatrix;
            a.identity();
            for (var o, h, l = t._tempMatrix, u = NaN, c = NaN, _ = NaN, d = NaN, f = NaN, p = NaN, g = 0, m = n.length; g < m; g++)
                if ((o = n[g]).callee)
                    switch (o.callee) {
                    case s._save:
                    case 7:
                        r.push(a),
                        a = a.clone();
                        break;
                    case s._restore:
                    case 8:
                        a = r.pop();
                        break;
                    case s._scale:
                    case 5:
                        l.identity(),
                        l.translate(-o[2], -o[3]),
                        l.scale(o[0], o[1]),
                        l.translate(o[2], o[3]),
                        this._switchMatrix(a, l);
                        break;
                    case s._rotate:
                    case 3:
                        l.identity(),
                        l.translate(-o[1], -o[2]),
                        l.rotate(o[0]),
                        l.translate(o[1], o[2]),
                        this._switchMatrix(a, l);
                        break;
                    case s._translate:
                    case 6:
                        l.identity(),
                        l.translate(o[0], o[1]),
                        this._switchMatrix(a, l);
                        break;
                    case s._transform:
                    case 4:
                        l.identity(),
                        l.translate(-o[1], -o[2]),
                        l.concat(o[0]),
                        l.translate(o[1], o[2]),
                        this._switchMatrix(a, l);
                        break;
                    case 16:
                    case 24:
                        t._addPointArrToRst(i, V._getBoundPointS(o[0], o[1], o[2], o[3]), a);
                        break;
                    case 17:
                        a.copyTo(l),
                        l.concat(o[4]),
                        t._addPointArrToRst(i, V._getBoundPointS(o[0], o[1], o[2], o[3]), l);
                        break;
                    case s._drawTexture:
                        h = o[0],
                        e ? o[3] && o[4] ? t._addPointArrToRst(i, V._getBoundPointS(o[1], o[2], o[3], o[4]), a) : (h = o[0],
                        t._addPointArrToRst(i, V._getBoundPointS(o[1], o[2], h.width, h.height), a)) : (u = (o[3] || h.sourceWidth) / h.width,
                        c = (o[4] || h.sourceHeight) / h.height,
                        _ = u * h.sourceWidth,
                        d = c * h.sourceHeight,
                        f = h.offsetX > 0 ? h.offsetX : 0,
                        p = h.offsetY > 0 ? h.offsetY : 0,
                        f *= u,
                        p *= c,
                        t._addPointArrToRst(i, V._getBoundPointS(o[1] - f, o[2] - p, _, d), a));
                        break;
                    case s._fillTexture:
                        o[3] && o[4] ? t._addPointArrToRst(i, V._getBoundPointS(o[1], o[2], o[3], o[4]), a) : (h = o[0],
                        t._addPointArrToRst(i, V._getBoundPointS(o[1], o[2], h.width, h.height), a));
                        break;
                    case s._drawTextureWithTransform:
                        var v;
                        o[5] ? (a.copyTo(l),
                        l.concat(o[5]),
                        v = l) : v = a,
                        e ? o[3] && o[4] ? t._addPointArrToRst(i, V._getBoundPointS(o[1], o[2], o[3], o[4]), v) : (h = o[0],
                        t._addPointArrToRst(i, V._getBoundPointS(o[1], o[2], h.width, h.height), v)) : (h = o[0],
                        u = (o[3] || h.sourceWidth) / h.width,
                        c = (o[4] || h.sourceHeight) / h.height,
                        _ = u * h.sourceWidth,
                        d = c * h.sourceHeight,
                        f = h.offsetX > 0 ? h.offsetX : 0,
                        p = h.offsetY > 0 ? h.offsetY : 0,
                        f *= u,
                        p *= c,
                        t._addPointArrToRst(i, V._getBoundPointS(o[1] - f, o[2] - p, _, d), v));
                        break;
                    case s._drawRect:
                    case 13:
                        t._addPointArrToRst(i, V._getBoundPointS(o[0], o[1], o[2], o[3]), a);
                        break;
                    case s._drawCircle:
                    case s._fillCircle:
                    case 14:
                        t._addPointArrToRst(i, V._getBoundPointS(o[0] - o[2], o[1] - o[2], o[2] + o[2], o[2] + o[2]), a);
                        break;
                    case s._drawLine:
                    case 20:
                        t._tempPoints.length = 0;
                        var y = NaN;
                        y = .5 * o[5],
                        o[0] == o[2] ? t._tempPoints.push(o[0] + y, o[1], o[2] + y, o[3], o[0] - y, o[1], o[2] - y, o[3]) : o[1] == o[3] ? t._tempPoints.push(o[0], o[1] + y, o[2], o[3] + y, o[0], o[1] - y, o[2], o[3] - y) : t._tempPoints.push(o[0], o[1], o[2], o[3]),
                        t._addPointArrToRst(i, t._tempPoints, a);
                        break;
                    case s._drawCurves:
                    case 22:
                        t._addPointArrToRst(i, B.I.getBezierPoints(o[2]), a, o[0], o[1]);
                        break;
                    case s._drawPoly:
                    case s._drawLines:
                    case 18:
                        t._addPointArrToRst(i, o[2], a, o[0], o[1]);
                        break;
                    case s._drawPath:
                    case 19:
                        t._addPointArrToRst(i, this._getPathPoints(o[2]), a, o[0], o[1]);
                        break;
                    case s._drawPie:
                    case 15:
                        t._addPointArrToRst(i, this._getPiePoints(o[0], o[1], o[2], o[3], o[4]), a)
                    }
            return i.length > 200 ? i = _t.copyArray(i, V._getWrapRec(i)._getBoundPoints()) : i.length > 8 && (i = N.scanPList(i)),
            i
        }
        ,
        e._switchMatrix = function(t, e) {
            e.concat(t),
            e.copyTo(t)
        }
        ,
        e._getPiePoints = function(e, i, s, n, r) {
            var a = t._tempPoints;
            t._tempPoints.length = 0,
            a.push(e, i);
            var o = (r - n) % (2 * Math.PI) / 10
              , h = NaN
              , l = n;
            for (h = 0; h <= 10; h++)
                a.push(e + s * Math.cos(l), i + s * Math.sin(l)),
                l += o;
            return a
        }
        ,
        e._getPathPoints = function(e) {
            var i = 0
              , s = 0
              , n = t._tempPoints;
            n.length = 0,
            s = e.length;
            var r;
            for (i = 0; i < s; i++)
                (r = e[i]).length > 1 && (n.push(r[1], r[2]),
                r.length > 3 && n.push(r[3], r[4]));
            return n
        }
        ,
        t._addPointArrToRst = function(e, i, s, n, r) {
            void 0 === n && (n = 0),
            void 0 === r && (r = 0);
            var a = 0
              , o = 0;
            for (o = i.length,
            a = 0; a < o; a += 2)
                t._addPointToRst(e, i[a] + n, i[a + 1] + r, s)
        }
        ,
        t._addPointToRst = function(t, e, i, s) {
            var n = U.TEMP;
            n.setTo(e || 0, i || 0),
            s.transformPoint(n),
            t.push(n.x, n.y)
        }
        ,
        t._tempPoints = [],
        t._tempMatrixArrays = [],
        t._tempCmds = [],
        s(t, ["_tempMatrix", function() {
            return this._tempMatrix = new k
        }
        , "_initMatrix", function() {
            return this._initMatrix = new k
        }
        ]),
        t
    }()
      , M = function() {
        function t() {}
        n(t, "laya.events.Event");
        var e = t.prototype;
        return e.setTo = function(t, e, i) {
            return this.type = t,
            this.currentTarget = e,
            this.target = i,
            this
        }
        ,
        e.stopPropagation = function() {
            this._stoped = !0
        }
        ,
        r(0, e, "stageY", function() {
            return i.stage.mouseY
        }),
        r(0, e, "charCode", function() {
            return this.nativeEvent.charCode
        }),
        r(0, e, "touches", function() {
            var t = this.nativeEvent.touches;
            if (t)
                for (var e = i.stage, s = 0, n = t.length; s < n; s++) {
                    var r = t[s]
                      , a = U.TEMP;
                    a.setTo(r.clientX, r.clientY),
                    e._canvasTransform.invertTransformPoint(a),
                    e.transform.invertTransformPoint(a),
                    r.stageX = a.x,
                    r.stageY = a.y
                }
            return t
        }),
        r(0, e, "keyLocation", function() {
            return this.nativeEvent.keyLocation
        }),
        r(0, e, "ctrlKey", function() {
            return this.nativeEvent.ctrlKey
        }),
        r(0, e, "altKey", function() {
            return this.nativeEvent.altKey
        }),
        r(0, e, "shiftKey", function() {
            return this.nativeEvent.shiftKey
        }),
        r(0, e, "stageX", function() {
            return i.stage.mouseX
        }),
        t.EMPTY = new t,
        t.MOUSE_DOWN = "mousedown",
        t.MOUSE_UP = "mouseup",
        t.CLICK = "click",
        t.RIGHT_MOUSE_DOWN = "rightmousedown",
        t.RIGHT_MOUSE_UP = "rightmouseup",
        t.RIGHT_CLICK = "rightclick",
        t.MOUSE_MOVE = "mousemove",
        t.MOUSE_OVER = "mouseover",
        t.MOUSE_OUT = "mouseout",
        t.MOUSE_WHEEL = "mousewheel",
        t.ROLL_OVER = "mouseover",
        t.ROLL_OUT = "mouseout",
        t.DOUBLE_CLICK = "doubleclick",
        t.CHANGE = "change",
        t.CHANGED = "changed",
        t.RESIZE = "resize",
        t.ADDED = "added",
        t.REMOVED = "removed",
        t.DISPLAY = "display",
        t.UNDISPLAY = "undisplay",
        t.ERROR = "error",
        t.COMPLETE = "complete",
        t.LOADED = "loaded",
        t.PROGRESS = "progress",
        t.INPUT = "input",
        t.RENDER = "render",
        t.OPEN = "open",
        t.MESSAGE = "message",
        t.CLOSE = "close",
        t.KEY_DOWN = "keydown",
        t.KEY_PRESS = "keypress",
        t.KEY_UP = "keyup",
        t.FRAME = "enterframe",
        t.DRAG_START = "dragstart",
        t.DRAG_MOVE = "dragmove",
        t.DRAG_END = "dragend",
        t.ENTER = "enter",
        t.SELECT = "select",
        t.BLUR = "blur",
        t.FOCUS = "focus",
        t.VISIBILITY_CHANGE = "visibilitychange",
        t.FOCUS_CHANGE = "focuschange",
        t.PLAYED = "played",
        t.PAUSED = "paused",
        t.STOPPED = "stopped",
        t.START = "start",
        t.END = "end",
        t.ENABLE_CHANGED = "enablechanged",
        t.ACTIVE_IN_HIERARCHY_CHANGED = "activeinhierarchychanged",
        t.COMPONENT_ADDED = "componentadded",
        t.COMPONENT_REMOVED = "componentremoved",
        t.LAYER_CHANGED = "layerchanged",
        t.HIERARCHY_LOADED = "hierarchyloaded",
        t.RECOVERED = "recovered",
        t.RELEASED = "released",
        t.LINK = "link",
        t.LABEL = "label",
        t.FULL_SCREEN_CHANGE = "fullscreenchange",
        t.DEVICE_LOST = "devicelost",
        t.MESH_CHANGED = "meshchanged",
        t.MATERIAL_CHANGED = "materialchanged",
        t.WORLDMATRIX_NEEDCHANGE = "worldmatrixneedchanged",
        t.ANIMATION_CHANGED = "animationchanged",
        t.TRIGGER_ENTER = "triggerenter",
        t.TRIGGER_STAY = "triggerstay",
        t.TRIGGER_EXIT = "triggerexit",
        t.TRAIL_FILTER_CHANGE = "trailfilterchange",
        t.DOMINO_FILTER_CHANGE = "dominofilterchange",
        t
    }()
      , E = function() {
        function t() {}
        return n(t, "laya.events.KeyBoardManager"),
        t.__init__ = function() {
            t._addEvent("keydown"),
            t._addEvent("keypress"),
            t._addEvent("keyup")
        }
        ,
        t._addEvent = function(t) {
            et.document.addEventListener(t, function(e) {
                laya.events.KeyBoardManager._dispatch(e, t)
            }, !0)
        }
        ,
        t._dispatch = function(e, s) {
            if (t.enabled) {
                t._event._stoped = !1,
                t._event.nativeEvent = e,
                t._event.keyCode = e.keyCode || e.which || e.charCode,
                "keydown" === s ? t._pressKeys[t._event.keyCode] = !0 : "keyup" === s && (t._pressKeys[t._event.keyCode] = null);
                for (var n = i.stage.focus && null != i.stage.focus.event && i.stage.focus.displayedInStage ? i.stage.focus : i.stage, r = n; r; )
                    r.event(s, t._event.setTo(s, r, n)),
                    r = r.parent
            }
        }
        ,
        t.hasKeyDown = function(e) {
            return t._pressKeys[e]
        }
        ,
        t._pressKeys = {},
        t.enabled = !0,
        s(t, ["_event", function() {
            return this._event = new M
        }
        ]),
        t
    }()
      , I = function() {
        function t() {
            this.mouseX = 0,
            this.mouseY = 0,
            this.disableMouseEvent = !1,
            this.mouseDownTime = 0,
            this.mouseMoveAccuracy = 2,
            this._stage = null,
            this._target = null,
            this._lastMoveTimer = 0,
            this._isLeftMouse = !1,
            this._eventList = [],
            this._touchIDs = {},
            this._id = 1,
            this._tTouchID = 0,
            this._event = new M,
            this._matrix = new k,
            this._point = new U,
            this._rect = new V,
            this._prePoint = new U,
            this._curTouchID = NaN
        }
        n(t, "laya.events.MouseManager");
        var e = t.prototype;
        return e.__init__ = function(e, i) {
            var s = this;
            this._stage = e;
            var n = this
              , r = this._eventList;
            i.oncontextmenu = function(e) {
                if (t.enabled)
                    return !1
            }
            ,
            i.addEventListener("mousedown", function(e) {
                t.enabled && (et.onIE || e.preventDefault(),
                r.push(e),
                n.mouseDownTime = et.now())
            }),
            i.addEventListener("mouseup", function(e) {
                t.enabled && (e.preventDefault(),
                r.push(e),
                n.mouseDownTime = -et.now())
            }, !0),
            i.addEventListener("mousemove", function(e) {
                if (t.enabled) {
                    e.preventDefault();
                    var i = et.now();
                    if (i - n._lastMoveTimer < 10)
                        return;
                    n._lastMoveTimer = i,
                    r.push(e)
                }
            }, !0),
            i.addEventListener("mouseout", function(e) {
                t.enabled && r.push(e)
            }),
            i.addEventListener("mouseover", function(e) {
                t.enabled && r.push(e)
            }),
            i.addEventListener("touchstart", function(e) {
                t.enabled && (r.push(e),
                t._isFirstTouch || Ze.isInputting || e.preventDefault(),
                n.mouseDownTime = et.now())
            }),
            i.addEventListener("touchend", function(e) {
                t.enabled ? (t._isFirstTouch || Ze.isInputting || e.preventDefault(),
                t._isFirstTouch = !1,
                r.push(e),
                n.mouseDownTime = -et.now()) : s._curTouchID = NaN
            }, !0),
            i.addEventListener("touchmove", function(e) {
                t.enabled && (e.preventDefault(),
                r.push(e))
            }, !0),
            i.addEventListener("touchcancel", function(e) {
                t.enabled ? (e.preventDefault(),
                r.push(e)) : s._curTouchID = NaN
            }, !0),
            i.addEventListener("mousewheel", function(e) {
                t.enabled && r.push(e)
            }),
            i.addEventListener("DOMMouseScroll", function(e) {
                t.enabled && r.push(e)
            })
        }
        ,
        e.initEvent = function(t, e) {
            this._event._stoped = !1,
            this._event.nativeEvent = e || t,
            this._target = null,
            this._point.setTo(t.pageX || t.clientX, t.pageY || t.clientY),
            this._stage._canvasTransform.invertTransformPoint(this._point),
            this.mouseX = this._point.x,
            this.mouseY = this._point.y,
            this._event.touchId = t.identifier || 0,
            this._tTouchID = this._event.touchId;
            var i;
            (i = R.I._event)._stoped = !1,
            i.nativeEvent = this._event.nativeEvent,
            i.touchId = this._event.touchId
        }
        ,
        e.checkMouseWheel = function(t) {
            this._event.delta = t.wheelDelta ? .025 * t.wheelDelta : -t.detail;
            for (var e = R.I.getLastOvers(), i = 0, s = e.length; i < s; i++) {
                var n = e[i];
                n.event("mousewheel", this._event.setTo("mousewheel", n, this._target))
            }
        }
        ,
        e.onMouseMove = function(t) {
            R.I.onMouseMove(t, this._tTouchID)
        }
        ,
        e.onMouseDown = function(t) {
            if (Ze.isInputting && i.stage.focus && i.stage.focus.focus && !i.stage.focus.contains(this._target)) {
                var e = i.stage.focus._tf || i.stage.focus
                  , s = t._tf || t;
                s instanceof laya.display.Input && s.multiline == e.multiline ? e._focusOut() : e.focus = !1
            }
            R.I.onMouseDown(t, this._tTouchID, this._isLeftMouse)
        }
        ,
        e.onMouseUp = function(t) {
            R.I.onMouseUp(t, this._tTouchID, this._isLeftMouse)
        }
        ,
        e.check = function(t, e, i, s) {
            this._point.setTo(e, i),
            t.fromParentPoint(this._point),
            e = this._point.x,
            i = this._point.y;
            var n = t.scrollRect;
            if (n && (this._rect.setTo(n.x, n.y, n.width, n.height),
            !this._rect.contains(e, i)))
                return !1;
            if (!this.disableMouseEvent) {
                if (t.hitTestPrior && !t.mouseThrough && !this.hitTest(t, e, i))
                    return !1;
                for (var r = t._childs.length - 1; r > -1; r--) {
                    var a = t._childs[r];
                    if (!a.destroyed && a.mouseEnabled && a.visible && this.check(a, e, i, s))
                        return !0
                }
            }
            var o = !(!t.hitTestPrior || t.mouseThrough || this.disableMouseEvent) || this.hitTest(t, e, i);
            return o ? (this._target = t,
            s.call(this, t)) : s === this.onMouseUp && t === this._stage && (this._target = this._stage,
            s.call(this, this._target)),
            o
        }
        ,
        e.hitTest = function(t, e, i) {
            var s = !1;
            if (t.scrollRect && (e -= t.scrollRect.x,
            i -= t.scrollRect.y),
            t.hitArea instanceof laya.utils.HitArea)
                return t.hitArea.isHit(e, i);
            if (t.width > 0 && t.height > 0 || t.mouseThrough || t.hitArea)
                if (t.mouseThrough)
                    s = t.getGraphicBounds().contains(e, i);
                else {
                    var n = this._rect;
                    t.hitArea ? n = t.hitArea : n.setTo(0, 0, t.width, t.height),
                    s = n.contains(e, i)
                }
            return s
        }
        ,
        e.runEvent = function() {
            var e = this._eventList.length;
            if (e) {
                for (var i, s = 0, n = 0, r = 0; s < e; ) {
                    var a = this._eventList[s];
                    switch ("mousemove" !== a.type && (this._prePoint.x = this._prePoint.y = -1e6),
                    a.type) {
                    case "mousedown":
                        this._touchIDs[0] = this._id++,
                        t._isTouchRespond ? t._isTouchRespond = !1 : (this._isLeftMouse = 0 === a.button,
                        this.initEvent(a),
                        this.check(this._stage, this.mouseX, this.mouseY, this.onMouseDown));
                        break;
                    case "mouseup":
                        this._isLeftMouse = 0 === a.button,
                        this.initEvent(a),
                        this.check(this._stage, this.mouseX, this.mouseY, this.onMouseUp);
                        break;
                    case "mousemove":
                        Math.abs(this._prePoint.x - a.clientX) + Math.abs(this._prePoint.y - a.clientY) >= this.mouseMoveAccuracy && (this._prePoint.x = a.clientX,
                        this._prePoint.y = a.clientY,
                        this.initEvent(a),
                        this.check(this._stage, this.mouseX, this.mouseY, this.onMouseMove));
                        break;
                    case "touchstart":
                        t._isTouchRespond = !0,
                        this._isLeftMouse = !0;
                        var o = a.changedTouches;
                        for (n = 0,
                        r = o.length; n < r; n++)
                            i = o[n],
                            (t.multiTouchEnabled || isNaN(this._curTouchID)) && (this._curTouchID = i.identifier,
                            this._id % 200 == 0 && (this._touchIDs = {}),
                            this._touchIDs[i.identifier] = this._id++,
                            this.initEvent(i, a),
                            this.check(this._stage, this.mouseX, this.mouseY, this.onMouseDown));
                        break;
                    case "touchend":
                    case "touchcancel":
                        t._isTouchRespond = !0,
                        this._isLeftMouse = !0;
                        var h = a.changedTouches;
                        for (n = 0,
                        r = h.length; n < r; n++)
                            if (i = h[n],
                            t.multiTouchEnabled || i.identifier == this._curTouchID) {
                                this._curTouchID = NaN,
                                this.initEvent(i, a);
                                this.check(this._stage, this.mouseX, this.mouseY, this.onMouseUp) || this.onMouseUp(null)
                            }
                        break;
                    case "touchmove":
                        var l = a.changedTouches;
                        for (n = 0,
                        r = l.length; n < r; n++)
                            i = l[n],
                            (t.multiTouchEnabled || i.identifier == this._curTouchID) && (this.initEvent(i, a),
                            this.check(this._stage, this.mouseX, this.mouseY, this.onMouseMove));
                        break;
                    case "wheel":
                    case "mousewheel":
                    case "DOMMouseScroll":
                        this.checkMouseWheel(a);
                        break;
                    case "mouseout":
                        R.I.stageMouseOut();
                        break;
                    case "mouseover":
                        this._stage.event("mouseover", this._event.setTo("mouseover", this._stage, this._stage))
                    }
                    s++
                }
                this._eventList.length = 0
            }
        }
        ,
        t.enabled = !0,
        t.multiTouchEnabled = !0,
        t._isTouchRespond = !1,
        t._isFirstTouch = !0,
        s(t, ["instance", function() {
            return this.instance = new t
        }
        ]),
        t
    }()
      , R = function() {
        function t() {
            this.preOvers = [],
            this.preDowns = [],
            this.preRightDowns = [],
            this.enable = !0,
            this._lastClickTime = 0,
            this._event = new M
        }
        n(t, "laya.events.TouchManager");
        var e = t.prototype;
        return e._clearTempArrs = function() {
            t._oldArr.length = 0,
            t._newArr.length = 0,
            t._tEleArr.length = 0
        }
        ,
        e.getTouchFromArr = function(t, e) {
            var i = 0
              , s = 0;
            s = e.length;
            var n;
            for (i = 0; i < s; i++)
                if ((n = e[i]).id == t)
                    return n;
            return null
        }
        ,
        e.removeTouchFromArr = function(t, e) {
            var i = 0;
            for (i = e.length - 1; i >= 0; i--)
                e[i].id == t && e.splice(i, 1)
        }
        ,
        e.createTouchO = function(t, e) {
            var i;
            return i = ot.getItem("TouchData") || {},
            i.id = e,
            i.tar = t,
            i
        }
        ,
        e.onMouseDown = function(e, i, s) {
            if (void 0 === s && (s = !1),
            this.enable) {
                var n, r, a;
                n = this.getTouchFromArr(i, this.preOvers),
                a = this.getEles(e, null, t._tEleArr),
                n ? n.tar = e : (r = this.createTouchO(e, i),
                this.preOvers.push(r)),
                et.onMobile && this.sendEvents(a, "mouseover", i);
                var o;
                o = s ? this.preDowns : this.preRightDowns,
                (n = this.getTouchFromArr(i, o)) ? n.tar = e : (r = this.createTouchO(e, i),
                o.push(r)),
                this.sendEvents(a, s ? "mousedown" : "rightmousedown", i),
                this._clearTempArrs()
            }
        }
        ,
        e.sendEvents = function(t, e, i) {
            void 0 === i && (i = 0);
            var s = 0
              , n = 0;
            n = t.length,
            this._event._stoped = !1;
            var r;
            r = t[0];
            var a;
            for (s = 0; s < n; s++) {
                if ((a = t[s]).destroyed)
                    return;
                if (a.event(e, this._event.setTo(e, a, r)),
                this._event._stoped)
                    break
            }
        }
        ,
        e.getEles = function(t, e, i) {
            for (i ? i.length = 0 : i = []; t && t != e; )
                i.push(t),
                t = t.parent;
            return i
        }
        ,
        e.checkMouseOutAndOverOfMove = function(e, i, s) {
            if (void 0 === s && (s = 0),
            i != e) {
                var n, r, a = 0, o = 0;
                if (i.contains(e))
                    r = this.getEles(e, i, t._tEleArr),
                    this.sendEvents(r, "mouseover", s);
                else if (e.contains(i))
                    r = this.getEles(i, e, t._tEleArr),
                    this.sendEvents(r, "mouseout", s);
                else {
                    (r = t._tEleArr).length = 0;
                    var h;
                    h = this.getEles(i, null, t._oldArr);
                    var l;
                    l = this.getEles(e, null, t._newArr),
                    o = h.length;
                    var u = 0;
                    for (a = 0; a < o; a++) {
                        if (n = h[a],
                        (u = l.indexOf(n)) >= 0) {
                            l.splice(u, l.length - u);
                            break
                        }
                        r.push(n)
                    }
                    r.length > 0 && this.sendEvents(r, "mouseout", s),
                    l.length > 0 && this.sendEvents(l, "mouseover", s)
                }
            }
        }
        ,
        e.onMouseMove = function(e, i) {
            if (this.enable) {
                var s, n;
                (s = this.getTouchFromArr(i, this.preOvers)) ? (this.checkMouseOutAndOverOfMove(e, s.tar),
                s.tar = e,
                n = this.getEles(e, null, t._tEleArr)) : (n = this.getEles(e, null, t._tEleArr),
                this.sendEvents(n, "mouseover", i),
                this.preOvers.push(this.createTouchO(e, i))),
                this.sendEvents(n, "mousemove", i),
                this._clearTempArrs()
            }
        }
        ,
        e.getLastOvers = function() {
            return t._tEleArr.length = 0,
            this.preOvers.length > 0 && this.preOvers[0].tar ? this.getEles(this.preOvers[0].tar, null, t._tEleArr) : (t._tEleArr.push(i.stage),
            t._tEleArr)
        }
        ,
        e.stageMouseOut = function() {
            var t;
            t = this.getLastOvers(),
            this.preOvers.length = 0,
            this.sendEvents(t, "mouseout", 0)
        }
        ,
        e.onMouseUp = function(e, i, s) {
            if (void 0 === s && (s = !1),
            this.enable) {
                var n, r, a, o, h, l = 0, u = 0, c = et.onMobile;
                r = this.getEles(e, null, t._tEleArr),
                this.sendEvents(r, s ? "mouseup" : "rightmouseup", i);
                var _;
                if (_ = s ? this.preDowns : this.preRightDowns,
                n = this.getTouchFromArr(i, _)) {
                    var d = !1
                      , f = et.now();
                    if (d = f - this._lastClickTime < 300,
                    this._lastClickTime = f,
                    e == n.tar)
                        h = r;
                    else
                        for (a = this.getEles(n.tar, null, t._oldArr),
                        (h = t._newArr).length = 0,
                        u = a.length,
                        l = 0; l < u; l++)
                            o = a[l],
                            r.indexOf(o) >= 0 && h.push(o);
                    h.length > 0 && this.sendEvents(h, s ? "click" : "rightclick", i),
                    s && d && this.sendEvents(h, "doubleclick", i),
                    this.removeTouchFromArr(i, _),
                    n.tar = null,
                    ot.recover("TouchData", n)
                } else
                    ;(n = this.getTouchFromArr(i, this.preOvers)) && c && ((h = this.getEles(n.tar, null, h)) && h.length > 0 && this.sendEvents(h, "mouseout", i),
                this.removeTouchFromArr(i, this.preOvers),
                n.tar = null,
                ot.recover("TouchData", n)),
                this._clearTempArrs()
            }
        }
        ,
        t._oldArr = [],
        t._newArr = [],
        t._tEleArr = [],
        s(t, ["I", function() {
            return this.I = new t
        }
        ]),
        t
    }()
      , L = function() {
        function t() {
            this._action = null
        }
        n(t, "laya.filters.Filter");
        var e = t.prototype;
        return i.imps(e, {
            "laya.filters.IFilter": !0
        }),
        e.callNative = function(t) {}
        ,
        r(0, e, "type", function() {
            return -1
        }),
        r(0, e, "action", function() {
            return this._action
        }),
        t.BLUR = 16,
        t.COLOR = 32,
        t.GLOW = 8,
        t._filterStart = null,
        t._filterEnd = null,
        t._EndTarget = null,
        t._recycleScope = null,
        t._filter = null,
        t._useSrc = null,
        t._endSrc = null,
        t._useOut = null,
        t._endOut = null,
        t
    }()
      , P = function() {
        function t() {
            this.data = null
        }
        n(t, "laya.filters.ColorFilterAction");
        var e = t.prototype;
        return i.imps(e, {
            "laya.filters.IFilterAction": !0
        }),
        e.apply = function(t) {
            var e = t.ctx.ctx
              , i = t.ctx.ctx.canvas;
            if (0 == i.width || 0 == i.height)
                return i;
            for (var s, n = e.getImageData(0, 0, i.width, i.height), r = n.data, a = 0, o = r.length; a < o; a += 4)
                s = this.getColor(r[a], r[a + 1], r[a + 2], r[a + 3]),
                0 != r[a + 3] && (r[a] = s[0],
                r[a + 1] = s[1],
                r[a + 2] = s[2],
                r[a + 3] = s[3]);
            return e.putImageData(n, 0, 0),
            t
        }
        ,
        e.getColor = function(t, e, i, s) {
            var n = [];
            if (this.data._mat && this.data._alpha) {
                var r = this.data._mat
                  , a = this.data._alpha;
                n[0] = r[0] * t + r[1] * e + r[2] * i + r[3] * s + a[0],
                n[1] = r[4] * t + r[5] * e + r[6] * i + r[7] * s + a[1],
                n[2] = r[8] * t + r[9] * e + r[10] * i + r[11] * s + a[2],
                n[3] = r[12] * t + r[13] * e + r[14] * i + r[15] * s + a[3]
            }
            return n
        }
        ,
        t
    }()
      , F = function() {
        function t() {}
        n(t, "laya.filters.webgl.FilterActionGL");
        var e = t.prototype;
        return i.imps(e, {
            "laya.filters.IFilterActionGL": !0
        }),
        e.setValue = function(t) {}
        ,
        e.setValueMix = function(t) {}
        ,
        e.apply3d = function(t, e, i, s, n) {
            return null
        }
        ,
        e.apply = function(t) {
            return null
        }
        ,
        r(0, e, "typeMix", function() {
            return 0
        }),
        t
    }()
      , D = function() {
        function t() {}
        return n(t, "laya.maths.Arith"),
        t.formatR = function(t) {
            return t > Math.PI && (t -= 2 * Math.PI),
            t < -Math.PI && (t += 2 * Math.PI),
            t
        }
        ,
        t.isPOT = function(t, e) {
            return t > 0 && 0 == (t & t - 1) && e > 0 && 0 == (e & e - 1)
        }
        ,
        t.setMatToArray = function(t, e) {
            t.a,
            t.b,
            t.c,
            t.d,
            t.tx,
            t.ty,
            e[0] = t.a,
            e[1] = t.b,
            e[4] = t.c,
            e[5] = t.d,
            e[12] = t.tx,
            e[13] = t.ty
        }
        ,
        t
    }()
      , B = function() {
        function t() {
            this._controlPoints = [new U, new U, new U],
            this._calFun = this.getPoint2
        }
        n(t, "laya.maths.Bezier");
        var e = t.prototype;
        return e._switchPoint = function(t, e) {
            var i = this._controlPoints.shift();
            i.setTo(t, e),
            this._controlPoints.push(i)
        }
        ,
        e.getPoint2 = function(t, e) {
            var i = this._controlPoints[0]
              , s = this._controlPoints[1]
              , n = this._controlPoints[2]
              , r = Math.pow(1 - t, 2) * i.x + 2 * t * (1 - t) * s.x + Math.pow(t, 2) * n.x
              , a = Math.pow(1 - t, 2) * i.y + 2 * t * (1 - t) * s.y + Math.pow(t, 2) * n.y;
            e.push(r, a)
        }
        ,
        e.getPoint3 = function(t, e) {
            var i = this._controlPoints[0]
              , s = this._controlPoints[1]
              , n = this._controlPoints[2]
              , r = this._controlPoints[3]
              , a = Math.pow(1 - t, 3) * i.x + 3 * s.x * t * (1 - t) * (1 - t) + 3 * n.x * t * t * (1 - t) + r.x * Math.pow(t, 3)
              , o = Math.pow(1 - t, 3) * i.y + 3 * s.y * t * (1 - t) * (1 - t) + 3 * n.y * t * t * (1 - t) + r.y * Math.pow(t, 3);
            e.push(a, o)
        }
        ,
        e.insertPoints = function(t, e) {
            var i = NaN
              , s = NaN;
            for (s = 1 / (t = t > 0 ? t : 5),
            i = 0; i <= 1; i += s)
                this._calFun(i, e)
        }
        ,
        e.getBezierPoints = function(t, e, i) {
            void 0 === e && (e = 5),
            void 0 === i && (i = 2);
            var s = 0
              , n = 0;
            if ((n = t.length) < 2 * (i + 1))
                return [];
            var r;
            switch (r = [],
            i) {
            case 2:
                this._calFun = this.getPoint2;
                break;
            case 3:
                this._calFun = this.getPoint3;
                break;
            default:
                return []
            }
            for (; this._controlPoints.length <= i; )
                this._controlPoints.push(new U);
            for (s = 0; s < 2 * i; s += 2)
                this._switchPoint(t[s], t[s + 1]);
            for (s = 2 * i; s < n; s += 2)
                this._switchPoint(t[s], t[s + 1]),
                s / 2 % i == 0 && this.insertPoints(e, r);
            return r
        }
        ,
        s(t, ["I", function() {
            return this.I = new t
        }
        ]),
        t
    }()
      , N = function() {
        function t() {}
        return n(t, "laya.maths.GrahamScan"),
        t.multiply = function(t, e, i) {
            return (t.x - i.x) * (e.y - i.y) - (e.x - i.x) * (t.y - i.y)
        }
        ,
        t.dis = function(t, e) {
            return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y)
        }
        ,
        t._getPoints = function(e, i, s) {
            for (void 0 === i && (i = !1),
            t._mPointList || (t._mPointList = []); t._mPointList.length < e; )
                t._mPointList.push(new U);
            return s || (s = []),
            s.length = 0,
            i ? t.getFrom(s, t._mPointList, e) : t.getFromR(s, t._mPointList, e),
            s
        }
        ,
        t.getFrom = function(t, e, i) {
            var s = 0;
            for (s = 0; s < i; s++)
                t.push(e[s]);
            return t
        }
        ,
        t.getFromR = function(t, e, i) {
            var s = 0;
            for (s = 0; s < i; s++)
                t.push(e.pop());
            return t
        }
        ,
        t.pListToPointList = function(e, i) {
            void 0 === i && (i = !1);
            var s = 0
              , n = e.length / 2
              , r = t._getPoints(n, i, t._tempPointList);
            for (s = 0; s < n; s++)
                r[s].setTo(e[s + s], e[s + s + 1]);
            return r
        }
        ,
        t.pointListToPlist = function(e) {
            var i, s = 0, n = e.length, r = t._temPList;
            for (r.length = 0,
            s = 0; s < n; s++)
                i = e[s],
                r.push(i.x, i.y);
            return r
        }
        ,
        t.scanPList = function(e) {
            return _t.copyArray(e, t.pointListToPlist(t.scan(t.pListToPointList(e, !0))))
        }
        ,
        t.scan = function(e) {
            var i, s, n, r = 0, a = 0, o = 0, h = e.length, l = {};
            for ((s = t._temArr).length = 0,
            r = (h = e.length) - 1; r >= 0; r--)
                n = (i = e[r]).x + "_" + i.y,
                l.hasOwnProperty(n) || (l[n] = !0,
                s.push(i));
            for (h = s.length,
            _t.copyArray(e, s),
            r = 1; r < h; r++)
                (e[r].y < e[o].y || e[r].y == e[o].y && e[r].x < e[o].x) && (o = r);
            for (i = e[0],
            e[0] = e[o],
            e[o] = i,
            r = 1; r < h - 1; r++) {
                for (o = r,
                a = r + 1; a < h; a++)
                    (t.multiply(e[a], e[o], e[0]) > 0 || 0 == t.multiply(e[a], e[o], e[0]) && t.dis(e[0], e[a]) < t.dis(e[0], e[o])) && (o = a);
                i = e[r],
                e[r] = e[o],
                e[o] = i
            }
            if (s = t._temArr,
            s.length = 0,
            e.length < 3)
                return _t.copyArray(s, e);
            for (s.push(e[0], e[1], e[2]),
            r = 3; r < h; r++) {
                for (; s.length >= 2 && t.multiply(e[r], s[s.length - 1], s[s.length - 2]) >= 0; )
                    s.pop();
                e[r] && s.push(e[r])
            }
            return s
        }
        ,
        t._mPointList = null,
        t._tempPointList = [],
        t._temPList = [],
        t._temArr = [],
        t
    }()
      , O = function() {
        function t() {}
        return n(t, "laya.maths.MathUtil"),
        t.subtractVector3 = function(t, e, i) {
            i[0] = t[0] - e[0],
            i[1] = t[1] - e[1],
            i[2] = t[2] - e[2]
        }
        ,
        t.lerp = function(t, e, i) {
            return t * (1 - i) + e * i
        }
        ,
        t.scaleVector3 = function(t, e, i) {
            i[0] = t[0] * e,
            i[1] = t[1] * e,
            i[2] = t[2] * e
        }
        ,
        t.lerpVector3 = function(t, e, i, s) {
            var n = t[0]
              , r = t[1]
              , a = t[2];
            s[0] = n + i * (e[0] - n),
            s[1] = r + i * (e[1] - r),
            s[2] = a + i * (e[2] - a)
        }
        ,
        t.lerpVector4 = function(t, e, i, s) {
            var n = t[0]
              , r = t[1]
              , a = t[2]
              , o = t[3];
            s[0] = n + i * (e[0] - n),
            s[1] = r + i * (e[1] - r),
            s[2] = a + i * (e[2] - a),
            s[3] = o + i * (e[3] - o)
        }
        ,
        t.slerpQuaternionArray = function(t, e, i, s, n, r, a) {
            var o, h, l, u, c, _ = t[e + 0], d = t[e + 1], f = t[e + 2], p = t[e + 3], g = i[s + 0], m = i[s + 1], v = i[s + 2], y = i[s + 3];
            return (h = _ * g + d * m + f * v + p * y) < 0 && (h = -h,
            g = -g,
            m = -m,
            v = -v,
            y = -y),
            1 - h > 1e-6 ? (o = Math.acos(h),
            l = Math.sin(o),
            u = Math.sin((1 - n) * o) / l,
            c = Math.sin(n * o) / l) : (u = 1 - n,
            c = n),
            r[a + 0] = u * _ + c * g,
            r[a + 1] = u * d + c * m,
            r[a + 2] = u * f + c * v,
            r[a + 3] = u * p + c * y,
            r
        }
        ,
        t.getRotation = function(t, e, i, s) {
            return Math.atan2(s - e, i - t) / Math.PI * 180
        }
        ,
        t.sortBigFirst = function(t, e) {
            return t == e ? 0 : e > t ? 1 : -1
        }
        ,
        t.sortSmallFirst = function(t, e) {
            return t == e ? 0 : e > t ? -1 : 1
        }
        ,
        t.sortNumBigFirst = function(t, e) {
            return parseFloat(e) - parseFloat(t)
        }
        ,
        t.sortNumSmallFirst = function(t, e) {
            return parseFloat(t) - parseFloat(e)
        }
        ,
        t.sortByKey = function(e, i, s) {
            void 0 === i && (i = !1),
            void 0 === s && (s = !0);
            var n;
            return n = i ? s ? t.sortNumBigFirst : t.sortBigFirst : s ? t.sortNumSmallFirst : t.sortSmallFirst,
            function(t, i) {
                return n(t[e], i[e])
            }
        }
        ,
        t
    }()
      , k = function() {
        function t(t, e, i, s, n, r) {
            this.inPool = !1,
            this.bTransform = !1,
            void 0 === t && (t = 1),
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === s && (s = 1),
            void 0 === n && (n = 0),
            void 0 === r && (r = 0),
            this.a = t,
            this.b = e,
            this.c = i,
            this.d = s,
            this.tx = n,
            this.ty = r,
            this._checkTransform()
        }
        n(t, "laya.maths.Matrix");
        var e = t.prototype;
        return e.identity = function() {
            return this.a = this.d = 1,
            this.b = this.tx = this.ty = this.c = 0,
            this.bTransform = !1,
            this
        }
        ,
        e._checkTransform = function() {
            return this.bTransform = 1 !== this.a || 0 !== this.b || 0 !== this.c || 1 !== this.d
        }
        ,
        e.setTranslate = function(t, e) {
            return this.tx = t,
            this.ty = e,
            this
        }
        ,
        e.translate = function(t, e) {
            return this.tx += t,
            this.ty += e,
            this
        }
        ,
        e.scale = function(t, e) {
            this.a *= t,
            this.d *= e,
            this.c *= t,
            this.b *= e,
            this.tx *= t,
            this.ty *= e,
            this.bTransform = !0
        }
        ,
        e.rotate = function(t) {
            var e = Math.cos(t)
              , i = Math.sin(t)
              , s = this.a
              , n = this.c
              , r = this.tx;
            this.a = s * e - this.b * i,
            this.b = s * i + this.b * e,
            this.c = n * e - this.d * i,
            this.d = n * i + this.d * e,
            this.tx = r * e - this.ty * i,
            this.ty = r * i + this.ty * e,
            this.bTransform = !0
        }
        ,
        e.skew = function(t, e) {
            var i = Math.tan(t)
              , s = Math.tan(e)
              , n = this.a
              , r = this.b;
            return this.a += s * this.c,
            this.b += s * this.d,
            this.c += i * n,
            this.d += i * r,
            this
        }
        ,
        e.invertTransformPoint = function(t) {
            var e = this.a
              , i = this.b
              , s = this.c
              , n = this.d
              , r = this.tx
              , a = e * n - i * s
              , o = n / a
              , h = -i / a
              , l = -s / a
              , u = e / a
              , c = (s * this.ty - n * r) / a
              , _ = -(e * this.ty - i * r) / a;
            return t.setTo(o * t.x + l * t.y + c, h * t.x + u * t.y + _)
        }
        ,
        e.transformPoint = function(t) {
            return t.setTo(this.a * t.x + this.c * t.y + this.tx, this.b * t.x + this.d * t.y + this.ty)
        }
        ,
        e.transformPointN = function(t) {
            return t.setTo(this.a * t.x + this.c * t.y, this.b * t.x + this.d * t.y)
        }
        ,
        e.transformPointArray = function(t, e) {
            for (var i = t.length, s = 0; s < i; s += 2) {
                var n = t[s]
                  , r = t[s + 1];
                e[s] = this.a * n + this.c * r + this.tx,
                e[s + 1] = this.b * n + this.d * r + this.ty
            }
            return e
        }
        ,
        e.transformPointArrayScale = function(t, e) {
            for (var i = t.length, s = 0; s < i; s += 2) {
                var n = t[s]
                  , r = t[s + 1];
                e[s] = this.a * n + this.c * r,
                e[s + 1] = this.b * n + this.d * r
            }
            return e
        }
        ,
        e.getScaleX = function() {
            return 0 === this.b ? this.a : Math.sqrt(this.a * this.a + this.b * this.b)
        }
        ,
        e.getScaleY = function() {
            return 0 === this.c ? this.d : Math.sqrt(this.c * this.c + this.d * this.d)
        }
        ,
        e.invert = function() {
            var t = this.a
              , e = this.b
              , i = this.c
              , s = this.d
              , n = this.tx
              , r = t * s - e * i;
            return this.a = s / r,
            this.b = -e / r,
            this.c = -i / r,
            this.d = t / r,
            this.tx = (i * this.ty - s * n) / r,
            this.ty = -(t * this.ty - e * n) / r,
            this
        }
        ,
        e.setTo = function(t, e, i, s, n, r) {
            return this.a = t,
            this.b = e,
            this.c = i,
            this.d = s,
            this.tx = n,
            this.ty = r,
            this
        }
        ,
        e.concat = function(t) {
            var e = this.a
              , i = this.c
              , s = this.tx;
            return this.a = e * t.a + this.b * t.c,
            this.b = e * t.b + this.b * t.d,
            this.c = i * t.a + this.d * t.c,
            this.d = i * t.b + this.d * t.d,
            this.tx = s * t.a + this.ty * t.c + t.tx,
            this.ty = s * t.b + this.ty * t.d + t.ty,
            this
        }
        ,
        e.scaleEx = function(t, e) {
            var i = this.a
              , s = this.b
              , n = this.c
              , r = this.d;
            0 !== s || 0 !== n ? (this.a = t * i,
            this.b = t * s,
            this.c = e * n,
            this.d = e * r) : (this.a = t * i,
            this.b = 0 * r,
            this.c = 0 * i,
            this.d = e * r),
            this.bTransform = !0
        }
        ,
        e.rotateEx = function(t) {
            var e = Math.cos(t)
              , i = Math.sin(t)
              , s = this.a
              , n = this.b
              , r = this.c
              , a = this.d;
            0 !== n || 0 !== r ? (this.a = e * s + i * r,
            this.b = e * n + i * a,
            this.c = -i * s + e * r,
            this.d = -i * n + e * a) : (this.a = e * s,
            this.b = i * a,
            this.c = -i * s,
            this.d = e * a),
            this.bTransform = !0
        }
        ,
        e.clone = function() {
            var e = t.create();
            return e.a = this.a,
            e.b = this.b,
            e.c = this.c,
            e.d = this.d,
            e.tx = this.tx,
            e.ty = this.ty,
            e.bTransform = this.bTransform,
            e
        }
        ,
        e.copyTo = function(t) {
            return t.a = this.a,
            t.b = this.b,
            t.c = this.c,
            t.d = this.d,
            t.tx = this.tx,
            t.ty = this.ty,
            t.bTransform = this.bTransform,
            t
        }
        ,
        e.toString = function() {
            return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty
        }
        ,
        e.destroy = function() {
            if (!this.inPool) {
                var e = t._cache;
                this.inPool = !0,
                e._length || (e._length = 0),
                e[e._length++] = this,
                this.a = this.d = 1,
                this.b = this.c = this.tx = this.ty = 0,
                this.bTransform = !1
            }
        }
        ,
        t.mul = function(t, e, i) {
            var s = t.a
              , n = t.b
              , r = t.c
              , a = t.d
              , o = t.tx
              , h = t.ty
              , l = e.a
              , u = e.b
              , c = e.c
              , _ = e.d
              , d = e.tx
              , f = e.ty;
            return 0 !== u || 0 !== c ? (i.a = s * l + n * c,
            i.b = s * u + n * _,
            i.c = r * l + a * c,
            i.d = r * u + a * _,
            i.tx = l * o + c * h + d,
            i.ty = u * o + _ * h + f) : (i.a = s * l,
            i.b = n * _,
            i.c = r * l,
            i.d = a * _,
            i.tx = l * o + d,
            i.ty = _ * h + f),
            i
        }
        ,
        t.mul16 = function(t, e, i) {
            var s = t.a
              , n = t.b
              , r = t.c
              , a = t.d
              , o = t.tx
              , h = t.ty
              , l = e.a
              , u = e.b
              , c = e.c
              , _ = e.d
              , d = e.tx
              , f = e.ty;
            return 0 !== u || 0 !== c ? (i[0] = s * l + n * c,
            i[1] = s * u + n * _,
            i[4] = r * l + a * c,
            i[5] = r * u + a * _,
            i[12] = l * o + c * h + d,
            i[13] = u * o + _ * h + f) : (i[0] = s * l,
            i[1] = n * _,
            i[4] = r * l,
            i[5] = a * _,
            i[12] = l * o + d,
            i[13] = _ * h + f),
            i
        }
        ,
        t.mulPre = function(t, e, i, s, n, r, a, o) {
            var h = t.a
              , l = t.b
              , u = t.c
              , c = t.d
              , _ = t.tx
              , d = t.ty;
            return 0 !== i || 0 !== s ? (o.a = h * e + l * s,
            o.b = h * i + l * n,
            o.c = u * e + c * s,
            o.d = u * i + c * n,
            o.tx = e * _ + s * d + r,
            o.ty = i * _ + n * d + a) : (o.a = h * e,
            o.b = l * n,
            o.c = u * e,
            o.d = c * n,
            o.tx = e * _ + r,
            o.ty = n * d + a),
            o
        }
        ,
        t.mulPos = function(t, e, i, s, n, r, a, o) {
            var h = t.a
              , l = t.b
              , u = t.c
              , c = t.d
              , _ = t.tx
              , d = t.ty;
            return 0 !== l || 0 !== u ? (o.a = e * h + i * u,
            o.b = e * l + i * c,
            o.c = s * h + n * u,
            o.d = s * l + n * c,
            o.tx = h * r + u * a + _,
            o.ty = l * r + c * a + d) : (o.a = e * h,
            o.b = i * c,
            o.c = s * h,
            o.d = n * c,
            o.tx = h * r + _,
            o.ty = c * a + d),
            o
        }
        ,
        t.preMul = function(t, e, i) {
            var s = t.a
              , n = t.b
              , r = t.c
              , a = t.d
              , o = e.a
              , h = e.b
              , l = e.c
              , u = e.d
              , c = e.tx
              , _ = e.ty;
            return i.a = o * s,
            i.b = i.c = 0,
            i.d = u * a,
            i.tx = c * s + t.tx,
            i.ty = _ * a + t.ty,
            0 === h && 0 === l && 0 === n && 0 === r || (i.a += h * r,
            i.d += l * n,
            i.b += o * n + h * a,
            i.c += l * s + u * r,
            i.tx += _ * r,
            i.ty += c * n),
            i
        }
        ,
        t.preMulXY = function(t, e, i, s) {
            var n = t.a
              , r = t.b
              , a = t.c
              , o = t.d;
            return s.a = n,
            s.b = r,
            s.c = a,
            s.d = o,
            s.tx = e * n + t.tx + i * a,
            s.ty = i * o + t.ty + e * r,
            s
        }
        ,
        t.create = function() {
            var e = t._cache
              , i = e._length ? e[--e._length] : new t;
            return i.inPool = !1,
            i
        }
        ,
        t.EMPTY = new t,
        t.TEMP = new t,
        t._cache = [],
        t
    }()
      , U = function() {
        function t(t, e) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            this.x = t,
            this.y = e
        }
        n(t, "laya.maths.Point");
        var e = t.prototype;
        return e.setTo = function(t, e) {
            return this.x = t,
            this.y = e,
            this
        }
        ,
        e.distance = function(t, e) {
            return Math.sqrt((this.x - t) * (this.x - t) + (this.y - e) * (this.y - e))
        }
        ,
        e.toString = function() {
            return this.x + "," + this.y
        }
        ,
        e.normalize = function() {
            var t = Math.sqrt(this.x * this.x + this.y * this.y);
            if (t > 0) {
                var e = 1 / t;
                this.x *= e,
                this.y *= e
            }
        }
        ,
        t.TEMP = new t,
        t.EMPTY = new t,
        t
    }()
      , V = function() {
        function t(t, e, i, s) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === s && (s = 0),
            this.x = t,
            this.y = e,
            this.width = i,
            this.height = s
        }
        n(t, "laya.maths.Rectangle");
        var e = t.prototype;
        return e.setTo = function(t, e, i, s) {
            return this.x = t,
            this.y = e,
            this.width = i,
            this.height = s,
            this
        }
        ,
        e.copyFrom = function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.width = t.width,
            this.height = t.height,
            this
        }
        ,
        e.contains = function(t, e) {
            return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.right && e >= this.y && e < this.bottom)
        }
        ,
        e.intersects = function(t) {
            return !(t.x > this.x + this.width || t.x + t.width < this.x || t.y > this.y + this.height || t.y + t.height < this.y)
        }
        ,
        e.intersection = function(e, i) {
            return this.intersects(e) ? (i || (i = new t),
            i.x = Math.max(this.x, e.x),
            i.y = Math.max(this.y, e.y),
            i.width = Math.min(this.right, e.right) - i.x,
            i.height = Math.min(this.bottom, e.bottom) - i.y,
            i) : null
        }
        ,
        e.union = function(e, i) {
            return i || (i = new t),
            this.clone(i),
            e.width <= 0 || e.height <= 0 ? i : (i.addPoint(e.x, e.y),
            i.addPoint(e.right, e.bottom),
            this)
        }
        ,
        e.clone = function(e) {
            return e || (e = new t),
            e.x = this.x,
            e.y = this.y,
            e.width = this.width,
            e.height = this.height,
            e
        }
        ,
        e.toString = function() {
            return this.x + "," + this.y + "," + this.width + "," + this.height
        }
        ,
        e.equals = function(t) {
            return !(!t || t.x !== this.x || t.y !== this.y || t.width !== this.width || t.height !== this.height)
        }
        ,
        e.addPoint = function(t, e) {
            return this.x > t && (this.width += this.x - t,
            this.x = t),
            this.y > e && (this.height += this.y - e,
            this.y = e),
            this.width < t - this.x && (this.width = t - this.x),
            this.height < e - this.y && (this.height = e - this.y),
            this
        }
        ,
        e._getBoundPoints = function() {
            var e = t._temB;
            return e.length = 0,
            0 == this.width || 0 == this.height ? e : (e.push(this.x, this.y, this.x + this.width, this.y, this.x, this.y + this.height, this.x + this.width, this.y + this.height),
            e)
        }
        ,
        e.isEmpty = function() {
            return this.width <= 0 || this.height <= 0
        }
        ,
        r(0, e, "right", function() {
            return this.x + this.width
        }),
        r(0, e, "bottom", function() {
            return this.y + this.height
        }),
        t._getBoundPointS = function(e, i, s, n) {
            var r = t._temA;
            return r.length = 0,
            0 == s || 0 == n ? r : (r.push(e, i, e + s, i, e, i + n, e + s, i + n),
            r)
        }
        ,
        t._getWrapRec = function(e, i) {
            if (!e || e.length < 1)
                return i ? i.setTo(0, 0, 0, 0) : t.TEMP.setTo(0, 0, 0, 0);
            i = i || new t;
            var s, n, r, a, o, h = e.length, l = U.TEMP;
            for (r = o = -(n = a = 99999),
            s = 0; s < h; s += 2)
                l.x = e[s],
                l.y = e[s + 1],
                n = n < l.x ? n : l.x,
                a = a < l.y ? a : l.y,
                r = r > l.x ? r : l.x,
                o = o > l.y ? o : l.y;
            return i.setTo(n, a, r - n, o - a)
        }
        ,
        t.EMPTY = new t,
        t.TEMP = new t,
        t._temB = [],
        t._temA = [],
        t
    }()
      , G = function() {
        function t() {}
        return n(t, "laya.media.SoundManager"),
        r(1, t, "useAudioMusic", function() {
            return t._useAudioMusic
        }, function(e) {
            t._useAudioMusic = e,
            t._musicClass = e ? ie : null
        }),
        r(1, t, "autoStopMusic", function() {
            return t._autoStopMusic
        }, function(e) {
            i.stage.off("blur", null, t._stageOnBlur),
            i.stage.off("focus", null, t._stageOnFocus),
            i.stage.off("visibilitychange", null, t._visibilityChange),
            t._autoStopMusic = e,
            e && (i.stage.on("blur", null, t._stageOnBlur),
            i.stage.on("focus", null, t._stageOnFocus),
            i.stage.on("visibilitychange", null, t._visibilityChange))
        }),
        r(1, t, "muted", function() {
            return t._muted
        }, function(e) {
            e != t._muted && (e && t.stopAllSound(),
            t.musicMuted = e,
            t._muted = e)
        }),
        r(1, t, "musicMuted", function() {
            return t._musicMuted
        }, function(e) {
            e != t._musicMuted && (e ? (t._tMusic && t._musicChannel && !t._musicChannel.isStopped ? t._musicChannel.pause() : t._musicChannel = null,
            t._musicMuted = e) : (t._musicMuted = e,
            t._tMusic && t._musicChannel && t._musicChannel.resume()))
        }),
        r(1, t, "soundMuted", function() {
            return t._soundMuted
        }, function(e) {
            t._soundMuted = e
        }),
        t.addChannel = function(e) {
            t._channels.indexOf(e) >= 0 || t._channels.push(e)
        }
        ,
        t.removeChannel = function(e) {
            var i = 0;
            for (i = t._channels.length - 1; i >= 0; i--)
                t._channels[i] == e && t._channels.splice(i, 1)
        }
        ,
        t.disposeSoundIfNotUsed = function(e) {
            var i = 0;
            for (i = t._channels.length - 1; i >= 0; i--)
                if (t._channels[i].url == e)
                    return;
            t.destroySound(e)
        }
        ,
        t._visibilityChange = function() {
            i.stage.isVisibility ? t._stageOnFocus() : t._stageOnBlur()
        }
        ,
        t._stageOnBlur = function() {
            t._isActive = !1,
            t._musicChannel && (t._musicChannel.isStopped || (t._blurPaused = !0,
            t._musicChannel.pause())),
            t.stopAllSound(),
            i.stage.once("mousedown", null, t._stageOnFocus)
        }
        ,
        t._recoverWebAudio = function() {
            re.ctx && "running" != re.ctx.state && re.ctx.resume && re.ctx.resume()
        }
        ,
        t._stageOnFocus = function() {
            t._isActive = !0,
            t._recoverWebAudio(),
            i.stage.off("mousedown", null, t._stageOnFocus),
            t._blurPaused && t._musicChannel && t._musicChannel.isStopped && (t._blurPaused = !1,
            t._musicChannel.resume())
        }
        ,
        t.playSound = function(e, s, n, r, a) {
            if (void 0 === s && (s = 1),
            void 0 === a && (a = 0),
            !t._isActive || !e)
                return null;
            if (t._muted)
                return null;
            if (t._recoverWebAudio(),
            (e = H.formatURL(e)) == t._tMusic) {
                if (t._musicMuted)
                    return null
            } else {
                if (X.isConchApp) {
                    var o = _t.getFileExtension(e);
                    if ("wav" != o && "ogg" != o)
                        return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."),
                        null
                }
                if (t._soundMuted)
                    return null
            }
            var h;
            et.onMiniGame || (h = i.loader.getRes(e)),
            r || (r = t._soundClass),
            h || ((h = new r).load(e),
            oe.cacheRes(e, h));
            var l;
            return (l = h.play(a, s)) ? (l.url = e,
            l.volume = e == t._tMusic ? t.musicVolume : t.soundVolume,
            l.completeHandler = n,
            l) : null
        }
        ,
        t.destroySound = function(t) {
            var e = i.loader.getRes(t);
            e && (oe.clearRes(t),
            e.dispose())
        }
        ,
        t.playMusic = function(e, i, s, n) {
            return void 0 === i && (i = 0),
            void 0 === n && (n = 0),
            e = H.formatURL(e),
            t._tMusic = e,
            t._musicChannel && t._musicChannel.stop(),
            t._musicChannel = t.playSound(e, i, s, t._musicClass, n)
        }
        ,
        t.stopSound = function(e) {
            e = H.formatURL(e);
            var i, s = 0;
            for (s = t._channels.length - 1; s >= 0; s--)
                (i = t._channels[s]).url == e && i.stop()
        }
        ,
        t.stopAll = function() {
            t._tMusic = null;
            var e = 0;
            for (e = t._channels.length - 1; e >= 0; e--)
                t._channels[e].stop()
        }
        ,
        t.stopAllSound = function() {
            var e, i = 0;
            for (i = t._channels.length - 1; i >= 0; i--)
                (e = t._channels[i]).url != t._tMusic && e.stop()
        }
        ,
        t.stopMusic = function() {
            t._musicChannel && t._musicChannel.stop(),
            t._tMusic = null
        }
        ,
        t.setSoundVolume = function(e, i) {
            if (i)
                i = H.formatURL(i),
                t._setVolume(i, e);
            else {
                t.soundVolume = e;
                var s, n = 0;
                for (n = t._channels.length - 1; n >= 0; n--)
                    (s = t._channels[n]).url != t._tMusic && (s.volume = e)
            }
        }
        ,
        t.setMusicVolume = function(e) {
            t.musicVolume = e,
            t._setVolume(t._tMusic, e)
        }
        ,
        t._setVolume = function(e, i) {
            e = H.formatURL(e);
            var s, n = 0;
            for (n = t._channels.length - 1; n >= 0; n--)
                (s = t._channels[n]).url == e && (s.volume = i)
        }
        ,
        t.musicVolume = 1,
        t.soundVolume = 1,
        t.playbackRate = 1,
        t._useAudioMusic = !0,
        t._muted = !1,
        t._soundMuted = !1,
        t._musicMuted = !1,
        t._tMusic = null,
        t._musicChannel = null,
        t._channels = [],
        t._autoStopMusic = !1,
        t._blurPaused = !1,
        t._isActive = !0,
        t._soundClass = null,
        t._musicClass = null,
        t.autoReleaseSound = !0,
        t
    }()
      , W = function() {
        function e() {}
        var i;
        return n(e, "laya.net.LocalStorage"),
        e.__init__ = function() {
            e._baseClass || (e._baseClass = i,
            i.init()),
            e.items = e._baseClass.items,
            e.support = e._baseClass.support
        }
        ,
        e.setItem = function(t, i) {
            e._baseClass.setItem(t, i)
        }
        ,
        e.getItem = function(t) {
            return e._baseClass.getItem(t)
        }
        ,
        e.setJSON = function(t, i) {
            e._baseClass.setJSON(t, i)
        }
        ,
        e.getJSON = function(t) {
            return e._baseClass.getJSON(t)
        }
        ,
        e.removeItem = function(t) {
            e._baseClass.removeItem(t)
        }
        ,
        e.clear = function() {
            e._baseClass.clear()
        }
        ,
        e._baseClass = null,
        e.items = null,
        e.support = !1,
        e.__init$ = function() {
            i = function() {
                function e() {}
                return n(e, ""),
                e.init = function() {
                    try {
                        e.items = t.localStorage,
                        e.setItem("laya", "1"),
                        e.removeItem("laya"),
                        e.support = !0
                    } catch (t) {}
                    e.support || console.log("LocalStorage is not supprot or browser is private mode.")
                }
                ,
                e.setItem = function(t, i) {
                    try {
                        e.support && e.items.setItem(t, i)
                    } catch (t) {
                        console.warn("set localStorage failed", t)
                    }
                }
                ,
                e.getItem = function(t) {
                    return e.support ? e.items.getItem(t) : null
                }
                ,
                e.setJSON = function(t, i) {
                    try {
                        e.support && e.items.setItem(t, JSON.stringify(i))
                    } catch (t) {
                        console.warn("set localStorage failed", t)
                    }
                }
                ,
                e.getJSON = function(t) {
                    return JSON.parse(e.support ? e.items.getItem(t) : null)
                }
                ,
                e.removeItem = function(t) {
                    e.support && e.items.removeItem(t)
                }
                ,
                e.clear = function() {
                    e.support && e.items.clear()
                }
                ,
                e.items = null,
                e.support = !1,
                e
            }()
        }
        ,
        e
    }()
      , z = function() {
        function t() {
            this.fontName = null,
            this.complete = null,
            this.err = null,
            this._fontTxt = null,
            this._url = null,
            this._div = null,
            this._txtWidth = NaN,
            this._http = null
        }
        n(t, "laya.net.TTFLoader");
        var e = t.prototype;
        return e.load = function(t) {
            this._url = t;
            var e = t.split(".ttf")[0].split("/");
            this.fontName = e[e.length - 1],
            et.window.conch ? this._loadConch() : et.window.FontFace ? this._loadWithFontFace() : this._loadWithCSS()
        }
        ,
        e._loadConch = function() {
            this._http = new ae,
            this._http.on("error", this, this._onErr),
            this._http.on("complete", this, this._onHttpLoaded),
            this._http.send(this._url, null, "get", "arraybuffer")
        }
        ,
        e._onHttpLoaded = function(t) {
            et.window.conch.setFontFaceFromBuffer(this.fontName, t),
            this._clearHttp(),
            this._complete()
        }
        ,
        e._clearHttp = function() {
            this._http && (this._http.off("error", this, this._onErr),
            this._http.off("complete", this, this._onHttpLoaded),
            this._http = null)
        }
        ,
        e._onErr = function() {
            this._clearHttp(),
            this.err && (this.err.runWith("fail:" + this._url),
            this.err = null)
        }
        ,
        e._complete = function() {
            i.timer.clear(this, this._complete),
            i.timer.clear(this, this._checkComplete),
            this._div && this._div.parentNode && (this._div.parentNode.removeChild(this._div),
            this._div = null),
            this.complete && (this.complete.runWith(this),
            this.complete = null)
        }
        ,
        e._checkComplete = function() {
            o.measureText("LayaTTFFont", this._fontTxt).width != this._txtWidth && this._complete()
        }
        ,
        e._loadWithFontFace = function() {
            var t = new et.window.FontFace(this.fontName,"url('" + this._url + "')");
            et.window.document.fonts.add(t);
            var e = this;
            t.loaded.then(function() {
                e._complete()
            }),
            t.load()
        }
        ,
        e._createDiv = function() {
            this._div = et.createElement("div"),
            this._div.innerHTML = "laya";
            var t = this._div.style;
            t.fontFamily = this.fontName,
            t.position = "absolute",
            t.left = "-100px",
            t.top = "-100px",
            et.document.body.appendChild(this._div)
        }
        ,
        e._loadWithCSS = function() {
            var t = this
              , e = et.createElement("style");
            e.type = "text/css",
            et.document.body.appendChild(e),
            e.textContent = "@font-face { font-family:'" + this.fontName + "'; src:url('" + this._url + "');}",
            this._fontTxt = "40px " + this.fontName,
            this._txtWidth = o.measureText("LayaTTFFont", this._fontTxt).width;
            var s = this;
            e.onload = function() {
                i.timer.once(1e4, s, t._complete)
            }
            ,
            i.timer.loop(20, this, this._checkComplete),
            this._createDiv()
        }
        ,
        t._testString = "LayaTTFFont",
        t
    }()
      , H = function() {
        function t(e) {
            this._url = null,
            this._path = null,
            this._url = t.formatURL(e),
            this._path = t.getPath(e)
        }
        n(t, "laya.net.URL");
        var e = t.prototype;
        return r(0, e, "path", function() {
            return this._path
        }),
        r(0, e, "url", function() {
            return this._url
        }),
        t.formatURL = function(e, i) {
            if (!e)
                return "null path";
            if (e.indexOf(":") > 0)
                return e;
            null != t.customFormat && (e = t.customFormat(e, i));
            var s = e.charAt(0);
            if ("." === s)
                return t.formatRelativePath((i || t.basePath) + e);
            if ("~" === s)
                return t.rootPath + e.substring(1);
            if ("d" === s) {
                if (0 === e.indexOf("data:image"))
                    return e
            } else if ("/" === s)
                return e;
            return (i || t.basePath) + e
        }
        ,
        t.formatRelativePath = function(t) {
            for (var e = t.split("/"), i = 0, s = e.length; i < s; i++)
                ".." == e[i] && (e.splice(i - 1, 2),
                i -= 2);
            return e.join("/")
        }
        ,
        t.isAbsolute = function(t) {
            return t.indexOf(":") > 0 || "/" == t.charAt(0)
        }
        ,
        t.getPath = function(t) {
            var e = t.lastIndexOf("/");
            return e > 0 ? t.substr(0, e + 1) : ""
        }
        ,
        t.getFileName = function(t) {
            var e = t.lastIndexOf("/");
            return e > 0 ? t.substr(e + 1) : t
        }
        ,
        t.version = {},
        t.basePath = "",
        t.rootPath = "",
        t.customFormat = function(e) {
            var i = t.version[e];
            return !X.isConchApp && i && (e += "?v=" + i),
            e
        }
        ,
        t
    }()
      , Y = function() {
        function t() {}
        return n(t, "laya.webgl.shader.ShaderValue"),
        t
    }()
      , X = function() {
        function e(t, s) {
            function n() {
                i.stage._loop(),
                et.window.requestAnimationFrame(n)
            }
            this._timeId = 0;
            var r = e._mainCanvas.source.style;
            r.position = "absolute",
            r.top = r.left = "0px",
            r.background = "#000000",
            e._mainCanvas.source.id = "layaCanvas";
            var a = laya.renders.Render.isWebGL;
            e._mainCanvas.source.width = t,
            e._mainCanvas.source.height = s,
            a && e.WebGL.init(e._mainCanvas, t, s),
            et.container.appendChild(e._mainCanvas.source),
            (e._context = new $(t,s,a ? null : e._mainCanvas)).ctx.setIsMainContext(),
            et.window.requestAnimationFrame(n),
            i.stage.on("visibilitychange", this, this._onVisibilitychange)
        }
        n(e, "laya.renders.Render");
        var s = e.prototype;
        return s._onVisibilitychange = function() {
            i.stage.isVisibility ? 0 != this._timeId && et.window.clearInterval(this._timeId) : this._timeId = et.window.setInterval(this._enterFrame, 1e3)
        }
        ,
        s._enterFrame = function(t) {
            i.stage._loop()
        }
        ,
        r(1, e, "context", function() {
            return e._context
        }),
        r(1, e, "canvas", function() {
            return e._mainCanvas.source
        }),
        e._context = null,
        e._mainCanvas = null,
        e.WebGL = null,
        e.isConchNode = !1,
        e.isConchApp = !1,
        e.isConchWebGL = !1,
        e.isWebGL = !1,
        e.is3DMode = !1,
        e.optimizeTextureMemory = function(t, e) {
            return !0
        }
        ,
        e.__init$ = function() {
            t.ConchRenderType = t.ConchRenderType || 1,
            t.ConchRenderType |= t.conch ? 4 : 0,
            e.isConchNode = 5 == (5 & t.ConchRenderType),
            e.isConchApp = 4 == (4 & t.ConchRenderType),
            e.isConchWebGL = 6 == t.ConchRenderType
        }
        ,
        e
    }()
      , $ = function() {
        function t(e, i, s) {
            this.x = 0,
            this.y = 0,
            this._drawTexture = function(t, e, i) {
                i[0].loaded && this.ctx.drawTexture(i[0], i[1], i[2], i[3], i[4], t, e)
            }
            ,
            this._fillTexture = function(t, e, i) {
                i[0].loaded && this.ctx.fillTexture(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5], i[6], i[7])
            }
            ,
            this._drawTextureWithTransform = function(t, e, i) {
                i[0].loaded && this.ctx.drawTextureWithTransform(i[0], i[1], i[2], i[3], i[4], i[5], t, e, i[6])
            }
            ,
            this._fillQuadrangle = function(t, e, i) {
                this.ctx.fillQuadrangle(i[0], i[1], i[2], i[3], i[4])
            }
            ,
            this._drawRect = function(t, e, i) {
                var s = this.ctx;
                null != i[4] && (s.fillStyle = i[4],
                s.fillRect(t + i[0], e + i[1], i[2], i[3], null)),
                null != i[5] && (s.strokeStyle = i[5],
                s.lineWidth = i[6],
                s.strokeRect(t + i[0], e + i[1], i[2], i[3], i[6]))
            }
            ,
            this._drawPie = function(t, e, i) {
                var s = this.ctx;
                X.isWebGL && s.setPathId(i[8]),
                s.beginPath(),
                X.isWebGL ? (s.movePath(i[0] + t, i[1] + e),
                s.moveTo(0, 0)) : s.moveTo(t + i[0], e + i[1]),
                s.arc(t + i[0], e + i[1], i[2], i[3], i[4]),
                s.closePath(),
                this._fillAndStroke(i[5], i[6], i[7], !0)
            }
            ,
            this._clipRect = function(t, e, i) {
                this.ctx.clipRect(t + i[0], e + i[1], i[2], i[3])
            }
            ,
            this._fillRect = function(t, e, i) {
                this.ctx.fillRect(t + i[0], e + i[1], i[2], i[3], i[4])
            }
            ,
            this._drawCircle = function(e, i, s) {
                var n = this.ctx;
                X.isWebGL && n.setPathId(s[6]),
                ht.drawCall++,
                n.beginPath(),
                X.isWebGL && n.movePath(s[0] + e, s[1] + i),
                n.arc(s[0] + e, s[1] + i, s[2], 0, t.PI2),
                n.closePath(),
                this._fillAndStroke(s[3], s[4], s[5], !0)
            }
            ,
            this._fillCircle = function(e, i, s) {
                ht.drawCall++;
                var n = this.ctx;
                n.beginPath(),
                n.fillStyle = s[3],
                n.arc(s[0] + e, s[1] + i, s[2], 0, t.PI2),
                n.fill()
            }
            ,
            this._setShader = function(t, e, i) {
                this.ctx.setShader(i[0])
            }
            ,
            this._drawLine = function(t, e, i) {
                var s = this.ctx;
                X.isWebGL && s.setPathId(i[6]),
                s.beginPath(),
                s.strokeStyle = i[4],
                s.lineWidth = i[5],
                X.isWebGL ? (s.movePath(t, e),
                s.moveTo(i[0], i[1]),
                s.lineTo(i[2], i[3])) : (s.moveTo(t + i[0], e + i[1]),
                s.lineTo(t + i[2], e + i[3])),
                s.stroke()
            }
            ,
            this._drawLines = function(t, e, i) {
                var s = this.ctx;
                X.isWebGL && s.setPathId(i[5]),
                s.beginPath(),
                t += i[0],
                e += i[1],
                X.isWebGL && s.movePath(t, e),
                s.strokeStyle = i[3],
                s.lineWidth = i[4];
                var n = i[2]
                  , r = 2
                  , a = n.length;
                if (X.isWebGL)
                    for (s.moveTo(n[0], n[1]); r < a; )
                        s.lineTo(n[r++], n[r++]);
                else
                    for (s.moveTo(t + n[0], e + n[1]); r < a; )
                        s.lineTo(t + n[r++], e + n[r++]);
                s.stroke()
            }
            ,
            this._drawLinesWebGL = function(t, e, i) {
                this.ctx.drawLines(t + this.x + i[0], e + this.y + i[1], i[2], i[3], i[4])
            }
            ,
            this._drawCurves = function(t, e, i) {
                this.ctx.drawCurves(t, e, i)
            }
            ,
            this._draw = function(t, e, i) {
                i[0].call(null, this, t, e)
            }
            ,
            this._transformByMatrix = function(t, e, i) {
                this.ctx.transformByMatrix(i[0])
            }
            ,
            this._setTransform = function(t, e, i) {
                this.ctx.setTransform(i[0], i[1], i[2], i[3], i[4], i[5])
            }
            ,
            this._setTransformByMatrix = function(t, e, i) {
                this.ctx.setTransformByMatrix(i[0])
            }
            ,
            this._save = function(t, e, i) {
                this.ctx.save()
            }
            ,
            this._restore = function(t, e, i) {
                this.ctx.restore()
            }
            ,
            this._translate = function(t, e, i) {
                this.ctx.translate(i[0], i[1])
            }
            ,
            this._transform = function(t, e, i) {
                this.ctx.translate(i[1] + t, i[2] + e);
                var s = i[0];
                this.ctx.transform(s.a, s.b, s.c, s.d, s.tx, s.ty),
                this.ctx.translate(-t - i[1], -e - i[2])
            }
            ,
            this._rotate = function(t, e, i) {
                this.ctx.translate(i[1] + t, i[2] + e),
                this.ctx.rotate(i[0]),
                this.ctx.translate(-t - i[1], -e - i[2])
            }
            ,
            this._scale = function(t, e, i) {
                this.ctx.translate(i[2] + t, i[3] + e),
                this.ctx.scale(i[0], i[1]),
                this.ctx.translate(-t - i[2], -e - i[3])
            }
            ,
            this._alpha = function(t, e, i) {
                this.ctx.globalAlpha *= i[0]
            }
            ,
            this._setAlpha = function(t, e, i) {
                this.ctx.globalAlpha = i[0]
            }
            ,
            this._fillText = function(t, e, i) {
                this.ctx.fillText(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5])
            }
            ,
            this._strokeText = function(t, e, i) {
                this.ctx.strokeText(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5], i[6])
            }
            ,
            this._fillBorderText = function(t, e, i) {
                this.ctx.fillBorderText(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5], i[6], i[7])
            }
            ,
            this._blendMode = function(t, e, i) {
                this.ctx.globalCompositeOperation = i[0]
            }
            ,
            this._beginClip = function(t, e, i) {
                this.ctx.beginClip && this.ctx.beginClip(t + i[0], e + i[1], i[2], i[3])
            }
            ,
            this._setIBVB = function(t, e, i) {
                this.ctx.setIBVB(i[0] + t, i[1] + e, i[2], i[3], i[4], i[5], i[6], i[7])
            }
            ,
            this._fillTrangles = function(t, e, i) {
                this.ctx.fillTrangles(i[0], i[1] + t, i[2] + e, i[3], i[4])
            }
            ,
            this._drawPath = function(t, e, i) {
                var s = this.ctx;
                X.isWebGL && s.setPathId(-1),
                s.beginPath(),
                t += i[0],
                e += i[1],
                X.isWebGL && s.movePath(t, e);
                for (var n = i[2], r = 0, a = n.length; r < a; r++) {
                    var o = n[r];
                    switch (o[0]) {
                    case "moveTo":
                        X.isWebGL ? s.moveTo(o[1], o[2]) : s.moveTo(t + o[1], e + o[2]);
                        break;
                    case "lineTo":
                        X.isWebGL ? s.lineTo(o[1], o[2]) : s.lineTo(t + o[1], e + o[2]);
                        break;
                    case "arcTo":
                        X.isWebGL ? s.arcTo(o[1], o[2], o[3], o[4], o[5]) : s.arcTo(t + o[1], e + o[2], t + o[3], e + o[4], o[5]);
                        break;
                    case "closePath":
                        s.closePath()
                    }
                }
                var h = i[3];
                null != h && (s.fillStyle = h.fillStyle,
                s.fill());
                var l = i[4];
                null != l && (s.strokeStyle = l.strokeStyle,
                s.lineWidth = l.lineWidth || 1,
                s.lineJoin = l.lineJoin,
                s.lineCap = l.lineCap,
                s.miterLimit = l.miterLimit,
                s.stroke())
            }
            ,
            this.drawPoly = function(t, e, i) {
                this.ctx.drawPoly(t + this.x + i[0], e + this.y + i[1], i[2], i[3], i[4], i[5], i[6])
            }
            ,
            this._drawPoly = function(t, e, i) {
                var s = this.ctx
                  , n = i[2]
                  , r = 2
                  , a = n.length;
                if (X.isWebGL)
                    for (s.setPathId(i[6]),
                    s.beginPath(),
                    t += i[0],
                    e += i[1],
                    s.movePath(t, e),
                    s.moveTo(n[0], n[1]); r < a; )
                        s.lineTo(n[r++], n[r++]);
                else
                    for (s.beginPath(),
                    t += i[0],
                    e += i[1],
                    s.moveTo(t + n[0], e + n[1]); r < a; )
                        s.lineTo(t + n[r++], e + n[r++]);
                s.closePath(),
                this._fillAndStroke(i[3], i[4], i[5], i[7])
            }
            ,
            this._drawSkin = function(t, e, i) {
                var s = i[0];
                if (s) {
                    var n = this.ctx;
                    s.render(n, t, e)
                }
            }
            ,
            this._drawParticle = function(t, e, i) {
                this.ctx.drawParticle(t + this.x, e + this.y, i[0])
            }
            ,
            this._setFilters = function(t, e, i) {
                this.ctx.setFilters(i)
            }
            ,
            s ? this.ctx = s.getContext("2d") : (s = He.create("3D"),
            this.ctx = o.createWebGLContext2D(s),
            s._setContext(this.ctx)),
            s.size(e, i),
            this.canvas = s
        }
        n(t, "laya.renders.RenderContext");
        var e = t.prototype;
        return e.destroy = function() {
            this.canvas && (this.canvas.destroy(),
            this.canvas = null,
            this.ctx = null),
            this.ctx && (this.ctx.destroy(),
            this.ctx = null)
        }
        ,
        e.drawTexture = function(t, e, i, s, n) {
            t.loaded && this.ctx.drawTexture(t, e, i, s, n, this.x, this.y)
        }
        ,
        e._drawTextures = function(t, e, i) {
            i[0].loaded && this.ctx.drawTextures(i[0], i[1], t + this.x, e + this.y)
        }
        ,
        e.drawTextureWithTransform = function(t, e, i, s, n, r, a) {
            t.loaded && this.ctx.drawTextureWithTransform(t, e, i, s, n, r, this.x, this.y, a)
        }
        ,
        e.fillQuadrangle = function(t, e, i, s, n) {
            this.ctx.fillQuadrangle(t, e, i, s, n)
        }
        ,
        e.drawCanvas = function(t, e, i, s, n) {
            this.ctx.drawCanvas(t, e + this.x, i + this.y, s, n)
        }
        ,
        e.drawRect = function(t, e, i, s, n, r) {
            void 0 === r && (r = 1);
            var a = this.ctx;
            a.strokeStyle = n,
            a.lineWidth = r,
            a.strokeRect(t + this.x, e + this.y, i, s, r)
        }
        ,
        e._fillAndStroke = function(t, e, i, s) {
            void 0 === s && (s = !1);
            var n = this.ctx;
            null != t && (n.fillStyle = t,
            X.isWebGL ? n.fill(s) : n.fill()),
            null != e && i > 0 && (n.strokeStyle = e,
            n.lineWidth = i,
            n.stroke())
        }
        ,
        e.clipRect = function(t, e, i, s) {
            this.ctx.clipRect(t + this.x, e + this.y, i, s)
        }
        ,
        e.fillRect = function(t, e, i, s, n) {
            this.ctx.fillRect(t + this.x, e + this.y, i, s, n)
        }
        ,
        e.drawCircle = function(e, i, s, n, r) {
            void 0 === r && (r = 1),
            ht.drawCall++;
            var a = this.ctx;
            a.beginPath(),
            a.strokeStyle = n,
            a.lineWidth = r,
            a.arc(e + this.x, i + this.y, s, 0, t.PI2),
            a.stroke()
        }
        ,
        e.drawTriangles = function(t, e, i) {
            if (X.isWebGL)
                this.ctx.drawTriangles(i[0], t + i[1], e + i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9]);
            else {
                var s = i[5]
                  , n = 0
                  , r = s.length
                  , a = this.ctx;
                for (n = 0; n < r; n += 3) {
                    var o = 2 * s[n]
                      , h = 2 * s[n + 1]
                      , l = 2 * s[n + 2];
                    a.drawTriangle(i[0], i[3], i[4], o, h, l, i[6], !0)
                }
            }
        }
        ,
        e.fillCircle = function(e, i, s, n) {
            ht.drawCall++;
            var r = this.ctx;
            r.beginPath(),
            r.fillStyle = n,
            r.arc(e + this.x, i + this.y, s, 0, t.PI2),
            r.fill()
        }
        ,
        e.setShader = function(t) {
            this.ctx.setShader(t)
        }
        ,
        e.drawLine = function(t, e, i, s, n, r) {
            void 0 === r && (r = 1);
            var a = this.ctx;
            a.beginPath(),
            a.strokeStyle = n,
            a.lineWidth = r,
            a.moveTo(this.x + t, this.y + e),
            a.lineTo(this.x + i, this.y + s),
            a.stroke()
        }
        ,
        e.clear = function() {
            this.ctx.clear()
        }
        ,
        e.transformByMatrix = function(t) {
            this.ctx.transformByMatrix(t)
        }
        ,
        e.setTransform = function(t, e, i, s, n, r) {
            this.ctx.setTransform(t, e, i, s, n, r)
        }
        ,
        e.setTransformByMatrix = function(t) {
            this.ctx.setTransformByMatrix(t)
        }
        ,
        e.save = function() {
            this.ctx.save()
        }
        ,
        e.restore = function() {
            this.ctx.restore()
        }
        ,
        e.translate = function(t, e) {
            this.ctx.translate(t, e)
        }
        ,
        e.transform = function(t, e, i, s, n, r) {
            this.ctx.transform(t, e, i, s, n, r)
        }
        ,
        e.rotate = function(t) {
            this.ctx.rotate(t)
        }
        ,
        e.scale = function(t, e) {
            this.ctx.scale(t, e)
        }
        ,
        e.alpha = function(t) {
            this.ctx.globalAlpha *= t
        }
        ,
        e.setAlpha = function(t) {
            this.ctx.globalAlpha = t
        }
        ,
        e.fillWords = function(t, e, i, s, n, r) {
            void 0 === r && (r = 0),
            this.ctx.fillWords(t, e, i, s, n, r)
        }
        ,
        e.fillBorderWords = function(t, e, i, s, n, r, a) {
            this.ctx.fillBorderWords(t, e, i, s, n, r, a)
        }
        ,
        e.fillText = function(t, e, i, s, n, r) {
            this.ctx.fillText(t, e + this.x, i + this.y, s, n, r)
        }
        ,
        e.strokeText = function(t, e, i, s, n, r, a) {
            this.ctx.strokeText(t, e + this.x, i + this.y, s, n, r, a)
        }
        ,
        e.blendMode = function(t) {
            this.ctx.globalCompositeOperation = t
        }
        ,
        e.flush = function() {
            this.ctx.flush && this.ctx.flush()
        }
        ,
        e.addRenderObject = function(t) {
            this.ctx.addRenderObject(t)
        }
        ,
        e.beginClip = function(t, e, i, s) {
            this.ctx.beginClip && this.ctx.beginClip(t, e, i, s)
        }
        ,
        e.endClip = function() {
            this.ctx.endClip && this.ctx.endClip()
        }
        ,
        e.fillTrangles = function(t, e, i) {
            this.ctx.fillTrangles(i[0], i[1], i[2], i[3], i.length > 4 ? i[4] : null)
        }
        ,
        t.PI2 = 2 * Math.PI,
        t
    }()
      , j = function() {
        function t(e, i) {
            switch (this._next = i || t.NORENDER,
            e) {
            case 0:
                return void (this._fun = this._no);
            case 1:
                return void (this._fun = this._image);
            case 2:
                return void (this._fun = this._alpha);
            case 4:
                return void (this._fun = this._transform);
            case 8:
                return void (this._fun = this._blend);
            case 16:
                return void (this._fun = this._canvas);
            case 64:
                return void (this._fun = this._mask);
            case 128:
                return void (this._fun = this._clip);
            case 256:
                return void (this._fun = this._style);
            case 512:
                return void (this._fun = this._graphics);
            case 2048:
                return void (this._fun = this._childs);
            case 1024:
                return void (this._fun = this._custom);
            case 513:
            case 517:
                return void (this._fun = this._image2);
            case 32:
                return void (this._fun = L._filter);
            case 69905:
                return void (this._fun = t._initRenderFun)
            }
            this.onCreate(e)
        }
        n(t, "laya.renders.RenderSprite");
        var e = t.prototype;
        return e.onCreate = function(t) {}
        ,
        e._style = function(t, e, i, s) {
            t._style.render(t, e, i, s);
            var n = this._next;
            n._fun.call(n, t, e, i, s)
        }
        ,
        e._no = function(t, e, i, s) {}
        ,
        e._custom = function(t, e, i, s) {
            t.customRender(e, i, s);
            var n = t._style._tf;
            this._next._fun.call(this._next, t, e, i - n.translateX, s - n.translateY)
        }
        ,
        e._clip = function(e, i, s, n) {
            var r = this._next;
            if (r != t.NORENDER) {
                var a = e._style.scrollRect;
                i.ctx.save(),
                i.ctx.clipRect(s, n, a.width, a.height),
                r._fun.call(r, e, i, s - a.x, n - a.y),
                i.ctx.restore()
            }
        }
        ,
        e._blend = function(t, e, i, s) {
            var n = t._style;
            n.blendMode && (e.ctx.globalCompositeOperation = n.blendMode);
            var r = this._next;
            r._fun.call(r, t, e, i, s),
            e.ctx.globalCompositeOperation = "source-over"
        }
        ,
        e._mask = function(t, e, i, s) {
            var n = this._next;
            n._fun.call(n, t, e, i, s);
            var r = t.mask;
            r && (e.ctx.globalCompositeOperation = "destination-in",
            (r.numChildren > 0 || !r.graphics._isOnlyOne()) && (r.cacheAsBitmap = !0),
            r.render(e, i - t.pivotX, s - t.pivotY)),
            e.ctx.globalCompositeOperation = "source-over"
        }
        ,
        e._graphics = function(t, e, i, s) {
            var n = t._style._tf;
            t._graphics && t._graphics._render(t, e, i - n.translateX, s - n.translateY);
            var r = this._next;
            r._fun.call(r, t, e, i, s)
        }
        ,
        e._image = function(t, e, i, s) {
            var n = t._style;
            e.ctx.drawTexture2(i, s, n._tf.translateX, n._tf.translateY, t.transform, n.alpha, n.blendMode, t._graphics._one)
        }
        ,
        e._image2 = function(t, e, i, s) {
            var n = t._style._tf;
            e.ctx.drawTexture2(i, s, n.translateX, n.translateY, t.transform, 1, null, t._graphics._one)
        }
        ,
        e._alpha = function(t, e, i, s) {
            var n;
            if ((n = t._style.alpha) > .01 || t._needRepaint()) {
                var r = e.ctx.globalAlpha;
                e.ctx.globalAlpha *= n;
                var a = this._next;
                a._fun.call(a, t, e, i, s),
                e.ctx.globalAlpha = r
            }
        }
        ,
        e._transform = function(e, i, s, n) {
            var r = e.transform
              , a = this._next;
            r && a != t.NORENDER ? (i.save(),
            i.transform(r.a, r.b, r.c, r.d, r.tx + s, r.ty + n),
            a._fun.call(a, e, i, 0, 0),
            i.restore()) : a._fun.call(a, e, i, s, n)
        }
        ,
        e._childs = function(t, e, i, s) {
            var n = t._style
              , r = n._tf;
            if (i = i - r.translateX + n.paddingLeft,
            s = s - r.translateY + n.paddingTop,
            n._calculation) {
                var a = t._getWords();
                if (a) {
                    var o = n;
                    o && (o.stroke ? e.fillBorderWords(a, i, s, o.font, o.color, o.strokeColor, o.stroke) : e.fillWords(a, i, s, o.font, o.color, "none" != o.textDecoration && o.underLine ? 1 : 0))
                }
            }
            var h, l = t._childs, u = l.length;
            if (t.viewport || t.optimizeScrollRect && t._style.scrollRect) {
                var c = t.viewport || t._style.scrollRect
                  , _ = c.x
                  , d = c.y
                  , f = c.right
                  , p = c.bottom
                  , g = NaN
                  , m = NaN;
                for (v = 0; v < u; ++v)
                    (h = l[v]).visible && (g = h._x) < f && g + h.width > _ && (m = h._y) < p && m + h.height > d && h.render(e, i, s)
            } else
                for (var v = 0; v < u; ++v)
                    (h = l[v])._style.visible && h.render(e, i, s)
        }
        ,
        e._canvas = function(t, e, i, s) {
            var n = t._$P.cacheCanvas;
            if (n) {
                "bitmap" === n.type ? ht.canvasBitmap++ : ht.canvasNormal++;
                var r = n.ctx;
                if (t._needRepaint() || !r)
                    this._canvas_repaint(t, e, i, s);
                else {
                    var a = n._cacheRec;
                    e.drawCanvas(r.canvas, i + a.x, s + a.y, a.width, a.height)
                }
            } else
                this._next._fun.call(this._next, t, e, i, s)
        }
        ,
        e._canvas_repaint = function(t, e, s, n) {
            var r = t._$P.cacheCanvas
              , a = this._next;
            if (r) {
                var o, h, l, u, c = r.ctx, _ = t._needRepaint() || !c, d = r.type;
                if ("bitmap" === d ? ht.canvasBitmap++ : ht.canvasNormal++,
                _) {
                    r._cacheRec || (r._cacheRec = new V);
                    var f, p;
                    X.isWebGL && "bitmap" !== d ? r._cacheRec.setTo(-t.pivotX, -t.pivotY, 1, 1) : ((u = t.getSelfBounds()).x = u.x - t.pivotX,
                    u.y = u.y - t.pivotY,
                    u.x = u.x - 16,
                    u.y = u.y - 16,
                    u.width = u.width + 32,
                    u.height = u.height + 32,
                    u.x = Math.floor(u.x + s) - s,
                    u.y = Math.floor(u.y + n) - n,
                    u.width = Math.floor(u.width),
                    u.height = Math.floor(u.height),
                    r._cacheRec.copyFrom(u)),
                    u = r._cacheRec;
                    var g = X.isWebGL ? 1 : et.pixelRatio * i.stage.clientScaleX
                      , m = X.isWebGL ? 1 : et.pixelRatio * i.stage.clientScaleY;
                    if (!X.isWebGL) {
                        var v, y = 1, x = 1;
                        for (v = t; v && v != i.stage; )
                            y *= v.scaleX,
                            x *= v.scaleY,
                            v = v.parent;
                        X.isWebGL ? (y < 1 && (g *= y),
                        x < 1 && (m *= x)) : (y > 1 && (g *= y),
                        x > 1 && (m *= x))
                    }
                    if (t.scrollRect) {
                        var b = t.scrollRect;
                        u.x -= b.x,
                        u.y -= b.y
                    }
                    if (f = u.width * g,
                    p = u.height * m,
                    h = u.x,
                    l = u.y,
                    X.isWebGL && "bitmap" === d && (f > 2048 || p > 2048))
                        return console.warn("cache bitmap size larger than 2048,cache ignored"),
                        r.ctx && (ot.recover("RenderContext", r.ctx),
                        r.ctx.canvas.size(0, 0),
                        r.ctx = null),
                        void a._fun.call(a, t, e, s, n);
                    c || (c = r.ctx = ot.getItem("RenderContext") || new $(f,p,He.create("AUTO"))),
                    c.ctx.sprite = t,
                    (o = c.canvas).clear(),
                    (o.width != f || o.height != p) && o.size(f, p),
                    "bitmap" === d ? o.context.asBitmap = !0 : "normal" === d && (o.context.asBitmap = !1);
                    var T;
                    if (1 != g || 1 != m) {
                        var w = c.ctx;
                        w.save(),
                        w.scale(g, m),
                        !X.isConchWebGL && X.isConchApp && (T = t._$P.cf) && w.setFilterMatrix && w.setFilterMatrix(T._mat, T._alpha),
                        a._fun.call(a, t, c, -h, -l),
                        w.restore(),
                        X.isConchApp && !X.isConchWebGL || t._applyFilters()
                    } else
                        w = c.ctx,
                        !X.isConchWebGL && X.isConchApp && (T = t._$P.cf) && w.setFilterMatrix && w.setFilterMatrix(T._mat, T._alpha),
                        a._fun.call(a, t, c, -h, -l),
                        X.isConchApp && !X.isConchWebGL || t._applyFilters();
                    t._$P.staticCache && (r.reCache = !1),
                    ht.canvasReCache++
                } else
                    h = (u = r._cacheRec).x,
                    l = u.y,
                    o = c.canvas;
                e.drawCanvas(o, s + h, n + l, u.width, u.height)
            } else
                a._fun.call(a, t, c, s, n)
        }
        ,
        t.__init__ = function() {
            var e, i = 0, s = 0;
            for (e = o.createRenderSprite(69905, null),
            s = t.renders.length = 4096,
            i = 0; i < s; i++)
                t.renders[i] = e;
            t.renders[0] = o.createRenderSprite(0, null),
            function(e, i) {
                for (var s = 0, n = 0; n < e.length; n++)
                    s |= e[n],
                    t.renders[s] = i
            }([1, 512, 4, 2], new t(1,null)),
            t.renders[513] = o.createRenderSprite(513, null),
            t.renders[517] = new t(517,null)
        }
        ,
        t._initRenderFun = function(e, i, s, n) {
            var r = e._renderType;
            (t.renders[r] = t._getTypeRender(r))._fun(e, i, s, n)
        }
        ,
        t._getTypeRender = function(t) {
            for (var e = null, i = 2048; i > 1; )
                i & t && (e = o.createRenderSprite(i, e)),
                i >>= 1;
            return e
        }
        ,
        t.IMAGE = 1,
        t.ALPHA = 2,
        t.TRANSFORM = 4,
        t.BLEND = 8,
        t.CANVAS = 16,
        t.FILTERS = 32,
        t.MASK = 64,
        t.CLIP = 128,
        t.STYLE = 256,
        t.GRAPHICS = 512,
        t.CUSTOM = 1024,
        t.CHILDS = 2048,
        t.INIT = 69905,
        t.renders = [],
        t.NORENDER = new t(0,null),
        t
    }()
      , K = function() {
        function t() {
            this._repaint = !1
        }
        n(t, "laya.resource.Context");
        var e = t.prototype;
        return e.replaceReset = function() {
            var e = 0
              , i = 0;
            i = t.replaceKeys.length;
            var s;
            for (e = 0; e < i; e++)
                s = t.replaceKeys[e],
                this[t.newKeys[e]] = this[s]
        }
        ,
        e.replaceResotre = function() {
            this.__restore(),
            this.__reset()
        }
        ,
        e.setIsMainContext = function() {}
        ,
        e.drawTextures = function(t, e, i, s) {
            ht.drawCall += e.length / 2;
            for (var n = t.width, r = t.height, a = 0, o = e.length; a < o; a += 2)
                this.drawTexture(t, e[a], e[a + 1], n, r, i, s)
        }
        ,
        e.drawCanvas = function(t, e, i, s, n) {
            ht.drawCall++,
            this.drawImage(t.source, e, i, s, n)
        }
        ,
        e.fillRect = function(t, e, i, s, n) {
            ht.drawCall++,
            n && (this.fillStyle = n),
            this.__fillRect(t, e, i, s)
        }
        ,
        e.fillText = function(t, e, i, s, n, r) {
            ht.drawCall++,
            arguments.length > 3 && null != s && (this.font = s,
            this.fillStyle = n,
            this.textAlign = r,
            this.textBaseline = "top"),
            this.__fillText(t, e, i)
        }
        ,
        e.fillBorderText = function(t, e, i, s, n, r, a, o) {
            ht.drawCall++,
            this.font = s,
            this.fillStyle = n,
            this.textBaseline = "top",
            this.strokeStyle = r,
            this.lineWidth = a,
            this.textAlign = o,
            this.__strokeText(t, e, i),
            this.__fillText(t, e, i)
        }
        ,
        e.strokeText = function(t, e, i, s, n, r, a) {
            ht.drawCall++,
            arguments.length > 3 && null != s && (this.font = s,
            this.strokeStyle = n,
            this.lineWidth = r,
            this.textAlign = a,
            this.textBaseline = "top"),
            this.__strokeText(t, e, i)
        }
        ,
        e.transformByMatrix = function(t) {
            this.transform(t.a, t.b, t.c, t.d, t.tx, t.ty)
        }
        ,
        e.setTransformByMatrix = function(t) {
            this.setTransform(t.a, t.b, t.c, t.d, t.tx, t.ty)
        }
        ,
        e.clipRect = function(t, e, i, s) {
            ht.drawCall++,
            this.beginPath(),
            this.rect(t, e, i, s),
            this.clip()
        }
        ,
        e.drawTexture = function(t, e, i, s, n, r, a) {
            ht.drawCall++;
            var o = t.uv
              , h = t.bitmap.width
              , l = t.bitmap.height;
            this.drawImage(t.source, o[0] * h, o[1] * l, (o[2] - o[0]) * h, (o[5] - o[3]) * l, e + r, i + a, s, n)
        }
        ,
        e.drawTextureWithTransform = function(t, e, i, s, n, r, a, o, h) {
            ht.drawCall++;
            var l = t.uv
              , u = t.bitmap.width
              , c = t.bitmap.height;
            this.save(),
            1 != h && (this.globalAlpha *= h),
            r ? (this.transform(r.a, r.b, r.c, r.d, r.tx + a, r.ty + o),
            this.drawImage(t.source, l[0] * u, l[1] * c, (l[2] - l[0]) * u, (l[5] - l[3]) * c, e, i, s, n)) : this.drawImage(t.source, l[0] * u, l[1] * c, (l[2] - l[0]) * u, (l[5] - l[3]) * c, e + a, i + o, s, n),
            this.restore()
        }
        ,
        e.drawTexture2 = function(t, e, i, s, n, r, a, o) {
            var h = o[0];
            if (h.loaded && h.bitmap && h.source) {
                ht.drawCall++;
                var l = 1 !== r;
                if (l) {
                    var u = this.globalAlpha;
                    this.globalAlpha *= r
                }
                var c = h.uv
                  , _ = h.bitmap.width
                  , d = h.bitmap.height;
                n ? (this.save(),
                this.transform(n.a, n.b, n.c, n.d, n.tx + t, n.ty + e),
                this.drawImage(h.source, c[0] * _, c[1] * d, (c[2] - c[0]) * _, (c[5] - c[3]) * d, o[1] - i, o[2] - s, o[3], o[4]),
                this.restore()) : this.drawImage(h.source, c[0] * _, c[1] * d, (c[2] - c[0]) * _, (c[5] - c[3]) * d, o[1] - i + t, o[2] - s + e, o[3], o[4]),
                l && (this.globalAlpha = u)
            }
        }
        ,
        e.fillTexture = function(t, e, i, s, n, r, a, o) {
            if (!o.pat) {
                if (t.uv != he.DEF_UV) {
                    var h = new He("2D");
                    h.getContext("2d"),
                    h.size(t.width, t.height),
                    h.context.drawTexture(t, 0, 0, t.width, t.height, 0, 0),
                    t = new he(h)
                }
                o.pat = this.createPattern(t.bitmap.source, r)
            }
            var l = e
              , u = i
              , c = 0
              , _ = 0;
            a && (l += a.x % t.width,
            u += a.y % t.height,
            c -= a.x % t.width,
            _ -= a.y % t.height),
            this.translate(l, u),
            this.fillRect(c, _, s, n, o.pat),
            this.translate(-l, -u)
        }
        ,
        e.drawTriangle = function(t, e, i, s, n, r, a, o) {
            var h = t.bitmap
              , l = h.source
              , u = t.width
              , c = t.height
              , _ = h.width
              , d = h.height
              , f = i[s] * _
              , p = i[n] * _
              , g = i[r] * _
              , m = i[s + 1] * d
              , v = i[n + 1] * d
              , y = i[r + 1] * d
              , x = e[s]
              , b = e[n]
              , T = e[r]
              , w = e[s + 1]
              , S = e[n + 1]
              , C = e[r + 1];
            if (o) {
                var A = (x + b + T) / 3
                  , M = (w + S + C) / 3
                  , E = x - A
                  , I = w - M
                  , R = Math.sqrt(E * E + I * I);
                x = A + E / R * (R + 1),
                w = M + I / R * (R + 1),
                I = S - M,
                b = A + (E = b - A) / (R = Math.sqrt(E * E + I * I)) * (R + 1),
                S = M + I / R * (R + 1),
                I = C - M,
                T = A + (E = T - A) / (R = Math.sqrt(E * E + I * I)) * (R + 1),
                C = M + I / R * (R + 1)
            }
            this.save(),
            a && this.transform(a.a, a.b, a.c, a.d, a.tx, a.ty),
            this.beginPath(),
            this.moveTo(x, w),
            this.lineTo(b, S),
            this.lineTo(T, C),
            this.closePath(),
            this.clip();
            var L = 1 / (f * v + m * g + p * y - v * g - m * p - f * y)
              , P = x * v + m * T + b * y - v * T - m * b - x * y
              , F = f * b + x * g + p * T - b * g - x * p - f * T
              , D = f * v * T + m * b * g + x * p * y - x * v * g - m * p * T - f * b * y
              , B = w * v + m * C + S * y - v * C - m * S - w * y
              , N = f * S + w * g + p * C - S * g - w * p - f * C
              , O = f * v * C + m * S * g + w * p * y - w * v * g - m * p * C - f * S * y;
            this.transform(P * L, B * L, F * L, N * L, D * L, O * L),
            this.drawImage(l, t.uv[0] * _, t.uv[1] * d, u, c, t.uv[0] * _, t.uv[1] * d, u, c),
            this.restore()
        }
        ,
        e.flush = function() {
            return 0
        }
        ,
        e.fillWords = function(t, e, i, s, n, r) {
            s && (this.font = s),
            n && (this.fillStyle = n);
            this.textBaseline = "top",
            this.textAlign = "left";
            for (var a = 0, o = t.length; a < o; a++) {
                var h = t[a];
                if (this.__fillText(h.char, h.x + e, h.y + i),
                1 === r) {
                    var l = h.height
                      , u = .5 * h.style.letterSpacing;
                    u || (u = 0),
                    this.beginPath(),
                    this.strokeStyle = n,
                    this.lineWidth = 1,
                    this.moveTo(e + h.x - u + .5, i + h.y + l + .5),
                    this.lineTo(e + h.x + h.width + u + .5, i + h.y + l + .5),
                    this.stroke()
                }
            }
        }
        ,
        e.fillBorderWords = function(t, e, i, s, n, r, a) {
            s && (this.font = s),
            n && (this.fillStyle = n),
            this.textBaseline = "top",
            this.lineWidth = a,
            this.textAlign = "left",
            this.strokeStyle = r;
            for (var o = 0, h = t.length; o < h; o++) {
                var l = t[o];
                this.__strokeText(l.char, l.x + e, l.y + i),
                this.__fillText(l.char, l.x + e, l.y + i)
            }
        }
        ,
        e.destroy = function() {
            this.canvas.width = this.canvas.height = 0
        }
        ,
        e.clear = function() {
            this.clearRect(0, 0, this._canvas.width, this._canvas.height),
            this._repaint = !1
        }
        ,
        e.drawCurves = function(t, e, i) {
            this.beginPath(),
            this.strokeStyle = i[3],
            this.lineWidth = i[4];
            var s = i[2];
            t += i[0],
            e += i[1],
            this.moveTo(t + s[0], e + s[1]);
            for (var n = 2, r = s.length; n < r; )
                this.quadraticCurveTo(t + s[n++], e + s[n++], t + s[n++], e + s[n++]);
            this.stroke()
        }
        ,
        t.__init__ = function(t) {
            var e = laya.resource.Context.prototype;
            if (!(t = t || CanvasRenderingContext2D.prototype).inited) {
                t.inited = !0,
                t.__fillText = t.fillText,
                t.__fillRect = t.fillRect,
                t.__strokeText = t.strokeText;
                ["drawTextures", "drawTriangle", "fillWords", "fillBorderWords", "setIsMainContext", "fillRect", "strokeText", "fillTexture", "fillText", "transformByMatrix", "setTransformByMatrix", "clipRect", "drawTexture", "drawTexture2", "drawTextureWithTransform", "flush", "clear", "destroy", "drawCanvas", "fillBorderText", "drawCurves"].forEach(function(i) {
                    t[i] = e[i]
                })
            }
        }
        ,
        t.replaceCanvasGetSet = function(t, e) {
            var i = Object.getOwnPropertyDescriptor(t, e);
            if (!i || !i.configurable)
                return !1;
            var s, n = {};
            for (s in i)
                "set" != s && (n[s] = i[s]);
            var r = i.set;
            return n.set = function(t) {
                r.call(this, t);
                var e = this.getContext("2d");
                e && "__reset"in e && e.__reset()
            }
            ,
            Object.defineProperty(t, e, n),
            !0
        }
        ,
        t.replaceGetSet = function(e, i) {
            var s = Object.getOwnPropertyDescriptor(e, i);
            if (!s || !s.configurable)
                return !1;
            var n, r = {};
            for (n in s)
                "set" != n && (r[n] = s[n]);
            var a = s.set
              , o = "___" + i + "__";
            return t.newKeys.push(o),
            r.set = function(t) {
                t != this[o] && (this[o] = t,
                a.call(this, t))
            }
            ,
            Object.defineProperty(e, i, r),
            !0
        }
        ,
        t._default = new t,
        t.newKeys = [],
        s(t, ["replaceKeys", function() {
            return this.replaceKeys = ["font", "fillStyle", "textBaseline"]
        }
        ]),
        t
    }()
      , q = function() {
        function t(e) {
            this._id = 0,
            this._name = null,
            this._resources = null,
            this._memorySize = 0,
            this._garbageCollectionRate = NaN,
            this._isOverflow = !1,
            this.autoRelease = !1,
            this.autoReleaseMaxSize = 0,
            this._id = ++t._uniqueIDCounter,
            this._name = e || "Content Manager",
            t._isResourceManagersSorted = !1,
            this._memorySize = 0,
            this._isOverflow = !1,
            this.autoRelease = !1,
            this.autoReleaseMaxSize = 536870912,
            this._garbageCollectionRate = .2,
            t._resourceManagers.push(this),
            this._resources = []
        }
        n(t, "laya.resource.ResourceManager");
        var e = t.prototype;
        return i.imps(e, {
            "laya.resource.IDispose": !0
        }),
        e.getResourceByIndex = function(t) {
            return this._resources[t]
        }
        ,
        e.getResourcesLength = function() {
            return this._resources.length
        }
        ,
        e.addResource = function(t) {
            t.resourceManager && t.resourceManager.removeResource(t);
            return -1 === this._resources.indexOf(t) && (t._resourceManager = this,
            this._resources.push(t),
            this.addSize(t.memorySize),
            !0)
        }
        ,
        e.removeResource = function(t) {
            var e = this._resources.indexOf(t);
            return -1 !== e && (this._resources.splice(e, 1),
            t._resourceManager = null,
            this._memorySize -= t.memorySize,
            !0)
        }
        ,
        e.unload = function() {
            for (var t = this._resources.slice(0, this._resources.length), e = 0; e < t.length; e++) {
                t[e].destroy()
            }
            t.length = 0
        }
        ,
        e.dispose = function() {
            if (this === t._systemResourceManager)
                throw new Error("systemResourceManager??????????????????");
            t._resourceManagers.splice(t._resourceManagers.indexOf(this), 1),
            t._isResourceManagersSorted = !1;
            for (var e = this._resources.slice(0, this._resources.length), i = 0; i < e.length; i++) {
                var s = e[i];
                s.resourceManager.removeResource(s),
                s.destroy()
            }
            e.length = 0
        }
        ,
        e.addSize = function(t) {
            t && (this.autoRelease && t > 0 && this._memorySize + t > this.autoReleaseMaxSize && this.garbageCollection((1 - this._garbageCollectionRate) * this.autoReleaseMaxSize),
            this._memorySize += t)
        }
        ,
        e.garbageCollection = function(t) {
            var e = this._resources;
            (e = e.slice()).sort(function(t, e) {
                if (!t || !e)
                    throw new Error("a???b???????????????");
                return t.released && e.released ? 0 : t.released ? 1 : e.released ? -1 : t._lastUseFrameCount - e._lastUseFrameCount
            });
            for (var i = ht.loopCount, s = 0, n = e.length; s < n; s++) {
                var r = e[s];
                if (!(i - r._lastUseFrameCount > 1))
                    return void (this._memorySize >= t && (this._isOverflow = !0));
                if (r.releaseResource(),
                this._memorySize < t)
                    return void (this._isOverflow = !1)
            }
        }
        ,
        r(0, e, "id", function() {
            return this._id
        }),
        r(0, e, "name", function() {
            return this._name
        }, function(e) {
            !e && "" === e || this._name === e || (this._name = e,
            t._isResourceManagersSorted = !1)
        }),
        r(0, e, "memorySize", function() {
            return this._memorySize
        }),
        r(1, t, "systemResourceManager", function() {
            return t._systemResourceManager
        }),
        t.__init__ = function() {
            t.currentResourceManager = t.systemResourceManager
        }
        ,
        t.getLoadedResourceManagerByIndex = function(e) {
            return t._resourceManagers[e]
        }
        ,
        t.getLoadedResourceManagersCount = function() {
            return t._resourceManagers.length
        }
        ,
        t.recreateContentManagers = function(e) {
            void 0 === e && (e = !1);
            for (var i = t.currentResourceManager, s = 0; s < t._resourceManagers.length; s++) {
                t.currentResourceManager = t._resourceManagers[s];
                for (var n = 0; n < t.currentResourceManager._resources.length; n++)
                    t.currentResourceManager._resources[n].releaseResource(e),
                    t.currentResourceManager._resources[n].activeResource(e)
            }
            t.currentResourceManager = i
        }
        ,
        t.releaseContentManagers = function(e) {
            void 0 === e && (e = !1);
            for (var i = t.currentResourceManager, s = 0; s < t._resourceManagers.length; s++) {
                t.currentResourceManager = t._resourceManagers[s];
                for (var n = 0; n < t.currentResourceManager._resources.length; n++) {
                    var r = t.currentResourceManager._resources[n];
                    !r.released && r.releaseResource(e)
                }
            }
            t.currentResourceManager = i
        }
        ,
        t._uniqueIDCounter = 0,
        t._isResourceManagersSorted = !1,
        t._resourceManagers = [],
        s(t, ["_systemResourceManager", function() {
            return this._systemResourceManager = new t("System Resource Manager")
        }
        , "currentResourceManager", function() {
            return this.currentResourceManager = t._systemResourceManager
        }
        ]),
        t
    }()
      , Q = function() {
        function t() {}
        return n(t, "laya.system.System"),
        t.changeDefinition = function(t, e) {
            i[t] = e;
            var s = t + "=classObj";
            i._runScript(s)
        }
        ,
        t.__init__ = function() {
            X.isConchApp && (conch.disableConchResManager(),
            conch.disableConchAutoRestoreLostedDevice())
        }
        ,
        t
    }()
      , Z = function() {
        function t() {
            this.enable = !1,
            this.top = NaN,
            this.bottom = NaN,
            this.left = NaN,
            this.right = NaN,
            this.centerX = NaN,
            this.centerY = NaN,
            this.anchorX = NaN,
            this.anchorY = NaN
        }
        return n(t, "laya.ui.LayoutStyle"),
        s(t, ["EMPTY", function() {
            return this.EMPTY = new t
        }
        ]),
        t
    }()
      , J = function() {
        function t() {}
        return n(t, "laya.ui.Styles"),
        t.labelColor = "#000000",
        t.buttonStateNum = 3,
        t.scrollBarMinNum = 15,
        t.scrollBarDelayTime = 500,
        s(t, ["defaultSizeGrid", function() {
            return this.defaultSizeGrid = [4, 4, 4, 4, 0]
        }
        , "labelPadding", function() {
            return this.labelPadding = [2, 2, 2, 2]
        }
        , "inputLabelPadding", function() {
            return this.inputLabelPadding = [1, 1, 1, 3]
        }
        , "buttonLabelColors", function() {
            return this.buttonLabelColors = ["#32556b", "#32cc6b", "#ff0000", "#C0C0C0"]
        }
        , "comboBoxItemColors", function() {
            return this.comboBoxItemColors = ["#5e95b6", "#ffffff", "#000000", "#8fa4b1", "#ffffff"]
        }
        ]),
        t
    }()
      , tt = function() {
        function t() {}
        return n(t, "laya.ui.UIUtils"),
        t.fillArray = function(t, e, i) {
            var s = t.concat();
            if (e)
                for (var n = e.split(","), r = 0, a = Math.min(s.length, n.length); r < a; r++) {
                    var o = n[r];
                    s[r] = "true" == o || "false" != o && o,
                    null != i && (s[r] = i(o))
                }
            return s
        }
        ,
        t.toColor = function(t) {
            return _t.toHexColor(t)
        }
        ,
        t.gray = function(e, i) {
            void 0 === i && (i = !0),
            i ? t.addFilter(e, t.grayFilter) : t.clearFilter(e, _e)
        }
        ,
        t.addFilter = function(t, e) {
            var i = t.filters || [];
            i.push(e),
            t.filters = i
        }
        ,
        t.clearFilter = function(t, e) {
            var s = t.filters;
            if (null != s && s.length > 0) {
                for (var n = s.length - 1; n > -1; n--) {
                    var r = s[n];
                    i.__typeof(r, e) && s.splice(n, 1)
                }
                t.filters = s
            }
        }
        ,
        t._getReplaceStr = function(e) {
            return t.escapeSequence[e]
        }
        ,
        t.adptString = function(e) {
            return e.replace(/\\(\w)/g, t._getReplaceStr)
        }
        ,
        t.getBindFun = function(e) {
            var s = t._funMap.get(e);
            if (null == s) {
                var n = '"' + e + '"'
                  , r = "(function(data){if(data==null)return;with(data){try{\nreturn " + (n = n.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
                s = i._runScript(r),
                t._funMap.set(e, s)
            }
            return s
        }
        ,
        s(t, ["grayFilter", function() {
            return this.grayFilter = new _e([.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0])
        }
        , "escapeSequence", function() {
            return this.escapeSequence = {
                "\\n": "\n",
                "\\t": "\t"
            }
        }
        , "_funMap", function() {
            return this._funMap = new ft
        }
        ]),
        t
    }()
      , et = function() {
        function s() {}
        return n(s, "laya.utils.Browser"),
        r(1, s, "pixelRatio", function() {
            return s.__init__(),
            s.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)") > -1 ? 2 : o.getPixelRatio()
        }),
        r(1, s, "height", function() {
            return s.__init__(),
            (i.stage && i.stage.canvasRotation ? s.clientWidth : s.clientHeight) * s.pixelRatio
        }),
        r(1, s, "clientWidth", function() {
            return s.__init__(),
            s.window.innerWidth || s.document.body.clientWidth
        }),
        r(1, s, "window", function() {
            return s.__init__(),
            s._window
        }),
        r(1, s, "clientHeight", function() {
            return s.__init__(),
            s.window.innerHeight || s.document.body.clientHeight || s.document.documentElement.clientHeight
        }),
        r(1, s, "width", function() {
            return s.__init__(),
            (i.stage && i.stage.canvasRotation ? s.clientHeight : s.clientWidth) * s.pixelRatio
        }),
        r(1, s, "container", function() {
            return s.__init__(),
            s._container || ((s._container = s.createElement("div")).id = "layaContainer",
            s.document.body.appendChild(s._container)),
            s._container
        }, function(t) {
            s._container = t
        }),
        r(1, s, "document", function() {
            return s.__init__(),
            s._document
        }),
        s.__init__ = function() {
            if (!s._window) {
                s._window = o.getWindow(),
                s._document = s.window.document,
                s._window.addEventListener("message", function(t) {
                    laya.utils.Browser._onMessage(t)
                }, !1),
                s.document.__createElement = s.document.createElement,
                t.requestAnimationFrame = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                    return t.setTimeout(e, 1e3 / 60)
                }
                ;
                var i = t.document.body.style;
                i["-webkit-user-select"] = "none",
                i["-webkit-tap-highlight-color"] = "rgba(200,200,200,0)",
                s.userAgent = s.window.navigator.userAgent,
                s.onIOS = !!(s.u = s.userAgent).match(/\(i[^;]+;(U;)? CPU.+Mac OS X/),
                s.onMobile = s.u.indexOf("Mobile") > -1,
                s.onIPhone = s.u.indexOf("iPhone") > -1,
                s.onMac = s.u.indexOf("Mac OS X") > -1,
                s.onIPad = s.u.indexOf("iPad") > -1,
                s.onAndroid = s.u.indexOf("Android") > -1 || s.u.indexOf("Adr") > -1,
                s.onWP = s.u.indexOf("Windows Phone") > -1,
                s.onQQBrowser = s.u.indexOf("QQBrowser") > -1,
                s.onMQQBrowser = s.u.indexOf("MQQBrowser") > -1 || s.u.indexOf("Mobile") > -1 && s.u.indexOf("QQ") > -1,
                s.onIE = !!s.window.ActiveXObject || "ActiveXObject"in s.window,
                s.onWeiXin = s.u.indexOf("MicroMessenger") > -1,
                s.onPC = !s.onMobile,
                s.onSafari = s.u.indexOf("Safari") > -1,
                s.onFirefox = s.u.indexOf("Firefox") > -1,
                s.onEdge = s.u.indexOf("Edge") > -1,
                s.onMiniGame = s.u.indexOf("MiniGame") > -1,
                s.onLimixiu = s.u.indexOf("limixiu") > -1,
                s.httpProtocol = "http:" == s.window.location.protocol,
                s.onMiniGame && null == s.window.focus && console.error("????????????????????????????????????????????????https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0"),
                s.webAudioEnabled = !!(s.window.AudioContext || s.window.webkitAudioContext || s.window.mozAudioContext),
                s.soundType = s.webAudioEnabled ? "WEBAUDIOSOUND" : "AUDIOSOUND",
                ne = s.webAudioEnabled ? re : ie,
                s.webAudioEnabled && re.initWebAudio(),
                ie._initMusicAudio(),
                s.enableTouch = "ontouchstart"in t || t.DocumentTouch && e instanceof DocumentTouch,
                t.focus(),
                G._soundClass = ne,
                G._musicClass = ie,
                X._mainCanvas = X._mainCanvas || He.create("2D"),
                s.canvas || (s.canvas = He.create("2D"),
                s.context = s.canvas.getContext("2d"))
            }
        }
        ,
        s._onMessage = function(t) {
            if (t.data && "size" == t.data.name) {
                if (s.window.innerWidth = t.data.width,
                s.window.innerHeight = t.data.height,
                s.window.__innerHeight = t.data.clientHeight,
                !s.document.createEvent)
                    return void console.warn("no document.createEvent");
                var e = s.document.createEvent("HTMLEvents");
                return e.initEvent("resize", !1, !1),
                void s.window.dispatchEvent(e)
            }
        }
        ,
        s.createElement = function(t) {
            return s.__init__(),
            s.document.__createElement(t)
        }
        ,
        s.getElementById = function(t) {
            return s.__init__(),
            s.document.getElementById(t)
        }
        ,
        s.removeElement = function(t) {
            t && t.parentNode && t.parentNode.removeChild(t)
        }
        ,
        s.now = function() {
            return o.now()
        }
        ,
        s._window = null,
        s._document = null,
        s._container = null,
        s.userAgent = null,
        s.u = null,
        s.onIOS = !1,
        s.onMac = !1,
        s.onMobile = !1,
        s.onIPhone = !1,
        s.onIPad = !1,
        s.onAndroid = !1,
        s.onWP = !1,
        s.onQQBrowser = !1,
        s.onMQQBrowser = !1,
        s.onSafari = !1,
        s.onFirefox = !1,
        s.onEdge = !1,
        s.onIE = !1,
        s.onWeiXin = !1,
        s.onMiniGame = !1,
        s.onLimixiu = !1,
        s.onPC = !1,
        s.httpProtocol = !1,
        s.webAudioEnabled = !1,
        s.soundType = null,
        s.enableTouch = !1,
        s.canvas = null,
        s.context = null,
        s.__init$ = function() {}
        ,
        s
    }()
      , it = function() {
        function t(t) {
            this._xd_ = !0,
            this._allocated_ = 8,
            this._pos_ = 0,
            this._length = 0,
            t ? (this._u8d_ = new Uint8Array(t),
            this._d_ = new DataView(this._u8d_.buffer),
            this._length = this._d_.byteLength) : this.___resizeBuffer(this._allocated_)
        }
        n(t, "laya.utils.Byte");
        var e = t.prototype;
        return e.___resizeBuffer = function(t) {
            try {
                var e = new Uint8Array(t);
                null != this._u8d_ && (this._u8d_.length <= t ? e.set(this._u8d_) : e.set(this._u8d_.subarray(0, t))),
                this._u8d_ = e,
                this._d_ = new DataView(e.buffer)
            } catch (e) {
                throw "___resizeBuffer err:" + t
            }
        }
        ,
        e.getString = function() {
            return this.rUTF(this.getUint16())
        }
        ,
        e.getFloat32Array = function(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var s = new Float32Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i,
            s
        }
        ,
        e.getUint8Array = function(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var s = new Uint8Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i,
            s
        }
        ,
        e.getInt16Array = function(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var s = new Int16Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i,
            s
        }
        ,
        e.getFloat32 = function() {
            if (this._pos_ + 4 > this._length)
                throw "getFloat32 error - Out of bounds";
            var t = this._d_.getFloat32(this._pos_, this._xd_);
            return this._pos_ += 4,
            t
        }
        ,
        e.getFloat64 = function() {
            if (this._pos_ + 8 > this._length)
                throw "getFloat64 error - Out of bounds";
            var t = this._d_.getFloat64(this._pos_, this._xd_);
            return this._pos_ += 8,
            t
        }
        ,
        e.writeFloat32 = function(t) {
            this.ensureWrite(this._pos_ + 4),
            this._d_.setFloat32(this._pos_, t, this._xd_),
            this._pos_ += 4
        }
        ,
        e.writeFloat64 = function(t) {
            this.ensureWrite(this._pos_ + 8),
            this._d_.setFloat64(this._pos_, t, this._xd_),
            this._pos_ += 8
        }
        ,
        e.getInt32 = function() {
            if (this._pos_ + 4 > this._length)
                throw "getInt32 error - Out of bounds";
            var t = this._d_.getInt32(this._pos_, this._xd_);
            return this._pos_ += 4,
            t
        }
        ,
        e.getUint32 = function() {
            if (this._pos_ + 4 > this._length)
                throw "getUint32 error - Out of bounds";
            var t = this._d_.getUint32(this._pos_, this._xd_);
            return this._pos_ += 4,
            t
        }
        ,
        e.writeInt32 = function(t) {
            this.ensureWrite(this._pos_ + 4),
            this._d_.setInt32(this._pos_, t, this._xd_),
            this._pos_ += 4
        }
        ,
        e.writeUint32 = function(t) {
            this.ensureWrite(this._pos_ + 4),
            this._d_.setUint32(this._pos_, t, this._xd_),
            this._pos_ += 4
        }
        ,
        e.getInt16 = function() {
            if (this._pos_ + 2 > this._length)
                throw "getInt16 error - Out of bounds";
            var t = this._d_.getInt16(this._pos_, this._xd_);
            return this._pos_ += 2,
            t
        }
        ,
        e.getUint16 = function() {
            if (this._pos_ + 2 > this._length)
                throw "getUint16 error - Out of bounds";
            var t = this._d_.getUint16(this._pos_, this._xd_);
            return this._pos_ += 2,
            t
        }
        ,
        e.writeUint16 = function(t) {
            this.ensureWrite(this._pos_ + 2),
            this._d_.setUint16(this._pos_, t, this._xd_),
            this._pos_ += 2
        }
        ,
        e.writeInt16 = function(t) {
            this.ensureWrite(this._pos_ + 2),
            this._d_.setInt16(this._pos_, t, this._xd_),
            this._pos_ += 2
        }
        ,
        e.getUint8 = function() {
            if (this._pos_ + 1 > this._length)
                throw "getUint8 error - Out of bounds";
            return this._d_.getUint8(this._pos_++)
        }
        ,
        e.writeUint8 = function(t) {
            this.ensureWrite(this._pos_ + 1),
            this._d_.setUint8(this._pos_, t),
            this._pos_++
        }
        ,
        e._getUInt8 = function(t) {
            return this._d_.getUint8(t)
        }
        ,
        e._getUint16 = function(t) {
            return this._d_.getUint16(t, this._xd_)
        }
        ,
        e._getMatrix = function() {
            return new k(this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32())
        }
        ,
        e.rUTF = function(t) {
            for (var e = "", i = this._pos_ + t, s = 0, n = String.fromCharCode, r = this._u8d_; this._pos_ < i; )
                (s = r[this._pos_++]) < 128 ? 0 != s && (e += n(s)) : e += n(s < 224 ? (63 & s) << 6 | 127 & r[this._pos_++] : s < 240 ? (31 & s) << 12 | (127 & r[this._pos_++]) << 6 | 127 & r[this._pos_++] : (15 & s) << 18 | (127 & r[this._pos_++]) << 12 | r[this._pos_++] << 6 & 127 | 127 & r[this._pos_++]),
                0;
            return e
        }
        ,
        e.getCustomString = function(t) {
            for (var e = "", i = 0, s = 0, n = String.fromCharCode, r = this._u8d_; t > 0; )
                if ((s = r[this._pos_]) < 128)
                    e += n(s),
                    this._pos_++,
                    t--;
                else
                    for (i = s - 128,
                    this._pos_++,
                    t -= i; i > 0; )
                        s = r[this._pos_++],
                        e += n(r[this._pos_++] << 8 | s),
                        i--;
            return e
        }
        ,
        e.clear = function() {
            this._pos_ = 0,
            this.length = 0
        }
        ,
        e.__getBuffer = function() {
            return this._d_.buffer
        }
        ,
        e.writeUTFBytes = function(t) {
            for (var e = 0, i = (t += "").length; e < i; e++) {
                var s = t.charCodeAt(e);
                s <= 127 ? this.writeByte(s) : s <= 2047 ? (this.ensureWrite(this._pos_ + 2),
                this._u8d_.set([192 | s >> 6, 128 | 63 & s], this._pos_),
                this._pos_ += 2) : s <= 65535 ? (this.ensureWrite(this._pos_ + 3),
                this._u8d_.set([224 | s >> 12, 128 | s >> 6 & 63, 128 | 63 & s], this._pos_),
                this._pos_ += 3) : (this.ensureWrite(this._pos_ + 4),
                this._u8d_.set([240 | s >> 18, 128 | s >> 12 & 63, 128 | s >> 6 & 63, 128 | 63 & s], this._pos_),
                this._pos_ += 4)
            }
        }
        ,
        e.writeUTFString = function(t) {
            var e = this.pos;
            this.writeUint16(1),
            this.writeUTFBytes(t);
            var i = this.pos - e - 2;
            if (i >= 65536)
                throw "writeUTFString byte len more than 65536";
            this._d_.setUint16(e, i, this._xd_)
        }
        ,
        e.readUTFString = function() {
            return this.readUTFBytes(this.getUint16())
        }
        ,
        e.getUTFString = function() {
            return this.readUTFString()
        }
        ,
        e.readUTFBytes = function(t) {
            if (void 0 === t && (t = -1),
            0 == t)
                return "";
            var e = this.bytesAvailable;
            if (t > e)
                throw "readUTFBytes error - Out of bounds";
            return t = t > 0 ? t : e,
            this.rUTF(t)
        }
        ,
        e.getUTFBytes = function(t) {
            return void 0 === t && (t = -1),
            this.readUTFBytes(t)
        }
        ,
        e.writeByte = function(t) {
            this.ensureWrite(this._pos_ + 1),
            this._d_.setInt8(this._pos_, t),
            this._pos_ += 1
        }
        ,
        e.readByte = function() {
            if (this._pos_ + 1 > this._length)
                throw "readByte error - Out of bounds";
            return this._d_.getInt8(this._pos_++)
        }
        ,
        e.getByte = function() {
            return this.readByte()
        }
        ,
        e.ensureWrite = function(t) {
            this._length < t && (this._length = t),
            this._allocated_ < t && (this.length = t)
        }
        ,
        e.writeArrayBuffer = function(t, e, i) {
            if (void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            e < 0 || i < 0)
                throw "writeArrayBuffer error - Out of bounds";
            0 == i && (i = t.byteLength - e),
            this.ensureWrite(this._pos_ + i);
            var s = new Uint8Array(t);
            this._u8d_.set(s.subarray(e, e + i), this._pos_),
            this._pos_ += i
        }
        ,
        r(0, e, "buffer", function() {
            var t = this._d_.buffer;
            return t.byteLength == this.length ? t : t.slice(0, this.length)
        }),
        r(0, e, "endian", function() {
            return this._xd_ ? "littleEndian" : "bigEndian"
        }, function(t) {
            this._xd_ = "littleEndian" == t
        }),
        r(0, e, "length", function() {
            return this._length
        }, function(t) {
            this._allocated_ < t ? this.___resizeBuffer(this._allocated_ = Math.floor(Math.max(t, 2 * this._allocated_))) : this._allocated_ > t && this.___resizeBuffer(this._allocated_ = t),
            this._length = t
        }),
        r(0, e, "pos", function() {
            return this._pos_
        }, function(t) {
            this._pos_ = t
        }),
        r(0, e, "bytesAvailable", function() {
            return this._length - this._pos_
        }),
        t.getSystemEndian = function() {
            if (!t._sysEndian) {
                var e = new ArrayBuffer(2);
                new DataView(e).setInt16(0, 256, !0),
                t._sysEndian = 256 === new Int16Array(e)[0] ? "littleEndian" : "bigEndian"
            }
            return t._sysEndian
        }
        ,
        t.BIG_ENDIAN = "bigEndian",
        t.LITTLE_ENDIAN = "littleEndian",
        t._sysEndian = null,
        t
    }()
      , st = function() {
        function t() {}
        return n(t, "laya.utils.CacheManager"),
        t.regCacheByFunction = function(e, i) {
            t.unRegCacheByFunction(e, i);
            var s;
            s = {
                tryDispose: e,
                getCacheList: i
            },
            t._cacheList.push(s)
        }
        ,
        t.unRegCacheByFunction = function(e, i) {
            var s = 0
              , n = 0;
            for (n = t._cacheList.length,
            s = 0; s < n; s++)
                if (t._cacheList[s].tryDispose == e && t._cacheList[s].getCacheList == i)
                    return void t._cacheList.splice(s, 1)
        }
        ,
        t.forceDispose = function() {
            var e = 0
              , i = t._cacheList.length;
            for (e = 0; e < i; e++)
                t._cacheList[e].tryDispose(!0)
        }
        ,
        t.beginCheck = function(e) {
            void 0 === e && (e = 15e3),
            i.timer.loop(e, null, t._checkLoop)
        }
        ,
        t.stopCheck = function() {
            i.timer.clear(null, t._checkLoop)
        }
        ,
        t._checkLoop = function() {
            var e = t._cacheList;
            if (!(e.length < 1)) {
                var i = et.now()
                  , s = 0
                  , n = 0;
                for (n = s = e.length; s > 0 && (t._index++,
                t._index = t._index % n,
                e[t._index].tryDispose(!1),
                !(et.now() - i > t.loopTimeLimit)); )
                    s--
            }
        }
        ,
        t.loopTimeLimit = 2,
        t._cacheList = [],
        t._index = 0,
        t
    }()
      , nt = function() {
        function t(e) {
            if (this._color = [],
            "string" == typeof e) {
                this.strColor = e,
                null === e && (e = "#000000"),
                "#" == e.charAt(0) && (e = e.substr(1));
                var i = e.length;
                if (3 == i || 4 == i) {
                    for (var s = "", n = 0; n < i; n++)
                        s += e[n] + e[n];
                    e = s
                }
                var r = this.numColor = parseInt(e, 16);
                if (8 == e.length)
                    return void (this._color = [parseInt(e.substr(0, 2), 16) / 255, ((16711680 & r) >> 16) / 255, ((65280 & r) >> 8) / 255, (255 & r) / 255])
            } else
                r = this.numColor = e,
                this.strColor = _t.toHexColor(r);
            this._color = [((16711680 & r) >> 16) / 255, ((65280 & r) >> 8) / 255, (255 & r) / 255, 1],
            this._color.__id = ++t._COLODID
        }
        return n(t, "laya.utils.Color", null, "Color$1"),
        t._initDefault = function() {
            t._DEFAULT = {};
            for (var e in t._COLOR_MAP)
                t._SAVE[e] = t._DEFAULT[e] = new t(t._COLOR_MAP[e]);
            return t._DEFAULT
        }
        ,
        t._initSaveMap = function() {
            t._SAVE_SIZE = 0,
            t._SAVE = {};
            for (var e in t._DEFAULT)
                t._SAVE[e] = t._DEFAULT[e]
        }
        ,
        t.create = function(e) {
            var i = t._SAVE[e + ""];
            return null != i ? i : (t._SAVE_SIZE < 1e3 || t._initSaveMap(),
            t._SAVE[e + ""] = new t(e))
        }
        ,
        t._SAVE = {},
        t._SAVE_SIZE = 0,
        t._COLOR_MAP = {
            white: "#FFFFFF",
            red: "#FF0000",
            green: "#00FF00",
            blue: "#0000FF",
            black: "#000000",
            yellow: "#FFFF00",
            gray: "#AAAAAA"
        },
        t._DEFAULT = t._initDefault(),
        t._COLODID = 1,
        t
    }()
      , rt = function() {
        function t() {
            this.ratio = .92,
            this.maxOffset = 60,
            this._dragging = !1,
            this._clickOnly = !0
        }
        n(t, "laya.utils.Dragging");
        var e = t.prototype;
        return e.start = function(t, e, s, n, r, a, o, h) {
            void 0 === h && (h = .92),
            this.clearTimer(),
            this.target = t,
            this.area = e,
            this.hasInertia = s,
            this.elasticDistance = e ? n : 0,
            this.elasticBackTime = r,
            this.data = a,
            this._disableMouseEvent = o,
            this.ratio = h,
            1 != t.globalScaleX || 1 != t.globalScaleY ? this._parent = t.parent : this._parent = i.stage,
            this._clickOnly = !0,
            this._dragging = !0,
            this._elasticRateX = this._elasticRateY = 1,
            this._lastX = this._parent.mouseX,
            this._lastY = this._parent.mouseY,
            i.stage.on("mouseup", this, this.onStageMouseUp),
            i.stage.on("mouseout", this, this.onStageMouseUp),
            i.timer.frameLoop(1, this, this.loop)
        }
        ,
        e.clearTimer = function() {
            i.timer.clear(this, this.loop),
            i.timer.clear(this, this.tweenMove),
            this._tween && (this._tween.recover(),
            this._tween = null)
        }
        ,
        e.stop = function() {
            this._dragging && (I.instance.disableMouseEvent = !1,
            i.stage.off("mouseup", this, this.onStageMouseUp),
            i.stage.off("mouseout", this, this.onStageMouseUp),
            this._dragging = !1,
            this.target && this.area && this.backToArea(),
            this.clear())
        }
        ,
        e.loop = function() {
            var t = this._parent.getMousePoint()
              , e = t.x
              , s = t.y
              , n = e - this._lastX
              , r = s - this._lastY;
            if (this._clickOnly) {
                if (!(Math.abs(n * i.stage._canvasTransform.getScaleX()) > 1 || Math.abs(r * i.stage._canvasTransform.getScaleY()) > 1))
                    return;
                this._clickOnly = !1,
                this._offsets || (this._offsets = []),
                this._offsets.length = 0,
                this.target.event("dragstart", this.data),
                I.instance.disableMouseEvent = this._disableMouseEvent,
                this.target._set$P("$_MOUSEDOWN", !1)
            } else
                this._offsets.push(n, r);
            0 === n && 0 === r || (this._lastX = e,
            this._lastY = s,
            this.target.x += n * this._elasticRateX,
            this.target.y += r * this._elasticRateY,
            this.area && this.checkArea(),
            this.target.event("dragmove", this.data))
        }
        ,
        e.checkArea = function() {
            if (this.elasticDistance <= 0)
                this.backToArea();
            else {
                if (this.target.x < this.area.x)
                    var t = this.area.x - this.target.x;
                else
                    t = this.target.x > this.area.x + this.area.width ? this.target.x - this.area.x - this.area.width : 0;
                if (this._elasticRateX = Math.max(0, 1 - t / this.elasticDistance),
                this.target.y < this.area.y)
                    var e = this.area.y - this.target.y;
                else
                    e = this.target.y > this.area.y + this.area.height ? this.target.y - this.area.y - this.area.height : 0;
                this._elasticRateY = Math.max(0, 1 - e / this.elasticDistance)
            }
        }
        ,
        e.backToArea = function() {
            this.target.x = Math.min(Math.max(this.target.x, this.area.x), this.area.x + this.area.width),
            this.target.y = Math.min(Math.max(this.target.y, this.area.y), this.area.y + this.area.height)
        }
        ,
        e.onStageMouseUp = function(t) {
            if (I.instance.disableMouseEvent = !1,
            i.stage.off("mouseup", this, this.onStageMouseUp),
            i.stage.off("mouseout", this, this.onStageMouseUp),
            i.timer.clear(this, this.loop),
            !this._clickOnly && this.target)
                if (this.hasInertia) {
                    this._offsets.length < 1 && this._offsets.push(this._parent.mouseX - this._lastX, this._parent.mouseY - this._lastY),
                    this._offsetX = this._offsetY = 0;
                    for (var e = this._offsets.length, s = Math.min(e, 6), n = this._offsets.length - s, r = e - 1; r > n; r--)
                        this._offsetY += this._offsets[r--],
                        this._offsetX += this._offsets[r];
                    this._offsetX = this._offsetX / s * 2,
                    this._offsetY = this._offsetY / s * 2,
                    Math.abs(this._offsetX) > this.maxOffset && (this._offsetX = this._offsetX > 0 ? this.maxOffset : -this.maxOffset),
                    Math.abs(this._offsetY) > this.maxOffset && (this._offsetY = this._offsetY > 0 ? this.maxOffset : -this.maxOffset),
                    i.timer.frameLoop(1, this, this.tweenMove)
                } else
                    this.elasticDistance > 0 ? this.checkElastic() : this.clear()
        }
        ,
        e.checkElastic = function() {
            var t = NaN
              , e = NaN;
            if (this.target.x < this.area.x ? t = this.area.x : this.target.x > this.area.x + this.area.width && (t = this.area.x + this.area.width),
            this.target.y < this.area.y ? e = this.area.y : this.target.y > this.area.y + this.area.height && (e = this.area.y + this.area.height),
            isNaN(t) && isNaN(e))
                this.clear();
            else {
                var i = {};
                isNaN(t) || (i.x = t),
                isNaN(e) || (i.y = e),
                this._tween = ct.to(this.target, i, this.elasticBackTime, at.sineOut, l.create(this, this.clear), 0, !1, !1)
            }
        }
        ,
        e.tweenMove = function() {
            this._offsetX *= this.ratio * this._elasticRateX,
            this._offsetY *= this.ratio * this._elasticRateY,
            this.target.x += this._offsetX,
            this.target.y += this._offsetY,
            this.area && this.checkArea(),
            this.target.event("dragmove", this.data),
            (Math.abs(this._offsetX) < 1 && Math.abs(this._offsetY) < 1 || this._elasticRateX < .5 || this._elasticRateY < .5) && (i.timer.clear(this, this.tweenMove),
            this.elasticDistance > 0 ? this.checkElastic() : this.clear())
        }
        ,
        e.clear = function() {
            if (this.target) {
                this.clearTimer();
                var t = this.target;
                this.target = null,
                this._parent = null,
                t.event("dragend", this.data)
            }
        }
        ,
        t
    }()
      , at = function() {
        function t() {}
        return n(t, "laya.utils.Ease"),
        t.linearNone = function(t, e, i, s) {
            return i * t / s + e
        }
        ,
        t.linearIn = function(t, e, i, s) {
            return i * t / s + e
        }
        ,
        t.linearInOut = function(t, e, i, s) {
            return i * t / s + e
        }
        ,
        t.linearOut = function(t, e, i, s) {
            return i * t / s + e
        }
        ,
        t.bounceIn = function(e, i, s, n) {
            return s - t.bounceOut(n - e, 0, s, n) + i
        }
        ,
        t.bounceInOut = function(e, i, s, n) {
            return e < .5 * n ? .5 * t.bounceIn(2 * e, 0, s, n) + i : .5 * t.bounceOut(2 * e - n, 0, s, n) + .5 * s + i
        }
        ,
        t.bounceOut = function(t, e, i, s) {
            return (t /= s) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
        }
        ,
        t.backIn = function(t, e, i, s, n) {
            return void 0 === n && (n = 1.70158),
            i * (t /= s) * t * ((n + 1) * t - n) + e
        }
        ,
        t.backInOut = function(t, e, i, s, n) {
            return void 0 === n && (n = 1.70158),
            (t /= .5 * s) < 1 ? .5 * i * (t * t * ((1 + (n *= 1.525)) * t - n)) + e : i / 2 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + e
        }
        ,
        t.backOut = function(t, e, i, s, n) {
            return void 0 === n && (n = 1.70158),
            i * ((t = t / s - 1) * t * ((n + 1) * t + n) + 1) + e
        }
        ,
        t.elasticIn = function(e, i, s, n, r, a) {
            void 0 === r && (r = 0),
            void 0 === a && (a = 0);
            var o;
            return 0 == e ? i : 1 == (e /= n) ? i + s : (a || (a = .3 * n),
            !r || s > 0 && r < s || s < 0 && r < -s ? (r = s,
            o = a / 4) : o = a / t.PI2 * Math.asin(s / r),
            -r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - o) * t.PI2 / a) + i)
        }
        ,
        t.elasticInOut = function(e, i, s, n, r, a) {
            void 0 === r && (r = 0),
            void 0 === a && (a = 0);
            var o;
            return 0 == e ? i : 2 == (e /= .5 * n) ? i + s : (a || (a = n * (.3 * 1.5)),
            !r || s > 0 && r < s || s < 0 && r < -s ? (r = s,
            o = a / 4) : o = a / t.PI2 * Math.asin(s / r),
            e < 1 ? r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - o) * t.PI2 / a) * -.5 + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - o) * t.PI2 / a) * .5 + s + i)
        }
        ,
        t.elasticOut = function(e, i, s, n, r, a) {
            void 0 === r && (r = 0),
            void 0 === a && (a = 0);
            var o;
            return 0 == e ? i : 1 == (e /= n) ? i + s : (a || (a = .3 * n),
            !r || s > 0 && r < s || s < 0 && r < -s ? (r = s,
            o = a / 4) : o = a / t.PI2 * Math.asin(s / r),
            r * Math.pow(2, -10 * e) * Math.sin((e * n - o) * t.PI2 / a) + s + i)
        }
        ,
        t.strongIn = function(t, e, i, s) {
            return i * (t /= s) * t * t * t * t + e
        }
        ,
        t.strongInOut = function(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e
        }
        ,
        t.strongOut = function(t, e, i, s) {
            return i * ((t = t / s - 1) * t * t * t * t + 1) + e
        }
        ,
        t.sineInOut = function(t, e, i, s) {
            return .5 * -i * (Math.cos(Math.PI * t / s) - 1) + e
        }
        ,
        t.sineIn = function(e, i, s, n) {
            return -s * Math.cos(e / n * t.HALF_PI) + s + i
        }
        ,
        t.sineOut = function(e, i, s, n) {
            return s * Math.sin(e / n * t.HALF_PI) + i
        }
        ,
        t.quintIn = function(t, e, i, s) {
            return i * (t /= s) * t * t * t * t + e
        }
        ,
        t.quintInOut = function(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e
        }
        ,
        t.quintOut = function(t, e, i, s) {
            return i * ((t = t / s - 1) * t * t * t * t + 1) + e
        }
        ,
        t.quartIn = function(t, e, i, s) {
            return i * (t /= s) * t * t * t + e
        }
        ,
        t.quartInOut = function(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t + e : .5 * -i * ((t -= 2) * t * t * t - 2) + e
        }
        ,
        t.quartOut = function(t, e, i, s) {
            return -i * ((t = t / s - 1) * t * t * t - 1) + e
        }
        ,
        t.cubicIn = function(t, e, i, s) {
            return i * (t /= s) * t * t + e
        }
        ,
        t.cubicInOut = function(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t * t + e : .5 * i * ((t -= 2) * t * t + 2) + e
        }
        ,
        t.cubicOut = function(t, e, i, s) {
            return i * ((t = t / s - 1) * t * t + 1) + e
        }
        ,
        t.quadIn = function(t, e, i, s) {
            return i * (t /= s) * t + e
        }
        ,
        t.quadInOut = function(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t + e : .5 * -i * (--t * (t - 2) - 1) + e
        }
        ,
        t.quadOut = function(t, e, i, s) {
            return -i * (t /= s) * (t - 2) + e
        }
        ,
        t.expoIn = function(t, e, i, s) {
            return 0 == t ? e : i * Math.pow(2, 10 * (t / s - 1)) + e - .001 * i
        }
        ,
        t.expoInOut = function(t, e, i, s) {
            return 0 == t ? e : t == s ? e + i : (t /= .5 * s) < 1 ? .5 * i * Math.pow(2, 10 * (t - 1)) + e : .5 * i * (2 - Math.pow(2, -10 * --t)) + e
        }
        ,
        t.expoOut = function(t, e, i, s) {
            return t == s ? e + i : i * (1 - Math.pow(2, -10 * t / s)) + e
        }
        ,
        t.circIn = function(t, e, i, s) {
            return -i * (Math.sqrt(1 - (t /= s) * t) - 1) + e
        }
        ,
        t.circInOut = function(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * -i * (Math.sqrt(1 - t * t) - 1) + e : .5 * i * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
        }
        ,
        t.circOut = function(t, e, i, s) {
            return i * Math.sqrt(1 - (t = t / s - 1) * t) + e
        }
        ,
        t.HALF_PI = .5 * Math.PI,
        t.PI2 = 2 * Math.PI,
        t
    }()
      , ot = (function() {
        function t() {
            this._hit = null,
            this._unHit = null
        }
        n(t, "laya.utils.HitArea");
        var e = t.prototype;
        e.isHit = function(e, i) {
            return !!t.isHitGraphic(e, i, this.hit) && !t.isHitGraphic(e, i, this.unHit)
        }
        ,
        e.contains = function(t, e) {
            return this.isHit(t, e)
        }
        ,
        r(0, e, "hit", function() {
            return this._hit || (this._hit = new x),
            this._hit
        }, function(t) {
            this._hit = t
        }),
        r(0, e, "unHit", function() {
            return this._unHit || (this._unHit = new x),
            this._unHit
        }, function(t) {
            this._unHit = t
        }),
        t.isHitGraphic = function(e, i, s) {
            if (!s)
                return !1;
            var n;
            if (!(n = s.cmds) && s._one && ((n = t._cmds).length = 1,
            n[0] = s._one),
            !n)
                return !1;
            var r = 0
              , a = 0;
            a = n.length;
            var o;
            for (r = 0; r < a; r++)
                if (o = n[r]) {
                    var h = X._context;
                    switch (o.callee) {
                    case h._translate:
                    case 6:
                        e -= o[0],
                        i -= o[1]
                    }
                    if (t.isHitCmd(e, i, o))
                        return !0
                }
            return !1
        }
        ,
        t.isHitCmd = function(e, i, s) {
            if (!s)
                return !1;
            var n = X._context
              , r = !1;
            switch (s.callee) {
            case n._drawRect:
            case 13:
                t._rec.setTo(s[0], s[1], s[2], s[3]),
                r = t._rec.contains(e, i);
                break;
            case n._drawCircle:
            case n._fillCircle:
            case 14:
                r = (e -= s[0]) * e + (i -= s[1]) * i < s[2] * s[2];
                break;
            case n._drawPoly:
            case 18:
                e -= s[0],
                i -= s[1],
                r = t.ptInPolygon(e, i, s[2])
            }
            return r
        }
        ,
        t.ptInPolygon = function(e, i, s) {
            var n;
            (n = t._ptPoint).setTo(e, i);
            var r = 0
              , a = NaN
              , o = NaN
              , h = NaN
              , l = NaN
              , u = 0;
            u = s.length;
            for (var c = 0; c < u; c += 2)
                if (a = s[c],
                o = s[c + 1],
                h = s[(c + 2) % u],
                l = s[(c + 3) % u],
                o != l && !(n.y < Math.min(o, l) || n.y >= Math.max(o, l))) {
                    (n.y - o) * (h - a) / (l - o) + a > n.x && r++
                }
            return r % 2 == 1
        }
        ,
        t._cmds = [],
        s(t, ["_rec", function() {
            return this._rec = new V
        }
        , "_ptPoint", function() {
            return this._ptPoint = new U
        }
        ])
    }(),
    function() {
        function t(e, i, s, n) {
            this.char = e,
            this.charNum = e.charCodeAt(0),
            this._x = this._y = 0,
            this.width = i,
            this.height = s,
            this.style = n,
            this.isWord = !t._isWordRegExp.test(e)
        }
        n(t, "laya.utils.HTMLChar");
        var e = t.prototype;
        i.imps(e, {
            "laya.display.ILayout": !0
        }),
        e.setSprite = function(t) {
            this._sprite = t
        }
        ,
        e.getSprite = function() {
            return this._sprite
        }
        ,
        e._isChar = function() {
            return !0
        }
        ,
        e._getCSSStyle = function() {
            return this.style
        }
        ,
        r(0, e, "width", function() {
            return this._w
        }, function(t) {
            this._w = t
        }),
        r(0, e, "x", function() {
            return this._x
        }, function(t) {
            this._sprite && (this._sprite.x = t),
            this._x = t
        }),
        r(0, e, "y", function() {
            return this._y
        }, function(t) {
            this._sprite && (this._sprite.y = t),
            this._y = t
        }),
        r(0, e, "height", function() {
            return this._h
        }, function(t) {
            this._h = t
        }),
        t._isWordRegExp = new RegExp("[\\w.]","")
    }(),
    function() {
        function t() {}
        return n(t, "laya.utils.Pool"),
        t.getPoolBySign = function(e) {
            return t._poolDic[e] || (t._poolDic[e] = [])
        }
        ,
        t.clearBySign = function(e) {
            t._poolDic[e] && (t._poolDic[e].length = 0)
        }
        ,
        t.recover = function(e, i) {
            i.__InPool || (i.__InPool = !0,
            t.getPoolBySign(e).push(i))
        }
        ,
        t.getItemByClass = function(e, i) {
            var s = t.getPoolBySign(e)
              , n = s.length ? s.pop() : new i;
            return n.__InPool = !1,
            n
        }
        ,
        t.getItemByCreateFun = function(e, i) {
            var s = t.getPoolBySign(e)
              , n = s.length ? s.pop() : i();
            return n.__InPool = !1,
            n
        }
        ,
        t.getItem = function(e) {
            var i = t.getPoolBySign(e)
              , s = i.length ? i.pop() : null;
            return s && (s.__InPool = !1),
            s
        }
        ,
        t._poolDic = {},
        t.InPoolSign = "__InPool",
        t
    }())
      , ht = function() {
        function t() {}
        return n(t, "laya.utils.Stat"),
        r(1, t, "onclick", null, function(e) {
            t._sp && t._sp.on("click", t._sp, e),
            t._canvas && (t._canvas.source.onclick = e,
            t._canvas.source.style.pointerEvents = "")
        }),
        t.show = function(e, i) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            !X.isConchApp || X.isConchWebGL ? (X.isConchWebGL || et.onMiniGame || et.onLimixiu || (t._useCanvas = !0),
            t._show = !0,
            t._fpsData.length = 60,
            t._view[0] = {
                title: "FPS(Canvas)",
                value: "_fpsStr",
                color: "yellow",
                units: "int"
            },
            t._view[1] = {
                title: "Sprite",
                value: "_spriteStr",
                color: "white",
                units: "int"
            },
            t._view[2] = {
                title: "DrawCall",
                value: "drawCall",
                color: "white",
                units: "int"
            },
            t._view[3] = {
                title: "CurMem",
                value: "currentMemorySize",
                color: "yellow",
                units: "M"
            },
            X.isWebGL ? (t._view[4] = {
                title: "Shader",
                value: "shaderCall",
                color: "white",
                units: "int"
            },
            X.is3DMode ? (t._view[0].title = "FPS(3D)",
            t._view[5] = {
                title: "TriFaces",
                value: "trianglesFaces",
                color: "white",
                units: "int"
            },
            t._view[6] = {
                title: "treeNodeColl",
                value: "treeNodeCollision",
                color: "white",
                units: "int"
            },
            t._view[7] = {
                title: "treeSpriteColl",
                value: "treeSpriteCollision",
                color: "white",
                units: "int"
            }) : (t._view[0].title = "FPS(WebGL)",
            t._view[5] = {
                title: "Canvas",
                value: "_canvasStr",
                color: "white",
                units: "int"
            })) : t._view[4] = {
                title: "Canvas",
                value: "_canvasStr",
                color: "white",
                units: "int"
            },
            t._useCanvas ? t.createUIPre(e, i) : t.createUI(e, i),
            t.enable()) : et.window.conch.showFPS && et.window.conch.showFPS(e, i)
        }
        ,
        t.createUIPre = function(e, i) {
            var s = et.pixelRatio;
            t._width = 130 * s,
            t._vx = 75 * s,
            t._height = s * (12 * t._view.length + 3 * s) + 4,
            t._fontSize = 12 * s;
            for (var n = 0; n < t._view.length; n++)
                t._view[n].x = 4,
                t._view[n].y = n * t._fontSize + 2 * s;
            t._canvas || ((t._canvas = new He("2D")).size(t._width, t._height),
            (t._ctx = t._canvas.getContext("2d")).textBaseline = "top",
            t._ctx.font = t._fontSize + "px Sans-serif",
            t._canvas.source.style.cssText = "pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:" + e + "px;top:" + i + "px;width:" + t._width / s + "px;height:" + t._height / s + "px;"),
            t._first = !0,
            t.loop(),
            t._first = !1,
            et.container.appendChild(t._canvas.source)
        }
        ,
        t.createUI = function(e, i) {
            var s = t._sp
              , n = et.pixelRatio;
            s || (s = new Ce,
            (t._leftText = new Oe).pos(5, 5),
            t._leftText.color = "#ffffff",
            s.addChild(t._leftText),
            (t._txt = new Oe).pos(80 * n, 5),
            t._txt.color = "#ffffff",
            s.addChild(t._txt),
            t._sp = s),
            s.pos(e, i);
            for (var r = "", a = 0; a < t._view.length; a++) {
                r += t._view[a].title + "\n"
            }
            t._leftText.text = r;
            var o = 138 * n
              , h = n * (12 * t._view.length + 3 * n) + 4;
            t._txt.fontSize = t._fontSize * n,
            t._leftText.fontSize = t._fontSize * n,
            s.size(o, h),
            s.graphics.clear(),
            s.graphics.setAlpha(.5),
            s.graphics.drawRect(0, 0, o, h, "#999999"),
            s.graphics.setAlpha(1),
            t.loop()
        }
        ,
        t.enable = function() {
            i.timer.frameLoop(1, t, t.loop)
        }
        ,
        t.hide = function() {
            t._show = !1,
            i.timer.clear(t, t.loop),
            t._canvas && et.removeElement(t._canvas.source)
        }
        ,
        t.clear = function() {
            t.trianglesFaces = t.drawCall = t.shaderCall = t.spriteCount = t.spriteRenderUseCacheCount = t.treeNodeCollision = t.treeSpriteCollision = t.canvasNormal = t.canvasBitmap = t.canvasReCache = 0
        }
        ,
        t.loop = function() {
            t._count++;
            var e = et.now();
            if (!(e - t._timer < 1e3)) {
                var i = t._count;
                if (t.FPS = Math.round(1e3 * i / (e - t._timer)),
                t._show) {
                    t.trianglesFaces = Math.round(t.trianglesFaces / i),
                    t._useCanvas ? (t.drawCall = Math.round(t.drawCall / i) - 2,
                    t.shaderCall = Math.round(t.shaderCall / i),
                    t.spriteCount = Math.round(t.spriteCount / i) - 1) : (t.drawCall = Math.round(t.drawCall / i) - 2,
                    t.shaderCall = Math.round(t.shaderCall / i) - 4,
                    t.spriteCount = Math.round(t.spriteCount / i) - 4),
                    t.spriteRenderUseCacheCount = Math.round(t.spriteRenderUseCacheCount / i),
                    t.canvasNormal = Math.round(t.canvasNormal / i),
                    t.canvasBitmap = Math.round(t.canvasBitmap / i),
                    t.canvasReCache = Math.ceil(t.canvasReCache / i),
                    t.treeNodeCollision = Math.round(t.treeNodeCollision / i),
                    t.treeSpriteCollision = Math.round(t.treeSpriteCollision / i);
                    var s = t.FPS > 0 ? Math.floor(1e3 / t.FPS).toString() : " ";
                    t._fpsStr = t.FPS + (t.renderSlow ? " slow" : "") + " " + s,
                    t._spriteStr = t.spriteCount + (t.spriteRenderUseCacheCount ? "/" + t.spriteRenderUseCacheCount : ""),
                    t._canvasStr = t.canvasReCache + "/" + t.canvasNormal + "/" + t.canvasBitmap,
                    t.currentMemorySize = q.systemResourceManager.memorySize,
                    t._useCanvas ? t.renderInfoPre() : t.renderInfo(),
                    t.clear()
                }
                t._count = 0,
                t._timer = e
            }
        }
        ,
        t.renderInfoPre = function() {
            if (t._canvas) {
                var e = t._ctx;
                e.clearRect(t._first ? 0 : t._vx, 0, t._width, t._height);
                for (var i = 0; i < t._view.length; i++) {
                    var s = t._view[i];
                    t._first && (e.fillStyle = "white",
                    e.fillText(s.title, s.x, s.y, null, null, null)),
                    e.fillStyle = s.color;
                    var n = t[s.value];
                    "M" == s.units && (n = Math.floor(n / 1048576 * 100) / 100 + " M"),
                    e.fillText(n + "", s.x + t._vx, s.y, null, null, null)
                }
            }
        }
        ,
        t.renderInfo = function() {
            for (var e = "", i = 0; i < t._view.length; i++) {
                var s = t._view[i]
                  , n = t[s.value];
                "M" == s.units && (n = Math.floor(n / 1048576 * 100) / 100 + " M"),
                "K" == s.units && (n = Math.floor(n / 1024 * 100) / 100 + " K"),
                e += n + "\n"
            }
            t._txt.text = e
        }
        ,
        t.FPS = 0,
        t.loopCount = 0,
        t.shaderCall = 0,
        t.drawCall = 0,
        t.trianglesFaces = 0,
        t.spriteCount = 0,
        t.spriteRenderUseCacheCount = 0,
        t.treeNodeCollision = 0,
        t.treeSpriteCollision = 0,
        t.canvasNormal = 0,
        t.canvasBitmap = 0,
        t.canvasReCache = 0,
        t.renderSlow = !1,
        t.currentMemorySize = 0,
        t._fpsStr = null,
        t._canvasStr = null,
        t._spriteStr = null,
        t._fpsData = [],
        t._timer = 0,
        t._count = 0,
        t._view = [],
        t._fontSize = 12,
        t._txt = null,
        t._leftText = null,
        t._sp = null,
        t._show = !1,
        t._useCanvas = !1,
        t._canvas = null,
        t._ctx = null,
        t._first = !1,
        t._vx = NaN,
        t._width = 0,
        t._height = 100,
        t
    }()
      , lt = function() {
        function t() {
            this._strsToID = {},
            this._idToStrs = [],
            this._length = 0
        }
        n(t, "laya.utils.StringKey");
        var e = t.prototype;
        return e.add = function(t) {
            var e = this._strsToID[t];
            return null != e ? e : (this._idToStrs[this._length] = t,
            this._strsToID[t] = this._length++)
        }
        ,
        e.getID = function(t) {
            var e = this._strsToID[t];
            return null == e ? -1 : e
        }
        ,
        e.getName = function(t) {
            var e = this._idToStrs[t];
            return null == e ? void 0 : e
        }
        ,
        t
    }()
      , ut = function() {
        function t() {
            this._delta = 0,
            this.scale = 1,
            this.currFrame = 0,
            this._mid = 1,
            this._map = [],
            this._laters = [],
            this._handlers = [],
            this._temp = [],
            this._count = 0,
            this.currTimer = this._now(),
            this._lastTimer = this._now(),
            this._init()
        }
        var e;
        n(t, "laya.utils.Timer");
        var s = t.prototype;
        return s._init = function() {
            i.timer && i.timer.frameLoop(1, this, this._update)
        }
        ,
        s._now = function() {
            return Date.now()
        }
        ,
        s._update = function() {
            if (this.scale <= 0)
                this._lastTimer = this._now();
            else {
                var t = this.currFrame = this.currFrame + this.scale
                  , e = this._now();
                this._delta = (e - this._lastTimer) * this.scale;
                var i = this.currTimer = this.currTimer + this._delta;
                this._lastTimer = e;
                var s = this._handlers;
                for (this._count = 0,
                a = 0,
                o = s.length; a < o; a++)
                    if (null !== (h = s[a]).method) {
                        var n = h.userFrame ? t : i;
                        if (n >= h.exeTime)
                            if (h.repeat)
                                if (h.jumpFrame)
                                    for (; n >= h.exeTime; )
                                        h.exeTime += h.delay,
                                        h.run(!1);
                                else
                                    h.exeTime += h.delay,
                                    h.run(!1),
                                    n > h.exeTime && (h.exeTime += Math.ceil((n - h.exeTime) / h.delay) * h.delay);
                            else
                                h.run(!0)
                    } else
                        this._count++;
                (this._count > 30 || t % 200 == 0) && this._clearHandlers();
                for (var r = this._laters, a = 0, o = r.length - 1; a <= o; a++) {
                    var h = r[a];
                    null !== h.method && (this._map[h.key] = null,
                    h.run(!1)),
                    this._recoverHandler(h),
                    a === o && (o = r.length - 1)
                }
                r.length = 0
            }
        }
        ,
        s._clearHandlers = function() {
            for (var t = this._handlers, e = 0, i = t.length; e < i; e++) {
                var s = t[e];
                null !== s.method ? this._temp.push(s) : this._recoverHandler(s)
            }
            this._handlers = this._temp,
            this._temp = t,
            this._temp.length = 0
        }
        ,
        s._recoverHandler = function(e) {
            this._map[e.key] == e && (this._map[e.key] = null),
            e.clear(),
            t._pool.push(e)
        }
        ,
        s._create = function(i, s, n, r, a, o, h) {
            if (!n)
                return a.apply(r, o),
                null;
            if (h) {
                var l = this._getHandler(r, a);
                if (l)
                    return l.repeat = s,
                    l.userFrame = i,
                    l.delay = n,
                    l.caller = r,
                    l.method = a,
                    l.args = o,
                    l.exeTime = n + (i ? this.currFrame : this.currTimer + this._now() - this._lastTimer),
                    l
            }
            return l = t._pool.length > 0 ? t._pool.pop() : new e,
            l.repeat = s,
            l.userFrame = i,
            l.delay = n,
            l.caller = r,
            l.method = a,
            l.args = o,
            l.exeTime = n + (i ? this.currFrame : this.currTimer + this._now() - this._lastTimer) + 1,
            this._indexHandler(l),
            this._handlers.push(l),
            l
        }
        ,
        s._indexHandler = function(t) {
            var e = t.caller
              , i = t.method
              , s = e ? e.$_GID || (e.$_GID = _t.getGID()) : 0
              , n = i.$_TID || (i.$_TID = 1e5 * this._mid++);
            t.key = s + n,
            this._map[t.key] = t
        }
        ,
        s.once = function(t, e, i, s, n) {
            void 0 === n && (n = !0),
            this._create(!1, !1, t, e, i, s, n)
        }
        ,
        s.loop = function(t, e, i, s, n, r) {
            void 0 === n && (n = !0),
            void 0 === r && (r = !1);
            var a = this._create(!1, !0, t, e, i, s, n);
            a && (a.jumpFrame = r)
        }
        ,
        s.frameOnce = function(t, e, i, s, n) {
            void 0 === n && (n = !0),
            this._create(!0, !1, t, e, i, s, n)
        }
        ,
        s.frameLoop = function(t, e, i, s, n) {
            void 0 === n && (n = !0),
            this._create(!0, !0, t, e, i, s, n)
        }
        ,
        s.toString = function() {
            return "callLater:" + this._laters.length + " handlers:" + this._handlers.length + " pool:" + t._pool.length
        }
        ,
        s.clear = function(t, e) {
            var i = this._getHandler(t, e);
            i && (this._map[i.key] = null,
            i.key = 0,
            i.clear())
        }
        ,
        s.clearAll = function(t) {
            if (t)
                for (var e = 0, i = this._handlers.length; e < i; e++) {
                    var s = this._handlers[e];
                    s.caller === t && (this._map[s.key] = null,
                    s.key = 0,
                    s.clear())
                }
        }
        ,
        s._getHandler = function(t, e) {
            var i = t ? t.$_GID || (t.$_GID = _t.getGID()) : 0
              , s = e.$_TID || (e.$_TID = 1e5 * this._mid++);
            return this._map[i + s]
        }
        ,
        s.callLater = function(i, s, n) {
            if (null == this._getHandler(i, s)) {
                if (t._pool.length)
                    var r = t._pool.pop();
                else
                    r = new e;
                r.caller = i,
                r.method = s,
                r.args = n,
                this._indexHandler(r),
                this._laters.push(r)
            }
        }
        ,
        s.runCallLater = function(t, e) {
            var i = this._getHandler(t, e);
            i && null != i.method && (this._map[i.key] = null,
            i.run(!0))
        }
        ,
        s.runTimer = function(t, e) {
            this.runCallLater(t, e)
        }
        ,
        r(0, s, "delta", function() {
            return this._delta
        }),
        t._pool = [],
        t.__init$ = function() {
            e = function() {
                function t() {
                    this.key = 0,
                    this.repeat = !1,
                    this.delay = 0,
                    this.userFrame = !1,
                    this.exeTime = 0,
                    this.caller = null,
                    this.method = null,
                    this.args = null,
                    this.jumpFrame = !1
                }
                n(t, "");
                var e = t.prototype;
                return e.clear = function() {
                    this.caller = null,
                    this.method = null,
                    this.args = null
                }
                ,
                e.run = function(t) {
                    var e = this.caller;
                    if (e && e.destroyed)
                        return this.clear();
                    var i = this.method
                      , s = this.args;
                    t && this.clear(),
                    null != i && (s ? i.apply(e, s) : i.call(e))
                }
                ,
                t
            }()
        }
        ,
        t
    }()
      , ct = function() {
        function t() {
            this.gid = 0
        }
        n(t, "laya.utils.Tween");
        var e = t.prototype;
        return e.to = function(t, e, i, s, n, r, a) {
            return void 0 === r && (r = 0),
            void 0 === a && (a = !1),
            this._create(t, e, i, s, n, r, a, !0, !1, !0)
        }
        ,
        e.from = function(t, e, i, s, n, r, a) {
            return void 0 === r && (r = 0),
            void 0 === a && (a = !1),
            this._create(t, e, i, s, n, r, a, !1, !1, !0)
        }
        ,
        e._create = function(e, s, n, r, a, o, h, l, u, c) {
            if (!e)
                throw new Error("Tween:target is null");
            this._target = e,
            this._duration = n,
            this._ease = r || s.ease || t.easeNone,
            this._complete = a || s.complete,
            this._delay = o,
            this._props = [],
            this._usedTimer = 0,
            this._startTimer = et.now(),
            this._usedPool = u,
            this._delayParam = null,
            this.update = s.update;
            var _ = e.$_GID || (e.$_GID = _t.getGID());
            return t.tweenMap[_] ? (h && t.clearTween(e),
            t.tweenMap[_].push(this)) : t.tweenMap[_] = [this],
            c ? o <= 0 ? this.firstStart(e, s, l) : (this._delayParam = [e, s, l],
            i.scaleTimer.once(o, this, this.firstStart, this._delayParam)) : this._initProps(e, s, l),
            this
        }
        ,
        e.firstStart = function(t, e, i) {
            this._delayParam = null,
            t.destroyed ? this.clear() : (this._initProps(t, e, i),
            this._beginLoop())
        }
        ,
        e._initProps = function(t, e, i) {
            for (var s in e)
                if ("number" == typeof t[s]) {
                    var n = i ? t[s] : e[s]
                      , r = i ? e[s] : t[s];
                    this._props.push([s, n, r - n]),
                    i || (t[s] = n)
                }
        }
        ,
        e._beginLoop = function() {
            i.scaleTimer.frameLoop(1, this, this._doEase)
        }
        ,
        e._doEase = function() {
            this._updateEase(et.now())
        }
        ,
        e._updateEase = function(e) {
            var i = this._target;
            if (i) {
                if (i.destroyed)
                    return t.clearTween(i);
                var s = this._usedTimer = e - this._startTimer - this._delay;
                if (!(s < 0)) {
                    if (s >= this._duration)
                        return this.complete();
                    for (var n = s > 0 ? this._ease(s, 0, 1, this._duration) : 0, r = this._props, a = 0, o = r.length; a < o; a++) {
                        var h = r[a];
                        i[h[0]] = h[1] + n * h[2]
                    }
                    this.update && this.update.run()
                }
            }
        }
        ,
        e.complete = function() {
            if (this._target) {
                i.scaleTimer.runTimer(this, this.firstStart);
                for (var t = this._target, e = this._props, s = this._complete, n = 0, r = e.length; n < r; n++) {
                    var a = e[n];
                    t[a[0]] = a[1] + a[2]
                }
                this.update && this.update.run(),
                this.clear(),
                s && s.run()
            }
        }
        ,
        e.pause = function() {
            i.scaleTimer.clear(this, this._beginLoop),
            i.scaleTimer.clear(this, this._doEase),
            i.scaleTimer.clear(this, this.firstStart);
            var t = NaN;
            (t = et.now() - this._startTimer - this._delay) < 0 && (this._usedTimer = t)
        }
        ,
        e.setStartTime = function(t) {
            this._startTimer = t
        }
        ,
        e.clear = function() {
            this._target && (this._remove(),
            this._clear())
        }
        ,
        e._clear = function() {
            this.pause(),
            i.scaleTimer.clear(this, this.firstStart),
            this._complete = null,
            this._target = null,
            this._ease = null,
            this._props = null,
            this._delayParam = null,
            this._usedPool && (this.update = null,
            ot.recover("tween", this))
        }
        ,
        e.recover = function() {
            this._usedPool = !0,
            this._clear()
        }
        ,
        e._remove = function() {
            var e = t.tweenMap[this._target.$_GID];
            if (e)
                for (var i = 0, s = e.length; i < s; i++)
                    if (e[i] === this) {
                        e.splice(i, 1);
                        break
                    }
        }
        ,
        e.restart = function() {
            if (this.pause(),
            this._usedTimer = 0,
            this._startTimer = et.now(),
            this._delayParam)
                i.scaleTimer.once(this._delay, this, this.firstStart, this._delayParam);
            else {
                for (var t = this._props, e = 0, s = t.length; e < s; e++) {
                    var n = t[e];
                    this._target[n[0]] = n[1]
                }
                i.scaleTimer.once(this._delay, this, this._beginLoop)
            }
        }
        ,
        e.resume = function() {
            this._usedTimer >= this._duration || (this._startTimer = et.now() - this._usedTimer - this._delay,
            this._delayParam ? this._usedTimer < 0 ? i.scaleTimer.once(-this._usedTimer, this, this.firstStart, this._delayParam) : this.firstStart.apply(this, this._delayParam) : this._beginLoop())
        }
        ,
        r(0, e, "progress", null, function(t) {
            var e = t * this._duration;
            this._startTimer = et.now() - this._delay - e
        }),
        t.to = function(e, i, s, n, r, a, o, h) {
            return void 0 === a && (a = 0),
            void 0 === o && (o = !1),
            void 0 === h && (h = !0),
            ot.getItemByClass("tween", t)._create(e, i, s, n, r, a, o, !0, h, !0)
        }
        ,
        t.from = function(e, i, s, n, r, a, o, h) {
            return void 0 === a && (a = 0),
            void 0 === o && (o = !1),
            void 0 === h && (h = !0),
            ot.getItemByClass("tween", t)._create(e, i, s, n, r, a, o, !1, h, !0)
        }
        ,
        t.clearAll = function(e) {
            if (e && e.$_GID) {
                var i = t.tweenMap[e.$_GID];
                if (i) {
                    for (var s = 0, n = i.length; s < n; s++)
                        i[s]._clear();
                    i.length = 0
                }
            }
        }
        ,
        t.clear = function(t) {
            t.clear()
        }
        ,
        t.clearTween = function(e) {
            t.clearAll(e)
        }
        ,
        t.easeNone = function(t, e, i, s) {
            return i * t / s + e
        }
        ,
        t.tweenMap = {},
        t
    }()
      , _t = function() {
        function t() {}
        return n(t, "laya.utils.Utils"),
        t.toRadian = function(e) {
            return e * t._pi2
        }
        ,
        t.toAngle = function(e) {
            return e * t._pi
        }
        ,
        t.toHexColor = function(t) {
            if (t < 0 || isNaN(t))
                return null;
            for (var e = t.toString(16); e.length < 6; )
                e = "0" + e;
            return "#" + e
        }
        ,
        t.getGID = function() {
            return t._gid++
        }
        ,
        t.concatArray = function(t, e) {
            if (!e)
                return t;
            if (!t)
                return e;
            var i = 0
              , s = e.length;
            for (i = 0; i < s; i++)
                t.push(e[i]);
            return t
        }
        ,
        t.clearArray = function(t) {
            return t ? (t.length = 0,
            t) : t
        }
        ,
        t.copyArray = function(t, e) {
            if (t || (t = []),
            !e)
                return t;
            t.length = e.length;
            var i = 0
              , s = e.length;
            for (i = 0; i < s; i++)
                t[i] = e[i];
            return t
        }
        ,
        t.getGlobalRecByPoints = function(t, e, i, s, n) {
            var r;
            r = new U(e,i),
            r = t.localToGlobal(r);
            var a;
            return a = new U(s,n),
            a = t.localToGlobal(a),
            V._getWrapRec([r.x, r.y, a.x, a.y])
        }
        ,
        t.getGlobalPosAndScale = function(e) {
            return t.getGlobalRecByPoints(e, 0, 0, 1, 1)
        }
        ,
        t.bind = function(t, e) {
            return t.bind(e)
        }
        ,
        t.measureText = function(t, e) {
            return o.measureText(t, e)
        }
        ,
        t.updateOrder = function(t) {
            if (!t || t.length < 2)
                return !1;
            for (var e, i = 1, s = 0, n = t.length, r = NaN; i < n; ) {
                for (e = t[s = i],
                r = t[s]._zOrder; --s > -1 && t[s]._zOrder > r; )
                    t[s + 1] = t[s];
                t[s + 1] = e,
                i++
            }
            var a = e.parent.conchModel;
            if (a)
                if (null != a.updateZOrder)
                    a.updateZOrder();
                else {
                    for (i = 0; i < n; i++)
                        a.removeChild(t[i].conchModel);
                    for (i = 0; i < n; i++)
                        a.addChildAt(t[i].conchModel, i)
                }
            return !0
        }
        ,
        t.transPointList = function(t, e, i) {
            var s = 0
              , n = t.length;
            for (s = 0; s < n; s += 2)
                t[s] += e,
                t[s + 1] += i
        }
        ,
        t.parseInt = function(t, e) {
            void 0 === e && (e = 0);
            var i = et.window.parseInt(t, e);
            return isNaN(i) ? 0 : i
        }
        ,
        t.getFileExtension = function(e) {
            t._extReg.lastIndex = e.lastIndexOf(".");
            var i = t._extReg.exec(e);
            return i && i.length > 1 ? i[1].toLowerCase() : null
        }
        ,
        t.getTransformRelativeToWindow = function(t, e, s) {
            var n = i.stage
              , r = laya.utils.Utils.getGlobalPosAndScale(t)
              , a = n._canvasTransform.clone()
              , o = a.tx
              , h = a.ty;
            a.rotate(-Math.PI / 180 * i.stage.canvasDegree),
            a.scale(i.stage.clientScaleX, i.stage.clientScaleY);
            var l = i.stage.canvasDegree % 180 != 0
              , u = NaN
              , c = NaN;
            l ? (u = s + r.y,
            c = e + r.x,
            u *= a.d,
            c *= a.a,
            90 == i.stage.canvasDegree ? (u = o - u,
            c += h) : (u += o,
            c = h - c)) : (u = e + r.x,
            c = s + r.y,
            u *= a.a,
            c *= a.d,
            u += o,
            c += h);
            var _ = NaN
              , d = NaN;
            return l ? (_ = a.d * r.height,
            d = a.a * r.width) : (_ = a.a * r.width,
            d = a.d * r.height),
            {
                x: u,
                y: c,
                scaleX: _,
                scaleY: d
            }
        }
        ,
        t.fitDOMElementInArea = function(e, s, n, r, a, o) {
            e._fitLayaAirInitialized || (e._fitLayaAirInitialized = !0,
            e.style.transformOrigin = e.style.webKittransformOrigin = "left top",
            e.style.position = "absolute");
            var h = t.getTransformRelativeToWindow(s, n, r);
            e.style.transform = e.style.webkitTransform = "scale(" + h.scaleX + "," + h.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)",
            e.style.width = a + "px",
            e.style.height = o + "px",
            e.style.left = h.x + "px",
            e.style.top = h.y + "px"
        }
        ,
        t.isOkTextureList = function(t) {
            if (!t)
                return !1;
            var e, i = 0, s = t.length;
            for (i = 0; i < s; i++)
                if (!(e = t[i]) || !e.source)
                    return !1;
            return !0
        }
        ,
        t.isOKCmdList = function(t) {
            if (!t)
                return !1;
            var e, i, s = 0, n = t.length, r = X._context;
            for (s = 0; s < n; s++)
                switch ((e = t[s]).callee) {
                case r._drawTexture:
                case r._fillTexture:
                case r._drawTextureWithTransform:
                    if (!(i = e[0]) || !i.source)
                        return !1
                }
            return !0
        }
        ,
        t._gid = 1,
        t._pi = 180 / Math.PI,
        t._pi2 = Math.PI / 180,
        t._extReg = /\.(\w+)\??/g,
        t.parseXMLFromString = function(t) {
            var e;
            if (t = t.replace(/>\s+</g, "><"),
            (e = (new DOMParser).parseFromString(t, "text/xml")).firstChild.textContent.indexOf("This page contains the following errors") > -1)
                throw new Error(e.firstChild.firstChild.textContent);
            return e
        }
        ,
        t
    }()
      , dt = function() {
        function t() {
            this.useDic = {},
            this.shapeDic = {},
            this.shapeLineDic = {},
            this._id = 0,
            this._checkKey = !1,
            this._freeIdArray = [],
            X.isWebGL && st.regCacheByFunction(_t.bind(this.startDispose, this), _t.bind(this.getCacheList, this))
        }
        n(t, "laya.utils.VectorGraphManager");
        var e = t.prototype;
        return e.getId = function() {
            return this._id++
        }
        ,
        e.addShape = function(t, e) {
            this.shapeDic[t] = e,
            this.useDic[t] || (this.useDic[t] = !0)
        }
        ,
        e.addLine = function(t, e) {
            this.shapeLineDic[t] = e,
            this.shapeLineDic[t] || (this.shapeLineDic[t] = !0)
        }
        ,
        e.getShape = function(t) {
            this._checkKey && null != this.useDic[t] && (this.useDic[t] = !0)
        }
        ,
        e.deleteShape = function(t) {
            this.shapeDic[t] && (this.shapeDic[t] = null,
            delete this.shapeDic[t]),
            this.shapeLineDic[t] && (this.shapeLineDic[t] = null,
            delete this.shapeLineDic[t]),
            null != this.useDic[t] && delete this.useDic[t]
        }
        ,
        e.getCacheList = function() {
            var t, e = [];
            for (t in this.shapeDic)
                e.push(this.shapeDic[t]);
            for (t in this.shapeLineDic)
                e.push(this.shapeLineDic[t]);
            return e
        }
        ,
        e.startDispose = function(t) {
            var e;
            for (e in this.useDic)
                this.useDic[e] = !1;
            this._checkKey = !0
        }
        ,
        e.endDispose = function() {
            if (this._checkKey) {
                var t;
                for (t in this.useDic)
                    this.useDic[t] || this.deleteShape(t);
                this._checkKey = !1
            }
        }
        ,
        t.getInstance = function() {
            return t.instance = t.instance || new t
        }
        ,
        t.instance = null,
        t
    }()
      , ft = function() {
        function t() {
            this._obj = null,
            this._obj = t.supportWeakMap ? new et.window.WeakMap : {},
            t.supportWeakMap || t._maps.push(this)
        }
        n(t, "laya.utils.WeakObject");
        var e = t.prototype;
        return e.set = function(e, i) {
            if (null != e)
                if (t.supportWeakMap) {
                    var s = e;
                    "string" != typeof e && "number" != typeof e || (s = t._keys[e]) || (s = t._keys[e] = {
                        k: e
                    }),
                    this._obj.set(s, i)
                } else
                    "string" == typeof e || "number" == typeof e ? this._obj[e] = i : (e.$_GID || (e.$_GID = _t.getGID()),
                    this._obj[e.$_GID] = i)
        }
        ,
        e.get = function(e) {
            if (null == e)
                return null;
            if (t.supportWeakMap) {
                var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
                return i ? this._obj.get(i) : null
            }
            return "string" == typeof e || "number" == typeof e ? this._obj[e] : this._obj[e.$_GID]
        }
        ,
        e.del = function(e) {
            if (null != e)
                if (t.supportWeakMap) {
                    var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
                    if (!i)
                        return;
                    this._obj.delete(i)
                } else
                    "string" == typeof e || "number" == typeof e ? delete this._obj[e] : delete this._obj[this._obj.$_GID]
        }
        ,
        e.has = function(e) {
            if (null == e)
                return !1;
            if (t.supportWeakMap) {
                var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
                return this._obj.has(i)
            }
            return "string" == typeof e || "number" == typeof e ? null != this._obj[e] : null != this._obj[this._obj.$_GID]
        }
        ,
        t.__init__ = function() {
            (t.supportWeakMap = null != et.window.WeakMap) || i.timer.loop(t.delInterval, null, t.clearCache)
        }
        ,
        t.clearCache = function() {
            for (var e = 0, i = t._maps.length; e < i; e++) {
                t._maps[e]._obj = {}
            }
        }
        ,
        t.supportWeakMap = !1,
        t.delInterval = 3e5,
        t._keys = {},
        t._maps = [],
        s(t, ["I", function() {
            return this.I = new t
        }
        ]),
        t
    }()
      , pt = function() {
        function t() {
            this.id = NaN,
            this.save = [],
            this.toUpperCase = null,
            this.changed = !1,
            this._text = null
        }
        n(t, "laya.utils.WordText");
        var e = t.prototype;
        return e.setText = function(t) {
            this.changed = !0,
            this._text = t
        }
        ,
        e.toString = function() {
            return this._text
        }
        ,
        e.charCodeAt = function(t) {
            return this._text ? this._text.charCodeAt(t) : NaN
        }
        ,
        e.charAt = function(t) {
            return this._text ? this._text.charAt(t) : null
        }
        ,
        r(0, e, "length", function() {
            return this._text ? this._text.length : 0
        }),
        t
    }()
      , gt = function() {
        function t(t, e, s) {
            this._atlasID = 0,
            this._width = 0,
            this._height = 0,
            this._texCount = 0,
            this._rowInfo = null,
            this._cells = null,
            this._failSize = new i,
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === s && (s = 0),
            this._cells = null,
            this._rowInfo = null,
            this._init(t, e),
            this._atlasID = s
        }
        var e, i;
        n(t, "laya.webgl.atlas.AtlasGrid");
        var s = t.prototype;
        return s.getAltasID = function() {
            return this._atlasID
        }
        ,
        s.setAltasID = function(t) {
            t >= 0 && (this._atlasID = t)
        }
        ,
        s.addTex = function(t, e, i) {
            var s = this._get(e, i);
            return 0 == s.ret ? s : (this._fill(s.x, s.y, e, i, t),
            this._texCount++,
            s)
        }
        ,
        s._release = function() {
            null != this._cells && (this._cells.length = 0,
            this._cells = null),
            this._rowInfo && (this._rowInfo.length = 0,
            this._rowInfo = null)
        }
        ,
        s._init = function(t, i) {
            if (this._width = t,
            this._height = i,
            this._release(),
            0 == this._width)
                return !1;
            this._cells = new Uint8Array(this._width * this._height * 3),
            this._rowInfo = a(this._height);
            for (var s = 0; s < this._height; s++)
                this._rowInfo[s] = new e;
            return this._clear(),
            !0
        }
        ,
        s._get = function(t, e) {
            var i = new vt;
            if (t >= this._failSize.width && e >= this._failSize.height)
                return i;
            for (var s = -1, n = -1, r = this._width, a = this._height, o = this._cells, h = 0; h < a; h++)
                if (!(this._rowInfo[h].spaceCount < t))
                    for (var l = 0; l < r; ) {
                        var u = 3 * (h * r + l);
                        if (0 != o[u] || o[u + 1] < t || o[u + 2] < e)
                            l += o[u + 1];
                        else {
                            s = l,
                            n = h;
                            for (var c = 0; c < t; c++)
                                if (o[3 * c + u + 2] < e) {
                                    s = -1;
                                    break
                                }
                            if (!(s < 0))
                                return i.ret = !0,
                                i.x = s,
                                i.y = n,
                                i;
                            l += o[u + 1]
                        }
                    }
            return i
        }
        ,
        s._fill = function(t, e, i, s, n) {
            var r = this._width
              , a = this._height;
            this._check(t + i <= r && e + s <= a);
            for (var o = e; o < s + e; ++o) {
                this._check(this._rowInfo[o].spaceCount >= i),
                this._rowInfo[o].spaceCount -= i;
                for (var h = 0; h < i; h++) {
                    var l = 3 * (t + o * r + h);
                    this._check(0 == this._cells[l]),
                    this._cells[l] = n,
                    this._cells[l + 1] = i,
                    this._cells[l + 2] = s
                }
            }
            if (t > 0)
                for (o = 0; o < s; ++o) {
                    var u = 0;
                    for (h = t - 1; h >= 0 && 0 == this._cells[3 * ((e + o) * r + h)]; --h,
                    ++u)
                        ;
                    for (h = u; h > 0; --h)
                        this._cells[3 * ((e + o) * r + t - h) + 1] = h,
                        this._check(h > 0)
                }
            if (e > 0)
                for (h = t; h < t + i; ++h) {
                    for (u = 0,
                    o = e - 1; o >= 0 && 0 == this._cells[3 * (h + o * r)]; --o,
                    u++)
                        ;
                    for (o = u; o > 0; --o)
                        this._cells[3 * (h + (e - o) * r) + 2] = o,
                        this._check(o > 0)
                }
        }
        ,
        s._check = function(t) {
            0 == t && console.log("xtexMerger ?????????")
        }
        ,
        s._clear = function() {
            this._texCount = 0;
            for (var t = 0; t < this._height; t++)
                this._rowInfo[t].spaceCount = this._width;
            for (var e = 0; e < this._height; e++)
                for (var i = 0; i < this._width; i++) {
                    var s = 3 * (e * this._width + i);
                    this._cells[s] = 0,
                    this._cells[s + 1] = this._width - i,
                    this._cells[s + 2] = this._width - e
                }
            this._failSize.width = this._width + 1,
            this._failSize.height = this._height + 1
        }
        ,
        t.__init$ = function() {
            e = function() {
                function t() {
                    this.spaceCount = 0
                }
                return n(t, ""),
                t
            }(),
            i = function() {
                function t() {
                    this.width = 0,
                    this.height = 0
                }
                return n(t, ""),
                t
            }()
        }
        ,
        t
    }()
      , mt = function() {
        function t(t, e, i, s) {
            this._currentAtlasCount = 0,
            this._maxAtlaserCount = 0,
            this._width = 0,
            this._height = 0,
            this._gridSize = 0,
            this._gridNumX = 0,
            this._gridNumY = 0,
            this._init = !1,
            this._curAtlasIndex = 0,
            this._setAtlasParam = !1,
            this._atlaserArray = null,
            this._needGC = !1,
            this._setAtlasParam = !0,
            this._width = t,
            this._height = e,
            this._gridSize = i,
            this._maxAtlaserCount = s,
            this._gridNumX = t / i,
            this._gridNumY = e / i,
            this._curAtlasIndex = 0,
            this._atlaserArray = []
        }
        n(t, "laya.webgl.atlas.AtlasResourceManager");
        var e = t.prototype;
        return e.setAtlasParam = function(e, i, s, n) {
            if (1 == this._setAtlasParam)
                return t._sid_ = 0,
                this._width = e,
                this._height = i,
                this._gridSize = s,
                this._maxAtlaserCount = n,
                this._gridNumX = e / s,
                this._gridNumY = i / s,
                this._curAtlasIndex = 0,
                this.freeAll(),
                !0;
            throw console.log("????????????????????????????????????????????????????????????????????????"),
            -1
        }
        ,
        e.pushData = function(e) {
            var i = e.bitmap
              , s = -1
              , n = null
              , r = 0
              , a = 0
              , o = 0;
            for (r = 0,
            a = this._atlaserArray.length; r < a && (o = (this._curAtlasIndex + r) % a,
            n = this._atlaserArray[o],
            -1 == (s = n.findBitmapIsExist(i))); r++)
                ;
            if (-1 != s) {
                var h = n.InAtlasWebGLImagesOffsetValue[s];
                return p = h[0],
                g = h[1],
                n.addToAtlas(e, p, g),
                !0
            }
            this._setAtlasParam = !1;
            for (var l = Math.ceil((e.bitmap.width + 2) / this._gridSize), u = Math.ceil((e.bitmap.height + 2) / this._gridSize), c = !1, _ = 0; _ < 2; _++) {
                var d = this._maxAtlaserCount;
                for (r = 0; r < d; r++) {
                    o = (this._curAtlasIndex + r) % d,
                    this._atlaserArray.length - 1 >= o || this._atlaserArray.push(new me(this._gridNumX,this._gridNumY,this._width,this._height,t._sid_++));
                    var f = this._atlaserArray[o]
                      , p = 0
                      , g = 0
                      , m = f.addTex(1, l, u);
                    if (m.ret) {
                        p = m.x * this._gridSize + 1,
                        g = m.y * this._gridSize + 1,
                        i.lock = !0,
                        f.addToAtlasTexture(i, p, g),
                        f.addToAtlas(e, p, g),
                        c = !0,
                        this._curAtlasIndex = o;
                        break
                    }
                }
                if (c)
                    break;
                this._atlaserArray.push(new me(this._gridNumX,this._gridNumY,this._width,this._height,t._sid_++)),
                this._needGC = !0,
                this.garbageCollection(),
                this._curAtlasIndex = this._atlaserArray.length - 1
            }
            return c || console.log(">>>AtlasManager pushData error"),
            c
        }
        ,
        e.addToAtlas = function(t) {
            laya.webgl.atlas.AtlasResourceManager.instance.pushData(t)
        }
        ,
        e.garbageCollection = function() {
            if (!0 === this._needGC) {
                for (var t = this._atlaserArray.length - this._maxAtlaserCount, e = 0; e < t; e++)
                    this._atlaserArray[e].dispose(),
                    console.log("AtlasResourceManager:Dispose the inner Atlas???");
                console.log(">>>>altas garbageCollection =" + t),
                this._atlaserArray.splice(0, t),
                this._needGC = !1
            }
            return !0
        }
        ,
        e.freeAll = function() {
            for (var t = 0, e = this._atlaserArray.length; t < e; t++)
                this._atlaserArray[t].dispose();
            this._atlaserArray.length = 0,
            this._curAtlasIndex = 0
        }
        ,
        e.getAtlaserCount = function() {
            return this._atlaserArray.length
        }
        ,
        e.getAtlaserByIndex = function(t) {
            return this._atlaserArray[t]
        }
        ,
        r(1, t, "instance", function() {
            return t._Instance || (t._Instance = new t(laya.webgl.atlas.AtlasResourceManager.atlasTextureWidth,laya.webgl.atlas.AtlasResourceManager.atlasTextureHeight,16,laya.webgl.atlas.AtlasResourceManager.maxTextureCount)),
            t._Instance
        }),
        r(1, t, "enabled", function() {
            return y.atlasEnable
        }),
        r(1, t, "atlasLimitWidth", function() {
            return t._atlasLimitWidth
        }, function(e) {
            t._atlasLimitWidth = e
        }),
        r(1, t, "atlasLimitHeight", function() {
            return t._atlasLimitHeight
        }, function(e) {
            t._atlasLimitHeight = e
        }),
        t._enable = function() {
            y.atlasEnable = !0
        }
        ,
        t._disable = function() {
            y.atlasEnable = !1
        }
        ,
        t.__init__ = function() {
            t.atlasTextureWidth = 2048,
            t.atlasTextureHeight = 2048,
            t.maxTextureCount = 6,
            t.atlasLimitWidth = 512,
            t.atlasLimitHeight = 512
        }
        ,
        t._atlasLimitWidth = 0,
        t._atlasLimitHeight = 0,
        t.gridSize = 16,
        t.atlasTextureWidth = 0,
        t.atlasTextureHeight = 0,
        t.maxTextureCount = 0,
        t._atlasRestore = 0,
        t.BOARDER_TYPE_NO = 0,
        t.BOARDER_TYPE_RIGHT = 1,
        t.BOARDER_TYPE_LEFT = 2,
        t.BOARDER_TYPE_BOTTOM = 4,
        t.BOARDER_TYPE_TOP = 8,
        t.BOARDER_TYPE_ALL = 15,
        t._sid_ = 0,
        t._Instance = null,
        t
    }()
      , vt = function() {
        function t() {
            this.x = 0,
            this.y = 0,
            this.ret = !1,
            this.ret = !1,
            this.x = 0,
            this.y = 0
        }
        return n(t, "laya.webgl.atlas.MergeFillInfo"),
        t
    }()
      , yt = function() {
        function t() {}
        return n(t, "laya.webgl.canvas.BlendMode"),
        t._init_ = function(e) {
            t.fns = [t.BlendNormal, t.BlendAdd, t.BlendMultiply, t.BlendScreen, t.BlendOverlay, t.BlendLight, t.BlendMask, t.BlendDestinationOut],
            t.targetFns = [t.BlendNormalTarget, t.BlendAddTarget, t.BlendMultiplyTarget, t.BlendScreenTarget, t.BlendOverlayTarget, t.BlendLightTarget, t.BlendMask, t.BlendDestinationOut]
        }
        ,
        t.BlendNormal = function(t) {
            t.blendFunc(1, 771)
        }
        ,
        t.BlendAdd = function(t) {
            t.blendFunc(1, 772)
        }
        ,
        t.BlendMultiply = function(t) {
            t.blendFunc(774, 771)
        }
        ,
        t.BlendScreen = function(t) {
            t.blendFunc(1, 1)
        }
        ,
        t.BlendOverlay = function(t) {
            t.blendFunc(1, 769)
        }
        ,
        t.BlendLight = function(t) {
            t.blendFunc(1, 1)
        }
        ,
        t.BlendNormalTarget = function(t) {
            t.blendFunc(1, 771)
        }
        ,
        t.BlendAddTarget = function(t) {
            t.blendFunc(1, 772)
        }
        ,
        t.BlendMultiplyTarget = function(t) {
            t.blendFunc(774, 771)
        }
        ,
        t.BlendScreenTarget = function(t) {
            t.blendFunc(1, 1)
        }
        ,
        t.BlendOverlayTarget = function(t) {
            t.blendFunc(1, 769)
        }
        ,
        t.BlendLightTarget = function(t) {
            t.blendFunc(1, 1)
        }
        ,
        t.BlendMask = function(t) {
            t.blendFunc(0, 770)
        }
        ,
        t.BlendDestinationOut = function(t) {
            t.blendFunc(0, 0)
        }
        ,
        t.activeBlendFunction = null,
        t.NAMES = ["normal", "add", "multiply", "screen", "overlay", "light", "mask", "destination-out"],
        t.TOINT = {
            normal: 0,
            add: 1,
            multiply: 2,
            screen: 3,
            lighter: 1,
            overlay: 4,
            light: 5,
            mask: 6,
            "destination-out": 7
        },
        t.NORMAL = "normal",
        t.ADD = "add",
        t.MULTIPLY = "multiply",
        t.SCREEN = "screen",
        t.LIGHT = "light",
        t.OVERLAY = "overlay",
        t.DESTINATIONOUT = "destination-out",
        t.fns = [],
        t.targetFns = [],
        t
    }()
      , xt = function() {
        function t(t) {
            this._color = nt.create("black"),
            this.setValue(t)
        }
        n(t, "laya.webgl.canvas.DrawStyle");
        var e = t.prototype;
        return e.setValue = function(t) {
            if (t) {
                if ("string" == typeof t)
                    return void (this._color = nt.create(t));
                if (t instanceof laya.utils.Color)
                    return void (this._color = t)
            }
        }
        ,
        e.reset = function() {
            this._color = nt.create("black")
        }
        ,
        e.equal = function(t) {
            return "string" == typeof t ? this._color.strColor === t : t instanceof laya.utils.Color && this._color.numColor === t.numColor
        }
        ,
        e.toColorStr = function() {
            return this._color.strColor
        }
        ,
        t.create = function(e) {
            if (e) {
                var i;
                if ("string" == typeof e ? i = nt.create(e) : e instanceof laya.utils.Color && (i = e),
                i)
                    return i._drawStyle || (i._drawStyle = new t(e))
            }
            return laya.webgl.canvas.DrawStyle.DEFAULT
        }
        ,
        s(t, ["DEFAULT", function() {
            return this.DEFAULT = new t("#000000")
        }
        ]),
        t
    }()
      , bt = function() {
        function t() {
            this._x = 0,
            this._y = 0,
            this.dirty = !1,
            this.offset = 0,
            this.count = 0,
            this.geoStart = 0,
            this.tempArray = [],
            this.closePath = !1,
            this.geomatrys = [];
            qt.mainContext;
            this.ib = si.create(35048),
            this.vb = ni.create(5)
        }
        n(t, "laya.webgl.canvas.Path");
        var e = t.prototype;
        return e.addPoint = function(t, e) {
            this.tempArray.push(t, e)
        }
        ,
        e.getEndPointX = function() {
            return this.tempArray[this.tempArray.length - 2]
        }
        ,
        e.getEndPointY = function() {
            return this.tempArray[this.tempArray.length - 1]
        }
        ,
        e.polygon = function(t, e, i, s, n, r) {
            var a;
            return this.geomatrys.push(this._curGeomatry = a = new be(t,e,i,s,n,r)),
            s || (a.fill = !1),
            void 0 == r && (a.borderWidth = 0),
            a
        }
        ,
        e.setGeomtry = function(t) {
            this.geomatrys.push(this._curGeomatry = t)
        }
        ,
        e.drawLine = function(t, e, i, s, n) {
            var r;
            return this.closePath ? this.geomatrys.push(this._curGeomatry = r = new xe(t,e,i,s,n)) : this.geomatrys.push(this._curGeomatry = r = new ye(t,e,i,s,n)),
            r.fill = !1,
            r
        }
        ,
        e.update = function() {
            var t = this.ib._byteLength
              , e = this.geomatrys.length;
            this.offset = t;
            for (var i = this.geoStart; i < e; i++)
                this.geomatrys[i].getData(this.ib, this.vb, this.vb._byteLength / 20);
            this.geoStart = e,
            this.count = (this.ib._byteLength - t) / Xt.BYTES_PIDX
        }
        ,
        e.reset = function() {
            this.vb.clear(),
            this.ib.clear(),
            this.offset = this.count = this.geoStart = 0,
            this.geomatrys.length = 0
        }
        ,
        e.recover = function() {
            this._curGeomatry = null,
            this.vb.destory(),
            this.vb = null,
            this.ib.destory(),
            this.ib = null
        }
        ,
        t
    }()
      , Tt = function() {
        function t() {}
        n(t, "laya.webgl.canvas.save.SaveBase");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }),
        e.isSaveMark = function() {
            return !1
        }
        ,
        e.restore = function(e) {
            this._dataObj[this._valueName] = this._value,
            t._cache[t._cache._length++] = this,
            this._newSubmit && (e._curSubmit = Nt.RENDERBASE,
            e._renderKey = 0)
        }
        ,
        t._createArray = function() {
            var t = [];
            return t._length = 0,
            t
        }
        ,
        t._init = function() {
            var e = t._namemap = {};
            return e[1] = "ALPHA",
            e[2] = "fillStyle",
            e[8] = "font",
            e[256] = "lineWidth",
            e[512] = "strokeStyle",
            e[8192] = "_mergeID",
            e[1024] = e[2048] = e[4096] = [],
            e[16384] = "textBaseline",
            e[32768] = "textAlign",
            e[65536] = "_nBlendType",
            e[1048576] = "shader",
            e[2097152] = "filters",
            e
        }
        ,
        t.save = function(e, i, s, n) {
            if ((e._saveMark._saveuse & i) !== i) {
                e._saveMark._saveuse |= i;
                var r = t._cache
                  , a = r._length > 0 ? r[--r._length] : new t;
                a._value = s[a._valueName = t._namemap[i]],
                a._dataObj = s,
                a._newSubmit = n;
                var o = e._save;
                o[o._length++] = a
            }
        }
        ,
        t._cache = laya.webgl.canvas.save.SaveBase._createArray(),
        t._namemap = t._init(),
        t
    }()
      , wt = function() {
        function t() {
            this._clipRect = new V
        }
        n(t, "laya.webgl.canvas.save.SaveClipRect");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }),
        e.isSaveMark = function() {
            return !1
        }
        ,
        e.restore = function(e) {
            e._clipRect = this._clipSaveRect,
            t._cache[t._cache._length++] = this,
            this._submitScissor.submitLength = e._submits._length - this._submitScissor.submitIndex,
            e._curSubmit = Nt.RENDERBASE,
            e._renderKey = 0
        }
        ,
        t.save = function(e, i) {
            if (131072 != (131072 & e._saveMark._saveuse)) {
                e._saveMark._saveuse |= 131072;
                var s = t._cache
                  , n = s._length > 0 ? s[--s._length] : new t;
                n._clipSaveRect = e._clipRect,
                e._clipRect = n._clipRect.copyFrom(e._clipRect),
                n._submitScissor = i;
                var r = e._save;
                r[r._length++] = n
            }
        }
        ,
        s(t, ["_cache", function() {
            return this._cache = Tt._createArray()
        }
        ]),
        t
    }()
      , St = function() {
        function t() {
            this._contextX = 0,
            this._contextY = 0,
            this._clipRect = new V,
            this._rect = new V,
            this._matrix = new k
        }
        n(t, "laya.webgl.canvas.save.SaveClipRectStencil");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }),
        e.isSaveMark = function() {
            return !1
        }
        ,
        e.restore = function(e) {
            Gt.restore(e, this._rect, this._saveMatrix, this._contextX, this._contextY),
            e._clipRect = this._clipSaveRect,
            e._curMat = this._saveMatrix,
            e._x = this._contextX,
            e._y = this._contextY,
            t._cache[t._cache._length++] = this,
            e._curSubmit = Nt.RENDERBASE
        }
        ,
        t.save = function(e, i, s, n, r, a, o, h, l, u) {
            if (262144 != (262144 & e._saveMark._saveuse)) {
                e._saveMark._saveuse |= 262144;
                var c = t._cache
                  , _ = c._length > 0 ? c[--c._length] : new t;
                _._clipSaveRect = e._clipRect,
                _._clipRect.setTo(o, h, l, u),
                e._clipRect = _._clipRect,
                _._rect.x = s,
                _._rect.y = n,
                _._rect.width = r,
                _._rect.height = a,
                _._contextX = e._x,
                _._contextY = e._y,
                _._saveMatrix = e._curMat,
                e._curMat.copyTo(_._matrix),
                e._curMat = _._matrix,
                _._submitStencil = i;
                var d = e._save;
                d[d._length++] = _
            }
        }
        ,
        s(t, ["_cache", function() {
            return this._cache = Tt._createArray()
        }
        ]),
        t
    }()
      , Ct = function() {
        function t() {
            this._saveuse = 0
        }
        n(t, "laya.webgl.canvas.save.SaveMark");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }),
        e.isSaveMark = function() {
            return !0
        }
        ,
        e.restore = function(e) {
            e._saveMark = this._preSaveMark,
            t._no[t._no._length++] = this
        }
        ,
        t.Create = function(e) {
            var i = t._no
              , s = i._length > 0 ? i[--i._length] : new t;
            return s._saveuse = 0,
            s._preSaveMark = e._saveMark,
            e._saveMark = s,
            s
        }
        ,
        s(t, ["_no", function() {
            return this._no = Tt._createArray()
        }
        ]),
        t
    }()
      , At = function() {
        function t() {
            this._matrix = new k
        }
        n(t, "laya.webgl.canvas.save.SaveTransform");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }),
        e.isSaveMark = function() {
            return !1
        }
        ,
        e.restore = function(e) {
            e._curMat = this._savematrix,
            t._no[t._no._length++] = this
        }
        ,
        t.save = function(e) {
            var i = e._saveMark;
            if (2048 != (2048 & i._saveuse)) {
                i._saveuse |= 2048;
                var s = t._no
                  , n = s._length > 0 ? s[--s._length] : new t;
                n._savematrix = e._curMat,
                e._curMat = e._curMat.copyTo(n._matrix);
                var r = e._save;
                r[r._length++] = n
            }
        }
        ,
        s(t, ["_no", function() {
            return this._no = Tt._createArray()
        }
        ]),
        t
    }()
      , Mt = function() {
        function t() {}
        n(t, "laya.webgl.canvas.save.SaveTranslate");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }),
        e.isSaveMark = function() {
            return !1
        }
        ,
        e.restore = function(e) {
            e._curMat;
            e._x = this._x,
            e._y = this._y,
            t._no[t._no._length++] = this
        }
        ,
        t.save = function(e) {
            var i = t._no
              , s = i._length > 0 ? i[--i._length] : new t;
            s._x = e._x,
            s._y = e._y;
            var n = e._save;
            n[n._length++] = s
        }
        ,
        s(t, ["_no", function() {
            return this._no = Tt._createArray()
        }
        ]),
        t
    }()
      , Et = function() {
        function t() {
            this.target = null,
            this.repaint = !1,
            this._width = NaN,
            this._height = NaN,
            this._sp = null,
            this._clipRect = new V
        }
        n(t, "laya.webgl.resource.RenderTargetMAX");
        var e = t.prototype;
        return e.setSP = function(t) {
            this._sp = t
        }
        ,
        e.size = function(t, e) {
            var s = this;
            this._width !== t || this._height !== e ? (this.repaint = !0,
            this._width = t,
            this._height = e,
            this.target ? this.target.size(t, e) : this.target = Le.create(t, e),
            this.target.hasListener("recovered") || this.target.on("recovered", this, function(t) {
                i.timer.callLater(s._sp, s._sp.repaint)
            })) : this.target.size(t, e)
        }
        ,
        e._flushToTarget = function(t, e) {
            if (!e._destroy) {
                var i = Kt.worldScissorTest
                  , s = Kt.worldClipRect;
                Kt.worldClipRect = this._clipRect,
                this._clipRect.x = this._clipRect.y = 0,
                this._clipRect.width = this._width,
                this._clipRect.height = this._height,
                Kt.worldScissorTest = !1,
                qt.mainContext.disable(3089);
                var n = Kt.worldAlpha
                  , r = Kt.worldMatrix4
                  , a = Kt.worldMatrix
                  , o = Kt.worldFilters
                  , h = Kt.worldShaderDefines;
                if (Kt.worldMatrix = k.EMPTY,
                Kt.restoreTempArray(),
                Kt.worldMatrix4 = Kt.TEMPMAT4_ARRAY,
                Kt.worldAlpha = 1,
                Kt.worldFilters = null,
                Kt.worldShaderDefines = null,
                Me.activeShader = null,
                e.start(),
                y.showCanvasMark ? e.clear(0, 1, 0, .3) : e.clear(0, 0, 0, 0),
                t.flush(),
                e.end(),
                Me.activeShader = null,
                Kt.worldAlpha = n,
                Kt.worldMatrix4 = r,
                Kt.worldMatrix = a,
                Kt.worldFilters = o,
                Kt.worldShaderDefines = h,
                Kt.worldScissorTest = i,
                i) {
                    var l = Kt.height - s.y - s.height;
                    qt.mainContext.scissor(s.x, l, s.width, s.height),
                    qt.mainContext.enable(3089)
                }
                Kt.worldClipRect = s
            }
        }
        ,
        e.flush = function(t) {
            this.repaint && (this._flushToTarget(t, this.target),
            this.repaint = !1)
        }
        ,
        e.drawTo = function(t, e, i, s, n) {
            t.drawTexture(this.target.getTexture(), e, i, s, n, 0, 0)
        }
        ,
        e.destroy = function() {
            this.target && (this.target.destroy(),
            this.target = null,
            this._sp = null)
        }
        ,
        t
    }()
      , It = function() {
        function t() {
            this.ALPHA = 1,
            this.shaderType = 0,
            this.defines = new ve
        }
        n(t, "laya.webgl.shader.d2.Shader2D");
        return t.prototype.destroy = function() {
            this.defines = null,
            this.filters = null,
            this.glTexture = null,
            this.strokeStyle = null,
            this.fillStyle = null
        }
        ,
        t.__init__ = function() {
            Ge.addInclude("parts/ColorFilter_ps_uniform.glsl", "uniform vec4 colorAlpha;\nuniform mat4 colorMat;"),
            Ge.addInclude("parts/ColorFilter_ps_logic.glsl", "mat4 alphaMat =colorMat;\n\nalphaMat[0][3] *= gl_FragColor.a;\nalphaMat[1][3] *= gl_FragColor.a;\nalphaMat[2][3] *= gl_FragColor.a;\n\ngl_FragColor = gl_FragColor * alphaMat;\ngl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n"),
            Ge.addInclude("parts/GlowFilter_ps_uniform.glsl", "uniform vec4 u_color;\nuniform float u_strength;\nuniform float u_blurX;\nuniform float u_blurY;\nuniform float u_offsetX;\nuniform float u_offsetY;\nuniform float u_textW;\nuniform float u_textH;"),
            Ge.addInclude("parts/GlowFilter_ps_logic.glsl", "const float c_IterationTime = 10.0;\nfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\nvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\nvec2 vec2FilterDir = vec2(-(u_offsetX)/u_textW,-(u_offsetY)/u_textH);\nvec2 vec2FilterOff = vec2(u_blurX/u_textW/c_IterationTime * 2.0,u_blurY/u_textH/c_IterationTime * 2.0);\nfloat maxNum = u_blurX * u_blurY;\nvec2 vec2Off = vec2(0.0,0.0);\nfloat floatOff = c_IterationTime/2.0;\nfor(float i = 0.0;i<=c_IterationTime; ++i){\n\tfor(float j = 0.0;j<=c_IterationTime; ++j){\n\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n\t\tvec4Color += texture2D(texture, v_texcoord + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n\t}\n}\ngl_FragColor = vec4(u_color.rgb,vec4Color.a * u_strength);\ngl_FragColor.rgb *= gl_FragColor.a;"),
            Ge.addInclude("parts/BlurFilter_ps_logic.glsl", "gl_FragColor =   blur();\ngl_FragColor.w*=alpha;"),
            Ge.addInclude("parts/BlurFilter_ps_uniform.glsl", "uniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\n//float sigma=strength/3.0;//3???????????????????????????????=1?????????????????????3\n//float sig2 = sigma*sigma;\n//float _2sig2 = 2.0*sig2;\n//return 1.0/(2*PI*sig2)*exp(-(x*x+y*y)/_2sig2)\n//float gauss1 = 1.0/(2.0*PI*sig2);\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoord-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //????????????      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO ????????????????????????????????????vs?????????\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}"),
            Ge.addInclude("parts/ColorAdd_ps_uniform.glsl", "uniform vec4 colorAdd;\n"),
            Ge.addInclude("parts/ColorAdd_ps_logic.glsl", "gl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\ngl_FragColor.xyz *= colorAdd.a;");
            var t, e;
            t = "attribute vec4 position;\nattribute vec2 texcoord;\nuniform vec2 size;\n\n#ifdef WORLDMAT\nuniform mat4 mmat;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\n  #ifdef WORLDMAT\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  #else\n  gl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n  #endif\n  \n  v_texcoord = texcoord;\n}",
            e = 'precision mediump float;\n//precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D texture;\nuniform float alpha;\n#include?BLUR_FILTER  "parts/BlurFilter_ps_uniform.glsl";\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\n#include?GLOW_FILTER "parts/GlowFilter_ps_uniform.glsl";\n#include?COLOR_ADD "parts/ColorAdd_ps_uniform.glsl";\n\nvoid main() {\n   vec4 color= texture2D(texture, v_texcoord);\n   color.a*=alpha;\n   color.rgb*=alpha;\n   gl_FragColor=color;\n   #include?COLOR_ADD "parts/ColorAdd_ps_logic.glsl";   \n   #include?BLUR_FILTER  "parts/BlurFilter_ps_logic.glsl";\n   #include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n   #include?GLOW_FILTER "parts/GlowFilter_ps_logic.glsl";\n}',
            Ge.preCompile2D(0, 1, t, e, null),
            t = "attribute vec4 position;\nuniform vec2 size;\nuniform mat4 mmat;\nvoid main() {\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n}",
            e = 'precision mediump float;\nuniform vec4 color;\nuniform float alpha;\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\nvoid main() {\n\tvec4 a = vec4(color.r, color.g, color.b, color.a);\n\ta.w = alpha;\n\ta.xyz *= alpha;\n\tgl_FragColor = a;\n\t#include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n}',
            Ge.preCompile2D(0, 2, t, e, null),
            t = "attribute vec4 position;\nattribute vec3 a_color;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nuniform vec2 u_pos;\nuniform vec2 size;\nvarying vec3 color;\nvoid main(){\n  vec4 tPos = vec4(position.x + u_pos.x,position.y + u_pos.y,position.z,position.w);\n  vec4 pos=mmat*u_mmat2*tPos;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  color=a_color;\n}",
            e = "precision mediump float;\n//precision mediump float;\nvarying vec3 color;\nuniform float alpha;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor=vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=alpha;\n}",
            Ge.preCompile2D(0, 4, t, e, null),
            t = "attribute vec4 position;\nattribute vec2 texcoord;\nuniform vec2 size;\n\n#ifdef WORLDMAT\nuniform mat4 mmat;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\n  #ifdef WORLDMAT\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  #else\n  gl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n  #endif\n  \n  v_texcoord = texcoord;\n}",
            e = '#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n//precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D texture;\nuniform float alpha;\nuniform vec4 u_TexRange;\nuniform vec2 u_offset;\n#include?BLUR_FILTER  "parts/BlurFilter_ps_uniform.glsl";\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\n#include?GLOW_FILTER "parts/GlowFilter_ps_uniform.glsl";\n#include?COLOR_ADD "parts/ColorAdd_ps_uniform.glsl";\n\nvoid main() {\n   vec2 newTexCoord;\n   newTexCoord.x = mod(u_offset.x + v_texcoord.x,u_TexRange.y) + u_TexRange.x;\n   newTexCoord.y = mod(u_offset.y + v_texcoord.y,u_TexRange.w) + u_TexRange.z;\n   vec4 color= texture2D(texture, newTexCoord);\n   color.a*=alpha;\n   gl_FragColor=color;\n   #include?COLOR_ADD "parts/ColorAdd_ps_logic.glsl";   \n   #include?BLUR_FILTER  "parts/BlurFilter_ps_logic.glsl";\n   #include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n   #include?GLOW_FILTER "parts/GlowFilter_ps_logic.glsl";\n}',
            Ge.preCompile2D(0, 256, t, e, null),
            t = "attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}",
            e = "precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n\tvec4 t_color = texture2D(texture, v_texcoord);\n\tgl_FragColor = t_color.rgba * v_color;\n\tgl_FragColor *= alpha;\n}",
            Ge.preCompile2D(0, 512, t, e, null)
        }
        ,
        t
    }()
      , Rt = function() {
        function t(t, e, i) {
            this._value = 0,
            this._name2int = t,
            this._int2name = e,
            this._int2nameMap = i
        }
        n(t, "laya.webgl.shader.ShaderDefines", null, "ShaderDefines$1");
        var e = t.prototype;
        return e.add = function(t) {
            return "string" == typeof t && (t = this._name2int[t]),
            this._value |= t,
            this._value
        }
        ,
        e.addInt = function(t) {
            return this._value |= t,
            this._value
        }
        ,
        e.remove = function(t) {
            return "string" == typeof t && (t = this._name2int[t]),
            this._value &= ~t,
            this._value
        }
        ,
        e.isDefine = function(t) {
            return (this._value & t) === t
        }
        ,
        e.getValue = function() {
            return this._value
        }
        ,
        e.setValue = function(t) {
            this._value = t
        }
        ,
        e.toNameDic = function() {
            var e = this._int2nameMap[this._value];
            return e || t._toText(this._value, this._int2name, this._int2nameMap)
        }
        ,
        t._reg = function(t, e, i, s) {
            i[t] = e,
            s[e] = t
        }
        ,
        t._toText = function(t, e, i) {
            var s = i[t];
            if (s)
                return s;
            for (var n = {}, r = 1, a = 0; a < 32 && !((r = 1 << a) > t); a++)
                if (t & r) {
                    var o = e[r];
                    o && (n[o] = "")
                }
            return i[t] = n,
            n
        }
        ,
        t._toInt = function(t, e) {
            for (var i = t.split("."), s = 0, n = 0, r = i.length; n < r; n++) {
                var a = e[i[n]];
                if (!a)
                    throw new Error("Defines to int err:" + t + "/" + i[n]);
                s |= a
            }
            return s
        }
        ,
        t
    }()
      , Lt = function() {
        function t() {
            this.mVBBuffer = null,
            this.mIBBuffer = null,
            this.mVBData = null,
            this.mIBData = null,
            this.mEleNum = 0,
            this.mTexture = null,
            this.transform = null,
            this._vs = null,
            this._ps = null,
            this._indexStart = -1,
            this._verticles = null,
            this._uvs = null,
            this._tempMatrix = new k
        }
        n(t, "laya.webgl.shader.d2.skinAnishader.SkinMesh");
        var e = t.prototype;
        return e.init = function(e, i, s) {
            if (i)
                this._vs = i;
            else {
                this._vs = [];
                var n = e.width
                  , r = e.height;
                this._vs.push(0, 0, 0, 0, 1, 1, 1, 1),
                this._vs.push(n, 0, 1, 0, 1, 1, 1, 1),
                this._vs.push(n, r, 1, 1, 1, 1, 1, 1),
                this._vs.push(0, r, 0, 1, 1, 1, 1, 1)
            }
            s ? this._ps = s : (t._defaultPS || (t._defaultPS = []).push(0, 1, 3, 3, 1, 2),
            this._ps = t._defaultPS),
            this.mVBData = new Float32Array(this._vs),
            this.mIBData = new Uint16Array(this._ps.length),
            this.mIBData.start = -1,
            this.mEleNum = this._ps.length,
            this.mTexture = e
        }
        ,
        e.init2 = function(t, e, i, s, n) {
            this.transform && (this.transform = null),
            i ? this._ps = i : (this._ps = [],
            this._ps.push(0, 1, 3, 3, 1, 2)),
            this._verticles = s,
            this._uvs = n,
            this.mEleNum = this._ps.length,
            this.mTexture = t,
            (X.isConchNode || X.isConchApp) && (this._initMyData(),
            this.mVBData = new Float32Array(this._vs))
        }
        ,
        e._initMyData = function() {
            var e = 0
              , i = 0
              , s = 4 * this._verticles.length;
            this._vs = t._tempVS;
            var n = !1;
            if (X.isConchNode || X.isConchApp ? (this._vs.length = s,
            n = !0) : this._vs.length < s && (this._vs.length = s,
            n = !0),
            t._tVSLen = s,
            n)
                for (; e < s; )
                    this._vs[e] = this._verticles[i],
                    this._vs[e + 1] = this._verticles[i + 1],
                    this._vs[e + 2] = this._uvs[i],
                    this._vs[e + 3] = this._uvs[i + 1],
                    this._vs[e + 4] = 1,
                    this._vs[e + 5] = 1,
                    this._vs[e + 6] = 1,
                    this._vs[e + 7] = 1,
                    e += 8,
                    i += 2;
            else
                for (; e < s; )
                    this._vs[e] = this._verticles[i],
                    this._vs[e + 1] = this._verticles[i + 1],
                    this._vs[e + 2] = this._uvs[i],
                    this._vs[e + 3] = this._uvs[i + 1],
                    e += 8,
                    i += 2
        }
        ,
        e.getData2 = function(e, i, s) {
            this.mVBBuffer = e,
            this.mIBBuffer = i,
            this._initMyData(),
            e.appendEx2(this._vs, Float32Array, t._tVSLen, 4),
            this._indexStart = i._byteLength;
            var n;
            (n = t._tempIB).length < this._ps.length && (n.length = this._ps.length);
            for (var r = 0, a = this._ps.length; r < a; r++)
                n[r] = this._ps[r] + s;
            i.appendEx2(n, Uint16Array, this._ps.length, 2)
        }
        ,
        e.getData = function(t, e, i) {
            if (this.mVBBuffer = t,
            this.mIBBuffer = e,
            t.append(this.mVBData),
            this._indexStart = e._byteLength,
            this.mIBData.start != i) {
                for (var s = 0, n = this._ps.length; s < n; s++)
                    this.mIBData[s] = this._ps[s] + i;
                this.mIBData.start = i
            }
            e.append(this.mIBData)
        }
        ,
        e.render = function(t, e, i) {
            if (X.isWebGL && this.mTexture) {
                t._renderKey = 0,
                t._shader2D.glTexture = null,
                Pt.getInstance().addSkinMesh(this);
                var s = Nt.createShape(t, this.mIBBuffer, this.mVBBuffer, this.mEleNum, this._indexStart, fe.create(512, 0));
                this.transform || (this.transform = k.EMPTY),
                this.transform.translate(e, i),
                k.mul(this.transform, t._curMat, this._tempMatrix),
                this.transform.translate(-e, -i);
                var n = s.shaderValue
                  , r = n.u_mmat2 || Kt.getMatrArray();
                Kt.mat2MatArray(this._tempMatrix, r),
                n.textureHost = this.mTexture,
                n.offsetX = 0,
                n.offsetY = 0,
                n.u_mmat2 = r,
                n.ALPHA = t._shader2D.ALPHA,
                t._submits[t._submits._length++] = s
            } else
                X.isConchApp && this.mTexture && (this.transform || (this.transform = k.EMPTY),
                t.setSkinMesh && t.setSkinMesh(e, i, this._ps, this.mVBData, this.mEleNum, 0, this.mTexture, this.transform))
        }
        ,
        t._tempVS = [],
        t._tempIB = [],
        t._defaultPS = null,
        t._tVSLen = 0,
        t
    }()
      , Pt = function() {
        function t() {
            this.ib = null,
            this.vb = null;
            qt.mainContext;
            this.ib = si.create(35048),
            this.vb = ni.create(8)
        }
        n(t, "laya.webgl.shader.d2.skinAnishader.SkinMeshBuffer");
        var e = t.prototype;
        return e.addSkinMesh = function(t) {
            t.getData2(this.vb, this.ib, this.vb._byteLength / 32)
        }
        ,
        e.reset = function() {
            this.vb.clear(),
            this.ib.clear()
        }
        ,
        t.getInstance = function() {
            return t.instance = t.instance || new t
        }
        ,
        t.instance = null,
        t
    }()
      , Ft = function() {
        function t(t, e, i, s, n, r, a, o, h) {
            this.r0 = 0,
            this.fill = !0,
            this.r1 = Math.PI / 2,
            void 0 === h && (h = 0),
            this.x = t,
            this.y = e,
            this.width = i,
            this.height = s,
            this.edges = n,
            this.color = r,
            this.borderWidth = a,
            this.borderColor = o
        }
        n(t, "laya.webgl.shapes.BasePoly");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.shapes.IShape": !0
        }),
        e.getData = function(t, e, i) {}
        ,
        e.rebuild = function(t) {}
        ,
        e.setMatrix = function(t) {}
        ,
        e.needUpdate = function(t) {
            return !0
        }
        ,
        e.sector = function(t, e, i) {
            var s = this.x
              , n = this.y
              , r = this.edges
              , a = (this.r1 - this.r0) / r
              , o = this.width
              , h = this.height
              , l = this.color
              , u = (l >> 16 & 255) / 255
              , c = (l >> 8 & 255) / 255
              , _ = (255 & l) / 255;
            t.push(s, n, u, c, _);
            for (var d = 0; d < r + 1; d++)
                t.push(s + Math.sin(a * d + this.r0) * o, n + Math.cos(a * d + this.r0) * h),
                t.push(u, c, _);
            for (d = 0; d < r; d++)
                e.push(i, i + d + 1, i + d + 2)
        }
        ,
        e.createLine2 = function(t, e, i, s, n, r) {
            var a, o, h, l, u, c, _, d, f, p, g, m, v, y, x, b, T, w, S, C, A = t.concat(), M = n, E = this.borderColor, I = (E >> 16 & 255) / 255, R = (E >> 8 & 255) / 255, L = (255 & E) / 255, P = A.length / 2, F = s, D = i / 2;
            h = A[0],
            l = A[1],
            p = h - (u = A[2]),
            f = (f = -(l - (c = A[3]))) / (C = Math.sqrt(f * f + p * p)) * D,
            p = p / C * D,
            M.push(h - f + this.x, l - p + this.y, I, R, L, h + f + this.x, l + p + this.y, I, R, L);
            for (var B = 1; B < P - 1; B++)
                h = A[2 * (B - 1)],
                l = A[2 * (B - 1) + 1],
                u = A[2 * B],
                c = A[2 * B + 1],
                _ = A[2 * (B + 1)],
                d = A[2 * (B + 1) + 1],
                p = h - u,
                m = u - _,
                x = (-(f = (f = -(l - c)) / (C = Math.sqrt(f * f + p * p)) * D) + h) * (-(p = p / C * D) + c) - (-f + u) * (-p + l),
                w = (-(g = (g = -(c - d)) / (C = Math.sqrt(g * g + m * m)) * D) + _) * (-(m = m / C * D) + c) - (-g + u) * (-m + d),
                S = (v = -p + l - (-p + c)) * (T = -g + u - (-g + _)) - (b = -m + d - (-m + c)) * (y = -f + u - (-f + h)),
                Math.abs(S) < .1 ? (S += 10.1,
                M.push(u - f + this.x, c - p + this.y, I, R, L, u + f + this.x, c + p + this.y, I, R, L)) : (((a = (y * w - T * x) / S) - u) * (a - u) + ((o = (b * x - v * w) / S) - c) + (o - c),
                M.push(a + this.x, o + this.y, I, R, L, u - (a - u) + this.x, c - (o - c) + this.y, I, R, L));
            h = A[A.length - 4],
            l = A[A.length - 3],
            p = h - (u = A[A.length - 2]),
            f = (f = -(l - (c = A[A.length - 1]))) / (C = Math.sqrt(f * f + p * p)) * D,
            p = p / C * D,
            M.push(u - f + this.x, c - p + this.y, I, R, L, u + f + this.x, c + p + this.y, I, R, L);
            var N = r;
            for (B = 1; B < N; B++)
                e.push(F + 2 * (B - 1), F + 2 * (B - 1) + 1, F + 2 * B + 1, F + 2 * B + 1, F + 2 * B, F + 2 * (B - 1));
            return M
        }
        ,
        e.createLine = function(t, e, i, s) {
            var n = t.concat()
              , r = t
              , a = this.borderColor
              , o = (a >> 16 & 255) / 255
              , h = (a >> 8 & 255) / 255
              , l = (255 & a) / 255;
            n.splice(0, 5);
            var u, c, _, d, f, p, g, m, v, y, x, b, T, w, S, C, A, M, E, I, R = n.length / 5, L = s, P = i / 2;
            _ = n[0],
            d = n[1],
            y = _ - (f = n[5]),
            v = (v = -(d - (p = n[6]))) / (I = Math.sqrt(v * v + y * y)) * P,
            y = y / I * P,
            r.push(_ - v, d - y, o, h, l, _ + v, d + y, o, h, l);
            for (var F = 1; F < R - 1; F++)
                _ = n[5 * (F - 1)],
                d = n[5 * (F - 1) + 1],
                f = n[5 * F],
                p = n[5 * F + 1],
                g = n[5 * (F + 1)],
                m = n[5 * (F + 1) + 1],
                y = _ - f,
                b = f - g,
                S = (-(v = (v = -(d - p)) / (I = Math.sqrt(v * v + y * y)) * P) + _) * (-(y = y / I * P) + p) - (-v + f) * (-y + d),
                M = (-(x = (x = -(p - m)) / (I = Math.sqrt(x * x + b * b)) * P) + g) * (-(b = b / I * P) + p) - (-x + f) * (-b + m),
                E = (T = -y + d - (-y + p)) * (A = -x + f - (-x + g)) - (C = -b + m - (-b + p)) * (w = -v + f - (-v + _)),
                Math.abs(E) < .1 ? (E += 10.1,
                r.push(f - v, p - y, o, h, l, f + v, p + y, o, h, l)) : (((u = (w * M - A * S) / E) - f) * (u - f) + ((c = (C * S - T * M) / E) - p) + (c - p),
                r.push(u, c, o, h, l, f - (u - f), p - (c - p), o, h, l));
            _ = n[n.length - 10],
            d = n[n.length - 9],
            y = _ - (f = n[n.length - 5]),
            v = (v = -(d - (p = n[n.length - 4]))) / (I = Math.sqrt(v * v + y * y)) * P,
            y = y / I * P,
            r.push(f - v, p - y, o, h, l, f + v, p + y, o, h, l);
            var D = this.edges + 1;
            for (F = 1; F < D; F++)
                e.push(L + 2 * (F - 1), L + 2 * (F - 1) + 1, L + 2 * F + 1, L + 2 * F + 1, L + 2 * F, L + 2 * (F - 1));
            return r
        }
        ,
        e.createLoopLine = function(t, e, i, s, n, r) {
            var a = t.concat()
              , o = n || t
              , h = this.borderColor
              , l = (h >> 16 & 255) / 255
              , u = (h >> 8 & 255) / 255
              , c = (255 & h) / 255;
            a.splice(0, 5);
            var _ = [a[0], a[1]]
              , d = [a[a.length - 5], a[a.length - 4]]
              , f = d[0] + .5 * (_[0] - d[0])
              , p = d[1] + .5 * (_[1] - d[1]);
            a.unshift(f, p, 0, 0, 0),
            a.push(f, p, 0, 0, 0);
            var g, m, v, y, x, b, T, w, S, C, A, M, E, I, R, L, P, F, D, B, N = a.length / 5, O = s, k = i / 2;
            v = a[0],
            y = a[1],
            C = v - (x = a[5]),
            S = (S = -(y - (b = a[6]))) / (B = Math.sqrt(S * S + C * C)) * k,
            C = C / B * k,
            o.push(v - S, y - C, l, u, c, v + S, y + C, l, u, c);
            for (var U = 1; U < N - 1; U++)
                v = a[5 * (U - 1)],
                y = a[5 * (U - 1) + 1],
                x = a[5 * U],
                b = a[5 * U + 1],
                T = a[5 * (U + 1)],
                w = a[5 * (U + 1) + 1],
                C = v - x,
                M = x - T,
                R = (-(S = (S = -(y - b)) / (B = Math.sqrt(S * S + C * C)) * k) + v) * (-(C = C / B * k) + b) - (-S + x) * (-C + y),
                F = (-(A = (A = -(b - w)) / (B = Math.sqrt(A * A + M * M)) * k) + T) * (-(M = M / B * k) + b) - (-A + x) * (-M + w),
                D = (E = -C + y - (-C + b)) * (P = -A + x - (-A + T)) - (L = -M + w - (-M + b)) * (I = -S + x - (-S + v)),
                Math.abs(D) < .1 ? (D += 10.1,
                o.push(x - S, b - C, l, u, c, x + S, b + C, l, u, c)) : (((g = (I * F - P * R) / D) - x) * (g - x) + ((m = (L * R - E * F) / D) - b) + (m - b),
                o.push(g, m, l, u, c, x - (g - x), b - (m - b), l, u, c));
            r && (e = r);
            var V = this.edges + 1;
            for (U = 1; U < V; U++)
                e.push(O + 2 * (U - 1), O + 2 * (U - 1) + 1, O + 2 * U + 1, O + 2 * U + 1, O + 2 * U, O + 2 * (U - 1));
            return e.push(O + 2 * (U - 1), O + 2 * (U - 1) + 1, O + 1, O + 1, O, O + 2 * (U - 1)),
            o
        }
        ,
        t
    }()
      , Dt = function() {
        function t() {}
        return n(t, "laya.webgl.shapes.Earcut"),
        t.earcut = function(e, i, s) {
            s = s || 2;
            var n = i && i.length
              , r = n ? i[0] * s : e.length
              , a = t.linkedList(e, 0, r, s, !0)
              , o = [];
            if (!a)
                return o;
            var h, l, u, c, _, d, f;
            if (n && (a = t.eliminateHoles(e, i, a, s)),
            e.length > 80 * s) {
                h = u = e[0],
                l = c = e[1];
                for (var p = s; p < r; p += s)
                    _ = e[p],
                    d = e[p + 1],
                    _ < h && (h = _),
                    d < l && (l = d),
                    _ > u && (u = _),
                    d > c && (c = d);
                f = 0 !== (f = Math.max(u - h, c - l)) ? 1 / f : 0
            }
            return t.earcutLinked(a, o, s, h, l, f),
            o
        }
        ,
        t.linkedList = function(e, i, s, n, r) {
            var a, o;
            if (r === t.signedArea(e, i, s, n) > 0)
                for (a = i; a < s; a += n)
                    o = t.insertNode(a, e[a], e[a + 1], o);
            else
                for (a = s - n; a >= i; a -= n)
                    o = t.insertNode(a, e[a], e[a + 1], o);
            return o && t.equals(o, o.next) && (t.removeNode(o),
            o = o.next),
            o
        }
        ,
        t.filterPoints = function(e, i) {
            if (!e)
                return e;
            i || (i = e);
            var s, n = e;
            do {
                if (s = !1,
                n.steiner || !t.equals(n, n.next) && 0 !== t.area(n.prev, n, n.next))
                    n = n.next;
                else {
                    if (t.removeNode(n),
                    (n = i = n.prev) === n.next)
                        break;
                    s = !0
                }
            } while (s || n !== i);
            return i
        }
        ,
        t.earcutLinked = function(e, i, s, n, r, a, o) {
            if (e) {
                !o && a && t.indexCurve(e, n, r, a);
                for (var h, l, u = e; e.prev !== e.next; )
                    if (h = e.prev,
                    l = e.next,
                    a ? t.isEarHashed(e, n, r, a) : t.isEar(e))
                        i.push(h.i / s),
                        i.push(e.i / s),
                        i.push(l.i / s),
                        t.removeNode(e),
                        e = l.next,
                        u = l.next;
                    else if ((e = l) === u) {
                        o ? 1 === o ? (e = t.cureLocalIntersections(e, i, s),
                        t.earcutLinked(e, i, s, n, r, a, 2)) : 2 === o && t.splitEarcut(e, i, s, n, r, a) : t.earcutLinked(t.filterPoints(e, null), i, s, n, r, a, 1);
                        break
                    }
            }
        }
        ,
        t.isEar = function(e) {
            var i = e.prev
              , s = e
              , n = e.next;
            if (t.area(i, s, n) >= 0)
                return !1;
            for (var r = e.next.next; r !== e.prev; ) {
                if (t.pointInTriangle(i.x, i.y, s.x, s.y, n.x, n.y, r.x, r.y) && t.area(r.prev, r, r.next) >= 0)
                    return !1;
                r = r.next
            }
            return !0
        }
        ,
        t.isEarHashed = function(e, i, s, n) {
            var r = e.prev
              , a = e
              , o = e.next;
            if (t.area(r, a, o) >= 0)
                return !1;
            for (var h = r.x < a.x ? r.x < o.x ? r.x : o.x : a.x < o.x ? a.x : o.x, l = r.y < a.y ? r.y < o.y ? r.y : o.y : a.y < o.y ? a.y : o.y, u = r.x > a.x ? r.x > o.x ? r.x : o.x : a.x > o.x ? a.x : o.x, c = r.y > a.y ? r.y > o.y ? r.y : o.y : a.y > o.y ? a.y : o.y, _ = t.zOrder(h, l, i, s, n), d = t.zOrder(u, c, i, s, n), f = e.nextZ; f && f.z <= d; ) {
                if (f !== e.prev && f !== e.next && t.pointInTriangle(r.x, r.y, a.x, a.y, o.x, o.y, f.x, f.y) && t.area(f.prev, f, f.next) >= 0)
                    return !1;
                f = f.nextZ
            }
            for (f = e.prevZ; f && f.z >= _; ) {
                if (f !== e.prev && f !== e.next && t.pointInTriangle(r.x, r.y, a.x, a.y, o.x, o.y, f.x, f.y) && t.area(f.prev, f, f.next) >= 0)
                    return !1;
                f = f.prevZ
            }
            return !0
        }
        ,
        t.cureLocalIntersections = function(e, i, s) {
            var n = e;
            do {
                var r = n.prev
                  , a = n.next.next;
                !t.equals(r, a) && t.intersects(r, n, n.next, a) && t.locallyInside(r, a) && t.locallyInside(a, r) && (i.push(r.i / s),
                i.push(n.i / s),
                i.push(a.i / s),
                t.removeNode(n),
                t.removeNode(n.next),
                n = e = a),
                n = n.next
            } while (n !== e);
            return n
        }
        ,
        t.splitEarcut = function(e, i, s, n, r, a) {
            var o = e;
            do {
                for (var h = o.next.next; h !== o.prev; ) {
                    if (o.i !== h.i && t.isValidDiagonal(o, h)) {
                        var l = t.splitPolygon(o, h);
                        return o = t.filterPoints(o, o.next),
                        l = t.filterPoints(l, l.next),
                        t.earcutLinked(o, i, s, n, r, a),
                        void t.earcutLinked(l, i, s, n, r, a)
                    }
                    h = h.next
                }
                o = o.next
            } while (o !== e)
        }
        ,
        t.eliminateHoles = function(e, i, s, n) {
            var r, a, o, h, l, u = [];
            for (r = 0,
            a = i.length; r < a; r++)
                o = i[r] * n,
                h = r < a - 1 ? i[r + 1] * n : e.length,
                (l = t.linkedList(e, o, h, n, !1)) === l.next && (l.steiner = !0),
                u.push(t.getLeftmost(l));
            for (u.sort(t.compareX),
            r = 0; r < u.length; r++)
                t.eliminateHole(u[r], s),
                s = t.filterPoints(s, s.next);
            return s
        }
        ,
        t.compareX = function(t, e) {
            return t.x - e.x
        }
        ,
        t.eliminateHole = function(e, i) {
            if (i = t.findHoleBridge(e, i)) {
                var s = t.splitPolygon(i, e);
                t.filterPoints(s, s.next)
            }
        }
        ,
        t.findHoleBridge = function(e, i) {
            var s, n = i, r = e.x, a = e.y, o = -1 / 0;
            do {
                if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
                    var h = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                    if (h <= r && h > o) {
                        if (o = h,
                        h === r) {
                            if (a === n.y)
                                return n;
                            if (a === n.next.y)
                                return n.next
                        }
                        s = n.x < n.next.x ? n : n.next
                    }
                }
                n = n.next
            } while (n !== i);
            if (!s)
                return null;
            if (r === o)
                return s.prev;
            var l, u = s, c = s.x, _ = s.y, d = 1 / 0;
            for (n = s.next; n !== u; )
                r >= n.x && n.x >= c && r !== n.x && t.pointInTriangle(a < _ ? r : o, a, c, _, a < _ ? o : r, a, n.x, n.y) && ((l = Math.abs(a - n.y) / (r - n.x)) < d || l === d && n.x > s.x) && t.locallyInside(n, e) && (s = n,
                d = l),
                n = n.next;
            return s
        }
        ,
        t.indexCurve = function(e, i, s, n) {
            var r = e;
            do {
                null === r.z && (r.z = t.zOrder(r.x, r.y, i, s, n)),
                r.prevZ = r.prev,
                r.nextZ = r.next,
                r = r.next
            } while (r !== e);
            r.prevZ.nextZ = null,
            r.prevZ = null,
            t.sortLinked(r)
        }
        ,
        t.sortLinked = function(t) {
            var e, i, s, n, r, a, o, h, l = 1;
            do {
                for (i = t,
                t = null,
                r = null,
                a = 0; i; ) {
                    for (a++,
                    s = i,
                    o = 0,
                    e = 0; e < l && (o++,
                    s = s.nextZ); e++)
                        ;
                    for (h = l; o > 0 || h > 0 && s; )
                        0 !== o && (0 === h || !s || i.z <= s.z) ? (n = i,
                        i = i.nextZ,
                        o--) : (n = s,
                        s = s.nextZ,
                        h--),
                        r ? r.nextZ = n : t = n,
                        n.prevZ = r,
                        r = n;
                    i = s
                }
                r.nextZ = null,
                l *= 2
            } while (a > 1);
            return t
        }
        ,
        t.zOrder = function(t, e, i, s, n) {
            return t = 32767 * (t - i) * n,
            e = 32767 * (e - s) * n,
            t = 16711935 & (t | t << 8),
            t = 252645135 & (t | t << 4),
            t = 858993459 & (t | t << 2),
            t = 1431655765 & (t | t << 1),
            e = 16711935 & (e | e << 8),
            e = 252645135 & (e | e << 4),
            e = 858993459 & (e | e << 2),
            e = 1431655765 & (e | e << 1),
            t | e << 1
        }
        ,
        t.getLeftmost = function(t) {
            var e = t
              , i = t;
            do {
                e.x < i.x && (i = e),
                e = e.next
            } while (e !== t);
            return i
        }
        ,
        t.pointInTriangle = function(t, e, i, s, n, r, a, o) {
            return (n - a) * (e - o) - (t - a) * (r - o) >= 0 && (t - a) * (s - o) - (i - a) * (e - o) >= 0 && (i - a) * (r - o) - (n - a) * (s - o) >= 0
        }
        ,
        t.isValidDiagonal = function(e, i) {
            return e.next.i !== i.i && e.prev.i !== i.i && !t.intersectsPolygon(e, i) && t.locallyInside(e, i) && t.locallyInside(i, e) && t.middleInside(e, i)
        }
        ,
        t.area = function(t, e, i) {
            return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
        }
        ,
        t.equals = function(t, e) {
            return t.x === e.x && t.y === e.y
        }
        ,
        t.intersects = function(e, i, s, n) {
            return !!(t.equals(e, i) && t.equals(s, n) || t.equals(e, n) && t.equals(s, i)) || t.area(e, i, s) > 0 != t.area(e, i, n) > 0 && t.area(s, n, e) > 0 != t.area(s, n, i) > 0
        }
        ,
        t.intersectsPolygon = function(e, i) {
            var s = e;
            do {
                if (s.i !== e.i && s.next.i !== e.i && s.i !== i.i && s.next.i !== i.i && t.intersects(s, s.next, e, i))
                    return !0;
                s = s.next
            } while (s !== e);
            return !1
        }
        ,
        t.locallyInside = function(e, i) {
            return t.area(e.prev, e, e.next) < 0 ? t.area(e, i, e.next) >= 0 && t.area(e, e.prev, i) >= 0 : t.area(e, i, e.prev) < 0 || t.area(e, e.next, i) < 0
        }
        ,
        t.middleInside = function(t, e) {
            var i = t
              , s = !1
              , n = (t.x + e.x) / 2
              , r = (t.y + e.y) / 2;
            do {
                i.y > r != i.next.y > r && i.next.y !== i.y && n < (i.next.x - i.x) * (r - i.y) / (i.next.y - i.y) + i.x && (s = !s),
                i = i.next
            } while (i !== t);
            return s
        }
        ,
        t.splitPolygon = function(t, e) {
            var i = new Bt(t.i,t.x,t.y)
              , s = new Bt(e.i,e.x,e.y)
              , n = t.next
              , r = e.prev;
            return t.next = e,
            e.prev = t,
            i.next = n,
            n.prev = i,
            s.next = i,
            i.prev = s,
            r.next = s,
            s.prev = r,
            s
        }
        ,
        t.insertNode = function(t, e, i, s) {
            var n = new Bt(t,e,i);
            return s ? (n.next = s.next,
            n.prev = s,
            s.next.prev = n,
            s.next = n) : (n.prev = n,
            n.next = n),
            n
        }
        ,
        t.removeNode = function(t) {
            t.next.prev = t.prev,
            t.prev.next = t.next,
            t.prevZ && (t.prevZ.nextZ = t.nextZ),
            t.nextZ && (t.nextZ.prevZ = t.prevZ)
        }
        ,
        t.signedArea = function(t, e, i, s) {
            for (var n = 0, r = e, a = i - s; r < i; r += s)
                n += (t[a] - t[r]) * (t[r + 1] + t[a + 1]),
                a = r;
            return n
        }
        ,
        t
    }()
      , Bt = function() {
        function t(t, e, i) {
            this.i = null,
            this.x = null,
            this.y = null,
            this.prev = null,
            this.next = null,
            this.z = null,
            this.prevZ = null,
            this.nextZ = null,
            this.steiner = null,
            this.i = t,
            this.x = e,
            this.y = i,
            this.prev = null,
            this.next = null,
            this.z = null,
            this.prevZ = null,
            this.nextZ = null,
            this.steiner = !1
        }
        return n(t, "laya.webgl.shapes.EarcutNode"),
        t
    }()
      , Nt = function() {
        function t(t) {
            void 0 === t && (t = 1e4),
            this._renderType = t
        }
        n(t, "laya.webgl.submit.Submit");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.submit.ISubmit": !0
        }),
        e.releaseRender = function() {
            var e = t._cache;
            e[e._length++] = this,
            this.shaderValue.release(),
            this._vb = null
        }
        ,
        e.getRenderType = function() {
            return this._renderType
        }
        ,
        e.renderSubmit = function() {
            if (0 === this._numEle)
                return 1;
            var t = this.shaderValue.textureHost;
            if (t) {
                var e = t.source;
                if (!t.bitmap || !e)
                    return 1;
                this.shaderValue.texture = e
            }
            this._vb.bind_upload(this._ib);
            var i = qt.mainContext;
            return this.shaderValue.upload(),
            yt.activeBlendFunction !== this._blendFn && (i.enable(3042),
            this._blendFn(i),
            yt.activeBlendFunction = this._blendFn),
            ht.drawCall++,
            ht.trianglesFaces += this._numEle / 3,
            i.drawElements(4, this._numEle, 5123, this._startIdx),
            1
        }
        ,
        t.__init__ = function() {
            var e = t.RENDERBASE = new t(-1);
            e.shaderValue = new fe(0,0),
            e.shaderValue.ALPHA = -1234
        }
        ,
        t.createSubmit = function(e, i, s, n, r) {
            var a = t._cache._length ? t._cache[--t._cache._length] : new t;
            null == s && ((s = a._selfVb || (a._selfVb = ni.create(-1))).clear(),
            n = 0),
            a._ib = i,
            a._vb = s,
            a._startIdx = n * Xt.BYTES_PIDX,
            a._numEle = 0;
            var o = e._nBlendType;
            a._blendFn = e._targets ? yt.targetFns[o] : yt.fns[o],
            a.shaderValue = r,
            a.shaderValue.setValue(e._shader2D);
            var h = e._shader2D.filters;
            return h && a.shaderValue.setFilters(h),
            a
        }
        ,
        t.createShape = function(e, i, s, n, r, a) {
            var o = t._cache._length ? t._cache[--t._cache._length] : new t;
            o._ib = i,
            o._vb = s,
            o._numEle = n,
            o._startIdx = r,
            o.shaderValue = a,
            o.shaderValue.setValue(e._shader2D);
            var h = e._nBlendType;
            return o._blendFn = e._targets ? yt.targetFns[h] : yt.fns[h],
            o
        }
        ,
        t.TYPE_2D = 1e4,
        t.TYPE_CANVAS = 10003,
        t.TYPE_CMDSETRT = 10004,
        t.TYPE_CUSTOM = 10005,
        t.TYPE_BLURRT = 10006,
        t.TYPE_CMDDESTORYPRERT = 10007,
        t.TYPE_DISABLESTENCIL = 10008,
        t.TYPE_OTHERIBVB = 10009,
        t.TYPE_PRIMITIVE = 10010,
        t.TYPE_RT = 10011,
        t.TYPE_BLUR_RT = 10012,
        t.TYPE_TARGET = 10013,
        t.TYPE_CHANGE_VALUE = 10014,
        t.TYPE_SHAPE = 10015,
        t.TYPE_TEXTURE = 10016,
        t.TYPE_FILLTEXTURE = 10017,
        t.RENDERBASE = null,
        t._cache = (t._cache = [],
        t._cache._length = 0,
        t._cache),
        t
    }()
      , Ot = function() {
        function t() {
            this.fun = null,
            this.args = null
        }
        n(t, "laya.webgl.submit.SubmitCMD");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.submit.ISubmit": !0
        }),
        e.renderSubmit = function() {
            return this.fun.apply(null, this.args),
            1
        }
        ,
        e.getRenderType = function() {
            return 0
        }
        ,
        e.releaseRender = function() {
            var e = t._cache;
            e[e._length++] = this
        }
        ,
        t.create = function(e, i) {
            var s = t._cache._length ? t._cache[--t._cache._length] : new t;
            return s.fun = i,
            s.args = e,
            s
        }
        ,
        t._cache = (t._cache = [],
        t._cache._length = 0,
        t._cache),
        t
    }()
      , kt = function() {
        function t() {
            this.variables = {}
        }
        n(t, "laya.webgl.submit.SubmitCMDScope");
        var e = t.prototype;
        return e.getValue = function(t) {
            return this.variables[t]
        }
        ,
        e.addValue = function(t, e) {
            return this.variables[t] = e
        }
        ,
        e.setValue = function(t, e) {
            return this.variables.hasOwnProperty(t) ? this.variables[t] = e : null
        }
        ,
        e.clear = function() {
            for (var t in this.variables)
                delete this.variables[t]
        }
        ,
        e.recycle = function() {
            this.clear(),
            t.POOL.push(this)
        }
        ,
        t.create = function() {
            var e = t.POOL.pop();
            return e || (e = new t),
            e
        }
        ,
        t.POOL = [],
        t
    }()
      , Ut = function() {
        function t() {
            this.offset = 0,
            this.startIndex = 0,
            this._mat = k.create()
        }
        n(t, "laya.webgl.submit.SubmitOtherIBVB");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.submit.ISubmit": !0
        }),
        e.releaseRender = function() {
            var e = t._cache;
            e[e._length++] = this
        }
        ,
        e.getRenderType = function() {
            return 10009
        }
        ,
        e.renderSubmit = function() {
            var e = this._shaderValue.textureHost;
            if (e) {
                var i = e.source;
                if (!e.bitmap || !i)
                    return 1;
                this._shaderValue.texture = i
            }
            this._vb.bind_upload(this._ib);
            var s = Kt.worldMatrix4
              , n = k.TEMP;
            k.mulPre(this._mat, s[0], s[1], s[4], s[5], s[12], s[13], n);
            var r = Kt.worldMatrix4 = t.tempMatrix4;
            r[0] = n.a,
            r[1] = n.b,
            r[4] = n.c,
            r[5] = n.d,
            r[12] = n.tx,
            r[13] = n.ty,
            this._shader._offset = this.offset,
            this._shaderValue.refresh(),
            this._shader.upload(this._shaderValue),
            this._shader._offset = 0;
            var a = qt.mainContext;
            return yt.activeBlendFunction !== this._blendFn && (a.enable(3042),
            this._blendFn(a),
            yt.activeBlendFunction = this._blendFn),
            ht.drawCall++,
            ht.trianglesFaces += this._numEle / 3,
            a.drawElements(4, this._numEle, 5123, this.startIndex),
            Kt.worldMatrix4 = s,
            Me.activeShader = null,
            1
        }
        ,
        t.create = function(e, i, s, n, r, a, o, h, l) {
            void 0 === l && (l = 0);
            var u = t._cache._length ? t._cache[--t._cache._length] : new t;
            u._ib = s,
            u._vb = i,
            u._numEle = n,
            u._shader = r,
            u._shaderValue = a;
            var c = e._nBlendType;
            switch (u._blendFn = e._targets ? yt.targetFns[c] : yt.fns[c],
            l) {
            case 0:
                u.offset = 0,
                u.startIndex = h / (Xt.BYTES_PE * i.vertexStride) * 1.5,
                u.startIndex *= Xt.BYTES_PIDX;
                break;
            case 1:
                u.startIndex = o,
                u.offset = h
            }
            return u
        }
        ,
        t._cache = (t._cache = [],
        t._cache._length = 0,
        t._cache),
        t.tempMatrix4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        t
    }()
      , Vt = function() {
        function t() {
            this.submitIndex = 0,
            this.submitLength = 0,
            this.context = null,
            this.clipRect = new V,
            this.screenRect = new V
        }
        n(t, "laya.webgl.submit.SubmitScissor");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.submit.ISubmit": !0
        }),
        e._scissor = function(t, e, i, s) {
            var n = Kt.worldMatrix4
              , r = n[0]
              , a = n[5];
            if (t = t * r + n[12],
            e = e * a + n[13],
            i *= r,
            s *= a,
            i < 1 || s < 1)
                return !1;
            var o = t + i
              , h = e + s;
            t < 0 && (t = 0,
            i = o - t),
            e < 0 && (e = 0,
            s = h - e);
            var l = Kt.worldClipRect;
            if (t = Math.max(t, l.x),
            e = Math.max(e, l.y),
            i = Math.min(o, l.right) - t,
            s = Math.min(h, l.bottom) - e,
            i < 1 || s < 1)
                return !1;
            var u = Kt.worldScissorTest;
            return this.screenRect.copyFrom(l),
            l.x = t,
            l.y = e,
            l.width = i,
            l.height = s,
            Kt.worldScissorTest = !0,
            e = Kt.height - e - s,
            qt.mainContext.scissor(t, e, i, s),
            qt.mainContext.enable(3089),
            this.context.submitElement(this.submitIndex, this.submitIndex + this.submitLength),
            u ? (e = Kt.height - this.screenRect.y - this.screenRect.height,
            qt.mainContext.scissor(this.screenRect.x, e, this.screenRect.width, this.screenRect.height),
            qt.mainContext.enable(3089)) : (qt.mainContext.disable(3089),
            Kt.worldScissorTest = !1),
            l.copyFrom(this.screenRect),
            !0
        }
        ,
        e._scissorWithTagart = function(t, e, i, s) {
            if (i < 1 || s < 1)
                return !1;
            var n = t + i
              , r = e + s;
            t < 0 && (t = 0,
            i = n - t),
            e < 0 && (e = 0,
            s = r - e);
            var a = Kt.worldClipRect;
            if (t = Math.max(t, a.x),
            e = Math.max(e, a.y),
            i = Math.min(n, a.right) - t,
            s = Math.min(r, a.bottom) - e,
            i < 1 || s < 1)
                return !1;
            var o = Kt.worldScissorTest;
            return this.screenRect.copyFrom(a),
            Kt.worldScissorTest = !0,
            a.x = t,
            a.y = e,
            a.width = i,
            a.height = s,
            e = Kt.height - e - s,
            qt.mainContext.scissor(t, e, i, s),
            qt.mainContext.enable(3089),
            this.context.submitElement(this.submitIndex, this.submitIndex + this.submitLength),
            o ? (e = Kt.height - this.screenRect.y - this.screenRect.height,
            qt.mainContext.scissor(this.screenRect.x, e, this.screenRect.width, this.screenRect.height),
            qt.mainContext.enable(3089)) : (qt.mainContext.disable(3089),
            Kt.worldScissorTest = !1),
            a.copyFrom(this.screenRect),
            !0
        }
        ,
        e.renderSubmit = function() {
            return this.submitLength = Math.min(this.context._submits._length - 1, this.submitLength),
            this.submitLength < 1 || this.clipRect.width < 1 || this.clipRect.height < 1 ? this.submitLength + 1 : (this.context._targets ? this._scissorWithTagart(this.clipRect.x, this.clipRect.y, this.clipRect.width, this.clipRect.height) : this._scissor(this.clipRect.x, this.clipRect.y, this.clipRect.width, this.clipRect.height),
            this.submitLength + 1)
        }
        ,
        e.getRenderType = function() {
            return 0
        }
        ,
        e.releaseRender = function() {
            var e = t._cache;
            e[e._length++] = this,
            this.context = null
        }
        ,
        t.create = function(e) {
            var i = t._cache._length ? t._cache[--t._cache._length] : new t;
            return i.context = e,
            i
        }
        ,
        t._cache = (t._cache = [],
        t._cache._length = 0,
        t._cache),
        t
    }()
      , Gt = function() {
        function t() {
            this.step = 0,
            this.blendMode = null,
            this.level = 0
        }
        n(t, "laya.webgl.submit.SubmitStencil");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.submit.ISubmit": !0
        }),
        e.renderSubmit = function() {
            switch (this.step) {
            case 1:
                this.do1();
                break;
            case 2:
                this.do2();
                break;
            case 3:
                this.do3();
                break;
            case 4:
                this.do4();
                break;
            case 5:
                this.do5();
                break;
            case 6:
                this.do6();
                break;
            case 7:
                this.do7();
                break;
            case 8:
                this.do8()
            }
            return 1
        }
        ,
        e.getRenderType = function() {
            return 0
        }
        ,
        e.releaseRender = function() {
            var e = t._cache;
            e[e._length++] = this
        }
        ,
        e.do1 = function() {
            var t = qt.mainContext;
            t.enable(2960),
            t.clear(1024),
            t.colorMask(!1, !1, !1, !1),
            t.stencilFunc(514, this.level, 255),
            t.stencilOp(7680, 7680, 7682)
        }
        ,
        e.do2 = function() {
            var t = qt.mainContext;
            t.stencilFunc(514, this.level + 1, 255),
            t.colorMask(!0, !0, !0, !0),
            t.stencilOp(7680, 7680, 7680)
        }
        ,
        e.do3 = function() {
            var t = qt.mainContext;
            t.colorMask(!0, !0, !0, !0),
            t.stencilOp(7680, 7680, 7680),
            t.clear(1024),
            t.disable(2960)
        }
        ,
        e.do4 = function() {
            var t = qt.mainContext;
            0 == this.level && (t.enable(2960),
            t.clear(1024)),
            t.colorMask(!1, !1, !1, !1),
            t.stencilFunc(519, 0, 255),
            t.stencilOp(7680, 7680, 7682)
        }
        ,
        e.do5 = function() {
            var t = qt.mainContext;
            t.stencilFunc(514, this.level, 255),
            t.colorMask(!0, !0, !0, !0),
            t.stencilOp(7680, 7680, 7680)
        }
        ,
        e.do6 = function() {
            var t = qt.mainContext;
            yt.targetFns[yt.TOINT[this.blendMode]](t)
        }
        ,
        e.do7 = function() {
            var t = qt.mainContext;
            t.colorMask(!1, !1, !1, !1),
            t.stencilOp(7680, 7680, 7683)
        }
        ,
        e.do8 = function() {
            var t = qt.mainContext;
            t.colorMask(!0, !0, !0, !0),
            t.stencilFunc(514, this.level, 255),
            t.stencilOp(7680, 7680, 7680)
        }
        ,
        t.restore = function(e, i, s, n, r) {
            var a;
            if (e._renderKey = 0,
            t._mask > 0 && t._mask--,
            0 == t._mask)
                a = laya.webgl.submit.SubmitStencil.create(3),
                e.addRenderObject(a),
                e._curSubmit = Nt.RENDERBASE;
            else {
                a = laya.webgl.submit.SubmitStencil.create(7),
                e.addRenderObject(a);
                var o = e._vb;
                o._byteLength;
                if ($t.fillRectImgVb(o, null, i.x, i.y, i.width, i.height, he.DEF_UV, s, n, r, 0, 0)) {
                    e._shader2D.glTexture = null;
                    var h = e._curSubmit = Nt.createSubmit(e, e._ib, o, (o._byteLength - 64) / 32 * 3, fe.create(2, 0));
                    h.shaderValue.ALPHA = 1,
                    e._submits[e._submits._length++] = h,
                    e._curSubmit._numEle += 6,
                    e._curSubmit = Nt.RENDERBASE
                } else
                    alert("clipRect calc stencil rect error");
                a = laya.webgl.submit.SubmitStencil.create(8),
                e.addRenderObject(a)
            }
        }
        ,
        t.restore2 = function(e, i) {
            var s;
            e._renderKey = 0,
            t._mask > 0 && t._mask--,
            0 == t._mask ? (s = laya.webgl.submit.SubmitStencil.create(3),
            e.addRenderObject(s),
            e._curSubmit = Nt.RENDERBASE) : (s = laya.webgl.submit.SubmitStencil.create(7),
            e.addRenderObject(s),
            e._submits[e._submits._length++] = i,
            s = laya.webgl.submit.SubmitStencil.create(8),
            e.addRenderObject(s))
        }
        ,
        t.create = function(e) {
            var i = t._cache._length ? t._cache[--t._cache._length] : new t;
            return i.step = e,
            5 == e && ++t._mask,
            i.level = t._mask,
            i
        }
        ,
        t._cache = (t._cache = [],
        t._cache._length = 0,
        t._cache),
        t._mask = 0,
        t
    }()
      , Wt = function() {
        function t() {
            this._renderType = 0,
            this._vb = null,
            this._ib = null,
            this._startIdx = 0,
            this._numEle = 0,
            this.shaderValue = null,
            this.blendType = 0,
            this.proName = null,
            this.scope = null
        }
        n(t, "laya.webgl.submit.SubmitTarget");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.submit.ISubmit": !0
        }),
        e.renderSubmit = function() {
            this._vb.bind_upload(this._ib);
            var t = this.scope.getValue(this.proName);
            return t && (this.shaderValue.texture = t.source,
            this.shaderValue.strength && !this.shaderValue.blurInfo && (this.shaderValue.blurInfo = [t.width, t.height]),
            this.shaderValue.upload(),
            this.blend(),
            ht.drawCall++,
            ht.trianglesFaces += this._numEle / 3,
            qt.mainContext.drawElements(4, this._numEle, 5123, this._startIdx)),
            1
        }
        ,
        e.blend = function() {
            if (yt.activeBlendFunction !== yt.fns[this.blendType]) {
                var t = qt.mainContext;
                t.enable(3042),
                yt.fns[this.blendType](t),
                yt.activeBlendFunction = yt.fns[this.blendType]
            }
        }
        ,
        e.getRenderType = function() {
            return 0
        }
        ,
        e.releaseRender = function() {
            var e = t._cache;
            e[e._length++] = this
        }
        ,
        t.create = function(e, i, s, n, r, a) {
            var o = t._cache._length ? t._cache[--t._cache._length] : new t;
            return o._ib = i,
            o._vb = s,
            o.proName = a,
            o._startIdx = n * Xt.BYTES_PIDX,
            o._numEle = 0,
            o.blendType = e._nBlendType,
            o.shaderValue = r,
            o.shaderValue.setValue(e._shader2D),
            o
        }
        ,
        t._cache = (t._cache = [],
        t._cache._length = 0,
        t._cache),
        t
    }()
      , zt = function() {
        function t() {
            this._sourceStr = null
        }
        n(t, "laya.webgl.text.CharSegment");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.text.ICharSegment": !0
        }),
        e.textToSpit = function(t) {
            this._sourceStr = t
        }
        ,
        e.getChar = function(t) {
            return this._sourceStr.charAt(t)
        }
        ,
        e.getCharCode = function(t) {
            return this._sourceStr.charCodeAt(t)
        }
        ,
        e.length = function() {
            return this._sourceStr.length
        }
        ,
        t
    }()
      , Ht = function() {
        function t() {}
        var e;
        return n(t, "laya.webgl.text.DrawText"),
        t.__init__ = function() {
            t._charsTemp = new Array,
            t._drawValue = new e,
            t._charSeg = new zt
        }
        ,
        t.customCharSeg = function(e) {
            t._charSeg = e
        }
        ,
        t.getChar = function(e, i, s) {
            var n = je.createOneChar(e, s);
            return -1 != i && (t._charsCache[i] = n),
            n
        }
        ,
        t._drawSlow = function(e, i, s, n, r, a, o, h, l, u, c, _, d, f, p) {
            var g, m, v = t._drawValue.value(a, h, l, u, d, f, p), y = 0, x = 0, b = t._charsTemp, T = 0, w = NaN;
            if (n)
                for (b.length = n.length,
                y = 0,
                x = n.length; y < x; y++)
                    w = (m = n[y]).charNum + v.txtID,
                    b[y] = g = t._charsCache[w] || t.getChar(m.char, w, v),
                    g.active();
            else {
                var S = s instanceof laya.utils.WordText ? s.toString() : s;
                if (Oe.CharacterCache) {
                    t._charSeg.textToSpit(S);
                    var C = t._charSeg.length();
                    for (b.length = C,
                    y = 0,
                    x = C; y < x; y++)
                        w = t._charSeg.getCharCode(y) + v.txtID,
                        b[y] = g = t._charsCache[w] || t.getChar(t._charSeg.getChar(y), w, v),
                        g.active(),
                        T += g.cw
                } else
                    b.length = 0,
                    (g = t.getChar(S, -1, v)).active(),
                    T += g.cw,
                    b[0] = g
            }
            var A = 0;
            null !== o && "left" !== o && (A = -("center" == o ? T / 2 : T));
            var M, E, I = NaN, R = 0;
            if (n)
                for (y = 0,
                x = b.length; y < x; y++)
                    (g = b[y]).isSpace || (m = n[y],
                    I = g.borderSize,
                    M = g.texture,
                    i._drawText(M, c + A + m.x * d - I, _ + m.y * f - I, M.width, M.height, r, 0, 0, 0, 0));
            else {
                for (y = 0,
                x = b.length; y < x; y++)
                    (g = b[y]).isSpace || (I = g.borderSize,
                    M = g.texture,
                    i._drawText(M, c + A - I, _ - I, M.width, M.height, r, 0, 0, 0, 0),
                    e && ((E = e[R++]) || (E = e[R - 1] = []),
                    E[0] = M,
                    E[1] = A - I,
                    E[2] = -I)),
                    A += g.cw;
                e && (e.length = R)
            }
        }
        ,
        t._drawFast = function(t, e, i, s, n) {
            for (var r, a, o = 0, h = t.length; o < h; o++)
                (r = (a = t[o])[0]).active(),
                e._drawText(r, s + a[1], n + a[2], r.width, r.height, i, 0, 0, 0, 0)
        }
        ,
        t.drawText = function(e, s, n, r, a, o, h, l, u, c, _, d) {
            if (void 0 === d && (d = 0),
            !(s && 0 === s.length || n && 0 === n.length)) {
                var f = r.a
                  , p = r.d;
                (0 !== r.b || 0 !== r.c) && (f = p = 1);
                var g = 1 !== f || 1 !== p;
                if (g && i.stage.transform) {
                    var m = i.stage.transform;
                    g = m.a === f && m.d === p
                } else
                    g = !1;
                if (g) {
                    var v = (r = r.copyTo(pe._tmpMatrix)).tx
                      , x = r.ty;
                    r.scale(1 / f, 1 / p),
                    r._checkTransform(),
                    c *= f,
                    _ *= p,
                    c += v - r.tx,
                    _ += x - r.ty
                } else
                    f = p = 1;
                if (n)
                    t._drawSlow(null, e, s, n, r, a, o, h, l, u, c, _, f, p, d);
                else {
                    if (null === s.toUpperCase) {
                        var b = f + 1e5 * p
                          , T = s;
                        return void (T.changed || T.id !== b ? (T.id = b,
                        T.changed = !1,
                        t._drawSlow(T.save, e, s, n, r, a, o, h, l, u, c, _, f, p, d)) : t._drawFast(T.save, e, r, c, _))
                    }
                    var w = s + a.toString() + h + l + u + f + p + o
                      , S = t._textsCache[w];
                    Oe.CharacterCache ? S ? t._drawFast(S, e, r, c, _) : (t._textsCache.__length || (t._textsCache.__length = 0),
                    t._textsCache.__length > y.WebGLTextCacheCount && ((t._textsCache = {}).__length = 0,
                    t._curPoolIndex = 0),
                    t._textCachesPool[t._curPoolIndex] ? (S = t._textsCache[w] = t._textCachesPool[t._curPoolIndex],
                    S.length = 0) : t._textCachesPool[t._curPoolIndex] = S = t._textsCache[w] = [],
                    t._textsCache.__length++,
                    t._curPoolIndex++,
                    t._drawSlow(S, e, s, n, r, a, o, h, l, u, c, _, f, p, d)) : t._drawSlow(S, e, s, n, r, a, o, h, l, u, c, _, f, p, d)
                }
            }
        }
        ,
        t._charsTemp = null,
        t._textCachesPool = [],
        t._curPoolIndex = 0,
        t._charsCache = {},
        t._textsCache = {},
        t._drawValue = null,
        t.d = [],
        t._charSeg = null,
        t.__init$ = function() {
            e = function() {
                function t() {}
                n(t, "");
                return t.prototype.value = function(e, i, s, n, r, a, o) {
                    this.font = e,
                    this.fillColor = i,
                    this.borderColor = s,
                    this.lineWidth = n,
                    this.scaleX = r,
                    this.scaleY = a,
                    this.underLine = o;
                    var h = e.toString() + r + a + n + i + s + o;
                    return this.txtID = t._keymap[h],
                    this.txtID || (this.txtID = 1e-7 * ++t._keymapCount,
                    t._keymap[h] = this.txtID),
                    this
                }
                ,
                t.clear = function() {
                    t._keymap = {},
                    t._keymapCount = 1
                }
                ,
                t._keymap = {},
                t._keymapCount = 1,
                t
            }()
        }
        ,
        t
    }()
      , Yt = function() {
        function t(e) {
            this._index = 0,
            this._size = 14,
            this._italic = -2,
            t._cache2 = t._cache2 || [],
            this.setFont(e || "14px Arial")
        }
        n(t, "laya.webgl.text.FontInContext");
        var e = t.prototype;
        return e.setFont = function(e) {
            var i = t._cache2[e];
            if (i)
                this._words = i[0],
                this._size = i[1];
            else {
                this._words = e.split(" ");
                for (var s = 0, n = this._words.length; s < n; s++)
                    if (this._words[s].indexOf("px") > 0) {
                        this._index = s;
                        break
                    }
                this._size = parseInt(this._words[this._index]),
                t._cache2[e] = [this._words, this._size]
            }
            this._text = null,
            this._italic = -2
        }
        ,
        e.getItalic = function() {
            return -2 === this._italic && (this._italic = this.hasType("italic")),
            this._italic
        }
        ,
        e.hasType = function(t) {
            for (var e = 0, i = this._words.length; e < i; e++)
                if (this._words[e] === t)
                    return e;
            return -1
        }
        ,
        e.removeType = function(t) {
            for (var e = 0, i = this._words.length; e < i; e++)
                if (this._words[e] === t) {
                    this._words.splice(e, 1),
                    this._index > e && this._index--;
                    break
                }
            this._text = null,
            this._italic = -2
        }
        ,
        e.copyTo = function(t) {
            return t._text = this._text,
            t._size = this._size,
            t._index = this._index,
            t._words = this._words.slice(),
            t._italic = -2,
            t
        }
        ,
        e.toString = function() {
            return this._text ? this._text : this._text = this._words.join(" ")
        }
        ,
        r(0, e, "size", function() {
            return this._size
        }, function(t) {
            this._size = t,
            this._words[this._index] = t + "px",
            this._text = null
        }),
        t.create = function(e) {
            var i = t._cache[e];
            return i || (i = t._cache[e] = new t(e))
        }
        ,
        t.EMPTY = new t,
        t._cache = {},
        t._cache2 = null,
        t
    }()
      , Xt = function() {
        function t() {}
        return n(t, "laya.webgl.utils.CONST3D2D"),
        t.defaultMatrix4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        t.defaultMinusYMatrix4 = [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        t.uniformMatrix3 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        t._TMPARRAY = [],
        t._OFFSETX = 0,
        t._OFFSETY = 0,
        s(t, ["BYTES_PE", function() {
            return this.BYTES_PE = Float32Array.BYTES_PER_ELEMENT
        }
        , "BYTES_PIDX", function() {
            return this.BYTES_PIDX = Uint16Array.BYTES_PER_ELEMENT
        }
        ]),
        t
    }()
      , $t = function() {
        function t() {}
        return n(t, "laya.webgl.utils.GlUtils"),
        t.make2DProjection = function(t, e, i) {
            return [2 / t, 0, 0, 0, 0, -2 / e, 0, 0, 0, 0, 2 / i, 0, -1, 1, 0, 1]
        }
        ,
        t.fillIBQuadrangle = function(t, e) {
            if (e > 65535 / 4)
                throw Error("IBQuadrangle count:" + e + " must<:" + Math.floor(65535 / 4));
            e = Math.floor(e),
            t._resizeBuffer(6 * (e + 1) * 2, !1),
            t.byteLength = t.bufferLength;
            for (var i = t.getUint16Array(), s = 0, n = 0; n < e; n++)
                i[s++] = 4 * n,
                i[s++] = 4 * n + 2,
                i[s++] = 4 * n + 1,
                i[s++] = 4 * n,
                i[s++] = 4 * n + 3,
                i[s++] = 4 * n + 2;
            return t.setNeedUpload(),
            !0
        }
        ,
        t.expandIBQuadrangle = function(e, i) {
            e.bufferLength >= 6 * i * 2 || t.fillIBQuadrangle(e, i)
        }
        ,
        t.mathCeilPowerOfTwo = function(t) {
            return t--,
            t |= t >> 1,
            t |= t >> 2,
            t |= t >> 4,
            t |= t >> 8,
            t |= t >> 16,
            ++t
        }
        ,
        t.fillQuadrangleImgVb = function(t, e, i, s, n, r, a, o) {
            var h = 16 + (t._byteLength >> 2);
            t.byteLength = h << 2;
            var l = t.getFloat32Array();
            l[(h -= 16) + 2] = n[0],
            l[h + 3] = n[1],
            l[h + 6] = n[2],
            l[h + 7] = n[3],
            l[h + 10] = n[4],
            l[h + 11] = n[5],
            l[h + 14] = n[6],
            l[h + 15] = n[7];
            var u = r.a
              , c = r.b
              , _ = r.c
              , d = r.d;
            if (1 !== u || 0 !== c || 0 !== _ || 1 !== d) {
                r.bTransform = !0;
                var f = r.tx + a
                  , p = r.ty + o;
                l[h] = (s[0] + e) * u + (s[1] + i) * _ + f,
                l[h + 1] = (s[0] + e) * c + (s[1] + i) * d + p,
                l[h + 4] = (s[2] + e) * u + (s[3] + i) * _ + f,
                l[h + 5] = (s[2] + e) * c + (s[3] + i) * d + p,
                l[h + 8] = (s[4] + e) * u + (s[5] + i) * _ + f,
                l[h + 9] = (s[4] + e) * c + (s[5] + i) * d + p,
                l[h + 12] = (s[6] + e) * u + (s[7] + i) * _ + f,
                l[h + 13] = (s[6] + e) * c + (s[7] + i) * d + p
            } else
                r.bTransform = !1,
                e += r.tx + a,
                i += r.ty + o,
                l[h] = e + s[0],
                l[h + 1] = i + s[1],
                l[h + 4] = e + s[2],
                l[h + 5] = i + s[3],
                l[h + 8] = e + s[4],
                l[h + 9] = i + s[5],
                l[h + 12] = e + s[6],
                l[h + 13] = i + s[7];
            return t._upload = !0,
            !0
        }
        ,
        t.fillTranglesVB = function(t, e, i, s, n, r, a) {
            var o = (t._byteLength >> 2) + s.length;
            t.byteLength = o << 2;
            var h = t.getFloat32Array();
            o -= s.length;
            for (var l = s.length, u = n.a, c = n.b, _ = n.c, d = n.d, f = 0; f < l; f += 4)
                if (h[o + f + 2] = s[f + 2],
                h[o + f + 3] = s[f + 3],
                1 !== u || 0 !== c || 0 !== _ || 1 !== d) {
                    n.bTransform = !0;
                    var p = n.tx + r
                      , g = n.ty + a;
                    h[o + f] = (s[f] + e) * u + (s[f + 1] + i) * _ + p,
                    h[o + f + 1] = (s[f] + e) * c + (s[f + 1] + i) * d + g
                } else
                    n.bTransform = !1,
                    e += n.tx + r,
                    i += n.ty + a,
                    h[o + f] = e + s[f],
                    h[o + f + 1] = i + s[f + 1];
            return t._upload = !0,
            !0
        }
        ,
        t.copyPreImgVb = function(t, e, i) {
            var s = t._byteLength >> 2;
            t.byteLength = s + 16 << 2;
            for (var n = t.getFloat32Array(), r = 0, a = s - 16; r < 4; r++)
                n[s] = n[a] + e,
                ++a,
                n[++s] = n[a] + i,
                ++a,
                n[++s] = n[a],
                ++a,
                n[++s] = n[a],
                ++s,
                ++a;
            t._upload = !0
        }
        ,
        t.fillRectImgVb = function(t, e, i, s, n, r, a, o, h, l, u, c, _) {
            void 0 === _ && (_ = !1);
            var d, f, p, g, m, v, y, x, b, T, w, S, C, A, M, E, I = 1, R = o.a, L = o.b, P = o.c, F = o.d, D = e && e.width < 99999999;
            if (1 !== R || 0 !== L || 0 !== P || 1 !== F ? (o.bTransform = !0,
            0 === L && 0 === P && (I = 23,
            b = n + i,
            T = r + s,
            d = R * i + (w = o.tx + h),
            p = R * b + w,
            f = F * s + (S = o.ty + l),
            g = F * T + S)) : (I = 23,
            o.bTransform = !1,
            p = (d = i + o.tx + h) + n,
            g = (f = s + o.ty + l) + r),
            D && (m = e.x,
            v = e.y,
            y = e.width + m,
            x = e.height + v),
            1 !== I) {
                if (Math.min(d, p) >= y)
                    return !1;
                if (Math.min(f, g) >= x)
                    return !1;
                if (Math.max(p, d) <= m)
                    return !1;
                if (Math.max(g, f) <= v)
                    return !1
            }
            var B = t._byteLength >> 2;
            t.byteLength = B + 16 << 2;
            var N = t.getFloat32Array();
            switch (N[B + 2] = a[0],
            N[B + 3] = a[1],
            N[B + 6] = a[2],
            N[B + 7] = a[3],
            N[B + 10] = a[4],
            N[B + 11] = a[5],
            N[B + 14] = a[6],
            N[B + 15] = a[7],
            I) {
            case 1:
                w = o.tx + h,
                S = o.ty + l;
                var O = R * i
                  , k = P * s
                  , U = F * s
                  , V = L * i
                  , G = R * (b = n + i)
                  , W = P * (T = r + s)
                  , z = F * T
                  , H = L * b;
                _ ? (C = O + k + w,
                M = Math.round(C) - C,
                A = U + V + S,
                E = Math.round(A) - A,
                N[B] = C + M,
                N[B + 1] = A + E,
                N[B + 4] = G + k + w + M,
                N[B + 5] = U + H + S + E,
                N[B + 8] = G + W + w + M,
                N[B + 9] = z + H + S + E,
                N[B + 12] = O + W + w + M,
                N[B + 13] = z + V + S + E) : (N[B] = O + k + w,
                N[B + 1] = U + V + S,
                N[B + 4] = G + k + w,
                N[B + 5] = U + H + S,
                N[B + 8] = G + W + w,
                N[B + 9] = z + H + S,
                N[B + 12] = O + W + w,
                N[B + 13] = z + V + S);
                break;
            case 23:
                _ ? (C = d + u,
                M = Math.round(C) - C,
                A = f,
                E = Math.round(A) - A,
                N[B] = C + M,
                N[B + 1] = A + E,
                N[B + 4] = p + u + M,
                N[B + 5] = f + E,
                N[B + 8] = p + M,
                N[B + 9] = g + E,
                N[B + 12] = d + M,
                N[B + 13] = g + E) : (N[B] = d + u,
                N[B + 1] = f,
                N[B + 4] = p + u,
                N[B + 5] = f,
                N[B + 8] = p,
                N[B + 9] = g,
                N[B + 12] = d,
                N[B + 13] = g)
            }
            return t._upload = !0,
            !0
        }
        ,
        t.fillLineVb = function(e, i, s, n, r, a, o, h) {
            var l = .5 * o
              , u = t._fillLineArray
              , c = -(n - a)
              , _ = s - r
              , d = Math.sqrt(c * c + _ * _);
            c /= d,
            _ /= d,
            c *= l,
            _ *= l,
            u[0] = s - c,
            u[1] = n - _,
            u[4] = s + c,
            u[5] = n + _,
            u[8] = r + c,
            u[9] = a + _,
            u[12] = r - c,
            u[13] = a - _,
            h && h.transformPointArray(u, u);
            var f = 16 + (e._byteLength >> 2);
            return e.byteLength = f << 2,
            e.insertData(u, f - 16),
            !0
        }
        ,
        t._fillLineArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        t
    }()
      , jt = (function() {
        function t() {}
        n(t, "laya.webgl.utils.MatirxArray"),
        t.ArrayMul = function(e, i, s) {
            if (e)
                if (i)
                    for (var n = NaN, r = NaN, a = NaN, o = NaN, h = 0; h < 4; h++)
                        n = e[h],
                        r = e[h + 4],
                        a = e[h + 8],
                        o = e[h + 12],
                        s[h] = n * i[0] + r * i[1] + a * i[2] + o * i[3],
                        s[h + 4] = n * i[4] + r * i[5] + a * i[6] + o * i[7],
                        s[h + 8] = n * i[8] + r * i[9] + a * i[10] + o * i[11],
                        s[h + 12] = n * i[12] + r * i[13] + a * i[14] + o * i[15];
                else
                    t.copyArray(e, s);
            else
                t.copyArray(i, s)
        }
        ,
        t.copyArray = function(t, e) {
            if (t && e)
                for (var i = 0; i < t.length; i++)
                    e[i] = t[i]
        }
    }(),
    function() {
        function t(t, e, i) {
            this._stride = 0,
            this.vertNum = 0,
            this.indexNum = 0,
            this._applied = !1,
            this._vb = null,
            this._ib = null,
            this._vao = null,
            this._attribInfo = null,
            this._quadNum = 0,
            this.canReuse = !1,
            this._stride = t,
            this._vb = new ni(t,35048),
            e && this._vb._resizeBuffer(e, !1),
            this._ib = new si,
            i && this._ib._resizeBuffer(i, !1)
        }
        n(t, "laya.webgl.utils.Mesh2D");
        var e = t.prototype;
        return e.cloneWithNewVB = function() {
            var e = new t(this._stride,0,0);
            return e._ib = this._ib,
            e._quadNum = this._quadNum,
            e._attribInfo = this._attribInfo,
            e
        }
        ,
        e.cloneWithNewVBIB = function() {
            var e = new t(this._stride,0,0);
            return e._attribInfo = this._attribInfo,
            e
        }
        ,
        e.getVBW = function() {
            return this._vb.setNeedUpload(),
            this._vb
        }
        ,
        e.getVBR = function() {
            return this._vb
        }
        ,
        e.getIBR = function() {
            return this._ib
        }
        ,
        e.getIBW = function() {
            return this._ib.setNeedUpload(),
            this._ib
        }
        ,
        e.createQuadIB = function(t) {
            this._quadNum = t,
            this._ib._resizeBuffer(6 * t * 2, !1),
            this._ib.byteLength = this._ib.bufferLength;
            for (var e = this._ib.getUint16Array(), i = 0, s = 0, n = 0; n < t; n++)
                e[i++] = s,
                e[i++] = s + 2,
                e[i++] = s + 1,
                e[i++] = s,
                e[i++] = s + 3,
                e[i++] = s + 2,
                s += 4;
            this._ib.setNeedUpload()
        }
        ,
        e.setAttributes = function(t) {
            if (this._attribInfo = t,
            this._attribInfo.length % 3 != 0)
                throw "Mesh2D setAttributes error!"
        }
        ,
        e.getEleNum = function() {
            return this._ib.getBuffer().byteLength / 2
        }
        ,
        e.releaseMesh = function() {}
        ,
        e.destroy = function() {}
        ,
        e.clearVB = function() {
            this._vb.clear()
        }
        ,
        t._gvaoid = 0,
        t
    }())
      , Kt = function() {
        function t() {}
        return n(t, "laya.webgl.utils.RenderState2D"),
        t.getMatrArray = function() {
            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }
        ,
        t.mat2MatArray = function(e, i) {
            var s = e
              , n = i;
            return n[0] = s.a,
            n[1] = s.b,
            n[2] = t.EMPTYMAT4_ARRAY[2],
            n[3] = t.EMPTYMAT4_ARRAY[3],
            n[4] = s.c,
            n[5] = s.d,
            n[6] = t.EMPTYMAT4_ARRAY[6],
            n[7] = t.EMPTYMAT4_ARRAY[7],
            n[8] = t.EMPTYMAT4_ARRAY[8],
            n[9] = t.EMPTYMAT4_ARRAY[9],
            n[10] = t.EMPTYMAT4_ARRAY[10],
            n[11] = t.EMPTYMAT4_ARRAY[11],
            n[12] = s.tx,
            n[13] = s.ty,
            n[14] = t.EMPTYMAT4_ARRAY[14],
            n[15] = t.EMPTYMAT4_ARRAY[15],
            i
        }
        ,
        t.restoreTempArray = function() {
            t.TEMPMAT4_ARRAY[0] = 1,
            t.TEMPMAT4_ARRAY[1] = 0,
            t.TEMPMAT4_ARRAY[4] = 0,
            t.TEMPMAT4_ARRAY[5] = 1,
            t.TEMPMAT4_ARRAY[12] = 0,
            t.TEMPMAT4_ARRAY[13] = 0
        }
        ,
        t.clear = function() {
            t.worldScissorTest = !1,
            t.worldShaderDefines = null,
            t.worldFilters = null,
            t.worldAlpha = 1,
            t.worldClipRect.x = t.worldClipRect.y = 0,
            t.worldClipRect.width = t.width,
            t.worldClipRect.height = t.height,
            t.curRenderTarget = null
        }
        ,
        t._MAXSIZE = 99999999,
        t.EMPTYMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        t.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        t.worldMatrix4 = t.TEMPMAT4_ARRAY,
        t.worldAlpha = 1,
        t.worldScissorTest = !1,
        t.worldFilters = null,
        t.worldShaderDefines = null,
        t.curRenderTarget = null,
        t.width = 0,
        t.height = 0,
        s(t, ["worldMatrix", function() {
            return this.worldMatrix = new k
        }
        , "worldClipRect", function() {
            return this.worldClipRect = new V(0,0,99999999,99999999)
        }
        ]),
        t
    }()
      , qt = function() {
        function t() {}
        return n(t, "laya.webgl.WebGL"),
        t._uint8ArraySlice = function() {
            for (var t = this.length, e = new Uint8Array(this.length), i = 0; i < t; i++)
                e[i] = this[i];
            return e
        }
        ,
        t._float32ArraySlice = function() {
            for (var t = this.length, e = new Float32Array(this.length), i = 0; i < t; i++)
                e[i] = this[i];
            return e
        }
        ,
        t._uint16ArraySlice = function(t) {
            var e, i = arguments, s = 0, n = 0;
            if (0 === i.length)
                for (s = this.length,
                e = new Uint16Array(s),
                n = 0; n < s; n++)
                    e[n] = this[n];
            else if (2 === i.length) {
                var r = i[0]
                  , a = i[1];
                if (a > r)
                    for (s = a - r,
                    e = new Uint16Array(s),
                    n = r; n < a; n++)
                        e[n - r] = this[n];
                else
                    e = new Uint16Array(0)
            }
            return e
        }
        ,
        t.expandContext = function() {
            var t = K.prototype
              , e = CanvasRenderingContext2D.prototype;
            e.fillTrangles = t.fillTrangles,
            We.__int__(null),
            e.setIBVB = function(t, e, i, s, n, r, a, o, h, l) {
                void 0 === h && (h = 0),
                void 0 === l && (l = 0),
                null === i && (this._ib = this._ib || si.QuadrangleIB,
                i = this._ib,
                $t.expandIBQuadrangle(i, s._byteLength / 64 + 8)),
                this._setIBVB(t, e, i, s, n, r, a, o, h, l)
            }
            ,
            e.fillTrangles = function(t, e, i, s, n) {
                this._curMat = this._curMat || k.create(),
                this._vb = this._vb || ni.create(),
                this._ib || (this._ib = si.create(),
                $t.fillIBQuadrangle(this._ib, a / 4));
                var r = this._vb
                  , a = s.length >> 4;
                $t.fillTranglesVB(r, e, i, s, n || this._curMat, 0, 0),
                $t.expandIBQuadrangle(this._ib, r._byteLength / 64 + 8);
                var o = new fe(1,0);
                o.textureHost = t;
                var h = new ei("attribute vec2 position; attribute vec2 texcoord; uniform vec2 size; uniform mat4 mmat; varying vec2 v_texcoord; void main() { vec4 p=vec4(position.xy,0.0,1.0);vec4 pos=mmat*p; gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0); v_texcoord = texcoord; }","precision mediump float; varying vec2 v_texcoord; uniform sampler2D texture; void main() {vec4 color= texture2D(texture, v_texcoord); color.a*=1.0; gl_FragColor= color;}");
                r._vertType = 3,
                this._setIBVB(e, i, this._ib, r, 6 * a, n, h, o, 0, 0)
            }
        }
        ,
        t.enable = function() {
            if (et.__init__(),
            X.isConchApp && !X.isConchWebGL)
                return o.skinAniSprite = function() {
                    return new Lt
                }
                ,
                t.expandContext(),
                !1;
            if (o.getWebGLContext = function(t) {
                for (var e, i = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], s = 0; s < i.length; s++) {
                    try {
                        e = t.getContext(i[s], {
                            stencil: y.isStencil,
                            alpha: y.isAlpha,
                            antialias: y.isAntialias,
                            premultipliedAlpha: y.premultipliedAlpha,
                            preserveDrawingBuffer: y.preserveDrawingBuffer
                        })
                    } catch (t) {}
                    if (e)
                        return e
                }
                return null
            }
            ,
            null == (t.mainContext = o.getWebGLContext(X._mainCanvas)))
                return !1;
            if (X.isWebGL)
                return !0;
            ii.create = function(t, e) {
                return new ai(t,e)
            }
            ,
            Ye.create = function(t, e, i, s, n, r, a) {
                return new qe(t,e,i,s,n,r,a)
            }
            ,
            X.WebGL = t,
            X.isWebGL = !0,
            Ht.__init__(),
            o.createRenderSprite = function(t, e) {
                return new ge(t,e)
            }
            ,
            o.createWebGLContext2D = function(t) {
                return new pe(t)
            }
            ,
            o.changeWebGLSize = function(t, e) {
                laya.webgl.WebGL.onStageResize(t, e)
            }
            ,
            o.createGraphics = function() {
                return new ue
            }
            ;
            var e = o.createFilterAction;
            return o.createFilterAction = e || function(t) {
                return new de
            }
            ,
            o.clear = function(t) {
                Kt.worldScissorTest && laya.webgl.WebGL.mainContext.disable(3089);
                var e = X.context.ctx
                  , i = 0 == e._submits._length || y.preserveDrawingBuffer ? nt.create(t)._color : Ve._wgColor;
                i && e.clearBG(i[0], i[1], i[2], i[3]),
                Kt.clear()
            }
            ,
            o.addToAtlas = function(t, e) {
                void 0 === e && (e = !1);
                var s = t.bitmap;
                X.optimizeTextureMemory(t.url, t) ? i.__typeof(s, "laya.webgl.resource.IMergeAtlasBitmap") && s.allowMerageInAtlas && s.on("recovered", t, t.addTextureToAtlas) : s.enableMerageInAtlas = !1
            }
            ,
            o.isAtlas = function(t) {
                return t instanceof laya.webgl.atlas.AtlasWebGLCanvas
            }
            ,
            mt._enable(),
            o.beginFlush = function() {
                for (var t = mt.instance, e = t.getAtlaserCount(), i = 0; i < e; i++) {
                    var s = t.getAtlaserByIndex(i).texture;
                    s._flashCacheImageNeedFlush && o.flashFlushImage(s)
                }
            }
            ,
            o.drawToCanvas = function(t, e, i, s, n, r) {
                (i <= 0 || s <= 0) && console.log("[error] canvasWidth and canvasHeight should greater than zero"),
                n -= t.x,
                r -= t.y,
                i |= 1,
                s |= 1,
                n |= 1,
                r |= 1;
                var a = Le.create(i, s, 6408, 5121, 0, !1);
                a.start(),
                a.clear(0, 0, 0, 0),
                X.context.clear(),
                j.renders[e]._fun(t, X.context, n, Kt.height - s + r),
                X.context.flush(),
                a.end();
                var o = a.getData(0, 0, i, s);
                if (a.recycle(),
                o.byteLength == i * s * 4) {
                    var h = new $e;
                    h._canvas = et.createElement("canvas"),
                    h.size(i, s);
                    var l = h._canvas.getContext("2d");
                    et.canvas.size(i, s);
                    var u = et.context
                      , c = u.createImageData(i, s);
                    return c.data.set(new Uint8ClampedArray(o.buffer)),
                    h._imgData = c,
                    u.putImageData(c, 0, 0),
                    l.save(),
                    l.translate(0, s),
                    l.scale(1, -1),
                    l.drawImage(et.canvas.source, 0, 0),
                    l.restore(),
                    h
                }
                console.log("drawToCanvas error: w:" + i + ",h:" + s + ",datalen:" + o.byteLength)
            }
            ,
            o.createFilterAction = function(t) {
                var e;
                switch (t) {
                case 32:
                    e = new de
                }
                return e
            }
            ,
            o.addTextureToAtlas = function(t) {
                t._uvID++,
                mt._atlasRestore++,
                t.bitmap.enableMerageInAtlas && mt.instance.addToAtlas(t)
            }
            ,
            o.getTexturePixels = function(t, e, i, s, n) {
                X.context.ctx.clear();
                var r = new Ce;
                r.graphics.drawTexture(t, -e, -i);
                var a = Le.create(s, n);
                a.start(),
                a.clear(0, 0, 0, 0),
                r.render(X.context, 0, 0),
                X.context.ctx.flush(),
                a.end();
                for (var o = a.getData(0, 0, s, n), h = [], l = 0, u = n - 1; u >= 0; u--)
                    for (var c = 0; c < s; c++)
                        l = 4 * (u * s + c),
                        h.push(o[l]),
                        h.push(o[l + 1]),
                        h.push(o[l + 2]),
                        h.push(o[l + 3]);
                return h
            }
            ,
            o.skinAniSprite = function() {
                return new Lt
            }
            ,
            He.create = function(t, e) {
                var i = new $e;
                return i._imgData = e,
                i.flipY = !1,
                i
            }
            ,
            L._filterStart = function(t, e, i, s, n) {
                var r = t.getValue("bounds")
                  , a = Le.create(r.width, r.height);
                if (a.start(),
                a.clear(0, 0, 0, 0),
                t.addValue("src", a),
                t.addValue("ScissorTest", Kt.worldScissorTest),
                Kt.worldScissorTest) {
                    var o = new V;
                    o.copyFrom(i.ctx._clipRect),
                    t.addValue("clipRect", o),
                    Kt.worldScissorTest = !1,
                    laya.webgl.WebGL.mainContext.disable(3089)
                }
            }
            ,
            L._filterEnd = function(t, e, i, s, n) {
                var r = t.getValue("bounds");
                t.getValue("src").end();
                var a = Le.create(r.width, r.height);
                a.start(),
                a.clear(0, 0, 0, 0),
                t.addValue("out", a),
                e._set$P("_filterCache", a),
                e._set$P("_isHaveGlowFilter", t.getValue("_isHaveGlowFilter"))
            }
            ,
            L._EndTarget = function(t, e) {
                t.getValue("src").recycle();
                t.getValue("out").end();
                if (t.getValue("ScissorTest")) {
                    Kt.worldScissorTest = !0,
                    laya.webgl.WebGL.mainContext.enable(3089),
                    e.ctx.save();
                    var i = t.getValue("clipRect");
                    e.ctx.clipRect(i.x, i.y, i.width, i.height)
                }
            }
            ,
            L._useSrc = function(t) {
                var e = t.getValue("out");
                e.end(),
                (e = t.getValue("src")).start(),
                e.clear(0, 0, 0, 0)
            }
            ,
            L._endSrc = function(t) {
                t.getValue("src").end()
            }
            ,
            L._useOut = function(t) {
                var e = t.getValue("src");
                e.end(),
                (e = t.getValue("out")).start(),
                e.clear(0, 0, 0, 0)
            }
            ,
            L._endOut = function(t) {
                t.getValue("out").end()
            }
            ,
            L._recycleScope = function(t) {
                t.recycle()
            }
            ,
            L._filter = function(t, e, i, s) {
                var n = this._next;
                if (n) {
                    var r = t.filters
                      , a = r.length;
                    if (1 == a && 32 == r[0].type)
                        return e.ctx.save(),
                        e.ctx.setFilters([r[0]]),
                        n._fun.call(n, t, e, i, s),
                        void e.ctx.restore();
                    var o, h, l = kt.create(), u = U.TEMP, c = e.ctx._getTransformMatrix(), _ = k.create();
                    c.copyTo(_);
                    var d = 0
                      , f = 0
                      , p = !1
                      , g = t._$P._filterCache ? t._$P._filterCache : null;
                    if (!g || t._repaint) {
                        p = t._isHaveGlowFilter(),
                        l.addValue("_isHaveGlowFilter", p),
                        p && (d = 50,
                        f = 25),
                        (h = new V).copyFrom(t.getSelfBounds()),
                        h.x += t.x,
                        h.y += t.y,
                        h.x -= t.pivotX + 4,
                        h.y -= t.pivotY + 4;
                        var m = h.x
                          , v = h.y;
                        if (h.width += d + 8,
                        h.height += d + 8,
                        u.x = h.x * _.a + h.y * _.c,
                        u.y = h.y * _.d + h.x * _.b,
                        h.x = u.x,
                        h.y = u.y,
                        u.x = h.width * _.a + h.height * _.c,
                        u.y = h.height * _.d + h.width * _.b,
                        h.width = u.x,
                        h.height = u.y,
                        h.width <= 0 || h.height <= 0)
                            return;
                        g && g.recycle(),
                        l.addValue("bounds", h);
                        var y = Ot.create([l, t, e, 0, 0], L._filterStart);
                        e.addRenderObject(y),
                        e.ctx._renderKey = 0,
                        e.ctx._shader2D.glTexture = null;
                        var x = t.x - m + f
                          , b = t.y - v + f;
                        n._fun.call(n, t, e, x, b),
                        y = Ot.create([l, t, e, 0, 0], L._filterEnd),
                        e.addRenderObject(y);
                        for (var T = 0; T < a; T++) {
                            0 != T && (y = Ot.create([l], L._useSrc),
                            e.addRenderObject(y),
                            o = fe.create(1, 0),
                            k.TEMP.identity(),
                            e.ctx.drawTarget(l, 0, 0, h.width, h.height, k.TEMP, "out", o, null, yt.TOINT.overlay),
                            y = Ot.create([l], L._useOut),
                            e.addRenderObject(y));
                            r[T].action.apply3d(l, t, e, 0, 0)
                        }
                        y = Ot.create([l, e], L._EndTarget),
                        e.addRenderObject(y)
                    } else {
                        if ((p = !!t._$P._isHaveGlowFilter && t._$P._isHaveGlowFilter) && (d = 50,
                        f = 25),
                        (h = t.getBounds()).width <= 0 || h.height <= 0)
                            return;
                        h.width += d,
                        h.height += d,
                        u.x = h.x * _.a + h.y * _.c,
                        u.y = h.y * _.d + h.x * _.b,
                        h.x = u.x,
                        h.y = u.y,
                        u.x = h.width * _.a + h.height * _.c,
                        u.y = h.height * _.d + h.width * _.b,
                        h.width = u.x,
                        h.height = u.y,
                        l.addValue("out", g)
                    }
                    i = i - f - t.x,
                    s = s - f - t.y,
                    u.setTo(i, s),
                    _.transformPoint(u),
                    i = u.x + h.x,
                    s = u.y + h.y,
                    o = fe.create(1, 0),
                    k.TEMP.identity(),
                    e.ctx.drawTarget(l, i, s, h.width, h.height, k.TEMP, "out", o, null, yt.TOINT.overlay),
                    y = Ot.create([l], L._recycleScope),
                    e.addRenderObject(y),
                    _.destroy()
                }
            }
            ,
            Float32Array.prototype.slice || (Float32Array.prototype.slice = t._float32ArraySlice),
            Uint16Array.prototype.slice || (Uint16Array.prototype.slice = t._uint16ArraySlice),
            Uint8Array.prototype.slice || (Uint8Array.prototype.slice = t._uint8ArraySlice),
            !0
        }
        ,
        t.onStageResize = function(e, i) {
            null != t.mainContext && (t.mainContext.viewport(0, 0, e, i),
            Kt.width = e,
            Kt.height = i)
        }
        ,
        t.onInvalidGLRes = function() {
            mt.instance.freeAll(),
            q.releaseContentManagers(!0),
            t.doNodeRepaint(i.stage),
            t.mainContext.viewport(0, 0, Kt.width, Kt.height),
            i.stage.event("devicelost")
        }
        ,
        t.doNodeRepaint = function(e) {
            0 == e.numChildren && e.repaint();
            for (var i = 0; i < e.numChildren; i++)
                t.doNodeRepaint(e.getChildAt(i))
        }
        ,
        t.init = function(e, i, s) {
            t.mainCanvas = e,
            He._createContext = function(t) {
                return new pe(t)
            }
            ,
            $e._createContext = function(t) {
                return new pe(t)
            }
            ;
            var n = laya.webgl.WebGL.mainContext;
            if (null != n.getShaderPrecisionFormat) {
                var r = n.getShaderPrecisionFormat(35633, 36338)
                  , a = n.getShaderPrecisionFormat(35632, 36338);
                t.shaderHighPrecision = !(!r.precision || !a.precision)
            } else
                t.shaderHighPrecision = !1;
            if (t.compressAstc = n.getExtension("WEBGL_compressed_texture_astc"),
            t.compressAtc = n.getExtension("WEBGL_compressed_texture_atc"),
            t.compressEtc = n.getExtension("WEBGL_compressed_texture_etc"),
            t.compressEtc1 = n.getExtension("WEBGL_compressed_texture_etc1"),
            t.compressPvrtc = n.getExtension("WEBGL_compressed_texture_pvrtc"),
            t.compressS3tc = n.getExtension("WEBGL_compressed_texture_s3tc"),
            t.compressS3tc_srgb = n.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
            n.deleteTexture1 = n.deleteTexture,
            n.deleteTexture = function(t) {
                t == Qt.curBindTexValue && (Qt.curBindTexValue = null),
                n.deleteTexture1(t)
            }
            ,
            t.onStageResize(i, s),
            null == t.mainContext)
                throw new Error("webGL getContext err!");
            Q.__init__(),
            mt.__init__(),
            ve.__init__(),
            Nt.__init__(),
            pe.__init__(),
            fe.__init__(),
            It.__init__(),
            We.__int__(n),
            yt._init_(n),
            X.isConchApp && conch.setOnInvalidGLRes(t.onInvalidGLRes)
        }
        ,
        t.compressAstc = null,
        t.compressAtc = null,
        t.compressEtc = null,
        t.compressEtc1 = null,
        t.compressPvrtc = null,
        t.compressS3tc = null,
        t.compressS3tc_srgb = null,
        t.mainCanvas = null,
        t.mainContext = null,
        t.antialias = !0,
        t.shaderHighPrecision = !1,
        t._bg_null = [0, 0, 0, 0],
        t
    }()
      , Qt = function() {
        function t() {}
        return n(t, "laya.webgl.WebGLContext"),
        t.UseProgram = function(e) {
            return t._useProgram !== e && (qt.mainContext.useProgram(e),
            t._useProgram = e,
            !0)
        }
        ,
        t.setDepthTest = function(e, i) {
            i !== t._depthTest && (t._depthTest = i,
            i ? e.enable(2929) : e.disable(2929))
        }
        ,
        t.setDepthMask = function(e, i) {
            i !== t._depthMask && (t._depthMask = i,
            e.depthMask(i))
        }
        ,
        t.setDepthFunc = function(e, i) {
            i !== t._depthFunc && (t._depthFunc = i,
            e.depthFunc(i))
        }
        ,
        t.setBlend = function(e, i) {
            i !== t._blend && (t._blend = i,
            i ? e.enable(3042) : e.disable(3042))
        }
        ,
        t.setBlendFunc = function(e, i, s) {
            (i !== t._sFactor || s !== t._dFactor) && (t._sFactor = i,
            t._dFactor = s,
            e.blendFunc(i, s))
        }
        ,
        t.setCullFace = function(e, i) {
            i !== t._cullFace && (t._cullFace = i,
            i ? e.enable(2884) : e.disable(2884))
        }
        ,
        t.setFrontFace = function(e, i) {
            i !== t._frontFace && (t._frontFace = i,
            e.frontFace(i))
        }
        ,
        t.bindTexture = function(e, i, s) {
            e.bindTexture(i, s),
            t.curBindTexTarget = i,
            t.curBindTexValue = s
        }
        ,
        t.DEPTH_BUFFER_BIT = 256,
        t.STENCIL_BUFFER_BIT = 1024,
        t.COLOR_BUFFER_BIT = 16384,
        t.POINTS = 0,
        t.LINES = 1,
        t.LINE_LOOP = 2,
        t.LINE_STRIP = 3,
        t.TRIANGLES = 4,
        t.TRIANGLE_STRIP = 5,
        t.TRIANGLE_FAN = 6,
        t.ZERO = 0,
        t.ONE = 1,
        t.SRC_COLOR = 768,
        t.ONE_MINUS_SRC_COLOR = 769,
        t.SRC_ALPHA = 770,
        t.ONE_MINUS_SRC_ALPHA = 771,
        t.DST_ALPHA = 772,
        t.ONE_MINUS_DST_ALPHA = 773,
        t.DST_COLOR = 774,
        t.ONE_MINUS_DST_COLOR = 775,
        t.SRC_ALPHA_SATURATE = 776,
        t.FUNC_ADD = 32774,
        t.BLEND_EQUATION = 32777,
        t.BLEND_EQUATION_RGB = 32777,
        t.BLEND_EQUATION_ALPHA = 34877,
        t.FUNC_SUBTRACT = 32778,
        t.FUNC_REVERSE_SUBTRACT = 32779,
        t.BLEND_DST_RGB = 32968,
        t.BLEND_SRC_RGB = 32969,
        t.BLEND_DST_ALPHA = 32970,
        t.BLEND_SRC_ALPHA = 32971,
        t.CONSTANT_COLOR = 32769,
        t.ONE_MINUS_CONSTANT_COLOR = 32770,
        t.CONSTANT_ALPHA = 32771,
        t.ONE_MINUS_CONSTANT_ALPHA = 32772,
        t.BLEND_COLOR = 32773,
        t.ARRAY_BUFFER = 34962,
        t.ELEMENT_ARRAY_BUFFER = 34963,
        t.ARRAY_BUFFER_BINDING = 34964,
        t.ELEMENT_ARRAY_BUFFER_BINDING = 34965,
        t.STREAM_DRAW = 35040,
        t.STATIC_DRAW = 35044,
        t.DYNAMIC_DRAW = 35048,
        t.BUFFER_SIZE = 34660,
        t.BUFFER_USAGE = 34661,
        t.CURRENT_VERTEX_ATTRIB = 34342,
        t.FRONT = 1028,
        t.BACK = 1029,
        t.CULL_FACE = 2884,
        t.FRONT_AND_BACK = 1032,
        t.BLEND = 3042,
        t.DITHER = 3024,
        t.STENCIL_TEST = 2960,
        t.DEPTH_TEST = 2929,
        t.SCISSOR_TEST = 3089,
        t.POLYGON_OFFSET_FILL = 32823,
        t.SAMPLE_ALPHA_TO_COVERAGE = 32926,
        t.SAMPLE_COVERAGE = 32928,
        t.NO_ERROR = 0,
        t.INVALID_ENUM = 1280,
        t.INVALID_VALUE = 1281,
        t.INVALID_OPERATION = 1282,
        t.OUT_OF_MEMORY = 1285,
        t.CW = 2304,
        t.CCW = 2305,
        t.LINE_WIDTH = 2849,
        t.ALIASED_POINT_SIZE_RANGE = 33901,
        t.ALIASED_LINE_WIDTH_RANGE = 33902,
        t.CULL_FACE_MODE = 2885,
        t.FRONT_FACE = 2886,
        t.DEPTH_RANGE = 2928,
        t.DEPTH_WRITEMASK = 2930,
        t.DEPTH_CLEAR_VALUE = 2931,
        t.DEPTH_FUNC = 2932,
        t.STENCIL_CLEAR_VALUE = 2961,
        t.STENCIL_FUNC = 2962,
        t.STENCIL_FAIL = 2964,
        t.STENCIL_PASS_DEPTH_FAIL = 2965,
        t.STENCIL_PASS_DEPTH_PASS = 2966,
        t.STENCIL_REF = 2967,
        t.STENCIL_VALUE_MASK = 2963,
        t.STENCIL_WRITEMASK = 2968,
        t.STENCIL_BACK_FUNC = 34816,
        t.STENCIL_BACK_FAIL = 34817,
        t.STENCIL_BACK_PASS_DEPTH_FAIL = 34818,
        t.STENCIL_BACK_PASS_DEPTH_PASS = 34819,
        t.STENCIL_BACK_REF = 36003,
        t.STENCIL_BACK_VALUE_MASK = 36004,
        t.STENCIL_BACK_WRITEMASK = 36005,
        t.VIEWPORT = 2978,
        t.SCISSOR_BOX = 3088,
        t.COLOR_CLEAR_VALUE = 3106,
        t.COLOR_WRITEMASK = 3107,
        t.UNPACK_ALIGNMENT = 3317,
        t.PACK_ALIGNMENT = 3333,
        t.MAX_TEXTURE_SIZE = 3379,
        t.MAX_VIEWPORT_DIMS = 3386,
        t.SUBPIXEL_BITS = 3408,
        t.RED_BITS = 3410,
        t.GREEN_BITS = 3411,
        t.BLUE_BITS = 3412,
        t.ALPHA_BITS = 3413,
        t.DEPTH_BITS = 3414,
        t.STENCIL_BITS = 3415,
        t.POLYGON_OFFSET_UNITS = 10752,
        t.POLYGON_OFFSET_FACTOR = 32824,
        t.TEXTURE_BINDING_2D = 32873,
        t.SAMPLE_BUFFERS = 32936,
        t.SAMPLES = 32937,
        t.SAMPLE_COVERAGE_VALUE = 32938,
        t.SAMPLE_COVERAGE_INVERT = 32939,
        t.NUM_COMPRESSED_TEXTURE_FORMATS = 34466,
        t.COMPRESSED_TEXTURE_FORMATS = 34467,
        t.DONT_CARE = 4352,
        t.FASTEST = 4353,
        t.NICEST = 4354,
        t.GENERATE_MIPMAP_HINT = 33170,
        t.BYTE = 5120,
        t.UNSIGNED_BYTE = 5121,
        t.SHORT = 5122,
        t.UNSIGNED_SHORT = 5123,
        t.INT = 5124,
        t.UNSIGNED_INT = 5125,
        t.FLOAT = 5126,
        t.DEPTH_COMPONENT = 6402,
        t.ALPHA = 6406,
        t.RGB = 6407,
        t.RGBA = 6408,
        t.LUMINANCE = 6409,
        t.LUMINANCE_ALPHA = 6410,
        t.UNSIGNED_SHORT_4_4_4_4 = 32819,
        t.UNSIGNED_SHORT_5_5_5_1 = 32820,
        t.UNSIGNED_SHORT_5_6_5 = 33635,
        t.FRAGMENT_SHADER = 35632,
        t.VERTEX_SHADER = 35633,
        t.MAX_VERTEX_ATTRIBS = 34921,
        t.MAX_VERTEX_UNIFORM_VECTORS = 36347,
        t.MAX_VARYING_VECTORS = 36348,
        t.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661,
        t.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660,
        t.MAX_TEXTURE_IMAGE_UNITS = 34930,
        t.MAX_FRAGMENT_UNIFORM_VECTORS = 36349,
        t.SHADER_TYPE = 35663,
        t.DELETE_STATUS = 35712,
        t.LINK_STATUS = 35714,
        t.VALIDATE_STATUS = 35715,
        t.ATTACHED_SHADERS = 35717,
        t.ACTIVE_UNIFORMS = 35718,
        t.ACTIVE_ATTRIBUTES = 35721,
        t.SHADING_LANGUAGE_VERSION = 35724,
        t.CURRENT_PROGRAM = 35725,
        t.NEVER = 512,
        t.LESS = 513,
        t.EQUAL = 514,
        t.LEQUAL = 515,
        t.GREATER = 516,
        t.NOTEQUAL = 517,
        t.GEQUAL = 518,
        t.ALWAYS = 519,
        t.KEEP = 7680,
        t.REPLACE = 7681,
        t.INCR = 7682,
        t.DECR = 7683,
        t.INVERT = 5386,
        t.INCR_WRAP = 34055,
        t.DECR_WRAP = 34056,
        t.VENDOR = 7936,
        t.RENDERER = 7937,
        t.VERSION = 7938,
        t.NEAREST = 9728,
        t.LINEAR = 9729,
        t.NEAREST_MIPMAP_NEAREST = 9984,
        t.LINEAR_MIPMAP_NEAREST = 9985,
        t.NEAREST_MIPMAP_LINEAR = 9986,
        t.LINEAR_MIPMAP_LINEAR = 9987,
        t.TEXTURE_MAG_FILTER = 10240,
        t.TEXTURE_MIN_FILTER = 10241,
        t.TEXTURE_WRAP_S = 10242,
        t.TEXTURE_WRAP_T = 10243,
        t.TEXTURE_2D = 3553,
        t.TEXTURE = 5890,
        t.TEXTURE_CUBE_MAP = 34067,
        t.TEXTURE_BINDING_CUBE_MAP = 34068,
        t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069,
        t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070,
        t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071,
        t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072,
        t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073,
        t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074,
        t.MAX_CUBE_MAP_TEXTURE_SIZE = 34076,
        t.TEXTURE0 = 33984,
        t.TEXTURE1 = 33985,
        t.TEXTURE2 = 33986,
        t.TEXTURE3 = 33987,
        t.TEXTURE4 = 33988,
        t.TEXTURE5 = 33989,
        t.TEXTURE6 = 33990,
        t.TEXTURE7 = 33991,
        t.TEXTURE8 = 33992,
        t.TEXTURE9 = 33993,
        t.TEXTURE10 = 33994,
        t.TEXTURE11 = 33995,
        t.TEXTURE12 = 33996,
        t.TEXTURE13 = 33997,
        t.TEXTURE14 = 33998,
        t.TEXTURE15 = 33999,
        t.TEXTURE16 = 34e3,
        t.TEXTURE17 = 34001,
        t.TEXTURE18 = 34002,
        t.TEXTURE19 = 34003,
        t.TEXTURE20 = 34004,
        t.TEXTURE21 = 34005,
        t.TEXTURE22 = 34006,
        t.TEXTURE23 = 34007,
        t.TEXTURE24 = 34008,
        t.TEXTURE25 = 34009,
        t.TEXTURE26 = 34010,
        t.TEXTURE27 = 34011,
        t.TEXTURE28 = 34012,
        t.TEXTURE29 = 34013,
        t.TEXTURE30 = 34014,
        t.TEXTURE31 = 34015,
        t.ACTIVE_TEXTURE = 34016,
        t.REPEAT = 10497,
        t.CLAMP_TO_EDGE = 33071,
        t.MIRRORED_REPEAT = 33648,
        t.FLOAT_VEC2 = 35664,
        t.FLOAT_VEC3 = 35665,
        t.FLOAT_VEC4 = 35666,
        t.INT_VEC2 = 35667,
        t.INT_VEC3 = 35668,
        t.INT_VEC4 = 35669,
        t.BOOL = 35670,
        t.BOOL_VEC2 = 35671,
        t.BOOL_VEC3 = 35672,
        t.BOOL_VEC4 = 35673,
        t.FLOAT_MAT2 = 35674,
        t.FLOAT_MAT3 = 35675,
        t.FLOAT_MAT4 = 35676,
        t.SAMPLER_2D = 35678,
        t.SAMPLER_CUBE = 35680,
        t.VERTEX_ATTRIB_ARRAY_ENABLED = 34338,
        t.VERTEX_ATTRIB_ARRAY_SIZE = 34339,
        t.VERTEX_ATTRIB_ARRAY_STRIDE = 34340,
        t.VERTEX_ATTRIB_ARRAY_TYPE = 34341,
        t.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922,
        t.VERTEX_ATTRIB_ARRAY_POINTER = 34373,
        t.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975,
        t.COMPILE_STATUS = 35713,
        t.LOW_FLOAT = 36336,
        t.MEDIUM_FLOAT = 36337,
        t.HIGH_FLOAT = 36338,
        t.LOW_INT = 36339,
        t.MEDIUM_INT = 36340,
        t.HIGH_INT = 36341,
        t.FRAMEBUFFER = 36160,
        t.RENDERBUFFER = 36161,
        t.RGBA4 = 32854,
        t.RGB5_A1 = 32855,
        t.RGB565 = 36194,
        t.DEPTH_COMPONENT16 = 33189,
        t.STENCIL_INDEX = 6401,
        t.STENCIL_INDEX8 = 36168,
        t.DEPTH_STENCIL = 34041,
        t.RENDERBUFFER_WIDTH = 36162,
        t.RENDERBUFFER_HEIGHT = 36163,
        t.RENDERBUFFER_INTERNAL_FORMAT = 36164,
        t.RENDERBUFFER_RED_SIZE = 36176,
        t.RENDERBUFFER_GREEN_SIZE = 36177,
        t.RENDERBUFFER_BLUE_SIZE = 36178,
        t.RENDERBUFFER_ALPHA_SIZE = 36179,
        t.RENDERBUFFER_DEPTH_SIZE = 36180,
        t.RENDERBUFFER_STENCIL_SIZE = 36181,
        t.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048,
        t.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049,
        t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050,
        t.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051,
        t.COLOR_ATTACHMENT0 = 36064,
        t.DEPTH_ATTACHMENT = 36096,
        t.STENCIL_ATTACHMENT = 36128,
        t.DEPTH_STENCIL_ATTACHMENT = 33306,
        t.NONE = 0,
        t.FRAMEBUFFER_COMPLETE = 36053,
        t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054,
        t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055,
        t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057,
        t.FRAMEBUFFER_UNSUPPORTED = 36061,
        t.FRAMEBUFFER_BINDING = 36006,
        t.RENDERBUFFER_BINDING = 36007,
        t.MAX_RENDERBUFFER_SIZE = 34024,
        t.INVALID_FRAMEBUFFER_OPERATION = 1286,
        t.UNPACK_FLIP_Y_WEBGL = 37440,
        t.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441,
        t.CONTEXT_LOST_WEBGL = 37442,
        t.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443,
        t.BROWSER_DEFAULT_WEBGL = 37444,
        t._useProgram = null,
        t._depthTest = !0,
        t._depthMask = !0,
        t._depthFunc = 513,
        t._blend = !1,
        t._sFactor = 1,
        t._dFactor = 0,
        t._cullFace = !1,
        t._frontFace = 2305,
        t.curBindTexTarget = null,
        t.curBindTexValue = null,
        t
    }()
      , Zt = function(t) {
        function e() {
            e.__super.call(this)
        }
        return n(e, "event.GameEventDispatcher", h),
        r(1, e, "getInstacne", function() {
            return null == e._instance && (e._instance = new e),
            e._instance
        }, laya.events.EventDispatcher._$SET_getInstacne),
        e._instance = null,
        e
    }()
      , Jt = function(t) {
        function e() {
            e.__super.call(this),
            this._$1__id = ++e._uniqueIDCounter,
            this.__loaded = !0,
            this._destroyed = !1,
            this._referenceCount = 0,
            e._idResourcesMap[this.id] = this,
            this._released = !0,
            this.lock = !1,
            this._memorySize = 0,
            this._lastUseFrameCount = -1,
            q.currentResourceManager && q.currentResourceManager.addResource(this)
        }
        n(e, "laya.resource.Resource", h);
        var s = e.prototype;
        return i.imps(s, {
            "laya.resource.ICreateResource": !0,
            "laya.resource.IDispose": !0
        }),
        s._setUrl = function(t) {
            if (this._url !== t) {
                var i;
                this._url && ((i = e._urlResourcesMap[this._url]).splice(i.indexOf(this), 1),
                0 === i.length && delete e._urlResourcesMap[this._url]),
                t && ((i = e._urlResourcesMap[t]) || (e._urlResourcesMap[t] = i = []),
                i.push(this)),
                this._url = t
            }
        }
        ,
        s._getGroup = function() {
            return this._group
        }
        ,
        s._setGroup = function(t) {
            if (this._group !== t) {
                var i;
                this._group && ((i = e._groupResourcesMap[this._group]).splice(i.indexOf(this), 1),
                0 === i.length && delete e._groupResourcesMap[this._group]),
                t && ((i = e._groupResourcesMap[t]) || (e._groupResourcesMap[t] = i = []),
                i.push(this)),
                this._group = t
            }
        }
        ,
        s._addReference = function() {
            this._referenceCount++
        }
        ,
        s._removeReference = function() {
            this._referenceCount--
        }
        ,
        s._clearReference = function() {
            this._referenceCount = 0
        }
        ,
        s._endLoaded = function() {
            this.__loaded = !0,
            this.event("loaded", this)
        }
        ,
        s.recreateResource = function() {
            this.completeCreate()
        }
        ,
        s.disposeResource = function() {}
        ,
        s.activeResource = function(t) {
            void 0 === t && (t = !1),
            this._lastUseFrameCount = ht.loopCount,
            !this._destroyed && this.__loaded && (this._released || t) && this.recreateResource()
        }
        ,
        s.releaseResource = function(t) {
            return void 0 === t && (t = !1),
            !(!t && this.lock) && (!(this._released && !t) && (this.disposeResource(),
            this._released = !0,
            this._lastUseFrameCount = -1,
            this.event("released", this),
            !0))
        }
        ,
        s.onAsynLoaded = function(t, e, i) {
            throw new Error("Resource: must override this function!")
        }
        ,
        s.destroy = function() {
            if (!this._destroyed) {
                null !== this._resourceManager && this._resourceManager.removeResource(this),
                this._destroyed = !0,
                this.lock = !1,
                this.releaseResource(),
                delete e._idResourcesMap[this.id];
                var t;
                this._url && ((t = e._urlResourcesMap[this._url]) && (t.splice(t.indexOf(this), 1),
                0 === t.length && delete e._urlResourcesMap[this.url]),
                oe.clearRes(this._url),
                this.__loaded || o.cancelLoadByUrl(this._url)),
                this._group && ((t = e._groupResourcesMap[this._group]).splice(t.indexOf(this), 1),
                0 === t.length && delete e._groupResourcesMap[this.url])
            }
        }
        ,
        s.completeCreate = function() {
            this._released = !1,
            this.event("recovered", this)
        }
        ,
        s.dispose = function() {
            this.destroy()
        }
        ,
        r(0, s, "memorySize", function() {
            return this._memorySize
        }, function(t) {
            var e = t - this._memorySize;
            this._memorySize = t,
            this.resourceManager && this.resourceManager.addSize(e)
        }),
        r(0, s, "_loaded", null, function(t) {
            this.__loaded = t
        }),
        r(0, s, "loaded", function() {
            return this.__loaded
        }),
        r(0, s, "id", function() {
            return this._$1__id
        }),
        r(0, s, "destroyed", function() {
            return this._destroyed
        }),
        r(0, s, "group", function() {
            return this._getGroup()
        }, function(t) {
            this._setGroup(t)
        }),
        r(0, s, "resourceManager", function() {
            return this._resourceManager
        }),
        r(0, s, "url", function() {
            return this._url
        }),
        r(0, s, "released", function() {
            return this._released
        }),
        r(0, s, "referenceCount", function() {
            return this._referenceCount
        }),
        e.getResourceByID = function(t) {
            return e._idResourcesMap[t]
        }
        ,
        e.getResourceByURL = function(t, i) {
            return void 0 === i && (i = 0),
            e._urlResourcesMap[t][i]
        }
        ,
        e.getResourceCountByURL = function(t) {
            return e._urlResourcesMap[t].length
        }
        ,
        e.destroyUnusedResources = function(t) {
            var i;
            if (t) {
                var s = e._groupResourcesMap[t];
                if (s)
                    for (var n = s.slice(), r = 0, a = n.length; r < a; r++)
                        (i = n[r]).lock || 0 !== i._referenceCount || i.destroy()
            } else
                for (var o in e._idResourcesMap)
                    (i = e._idResourcesMap[o]).lock || 0 !== i._referenceCount || i.destroy()
        }
        ,
        e._uniqueIDCounter = 0,
        e._idResourcesMap = {},
        e._urlResourcesMap = {},
        e._groupResourcesMap = {},
        e
    }()
      , te = function(t) {
        function e() {
            this._bits = 0,
            this._displayedInStage = !1,
            this._parent = null,
            this.conchModel = null,
            this.name = "",
            this._destroyed = !1,
            e.__super.call(this),
            this._childs = e.ARRAY_EMPTY,
            this._$P = e.PROP_EMPTY,
            this.timer = i.scaleTimer,
            this.conchModel = X.isConchNode ? this.createConchModel() : null
        }
        n(e, "laya.display.Node", h);
        var s = e.prototype;
        return s._setBit = function(t, e) {
            if (1 == t) {
                this._getBit(t) != e && this._updateDisplayedInstage()
            }
            e ? this._bits |= t : this._bits &= ~t
        }
        ,
        s._getBit = function(t) {
            return 0 != (this._bits & t)
        }
        ,
        s._setUpNoticeChain = function() {
            this._getBit(1) && this._setUpNoticeType(1)
        }
        ,
        s._setUpNoticeType = function(t) {
            var e = this;
            for (e._setBit(t, !0),
            e = e.parent; e; ) {
                if (e._getBit(t))
                    return;
                e._setBit(t, !0),
                e = e.parent
            }
        }
        ,
        s.on = function(t, e, i, s) {
            return "display" !== t && "undisplay" !== t || this._getBit(1) || this._setUpNoticeType(1),
            this._createListener(t, e, i, s, !1)
        }
        ,
        s.once = function(t, e, i, s) {
            return "display" !== t && "undisplay" !== t || this._getBit(1) || this._setUpNoticeType(1),
            this._createListener(t, e, i, s, !0)
        }
        ,
        s.createConchModel = function() {
            return null
        }
        ,
        s.destroy = function(t) {
            void 0 === t && (t = !0),
            this._destroyed = !0,
            this._parent && this._parent.removeChild(this),
            this._childs && (t ? this.destroyChildren() : this.removeChildren()),
            this._childs = null,
            this._$P = null,
            this.offAll(),
            this.timer.clearAll(this)
        }
        ,
        s.destroyChildren = function() {
            if (this._childs)
                for (var t = this._childs.length - 1; t > -1; t--)
                    this._childs[t].destroy(!0)
        }
        ,
        s.addChild = function(t) {
            if (!t || this.destroyed || t === this)
                return t;
            if (t.zOrder && this._set$P("hasZorder", !0),
            t._parent === this) {
                var i = this.getChildIndex(t);
                i !== this._childs.length - 1 && (this._childs.splice(i, 1),
                this._childs.push(t),
                this.conchModel && (this.conchModel.removeChild(t.conchModel),
                this.conchModel.addChildAt(t.conchModel, this._childs.length - 1)),
                this._childChanged())
            } else
                t.parent && t.parent.removeChild(t),
                this._childs === e.ARRAY_EMPTY && (this._childs = []),
                this._childs.push(t),
                this.conchModel && this.conchModel.addChildAt(t.conchModel, this._childs.length - 1),
                t.parent = this,
                this._childChanged();
            return t
        }
        ,
        s.addChildren = function(t) {
            for (var e = arguments, i = 0, s = e.length; i < s; )
                this.addChild(e[i++])
        }
        ,
        s.addChildAt = function(t, i) {
            if (!t || this.destroyed || t === this)
                return t;
            if (t.zOrder && this._set$P("hasZorder", !0),
            i >= 0 && i <= this._childs.length) {
                if (t._parent === this) {
                    var s = this.getChildIndex(t);
                    this._childs.splice(s, 1),
                    this._childs.splice(i, 0, t),
                    this.conchModel && (this.conchModel.removeChild(t.conchModel),
                    this.conchModel.addChildAt(t.conchModel, i)),
                    this._childChanged()
                } else
                    t.parent && t.parent.removeChild(t),
                    this._childs === e.ARRAY_EMPTY && (this._childs = []),
                    this._childs.splice(i, 0, t),
                    this.conchModel && this.conchModel.addChildAt(t.conchModel, i),
                    t.parent = this;
                return t
            }
            throw new Error("appendChildAt:The index is out of bounds")
        }
        ,
        s.getChildIndex = function(t) {
            return this._childs.indexOf(t)
        }
        ,
        s.getChildByName = function(t) {
            var e = this._childs;
            if (e)
                for (var i = 0, s = e.length; i < s; i++) {
                    var n = e[i];
                    if (n.name === t)
                        return n
                }
            return null
        }
        ,
        s._get$P = function(t) {
            return this._$P[t]
        }
        ,
        s._set$P = function(t, i) {
            return this.destroyed || (this._$P === e.PROP_EMPTY && (this._$P = {}),
            this._$P[t] = i),
            i
        }
        ,
        s.getChildAt = function(t) {
            return this._childs[t]
        }
        ,
        s.setChildIndex = function(t, e) {
            var i = this._childs;
            if (e < 0 || e >= i.length)
                throw new Error("setChildIndex:The index is out of bounds.");
            var s = this.getChildIndex(t);
            if (s < 0)
                throw new Error("setChildIndex:node is must child of this object.");
            return i.splice(s, 1),
            i.splice(e, 0, t),
            this.conchModel && (this.conchModel.removeChild(t.conchModel),
            this.conchModel.addChildAt(t.conchModel, e)),
            this._childChanged(),
            t
        }
        ,
        s._childChanged = function(t) {}
        ,
        s.removeChild = function(t) {
            if (!this._childs)
                return t;
            var e = this._childs.indexOf(t);
            return this.removeChildAt(e)
        }
        ,
        s.removeSelf = function() {
            return this._parent && this._parent.removeChild(this),
            this
        }
        ,
        s.removeChildByName = function(t) {
            var e = this.getChildByName(t);
            return e && this.removeChild(e),
            e
        }
        ,
        s.removeChildAt = function(t) {
            var e = this.getChildAt(t);
            return e && (this._childs.splice(t, 1),
            this.conchModel && this.conchModel.removeChild(e.conchModel),
            e.parent = null),
            e
        }
        ,
        s.removeChildren = function(t, i) {
            if (void 0 === t && (t = 0),
            void 0 === i && (i = 2147483647),
            this._childs && this._childs.length > 0) {
                var s = this._childs;
                if (0 === t && i >= a) {
                    var n = s;
                    this._childs = e.ARRAY_EMPTY
                } else
                    n = s.splice(t, i - t);
                for (var r = 0, a = n.length; r < a; r++)
                    n[r].parent = null,
                    this.conchModel && this.conchModel.removeChild(n[r].conchModel)
            }
            return this
        }
        ,
        s.replaceChild = function(t, e) {
            var i = this._childs.indexOf(e);
            return i > -1 ? (this._childs.splice(i, 1, t),
            this.conchModel && (this.conchModel.removeChild(e.conchModel),
            this.conchModel.addChildAt(t.conchModel, i)),
            e.parent = null,
            t.parent = this,
            t) : null
        }
        ,
        s._updateDisplayedInstage = function() {
            var t;
            t = this;
            var e = i.stage;
            for (this._displayedInStage = !1; t; ) {
                if (t._getBit(1)) {
                    this._displayedInStage = t._displayedInStage;
                    break
                }
                if (t == e || t._displayedInStage) {
                    this._displayedInStage = !0;
                    break
                }
                t = t.parent
            }
        }
        ,
        s._setDisplay = function(t) {
            this._displayedInStage !== t && (this._displayedInStage = t,
            t ? this.event("display") : this.event("undisplay"))
        }
        ,
        s._displayChild = function(t, e) {
            var i = t._childs;
            if (i)
                for (var s = 0, n = i.length; s < n; s++) {
                    var r = i[s];
                    r._getBit(1) && (r._childs.length > 0 ? this._displayChild(r, e) : r._setDisplay(e))
                }
            t._setDisplay(e)
        }
        ,
        s.contains = function(t) {
            if (t === this)
                return !0;
            for (; t; ) {
                if (t.parent === this)
                    return !0;
                t = t.parent
            }
            return !1
        }
        ,
        s.timerLoop = function(t, e, i, s, n, r) {
            void 0 === n && (n = !0),
            void 0 === r && (r = !1),
            this.timer.loop(t, e, i, s, n, r)
        }
        ,
        s.timerOnce = function(t, e, i, s, n) {
            void 0 === n && (n = !0),
            this.timer._create(!1, !1, t, e, i, s, n)
        }
        ,
        s.frameLoop = function(t, e, i, s, n) {
            void 0 === n && (n = !0),
            this.timer._create(!0, !0, t, e, i, s, n)
        }
        ,
        s.frameOnce = function(t, e, i, s, n) {
            void 0 === n && (n = !0),
            this.timer._create(!0, !1, t, e, i, s, n)
        }
        ,
        s.clearTimer = function(t, e) {
            this.timer.clear(t, e)
        }
        ,
        r(0, s, "numChildren", function() {
            return this._childs.length
        }),
        r(0, s, "destroyed", function() {
            return this._destroyed
        }),
        r(0, s, "parent", function() {
            return this._parent
        }, function(t) {
            this._parent !== t && (t ? (this._parent = t,
            this.event("added"),
            this._getBit(1) && (this._setUpNoticeChain(),
            t.displayedInStage && this._displayChild(this, !0)),
            t._childChanged(this)) : (this.event("removed"),
            this._parent._childChanged(),
            this._getBit(1) && this._displayChild(this, !1),
            this._parent = t))
        }),
        r(0, s, "displayedInStage", function() {
            return this._getBit(1) ? this._displayedInStage : (this._setUpNoticeType(1),
            this._displayedInStage)
        }),
        e.ARRAY_EMPTY = [],
        e.PROP_EMPTY = {},
        e.NOTICE_DISPLAY = 1,
        e.MOUSEENABLE = 2,
        e
    }()
      , ee = function(t) {
        function e() {
            this.retryNum = 1,
            this.retryDelay = 0,
            this.maxLoader = 5,
            this._loaders = [],
            this._loaderCount = 0,
            this._resInfos = [],
            this._infoPool = [],
            this._maxPriority = 5,
            this._failRes = {},
            e.__super.call(this);
            for (var t = 0; t < this._maxPriority; t++)
                this._resInfos[t] = []
        }
        var r;
        n(e, "laya.net.LoaderManager", h);
        var a = e.prototype;
        return a.create = function(t, e, i, s, n, r, a, o) {
            if (void 0 === r && (r = 1),
            void 0 === a && (a = !0),
            t instanceof Array) {
                var h = t
                  , u = h.length
                  , c = 0;
                if (i)
                    var _ = l.create(i.caller, i.method, i.args, !1);
                for (var d = 0; d < u; d++) {
                    var f = h[d];
                    "string" == typeof f && (f = h[d] = {
                        url: f
                    }),
                    f.progress = 0
                }
                for (d = 0; d < u; d++) {
                    f = h[d];
                    var p = i ? l.create(null, function(t, e) {
                        t.progress = e;
                        for (var i = 0, s = 0; s < u; s++)
                            i += h[s].progress;
                        var n = i / u;
                        _.runWith(n)
                    }, [f], !1) : null
                      , g = i || e ? l.create(null, function(t, i) {
                        c++,
                        t.progress = 1,
                        c === u && e && e.run()
                    }, [f]) : null;
                    this._create(f.url, g, p, f.clas || s, f.params || n, f.priority || r, a, f.group || o)
                }
                return !0
            }
            return this._create(t, e, i, s, n, r, a, o)
        }
        ,
        a._create = function(t, s, n, r, a, o, h, u) {
            void 0 === o && (o = 1),
            void 0 === h && (h = !0);
            var c = H.formatURL(t)
              , _ = this.getRes(c);
            if (_)
                !_.hasOwnProperty("loaded") || _.loaded ? (n && n.runWith(1),
                s && s.run()) : s && i.loader._createListener(t, s.caller, s.method, s.args, !0, !1);
            else {
                var d = _t.getFileExtension(t)
                  , f = e.createMap[d];
                if (!f)
                    throw new Error("LoaderManager:unknown file(" + t + ") extension with: " + d + ".");
                r || (r = f[0]);
                var p = f[1];
                "atlas" == d ? this.load(t, s, n, p, o, h) : (r === he && (p = "htmlimage"),
                (_ = r ? new r : null).hasOwnProperty("_loaded") && (_._loaded = !1),
                _._setUrl(t),
                u && _._setGroup(u),
                this._createLoad(_, t, l.create(null, function(e) {
                    _ && !_.destroyed && e && _.onAsynLoaded.call(_, t, e, a),
                    s && s.run(),
                    i.loader.event(t)
                }), n, p, o, !1, u, !0),
                h && this.cacheRes(c, _))
            }
            return _
        }
        ,
        a.load = function(t, s, n, a, o, h, l, u) {
            var c = this;
            if (void 0 === o && (o = 1),
            void 0 === h && (h = !0),
            void 0 === u && (u = !1),
            t instanceof Array)
                return this._loadAssets(t, s, n, a, o, h, l);
            var _ = oe.getRes(t);
            if (null != _)
                i.timer.frameOnce(1, null, function() {
                    n && n.runWith(1),
                    s && s.runWith(_),
                    c._loaderCount || c.event("complete")
                });
            else {
                var d = e._resMap[t];
                d ? (s && d._createListener("complete", s.caller, s.method, s.args, !1, !1),
                n && d._createListener("progress", n.caller, n.method, n.args, !1, !1)) : ((d = this._infoPool.length ? this._infoPool.pop() : new r).url = t,
                d.type = a,
                d.cache = h,
                d.group = l,
                d.ignoreCache = u,
                s && d.on("complete", s.caller, s.method, s.args),
                n && d.on("progress", n.caller, n.method, n.args),
                e._resMap[t] = d,
                o = o < this._maxPriority ? o : this._maxPriority - 1,
                this._resInfos[o].push(d),
                this._next())
            }
            return this
        }
        ,
        a._createLoad = function(t, s, n, a, o, h, l, u, c) {
            var _ = this;
            if (void 0 === h && (h = 1),
            void 0 === l && (l = !0),
            void 0 === c && (c = !1),
            s instanceof Array)
                return this._loadAssets(s, n, a, o, h, l, u);
            var d = oe.getRes(s);
            if (null != d)
                i.timer.frameOnce(1, null, function() {
                    a && a.runWith(1),
                    n && n.runWith(d),
                    _._loaderCount || _.event("complete")
                });
            else {
                var f = e._resMap[s];
                f ? (n && f._createListener("complete", n.caller, n.method, n.args, !1, !1),
                a && f._createListener("progress", a.caller, a.method, a.args, !1, !1)) : ((f = this._infoPool.length ? this._infoPool.pop() : new r).url = s,
                f.clas = t,
                f.type = o,
                f.cache = l,
                f.group = u,
                f.ignoreCache = c,
                n && f.on("complete", n.caller, n.method, n.args),
                a && f.on("progress", a.caller, a.method, a.args),
                e._resMap[s] = f,
                h = h < this._maxPriority ? h : this._maxPriority - 1,
                this._resInfos[h].push(f),
                this._next())
            }
            return this
        }
        ,
        a._next = function() {
            if (!(this._loaderCount >= this.maxLoader)) {
                for (var t = 0; t < this._maxPriority; t++)
                    for (var e = this._resInfos[t]; e.length > 0; ) {
                        var i = e.shift();
                        if (i)
                            return this._doLoad(i)
                    }
                this._loaderCount || this.event("complete")
            }
        }
        ,
        a._doLoad = function(t) {
            function e(e) {
                i.offAll(),
                i._data = null,
                i._customParse = !1,
                s._loaders.push(i),
                s._endLoad(t, e instanceof Array ? [e] : e),
                s._loaderCount--,
                s._next()
            }
            this._loaderCount++;
            var i = this._loaders.length ? this._loaders.pop() : new oe;
            i.on("complete", null, e),
            i.on("progress", null, function(e) {
                t.event("progress", e)
            }),
            i.on("error", null, function(t) {
                e(null)
            });
            var s = this;
            i._class = t.clas,
            i.load(t.url, t.type, t.cache, t.group, t.ignoreCache)
        }
        ,
        a._endLoad = function(t, s) {
            var n = t.url;
            if (null == s) {
                var r = this._failRes[n] || 0;
                if (r < this.retryNum)
                    return console.warn("[warn]Retry to load:", n),
                    this._failRes[n] = r + 1,
                    void i.timer.once(this.retryDelay, this, this._addReTry, [t], !1);
                console.warn("[error]Failed to load:", n),
                this.event("error", n)
            }
            this._failRes[n] && (this._failRes[n] = 0),
            delete e._resMap[n],
            t.event("complete", s),
            t.offAll(),
            this._infoPool.push(t)
        }
        ,
        a._addReTry = function(t) {
            this._resInfos[this._maxPriority - 1].push(t),
            this._next()
        }
        ,
        a.clearRes = function(t, e) {
            void 0 === e && (e = !1),
            oe.clearRes(t, e)
        }
        ,
        a.getRes = function(t) {
            return oe.getRes(t)
        }
        ,
        a.cacheRes = function(t, e) {
            oe.cacheRes(t, e)
        }
        ,
        a.clearTextureRes = function(t) {
            oe.clearTextureRes(t)
        }
        ,
        a.setGroup = function(t, e) {
            oe.setGroup(t, e)
        }
        ,
        a.clearResByGroup = function(t) {
            oe.clearResByGroup(t)
        }
        ,
        a.clearUnLoaded = function() {
            for (var t = 0; t < this._maxPriority; t++) {
                for (var i = this._resInfos[t], s = i.length - 1; s > -1; s--) {
                    var n = i[s];
                    n && (n.offAll(),
                    this._infoPool.push(n))
                }
                i.length = 0
            }
            this._loaderCount = 0,
            e._resMap = {}
        }
        ,
        a.cancelLoadByUrls = function(t) {
            if (t)
                for (var e = 0, i = t.length; e < i; e++)
                    this.cancelLoadByUrl(t[e])
        }
        ,
        a.cancelLoadByUrl = function(t) {
            for (var i = 0; i < this._maxPriority; i++)
                for (var s = this._resInfos[i], n = s.length - 1; n > -1; n--) {
                    var r = s[n];
                    r && r.url === t && (s[n] = null,
                    r.offAll(),
                    this._infoPool.push(r))
                }
            e._resMap[t] && delete e._resMap[t]
        }
        ,
        a._loadAssets = function(t, e, i, s, n, r, a) {
            void 0 === n && (n = 1),
            void 0 === r && (r = !0);
            for (var o = t.length, h = 0, u = 0, c = [], _ = !0, d = 0; d < o; d++) {
                var f = t[d];
                "string" == typeof f && (f = {
                    url: f,
                    type: s,
                    size: 1,
                    priority: n
                }),
                f.size || (f.size = 1),
                f.progress = 0,
                u += f.size,
                c.push(f);
                var p = i ? l.create(null, function(t, e) {
                    if (null != i) {
                        t.progress = e;
                        for (var s = 0, n = 0; n < c.length; n++) {
                            var r = c[n];
                            s += r.size * r.progress
                        }
                        var a = s / u;
                        i.runWith(a)
                    }
                }, [f], !1) : null
                  , g = e || i ? l.create(null, function(t, i) {
                    h++,
                    t.progress = 1,
                    i || (_ = !1),
                    h === o && e && e.runWith(_)
                }, [f]) : null;
                this.load(f.url, g, p, f.type, f.priority || 1, r, f.group || a)
            }
            return this
        }
        ,
        e.cacheRes = function(t, e) {
            oe.cacheRes(t, e)
        }
        ,
        e._resMap = {},
        s(e, ["createMap", function() {
            return this.createMap = {
                atlas: [null, "atlas"]
            }
        }
        ]),
        e.__init$ = function() {
            r = function(t) {
                function e() {
                    this.url = null,
                    this.type = null,
                    this.cache = !1,
                    this.group = null,
                    this.ignoreCache = !1,
                    this.clas = null,
                    e.__super.call(this)
                }
                return n(e, "", h),
                e
            }()
        }
        ,
        e
    }()
      , ie = function(t) {
        function e() {
            this.url = null,
            this.audio = null,
            this.loaded = !1,
            e.__super.call(this)
        }
        n(e, "laya.media.h5audio.AudioSound", h);
        var i = e.prototype;
        return i.dispose = function() {
            var t = e._audioCache[this.url];
            t && (t.src = "",
            delete e._audioCache[this.url])
        }
        ,
        i.load = function(t) {
            function i() {
                n(),
                a.loaded = !0,
                a.event("complete")
            }
            function s() {
                r.load = null,
                n(),
                a.event("error")
            }
            function n() {
                r.removeEventListener("canplaythrough", i),
                r.removeEventListener("error", s)
            }
            t = H.formatURL(t),
            this.url = t;
            var r;
            if (t == G._tMusic ? (e._initMusicAudio(),
            (r = e._musicAudio).src != t && (e._audioCache[r.src] = null,
            r = null)) : r = e._audioCache[t],
            r && r.readyState >= 2)
                this.event("complete");
            else {
                r || (t == G._tMusic ? (e._initMusicAudio(),
                r = e._musicAudio) : r = et.createElement("audio"),
                e._audioCache[t] = r,
                r.src = t),
                r.addEventListener("canplaythrough", i),
                r.addEventListener("error", s);
                var a = this;
                this.audio = r,
                r.load ? r.load() : s()
            }
        }
        ,
        i.play = function(t, i) {
            if (void 0 === t && (t = 0),
            void 0 === i && (i = 0),
            !this.url)
                return null;
            var s;
            if (!(s = this.url == G._tMusic ? e._musicAudio : e._audioCache[this.url]))
                return null;
            var n;
            n = ot.getItem("audio:" + this.url),
            X.isConchApp ? n || ((n = et.createElement("audio")).src = this.url) : this.url == G._tMusic ? (e._initMusicAudio(),
            (n = e._musicAudio).src = this.url) : n = n || s.cloneNode(!0);
            var r = new Ie(n);
            return r.url = this.url,
            r.loops = i,
            r.startTime = t,
            r.play(),
            G.addChannel(r),
            r
        }
        ,
        r(0, i, "duration", function() {
            var t;
            return (t = e._audioCache[this.url]) ? t.duration : 0
        }),
        e._initMusicAudio = function() {
            e._musicAudio || (e._musicAudio || (e._musicAudio = et.createElement("audio")),
            X.isConchApp || et.document.addEventListener("mousedown", e._makeMusicOK))
        }
        ,
        e._makeMusicOK = function() {
            et.document.removeEventListener("mousedown", e._makeMusicOK),
            e._musicAudio.src ? e._musicAudio.play() : (e._musicAudio.src = "",
            e._musicAudio.load())
        }
        ,
        e._audioCache = {},
        e._musicAudio = null,
        e
    }()
      , se = function(t) {
        function e() {
            this.url = null,
            this.loops = 0,
            this.startTime = NaN,
            this.isStopped = !1,
            this.completeHandler = null,
            e.__super.call(this)
        }
        n(e, "laya.media.SoundChannel", h);
        var i = e.prototype;
        return i.play = function() {}
        ,
        i.stop = function() {}
        ,
        i.pause = function() {}
        ,
        i.resume = function() {}
        ,
        i.__runComplete = function(t) {
            t && t.run()
        }
        ,
        r(0, i, "volume", function() {
            return 1
        }, function(t) {}),
        r(0, i, "position", function() {
            return 0
        }),
        r(0, i, "duration", function() {
            return 0
        }),
        e
    }()
      , ne = function(t) {
        function e() {
            e.__super.call(this)
        }
        n(e, "laya.media.Sound", h);
        var i = e.prototype;
        return i.load = function(t) {}
        ,
        i.play = function(t, e) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            null
        }
        ,
        i.dispose = function() {}
        ,
        r(0, i, "duration", function() {
            return 0
        }),
        e
    }()
      , re = function(t) {
        function e() {
            this.url = null,
            this.loaded = !1,
            this.data = null,
            this.audioBuffer = null,
            this.__toPlays = null,
            this._disposed = !1,
            e.__super.call(this)
        }
        n(e, "laya.media.webaudio.WebAudioSound", h);
        var i = e.prototype;
        return i.load = function(t) {
            var i = this;
            if (t = H.formatURL(t),
            this.url = t,
            this.audioBuffer = e._dataCache[t],
            this.audioBuffer)
                this._loaded(this.audioBuffer);
            else if (e.e.on("loaded:" + t, this, this._loaded),
            e.e.on("err:" + t, this, this._err),
            !e.__loadingSound[t]) {
                e.__loadingSound[t] = !0;
                var s = new et.window.XMLHttpRequest;
                s.open("GET", t, !0),
                s.responseType = "arraybuffer",
                s.onload = function() {
                    i._disposed ? i._removeLoadEvents() : (i.data = s.response,
                    e.buffs.push({
                        buffer: i.data,
                        url: i.url
                    }),
                    e.decode())
                }
                ,
                s.onerror = function(t) {
                    i._err()
                }
                ,
                s.send()
            }
        }
        ,
        i._err = function() {
            this._removeLoadEvents(),
            e.__loadingSound[this.url] = !1,
            this.event("error")
        }
        ,
        i._loaded = function(t) {
            this._removeLoadEvents(),
            this._disposed || (this.audioBuffer = t,
            e._dataCache[this.url] = this.audioBuffer,
            this.loaded = !0,
            this.event("complete"))
        }
        ,
        i._removeLoadEvents = function() {
            e.e.off("loaded:" + this.url, this, this._loaded),
            e.e.off("err:" + this.url, this, this._err)
        }
        ,
        i.__playAfterLoaded = function() {
            if (this.__toPlays) {
                var t, e = 0, i = 0;
                i = (t = this.__toPlays).length;
                var s;
                for (e = 0; e < i; e++)
                    (s = t[e])[2] && !s[2].isStopped && this.play(s[0], s[1], s[2]);
                this.__toPlays.length = 0
            }
        }
        ,
        i.play = function(t, e, i) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            i = i || new Re,
            this.audioBuffer || this.url && (this.__toPlays || (this.__toPlays = []),
            this.__toPlays.push([t, e, i]),
            this.once("complete", this, this.__playAfterLoaded),
            this.load(this.url)),
            i.url = this.url,
            i.loops = e,
            i.audioBuffer = this.audioBuffer,
            i.startTime = t,
            i.play(),
            G.addChannel(i),
            i
        }
        ,
        i.dispose = function() {
            this._disposed = !0,
            delete e._dataCache[this.url],
            delete e.__loadingSound[this.url],
            this.audioBuffer = null,
            this.data = null,
            this.__toPlays = []
        }
        ,
        r(0, i, "duration", function() {
            return this.audioBuffer ? this.audioBuffer.duration : 0
        }),
        e.decode = function() {
            e.buffs.length <= 0 || e.isDecoding || (e.isDecoding = !0,
            e.tInfo = e.buffs.shift(),
            e.ctx.decodeAudioData(e.tInfo.buffer, e._done, e._fail))
        }
        ,
        e._done = function(t) {
            e.e.event("loaded:" + e.tInfo.url, t),
            e.isDecoding = !1,
            e.decode()
        }
        ,
        e._fail = function() {
            e.e.event("err:" + e.tInfo.url, null),
            e.isDecoding = !1,
            e.decode()
        }
        ,
        e._playEmptySound = function() {
            if (null != e.ctx) {
                var t = e.ctx.createBufferSource();
                t.buffer = e._miniBuffer,
                t.connect(e.ctx.destination),
                t.start(0, 0, 0)
            }
        }
        ,
        e._unlock = function() {
            e._unlocked || (e._playEmptySound(),
            "running" == e.ctx.state && (et.document.removeEventListener("mousedown", e._unlock, !0),
            et.document.removeEventListener("touchend", e._unlock, !0),
            e._unlocked = !0))
        }
        ,
        e.initWebAudio = function() {
            "running" != e.ctx.state && (e._unlock(),
            et.document.addEventListener("mousedown", e._unlock, !0),
            et.document.addEventListener("touchend", e._unlock, !0))
        }
        ,
        e._dataCache = {},
        e.buffs = [],
        e.isDecoding = !1,
        e._unlocked = !1,
        e.tInfo = null,
        e.__loadingSound = {},
        s(e, ["window", function() {
            return this.window = et.window
        }
        , "webAudioEnabled", function() {
            return this.webAudioEnabled = e.window.AudioContext || e.window.webkitAudioContext || e.window.mozAudioContext
        }
        , "ctx", function() {
            return this.ctx = e.webAudioEnabled ? new (e.window.AudioContext || e.window.webkitAudioContext || e.window.mozAudioContext) : void 0
        }
        , "_miniBuffer", function() {
            return this._miniBuffer = e.ctx.createBuffer(1, 1, 22050)
        }
        , "e", function() {
            return this.e = new h
        }
        ]),
        e
    }()
      , ae = function(t) {
        function e() {
            this._responseType = null,
            this._data = null,
            e.__super.call(this),
            this._http = new et.window.XMLHttpRequest
        }
        n(e, "laya.net.HttpRequest", h);
        var i = e.prototype;
        return i.send = function(t, e, i, s, n) {
            void 0 === i && (i = "get"),
            void 0 === s && (s = "text"),
            this._responseType = s,
            this._data = null;
            var r = this
              , a = this._http;
            if (a.open(i, t, !0),
            n)
                for (var o = 0; o < n.length; o++)
                    a.setRequestHeader(n[o++], n[o]);
            else
                X.isConchApp || (e && "string" != typeof e ? a.setRequestHeader("Content-Type", "application/json") : a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
            a.responseType = "arraybuffer" !== s ? "text" : "arraybuffer",
            a.onerror = function(t) {
                r._onError(t)
            }
            ,
            a.onabort = function(t) {
                r._onAbort(t)
            }
            ,
            a.onprogress = function(t) {
                r._onProgress(t)
            }
            ,
            a.onload = function(t) {
                r._onLoad(t)
            }
            ,
            a.send(e)
        }
        ,
        i._onProgress = function(t) {
            t && t.lengthComputable && this.event("progress", t.loaded / t.total)
        }
        ,
        i._onAbort = function(t) {
            this.error("Request was aborted by user")
        }
        ,
        i._onError = function(t) {
            this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText)
        }
        ,
        i._onLoad = function(t) {
            var e = this._http
              , i = void 0 !== e.status ? e.status : 200;
            200 === i || 204 === i || 0 === i ? this.complete() : this.error("[" + e.status + "]" + e.statusText + ":" + e.responseURL)
        }
        ,
        i.error = function(t) {
            this.clear(),
            this.event("error", t)
        }
        ,
        i.complete = function() {
            this.clear();
            var t = !0;
            try {
                "json" === this._responseType ? this._data = JSON.parse(this._http.responseText) : "xml" === this._responseType ? this._data = _t.parseXMLFromString(this._http.responseText) : this._data = this._http.response || this._http.responseText
            } catch (e) {
                t = !1,
                this.error(e.message)
            }
            t && this.event("complete", this._data instanceof Array ? [this._data] : this._data)
        }
        ,
        i.clear = function() {
            var t = this._http;
            t.onerror = t.onabort = t.onprogress = t.onload = null
        }
        ,
        r(0, i, "url", function() {
            return this._http.responseURL
        }),
        r(0, i, "http", function() {
            return this._http
        }),
        r(0, i, "data", function() {
            return this._data
        }),
        e
    }()
      , oe = function(t) {
        function e() {
            this._data = null,
            this._class = null,
            this._url = null,
            this._type = null,
            this._cache = !1,
            this._http = null,
            this._customParse = !1,
            e.__super.call(this)
        }
        n(e, "laya.net.Loader", h);
        var s = e.prototype;
        return s.load = function(t, i, s, n, r) {
            if (void 0 === s && (s = !0),
            void 0 === r && (r = !1),
            this._url = t,
            0 === t.indexOf("data:image") ? this._type = i = "image" : (this._type = i || (i = this.getTypeFromUrl(t)),
            t = H.formatURL(t)),
            this._cache = s,
            this._data = null,
            !r && e.loadedMap[t])
                return this._data = e.loadedMap[t],
                this.event("progress", 1),
                void this.event("complete", this._data);
            if (n && e.setGroup(t, n),
            null != e.parserMap[i])
                return this._customParse = !0,
                void (e.parserMap[i]instanceof laya.utils.Handler ? e.parserMap[i].runWith(this) : e.parserMap[i].call(null, this));
            if ("image" === i || "htmlimage" === i || "nativeimage" === i)
                return this._loadImage(t);
            if ("sound" === i)
                return this._loadSound(t);
            if ("ttf" === i)
                return this._loadTTF(t);
            var a;
            switch (i) {
            case "atlas":
            case "plf":
                a = "json";
                break;
            case "font":
                a = "xml";
                break;
            case "pkm":
                a = "arraybuffer";
                break;
            default:
                a = i
            }
            e.preLoadedMap[t] ? this.onLoaded(e.preLoadedMap[t]) : (this._http || (this._http = new ae,
            this._http.on("progress", this, this.onProgress),
            this._http.on("error", this, this.onError),
            this._http.on("complete", this, this.onLoaded)),
            this._http.send(t, null, "get", a))
        }
        ,
        s.getTypeFromUrl = function(t) {
            var i = _t.getFileExtension(t);
            return i ? e.typeMap[i] : (console.warn("Not recognize the resources suffix", t),
            "text")
        }
        ,
        s._loadTTF = function(t) {
            t = H.formatURL(t);
            var e = new z;
            e.complete = l.create(this, this.onLoaded),
            e.load(t)
        }
        ,
        s._loadImage = function(t) {
            function i() {
                s.onload = null,
                s.onerror = null,
                delete e.imgCache[t]
            }
            t = H.formatURL(t);
            var s, n = this, r = function() {
                i(),
                n.onLoaded(s)
            }, a = function() {
                i(),
                n.event("error", "Load image failed")
            };
            "nativeimage" === this._type ? ((s = new et.window.Image).crossOrigin = "",
            s.onload = r,
            s.onerror = a,
            s.src = t,
            e.imgCache[t] = s) : new ii.create(t,{
                onload: r,
                onerror: a,
                onCreate: function(i) {
                    s = i,
                    e.imgCache[t] = i
                }
            })
        }
        ,
        s._loadSound = function(t) {
            function e() {
                i.offAll()
            }
            var i = new G._soundClass
              , s = this;
            i.on("complete", this, function() {
                e(),
                s.onLoaded(i)
            }),
            i.on("error", this, function() {
                e(),
                i.dispose(),
                s.event("error", "Load sound failed")
            }),
            i.load(t)
        }
        ,
        s.onProgress = function(t) {
            "atlas" === this._type ? this.event("progress", .3 * t) : this.event("progress", t)
        }
        ,
        s.onError = function(t) {
            this.event("error", t)
        }
        ,
        s.onLoaded = function(t) {
            var i = this._type;
            if ("plf" == i)
                this.parsePLFData(t),
                this.complete(t);
            else if ("image" === i) {
                var s = new he(t);
                s.url = this._url,
                this.complete(s)
            } else if ("sound" === i || "htmlimage" === i || "nativeimage" === i)
                this.complete(t);
            else if ("atlas" === i) {
                if (!t.src && !t._setContext) {
                    if (!this._data) {
                        if (this._data = t,
                        t.meta && t.meta.image)
                            for (var n = t.meta.image.split(","), r = this._url.indexOf("/") >= 0 ? "/" : "\\", a = this._url.lastIndexOf(r), o = a >= 0 ? this._url.substr(0, a + 1) : "", h = 0, l = n.length; h < l; h++)
                                n[h] = o + n[h];
                        else
                            n = [this._url.replace(".json", ".png")];
                        n.reverse(),
                        t.toLoads = n,
                        t.pics = []
                    }
                    return this.event("progress", .3 + 1 / n.length * .6),
                    this._loadImage(n.pop())
                }
                if (this._data.pics.push(t),
                this._data.toLoads.length > 0)
                    return this.event("progress", .3 + 1 / this._data.toLoads.length * .6),
                    this._loadImage(this._data.toLoads.pop());
                var u = this._data.frames
                  , c = this._url.split("?")[0]
                  , _ = this._data.meta && this._data.meta.prefix ? this._data.meta.prefix : c.substring(0, c.lastIndexOf(".")) + "/"
                  , d = this._data.pics
                  , f = H.formatURL(this._url)
                  , p = e.atlasMap[f] || (e.atlasMap[f] = []);
                p.dir = _;
                var g = 1;
                if (this._data.meta && this._data.meta.scale && 1 != this._data.meta.scale) {
                    g = parseFloat(this._data.meta.scale);
                    for (var m in u) {
                        var v = u[m]
                          , y = d[v.frame.idx ? v.frame.idx : 0]
                          , x = H.formatURL(_ + m);
                        y.scaleRate = g,
                        e.cacheRes(x, he.create(y, v.frame.x, v.frame.y, v.frame.w, v.frame.h, v.spriteSourceSize.x, v.spriteSourceSize.y, v.sourceSize.w, v.sourceSize.h)),
                        e.loadedMap[x].url = x,
                        p.push(x)
                    }
                } else
                    for (m in u)
                        y = d[(v = u[m]).frame.idx ? v.frame.idx : 0],
                        x = H.formatURL(_ + m),
                        e.cacheRes(x, he.create(y, v.frame.x, v.frame.y, v.frame.w, v.frame.h, v.spriteSourceSize.x, v.spriteSourceSize.y, v.sourceSize.w, v.sourceSize.h)),
                        e.loadedMap[x].url = x,
                        p.push(x);
                delete this._data.pics,
                this.complete(this._data)
            } else if ("font" == i) {
                if (!t.src)
                    return this._data = t,
                    this.event("progress", .5),
                    this._loadImage(this._url.replace(".fnt", ".png"));
                var b = new T;
                b.parseFont(this._data, t);
                var w = this._url.split(".fnt")[0].split("/")
                  , S = w[w.length - 1];
                Oe.registerBitmapFont(S, b),
                this._data = b,
                this.complete(this._data)
            } else if ("pkm" == i) {
                var C = ii.create(t, this._url)
                  , A = new he(C);
                A.url = this._url,
                this.complete(A)
            } else
                this.complete(t)
        }
        ,
        s.parsePLFData = function(t) {
            var i, s, n;
            for (i in t)
                switch (n = t[i],
                i) {
                case "json":
                case "text":
                    for (s in n)
                        e.preLoadedMap[H.formatURL(s)] = n[s];
                    break;
                default:
                    for (s in n)
                        e.preLoadedMap[H.formatURL(s)] = n[s]
                }
        }
        ,
        s.complete = function(t) {
            this._data = t,
            this._customParse ? this.event("loaded", t instanceof Array ? [t] : t) : (e._loaders.push(this),
            e._isWorking || e.checkNext())
        }
        ,
        s.endLoad = function(t) {
            t && (this._data = t),
            this._cache && e.cacheRes(this._url, this._data),
            this.event("progress", 1),
            this.event("complete", this.data instanceof Array ? [this.data] : this.data)
        }
        ,
        r(0, s, "url", function() {
            return this._url
        }),
        r(0, s, "data", function() {
            return this._data
        }),
        r(0, s, "cache", function() {
            return this._cache
        }),
        r(0, s, "type", function() {
            return this._type
        }),
        e.checkNext = function() {
            e._isWorking = !0;
            for (var t = et.now(); e._startIndex < e._loaders.length; )
                if (et.now(),
                e._loaders[e._startIndex].endLoad(),
                e._startIndex++,
                et.now() - t > e.maxTimeOut)
                    return console.warn("loader callback cost a long time:" + (et.now() - t) + " url=" + e._loaders[e._startIndex - 1].url),
                    void i.timer.frameOnce(1, null, e.checkNext);
            e._loaders.length = 0,
            e._startIndex = 0,
            e._isWorking = !1
        }
        ,
        e.clearRes = function(t, i) {
            void 0 === i && (i = !1),
            t = H.formatURL(t);
            var s = e.getAtlas(t);
            if (s) {
                for (var n = 0, r = s.length; n < r; n++) {
                    var a = s[n]
                      , o = e.getRes(a);
                    delete e.loadedMap[a],
                    o && o.destroy(i)
                }
                s.length = 0,
                delete e.atlasMap[t],
                delete e.loadedMap[t]
            } else {
                var h = e.loadedMap[t];
                h && (delete e.loadedMap[t],
                h instanceof laya.resource.Texture && h.bitmap && h.destroy(i))
            }
        }
        ,
        e.clearTextureRes = function(t) {
            t = H.formatURL(t);
            var e = laya.net.Loader.getAtlas(t)
              , i = e && e.length > 0 ? laya.net.Loader.getRes(e[0]) : laya.net.Loader.getRes(t);
            i && i.bitmap && (X.isConchApp ? i.bitmap.source.releaseTexture && i.bitmap.source.releaseTexture() : null == i.bitmap._atlaser && i.bitmap.releaseResource(!0))
        }
        ,
        e.getRes = function(t) {
            return e.loadedMap[H.formatURL(t)]
        }
        ,
        e.getAtlas = function(t) {
            return e.atlasMap[H.formatURL(t)]
        }
        ,
        e.cacheRes = function(t, i) {
            t = H.formatURL(t),
            null != e.loadedMap[t] ? console.warn("Resources already exist,is repeated loading:", t) : e.loadedMap[t] = i
        }
        ,
        e.setGroup = function(t, i) {
            e.groupMap[i] || (e.groupMap[i] = []),
            e.groupMap[i].push(t)
        }
        ,
        e.clearResByGroup = function(t) {
            if (e.groupMap[t]) {
                var i = e.groupMap[t]
                  , s = 0
                  , n = i.length;
                for (s = 0; s < n; s++)
                    e.clearRes(i[s]);
                i.length = 0
            }
        }
        ,
        e.TEXT = "text",
        e.JSON = "json",
        e.XML = "xml",
        e.BUFFER = "arraybuffer",
        e.IMAGE = "image",
        e.SOUND = "sound",
        e.ATLAS = "atlas",
        e.FONT = "font",
        e.TTF = "ttf",
        e.PLF = "plf",
        e.PKM = "pkm",
        e.typeMap = {
            png: "image",
            jpg: "image",
            jpeg: "image",
            txt: "text",
            json: "json",
            xml: "xml",
            als: "atlas",
            atlas: "atlas",
            mp3: "sound",
            ogg: "sound",
            wav: "sound",
            part: "json",
            fnt: "font",
            pkm: "pkm",
            ttf: "ttf",
            plf: "plf"
        },
        e.parserMap = {},
        e.groupMap = {},
        e.maxTimeOut = 100,
        e.loadedMap = {},
        e.preLoadedMap = {},
        e.atlasMap = {},
        e._loaders = [],
        e._isWorking = !1,
        e._startIndex = 0,
        e.imgCache = {},
        e
    }()
      , he = function(e) {
        function s(t, e) {
            this.offsetX = 0,
            this.offsetY = 0,
            this.sourceWidth = 0,
            this.sourceHeight = 0,
            this._w = 0,
            this._h = 0,
            this._uvID = 0,
            this._atlasID = -1,
            this.scaleRate = 1,
            s.__super.call(this),
            t && null != t._addReference && t._addReference(),
            this.setTo(t, e)
        }
        n(s, "laya.resource.Texture", h);
        var a = s.prototype;
        return a._setUrl = function(t) {
            this.url = t
        }
        ,
        a.setTo = function(e, i) {
            if (e instanceof t.HTMLElement) {
                var n = He.create("2D", e);
                this.bitmap = n
            } else
                this.bitmap = e;
            if (this.uv = i || s.DEF_UV,
            e) {
                this._w = e.width,
                this._h = e.height,
                this.sourceWidth = this.sourceWidth || this._w,
                this.sourceHeight = this.sourceHeight || this._h,
                this._loaded = this._w > 0;
                var r = this;
                if (this._loaded)
                    o.addToAtlas && o.addToAtlas(r);
                else {
                    var a = e;
                    a instanceof laya.resource.HTMLImage && a.image && a.image.addEventListener("load", function(t) {
                        o.addToAtlas && o.addToAtlas(r)
                    }, !1)
                }
            }
        }
        ,
        a.active = function() {
            this.bitmap && this.bitmap.activeResource()
        }
        ,
        a.destroy = function(t) {
            if (void 0 === t && (t = !1),
            this.bitmap && this.bitmap.referenceCount > 0) {
                var e = this.bitmap;
                t ? (X.isConchApp && e.source && e.source.conchDestroy && this.bitmap.source.conchDestroy(),
                this.bitmap = null,
                e.dispose(),
                e._clearReference()) : (e._removeReference(),
                0 == e.referenceCount && (X.isConchApp && e.source && e.source.conchDestroy && this.bitmap.source.conchDestroy(),
                this.bitmap = null,
                e.dispose())),
                this.url && this === i.loader.getRes(this.url) && i.loader.clearRes(this.url, t),
                this._loaded = !1
            }
        }
        ,
        a.load = function(t) {
            var e = this;
            this._loaded = !1,
            t = H.customFormat(t);
            var i = this.bitmap || (this.bitmap = ii.create(t));
            i && i._addReference();
            var s = this;
            i.onload = function() {
                i.onload = null,
                s._loaded = !0,
                e.sourceWidth = e._w = i.width,
                e.sourceHeight = e._h = i.height,
                s.event("loaded", this),
                o.addToAtlas && o.addToAtlas(s)
            }
        }
        ,
        a.addTextureToAtlas = function(t) {
            o.addTextureToAtlas(this)
        }
        ,
        a.getPixels = function(t, e, i, s) {
            if (X.isConchApp) {
                var n = this.bitmap;
                if (n.source && n.source.getImageData) {
                    var r = n.source.getImageData(t, e, i, s)
                      , a = new Uint8Array(r);
                    return Array.from(a)
                }
                return null
            }
            if (X.isWebGL)
                return o.getTexturePixels(this, t, e, i, s);
            et.canvas.size(i, s),
            et.canvas.clear(),
            et.context.drawTexture(this, -t, -e, this.width, this.height, 0, 0);
            return et.context.getImageData(0, 0, i, s).data
        }
        ,
        a.onAsynLoaded = function(t, e) {
            e && e._addReference(),
            this.setTo(e, this.uv)
        }
        ,
        r(0, a, "source", function() {
            return this.bitmap ? (this.bitmap.activeResource(),
            this.bitmap.source) : null
        }),
        r(0, a, "loaded", function() {
            return this._loaded
        }),
        r(0, a, "released", function() {
            return !this.bitmap || this.bitmap.released
        }),
        r(0, a, "width", function() {
            return this._w ? this._w : this.uv && this.uv !== s.DEF_UV ? (this.uv[2] - this.uv[0]) * this.bitmap.width : this.bitmap.width
        }, function(t) {
            this._w = t,
            this.sourceWidth || (this.sourceWidth = t)
        }),
        r(0, a, "repeat", function() {
            return !X.isWebGL || !this.bitmap || this.bitmap.repeat
        }, function(t) {
            t && X.isWebGL && this.bitmap && (this.bitmap.repeat = t,
            t && (this.bitmap.enableMerageInAtlas = !1))
        }),
        r(0, a, "height", function() {
            return this._h ? this._h : this.uv && this.uv !== s.DEF_UV ? (this.uv[5] - this.uv[1]) * this.bitmap.height : this.bitmap.height
        }, function(t) {
            this._h = t,
            this.sourceHeight || (this.sourceHeight = t)
        }),
        r(0, a, "isLinearSampling", function() {
            return !X.isWebGL || 9728 != this.bitmap.minFifter
        }, function(t) {
            !t && X.isWebGL && (t || -1 != this.bitmap.minFifter || -1 != this.bitmap.magFifter || (this.bitmap.minFifter = 9728,
            this.bitmap.magFifter = 9728,
            this.bitmap.enableMerageInAtlas = !1))
        }),
        s.moveUV = function(t, e, i) {
            for (var s = 0; s < 8; s += 2)
                i[s] += t,
                i[s + 1] += e;
            return i
        }
        ,
        s.create = function(t, e, i, n, r, a, h, l, u) {
            void 0 === a && (a = 0),
            void 0 === h && (h = 0),
            void 0 === l && (l = 0),
            void 0 === u && (u = 0);
            var c = t instanceof laya.resource.Texture
              , _ = c ? t.uv : s.DEF_UV
              , d = c ? t.bitmap : t
              , f = o.isAtlas(d);
            if (f) {
                var p = d._atlaser
                  , g = t._atlasID;
                if (-1 == g)
                    throw new Error("create texture error");
                d = p._inAtlasTextureBitmapValue[g],
                _ = p._inAtlasTextureOriUVValue[g]
            }
            var m = new s(d,null);
            d.width && e + n > d.width && (n = d.width - e),
            d.height && i + r > d.height && (r = d.height - i),
            m.width = n,
            m.height = r,
            m.offsetX = a,
            m.offsetY = h,
            m.sourceWidth = l || n,
            m.sourceHeight = u || r;
            var v = 1 / d.width
              , y = 1 / d.height;
            e *= v,
            i *= y,
            n *= v,
            r *= y;
            var x = m.uv[0]
              , b = m.uv[1]
              , T = m.uv[4]
              , w = m.uv[5]
              , S = T - x
              , C = w - b
              , A = s.moveUV(_[0], _[1], [e, i, e + n, i, e + n, i + r, e, i + r]);
            m.uv = [x + A[0] * S, b + A[1] * C, T - (1 - A[2]) * S, b + A[3] * C, T - (1 - A[4]) * S, w - (1 - A[5]) * C, x + A[6] * S, w - (1 - A[7]) * C],
            f && m.addTextureToAtlas();
            var M = d.scaleRate;
            return M && 1 != M ? (m.sourceWidth /= M,
            m.sourceHeight /= M,
            m.width /= M,
            m.height /= M,
            m.scaleRate = M,
            m.offsetX /= M,
            m.offsetY /= M) : m.scaleRate = 1,
            m
        }
        ,
        s.createFromTexture = function(t, e, i, n, r) {
            var a = t.scaleRate;
            1 != a && (e *= a,
            i *= a,
            n *= a,
            r *= a);
            var o = V.TEMP.setTo(e - t.offsetX, i - t.offsetY, n, r)
              , h = o.intersection(s._rect1.setTo(0, 0, t.width, t.height), s._rect2);
            if (!h)
                return null;
            var l = s.create(t, h.x, h.y, h.width, h.height, h.x - o.x, h.y - o.y, n, r);
            return l.bitmap._removeReference(),
            l
        }
        ,
        s.DEF_UV = [0, 0, 1, 0, 1, 1, 0, 1],
        s.INV_UV = [0, 1, 1, 1, 1, 0, 0, 0],
        s._rect1 = new V,
        s._rect2 = new V,
        s
    }()
      , le = function(t) {
        function e() {
            this.autoCacheCmd = !0,
            this._width = 0,
            this._height = 0,
            this._source = null,
            this._sizeGrid = null,
            this._isChanged = !1,
            this._offset = null,
            e.__super.call(this)
        }
        n(e, "laya.ui.AutoBitmap", t);
        var s = e.prototype;
        return s.destroy = function() {
            t.prototype.destroy.call(this),
            this._source = null,
            this._sizeGrid = null,
            this._offset = null
        }
        ,
        s._setChanged = function() {
            this._isChanged || (this._isChanged = !0,
            i.timer.callLater(this, this.changeSource))
        }
        ,
        s.changeSource = function() {
            this._isChanged = !1;
            var t = this._source;
            if (t && t.bitmap) {
                var i = this.width
                  , s = this.height
                  , n = this._sizeGrid
                  , r = t.sourceWidth
                  , a = t.sourceHeight;
                if (!n || r === i && a === s)
                    this.cleanByTexture(t, this._offset ? this._offset[0] : 0, this._offset ? this._offset[1] : 0, i, s);
                else {
                    t.$_GID || (t.$_GID = _t.getGID());
                    var o = t.$_GID + "." + i + "." + s + "." + n.join(".");
                    if (_t.isOKCmdList(ft.I.get(o)))
                        return void (this.cmds = ft.I.get(o));
                    this.clear();
                    var h = n[0]
                      , l = n[1]
                      , u = n[2]
                      , c = n[3]
                      , _ = n[4]
                      , d = !1;
                    if (i == r && (c = l = 0),
                    s == a && (h = u = 0),
                    c + l > i) {
                        var f = i;
                        d = !0,
                        i = c + l,
                        this.save(),
                        this.clipRect(0, 0, f, s)
                    }
                    c && h && this.drawTexture(e.getTexture(t, 0, 0, c, h), 0, 0, c, h),
                    l && h && this.drawTexture(e.getTexture(t, r - l, 0, l, h), i - l, 0, l, h),
                    c && u && this.drawTexture(e.getTexture(t, 0, a - u, c, u), 0, s - u, c, u),
                    l && u && this.drawTexture(e.getTexture(t, r - l, a - u, l, u), i - l, s - u, l, u),
                    h && this.drawBitmap(_, e.getTexture(t, c, 0, r - c - l, h), c, 0, i - c - l, h),
                    u && this.drawBitmap(_, e.getTexture(t, c, a - u, r - c - l, u), c, s - u, i - c - l, u),
                    c && this.drawBitmap(_, e.getTexture(t, 0, h, c, a - h - u), 0, h, c, s - h - u),
                    l && this.drawBitmap(_, e.getTexture(t, r - l, h, l, a - h - u), i - l, h, l, s - h - u),
                    this.drawBitmap(_, e.getTexture(t, c, h, r - c - l, a - h - u), c, h, i - c - l, s - h - u),
                    d && this.restore(),
                    this.autoCacheCmd && !X.isConchApp && ft.I.set(o, this.cmds)
                }
                this._repaint()
            }
        }
        ,
        s.drawBitmap = function(t, e, i, s, n, r) {
            void 0 === n && (n = 0),
            void 0 === r && (r = 0),
            n < .1 || r < .1 || (!t || e.width == n && e.height == r ? this.drawTexture(e, i, s, n, r) : this.fillTexture(e, i, s, n, r))
        }
        ,
        s.clear = function(e) {
            void 0 === e && (e = !0),
            t.prototype.clear.call(this, !1)
        }
        ,
        r(0, s, "sizeGrid", function() {
            return this._sizeGrid
        }, function(t) {
            this._sizeGrid = t,
            this._setChanged()
        }),
        r(0, s, "width", function() {
            return this._width ? this._width : this._source ? this._source.sourceWidth : 0
        }, function(t) {
            this._width != t && (this._width = t,
            this._setChanged())
        }),
        r(0, s, "height", function() {
            return this._height ? this._height : this._source ? this._source.sourceHeight : 0
        }, function(t) {
            this._height != t && (this._height = t,
            this._setChanged())
        }),
        r(0, s, "source", function() {
            return this._source
        }, function(t) {
            t ? (this._source = t,
            this._setChanged()) : (this._source = null,
            this.clear())
        }),
        e.getTexture = function(t, e, i, s, n) {
            s <= 0 && (s = 1),
            n <= 0 && (n = 1),
            t.$_GID || (t.$_GID = _t.getGID());
            var r = t.$_GID + "." + e + "." + i + "." + s + "." + n
              , a = ft.I.get(r);
            return a && a.source || (a = he.createFromTexture(t, e, i, s, n),
            ft.I.set(r, a)),
            a
        }
        ,
        e
    }(x)
      , ue = function(t) {
        function e() {
            e.__super.call(this)
        }
        n(e, "laya.webgl.display.GraphicsGL", x);
        var i = e.prototype;
        return i.setShader = function(t) {
            this._saveToCmd(X.context._setShader, [t])
        }
        ,
        i.setIBVB = function(t, e, i, s, n, r) {
            this._saveToCmd(X.context._setIBVB, [t, e, i, s, n, r])
        }
        ,
        i.drawParticle = function(t, e, i) {
            var s = o.createParticleTemplate2D(i);
            s.x = t,
            s.y = e,
            this._saveToCmd(X.context._drawParticle, [s])
        }
        ,
        e
    }()
      , ce = function(t) {
        function e(t) {
            this._bgground = null,
            this._border = null,
            this._rect = null,
            this.underLine = 0,
            this.lineHeight = 0,
            e.__super.call(this),
            this._padding = e._PADDING,
            this._spacing = e._SPACING,
            this._aligns = e._ALIGNS,
            this._font = S.EMPTY,
            this._ower = t
        }
        n(e, "laya.display.css.CSSStyle", t);
        var i = e.prototype;
        return i.destroy = function() {
            this._ower = null,
            this._font = null,
            this._rect = null
        }
        ,
        i.inherit = function(t) {
            this._font = t._font,
            this._spacing = t._spacing === e._SPACING ? e._SPACING : t._spacing.slice(),
            this.lineHeight = t.lineHeight
        }
        ,
        i._widthAuto = function() {
            return 0 != (262144 & this._type)
        }
        ,
        i.widthed = function(t) {
            return 0 != (8 & this._type)
        }
        ,
        i._calculation = function(t, e) {
            function i(t, e, i) {
                return t * i[0] + e * i[1] + i[2]
            }
            function s(t) {
                var e = r.width
                  , s = n.width;
                a.width && (n.width = i(e, s, a.width)),
                a.height && (n.height = i(e, s, a.height)),
                a.left && (n.x = i(e, s, a.left)),
                a.top && (n.y = i(e, s, a.top))
            }
            if (e.indexOf("%") < 0)
                return !1;
            var n = this._ower
              , r = n.parent
              , a = this._rect;
            null === a && (r._getCSSStyle()._type |= 524288,
            r.on("resize", this, s),
            this._rect = a = {
                input: {}
            });
            var o = e.split(" ");
            return o[0] = parseFloat(o[0]) / 100,
            1 == o.length ? o[1] = o[2] = 0 : (o[1] = parseFloat(o[1]) / 100,
            o[2] = parseFloat(o[2])),
            a[t] = o,
            a.input[t] = e,
            s(),
            !0
        }
        ,
        i.heighted = function(t) {
            return 0 != (8192 & this._type)
        }
        ,
        i.size = function(t, e) {
            var i = this._ower
              , s = !1;
            -1 !== t && t != this._ower.width && (this._type |= 8,
            this._ower.width = t,
            s = !0),
            -1 !== e && e != this._ower.height && (this._type |= 8192,
            this._ower.height = e,
            s = !0),
            s && (i._layoutLater(),
            524288 & this._type && i.event("resize", this))
        }
        ,
        i._getAlign = function() {
            return this._aligns[0]
        }
        ,
        i._getValign = function() {
            return this._aligns[1]
        }
        ,
        i._getCssFloat = function() {
            return 0 != (32768 & this._type) ? 32768 : 0
        }
        ,
        i._createFont = function() {
            return 4096 & this._type ? this._font : (this._type |= 4096,
            this._font = new S(this._font))
        }
        ,
        i.render = function(t, e, i, s) {
            var n = t.width
              , r = t.height;
            i -= t.pivotX,
            s -= t.pivotY,
            this._bgground && null != this._bgground.color && e.ctx.fillRect(i, s, n, r, this._bgground.color),
            this._border && this._border.color && e.drawRect(i, s, n, r, this._border.color.strColor, this._border.size)
        }
        ,
        i.getCSSStyle = function() {
            return this
        }
        ,
        i.cssText = function(t) {
            this.attrs(e.parseOneCSS(t, ";"))
        }
        ,
        i.attrs = function(t) {
            if (t)
                for (var e = 0, i = t.length; e < i; e++) {
                    var s = t[e];
                    this[s[0]] = s[1]
                }
        }
        ,
        i.setTransform = function(t) {
            "none" === t ? this._tf = w._TF_EMPTY : this.attrs(e.parseOneCSS(t, ","))
        }
        ,
        i.translate = function(t, e) {
            this._tf === w._TF_EMPTY && (this._tf = new C),
            this._tf.translateX = t,
            this._tf.translateY = e
        }
        ,
        i.scale = function(t, e) {
            this._tf === w._TF_EMPTY && (this._tf = new C),
            this._tf.scaleX = t,
            this._tf.scaleY = e
        }
        ,
        i._enableLayout = function() {
            return 0 == (2 & this._type) && 0 == (4 & this._type)
        }
        ,
        r(0, i, "block", t.prototype._$get_block, function(t) {
            t ? this._type |= 1 : this._type &= -2
        }),
        r(0, i, "valign", function() {
            return e._valigndef[this._aligns[1]]
        }, function(t) {
            this._aligns === e._ALIGNS && (this._aligns = [0, 0, 0]),
            this._aligns[1] = e._valigndef[t]
        }),
        r(0, i, "height", null, function(t) {
            if (this._type |= 8192,
            "string" == typeof t) {
                if (this._calculation("height", t))
                    return;
                t = parseInt(t)
            }
            this.size(-1, t)
        }),
        r(0, i, "width", null, function(t) {
            if (this._type |= 8,
            "string" == typeof t) {
                var e = t.indexOf("auto");
                if (e >= 0 && (this._type |= 262144,
                t = t.substr(0, e)),
                this._calculation("width", t))
                    return;
                t = parseInt(t)
            }
            this.size(t, -1)
        }),
        r(0, i, "fontWeight", function() {
            return this._font.weight
        }, function(t) {
            this._createFont().weight = t
        }),
        r(0, i, "left", null, function(t) {
            var e = this._ower;
            if ("string" == typeof t) {
                if ("center" === t ? t = "50% -50% 0" : "right" === t && (t = "100% -100% 0"),
                this._calculation("left", t))
                    return;
                t = parseInt(t)
            }
            e.x = t
        }),
        r(0, i, "_translate", null, function(t) {
            this.translate(t[0], t[1])
        }),
        r(0, i, "absolute", function() {
            return 0 != (4 & this._type)
        }),
        r(0, i, "top", null, function(t) {
            var e = this._ower;
            if ("string" == typeof t) {
                if ("middle" === t ? t = "50% -50% 0" : "bottom" === t && (t = "100% -100% 0"),
                this._calculation("top", t))
                    return;
                t = parseInt(t)
            }
            e.y = t
        }),
        r(0, i, "align", function() {
            return e._aligndef[this._aligns[0]]
        }, function(t) {
            this._aligns === e._ALIGNS && (this._aligns = [0, 0, 0]),
            this._aligns[0] = e._aligndef[t]
        }),
        r(0, i, "bold", function() {
            return this._font.bold
        }, function(t) {
            this._createFont().bold = t
        }),
        r(0, i, "padding", function() {
            return this._padding
        }, function(t) {
            this._padding = t
        }),
        r(0, i, "leading", function() {
            return this._spacing[1]
        }, function(t) {
            "string" == typeof t && (t = parseInt(t + "")),
            this._spacing === e._SPACING && (this._spacing = [0, 0]),
            this._spacing[1] = t
        }),
        r(0, i, "lineElement", function() {
            return 0 != (65536 & this._type)
        }, function(t) {
            t ? this._type |= 65536 : this._type &= -65537
        }),
        r(0, i, "cssFloat", function() {
            return 0 != (32768 & this._type) ? "right" : "left"
        }, function(t) {
            this.lineElement = !1,
            "right" === t ? this._type |= 32768 : this._type &= -32769
        }),
        r(0, i, "textDecoration", function() {
            return this._font.decoration
        }, function(t) {
            this._createFont().decoration = t
        }),
        r(0, i, "whiteSpace", function() {
            return 131072 & this._type ? "nowrap" : ""
        }, function(t) {
            "nowrap" === t && (this._type |= 131072),
            "none" === t && (this._type &= -131073)
        }),
        r(0, i, "background", null, function(t) {
            t ? (this._bgground || (this._bgground = {}),
            this._bgground.color = t,
            this._ower.conchModel && this._ower.conchModel.bgColor(t),
            this._type |= 16384,
            this._ower._renderType |= 256) : this._bgground = null
        }),
        r(0, i, "wordWrap", function() {
            return 0 == (131072 & this._type)
        }, function(t) {
            t ? this._type &= -131073 : this._type |= 131072
        }),
        r(0, i, "color", function() {
            return this._font.color
        }, function(t) {
            this._createFont().color = t
        }),
        r(0, i, "password", function() {
            return this._font.password
        }, function(t) {
            this._createFont().password = t
        }),
        r(0, i, "backgroundColor", function() {
            return this._bgground ? this._bgground.color : null
        }, function(t) {
            "none" === t ? this._bgground = null : (this._bgground || (this._bgground = {}),
            this._bgground.color = t),
            this._ower.conchModel && this._ower.conchModel.bgColor(t),
            this._ower._renderType |= 256
        }),
        r(0, i, "font", function() {
            return this._font.toString()
        }, function(t) {
            this._createFont().set(t)
        }),
        r(0, i, "weight", null, function(t) {
            this._createFont().weight = t
        }),
        r(0, i, "letterSpacing", function() {
            return this._spacing[0]
        }, function(t) {
            "string" == typeof t && (t = parseInt(t + "")),
            this._spacing === e._SPACING && (this._spacing = [0, 0]),
            this._spacing[0] = t
        }),
        r(0, i, "fontSize", function() {
            return this._font.size
        }, function(t) {
            this._createFont().size = t
        }),
        r(0, i, "italic", function() {
            return this._font.italic
        }, function(t) {
            this._createFont().italic = t
        }),
        r(0, i, "fontFamily", function() {
            return this._font.family
        }, function(t) {
            this._createFont().family = t
        }),
        r(0, i, "stroke", function() {
            return this._font.stroke[0]
        }, function(t) {
            this._createFont().stroke === S._STROKE && (this._font.stroke = [0, "#000000"]),
            this._font.stroke[0] = t
        }),
        r(0, i, "strokeColor", function() {
            return this._font.stroke[1]
        }, function(t) {
            this._createFont().stroke === S._STROKE && (this._font.stroke = [0, "#000000"]),
            this._font.stroke[1] = t
        }),
        r(0, i, "border", function() {
            return this._border ? this._border.value : ""
        }, function(t) {
            if ("none" != t) {
                this._border || (this._border = {}),
                this._border.value = t;
                var e = t.split(" ");
                if (this._border.color = nt.create(e[e.length - 1]),
                1 == e.length)
                    return this._border.size = 1,
                    void (this._border.type = "solid");
                var i = 0;
                e[0].indexOf("px") > 0 ? (this._border.size = parseInt(e[0]),
                i++) : this._border.size = 1,
                this._border.type = e[i],
                this._ower._renderType |= 256
            } else
                this._border = null
        }),
        r(0, i, "borderColor", function() {
            return this._border && this._border.color ? this._border.color.strColor : null
        }, function(t) {
            t ? (this._border || (this._border = {
                size: 1,
                type: "solid"
            }),
            this._border.color = null == t ? null : nt.create(t),
            this._ower.conchModel && this._ower.conchModel.border(this._border.color.strColor),
            this._ower._renderType |= 256) : this._border = null
        }),
        r(0, i, "position", function() {
            return 4 & this._type ? "absolute" : ""
        }, function(t) {
            "absolute" == t ? this._type |= 4 : this._type &= -5
        }),
        r(0, i, "display", null, function(t) {
            switch (t) {
            case "":
                this._type &= -3,
                this.visible = !0;
                break;
            case "none":
                this._type |= 2,
                this.visible = !1,
                this._ower._layoutLater()
            }
        }),
        r(0, i, "paddingLeft", function() {
            return this.padding[3]
        }),
        r(0, i, "paddingTop", function() {
            return this.padding[0]
        }),
        r(0, i, "_scale", null, function(t) {
            this._ower.scale(t[0], t[1])
        }),
        r(0, i, "_rotate", null, function(t) {
            this._ower.rotation = t
        }),
        e.parseOneCSS = function(t, i) {
            for (var s, n = [], r = t.split(i), a = 0, o = r.length; a < o; a++) {
                var h = r[a]
                  , l = h.indexOf(":")
                  , u = h.substr(0, l).replace(/^\s+|\s+$/g, "");
                if (0 != u.length) {
                    var c = h.substr(l + 1).replace(/^\s+|\s+$/g, "")
                      , _ = [u, c];
                    switch (u) {
                    case "italic":
                    case "bold":
                        _[1] = "true" == c;
                        break;
                    case "line-height":
                        _[0] = "lineHeight",
                        _[1] = parseInt(c);
                        break;
                    case "font-size":
                        _[0] = "fontSize",
                        _[1] = parseInt(c);
                        break;
                    case "padding":
                        (s = c.split(" ")).length > 1 || (s[1] = s[2] = s[3] = s[0]),
                        _[1] = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])];
                        break;
                    case "rotate":
                        _[0] = "_rotate",
                        _[1] = parseFloat(c);
                        break;
                    case "scale":
                        s = c.split(" "),
                        _[0] = "_scale",
                        _[1] = [parseFloat(s[0]), parseFloat(s[1])];
                        break;
                    case "translate":
                        s = c.split(" "),
                        _[0] = "_translate",
                        _[1] = [parseInt(s[0]), parseInt(s[1])];
                        break;
                    default:
                        (_[0] = e._CSSTOVALUE[u]) || (_[0] = u)
                    }
                    n.push(_)
                }
            }
            return n
        }
        ,
        e.parseCSS = function(t, i) {
            for (var s; null != (s = e._parseCSSRegExp.exec(t)); )
                e.styleSheets[s[1]] = e.parseOneCSS(s[2], ";")
        }
        ,
        e.EMPTY = new e(null),
        e._CSSTOVALUE = {
            "letter-spacing": "letterSpacing",
            "line-spacing": "lineSpacing",
            "white-space": "whiteSpace",
            "line-height": "lineHeight",
            "scale-x": "scaleX",
            "scale-y": "scaleY",
            "translate-x": "translateX",
            "translate-y": "translateY",
            "font-family": "fontFamily",
            "font-weight": "fontWeight",
            "vertical-align": "valign",
            "text-decoration": "textDecoration",
            "background-color": "backgroundColor",
            "border-color": "borderColor",
            float: "cssFloat"
        },
        e._parseCSSRegExp = new RegExp("([.#]\\w+)\\s*{([\\s\\S]*?)}","g"),
        e._aligndef = {
            left: 0,
            center: 1,
            right: 2,
            0: "left",
            1: "center",
            2: "right"
        },
        e._valigndef = {
            top: 0,
            middle: 1,
            bottom: 2,
            0: "top",
            1: "middle",
            2: "bottom"
        },
        e.styleSheets = {},
        e.ALIGN_CENTER = 1,
        e.ALIGN_RIGHT = 2,
        e.VALIGN_MIDDLE = 1,
        e.VALIGN_BOTTOM = 2,
        e._CSS_BLOCK = 1,
        e._DISPLAY_NONE = 2,
        e._ABSOLUTE = 4,
        e._WIDTH_SET = 8,
        e._PADDING = [0, 0, 0, 0],
        e._RECT = [-1, -1, -1, -1],
        e._SPACING = [0, 0],
        e._ALIGNS = [0, 0, 0],
        e.ADDLAYOUTED = 512,
        e._NEWFONT = 4096,
        e._HEIGHT_SET = 8192,
        e._BACKGROUND_SET = 16384,
        e._FLOAT_RIGHT = 32768,
        e._LINE_ELEMENT = 65536,
        e._NOWARP = 131072,
        e._WIDTHAUTO = 262144,
        e._LISTERRESZIE = 524288,
        e
    }(w)
      , _e = function(t) {
        function e(t) {
            e.__super.call(this),
            t || (t = [.3, .59, .11, 0, 0, .3, .59, .11, 0, 0, .3, .59, .11, 0, 0, 0, 0, 0, 1, 0]),
            this._mat = new Float32Array(16),
            this._alpha = new Float32Array(4);
            for (var i = 0, s = 0, n = 0; n < 20; n++)
                n % 5 != 4 ? this._mat[i++] = t[n] : this._alpha[s++] = t[n];
            this._action = o.createFilterAction(32),
            this._action.data = this
        }
        n(e, "laya.filters.ColorFilter", L);
        var s = e.prototype;
        return i.imps(s, {
            "laya.filters.IFilter": !0
        }),
        s.callNative = function(t) {
            t._$P.cf = this;
            t.conchModel && t.conchModel.setFilterMatrix && t.conchModel.setFilterMatrix(this._mat, this._alpha)
        }
        ,
        r(0, s, "type", function() {
            return 32
        }),
        r(0, s, "action", function() {
            return this._action
        }),
        e
    }()
      , de = function(t) {
        function e() {
            this.data = null,
            e.__super.call(this)
        }
        n(e, "laya.filters.webgl.ColorFilterActionGL", F);
        var s = e.prototype;
        return i.imps(s, {
            "laya.filters.IFilterActionGL": !0
        }),
        s.setValue = function(t) {
            t.colorMat = this.data._mat,
            t.colorAlpha = this.data._alpha
        }
        ,
        s.apply3d = function(t, e, i, s, n) {
            var r = t.getValue("bounds")
              , a = fe.create(1, 0);
            a.setFilters([this.data]);
            var o = k.TEMP;
            o.identity(),
            i.ctx.drawTarget(t, 0, 0, r.width, r.height, o, "src", a)
        }
        ,
        e
    }()
      , fe = (function(t) {
        function e() {
            e.__super.call(this)
        }
        n(e, "laya.ui.UIEvent", M),
        e.SHOW_TIP = "showtip",
        e.HIDE_TIP = "hidetip"
    }(),
    function(t) {
        function e(t, i) {
            this.size = [0, 0],
            this.alpha = 1,
            this.ALPHA = 1,
            this.subID = 0,
            this._cacheID = 0,
            e.__super.call(this),
            this.defines = new ve,
            this.position = e._POSITION,
            this.mainID = t,
            this.subID = i,
            this.textureHost = null,
            this.texture = null,
            this.fillStyle = null,
            this.color = null,
            this.strokeStyle = null,
            this.colorAdd = null,
            this.glTexture = null,
            this.u_mmat2 = null,
            this._cacheID = t | i,
            this._inClassCache = e._cache[this._cacheID],
            t > 0 && !this._inClassCache && (this._inClassCache = e._cache[this._cacheID] = [],
            this._inClassCache._length = 0),
            this.clear()
        }
        n(e, "laya.webgl.shader.d2.value.Value2D", Y);
        var i = e.prototype;
        return i.setValue = function(t) {}
        ,
        i.refresh = function() {
            var t = this.size;
            return t[0] = Kt.width,
            t[1] = Kt.height,
            this.alpha = this.ALPHA * Kt.worldAlpha,
            this.mmat = Kt.worldMatrix4,
            this
        }
        ,
        i._ShaderWithCompile = function() {
            return Ge.withCompile2D(0, this.mainID, this.defines.toNameDic(), this.mainID | this.defines._value, ei.create)
        }
        ,
        i._withWorldShaderDefines = function() {
            var t = Kt.worldShaderDefines
              , e = Ge.sharders[this.mainID | this.defines._value | t.getValue()];
            if (!e) {
                var i, s, n = {};
                i = this.defines.toNameDic();
                for (s in i)
                    n[s] = "";
                i = t.toNameDic();
                for (s in i)
                    n[s] = "";
                e = Ge.withCompile2D(0, this.mainID, n, this.mainID | this.defines._value | t.getValue(), ei.create)
            }
            var r = Kt.worldFilters;
            if (!r)
                return e;
            for (var a, o = r.length, h = 0; h < o; h++)
                (a = r[h]) && a.action.setValue(this);
            return e
        }
        ,
        i.upload = function() {
            var t = Kt;
            this.alpha = this.ALPHA * t.worldAlpha,
            Kt.worldMatrix4 !== Kt.TEMPMAT4_ARRAY && this.defines.add(128),
            qt.shaderHighPrecision && this.defines.add(1024);
            var e, i = t.worldShaderDefines ? this._withWorldShaderDefines() : Ge.sharders[this.mainID | this.defines._value] || this._ShaderWithCompile();
            this.size[0] = t.width,
            this.size[1] = t.height,
            this.mmat = t.worldMatrix4,
            Me.activeShader !== i ? (i._shaderValueWidth !== t.width || i._shaderValueHeight !== t.height ? (i._shaderValueWidth = t.width,
            i._shaderValueHeight = t.height) : e = i._params2dQuick2 || i._make2dQuick2(),
            i.upload(this, e)) : (i._shaderValueWidth !== t.width || i._shaderValueHeight !== t.height ? (i._shaderValueWidth = t.width,
            i._shaderValueHeight = t.height) : e = i._params2dQuick1 || i._make2dQuick1(),
            i.upload(this, e))
        }
        ,
        i.setFilters = function(t) {
            if (this.filters = t,
            t)
                for (var e, i = t.length, s = 0; s < i; s++)
                    (e = t[s]) && (this.defines.add(e.type),
                    e.action.setValue(this))
        }
        ,
        i.clear = function() {
            this.defines.setValue(this.subID)
        }
        ,
        i.release = function() {
            this._inClassCache[this._inClassCache._length++] = this,
            this.fillStyle = null,
            this.strokeStyle = null,
            this.clear()
        }
        ,
        e._initone = function(t, i) {
            e._typeClass[t] = i,
            e._cache[t] = [],
            e._cache[t]._length = 0
        }
        ,
        e.__init__ = function() {
            e._POSITION = [2, 5126, !1, 4 * Xt.BYTES_PE, 0],
            e._TEXCOORD = [2, 5126, !1, 4 * Xt.BYTES_PE, 2 * Xt.BYTES_PE],
            e._initone(2, Fe),
            e._initone(4, Ne),
            e._initone(256, De),
            e._initone(512, Pe),
            e._initone(1, Be),
            e._initone(65, Qe),
            e._initone(9, Be)
        }
        ,
        e.create = function(t, i) {
            var s = e._cache[t | i];
            return s._length ? s[--s._length] : new e._typeClass[t | i](i)
        }
        ,
        e._POSITION = null,
        e._TEXCOORD = null,
        e._cache = [],
        e._typeClass = [],
        e.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        e
    }())
      , pe = function(t) {
        function e(t) {
            this._x = 0,
            this._y = 0,
            this._id = ++e._COUNT,
            this._path = null,
            this._drawCount = 1,
            this._maxNumEle = 0,
            this._clear = !1,
            this._isMain = !1,
            this._atlasResourceChange = 0,
            this._submits = null,
            this._curSubmit = null,
            this._ib = null,
            this._vb = null,
            this._nBlendType = 0,
            this._saveMark = null,
            this._shader2D = null,
            this.meshlist = [],
            this.mId = -1,
            this.mHaveKey = !1,
            this.mHaveLineKey = !1,
            this.mX = 0,
            this.mY = 0,
            e.__super.call(this),
            this._width = 99999999,
            this._height = 99999999,
            this._clipRect = e.MAXCLIPRECT,
            this.mOutPoint,
            this._canvas = t,
            e._contextcount++,
            X.isFlash ? (this._ib = si.create(35044),
            $t.fillIBQuadrangle(this._ib, 16)) : this._ib = si.QuadrangleIB,
            this.clear()
        }
        var a;
        n(e, "laya.webgl.canvas.WebGLContext2D", K);
        var o = e.prototype;
        return o.setIsMainContext = function() {
            this._isMain = !0
        }
        ,
        o.clearBG = function(t, e, i, s) {
            var n = qt.mainContext;
            n.clearColor(t, e, i, s),
            n.clear(16384)
        }
        ,
        o._getSubmits = function() {
            return this._submits
        }
        ,
        o._releaseMem = function() {
            if (this._submits) {
                this._curMat.destroy(),
                this._curMat = null,
                this._shader2D.destroy(),
                this._shader2D = null;
                for (var t = 0, e = this._submits._length; t < e; t++)
                    this._submits[t].releaseRender();
                this._submits.length = 0,
                this._submits._length = 0,
                this._submits = null,
                this._curSubmit = null,
                this._path && this._path.recover(),
                this._path = null,
                this._other && (this._other.font = null),
                this._save = null,
                this._vb && (this._vb.releaseResource(),
                this._vb.destroy(),
                this._vb.destory(),
                this._vb = null)
            }
        }
        ,
        o.destroy = function() {
            --e._contextcount,
            this.sprite = null,
            this._releaseMem(),
            this._targets && this._targets.destroy(),
            this._targets = null,
            this._canvas = null,
            this._ib && this._ib != si.QuadrangleIB && this._ib.releaseResource()
        }
        ,
        o.clear = function() {
            this._submits || (this._other = a.DEFAULT,
            this._curMat = k.create(),
            this._vb = ni.create(-1),
            this._submits = [],
            this._save = [Ct.Create(this)],
            this._save.length = 10,
            this._shader2D = new It,
            this._triangleMesh = Se.getAMesh()),
            this._vb.clear(),
            this._targets && (this._targets.repaint = !0),
            this._other = a.DEFAULT,
            this._clear = !0,
            this._repaint = !1,
            this._drawCount = 1,
            this._renderKey = 0,
            this._other.lineWidth = this._shader2D.ALPHA = 1,
            this._nBlendType = 0,
            this._clipRect = e.MAXCLIPRECT,
            this._curSubmit = Nt.RENDERBASE,
            this._shader2D.glTexture = null,
            this._shader2D.fillStyle = this._shader2D.strokeStyle = xt.DEFAULT;
            for (var t = 0, i = this._submits._length; t < i; t++)
                this._submits[t].releaseRender();
            this._submits._length = 0,
            this._curMat.identity(),
            this._other.clear(),
            this._saveMark = this._save[0],
            this._save._length = 1
        }
        ,
        o.size = function(t, e) {
            if (this._width != t || this._height != e)
                if (0 == t || 0 == e) {
                    0 != this._vb._byteLength && (this._width = t,
                    this._height = e,
                    this._vb.clear(),
                    this._vb.upload());
                    for (var i = 0, s = this._submits._length; i < s; i++)
                        this._submits[i].releaseRender();
                    this._submits.length = 0,
                    this._submits._length = 0,
                    this._curSubmit = null,
                    this._path && this._path.recover(),
                    this._path = null,
                    this.sprite = null,
                    this._targets && this._targets.destroy(),
                    this._targets = null
                } else
                    this._width = t,
                    this._height = e,
                    this._targets && this._targets.size(t, e),
                    this._canvas.memorySize -= this._canvas.memorySize;
            0 === t && 0 === e && this._releaseMem()
        }
        ,
        o._getTransformMatrix = function() {
            return this._curMat
        }
        ,
        o.translate = function(t, e) {
            0 === t && 0 === e || (Mt.save(this),
            this._curMat.bTransform && (At.save(this),
            this._curMat.transformPointN(U.TEMP.setTo(t, e)),
            t = U.TEMP.x,
            e = U.TEMP.y),
            this._x += t,
            this._y += e)
        }
        ,
        o.save = function() {
            this._save[this._save._length++] = Ct.Create(this)
        }
        ,
        o.restore = function() {
            var t = this._save._length;
            if (!(t < 1))
                for (var e = t - 1; e >= 0; e--) {
                    var i = this._save[e];
                    if (i.restore(this),
                    i.isSaveMark())
                        return void (this._save._length = e)
                }
        }
        ,
        o._fillText = function(t, e, i, s, n, r, a, o, h, l) {
            void 0 === l && (l = 0);
            var u = this._shader2D
              , c = this._curSubmit.shaderValue
              , _ = n ? Yt.create(n) : this._other.font;
            if (mt.enabled)
                u.ALPHA !== c.ALPHA && (u.glTexture = null),
                Ht.drawText(this, t, e, this._curMat, _, h || this._other.textAlign, r, a, o, i, s, l);
            else {
                this._shader2D.defines.getValue();
                var d = r ? nt.create(r)._color : u.colorAdd;
                u.ALPHA === c.ALPHA && d === u.colorAdd && c.colorAdd === u.colorAdd || (u.glTexture = null,
                u.colorAdd = d),
                Ht.drawText(this, t, e, this._curMat, _, h || this._other.textAlign, r, a, o, i, s, l)
            }
        }
        ,
        o.fillWords = function(t, e, i, s, n, r) {
            this._fillText(null, t, e, i, s, n, null, -1, null, r)
        }
        ,
        o.fillBorderWords = function(t, e, i, s, n, r, a) {
            this._fillBorderText(null, t, e, i, s, n, r, a, null)
        }
        ,
        o.fillText = function(t, e, i, s, n, r) {
            this._fillText(t, null, e, i, s, n, null, -1, r)
        }
        ,
        o.strokeText = function(t, e, i, s, n, r, a) {
            this._fillText(t, null, e, i, s, null, n, r || 1, a)
        }
        ,
        o.fillBorderText = function(t, e, i, s, n, r, a, o) {
            this._fillBorderText(t, null, e, i, s, n, r, a, o)
        }
        ,
        o._fillBorderText = function(t, i, s, n, r, a, o, h, l) {
            if (!mt.enabled)
                return this._fillText(t, i, s, n, r, null, o, h || 1, l),
                void this._fillText(t, i, s, n, r, a, null, -1, l);
            var u = this._shader2D
              , c = this._curSubmit.shaderValue;
            u.ALPHA !== c.ALPHA && (u.glTexture = null);
            var _ = r ? (e._fontTemp.setFont(r),
            e._fontTemp) : this._other.font;
            Ht.drawText(this, t, i, this._curMat, _, l || this._other.textAlign, a, o, h || 1, s, n, 0)
        }
        ,
        o.fillRect = function(t, e, i, s, n) {
            var r = this._vb;
            if ($t.fillRectImgVb(r, this._clipRect, t, e, i, s, he.DEF_UV, this._curMat, this._x, this._y, 0, 0)) {
                this._renderKey = 0;
                var a = this._shader2D.fillStyle;
                n && (this._shader2D.fillStyle = xt.create(n));
                var o = this._shader2D
                  , h = this._curSubmit.shaderValue;
                if (o.fillStyle !== h.fillStyle || o.ALPHA !== h.ALPHA) {
                    o.glTexture = null;
                    var l = this._curSubmit = Nt.createSubmit(this, this._ib, r, (r._byteLength - 64) / 32 * 3, fe.create(2, 0));
                    l.shaderValue.color = o.fillStyle._color._color,
                    l.shaderValue.ALPHA = o.ALPHA,
                    this._submits[this._submits._length++] = l
                }
                this._curSubmit._numEle += 6,
                this._shader2D.fillStyle = a
            }
        }
        ,
        o.fillTexture = function(t, e, s, n, r, a, o, h) {
            if (t.loaded && t.bitmap && t.source) {
                var l = this._vb
                  , u = t.bitmap.width
                  , c = t.bitmap.height
                  , _ = t.uv
                  , d = o.x % t.width
                  , f = o.y % t.height;
                if (u != h.w || c != h.h) {
                    if (!h.w && !h.h)
                        switch (h.oy = h.ox = 0,
                        a) {
                        case "repeat":
                            h.width = n,
                            h.height = r;
                            break;
                        case "repeat-x":
                            h.width = n,
                            f < 0 ? t.height + f > r ? h.height = r : h.height = t.height + f : (h.oy = f,
                            t.height + f > r ? h.height = r - f : h.height = t.height);
                            break;
                        case "repeat-y":
                            d < 0 ? t.width + d > n ? h.width = n : h.width = t.width + d : (h.ox = d,
                            t.width + d > n ? h.width = n - d : h.width = t.width),
                            h.height = r;
                            break;
                        default:
                            h.width = n,
                            h.height = r
                        }
                    h.w = u,
                    h.h = c,
                    h.uv = [0, 0, h.width / u, 0, h.width / u, h.height / c, 0, h.height / c]
                }
                if (e += h.ox,
                s += h.oy,
                d -= h.ox,
                f -= h.oy,
                $t.fillRectImgVb(l, this._clipRect, e, s, h.width, h.height, h.uv, this._curMat, this._x, this._y, 0, 0)) {
                    this._renderKey = 0;
                    var p = we.create(this, this._ib, l, (l._byteLength - 64) / 32 * 3, fe.create(256, 0));
                    this._submits[this._submits._length++] = p;
                    var g = p.shaderValue;
                    g.textureHost = t;
                    var m = _[0] * u
                      , v = _[1] * c
                      , y = (_[2] - _[0]) * u
                      , x = (_[5] - _[3]) * c
                      , b = -d / u
                      , T = -f / c;
                    g.u_TexRange[0] = m / u,
                    g.u_TexRange[1] = y / u,
                    g.u_TexRange[2] = v / c,
                    g.u_TexRange[3] = x / c,
                    g.u_offset[0] = b,
                    g.u_offset[1] = T,
                    mt.enabled && !this._isMain && p.addTexture(t, (l._byteLength >> 2) - 16),
                    this._curSubmit = p,
                    p._renderType = 10017,
                    p._numEle += 6
                }
            } else
                this.sprite && i.timer.callLater(this, this._repaintSprite)
        }
        ,
        o.setShader = function(t) {
            Tt.save(this, 1048576, this._shader2D, !0),
            this._shader2D.shader = t
        }
        ,
        o.setFilters = function(t) {
            Tt.save(this, 2097152, this._shader2D, !0),
            this._shader2D.filters = t,
            this._curSubmit = Nt.RENDERBASE,
            this._renderKey = 0,
            this._drawCount++
        }
        ,
        o.drawTexture = function(t, e, i, s, n, r, a) {
            this._drawTextureM(t, e, i, s, n, r, a, null, 1)
        }
        ,
        o.addTextureVb = function(t, e, i) {
            var s = this._curSubmit._vb || this._vb
              , n = s._byteLength >> 2;
            s.byteLength = n + 16 << 2;
            for (var r = s.getFloat32Array(), a = 0; a < 16; a += 4)
                r[n++] = t[a] + e,
                r[n++] = t[a + 1] + i,
                r[n++] = t[a + 2],
                r[n++] = t[a + 3];
            this._curSubmit._numEle += 6,
            this._maxNumEle = Math.max(this._maxNumEle, this._curSubmit._numEle),
            s._upload = !0
        }
        ,
        o.willDrawTexture = function(t, e) {
            if (!(t.loaded && t.bitmap && t.source))
                return this.sprite && i.timer.callLater(this, this._repaintSprite),
                0;
            var s = t.bitmap
              , n = s.id + this._shader2D.ALPHA * e + 10016;
            if (n == this._renderKey)
                return n;
            var r = this._shader2D
              , a = r.ALPHA
              , o = this._curSubmit.shaderValue;
            r.ALPHA *= e,
            this._renderKey = n,
            this._drawCount++,
            r.glTexture = s;
            var h = this._vb
              , l = null
              , u = h._byteLength / 32 * 3;
            return l = we.create(this, this._ib, h, u, fe.create(1, 0)),
            this._submits[this._submits._length++] = l,
            l.shaderValue.textureHost = t,
            l._renderType = 10016,
            l._preIsSameTextureShader = 10016 === this._curSubmit._renderType && r.ALPHA === o.ALPHA,
            this._curSubmit = l,
            r.ALPHA = a,
            n
        }
        ,
        o.drawTextures = function(t, s, n, r) {
            if (t.loaded && t.bitmap && t.source) {
                var a = this._clipRect;
                if (this._clipRect = e.MAXCLIPRECT,
                this._drawTextureM(t, s[0], s[1], t.width, t.height, n, r, null, 1)) {
                    if (this._clipRect = a,
                    ht.drawCall++,
                    !(s.length < 4)) {
                        for (var o = this._curSubmit._vb || this._vb, h = this._curMat.a, l = this._curMat.d, u = 2, c = s.length; u < c; u += 2)
                            $t.copyPreImgVb(o, (s[u] - s[u - 2]) * h, (s[u + 1] - s[u - 1]) * l),
                            this._curSubmit._numEle += 6;
                        this._maxNumEle = Math.max(this._maxNumEle, this._curSubmit._numEle)
                    }
                } else
                    alert("drawTextures err")
            } else
                this.sprite && i.timer.callLater(this, this._repaintSprite)
        }
        ,
        o._drawTextureM = function(t, e, s, n, r, a, o, h, l) {
            if (!t.loaded || !t.source)
                return this.sprite && i.timer.callLater(this, this._repaintSprite),
                !1;
            var u = this._curSubmit._vb || this._vb
              , c = t.bitmap;
            e += a,
            s += o,
            this._drawCount++;
            var _ = c.id + this._shader2D.ALPHA * l + 10016;
            if (_ != this._renderKey) {
                this._renderKey = _;
                var d = this._curSubmit.shaderValue
                  , f = this._shader2D
                  , p = f.ALPHA;
                f.ALPHA *= l,
                f.glTexture = c;
                var g = this._vb
                  , m = null
                  , v = g._byteLength / 32 * 3;
                m = we.create(this, this._ib, g, v, fe.create(1, 0)),
                this._submits[this._submits._length++] = m,
                m.shaderValue.textureHost = t,
                m._renderType = 10016,
                m._preIsSameTextureShader = 10016 === this._curSubmit._renderType && f.ALPHA === d.ALPHA,
                this._curSubmit = m,
                u = this._curSubmit._vb || this._vb,
                f.ALPHA = p
            }
            return !!$t.fillRectImgVb(u, this._clipRect, e, s, n || t.width, r || t.height, t.uv, h || this._curMat, this._x, this._y, 0, 0) && (mt.enabled && !this._isMain && this._curSubmit.addTexture(t, (u._byteLength >> 2) - 16),
            this._curSubmit._numEle += 6,
            this._maxNumEle = Math.max(this._maxNumEle, this._curSubmit._numEle),
            !0)
        }
        ,
        o._repaintSprite = function() {
            this.sprite && this.sprite.repaint()
        }
        ,
        o._drawText = function(t, e, i, s, n, r, a, o, h, l) {
            var u = t.bitmap;
            this._drawCount++;
            var c = u.id + this._shader2D.ALPHA + 10016;
            if (c != this._renderKey) {
                this._renderKey = c;
                var _ = this._curSubmit.shaderValue
                  , d = this._shader2D;
                d.glTexture = u;
                var f = this._vb
                  , p = null
                  , g = f._byteLength / 32 * 3;
                (p = mt.enabled ? we.create(this, this._ib, f, g, fe.create(1, 0)) : we.create(this, this._ib, f, g, Qe.create()))._preIsSameTextureShader = 10016 === this._curSubmit._renderType && d.ALPHA === _.ALPHA,
                this._submits[this._submits._length++] = p,
                p.shaderValue.textureHost = t,
                p._renderType = 10016,
                this._curSubmit = p
            }
            t.active();
            var m = this._curSubmit._vb || this._vb;
            $t.fillRectImgVb(m, this._clipRect, e + a, i + o, s || t.width, n || t.height, t.uv, r || this._curMat, this._x, this._y, h, l, !0) && (mt.enabled && !this._isMain && this._curSubmit.addTexture(t, (m._byteLength >> 2) - 16),
            this._curSubmit._numEle += 6,
            this._maxNumEle = Math.max(this._maxNumEle, this._curSubmit._numEle))
        }
        ,
        o.drawTextureWithTransform = function(t, i, s, n, r, a, o, h, l) {
            if (a) {
                var u = this._curMat
                  , c = this._x
                  , _ = this._y;
                (0 !== o || 0 !== h) && (this._x = o * u.a + h * u.c,
                this._y = h * u.d + o * u.b),
                a && u.bTransform ? (k.mul(a, u, e._tmpMatrix),
                (a = e._tmpMatrix)._checkTransform()) : (this._x += u.tx,
                this._y += u.ty),
                this._drawTextureM(t, i, s, n, r, 0, 0, a, l),
                this._x = c,
                this._y = _
            } else
                this._drawTextureM(t, i, s, n, r, o, h, null, l)
        }
        ,
        o.fillQuadrangle = function(t, e, i, s, n) {
            var r = this._curSubmit
              , a = this._vb
              , o = this._shader2D
              , h = r.shaderValue;
            if (this._renderKey = 0,
            t.bitmap) {
                var l = t.bitmap;
                o.glTexture == l && o.ALPHA === h.ALPHA || (o.glTexture = l,
                (r = this._curSubmit = Nt.createSubmit(this, this._ib, a, a._byteLength / 32 * 3, fe.create(1, 0))).shaderValue.glTexture = l,
                this._submits[this._submits._length++] = r),
                $t.fillQuadrangleImgVb(a, e, i, s, t.uv, n || this._curMat, this._x, this._y)
            } else
                r.shaderValue.fillStyle && r.shaderValue.fillStyle.equal(t) && o.ALPHA === h.ALPHA || (o.glTexture = null,
                (r = this._curSubmit = Nt.createSubmit(this, this._ib, a, a._byteLength / 32 * 3, fe.create(2, 0))).shaderValue.defines.add(2),
                r.shaderValue.fillStyle = xt.create(t),
                this._submits[this._submits._length++] = r),
                $t.fillQuadrangleImgVb(a, e, i, s, he.DEF_UV, n || this._curMat, this._x, this._y);
            r._numEle += 6
        }
        ,
        o.drawTexture2 = function(t, i, s, n, r, a, o, h) {
            if (0 != a) {
                var l = this._curMat;
                if (this._x = t * l.a + i * l.c,
                this._y = i * l.d + t * l.b,
                r && (l.bTransform || r.bTransform ? (k.mul(r, l, e._tmpMatrix),
                r = e._tmpMatrix) : (this._x += r.tx + l.tx,
                this._y += r.ty + l.ty,
                r = k.EMPTY)),
                1 !== a || o) {
                    var u = this._shader2D.ALPHA
                      , c = this._nBlendType;
                    this._shader2D.ALPHA = a,
                    o && (this._nBlendType = yt.TOINT(o)),
                    this._drawTextureM(h[0], h[1] - s, h[2] - n, h[3], h[4], 0, 0, r, 1),
                    this._shader2D.ALPHA = u,
                    this._nBlendType = c
                } else
                    this._drawTextureM(h[0], h[1] - s, h[2] - n, h[3], h[4], 0, 0, r, 1);
                this._x = this._y = 0
            }
        }
        ,
        o.drawCanvas = function(t, e, i, s, n) {
            var r = t.context;
            if (this._renderKey = 0,
            r._targets)
                this._submits[this._submits._length++] = Te.create(r, 0, null),
                this._curSubmit = Nt.RENDERBASE,
                r._targets.drawTo(this, e, i, s, n);
            else {
                var a = this._submits[this._submits._length++] = Te.create(r, this._shader2D.ALPHA, this._shader2D.filters)
                  , o = s / t.width
                  , h = n / t.height
                  , l = a._matrix;
                this._curMat.copyTo(l),
                1 != o && 1 != h && l.scale(o, h);
                var u = l.tx
                  , c = l.ty;
                l.tx = l.ty = 0,
                l.transformPoint(U.TEMP.setTo(e, i)),
                l.translate(U.TEMP.x + u, U.TEMP.y + c),
                this._curSubmit = Nt.RENDERBASE
            }
            y.showCanvasMark && (this.save(),
            this.lineWidth = 4,
            this.strokeStyle = r._targets ? "yellow" : "green",
            this.strokeRect(e - 1, i - 1, s + 2, n + 2, 1),
            this.strokeRect(e, i, s, n, 1),
            this.restore())
        }
        ,
        o.drawTarget = function(t, e, i, s, n, r, a, o, h, l) {
            void 0 === l && (l = -1);
            var u = this._vb;
            if ($t.fillRectImgVb(u, this._clipRect, e, i, s, n, h || he.DEF_UV, r || this._curMat, this._x, this._y, 0, 0)) {
                this._renderKey = 0;
                this._shader2D.glTexture = null;
                this._curSubmit.shaderValue;
                var c = this._curSubmit = Wt.create(this, this._ib, u, (u._byteLength - 64) / 32 * 3, o, a);
                c.blendType = -1 == l ? this._nBlendType : l,
                c.scope = t,
                this._submits[this._submits._length++] = c,
                this._curSubmit._numEle += 6
            }
        }
        ,
        o.mixRGBandAlpha = function(t) {
            return this._mixRGBandAlpha(t, this._shader2D.ALPHA)
        }
        ,
        o._mixRGBandAlpha = function(t, e) {
            var i = (4278190080 & t) >>> 24;
            return 0 != i ? i *= e : i = 255 * e,
            16777215 & t | i << 24
        }
        ,
        o.drawTriangles = function(t, s, n, r, a, o, h, l, u, c) {
            if (!t.loaded || !t.source)
                return this.sprite && i.timer.callLater(this, this._repaintSprite),
                !1;
            this._drawCount++;
            t.bitmap;
            var _ = this._mixRGBandAlpha(4294967295, l)
              , d = (r.length,
            o.length);
            this._renderKey = -1;
            var f = this._curSubmit = we.create(this, this._triangleMesh.getIBR(), this._triangleMesh.getVBR(), this._triangleMesh.indexNum, fe.create(1, 0));
            return f.shaderValue.textureHost = t,
            f._renderType = 10016,
            this._submits[this._submits._length++] = f,
            h ? (e._tmpMatrix.a = h.a,
            e._tmpMatrix.b = h.b,
            e._tmpMatrix.c = h.c,
            e._tmpMatrix.d = h.d,
            e._tmpMatrix.tx = h.tx + s,
            e._tmpMatrix.ty = h.ty + n,
            k.mul(e._tmpMatrix, this._curMat, e._tmpMatrix)) : (e._tmpMatrix.a = this._curMat.a,
            e._tmpMatrix.b = this._curMat.b,
            e._tmpMatrix.c = this._curMat.c,
            e._tmpMatrix.d = this._curMat.d,
            e._tmpMatrix.tx = this._curMat.tx + s,
            e._tmpMatrix.ty = this._curMat.ty + n),
            this._triangleMesh.addData(r, a, o, e._tmpMatrix, _, this),
            this._curSubmit._numEle += d,
            this._maxNumEle = Math.max(this._maxNumEle, this._curSubmit._numEle),
            !0
        }
        ,
        o.transform = function(t, e, i, s, n, r) {
            At.save(this),
            k.mul(k.TEMP.setTo(t, e, i, s, n, r), this._curMat, this._curMat),
            this._curMat._checkTransform()
        }
        ,
        o.setTransformByMatrix = function(t) {
            t.copyTo(this._curMat)
        }
        ,
        o.transformByMatrix = function(t) {
            At.save(this),
            k.mul(t, this._curMat, this._curMat),
            this._curMat._checkTransform()
        }
        ,
        o.rotate = function(t) {
            At.save(this),
            this._curMat.rotateEx(t)
        }
        ,
        o.scale = function(t, e) {
            At.save(this),
            this._curMat.scaleEx(t, e)
        }
        ,
        o.clipRect = function(t, e, i, s) {
            if (0 != this._curMat.b || 0 != this._curMat.c) {
                this._renderKey = 0;
                var n = Gt.create(4);
                this.addRenderObject(n);
                var r = this._vb
                  , a = r._byteLength >> 2;
                if ($t.fillRectImgVb(r, null, t, e, i, s, he.DEF_UV, this._curMat, this._x, this._y, 0, 0)) {
                    this._shader2D.glTexture = null;
                    var o = this._curSubmit = Nt.createSubmit(this, this._ib, r, (r._byteLength - 64) / 32 * 3, fe.create(2, 0));
                    o.shaderValue.ALPHA = 1,
                    this._submits[this._submits._length++] = o,
                    this._curSubmit._numEle += 6
                } else
                    alert("clipRect calc stencil rect error");
                var h = Gt.create(5);
                this.addRenderObject(h);
                var l = r.getFloat32Array()
                  , u = Math.min(Math.min(Math.min(l[a + 0], l[a + 4]), l[a + 8]), l[a + 12])
                  , c = Math.max(Math.max(Math.max(l[a + 0], l[a + 4]), l[a + 8]), l[a + 12])
                  , _ = Math.min(Math.min(Math.min(l[a + 1], l[a + 5]), l[a + 9]), l[a + 13])
                  , d = Math.max(Math.max(Math.max(l[a + 1], l[a + 5]), l[a + 9]), l[a + 13]);
                St.save(this, h, t, e, i, s, u, _, c - u, d - _),
                this._curSubmit = Nt.RENDERBASE
            } else {
                i *= this._curMat.a,
                s *= this._curMat.d;
                var f = U.TEMP;
                this._curMat.transformPoint(f.setTo(t, e)),
                i < 0 && (f.x = f.x + i,
                i = -i),
                s < 0 && (f.y = f.y + s,
                s = -s),
                this._renderKey = 0;
                var p = this._curSubmit = Vt.create(this);
                this._submits[this._submits._length++] = p,
                p.submitIndex = this._submits._length,
                p.submitLength = 9999999,
                wt.save(this, p);
                var g = this._clipRect
                  , m = g.x
                  , v = g.y
                  , y = f.x + i
                  , x = f.y + s;
                m < f.x && (g.x = f.x),
                v < f.y && (g.y = f.y),
                g.width = Math.min(y, m + g.width) - g.x,
                g.height = Math.min(x, v + g.height) - g.y,
                this._shader2D.glTexture = null,
                p.clipRect.copyFrom(g),
                this._curSubmit = Nt.RENDERBASE
            }
        }
        ,
        o.setIBVB = function(t, e, i, s, n, r, a, o, h, l, u) {
            if (void 0 === h && (h = 0),
            void 0 === l && (l = 0),
            void 0 === u && (u = 0),
            null === i) {
                if (X.isFlash) {
                    var c = s;
                    c._selfIB || (c._selfIB = si.create(35044)),
                    c._selfIB.clear(),
                    i = c._selfIB
                } else
                    i = this._ib;
                $t.expandIBQuadrangle(i, s._byteLength / (4 * s.vertexStride * 4))
            }
            if (!o || !a)
                throw Error("setIBVB must input:shader shaderValues");
            var _ = Ut.create(this, s, i, n, a, o, h, l, u);
            r || (r = k.EMPTY),
            r.translate(t, e),
            k.mul(r, this._curMat, _._mat),
            r.translate(-t, -e),
            this._submits[this._submits._length++] = _,
            this._curSubmit = Nt.RENDERBASE,
            this._renderKey = 0
        }
        ,
        o.addRenderObject = function(t) {
            this._submits[this._submits._length++] = t
        }
        ,
        o.fillTrangles = function(t, e, i, s, n) {
            var r = this._curSubmit
              , a = this._vb
              , o = this._shader2D
              , h = r.shaderValue
              , l = s.length >> 4
              , u = t.bitmap;
            this._renderKey = 0,
            o.glTexture == u && o.ALPHA === h.ALPHA || ((r = this._curSubmit = Nt.createSubmit(this, this._ib, a, a._byteLength / 32 * 3, fe.create(1, 0))).shaderValue.textureHost = t,
            this._submits[this._submits._length++] = r),
            $t.fillTranglesVB(a, e, i, s, n || this._curMat, this._x, this._y),
            r._numEle += 6 * l
        }
        ,
        o.submitElement = function(t, e) {
            var i = this._submits;
            for (e < 0 && (e = i._length); t < e; )
                t += i[t].renderSubmit()
        }
        ,
        o.finish = function() {
            qt.mainContext.finish()
        }
        ,
        o.flush = function() {
            var t = Math.max(this._vb._byteLength / 64, this._maxNumEle / 6) + 8;
            if (t > this._ib.bufferLength / 12 && $t.expandIBQuadrangle(this._ib, t),
            !this._isMain && mt.enabled && mt._atlasRestore > this._atlasResourceChange) {
                this._atlasResourceChange = mt._atlasRestore;
                for (var e = this._submits, i = 0, s = e._length; i < s; i++) {
                    var n = e[i];
                    10016 === n.getRenderType() && n.checkTexture()
                }
            }
            this.submitElement(0, this._submits._length),
            this._path && this._path.reset(),
            Pt.instance && Pt.getInstance().reset();
            var r = 0;
            for (i = 0,
            r = this.meshlist.length; i < r; i++) {
                var a = this.meshlist[i];
                a.canReuse ? a.releaseMesh() : a.destroy()
            }
            return this.meshlist.length = 0,
            this._curSubmit = Nt.RENDERBASE,
            this._renderKey = 0,
            this._triangleMesh = Se.getAMesh(),
            this.meshlist.push(this._triangleMesh),
            this._submits._length
        }
        ,
        o.setPathId = function(t) {
            if (this.mId = t,
            -1 != this.mId) {
                this.mHaveKey = !1;
                var e = dt.getInstance();
                e.shapeDic[this.mId] && (this.mHaveKey = !0),
                this.mHaveLineKey = !1,
                e.shapeLineDic[this.mId] && (this.mHaveLineKey = !0)
            }
        }
        ,
        o.movePath = function(t, e) {
            var i = t
              , s = e;
            t = this._curMat.a * i + this._curMat.c * s + this._curMat.tx,
            e = this._curMat.b * i + this._curMat.d * s + this._curMat.ty,
            this.mX += t,
            this.mY += e
        }
        ,
        o.beginPath = function() {
            var t = this._getPath();
            t.tempArray.length = 0,
            t.closePath = !1,
            this.mX = 0,
            this.mY = 0
        }
        ,
        o.closePath = function() {
            this._path.closePath = !0
        }
        ,
        o.fill = function(t) {
            void 0 === t && (t = !1);
            var e = this._getPath();
            this.drawPoly(0, 0, e.tempArray, this.fillStyle._color.numColor, 0, 0, t)
        }
        ,
        o.stroke = function() {
            var t = this._getPath();
            if (this.lineWidth > 0) {
                if (-1 == this.mId)
                    t.drawLine(0, 0, t.tempArray, this.lineWidth, this.strokeStyle._color.numColor);
                else if (this.mHaveLineKey) {
                    var e = dt.getInstance().shapeLineDic[this.mId];
                    e.rebuild(t.tempArray),
                    t.setGeomtry(e)
                } else
                    dt.getInstance().addLine(this.mId, t.drawLine(0, 0, t.tempArray, this.lineWidth, this.strokeStyle._color.numColor));
                t.update();
                var i = [this.mX, this.mY]
                  , s = Nt.createShape(this, t.ib, t.vb, t.count, t.offset, fe.create(4, 0));
                s.shaderValue.ALPHA = this._shader2D.ALPHA,
                s.shaderValue.u_pos = i,
                s.shaderValue.u_mmat2 = Kt.TEMPMAT4_ARRAY,
                this._submits[this._submits._length++] = s,
                this._renderKey = -1
            }
        }
        ,
        o.line = function(t, e, i, s, n, r) {
            var a = this._curSubmit
              , o = this._vb;
            if ($t.fillLineVb(o, this._clipRect, t, e, i, s, n, r)) {
                this._renderKey = 0;
                var h = this._shader2D
                  , l = a.shaderValue;
                h.strokeStyle === l.strokeStyle && h.ALPHA === l.ALPHA || (h.glTexture = null,
                (a = this._curSubmit = Nt.createSubmit(this, this._ib, o, (o._byteLength - 64) / 32 * 3, fe.create(2, 0))).shaderValue.strokeStyle = h.strokeStyle,
                a.shaderValue.mainID = 2,
                a.shaderValue.ALPHA = h.ALPHA,
                this._submits[this._submits._length++] = a),
                a._numEle += 6
            }
        }
        ,
        o.moveTo = function(t, e, i) {
            void 0 === i && (i = !0);
            var s = this._getPath();
            if (i) {
                var n = t
                  , r = e;
                t = this._curMat.a * n + this._curMat.c * r,
                e = this._curMat.b * n + this._curMat.d * r
            }
            s.addPoint(t, e)
        }
        ,
        o.lineTo = function(t, e, i) {
            void 0 === i && (i = !0);
            var s = this._getPath();
            if (i) {
                var n = t
                  , r = e;
                t = this._curMat.a * n + this._curMat.c * r,
                e = this._curMat.b * n + this._curMat.d * r
            }
            s.addPoint(t, e)
        }
        ,
        o.drawCurves = function(t, e, i) {
            this.setPathId(-1),
            this.beginPath(),
            this.strokeStyle = i[3],
            this.lineWidth = i[4];
            var s = i[2];
            t += i[0],
            e += i[1],
            this.movePath(t, e),
            this.moveTo(s[0], s[1]);
            for (var n = 2, r = s.length; n < r; )
                this.quadraticCurveTo(s[n++], s[n++], s[n++], s[n++]);
            this.stroke()
        }
        ,
        o.arcTo = function(t, i, s, n, r) {
            if (-1 == this.mId || !this.mHaveKey) {
                var a = 0
                  , o = 0
                  , h = 0
                  , l = this._getPath();
                this._curMat.copyTo(e._tmpMatrix),
                e._tmpMatrix.tx = e._tmpMatrix.ty = 0,
                e._tempPoint.setTo(l.getEndPointX(), l.getEndPointY()),
                e._tmpMatrix.invertTransformPoint(e._tempPoint);
                var u = e._tempPoint.x - t
                  , c = e._tempPoint.y - i
                  , _ = Math.sqrt(u * u + c * c);
                if (!(_ <= 1e-6)) {
                    var d = u / _
                      , f = c / _
                      , p = s - t
                      , g = n - i
                      , m = p * p + g * g
                      , v = Math.sqrt(m);
                    if (!(v <= 1e-6)) {
                        var y = p / v
                          , x = g / v
                          , b = d + y
                          , T = f + x
                          , w = Math.sqrt(b * b + T * T);
                        if (!(w <= 1e-6)) {
                            var S = b / w
                              , C = T / w
                              , A = Math.acos(S * d + C * f)
                              , M = Math.PI / 2 - A
                              , E = (_ = r / Math.tan(M)) * d + t
                              , I = _ * f + i
                              , R = Math.sqrt(_ * _ + r * r)
                              , L = t + S * R
                              , P = i + C * R
                              , F = 0
                              , D = 0
                              , B = 0;
                            if (d * x - f * y >= 0) {
                                var N = (F = 2 * M) / e.SEGNUM;
                                D = Math.sin(N),
                                B = Math.cos(N)
                            } else
                                N = (F = 2 * -M) / e.SEGNUM,
                                D = Math.sin(N),
                                B = Math.cos(N);
                            o = this._curMat.a * E + this._curMat.c * I,
                            h = this._curMat.b * E + this._curMat.d * I,
                            o == this._path.getEndPointX() && h == this._path.getEndPointY() || l.addPoint(o, h);
                            var O = E - L
                              , k = I - P;
                            for (a = 0; a < e.SEGNUM; a++) {
                                var U = O * B + k * D
                                  , V = -O * D + k * B;
                                o = U + L,
                                h = V + P,
                                t = this._curMat.a * o + this._curMat.c * h,
                                h = i = this._curMat.b * o + this._curMat.d * h,
                                (o = t) == this._path.getEndPointX() && h == this._path.getEndPointY() || l.addPoint(o, h),
                                O = U,
                                k = V
                            }
                        }
                    }
                }
            }
        }
        ,
        o.arc = function(t, e, i, s, n, r, a) {
            if (void 0 === r && (r = !1),
            void 0 === a && (a = !0),
            -1 != this.mId) {
                var o = dt.getInstance().shapeDic[this.mId];
                if (o && this.mHaveKey && !o.needUpdate(this._curMat))
                    return;
                t = 0,
                e = 0
            }
            var h = 0
              , l = 0
              , u = 0
              , c = 0
              , _ = 0
              , d = 0
              , f = 0
              , p = 0;
            if (l = n - s,
            r)
                if (Math.abs(l) >= 2 * Math.PI)
                    l = 2 * -Math.PI;
                else
                    for (; l > 0; )
                        l -= 2 * Math.PI;
            else if (Math.abs(l) >= 2 * Math.PI)
                l = 2 * Math.PI;
            else
                for (; l < 0; )
                    l += 2 * Math.PI;
            u = l / (p = i < 101 ? Math.max(10, l * i / 5) : i < 201 ? Math.max(10, l * i / 20) : Math.max(10, l * i / 40)) / 2,
            c = Math.abs(4 / 3 * (1 - Math.cos(u)) / Math.sin(u)),
            r && (c = -c);
            var g = this._getPath()
              , m = NaN
              , v = NaN;
            for (f = 0; f <= p; f++)
                h = s + l * (f / p),
                _ = t + Math.cos(h) * i,
                d = e + Math.sin(h) * i,
                a && (m = _,
                v = d,
                _ = this._curMat.a * m + this._curMat.c * v,
                d = this._curMat.b * m + this._curMat.d * v),
                _ == this._path.getEndPointX() && d == this._path.getEndPointY() || g.addPoint(_, d);
            _ = t + Math.cos(n) * i,
            d = e + Math.sin(n) * i,
            a && (m = _,
            v = d,
            _ = this._curMat.a * m + this._curMat.c * v,
            d = this._curMat.b * m + this._curMat.d * v),
            _ == this._path.getEndPointX() && d == this._path.getEndPointY() || g.addPoint(_, d)
        }
        ,
        o.quadraticCurveTo = function(t, e, i, s) {
            var n = B.I
              , r = i
              , a = s;
            i = this._curMat.a * r + this._curMat.c * a,
            s = this._curMat.b * r + this._curMat.d * a,
            r = t,
            a = e,
            t = this._curMat.a * r + this._curMat.c * a,
            e = this._curMat.b * r + this._curMat.d * a;
            for (var o = n.getBezierPoints([this._path.getEndPointX(), this._path.getEndPointY(), t, e, i, s], 30, 2), h = 0, l = o.length / 2; h < l; h++)
                this.lineTo(o[2 * h], o[2 * h + 1], !1);
            this.lineTo(i, s, !1)
        }
        ,
        o.rect = function(t, e, i, s) {
            this._other = this._other.make(),
            this._other.path || (this._other.path = new bt),
            this._other.path.rect(t, e, i, s)
        }
        ,
        o.strokeRect = function(t, e, i, s, n) {
            var r = .5 * n;
            this.line(t - r, e, t + i + r, e, n, this._curMat),
            this.line(t + i, e, t + i, e + s, n, this._curMat),
            this.line(t, e, t, e + s, n, this._curMat),
            this.line(t - r, e + s, t + i + r, e + s, n, this._curMat)
        }
        ,
        o.clip = function() {}
        ,
        o.drawPoly = function(t, e, i, s, n, r, a) {
            void 0 === a && (a = !1),
            this._renderKey = 0,
            this._shader2D.glTexture = null;
            var o = this._getPath();
            if (-1 == this.mId)
                o.polygon(t, e, i, s, n || 1, r);
            else if (this.mHaveKey) {
                var h = dt.getInstance().shapeDic[this.mId];
                h.setMatrix(this._curMat),
                h.rebuild(o.tempArray),
                o.setGeomtry(h)
            } else {
                var l = o.polygon(t, e, i, s, n || 1, r);
                dt.getInstance().addShape(this.mId, l),
                l.setMatrix(this._curMat)
            }
            o.update();
            var u, c = [this.mX, this.mY];
            if (u = Nt.createShape(this, o.ib, o.vb, o.count, o.offset, fe.create(4, 0)),
            u.shaderValue.ALPHA = this._shader2D.ALPHA,
            u.shaderValue.u_pos = c,
            u.shaderValue.u_mmat2 = Kt.EMPTYMAT4_ARRAY,
            this._submits[this._submits._length++] = u,
            n > 0) {
                if (this.mHaveLineKey) {
                    var _ = dt.getInstance().shapeLineDic[this.mId];
                    _.rebuild(o.tempArray),
                    o.setGeomtry(_)
                } else
                    dt.getInstance().addShape(this.mId, o.drawLine(t, e, i, n, r));
                o.update(),
                (u = Nt.createShape(this, o.ib, o.vb, o.count, o.offset, fe.create(4, 0))).shaderValue.ALPHA = this._shader2D.ALPHA,
                u.shaderValue.u_mmat2 = Kt.EMPTYMAT4_ARRAY,
                this._submits[this._submits._length++] = u
            }
        }
        ,
        o.drawParticle = function(t, e, i) {
            i.x = t,
            i.y = e,
            this._submits[this._submits._length++] = i
        }
        ,
        o._getPath = function() {
            return this._path || (this._path = new bt)
        }
        ,
        r(0, o, "globalCompositeOperation", function() {
            return yt.NAMES[this._nBlendType]
        }, function(t) {
            var e = yt.TOINT[t];
            null == e || this._nBlendType === e || (Tt.save(this, 65536, this, !0),
            this._curSubmit = Nt.RENDERBASE,
            this._renderKey = 0,
            this._nBlendType = e)
        }),
        r(0, o, "strokeStyle", function() {
            return this._shader2D.strokeStyle
        }, function(t) {
            this._shader2D.strokeStyle.equal(t) || (Tt.save(this, 512, this._shader2D, !1),
            this._shader2D.strokeStyle = xt.create(t))
        }),
        r(0, o, "globalAlpha", function() {
            return this._shader2D.ALPHA
        }, function(t) {
            (t = Math.floor(1e3 * t) / 1e3) != this._shader2D.ALPHA && (Tt.save(this, 1, this._shader2D, !0),
            this._shader2D.ALPHA = t)
        }),
        r(0, o, "asBitmap", null, function(t) {
            if (t) {
                if (this._targets || (this._targets = new Et),
                this._targets.repaint = !0,
                !this._width || !this._height)
                    throw Error("asBitmap no size!");
                this._targets.setSP(this.sprite),
                this._targets.size(this._width, this._height)
            } else
                this._targets = null
        }),
        r(0, o, "fillStyle", function() {
            return this._shader2D.fillStyle
        }, function(t) {
            this._shader2D.fillStyle.equal(t) || (Tt.save(this, 2, this._shader2D, !1),
            this._shader2D.fillStyle = xt.create(t))
        }),
        r(0, o, "textAlign", function() {
            return this._other.textAlign
        }, function(t) {
            this._other.textAlign === t || (this._other = this._other.make(),
            Tt.save(this, 32768, this._other, !1),
            this._other.textAlign = t)
        }),
        r(0, o, "lineWidth", function() {
            return this._other.lineWidth
        }, function(t) {
            this._other.lineWidth === t || (this._other = this._other.make(),
            Tt.save(this, 256, this._other, !1),
            this._other.lineWidth = t)
        }),
        r(0, o, "textBaseline", function() {
            return this._other.textBaseline
        }, function(t) {
            this._other.textBaseline === t || (this._other = this._other.make(),
            Tt.save(this, 16384, this._other, !1),
            this._other.textBaseline = t)
        }),
        r(0, o, "font", null, function(t) {
            t != this._other.font.toString() && (this._other = this._other.make(),
            Tt.save(this, 8, this._other, !1),
            this._other.font === Yt.EMPTY ? this._other.font = new Yt(t) : this._other.font.setFont(t))
        }),
        e.__init__ = function() {
            a.DEFAULT = new a
        }
        ,
        e._tempPoint = new U,
        e._SUBMITVBSIZE = 32e3,
        e._MAXSIZE = 99999999,
        e._RECTVBSIZE = 16,
        e.MAXCLIPRECT = new V(0,0,99999999,99999999),
        e._COUNT = 0,
        e._tmpMatrix = new k,
        e.SEGNUM = 32,
        e._contextcount = 0,
        s(e, ["_fontTemp", function() {
            return this._fontTemp = new Yt
        }
        , "_drawStyleTemp", function() {
            return this._drawStyleTemp = new xt(null)
        }
        ]),
        e.__init$ = function() {
            a = function() {
                function t() {
                    this.lineWidth = 1,
                    this.path = null,
                    this.textAlign = null,
                    this.textBaseline = null,
                    this.font = Yt.EMPTY
                }
                n(t, "");
                var e = t.prototype;
                return e.clear = function() {
                    this.lineWidth = 1,
                    this.path && this.path.clear(),
                    this.textAlign = this.textBaseline = null,
                    this.font = Yt.EMPTY
                }
                ,
                e.make = function() {
                    return this === t.DEFAULT ? new t : this
                }
                ,
                t.DEFAULT = null,
                t
            }()
        }
        ,
        e
    }()
      , ge = function(t) {
        function e(t, i) {
            e.__super.call(this, t, i)
        }
        n(e, "laya.webgl.utils.RenderSprite3D", j);
        var i = e.prototype;
        return i.onCreate = function(t) {
            switch (t) {
            case 8:
                return void (this._fun = this._blend);
            case 4:
                return void (this._fun = this._transform)
            }
        }
        ,
        i._mask = function(t, i, s, n) {
            var r, a, o = this._next, h = t.mask;
            if (h) {
                i.ctx.save();
                var l = i.ctx.globalCompositeOperation
                  , u = new V;
                if (u.copyFrom(h.getBounds()),
                u.width = Math.round(u.width),
                u.height = Math.round(u.height),
                u.x = Math.round(u.x),
                u.y = Math.round(u.y),
                u.width > 0 && u.height > 0) {
                    var c = t._style._tf
                      , _ = kt.create();
                    _.addValue("bounds", u),
                    r = Ot.create([_, i], laya.webgl.utils.RenderSprite3D.tmpTarget),
                    i.addRenderObject(r),
                    h.render(i, -u.x, -u.y),
                    r = Ot.create([_], laya.webgl.utils.RenderSprite3D.endTmpTarget),
                    i.addRenderObject(r),
                    i.ctx.save(),
                    i.clipRect(s - c.translateX + u.x, n - c.translateY + u.y, u.width, u.height),
                    o._fun.call(o, t, i, s, n),
                    i.ctx.restore(),
                    a = Gt.create(6),
                    l = i.ctx.globalCompositeOperation,
                    a.blendMode = "mask",
                    i.addRenderObject(a),
                    k.TEMP.identity();
                    var d = fe.create(1, 0)
                      , f = he.INV_UV
                      , p = u.width
                      , g = u.height;
                    (u.width < 32 || u.height < 32) && ((f = e.tempUV)[0] = 0,
                    f[1] = 0,
                    f[2] = u.width >= 32 ? 1 : u.width / 32,
                    f[3] = 0,
                    f[4] = u.width >= 32 ? 1 : u.width / 32,
                    f[5] = u.height >= 32 ? 1 : u.height / 32,
                    f[6] = 0,
                    f[7] = u.height >= 32 ? 1 : u.height / 32,
                    u.width = u.width >= 32 ? u.width : 32,
                    u.height = u.height >= 32 ? u.height : 32,
                    f[1] *= -1,
                    f[3] *= -1,
                    f[5] *= -1,
                    f[7] *= -1,
                    f[1] += 1,
                    f[3] += 1,
                    f[5] += 1,
                    f[7] += 1),
                    i.ctx.drawTarget(_, s + u.x - c.translateX, n + u.y - c.translateY, p, g, k.TEMP, "tmpTarget", d, f, 6),
                    r = Ot.create([_], laya.webgl.utils.RenderSprite3D.recycleTarget),
                    i.addRenderObject(r),
                    (a = Gt.create(6)).blendMode = l,
                    i.addRenderObject(a)
                }
                i.ctx.restore()
            } else
                o._fun.call(o, t, i, s, n)
        }
        ,
        i._blend = function(t, e, i, s) {
            var n = t._style
              , r = this._next;
            n.blendMode ? (e.ctx.save(),
            e.ctx.globalCompositeOperation = n.blendMode,
            r._fun.call(r, t, e, i, s),
            e.ctx.restore()) : r._fun.call(r, t, e, i, s)
        }
        ,
        i._transform = function(t, e, i, s) {
            var n = t.transform
              , r = this._next;
            if (n && r != j.NORENDER) {
                var a = e.ctx;
                t._style;
                n.tx = i,
                n.ty = s;
                var o = a._getTransformMatrix()
                  , h = o.clone();
                k.mul(n, o, o),
                o._checkTransform(),
                n.tx = n.ty = 0,
                r._fun.call(r, t, e, 0, 0),
                h.copyTo(o),
                h.destroy()
            } else
                r._fun.call(r, t, e, i, s)
        }
        ,
        e.tmpTarget = function(t, e) {
            var i = t.getValue("bounds")
              , s = Le.create(i.width, i.height);
            s.start(),
            s.clear(0, 0, 0, 0),
            t.addValue("tmpTarget", s)
        }
        ,
        e.endTmpTarget = function(t) {
            t.getValue("tmpTarget").end()
        }
        ,
        e.recycleTarget = function(t) {
            t.getValue("tmpTarget").recycle(),
            t.recycle()
        }
        ,
        s(e, ["tempUV", function() {
            return this.tempUV = new Array(8)
        }
        ]),
        e
    }()
      , me = function(t) {
        function e(t, i, s, n, r) {
            this._atlasCanvas = null,
            this._inAtlasTextureKey = null,
            this._inAtlasTextureBitmapValue = null,
            this._inAtlasTextureOriUVValue = null,
            this._InAtlasWebGLImagesKey = null,
            this._InAtlasWebGLImagesOffsetValue = null,
            e.__super.call(this, t, i, r),
            this._inAtlasTextureKey = [],
            this._inAtlasTextureBitmapValue = [],
            this._inAtlasTextureOriUVValue = [],
            this._InAtlasWebGLImagesKey = {},
            this._InAtlasWebGLImagesOffsetValue = [],
            this._atlasCanvas = new Xe,
            this._atlasCanvas._atlaser = this,
            this._atlasCanvas.width = s,
            this._atlasCanvas.height = n,
            this._atlasCanvas.activeResource(),
            this._atlasCanvas.lock = !0
        }
        n(e, "laya.webgl.atlas.Atlaser", gt);
        var i = e.prototype;
        return i.computeUVinAtlasTexture = function(t, e, i, s) {
            var n = mt.atlasTextureWidth
              , r = mt.atlasTextureHeight
              , a = i / n
              , o = s / r
              , h = (i + t.bitmap.width) / n
              , l = (s + t.bitmap.height) / r
              , u = t.bitmap.width / n
              , c = t.bitmap.height / r;
            t.uv = [a + e[0] * u, o + e[1] * c, h - (1 - e[2]) * u, o + e[3] * c, h - (1 - e[4]) * u, l - (1 - e[5]) * c, a + e[6] * u, l - (1 - e[7]) * c]
        }
        ,
        i.findBitmapIsExist = function(t) {
            if (t instanceof laya.webgl.resource.WebGLImage) {
                var e = t
                  , i = e.url
                  , s = this._InAtlasWebGLImagesKey[i || e.id];
                if (s)
                    return s.offsetInfoID
            }
            return -1
        }
        ,
        i.addToAtlasTexture = function(t, e, i) {
            if (t instanceof laya.webgl.resource.WebGLImage) {
                var s = t
                  , n = s.url;
                this._InAtlasWebGLImagesKey[n || s.id] = {
                    bitmap: t,
                    offsetInfoID: this._InAtlasWebGLImagesOffsetValue.length
                },
                this._InAtlasWebGLImagesOffsetValue.push([e, i])
            }
            this._atlasCanvas.texSubImage2D(e, i, t.atlasSource),
            t.clearAtlasSource()
        }
        ,
        i.addToAtlas = function(t, e, i) {
            t._atlasID = this._inAtlasTextureKey.length;
            var s = t.uv.slice()
              , n = t.bitmap;
            this._inAtlasTextureKey.push(t),
            this._inAtlasTextureOriUVValue.push(s),
            this._inAtlasTextureBitmapValue.push(n),
            this.computeUVinAtlasTexture(t, s, e, i),
            t.bitmap = this._atlasCanvas
        }
        ,
        i.clear = function() {
            for (var t = 0, e = this._inAtlasTextureKey.length; t < e; t++)
                this._inAtlasTextureKey[t].bitmap = this._inAtlasTextureBitmapValue[t],
                this._inAtlasTextureKey[t].uv = this._inAtlasTextureOriUVValue[t],
                this._inAtlasTextureKey[t]._atlasID = -1,
                this._inAtlasTextureKey[t].bitmap.lock = !1,
                this._inAtlasTextureKey[t].bitmap.releaseResource();
            this._inAtlasTextureKey.length = 0,
            this._inAtlasTextureBitmapValue.length = 0,
            this._inAtlasTextureOriUVValue.length = 0,
            this._InAtlasWebGLImagesKey = null,
            this._InAtlasWebGLImagesOffsetValue.length = 0
        }
        ,
        i.dispose = function() {
            this.clear(),
            this._atlasCanvas.destroy()
        }
        ,
        r(0, i, "InAtlasWebGLImagesOffsetValue", function() {
            return this._InAtlasWebGLImagesOffsetValue
        }),
        r(0, i, "texture", function() {
            return this._atlasCanvas
        }),
        r(0, i, "inAtlasWebGLImagesKey", function() {
            return this._InAtlasWebGLImagesKey
        }),
        e
    }()
      , ve = function(t) {
        function e() {
            e.__super.call(this, e.__name2int, e.__int2name, e.__int2nameMap)
        }
        return n(e, "laya.webgl.shader.d2.ShaderDefines2D", Rt),
        e.__init__ = function() {
            e.reg("TEXTURE2D", 1),
            e.reg("COLOR2D", 2),
            e.reg("PRIMITIVE", 4),
            e.reg("GLOW_FILTER", 8),
            e.reg("BLUR_FILTER", 16),
            e.reg("COLOR_FILTER", 32),
            e.reg("COLOR_ADD", 64),
            e.reg("WORLDMAT", 128),
            e.reg("FILLTEXTURE", 256),
            e.reg("FSHIGHPRECISION", 1024)
        }
        ,
        e.reg = function(t, i) {
            Rt._reg(t, i, e.__name2int, e.__int2name)
        }
        ,
        e.toText = function(t, e, i) {
            return Rt._toText(t, e, i)
        }
        ,
        e.toInt = function(t) {
            return Rt._toInt(t, e.__name2int)
        }
        ,
        e.TEXTURE2D = 1,
        e.COLOR2D = 2,
        e.PRIMITIVE = 4,
        e.FILTERGLOW = 8,
        e.FILTERBLUR = 16,
        e.FILTERCOLOR = 32,
        e.COLORADD = 64,
        e.WORLDMAT = 128,
        e.FILLTEXTURE = 256,
        e.SKINMESH = 512,
        e.SHADERDEFINE_FSHIGHPRECISION = 1024,
        e.__name2int = {},
        e.__int2name = [],
        e.__int2nameMap = [],
        e
    }()
      , ye = function(t) {
        function e(t, i, s, n, r) {
            this._points = [],
            this.rebuild(s),
            e.__super.call(this, t, i, 0, 0, 0, r, n, r, 0)
        }
        n(e, "laya.webgl.shapes.Line", Ft);
        var i = e.prototype;
        return i.rebuild = function(t) {
            var e = t.length;
            e != this._points.length && (this.mUint16Array = new Uint16Array(6 * (e / 2 - 1)),
            this.mFloat32Array = new Float32Array(5 * e)),
            this._points.length = 0;
            for (var i = NaN, s = NaN, n = -1, r = -1, a = t.length / 2, o = 0; o < a; o++)
                i = t[2 * o],
                s = t[2 * o + 1],
                (Math.abs(n - i) > .01 || Math.abs(r - s) > .01) && this._points.push(i, s),
                n = i,
                r = s
        }
        ,
        i.getData = function(t, e, i) {
            var s = []
              , n = [];
            this.borderWidth > 0 && this.createLine2(this._points, s, this.borderWidth, i, n, this._points.length / 2),
            this.mUint16Array.set(s, 0),
            this.mFloat32Array.set(n, 0),
            t.append(this.mUint16Array),
            e.append(this.mFloat32Array)
        }
        ,
        e
    }()
      , xe = function(t) {
        function e(t, i, s, n, r) {
            this._points = [];
            for (var a = NaN, o = NaN, h = -1, l = -1, u = s.length / 2 - 1, c = 0; c < u; c++)
                a = s[2 * c],
                o = s[2 * c + 1],
                (Math.abs(h - a) > .01 || Math.abs(l - o) > .01) && this._points.push(a, o),
                h = a,
                l = o;
            a = s[2 * u],
            o = s[2 * u + 1],
            h = this._points[0],
            l = this._points[1],
            (Math.abs(h - a) > .01 || Math.abs(l - o) > .01) && this._points.push(a, o),
            e.__super.call(this, t, i, 0, 0, this._points.length / 2, 0, n, r)
        }
        n(e, "laya.webgl.shapes.LoopLine", Ft);
        var i = e.prototype;
        return i.getData = function(t, e, i) {
            if (this.borderWidth > 0) {
                for (var s = this.color, n = (s >> 16 & 255) / 255, r = (s >> 8 & 255) / 255, a = (255 & s) / 255, o = [], h = 0, l = 0, u = [], c = Math.floor(this._points.length / 2), _ = 0; _ < c; _++)
                    h = this._points[2 * _],
                    l = this._points[2 * _ + 1],
                    o.push(this.x + h, this.y + l, n, r, a);
                this.createLoopLine(o, u, this.borderWidth, i + o.length / 5),
                t.append(new Uint16Array(u)),
                e.append(new Float32Array(o))
            }
        }
        ,
        i.createLoopLine = function(t, e, i, s, n, r) {
            t.length;
            var a = t.concat()
              , o = n || t
              , h = this.borderColor
              , l = (h >> 16 & 255) / 255
              , u = (h >> 8 & 255) / 255
              , c = (255 & h) / 255
              , _ = [a[0], a[1]]
              , d = [a[a.length - 5], a[a.length - 4]]
              , f = d[0] + .5 * (_[0] - d[0])
              , p = d[1] + .5 * (_[1] - d[1]);
            a.unshift(f, p, 0, 0, 0),
            a.push(f, p, 0, 0, 0);
            var g, m, v, y, x, b, T, w, S, C, A, M, E, I, R, L, P, F, D, B, N = a.length / 5, O = s, k = i / 2;
            v = a[0],
            y = a[1],
            C = v - (x = a[5]),
            S = (S = -(y - (b = a[6]))) / (B = Math.sqrt(S * S + C * C)) * k,
            C = C / B * k,
            o.push(v - S, y - C, l, u, c, v + S, y + C, l, u, c);
            for (var U = 1; U < N - 1; U++)
                v = a[5 * (U - 1)],
                y = a[5 * (U - 1) + 1],
                x = a[5 * U],
                b = a[5 * U + 1],
                T = a[5 * (U + 1)],
                w = a[5 * (U + 1) + 1],
                C = v - x,
                M = x - T,
                R = (-(S = (S = -(y - b)) / (B = Math.sqrt(S * S + C * C)) * k) + v) * (-(C = C / B * k) + b) - (-S + x) * (-C + y),
                F = (-(A = (A = -(b - w)) / (B = Math.sqrt(A * A + M * M)) * k) + T) * (-(M = M / B * k) + b) - (-A + x) * (-M + w),
                D = (E = -C + y - (-C + b)) * (P = -A + x - (-A + T)) - (L = -M + w - (-M + b)) * (I = -S + x - (-S + v)),
                Math.abs(D) < .1 ? (D += 10.1,
                o.push(x - S, b - C, l, u, c, x + S, b + C, l, u, c)) : (((g = (I * F - P * R) / D) - x) * (g - x) + ((m = (L * R - E * F) / D) - b) + (m - b),
                o.push(g, m, l, u, c, x - (g - x), b - (m - b), l, u, c));
            r && (e = r);
            var V = this.edges + 1;
            for (U = 1; U < V; U++)
                e.push(O + 2 * (U - 1), O + 2 * (U - 1) + 1, O + 2 * U + 1, O + 2 * U + 1, O + 2 * U, O + 2 * (U - 1));
            return e.push(O + 2 * (U - 1), O + 2 * (U - 1) + 1, O + 1, O + 1, O, O + 2 * (U - 1)),
            o
        }
        ,
        e
    }()
      , be = function(t) {
        function e(t, i, s, n, r, a) {
            this._points = null,
            this._start = -1,
            this._repaint = !1,
            this.earcutTriangles = null,
            this._mat = k.create(),
            this._points = s.slice(0, s.length),
            e.__super.call(this, t, i, 0, 0, this._points.length / 2, n, r, a)
        }
        n(e, "laya.webgl.shapes.Polygon", Ft);
        var i = e.prototype;
        return i.rebuild = function(t) {
            this._repaint || (this._points.length = 0,
            this._points = this._points.concat(t))
        }
        ,
        i.setMatrix = function(t) {
            t.copyTo(this._mat)
        }
        ,
        i.needUpdate = function(t) {
            return this._repaint = this._mat.a == t.a && this._mat.b == t.b && this._mat.c == t.c && this._mat.d == t.d && this._mat.tx == t.tx && this._mat.ty == t.ty,
            !this._repaint
        }
        ,
        i.getData = function(t, e, i) {
            var s, n = 0, r = this._points, a = 0;
            if (this.mUint16Array && this.mFloat32Array && this._repaint) {
                if (this._start != i) {
                    for (this._start = i,
                    s = [],
                    a = this.earcutTriangles.length,
                    n = 0; n < a; n++)
                        s.push(this.earcutTriangles[n] + i);
                    this.mUint16Array = new Uint16Array(s)
                }
            } else {
                this._start = i,
                s = [];
                var o = []
                  , h = []
                  , l = this.color
                  , u = (l >> 16 & 255) / 255
                  , c = (l >> 8 & 255) / 255
                  , _ = (255 & l) / 255;
                for (a = Math.floor(r.length / 2),
                n = 0; n < a; n++)
                    o.push(this.x + r[2 * n], this.y + r[2 * n + 1], u, c, _),
                    h.push(this.x + r[2 * n], this.y + r[2 * n + 1]);
                for (this.earcutTriangles = Dt.earcut(h, null, 2),
                a = this.earcutTriangles.length,
                n = 0; n < a; n++)
                    s.push(this.earcutTriangles[n] + i);
                this.mUint16Array = new Uint16Array(s),
                this.mFloat32Array = new Float32Array(o)
            }
            t.append(this.mUint16Array),
            e.append(this.mFloat32Array)
        }
        ,
        e
    }()
      , Te = function(t) {
        function e() {
            this._matrix = new k,
            this._matrix4 = Xt.defaultMatrix4.concat(),
            e.__super.call(this, 1e4),
            this.shaderValue = new fe(0,0)
        }
        n(e, "laya.webgl.submit.SubmitCanvas", Nt);
        var i = e.prototype;
        return i.renderSubmit = function() {
            if (this._ctx_src._targets)
                return this._ctx_src._targets.flush(this._ctx_src),
                1;
            var t = Kt.worldAlpha
              , e = Kt.worldMatrix4
              , i = Kt.worldMatrix
              , s = Kt.worldFilters
              , n = Kt.worldShaderDefines
              , r = this.shaderValue
              , a = this._matrix
              , o = this._matrix4
              , h = k.TEMP;
            return k.mul(a, i, h),
            o[0] = h.a,
            o[1] = h.b,
            o[4] = h.c,
            o[5] = h.d,
            o[12] = h.tx,
            o[13] = h.ty,
            Kt.worldMatrix = h.clone(),
            Kt.worldMatrix4 = o,
            Kt.worldAlpha = Kt.worldAlpha * r.alpha,
            r.filters && r.filters.length && (Kt.worldFilters = r.filters,
            Kt.worldShaderDefines = r.defines),
            this._ctx_src.flush(),
            Kt.worldAlpha = t,
            Kt.worldMatrix4 = e,
            Kt.worldMatrix.destroy(),
            Kt.worldMatrix = i,
            Kt.worldFilters = s,
            Kt.worldShaderDefines = n,
            1
        }
        ,
        i.releaseRender = function() {
            var t = e._cache;
            this._ctx_src = null,
            t[t._length++] = this
        }
        ,
        i.getRenderType = function() {
            return 10003
        }
        ,
        e.create = function(t, i, s) {
            var n = e._cache._length ? e._cache[--e._cache._length] : new e;
            n._ctx_src = t;
            var r = n.shaderValue;
            return r.alpha = i,
            r.defines.setValue(0),
            s && s.length && r.setFilters(s),
            n
        }
        ,
        e._cache = (e._cache = [],
        e._cache._length = 0,
        e._cache),
        e
    }()
      , we = function(t) {
        function e(t) {
            this._preIsSameTextureShader = !1,
            this._isSameTexture = !0,
            this._texs = new Array,
            this._texsID = new Array,
            this._vbPos = new Array,
            void 0 === t && (t = 1e4),
            e.__super.call(this, t)
        }
        n(e, "laya.webgl.submit.SubmitTexture", Nt);
        var i = e.prototype;
        return i.releaseRender = function() {
            var t = e._cache;
            t[t._length++] = this,
            this.shaderValue.release(),
            this._preIsSameTextureShader = !1,
            this._vb = null,
            this._texs.length = 0,
            this._vbPos.length = 0,
            this._isSameTexture = !0
        }
        ,
        i.addTexture = function(t, e) {
            this._texsID[this._texs.length] = t._uvID,
            this._texs.push(t),
            this._vbPos.push(e)
        }
        ,
        i.checkTexture = function() {
            if (this._texs.length < 1)
                this._isSameTexture = !0;
            else {
                var t = this.shaderValue.textureHost.bitmap;
                if (null !== t)
                    for (var e = this._vb.getFloat32Array(), i = 0, s = this._texs.length; i < s; i++) {
                        var n = this._texs[i];
                        n.active();
                        var r = n.uv;
                        if (this._texsID[i] !== n._uvID) {
                            this._texsID[i] = n._uvID;
                            var a = this._vbPos[i];
                            e[a + 2] = r[0],
                            e[a + 3] = r[1],
                            e[a + 6] = r[2],
                            e[a + 7] = r[3],
                            e[a + 10] = r[4],
                            e[a + 11] = r[5],
                            e[a + 14] = r[6],
                            e[a + 15] = r[7],
                            this._vb.setNeedUpload()
                        }
                        n.bitmap !== t && (this._isSameTexture = !1)
                    }
            }
        }
        ,
        i.renderSubmit = function() {
            if (0 === this._numEle)
                return e._shaderSet = !1,
                1;
            var t = this.shaderValue.textureHost;
            if (t) {
                var i = t.source;
                if (!t.bitmap || !i)
                    return e._shaderSet = !1,
                    1;
                this.shaderValue.texture = i
            }
            this._vb.bind_upload(this._ib);
            var s = qt.mainContext;
            if (yt.activeBlendFunction !== this._blendFn && (s.enable(3042),
            this._blendFn(s),
            yt.activeBlendFunction = this._blendFn),
            ht.drawCall++,
            ht.trianglesFaces += this._numEle / 3,
            this._preIsSameTextureShader && Me.activeShader && e._shaderSet ? Me.activeShader.uploadTexture2D(this.shaderValue.texture) : this.shaderValue.upload(),
            e._shaderSet = !0,
            this._texs.length > 1 && !this._isSameTexture)
                for (var n = t.bitmap, r = 0, a = Me.activeShader, o = 0, h = this._texs.length; o < h; o++) {
                    var l = this._texs[o];
                    l.bitmap === n && o + 1 !== h || (a.uploadTexture2D(l.source),
                    s.drawElements(4, 6 * (o - r + 1), 5123, this._startIdx + 6 * r * Xt.BYTES_PIDX),
                    n = l.bitmap,
                    r = o)
                }
            else
                s.drawElements(4, this._numEle, 5123, this._startIdx);
            return 1
        }
        ,
        e.create = function(t, i, s, n, r) {
            var a = e._cache._length ? e._cache[--e._cache._length] : new e;
            null == s && ((s = a._selfVb || (a._selfVb = ni.create(-1))).clear(),
            n = 0),
            a._ib = i,
            a._vb = s,
            a._startIdx = n * Xt.BYTES_PIDX,
            a._numEle = 0;
            var o = t._nBlendType;
            a._blendFn = t._targets ? yt.targetFns[o] : yt.fns[o],
            a.shaderValue = r,
            a.shaderValue.setValue(t._shader2D);
            var h = t._shader2D.filters;
            return h && a.shaderValue.setFilters(h),
            a
        }
        ,
        e._cache = (e._cache = [],
        e._cache._length = 0,
        e._cache),
        e._shaderSet = !0,
        e
    }()
      , Se = function(t) {
        function e() {
            e.__super.call(this, laya.webgl.utils.MeshTexture.const_stride, 0, 0),
            this.canReuse = !0,
            this.setAttributes(laya.webgl.utils.MeshTexture._fixattriInfo)
        }
        n(e, "laya.webgl.utils.MeshTexture", jt);
        var i = e.prototype;
        return i.addData = function(t, i, s, n, r, a) {
            for (var o = t.length / 2, h = this._vb.needSize(o * e.const_stride) >> 2, l = this._vb.getFloat32Array(), u = 0, c = 0; c < o; c++) {
                var _ = t[u]
                  , d = t[u + 1]
                  , f = _ * n.a + d * n.c + n.tx
                  , p = _ * n.b + d * n.d + n.ty;
                l[h++] = f,
                l[h++] = p,
                l[h++] = i[u],
                l[h++] = i[u + 1],
                u += 2
            }
            this._vb.setNeedUpload();
            var g = this.vertNum;
            if (g > 0) {
                (o = s.length) > e.tmpIdx.length && (e.tmpIdx = new Uint16Array(o));
                for (var m = 0; m < o; m++)
                    e.tmpIdx[m] = s[m] + g;
                this._ib.appendU16Array(e.tmpIdx, s.length)
            } else
                this._ib.append(s);
            this._ib.setNeedUpload(),
            this.vertNum += o,
            this.indexNum += s.length
        }
        ,
        i.releaseMesh = function() {
            this._vb._byteLength = 0,
            this._ib._byteLength = 0,
            this.vertNum = 0,
            this.indexNum = 0,
            laya.webgl.utils.MeshTexture._POOL.push(this)
        }
        ,
        i.destroy = function() {
            this._ib.destroy(),
            this._vb.destroy()
        }
        ,
        e.getAMesh = function() {
            return laya.webgl.utils.MeshTexture._POOL.length ? laya.webgl.utils.MeshTexture._POOL.pop() : new e
        }
        ,
        e.const_stride = 16,
        e._POOL = [],
        s(e, ["_fixattriInfo", function() {
            return this._fixattriInfo = [5126, 2, 0, 5126, 2, 8]
        }
        , "tmpIdx", function() {
            return this.tmpIdx = new Uint16Array(4)
        }
        ]),
        e
    }()
      , Ce = function(e) {
        function a() {
            this._transform = null,
            this._tfChanged = !1,
            this._x = 0,
            this._y = 0,
            this._width = 0,
            this._height = 0,
            this._repaint = 1,
            this._mouseEnableState = 0,
            this._zOrder = 0,
            this._graphics = null,
            this._renderType = 0,
            this._optimizeScrollRect = !1,
            this._texture = null,
            this.mouseThrough = !1,
            this.autoSize = !1,
            this.hitTestPrior = !1,
            this.viewport = null,
            a.__super.call(this),
            this._style = w.EMPTY
        }
        n(a, "laya.display.Sprite", e);
        var h = a.prototype;
        return i.imps(h, {
            "laya.display.ILayout": !0
        }),
        h.createConchModel = function() {
            return new ConchNode
        }
        ,
        h.destroy = function(t) {
            void 0 === t && (t = !0),
            this._releaseMem(),
            e.prototype.destroy.call(this, t),
            this._style && this._style.destroy(),
            this._transform && this._transform.destroy(),
            this._transform = null,
            this._style = null,
            this._graphics = null
        }
        ,
        h.updateZOrder = function() {
            _t.updateOrder(this._childs) && this.repaint()
        }
        ,
        h.reCache = function() {
            this._$P.cacheCanvas && (this._$P.cacheCanvas.reCache = !0),
            this._repaint = 1
        }
        ,
        h.setBounds = function(t) {
            this._set$P("uBounds", t)
        }
        ,
        h.getBounds = function() {
            return this._$P.mBounds || this._set$P("mBounds", new V),
            V._getWrapRec(this._boundPointsToParent(), this._$P.mBounds)
        }
        ,
        h.getSelfBounds = function() {
            return this._$P.uBounds ? this._$P.uBounds : (this._$P.mBounds || this._set$P("mBounds", new V),
            V._getWrapRec(this._getBoundPointsM(!1), this._$P.mBounds))
        }
        ,
        h._boundPointsToParent = function(t) {
            void 0 === t && (t = !1);
            var e = 0
              , i = 0;
            this._style && (e = this._style._tf.translateX,
            i = this._style._tf.translateY,
            t = t || 0 !== this._style._tf.rotate,
            this._style.scrollRect && (e += this._style.scrollRect.x,
            i += this._style.scrollRect.y));
            var s = this._getBoundPointsM(t);
            if (!s || s.length < 1)
                return s;
            if (8 != s.length && (s = t ? N.scanPList(s) : V._getWrapRec(s, V.TEMP)._getBoundPoints()),
            !this.transform)
                return _t.transPointList(s, this._x - e, this._y - i),
                s;
            var n = U.TEMP
              , r = 0
              , a = s.length;
            for (r = 0; r < a; r += 2)
                n.x = s[r],
                n.y = s[r + 1],
                this.toParentPoint(n),
                s[r] = n.x,
                s[r + 1] = n.y;
            return s
        }
        ,
        h.getGraphicBounds = function(t) {
            return void 0 === t && (t = !1),
            this._graphics ? this._graphics.getBounds(t) : V.TEMP.setTo(0, 0, 0, 0)
        }
        ,
        h._getBoundPointsM = function(t) {
            if (void 0 === t && (t = !1),
            this._$P.uBounds)
                return this._$P.uBounds._getBoundPoints();
            if (this._$P.temBM || this._set$P("temBM", []),
            this.scrollRect) {
                var e = _t.clearArray(this._$P.temBM)
                  , i = V.TEMP;
                return i.copyFrom(this.scrollRect),
                _t.concatArray(e, i._getBoundPoints()),
                e
            }
            for (var s, n, r, a = this._graphics ? this._graphics.getBoundPoints() : _t.clearArray(this._$P.temBM), o = 0, h = (r = this._childs).length; o < h; o++)
                (s = r[o])instanceof laya.display.Sprite && 1 == s.visible && (n = s._boundPointsToParent(t)) && (a = a ? _t.concatArray(a, n) : n);
            return a
        }
        ,
        h.getStyle = function() {
            return this._style === w.EMPTY && (this._style = new w),
            this._style
        }
        ,
        h.setStyle = function(t) {
            this._style = t
        }
        ,
        h._adjustTransform = function() {
            this._tfChanged = !1;
            var t, e = this._style._tf, i = e.scaleX, s = e.scaleY;
            if (e.rotate || 1 !== i || 1 !== s || e.skewX || e.skewY) {
                (t = this._transform || (this._transform = k.create())).bTransform = !0;
                var n = .0174532922222222 * (e.rotate - e.skewX)
                  , r = .0174532922222222 * (e.rotate + e.skewY)
                  , a = Math.cos(r)
                  , o = Math.sin(r)
                  , h = Math.sin(n)
                  , l = Math.cos(n);
                return t.a = i * a,
                t.b = i * o,
                t.c = -s * h,
                t.d = s * l,
                t.tx = t.ty = 0,
                t
            }
            return this._transform && this._transform.destroy(),
            this._transform = null,
            this._renderType &= -5,
            t
        }
        ,
        h.pos = function(t, e, i) {
            if (void 0 === i && (i = !1),
            this._x !== t || this._y !== e) {
                if (this.destroyed)
                    return this;
                if (i) {
                    this._x = t,
                    this._y = e,
                    this.conchModel && this.conchModel.pos(this._x, this._y);
                    var s = this._parent;
                    s && 0 === s._repaint && (s._repaint = 1,
                    s.parentRepaint()),
                    this._$P.maskParent && 0 === this._$P.maskParent._repaint && (this._$P.maskParent._repaint = 1,
                    this._$P.maskParent.parentRepaint())
                } else
                    this.x = t,
                    this.y = e
            }
            return this
        }
        ,
        h.pivot = function(t, e) {
            return this.pivotX = t,
            this.pivotY = e,
            this
        }
        ,
        h.size = function(t, e) {
            return this.width = t,
            this.height = e,
            this
        }
        ,
        h.scale = function(t, e, i) {
            void 0 === i && (i = !1);
            var s = this.getStyle()
              , n = s._tf;
            if (n.scaleX != t || n.scaleY != e) {
                if (this.destroyed)
                    return this;
                if (i) {
                    s.setScale(t, e),
                    this._tfChanged = !0,
                    this.conchModel && this.conchModel.scale(t, e),
                    this._renderType |= 4;
                    var r = this._parent;
                    r && 0 === r._repaint && (r._repaint = 1,
                    r.parentRepaint())
                } else
                    this.scaleX = t,
                    this.scaleY = e
            }
            return this
        }
        ,
        h.skew = function(t, e) {
            return this.skewX = t,
            this.skewY = e,
            this
        }
        ,
        h.render = function(t, e, i) {
            ht.spriteCount++,
            j.renders[this._renderType]._fun(this, t, e + this._x, i + this._y),
            this._repaint = 0
        }
        ,
        h.drawToCanvas = function(t, e, i, s) {
            if (X.isConchNode) {
                var n = He.create("2D");
                return new $(t,e,n).ctx.setCanvasType(1),
                this.conchModel.drawToCanvas(n.source, i, s),
                n
            }
            return o.drawToCanvas(this, this._renderType, t, e, i, s)
        }
        ,
        h.customRender = function(t, e, i) {
            this._renderType |= 1024
        }
        ,
        h._applyFilters = function() {
            if (!X.isWebGL) {
                var t;
                if ((t = this._$P.filters) && !(t.length < 1))
                    for (var e = 0, i = t.length; e < i; e++)
                        t[e].action.apply(this._$P.cacheCanvas)
            }
        }
        ,
        h._isHaveGlowFilter = function() {
            var t = 0
              , e = 0;
            if (this.filters)
                for (t = 0; t < this.filters.length; t++)
                    if (8 == this.filters[t].type)
                        return !0;
            for (t = 0,
            e = this._childs.length; t < e; t++)
                if (this._childs[t]._isHaveGlowFilter())
                    return !0;
            return !1
        }
        ,
        h.localToGlobal = function(t, e) {
            void 0 === e && (e = !1),
            !0 === e && (t = new U(t.x,t.y));
            for (var s = this; s && s != i.stage; )
                t = s.toParentPoint(t),
                s = s.parent;
            return t
        }
        ,
        h.globalToLocal = function(t, e) {
            void 0 === e && (e = !1),
            e && (t = new U(t.x,t.y));
            for (var s = this, n = []; s && s != i.stage; )
                n.push(s),
                s = s.parent;
            for (var r = n.length - 1; r >= 0; )
                t = (s = n[r]).fromParentPoint(t),
                r--;
            return t
        }
        ,
        h.toParentPoint = function(t) {
            if (!t)
                return t;
            t.x -= this.pivotX,
            t.y -= this.pivotY,
            this.transform && this._transform.transformPoint(t),
            t.x += this._x,
            t.y += this._y;
            var e = this._style.scrollRect;
            return e && (t.x -= e.x,
            t.y -= e.y),
            t
        }
        ,
        h.fromParentPoint = function(t) {
            if (!t)
                return t;
            t.x -= this._x,
            t.y -= this._y;
            var e = this._style.scrollRect;
            return e && (t.x += e.x,
            t.y += e.y),
            this.transform && this._transform.invertTransformPoint(t),
            t.x += this.pivotX,
            t.y += this.pivotY,
            t
        }
        ,
        h.on = function(t, i, s, n) {
            return 1 !== this._mouseEnableState && this.isMouseEvent(t) ? (this.mouseEnabled = !0,
            this._setBit(2, !0),
            this._parent && this._$2__onDisplay(),
            this._createListener(t, i, s, n, !1)) : e.prototype.on.call(this, t, i, s, n)
        }
        ,
        h.once = function(t, i, s, n) {
            return 1 !== this._mouseEnableState && this.isMouseEvent(t) ? (this.mouseEnabled = !0,
            this._setBit(2, !0),
            this._parent && this._$2__onDisplay(),
            this._createListener(t, i, s, n, !0)) : e.prototype.once.call(this, t, i, s, n)
        }
        ,
        h._$2__onDisplay = function() {
            if (1 !== this._mouseEnableState) {
                var t = this;
                for (t = t.parent; t && 1 !== t._mouseEnableState && !t._getBit(2); )
                    t.mouseEnabled = !0,
                    t._setBit(2, !0),
                    t = t.parent
            }
        }
        ,
        h.loadImage = function(t, e, i, s, n, r) {
            var a = this;
            return void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === s && (s = 0),
            void 0 === n && (n = 0),
            this.graphics.loadImage(t, e, i, s, n, function(t) {
                a.destroyed || (a.size(e + (s || t.width), i + (n || t.height)),
                a.repaint(),
                r && r.runWith(t))
            }),
            this
        }
        ,
        h.repaint = function() {
            this.conchModel && this.conchModel.repaint && this.conchModel.repaint(),
            0 === this._repaint && (this._repaint = 1,
            this.parentRepaint()),
            this._$P && this._$P.maskParent && this._$P.maskParent.repaint()
        }
        ,
        h._needRepaint = function() {
            return 0 !== this._repaint && this._$P.cacheCanvas && this._$P.cacheCanvas.reCache
        }
        ,
        h._childChanged = function(t) {
            this._childs.length ? this._renderType |= 2048 : this._renderType &= -2049,
            t && this._get$P("hasZorder") && i.timer.callLater(this, this.updateZOrder),
            this.repaint()
        }
        ,
        h.parentRepaint = function() {
            var t = this._parent;
            t && 0 === t._repaint && (t._repaint = 1,
            t.parentRepaint())
        }
        ,
        h.startDrag = function(t, e, i, s, n, r, a) {
            void 0 === e && (e = !1),
            void 0 === i && (i = 0),
            void 0 === s && (s = 300),
            void 0 === r && (r = !1),
            void 0 === a && (a = .92),
            this._$P.dragging || this._set$P("dragging", new rt),
            this._$P.dragging.start(this, t, e, i, s, n, r, a)
        }
        ,
        h.stopDrag = function() {
            this._$P.dragging && this._$P.dragging.stop()
        }
        ,
        h._releaseMem = function() {
            if (this._$P) {
                var t = this._$P.cacheCanvas;
                t && t.ctx && (ot.recover("RenderContext", t.ctx),
                t.ctx.canvas.size(0, 0),
                t.ctx = null);
                var e = this._$P._filterCache;
                e && (e.destroy(),
                e.recycle(),
                this._set$P("_filterCache", null)),
                this._$P._isHaveGlowFilter && this._set$P("_isHaveGlowFilter", !1),
                this._$P._isHaveGlowFilter = null
            }
        }
        ,
        h._setDisplay = function(t) {
            t || this._releaseMem(),
            e.prototype._setDisplay.call(this, t)
        }
        ,
        h.hitTestPoint = function(t, e) {
            var i = this.globalToLocal(U.TEMP.setTo(t, e));
            t = i.x,
            e = i.y;
            return (this._$P.hitArea ? this._$P.hitArea : this._width > 0 && this._height > 0 ? V.TEMP.setTo(0, 0, this._width, this._height) : this.getSelfBounds()).contains(t, e)
        }
        ,
        h.getMousePoint = function() {
            return this.globalToLocal(U.TEMP.setTo(i.stage.mouseX, i.stage.mouseY))
        }
        ,
        h._getWords = function() {
            return null
        }
        ,
        h._addChildsToLayout = function(t) {
            var e = this._getWords();
            if (null == e && 0 == this._childs.length)
                return !1;
            if (e)
                for (var i = 0, s = e.length; i < s; i++)
                    t.push(e[i]);
            return this._childs.forEach(function(e, i, s) {
                e._style._enableLayout() && e._addToLayout(t)
            }),
            !0
        }
        ,
        h._addToLayout = function(t) {
            this._style.absolute || (this._style.block ? t.push(this) : this._addChildsToLayout(t) && (this.x = this.y = 0))
        }
        ,
        h._isChar = function() {
            return !1
        }
        ,
        h._getCSSStyle = function() {
            return this._style.getCSSStyle()
        }
        ,
        h._setAttributes = function(t, e) {
            switch (t) {
            case "x":
                this.x = parseFloat(e);
                break;
            case "y":
                this.y = parseFloat(e);
                break;
            case "width":
                this.width = parseFloat(e);
                break;
            case "height":
                this.height = parseFloat(e);
                break;
            default:
                this[t] = e
            }
        }
        ,
        h._layoutLater = function() {
            this.parent && this.parent._layoutLater()
        }
        ,
        r(0, h, "optimizeScrollRect", function() {
            return this._optimizeScrollRect
        }, function(t) {
            this._optimizeScrollRect != t && (this._optimizeScrollRect = t,
            this.conchModel && this.conchModel.optimizeScrollRect(t))
        }),
        r(0, h, "customRenderEnable", null, function(t) {
            if (t && (this._renderType |= 1024,
            X.isConchNode)) {
                a.CustomList.push(this);
                var e = new He("2d");
                e._setContext(new CanvasRenderingContext2D),
                this.customContext = new $(0,0,e),
                e.context.setCanvasType && e.context.setCanvasType(2),
                this.conchModel.custom(e.context)
            }
        }),
        r(0, h, "cacheAsBitmap", function() {
            return "none" !== this.cacheAs
        }, function(t) {
            this.cacheAs = t ? this._$P.hasFilter ? "none" : "normal" : "none"
        }),
        r(0, h, "cacheAs", function() {
            return null == this._$P.cacheCanvas ? "none" : this._$P.cacheCanvas.type
        }, function(t) {
            var e = this._$P.cacheCanvas;
            if (t !== (e ? e.type : "none")) {
                if ("none" !== t)
                    this._getBit(1) || this._setUpNoticeType(1),
                    e || (e = this._set$P("cacheCanvas", ot.getItemByClass("cacheCanvas", Object))),
                    e.type = t,
                    e.reCache = !0,
                    this._renderType |= 16,
                    "bitmap" == t && this.conchModel && this.conchModel.cacheAs(1),
                    this._set$P("cacheForFilters", !1);
                else if (this._$P._mask)
                    ;
                else if (this._$P.hasFilter)
                    this._set$P("cacheForFilters", !0);
                else {
                    if (e) {
                        var i = e;
                        i && i.ctx && (ot.recover("RenderContext", i.ctx),
                        i.ctx.canvas.size(0, 0),
                        i.ctx = null),
                        ot.recover("cacheCanvas", e)
                    }
                    this._$P.cacheCanvas = null,
                    this._renderType &= -17,
                    this.conchModel && this.conchModel.cacheAs(0)
                }
                this.repaint()
            }
        }),
        r(0, h, "zOrder", function() {
            return this._zOrder
        }, function(t) {
            this._zOrder != t && (this._zOrder = t,
            this.conchModel && this.conchModel.setZOrder && this.conchModel.setZOrder(t),
            this._parent && (t && this._parent._set$P("hasZorder", !0),
            i.timer.callLater(this._parent, this.updateZOrder)))
        }),
        r(0, h, "rotation", function() {
            return this._style._tf.rotate
        }, function(t) {
            var e = this.getStyle();
            if (e._tf.rotate !== t) {
                e.setRotate(t),
                this._tfChanged = !0,
                this.conchModel && this.conchModel.rotate(t),
                this._renderType |= 4;
                var i = this._parent;
                i && 0 === i._repaint && (i._repaint = 1,
                i.parentRepaint())
            }
        }),
        r(0, h, "width", function() {
            return this.autoSize ? this.getSelfBounds().width : this._width
        }, function(t) {
            this._width !== t && (this._width = t,
            this.conchModel && this.conchModel.size(t, this._height),
            this.repaint())
        }),
        r(0, h, "x", function() {
            return this._x
        }, function(t) {
            if (this._x !== t) {
                if (this.destroyed)
                    return;
                this._x = t,
                this.conchModel && this.conchModel.pos(t, this._y);
                var e = this._parent;
                e && 0 === e._repaint && (e._repaint = 1,
                e.parentRepaint()),
                this._$P.maskParent && 0 === this._$P.maskParent._repaint && (this._$P.maskParent._repaint = 1,
                this._$P.maskParent.parentRepaint())
            }
        }),
        r(0, h, "globalScaleY", function() {
            for (var t = 1, e = this; e && e !== i.stage; )
                t *= e.scaleY,
                e = e.parent;
            return t
        }),
        r(0, h, "hitArea", function() {
            return this._$P.hitArea
        }, function(t) {
            this._set$P("hitArea", t)
        }),
        r(0, h, "staticCache", function() {
            return this._$P.staticCache
        }, function(t) {
            this._set$P("staticCache", t),
            t || this.reCache()
        }),
        r(0, h, "texture", function() {
            return this._texture
        }, function(t) {
            this._texture != t && (this._texture = t,
            this.graphics.cleanByTexture(t, 0, 0))
        }),
        r(0, h, "y", function() {
            return this._y
        }, function(t) {
            if (this._y !== t) {
                if (this.destroyed)
                    return;
                this._y = t,
                this.conchModel && this.conchModel.pos(this._x, t);
                var e = this._parent;
                e && 0 === e._repaint && (e._repaint = 1,
                e.parentRepaint()),
                this._$P.maskParent && 0 === this._$P.maskParent._repaint && (this._$P.maskParent._repaint = 1,
                this._$P.maskParent.parentRepaint())
            }
        }),
        r(0, h, "height", function() {
            return this.autoSize ? this.getSelfBounds().height : this._height
        }, function(t) {
            this._height !== t && (this._height = t,
            this.conchModel && this.conchModel.size(this._width, t),
            this.repaint())
        }),
        r(0, h, "blendMode", function() {
            return this._style.blendMode
        }, function(t) {
            this.getStyle().blendMode = t,
            this.conchModel && this.conchModel.blendMode(t),
            t && "source-over" != t ? this._renderType |= 8 : this._renderType &= -9,
            this.parentRepaint()
        }),
        r(0, h, "scaleX", function() {
            return this._style._tf.scaleX
        }, function(t) {
            var e = this.getStyle();
            if (e._tf.scaleX !== t) {
                e.setScaleX(t),
                this._tfChanged = !0,
                this.conchModel && this.conchModel.scale(t, e._tf.scaleY),
                this._renderType |= 4;
                var i = this._parent;
                i && 0 === i._repaint && (i._repaint = 1,
                i.parentRepaint())
            }
        }),
        r(0, h, "scaleY", function() {
            return this._style._tf.scaleY
        }, function(t) {
            var e = this.getStyle();
            if (e._tf.scaleY !== t) {
                e.setScaleY(t),
                this._tfChanged = !0,
                this.conchModel && this.conchModel.scale(e._tf.scaleX, t),
                this._renderType |= 4;
                var i = this._parent;
                i && 0 === i._repaint && (i._repaint = 1,
                i.parentRepaint())
            }
        }),
        r(0, h, "stage", function() {
            return i.stage
        }),
        r(0, h, "skewX", function() {
            return this._style._tf.skewX
        }, function(t) {
            var e = this.getStyle();
            if (e._tf.skewX !== t) {
                e.setSkewX(t),
                this._tfChanged = !0,
                this.conchModel && this.conchModel.skew(t, e._tf.skewY),
                this._renderType |= 4;
                var i = this._parent;
                i && 0 === i._repaint && (i._repaint = 1,
                i.parentRepaint())
            }
        }),
        r(0, h, "scrollRect", function() {
            return this._style.scrollRect
        }, function(t) {
            this.getStyle().scrollRect = t,
            this.repaint(),
            t ? (this._renderType |= 128,
            this.conchModel && this.conchModel.scrollRect(t.x, t.y, t.width, t.height)) : (this._renderType &= -129,
            this.conchModel && (a.RUNTIMEVERION < "0.9.1" ? this.conchModel.removeType(64) : this.conchModel.removeType(128)))
        }),
        r(0, h, "skewY", function() {
            return this._style._tf.skewY
        }, function(t) {
            var e = this.getStyle();
            if (e._tf.skewY !== t) {
                e.setSkewY(t),
                this._tfChanged = !0,
                this.conchModel && this.conchModel.skew(e._tf.skewX, t),
                this._renderType |= 4;
                var i = this._parent;
                i && 0 === i._repaint && (i._repaint = 1,
                i.parentRepaint())
            }
        }),
        r(0, h, "transform", function() {
            return this._tfChanged ? this._adjustTransform() : this._transform
        }, function(t) {
            this._tfChanged = !1,
            this._transform = t,
            t && (this._x = t.tx,
            this._y = t.ty,
            t.tx = t.ty = 0,
            this.conchModel && this.conchModel.transform(t.a, t.b, t.c, t.d, this._x, this._y)),
            t ? this._renderType |= 4 : (this._renderType &= -5,
            this.conchModel && this.conchModel.removeType(4)),
            this.parentRepaint()
        }),
        r(0, h, "pivotX", function() {
            return this._style._tf.translateX
        }, function(t) {
            this.getStyle().setTranslateX(t),
            this.conchModel && this.conchModel.pivot(t, this._style._tf.translateY),
            this.repaint()
        }),
        r(0, h, "pivotY", function() {
            return this._style._tf.translateY
        }, function(t) {
            this.getStyle().setTranslateY(t),
            this.conchModel && this.conchModel.pivot(this._style._tf.translateX, t),
            this.repaint()
        }),
        r(0, h, "alpha", function() {
            return this._style.alpha
        }, function(t) {
            this._style && this._style.alpha !== t && (t = t < 0 ? 0 : t > 1 ? 1 : t,
            this.getStyle().alpha = t,
            this.conchModel && this.conchModel.alpha(t),
            1 !== t ? this._renderType |= 2 : this._renderType &= -3,
            this.parentRepaint())
        }),
        r(0, h, "visible", function() {
            return this._style.visible
        }, function(t) {
            this._style && this._style.visible !== t && (this.getStyle().visible = t,
            this.conchModel && this.conchModel.visible(t),
            this.parentRepaint())
        }),
        r(0, h, "graphics", function() {
            return this._graphics || (this.graphics = o.createGraphics())
        }, function(t) {
            this._graphics && (this._graphics._sp = null),
            this._graphics = t,
            t ? (this._renderType &= -2,
            this._renderType |= 512,
            t._sp = this,
            this.conchModel && this.conchModel.graphics(this._graphics)) : (this._renderType &= -513,
            this._renderType &= -2,
            this.conchModel && (a.RUNTIMEVERION < "0.9.1" ? this.conchModel.removeType(256) : this.conchModel.removeType(512))),
            this.repaint()
        }),
        r(0, h, "filters", function() {
            return this._$P.filters
        }, function(t) {
            t && 0 === t.length && (t = null),
            this._$P.filters != t && (this._set$P("filters", t ? t.slice() : null),
            X.isConchApp && (this.conchModel && (a.RUNTIMEVERION < "0.9.1" ? this.conchModel.removeType(16) : this.conchModel.removeType(32)),
            this._$P.filters && 1 == this._$P.filters.length && this._$P.filters[0].callNative(this)),
            X.isWebGL && (t && t.length ? this._renderType |= 32 : this._renderType &= -33),
            t && t.length > 0 ? (this._getBit(1) || this._setUpNoticeType(1),
            X.isWebGL && 1 == t.length && t[0]instanceof laya.filters.ColorFilter || ("bitmap" != this.cacheAs && (X.isConchNode || (this.cacheAs = "bitmap"),
            this._set$P("cacheForFilters", !0)),
            this._set$P("hasFilter", !0))) : (this._set$P("hasFilter", !1),
            this._$P.cacheForFilters && "bitmap" == this.cacheAs && (this.cacheAs = "none")),
            this.repaint())
        }),
        r(0, h, "parent", e.prototype._$get_parent, function(t) {
            i.superSet(te, this, "parent", t),
            t && this._getBit(2) && this._$2__onDisplay()
        }),
        r(0, h, "mask", function() {
            return this._$P._mask
        }, function(t) {
            t && this.mask && this.mask._$P.maskParent || (t ? (this.cacheAs = "bitmap",
            this._set$P("_mask", t),
            t._set$P("maskParent", this)) : (this.mask && this.mask._set$P("maskParent", null),
            this._set$P("_mask", t),
            this.cacheAs = "none"),
            this.conchModel && this.conchModel.mask(t ? t.conchModel : null),
            this._renderType |= 64,
            this.parentRepaint())
        }),
        r(0, h, "mouseEnabled", function() {
            return this._mouseEnableState > 1
        }, function(t) {
            this._mouseEnableState = t ? 2 : 1
        }),
        r(0, h, "globalScaleX", function() {
            for (var t = 1, e = this; e && e !== i.stage; )
                t *= e.scaleX,
                e = e.parent;
            return t
        }),
        r(0, h, "mouseX", function() {
            return this.getMousePoint().x
        }),
        r(0, h, "mouseY", function() {
            return this.getMousePoint().y
        }),
        a.fromImage = function(t) {
            return (new a).loadImage(t)
        }
        ,
        a.CustomList = [],
        s(a, ["RUNTIMEVERION", function() {
            return this.RUNTIMEVERION = t.conch ? conchConfig.getRuntimeVersion().substr(conchConfig.getRuntimeVersion().lastIndexOf("-") + 1) : ""
        }
        ]),
        a
    }(te)
      , Ae = function(t) {
        function e() {
            this._glBuffer = null,
            this._buffer = null,
            this._bufferType = 0,
            this._bufferUsage = 0,
            this._byteLength = 0,
            e.__super.call(this),
            e._gl = qt.mainContext
        }
        n(e, "laya.webgl.utils.Buffer", Jt);
        var i = e.prototype;
        return i._bind = function() {
            this.activeResource(),
            e._bindActive[this._bufferType] !== this._glBuffer && (34962 === this._bufferType && (e._bindVertexBuffer = this._glBuffer),
            e._gl.bindBuffer(this._bufferType, e._bindActive[this._bufferType] = this._glBuffer),
            Me.activeShader = null)
        }
        ,
        i.recreateResource = function() {
            this._glBuffer || (this._glBuffer = e._gl.createBuffer()),
            this.completeCreate()
        }
        ,
        i.disposeResource = function() {
            this._glBuffer && (qt.mainContext.deleteBuffer(this._glBuffer),
            this._glBuffer = null),
            this.memorySize = 0
        }
        ,
        r(0, i, "bufferUsage", function() {
            return this._bufferUsage
        }),
        e._gl = null,
        e._bindActive = {},
        e._bindVertexBuffer = null,
        e._enableAtributes = [],
        e
    }()
      , Me = function(t) {
        function e() {
            e.__super.call(this),
            this.lock = !0
        }
        return n(e, "laya.webgl.shader.BaseShader", Jt),
        e.activeShader = null,
        e.bindShader = null,
        e
    }()
      , Ee = function(t) {
        function e() {
            e.__super.call(this),
            this._w = 0,
            this._h = 0
        }
        n(e, "laya.resource.Bitmap", Jt);
        var i = e.prototype;
        return r(0, i, "width", function() {
            return this._w
        }),
        r(0, i, "height", function() {
            return this._h
        }),
        r(0, i, "source", function() {
            return this._source
        }),
        e
    }()
      , Ie = function(t) {
        function e(t) {
            this._audio = null,
            this._onEnd = null,
            this._resumePlay = null,
            e.__super.call(this),
            this._onEnd = _t.bind(this.__onEnd, this),
            this._resumePlay = _t.bind(this.__resumePlay, this),
            t.addEventListener("ended", this._onEnd),
            this._audio = t
        }
        n(e, "laya.media.h5audio.AudioSoundChannel", se);
        var s = e.prototype;
        return s.__onEnd = function() {
            if (1 == this.loops)
                return this.completeHandler && (i.timer.once(10, this, this.__runComplete, [this.completeHandler], !1),
                this.completeHandler = null),
                this.stop(),
                void this.event("complete");
            this.loops > 0 && this.loops--,
            this.startTime = 0,
            this.play()
        }
        ,
        s.__resumePlay = function() {
            this._audio && this._audio.removeEventListener("canplay", this._resumePlay);
            try {
                this._audio.currentTime = this.startTime,
                et.container.appendChild(this._audio),
                this._audio.play()
            } catch (t) {
                this.event("error")
            }
        }
        ,
        s.play = function() {
            this.isStopped = !1;
            try {
                this._audio.playbackRate = G.playbackRate,
                this._audio.currentTime = this.startTime
            } catch (t) {
                return void this._audio.addEventListener("canplay", this._resumePlay)
            }
            G.addChannel(this),
            et.container.appendChild(this._audio),
            "play"in this._audio && this._audio.play()
        }
        ,
        s.stop = function() {
            this.isStopped = !0,
            G.removeChannel(this),
            this.completeHandler = null,
            this._audio && ("pause"in this._audio && X.isConchApp && this._audio.stop(),
            this._audio.pause(),
            this._audio.removeEventListener("ended", this._onEnd),
            this._audio.removeEventListener("canplay", this._resumePlay),
            et.onIE || this._audio != ie._musicAudio && ot.recover("audio:" + this.url, this._audio),
            et.removeElement(this._audio),
            this._audio = null)
        }
        ,
        s.pause = function() {
            this.isStopped = !0,
            G.removeChannel(this),
            "pause"in this._audio && this._audio.pause()
        }
        ,
        s.resume = function() {
            this._audio && (this.isStopped = !1,
            G.addChannel(this),
            "play"in this._audio && this._audio.play())
        }
        ,
        r(0, s, "position", function() {
            return this._audio ? this._audio.currentTime : 0
        }),
        r(0, s, "duration", function() {
            return this._audio ? this._audio.duration : 0
        }),
        r(0, s, "volume", function() {
            return this._audio ? this._audio.volume : 1
        }, function(t) {
            this._audio && (this._audio.volume = t)
        }),
        e
    }()
      , Re = function(t) {
        function e() {
            this.audioBuffer = null,
            this.gain = null,
            this.bufferSource = null,
            this._currentTime = 0,
            this._volume = 1,
            this._startTime = 0,
            this._pauseTime = 0,
            this._onPlayEnd = null,
            this.context = re.ctx,
            e.__super.call(this),
            this._onPlayEnd = _t.bind(this.__onPlayEnd, this),
            this.context.createGain ? this.gain = this.context.createGain() : this.gain = this.context.createGainNode()
        }
        n(e, "laya.media.webaudio.WebAudioSoundChannel", se);
        var s = e.prototype;
        return s.play = function() {
            if (G.addChannel(this),
            this.isStopped = !1,
            this._clearBufferSource(),
            this.audioBuffer) {
                var t = this.context
                  , e = this.gain
                  , i = t.createBufferSource();
                this.bufferSource = i,
                i.buffer = this.audioBuffer,
                i.connect(e),
                e && e.disconnect(),
                e.connect(t.destination),
                i.onended = this._onPlayEnd,
                this.startTime >= this.duration && (this.startTime = 0),
                this._startTime = et.now(),
                this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(this._volume, this.context.currentTime, .1) : this.gain.gain.value = this._volume,
                0 == this.loops && (i.loop = !0),
                i.playbackRate.setTargetAtTime ? i.playbackRate.setTargetAtTime(G.playbackRate, this.context.currentTime, .1) : i.playbackRate.value = G.playbackRate,
                i.start(0, this.startTime),
                this._currentTime = 0
            }
        }
        ,
        s.__onPlayEnd = function() {
            if (1 == this.loops)
                return this.completeHandler && (i.timer.once(10, this, this.__runComplete, [this.completeHandler], !1),
                this.completeHandler = null),
                this.stop(),
                void this.event("complete");
            this.loops > 0 && this.loops--,
            this.startTime = 0,
            this.play()
        }
        ,
        s._clearBufferSource = function() {
            if (this.bufferSource) {
                var t = this.bufferSource;
                t.stop ? t.stop(0) : t.noteOff(0),
                t.disconnect(0),
                t.onended = null,
                e._tryCleanFailed || this._tryClearBuffer(t),
                this.bufferSource = null
            }
        }
        ,
        s._tryClearBuffer = function(t) {
            if (et.onMac)
                try {
                    t.buffer = re._miniBuffer
                } catch (t) {
                    e._tryCleanFailed = !0
                }
            else
                try {
                    t.buffer = null
                } catch (t) {
                    e._tryCleanFailed = !0
                }
        }
        ,
        s.stop = function() {
            this._clearBufferSource(),
            this.audioBuffer = null,
            this.gain && this.gain.disconnect(),
            this.isStopped = !0,
            G.removeChannel(this),
            this.completeHandler = null,
            G.autoReleaseSound && i.timer.once(5e3, null, G.disposeSoundIfNotUsed, [this.url], !1)
        }
        ,
        s.pause = function() {
            this.isStopped || (this._pauseTime = this.position),
            this._clearBufferSource(),
            this.gain && this.gain.disconnect(),
            this.isStopped = !0,
            G.removeChannel(this),
            G.autoReleaseSound && i.timer.once(5e3, null, G.disposeSoundIfNotUsed, [this.url], !1)
        }
        ,
        s.resume = function() {
            this.startTime = this._pauseTime,
            this.play()
        }
        ,
        r(0, s, "position", function() {
            return this.bufferSource ? (et.now() - this._startTime) / 1e3 + this.startTime : 0
        }),
        r(0, s, "duration", function() {
            return this.audioBuffer ? this.audioBuffer.duration : 0
        }),
        r(0, s, "volume", function() {
            return this._volume
        }, function(t) {
            this.isStopped || (this._volume = t,
            this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(t, this.context.currentTime, .1) : this.gain.gain.value = t)
        }),
        e._tryCleanFailed = !1,
        e
    }()
      , Le = function(t) {
        function e(t, i, s, n, r, a, o, h, l) {
            this._type = 0,
            this._svWidth = NaN,
            this._svHeight = NaN,
            this._preRenderTarget = null,
            this._alreadyResolved = !1,
            this._looked = !1,
            this._surfaceFormat = 0,
            this._surfaceType = 0,
            this._depthStencilFormat = 0,
            this._mipMap = !1,
            this._repeat = !1,
            this._minFifter = 0,
            this._magFifter = 0,
            this._destroy = !1,
            void 0 === s && (s = 6408),
            void 0 === n && (n = 5121),
            void 0 === r && (r = 34041),
            void 0 === a && (a = !1),
            void 0 === o && (o = !1),
            void 0 === h && (h = -1),
            void 0 === l && (l = -1),
            this._type = 1,
            this._w = t,
            this._h = i,
            this._surfaceFormat = s,
            this._surfaceType = n,
            this._depthStencilFormat = r,
            X.isConchWebGL && 34041 === this._depthStencilFormat && (this._depthStencilFormat = 33189),
            this._mipMap = a,
            this._repeat = o,
            this._minFifter = h,
            this._magFifter = l,
            this._createWebGLRenderTarget(),
            this.bitmap.lock = !0,
            e.__super.call(this, this.bitmap, he.INV_UV)
        }
        n(e, "laya.webgl.resource.RenderTarget2D", t);
        var s = e.prototype;
        return i.imps(s, {
            "laya.resource.IDispose": !0
        }),
        s.getType = function() {
            return this._type
        }
        ,
        s.getTexture = function() {
            return this
        }
        ,
        s.size = function(t, e) {
            this._w == t && this._h == e || (this._w = t,
            this._h = e,
            this.release(),
            0 != this._w && 0 != this._h && this._createWebGLRenderTarget())
        }
        ,
        s.release = function() {
            this.destroy()
        }
        ,
        s.recycle = function() {
            e.POOL.push(this)
        }
        ,
        s.start = function() {
            var t = qt.mainContext;
            return this._preRenderTarget = Kt.curRenderTarget,
            Kt.curRenderTarget = this,
            t.bindFramebuffer(36160, this.bitmap.frameBuffer),
            this._alreadyResolved = !1,
            1 == this._type && (t.viewport(0, 0, this._w, this._h),
            this._svWidth = Kt.width,
            this._svHeight = Kt.height,
            Kt.width = this._w,
            Kt.height = this._h,
            Me.activeShader = null),
            this
        }
        ,
        s.clear = function(t, e, i, s) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === s && (s = 1);
            var n = qt.mainContext;
            n.clearColor(t, e, i, s);
            var r = 16384;
            switch (this._depthStencilFormat) {
            case 33189:
                r |= 256;
                break;
            case 36168:
                r |= 1024;
                break;
            case 34041:
                r |= 256,
                r |= 1024
            }
            n.clear(r)
        }
        ,
        s.end = function() {
            var t = qt.mainContext;
            t.bindFramebuffer(36160, this._preRenderTarget ? this._preRenderTarget.bitmap.frameBuffer : null),
            this._alreadyResolved = !0,
            Kt.curRenderTarget = this._preRenderTarget,
            1 == this._type ? (t.viewport(0, 0, this._svWidth, this._svHeight),
            Kt.width = this._svWidth,
            Kt.height = this._svHeight,
            Me.activeShader = null) : t.viewport(0, 0, i.stage.width, i.stage.height)
        }
        ,
        s.getData = function(t, e, i, s) {
            var n = qt.mainContext;
            n.bindFramebuffer(36160, this.bitmap.frameBuffer);
            if (!(36053 === n.checkFramebufferStatus(36160)))
                return n.bindFramebuffer(36160, null),
                null;
            var r = new Uint8Array(this._w * this._h * 4);
            return n.readPixels(t, e, i, s, this._surfaceFormat, this._surfaceType, r),
            n.bindFramebuffer(36160, null),
            r
        }
        ,
        s.destroy = function(e) {
            void 0 === e && (e = !1),
            this._destroy || (this._loaded = !1,
            this.bitmap.offAll(),
            this.bitmap.disposeResource(),
            this.bitmap.dispose(),
            this.offAll(),
            this.bitmap = null,
            this._alreadyResolved = !1,
            this._destroy = !0,
            t.prototype.destroy.call(this))
        }
        ,
        s.dispose = function() {}
        ,
        s._createWebGLRenderTarget = function() {
            this.bitmap = new Ke(this.width,this.height,this._surfaceFormat,this._surfaceType,this._depthStencilFormat,this._mipMap,this._repeat,this._minFifter,this._magFifter),
            this.bitmap.activeResource(),
            this._alreadyResolved = !0,
            this._destroy = !1,
            this._loaded = !0,
            this.bitmap.on("recovered", this, function(t) {
                this.event("recovered")
            })
        }
        ,
        r(0, s, "surfaceFormat", function() {
            return this._surfaceFormat
        }),
        r(0, s, "magFifter", function() {
            return this._magFifter
        }),
        r(0, s, "surfaceType", function() {
            return this._surfaceType
        }),
        r(0, s, "mipMap", function() {
            return this._mipMap
        }),
        r(0, s, "depthStencilFormat", function() {
            return this._depthStencilFormat
        }),
        r(0, s, "minFifter", function() {
            return this._minFifter
        }),
        r(0, s, "source", function() {
            return this._alreadyResolved ? i.superGet(he, this, "source") : null
        }),
        e.create = function(t, i, s, n, r, a, o, h, l) {
            void 0 === s && (s = 6408),
            void 0 === n && (n = 5121),
            void 0 === r && (r = 34041),
            void 0 === a && (a = !1),
            void 0 === o && (o = !1),
            void 0 === h && (h = -1),
            void 0 === l && (l = -1);
            var u = e.POOL.pop();
            return u || (u = new e(t,i)),
            u.bitmap && u._w == t && u._h == i && u._surfaceFormat == s && u._surfaceType == n && u._depthStencilFormat == r && u._mipMap == a && u._repeat == o && u._minFifter == h && u._magFifter == l || (u._w = t,
            u._h = i,
            u._surfaceFormat = s,
            u._surfaceType = n,
            u._depthStencilFormat = r,
            X.isConchWebGL && 34041 === u._depthStencilFormat && (u._depthStencilFormat = 33189),
            u._mipMap = a,
            u._repeat = o,
            u._minFifter = h,
            u._magFifter = l,
            u.release(),
            u._createWebGLRenderTarget()),
            u
        }
        ,
        e.TYPE2D = 1,
        e.TYPE3D = 2,
        e.POOL = [],
        e
    }(he)
      , Pe = function(t) {
        function e(t) {
            this.texcoord = null,
            this.offsetX = 300,
            this.offsetY = 0,
            e.__super.call(this, 512, 0);
            var i = 8 * Xt.BYTES_PE;
            this.position = [2, 5126, !1, i, 0],
            this.texcoord = [2, 5126, !1, i, 2 * Xt.BYTES_PE],
            this.color = [4, 5126, !1, i, 4 * Xt.BYTES_PE]
        }
        return n(e, "laya.webgl.shader.d2.skinAnishader.SkinSV", fe),
        e
    }()
      , Fe = function(t) {
        function e(t) {
            e.__super.call(this, 2, 0),
            this.color = []
        }
        n(e, "laya.webgl.shader.d2.value.Color2dSV", fe);
        return e.prototype.setValue = function(t) {
            t.fillStyle && (this.color = t.fillStyle._color._color),
            t.strokeStyle && (this.color = t.strokeStyle._color._color)
        }
        ,
        e
    }()
      , De = function(t) {
        function e(t) {
            this.u_colorMatrix = null,
            this.strength = 0,
            this.colorMat = null,
            this.colorAlpha = null,
            this.u_TexRange = [0, 1, 0, 1],
            this.u_offset = [0, 0],
            this.texcoord = fe._TEXCOORD,
            e.__super.call(this, 256, 0)
        }
        n(e, "laya.webgl.shader.d2.value.FillTextureSV", fe);
        var i = e.prototype;
        return i.setValue = function(t) {
            this.ALPHA = t.ALPHA,
            t.filters && this.setFilters(t.filters)
        }
        ,
        i.clear = function() {
            this.texture = null,
            this.shader = null,
            this.defines.setValue(0)
        }
        ,
        e
    }()
      , Be = function(t) {
        function e(t) {
            this.u_colorMatrix = null,
            this.strength = 0,
            this.blurInfo = null,
            this.colorMat = null,
            this.colorAlpha = null,
            this.texcoord = fe._TEXCOORD,
            void 0 === t && (t = 0),
            e.__super.call(this, 1, t)
        }
        n(e, "laya.webgl.shader.d2.value.TextureSV", fe);
        var i = e.prototype;
        return i.setValue = function(t) {
            this.ALPHA = t.ALPHA,
            t.filters && this.setFilters(t.filters)
        }
        ,
        i.clear = function() {
            this.texture = null,
            this.shader = null,
            this.defines.setValue(0)
        }
        ,
        e
    }()
      , Ne = function(t) {
        function e(t) {
            this.a_color = null,
            this.u_pos = [0, 0],
            e.__super.call(this, 4, 0),
            this.position = [2, 5126, !1, 5 * Xt.BYTES_PE, 0],
            this.a_color = [3, 5126, !1, 5 * Xt.BYTES_PE, 2 * Xt.BYTES_PE]
        }
        return n(e, "laya.webgl.shader.d2.value.PrimitiveSV", fe),
        e
    }()
      , Oe = function(t) {
        function e() {
            this._clipPoint = null,
            this._currBitmapFont = null,
            this._text = null,
            this._isChanged = !1,
            this._textWidth = 0,
            this._textHeight = 0,
            this._lines = [],
            this._lineWidths = [],
            this._startX = NaN,
            this._startY = NaN,
            this._lastVisibleLineIndex = -1,
            this._words = null,
            this._charSize = {},
            this.underline = !1,
            this._underlineColor = null,
            e.__super.call(this),
            this.overflow = e.VISIBLE,
            this._style = new ce(this),
            this._style.wordWrap = !1
        }
        n(e, "laya.display.Text", t);
        var a = e.prototype;
        return a.destroy = function(e) {
            void 0 === e && (e = !0),
            t.prototype.destroy.call(this, e),
            this._lines = null,
            this._words && (this._words.length = 0,
            this._words = null)
        }
        ,
        a._getBoundPointsM = function(t) {
            void 0 === t && (t = !1);
            var e = V.TEMP;
            return e.setTo(0, 0, this.width, this.height),
            e._getBoundPoints()
        }
        ,
        a.getGraphicBounds = function(t) {
            void 0 === t && (t = !1);
            var e = V.TEMP;
            return e.setTo(0, 0, this.width, this.height),
            e
        }
        ,
        a._getCSSStyle = function() {
            return this._style
        }
        ,
        a.lang = function(t, i, s, n, r, a, o, h, l, u, c) {
            if (t = e.langPacks && e.langPacks[t] ? e.langPacks[t] : t,
            arguments.length < 2)
                this._text = t;
            else {
                for (var _ = 0, d = arguments.length; _ < d; _++)
                    t = t.replace("{" + _ + "}", arguments[_ + 1]);
                this._text = t
            }
        }
        ,
        a._isPassWordMode = function() {
            var t = this._style.password;
            return "prompt"in this && this.prompt == this._text && (t = !1),
            t
        }
        ,
        a._getPassWordTxt = function(t) {
            var e;
            e = "";
            for (var i = t.length; i > 0; i--)
                e += "???";
            return e
        }
        ,
        a.renderText = function(t, e) {
            var i = this.graphics;
            i.clear(!0);
            var s = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + (et.onIPhone ? laya.display.Text._fontFamilyMap[this.font] || this.font : this.font);
            et.context.font = s;
            var n = this.padding
              , r = n[3]
              , a = "left"
              , o = this._lines
              , h = this.leading + this._charSize.height
              , l = this._currBitmapFont;
            l && (h = this.leading + l.getMaxHeight());
            var u = n[0];
            if (!l && this._width > 0 && this._textWidth <= this._width && ("right" == this.align ? (a = "right",
            r = this._width - n[1]) : "center" == this.align && (a = "center",
            r = .5 * this._width + n[3] - n[1])),
            this._height > 0) {
                var c = this._textHeight > this._height ? "top" : this.valign;
                "middle" === c ? u = .5 * (this._height - e * h) + n[0] - n[2] : "bottom" === c && (u = this._height - e * h - n[2])
            }
            var _ = this._style;
            if (l && l.autoScaleSize)
                var d = l.fontSize / this.fontSize;
            if (this._clipPoint)
                if (i.save(),
                l && l.autoScaleSize) {
                    var f = 0
                      , p = 0;
                    f = this._width ? this._width - n[3] - n[1] : this._textWidth,
                    p = this._height ? this._height - n[0] - n[2] : this._textHeight,
                    f *= d,
                    p *= d,
                    i.clipRect(n[3], n[0], f, p)
                } else
                    i.clipRect(n[3], n[0], this._width ? this._width - n[3] - n[1] : this._textWidth, this._height ? this._height - n[0] - n[2] : this._textHeight);
            var g = _.password;
            "prompt"in this && this.prompt == this._text && (g = !1);
            for (var m = 0, v = 0, y = Math.min(this._lines.length, e + t) || 1, x = t; x < y; x++) {
                var b, T = o[x];
                if (g) {
                    var w = T.length;
                    T = "";
                    for (var S = w; S > 0; S--)
                        T += "???"
                }
                if (m = r - (this._clipPoint ? this._clipPoint.x : 0),
                v = u + h * x - (this._clipPoint ? this._clipPoint.y : 0),
                this.underline && this.drawUnderline(a, m, v, x),
                l) {
                    var C = this.width;
                    l.autoScaleSize && (C = this.width * d),
                    l.drawText(T, this, m, v, this.align, C)
                } else
                    X.isWebGL ? (this._words || (this._words = []),
                    (b = this._words.length > x - t ? this._words[x - t] : new pt).setText(T)) : b = T,
                    _.stroke ? i.fillBorderText(b, m, v, s, this.color, _.strokeColor, _.stroke, a) : i.fillText(b, m, v, s, this.color, a)
            }
            if (l && l.autoScaleSize) {
                var A = 1 / d;
                this.scale(A, A)
            }
            this._clipPoint && i.restore(),
            this._startX = r,
            this._startY = u
        }
        ,
        a.drawUnderline = function(t, e, i, s) {
            var n = this._lineWidths[s];
            switch (t) {
            case "center":
                e -= n / 2;
                break;
            case "right":
                e -= n
            }
            i += this._charSize.height,
            this._graphics.drawLine(e, i, e + n, i, this.underlineColor || this.color, 1)
        }
        ,
        a.typeset = function() {
            if (this._isChanged = !1,
            !this._text)
                return this._clipPoint = null,
                this._textWidth = this._textHeight = 0,
                void this.graphics.clear(!0);
            et.context.font = this._getCSSStyle().font,
            this._lines.length = 0,
            this._lineWidths.length = 0,
            this._isPassWordMode() ? this.parseLines(this._getPassWordTxt(this._text)) : this.parseLines(this._text),
            this.evalTextSize(),
            this.checkEnabledViewportOrNot() ? this._clipPoint || (this._clipPoint = new U(0,0)) : this._clipPoint = null;
            var t = this._lines.length;
            if (this.overflow != e.VISIBLE) {
                var i = this.overflow == e.HIDDEN ? Math.floor : Math.ceil;
                t = Math.min(t, i((this.height - this.padding[0] - this.padding[2]) / (this.leading + this._charSize.height)))
            }
            var s = this.scrollY / (this._charSize.height + this.leading) | 0;
            this.renderText(s, t),
            this.repaint()
        }
        ,
        a.evalTextSize = function() {
            var t = NaN
              , e = NaN;
            t = Math.max.apply(this, this._lineWidths),
            e = this._currBitmapFont ? this._lines.length * (this._currBitmapFont.getMaxHeight() + this.leading) + this.padding[0] + this.padding[2] : this._lines.length * (this._charSize.height + this.leading) + this.padding[0] + this.padding[2],
            t == this._textWidth && e == this._textHeight || (this._textWidth = t,
            this._textHeight = e,
            this._width && this._height || this.conchModel && this.conchModel.size(this._width || this._textWidth, this._height || this._textHeight))
        }
        ,
        a.checkEnabledViewportOrNot = function() {
            return this.overflow == e.SCROLL && (this._width > 0 && this._textWidth > this._width || this._height > 0 && this._textHeight > this._height)
        }
        ,
        a.changeText = function(t) {
            this._text !== t && (this.lang(t + ""),
            this._graphics && this._graphics.replaceText(this._text) || this.typeset())
        }
        ,
        a.parseLines = function(t) {
            var i = this.wordWrap || this.overflow == e.HIDDEN;
            if (i)
                var s = this.getWordWrapWidth();
            if (this._currBitmapFont)
                this._charSize.width = this._currBitmapFont.getMaxWidth(),
                this._charSize.height = this._currBitmapFont.getMaxHeight();
            else {
                var n = et.context.measureText(e._testWord);
                this._charSize.width = n.width,
                this._charSize.height = n.height || this.fontSize
            }
            for (var r = t.replace(/\r\n/g, "\n").split("\n"), a = 0, o = r.length; a < o; a++) {
                var h = r[a];
                i ? this.parseLine(h, s) : (this._lineWidths.push(this.getTextWidth(h)),
                this._lines.push(h))
            }
        }
        ,
        a.parseLine = function(t, i) {
            et.context;
            var s, n = this._lines, r = 0, a = NaN, o = NaN, h = 0;
            if ((a = this.getTextWidth(t)) <= i)
                return n.push(t),
                void this._lineWidths.push(a);
            a = this._charSize.width,
            0 == (r = Math.floor(i / a)) && (r = 1),
            o = a = this.getTextWidth(t.substring(0, r));
            for (var l = r, u = t.length; l < u; l++)
                if (a = this.getTextWidth(t.charAt(l)),
                (o += a) > i)
                    if (this.wordWrap) {
                        var c = t.substring(h, l);
                        if (c.charCodeAt(c.length - 1) < 255 ? (s = /(?:\w|-)+$/.exec(c)) && (l = s.index + h,
                        0 == s.index ? l += c.length : c = t.substring(h, l)) : e.RightToLeft && (s = /([\u0600-\u06FF])+$/.exec(c)) && (l = s.index + h,
                        0 == s.index ? l += c.length : c = t.substring(h, l)),
                        n.push(c),
                        this._lineWidths.push(o - a),
                        h = l,
                        !(l + r < u)) {
                            n.push(t.substring(h, u)),
                            this._lineWidths.push(this.getTextWidth(n[n.length - 1])),
                            h = -1;
                            break
                        }
                        l += r,
                        o = a = this.getTextWidth(t.substring(h, l)),
                        l--
                    } else if (this.overflow == e.HIDDEN)
                        return n.push(t.substring(0, l)),
                        void this._lineWidths.push(this.getTextWidth(n[n.length - 1]));
            this.wordWrap && -1 != h && (n.push(t.substring(h, u)),
            this._lineWidths.push(this.getTextWidth(n[n.length - 1])))
        }
        ,
        a.getTextWidth = function(t) {
            return this._currBitmapFont ? this._currBitmapFont.getTextWidth(t) : et.context.measureText(t).width
        }
        ,
        a.getWordWrapWidth = function() {
            var t = this.padding
              , e = NaN;
            return (e = this._currBitmapFont && this._currBitmapFont.autoScaleSize ? this._width * (this._currBitmapFont.fontSize / this.fontSize) : this._width) <= 0 && (e = this.wordWrap ? 100 : et.width),
            e <= 0 && (e = 100),
            e - t[3] - t[1]
        }
        ,
        a.getCharPoint = function(t, e) {
            this._isChanged && i.timer.runCallLater(this, this.typeset);
            for (var s = 0, n = this._lines, r = 0, a = 0, o = n.length; a < o; a++) {
                if (s += n[a].length,
                t < s) {
                    var h = a;
                    break
                }
                r = s
            }
            var l = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + this.font;
            et.context.font = l;
            var u = this.getTextWidth(this._text.substring(r, t));
            return (e || new U).setTo(this._startX + u - (this._clipPoint ? this._clipPoint.x : 0), this._startY + h * (this._charSize.height + this.leading) - (this._clipPoint ? this._clipPoint.y : 0))
        }
        ,
        r(0, a, "width", function() {
            return this._width ? this._width : this.textWidth + this.padding[1] + this.padding[3]
        }, function(t) {
            t != this._width && (i.superSet(Ce, this, "width", t),
            this.isChanged = !0)
        }),
        r(0, a, "textWidth", function() {
            return this._isChanged && i.timer.runCallLater(this, this.typeset),
            this._textWidth
        }),
        r(0, a, "height", function() {
            return this._height ? this._height : this.textHeight + this.padding[0] + this.padding[2]
        }, function(t) {
            t != this._height && (i.superSet(Ce, this, "height", t),
            this.isChanged = !0)
        }),
        r(0, a, "textHeight", function() {
            return this._isChanged && i.timer.runCallLater(this, this.typeset),
            this._textHeight
        }),
        r(0, a, "padding", function() {
            return this._getCSSStyle().padding
        }, function(t) {
            this._getCSSStyle().padding = t,
            this.isChanged = !0
        }),
        r(0, a, "bold", function() {
            return this._getCSSStyle().bold
        }, function(t) {
            this._getCSSStyle().bold = t,
            this.isChanged = !0
        }),
        r(0, a, "text", function() {
            return this._text || ""
        }, function(t) {
            this._text !== t && (this.lang(t + ""),
            this.isChanged = !0,
            this.event("change"))
        }),
        r(0, a, "color", function() {
            return this._getCSSStyle().color
        }, function(t) {
            this._getCSSStyle().color != t && (this._getCSSStyle().color = t,
            !this._isChanged && this._graphics ? this._graphics.replaceTextColor(this.color) : this.isChanged = !0)
        }),
        r(0, a, "font", function() {
            return this._getCSSStyle().fontFamily
        }, function(t) {
            this._currBitmapFont && (this._currBitmapFont = null,
            this.scale(1, 1)),
            e._bitmapFonts && e._bitmapFonts[t] && (this._currBitmapFont = e._bitmapFonts[t]),
            this._getCSSStyle().fontFamily = t,
            this.isChanged = !0
        }),
        r(0, a, "fontSize", function() {
            return this._getCSSStyle().fontSize
        }, function(t) {
            this._getCSSStyle().fontSize = t,
            this.isChanged = !0
        }),
        r(0, a, "italic", function() {
            return this._getCSSStyle().italic
        }, function(t) {
            this._getCSSStyle().italic = t,
            this.isChanged = !0
        }),
        r(0, a, "align", function() {
            return this._getCSSStyle().align
        }, function(t) {
            this._getCSSStyle().align = t,
            this.isChanged = !0
        }),
        r(0, a, "valign", function() {
            return this._getCSSStyle().valign
        }, function(t) {
            this._getCSSStyle().valign = t,
            this.isChanged = !0
        }),
        r(0, a, "wordWrap", function() {
            return this._getCSSStyle().wordWrap
        }, function(t) {
            this._getCSSStyle().wordWrap = t,
            this.isChanged = !0
        }),
        r(0, a, "leading", function() {
            return this._getCSSStyle().leading
        }, function(t) {
            this._getCSSStyle().leading = t,
            this.isChanged = !0
        }),
        r(0, a, "bgColor", function() {
            return this._getCSSStyle().backgroundColor
        }, function(t) {
            this._getCSSStyle().backgroundColor = t,
            this.isChanged = !0
        }),
        r(0, a, "borderColor", function() {
            return this._getCSSStyle().borderColor
        }, function(t) {
            this._getCSSStyle().borderColor = t,
            this.isChanged = !0
        }),
        r(0, a, "stroke", function() {
            return this._getCSSStyle().stroke
        }, function(t) {
            this._getCSSStyle().stroke = t,
            this.isChanged = !0
        }),
        r(0, a, "strokeColor", function() {
            return this._getCSSStyle().strokeColor
        }, function(t) {
            this._getCSSStyle().strokeColor = t,
            this.isChanged = !0
        }),
        r(0, a, "isChanged", null, function(t) {
            this._isChanged !== t && (this._isChanged = t,
            t && i.timer.callLater(this, this.typeset))
        }),
        r(0, a, "scrollX", function() {
            return this._clipPoint ? this._clipPoint.x : 0
        }, function(t) {
            if (!(this.overflow != e.SCROLL || this.textWidth < this._width) && this._clipPoint) {
                t = t < this.padding[3] ? this.padding[3] : t;
                var i = this._textWidth - this._width;
                t = t > i ? i : t;
                var s = this._height / (this._charSize.height + this.leading) | 1;
                this._clipPoint.x = t,
                this.renderText(this._lastVisibleLineIndex, s)
            }
        }),
        r(0, a, "scrollY", function() {
            return this._clipPoint ? this._clipPoint.y : 0
        }, function(t) {
            if (!(this.overflow != e.SCROLL || this.textHeight < this._height) && this._clipPoint) {
                t = t < this.padding[0] ? this.padding[0] : t;
                var i = this._textHeight - this._height
                  , s = (t = t > i ? i : t) / (this._charSize.height + this.leading) | 0;
                this._lastVisibleLineIndex = s;
                var n = 1 + (this._height / (this._charSize.height + this.leading) | 0);
                this._clipPoint.y = t,
                this.renderText(s, n)
            }
        }),
        r(0, a, "maxScrollX", function() {
            return this.textWidth < this._width ? 0 : this._textWidth - this._width
        }),
        r(0, a, "maxScrollY", function() {
            return this.textHeight < this._height ? 0 : this._textHeight - this._height
        }),
        r(0, a, "lines", function() {
            return this._isChanged && this.typeset(),
            this._lines
        }),
        r(0, a, "underlineColor", function() {
            return this._underlineColor
        }, function(t) {
            this._underlineColor = t,
            this._isChanged = !0,
            this.typeset()
        }),
        e.registerBitmapFont = function(t, i) {
            e._bitmapFonts || (e._bitmapFonts = {}),
            e._bitmapFonts[t] = i
        }
        ,
        e.unregisterBitmapFont = function(t, i) {
            if (void 0 === i && (i = !0),
            e._bitmapFonts && e._bitmapFonts[t]) {
                var s = e._bitmapFonts[t];
                i && s.destroy(),
                delete e._bitmapFonts[t]
            }
        }
        ,
        e.setTextRightToLeft = function() {
            var t;
            (t = et.canvas.source.style).display = "none",
            t.position = "absolute",
            t.direction = "rtl",
            X._mainCanvas.source.style.direction = "rtl",
            laya.display.Text.RightToLeft = !0,
            et.document.body.appendChild(et.canvas.source)
        }
        ,
        e.supportFont = function(t) {
            et.context.font = "10px sans-serif";
            var e = et.context.measureText("abcji").width;
            et.context.font = "10px " + t;
            var i = et.context.measureText("abcji").width;
            return console.log(e, i),
            e !== i
        }
        ,
        e._testWord = "???",
        e.langPacks = null,
        e.VISIBLE = "visible",
        e.SCROLL = "scroll",
        e.HIDDEN = "hidden",
        e.CharacterCache = !0,
        e.RightToLeft = !1,
        e._bitmapFonts = null,
        s(e, ["_fontFamilyMap", function() {
            return this._fontFamilyMap = {
                "??????": "??????-???",
                "??????": "??????-???",
                "??????": "??????-???",
                "?????????": "?????????-???",
                "??????": "??????-???",
                "?????????": "?????????-???",
                "?????????": "?????????-???",
                "??????": "??????-???",
                "?????????": "?????????-???",
                "??????": "??????-???",
                "?????????": "?????????-???",
                "??????": "??????-???",
                "??????": "??????-???",
                "??????": "??????-???",
                "??????": "??????-???"
            }
        }
        ]),
        e
    }(Ce)
      , ke = function(t) {
        function e() {
            this._comXml = null,
            this._dataSource = null,
            this._toolTip = null,
            this._tag = null,
            this._disabled = !1,
            this._gray = !1,
            this.layoutEnabled = !0,
            e.__super.call(this),
            this._layout = Z.EMPTY,
            this.preinitialize(),
            this.createChildren(),
            this.initialize()
        }
        n(e, "laya.ui.Component", t);
        var s = e.prototype;
        return i.imps(s, {
            "laya.ui.IComponent": !0
        }),
        s.destroy = function(e) {
            void 0 === e && (e = !0),
            t.prototype.destroy.call(this, e),
            this._dataSource = this._layout = null,
            this._tag = null,
            this._toolTip = null
        }
        ,
        s.preinitialize = function() {}
        ,
        s.createChildren = function() {}
        ,
        s.initialize = function() {}
        ,
        s.callLater = function(t, e) {
            i.timer.callLater(this, t, e)
        }
        ,
        s.runCallLater = function(t) {
            i.timer.runCallLater(this, t)
        }
        ,
        s.commitMeasure = function() {}
        ,
        s.changeSize = function() {
            this.event("resize")
        }
        ,
        s.getLayout = function() {
            return this._layout === Z.EMPTY && (this._layout = new Z),
            this._layout
        }
        ,
        s._setLayoutEnabled = function(t) {
            this._layout && this._layout.enable != t && (this._layout.enable = t,
            this.on("added", this, this.onAdded),
            this.on("removed", this, this.onRemoved),
            this.parent && this.onAdded())
        }
        ,
        s.onRemoved = function() {
            this.parent.off("resize", this, this.onCompResize)
        }
        ,
        s.onAdded = function() {
            this.parent.on("resize", this, this.onCompResize),
            this.resetLayoutX(),
            this.resetLayoutY()
        }
        ,
        s.onCompResize = function() {
            this._layout && this._layout.enable && (this.resetLayoutX(),
            this.resetLayoutY())
        }
        ,
        s.resetLayoutX = function() {
            var t = this._layout;
            if (isNaN(t.anchorX) || (this.pivotX = t.anchorX * this.width),
            this.layoutEnabled) {
                var e = this.parent;
                e && (isNaN(t.centerX) ? isNaN(t.left) ? isNaN(t.right) || (this.x = Math.round(e.width - this.displayWidth - t.right + this.pivotX * this.scaleX)) : (this.x = Math.round(t.left + this.pivotX * this.scaleX),
                isNaN(t.right) || (this.width = (e._width - t.left - t.right) / (this.scaleX || .01))) : this.x = Math.round(.5 * (e.width - this.displayWidth) + t.centerX + this.pivotX * this.scaleX))
            }
        }
        ,
        s.resetLayoutY = function() {
            var t = this._layout;
            if (isNaN(t.anchorY) || (this.pivotY = t.anchorY * this.height),
            this.layoutEnabled) {
                var e = this.parent;
                e && (isNaN(t.centerY) ? isNaN(t.top) ? isNaN(t.bottom) || (this.y = Math.round(e.height - this.displayHeight - t.bottom + this.pivotY * this.scaleY)) : (this.y = Math.round(t.top + this.pivotY * this.scaleY),
                isNaN(t.bottom) || (this.height = (e._height - t.top - t.bottom) / (this.scaleY || .01))) : this.y = Math.round(.5 * (e.height - this.displayHeight) + t.centerY + this.pivotY * this.scaleY))
            }
        }
        ,
        s.onMouseOver = function(t) {
            i.stage.event("showtip", this._toolTip)
        }
        ,
        s.onMouseOut = function(t) {
            i.stage.event("hidetip", this._toolTip)
        }
        ,
        r(0, s, "displayWidth", function() {
            return this.width * this.scaleX
        }),
        r(0, s, "width", function() {
            return this._width ? this._width : this.measureWidth
        }, function(t) {
            this._width != t && (this._width = t,
            this.conchModel && this.conchModel.size(this._width, this._height),
            this.callLater(this.changeSize),
            !this._layout.enable || isNaN(this._layout.centerX) && isNaN(this._layout.right) && isNaN(this._layout.anchorX) || this.resetLayoutX())
        }),
        r(0, s, "measureWidth", function() {
            var t = 0;
            this.commitMeasure();
            for (var e = this.numChildren - 1; e > -1; e--) {
                var i = this.getChildAt(e);
                i.visible && (t = Math.max(i.x + i.width * i.scaleX, t))
            }
            return t
        }),
        r(0, s, "displayHeight", function() {
            return this.height * this.scaleY
        }),
        r(0, s, "height", function() {
            return this._height ? this._height : this.measureHeight
        }, function(t) {
            this._height != t && (this._height = t,
            this.conchModel && this.conchModel.size(this._width, this._height),
            this.callLater(this.changeSize),
            !this._layout.enable || isNaN(this._layout.centerY) && isNaN(this._layout.bottom) && isNaN(this._layout.anchorY) || this.resetLayoutY())
        }),
        r(0, s, "dataSource", function() {
            return this._dataSource
        }, function(t) {
            this._dataSource = t;
            for (var e in this._dataSource)
                this.hasOwnProperty(e) && "function" != typeof this[e] && (this[e] = this._dataSource[e])
        }),
        r(0, s, "scaleY", t.prototype._$get_scaleY, function(t) {
            i.superGet(Ce, this, "scaleY") != t && (i.superSet(Ce, this, "scaleY", t),
            this.callLater(this.changeSize),
            this._layout.enable && this.resetLayoutY())
        }),
        r(0, s, "measureHeight", function() {
            var t = 0;
            this.commitMeasure();
            for (var e = this.numChildren - 1; e > -1; e--) {
                var i = this.getChildAt(e);
                i.visible && (t = Math.max(i.y + i.height * i.scaleY, t))
            }
            return t
        }),
        r(0, s, "scaleX", t.prototype._$get_scaleX, function(t) {
            i.superGet(Ce, this, "scaleX") != t && (i.superSet(Ce, this, "scaleX", t),
            this.callLater(this.changeSize),
            this._layout.enable && this.resetLayoutX())
        }),
        r(0, s, "top", function() {
            return this._layout.top
        }, function(t) {
            t != this._layout.top && (this.getLayout().top = t,
            this._setLayoutEnabled(!0)),
            this.resetLayoutY()
        }),
        r(0, s, "bottom", function() {
            return this._layout.bottom
        }, function(t) {
            t != this._layout.bottom && (this.getLayout().bottom = t,
            this._setLayoutEnabled(!0)),
            this.resetLayoutY()
        }),
        r(0, s, "left", function() {
            return this._layout.left
        }, function(t) {
            t != this._layout.left && (this.getLayout().left = t,
            this._setLayoutEnabled(!0)),
            this.resetLayoutX()
        }),
        r(0, s, "right", function() {
            return this._layout.right
        }, function(t) {
            t != this._layout.right && (this.getLayout().right = t,
            this._setLayoutEnabled(!0)),
            this.resetLayoutX()
        }),
        r(0, s, "centerX", function() {
            return this._layout.centerX
        }, function(t) {
            t != this._layout.centerX && (this.getLayout().centerX = t,
            this._setLayoutEnabled(!0)),
            this.resetLayoutX()
        }),
        r(0, s, "centerY", function() {
            return this._layout.centerY
        }, function(t) {
            t != this._layout.centerY && (this.getLayout().centerY = t,
            this._setLayoutEnabled(!0)),
            this.resetLayoutY()
        }),
        r(0, s, "anchorX", function() {
            return this._layout.anchorX
        }, function(t) {
            t != this._layout.anchorX && (this.getLayout().anchorX = t,
            this._setLayoutEnabled(!0)),
            this.resetLayoutX()
        }),
        r(0, s, "anchorY", function() {
            return this._layout.anchorY
        }, function(t) {
            t != this._layout.anchorY && (this.getLayout().anchorY = t,
            this._setLayoutEnabled(!0)),
            this.resetLayoutY()
        }),
        r(0, s, "tag", function() {
            return this._tag
        }, function(t) {
            this._tag = t
        }),
        r(0, s, "toolTip", function() {
            return this._toolTip
        }, function(t) {
            this._toolTip != t && (this._toolTip = t,
            null != t ? (this.on("mouseover", this, this.onMouseOver),
            this.on("mouseout", this, this.onMouseOut)) : (this.off("mouseover", this, this.onMouseOver),
            this.off("mouseout", this, this.onMouseOut)))
        }),
        r(0, s, "comXml", function() {
            return this._comXml
        }, function(t) {
            this._comXml = t
        }),
        r(0, s, "gray", function() {
            return this._gray
        }, function(t) {
            t !== this._gray && (this._gray = t,
            tt.gray(this, t))
        }),
        r(0, s, "disabled", function() {
            return this._disabled
        }, function(t) {
            t !== this._disabled && (this.gray = this._disabled = t,
            this.mouseEnabled = !t)
        }),
        e
    }(Ce)
      , Ue = function(t) {
        function e() {
            this.loop = !1,
            this.wrapMode = 0,
            this._index = 0,
            this._count = 0,
            this._isPlaying = !1,
            this._labels = null,
            this._isReverse = !1,
            this._frameRateChanged = !1,
            this._controlNode = null,
            this._actionName = null,
            e.__super.call(this),
            this._interval = y.animationInterval,
            this._setUpNoticeType(1)
        }
        n(e, "laya.display.AnimationPlayerBase", t);
        var i = e.prototype;
        return i.play = function(t, e, i, s) {
            void 0 === t && (t = 0),
            void 0 === e && (e = !0),
            void 0 === i && (i = ""),
            void 0 === s && (s = !0),
            this._isPlaying = !0,
            this.index = "string" == typeof t ? this._getFrameByLabel(t) : t,
            this.loop = e,
            this._actionName = i,
            this._isReverse = 1 == this.wrapMode,
            this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0)
        }
        ,
        i._getFrameByLabel = function(t) {
            var e = 0;
            for (e = 0; e < this._count; e++)
                if (this._labels[e] && this._labels[e].indexOf(t) >= 0)
                    return e;
            return 0
        }
        ,
        i._frameLoop = function() {
            if (this._isReverse) {
                if (this._index--,
                this._index < 0) {
                    if (!this.loop)
                        return this._index = 0,
                        this.stop(),
                        void this.event("complete");
                    2 == this.wrapMode ? (this._index = this._count > 0 ? 1 : 0,
                    this._isReverse = !1) : this._index = this._count - 1,
                    this.event("complete")
                }
            } else if (this._index++,
            this._index >= this._count) {
                if (!this.loop)
                    return this._index--,
                    this.stop(),
                    void this.event("complete");
                2 == this.wrapMode ? (this._index = this._count - 2 >= 0 ? this._count - 2 : 0,
                this._isReverse = !0) : this._index = 0,
                this.event("complete")
            }
            this.index = this._index
        }
        ,
        i._setControlNode = function(t) {
            this._controlNode && (this._controlNode.off("display", this, this._checkResumePlaying),
            this._controlNode.off("undisplay", this, this._checkResumePlaying)),
            this._controlNode = t,
            t && t != this && (t.on("display", this, this._checkResumePlaying),
            t.on("undisplay", this, this._checkResumePlaying))
        }
        ,
        i._setDisplay = function(e) {
            t.prototype._setDisplay.call(this, e),
            this._checkResumePlaying()
        }
        ,
        i._checkResumePlaying = function() {
            this._isPlaying && (this._controlNode.displayedInStage ? this.play(this._index, this.loop, this._actionName) : this.clearTimer(this, this._frameLoop))
        }
        ,
        i.stop = function() {
            this._isPlaying = !1,
            this.clearTimer(this, this._frameLoop)
        }
        ,
        i.addLabel = function(t, e) {
            this._labels || (this._labels = {}),
            this._labels[e] || (this._labels[e] = []),
            this._labels[e].push(t)
        }
        ,
        i.removeLabel = function(t) {
            if (t) {
                if (this._labels)
                    for (var e in this._labels)
                        this._removeLabelFromLabelList(this._labels[e], t)
            } else
                this._labels = null
        }
        ,
        i._removeLabelFromLabelList = function(t, e) {
            if (t)
                for (var i = t.length - 1; i >= 0; i--)
                    t[i] == e && t.splice(i, 1)
        }
        ,
        i.gotoAndStop = function(t) {
            this.index = "string" == typeof t ? this._getFrameByLabel(t) : t,
            this.stop()
        }
        ,
        i._displayToIndex = function(t) {}
        ,
        i.clear = function() {
            this.stop(),
            this._labels = null
        }
        ,
        r(0, i, "interval", function() {
            return this._interval
        }, function(t) {
            this._interval != t && (this._frameRateChanged = !0,
            this._interval = t,
            this._isPlaying && t > 0 && this.timerLoop(t, this, this._frameLoop, null, !0, !0))
        }),
        r(0, i, "isPlaying", function() {
            return this._isPlaying
        }),
        r(0, i, "index", function() {
            return this._index
        }, function(t) {
            if (this._index = t,
            this._displayToIndex(t),
            this._labels && this._labels[t])
                for (var e = this._labels[t], i = 0, s = e.length; i < s; i++)
                    this.event("label", e[i])
        }),
        r(0, i, "count", function() {
            return this._count
        }),
        e.WRAP_POSITIVE = 0,
        e.WRAP_REVERSE = 1,
        e.WRAP_PINGPONG = 2,
        e
    }(Ce)
      , Ve = function(t) {
        function e() {
            this.focus = null,
            this.designWidth = 0,
            this.designHeight = 0,
            this.canvasRotation = !1,
            this.canvasDegree = 0,
            this.renderingEnabled = !0,
            this.screenAdaptationEnabled = !0,
            this._screenMode = "none",
            this._scaleMode = "noscale",
            this._alignV = "top",
            this._alignH = "left",
            this._bgColor = "black",
            this._mouseMoveTime = 0,
            this._renderCount = 0,
            this._frameStartTime = NaN,
            this._isFocused = !1,
            this._isVisibility = !1,
            this._scenes = null,
            this._frameRate = "fast",
            e.__super.call(this),
            this.offset = new U,
            this._canvasTransform = new k,
            this._previousOrientation = et.window.orientation;
            var t = this;
            this.transform = k.create(),
            this._scenes = [],
            this.mouseEnabled = !0,
            this.hitTestPrior = !0,
            this.autoSize = !1,
            this._displayedInStage = !0,
            this._isFocused = !0,
            this._isVisibility = !0;
            var i = et.window
              , s = this;
            i.addEventListener("focus", function() {
                t._isFocused = !0,
                s.event("focus"),
                s.event("focuschange")
            }),
            i.addEventListener("blur", function() {
                t._isFocused = !1,
                s.event("blur"),
                s.event("focuschange"),
                s._isInputting() && (Ze.inputElement.target.focus = !1)
            });
            var n = "visibilityState"
              , r = "visibilitychange"
              , a = i.document;
            void 0 !== a.hidden ? (r = "visibilitychange",
            n = "visibilityState") : void 0 !== a.mozHidden ? (r = "mozvisibilitychange",
            n = "mozVisibilityState") : void 0 !== a.msHidden ? (r = "msvisibilitychange",
            n = "msVisibilityState") : void 0 !== a.webkitHidden && (r = "webkitvisibilitychange",
            n = "webkitVisibilityState"),
            i.document.addEventListener(r, function() {
                "hidden" == et.document[n] ? s._setStageVisible(!1) : s._setStageVisible(!0)
            }),
            i.document.addEventListener("qbrowserVisibilityChange", function(t) {
                s._setStageVisible(!t.hidden)
            }),
            i.addEventListener("resize", function() {
                var e = et.window.orientation;
                null != e && e != t._previousOrientation && s._isInputting() && (Ze.inputElement.target.focus = !1),
                t._previousOrientation = e,
                s._isInputting() || s._resetCanvas()
            }),
            i.addEventListener("orientationchange", function(t) {
                s._resetCanvas()
            }),
            this.on("mousemove", this, this._onmouseMove),
            et.onMobile && this.on("mousedown", this, this._onmouseMove)
        }
        n(e, "laya.display.Stage", t);
        var a = e.prototype;
        return a._setStageVisible = function(t) {
            this._isVisibility != t && (this._isVisibility = t,
            this._isVisibility || this._isInputting() && (Ze.inputElement.target.focus = !1),
            this.event("visibilitychange"))
        }
        ,
        a._isInputting = function() {
            return et.onMobile && Ze.isInputting
        }
        ,
        a._changeCanvasSize = function() {
            this.setScreenSize(et.clientWidth * et.pixelRatio, et.clientHeight * et.pixelRatio)
        }
        ,
        a._resetCanvas = function() {
            if (this.screenAdaptationEnabled) {
                var t = X._mainCanvas;
                t.source.style;
                t.size(1, 1),
                i.timer.once(100, this, this._changeCanvasSize)
            }
        }
        ,
        a.setScreenSize = function(t, e) {
            var i = !1;
            if ("none" !== this._screenMode) {
                if (i = (t / e < 1 ? "vertical" : "horizontal") !== this._screenMode) {
                    var s = e;
                    e = t,
                    t = s
                }
            }
            this.canvasRotation = i;
            var n = X._mainCanvas
              , r = n.source.style
              , a = this._canvasTransform.identity()
              , h = this._scaleMode
              , l = t / this.designWidth
              , u = e / this.designHeight
              , c = this.designWidth
              , _ = this.designHeight
              , d = t
              , f = e
              , p = et.pixelRatio;
            switch (this._width = this.designWidth,
            this._height = this.designHeight,
            h) {
            case "noscale":
                l = u = 1,
                d = this.designWidth,
                f = this.designHeight;
                break;
            case "showall":
                l = u = Math.min(l, u),
                c = d = Math.round(this.designWidth * l),
                _ = f = Math.round(this.designHeight * u);
                break;
            case "noborder":
                l = u = Math.max(l, u),
                d = Math.round(this.designWidth * l),
                f = Math.round(this.designHeight * u);
                break;
            case "full":
                l = u = 1,
                this._width = c = t,
                this._height = _ = e;
                break;
            case "fixedwidth":
                u = l,
                this._height = _ = Math.round(e / l);
                break;
            case "fixedheight":
                l = u,
                this._width = c = Math.round(t / u);
                break;
            case "fixedauto":
                t / e < this.designWidth / this.designHeight ? (u = l,
                this._height = _ = Math.round(e / l)) : (l = u,
                this._width = c = Math.round(t / u))
            }
            this.conchModel && this.conchModel.size(this._width, this._height),
            l *= this.scaleX,
            u *= this.scaleY,
            1 === l && 1 === u ? this.transform.identity() : (this.transform.a = this._formatData(l / (d / c)),
            this.transform.d = this._formatData(u / (f / _)),
            this.conchModel && this.conchModel.scale(this.transform.a, this.transform.d)),
            n.size(c, _),
            o.changeWebGLSize(c, _),
            a.scale(d / c / p, f / _ / p),
            "left" === this._alignH ? this.offset.x = 0 : "right" === this._alignH ? this.offset.x = (t - d) / p : this.offset.x = .5 * (t - d) / p,
            "top" === this._alignV ? this.offset.y = 0 : "bottom" === this._alignV ? this.offset.y = (e - f) / p : this.offset.y = .5 * (e - f) / p,
            this.offset.x = Math.round(this.offset.x),
            this.offset.y = Math.round(this.offset.y),
            a.translate(this.offset.x, this.offset.y),
            this.canvasDegree = 0,
            i && ("horizontal" === this._screenMode ? (a.rotate(Math.PI / 2),
            a.translate(e / p, 0),
            this.canvasDegree = 90) : (a.rotate(-Math.PI / 2),
            a.translate(0, t / p),
            this.canvasDegree = -90)),
            a.a = this._formatData(a.a),
            a.d = this._formatData(a.d),
            a.tx = this._formatData(a.tx),
            a.ty = this._formatData(a.ty),
            r.transformOrigin = r.webkitTransformOrigin = r.msTransformOrigin = r.mozTransformOrigin = r.oTransformOrigin = "0px 0px 0px",
            r.transform = r.webkitTransform = r.msTransform = r.mozTransform = r.oTransform = "matrix(" + a.toString() + ")",
            a.translate(parseInt(r.left) || 0, parseInt(r.top) || 0),
            this.visible = !0,
            this._repaint = 1,
            this.event("resize")
        }
        ,
        a._formatData = function(t) {
            return Math.abs(t) < 1e-6 ? 0 : Math.abs(1 - t) < .001 ? t > 0 ? 1 : -1 : t
        }
        ,
        a.getMousePoint = function() {
            return U.TEMP.setTo(this.mouseX, this.mouseY)
        }
        ,
        a.repaint = function() {
            this._repaint = 1
        }
        ,
        a.parentRepaint = function() {}
        ,
        a._loop = function() {
            return this.render(X.context, 0, 0),
            !0
        }
        ,
        a._onmouseMove = function(t) {
            this._mouseMoveTime = et.now()
        }
        ,
        a.getTimeFromFrameStart = function() {
            return et.now() - this._frameStartTime
        }
        ,
        a.render = function(e, s, n) {
            if ("sleep" === this._frameRate && !X.isConchApp) {
                var r = et.now();
                if (!(r - this._frameStartTime >= 1e3))
                    return;
                this._frameStartTime = r
            }
            if (this._renderCount++,
            X.isFlash && this.repaint(),
            this._style.visible) {
                this._frameStartTime = et.now();
                var a = "slow" !== ("mouse" === this._frameRate ? this._frameStartTime - this._mouseMoveTime < 2e3 ? "fast" : "slow" : this._frameRate)
                  , h = this._renderCount % 2 == 0;
                if (ht.renderSlow = !a,
                a || h || X.isConchApp) {
                    ht.loopCount++,
                    I.instance.runEvent(),
                    i.timer._update(),
                    o.update3DLoop();
                    var l, u = 0, c = 0;
                    if (X.isConchNode)
                        for (u = 0,
                        c = this._scenes.length; u < c; u++)
                            (l = this._scenes[u]) && l._updateSceneConch();
                    else
                        for (u = 0,
                        c = this._scenes.length; u < c; u++)
                            (l = this._scenes[u]) && l._updateScene();
                    if (X.isConchNode) {
                        var _ = Ce.CustomList;
                        for (u = 0,
                        c = _.length; u < c; u++) {
                            var d = _[u];
                            d.customRender(d.customContext, 0, 0)
                        }
                        return
                    }
                }
                X.isConchNode || !this.renderingEnabled || !a && h || (X.isWebGL ? (e.clear(),
                t.prototype.render.call(this, e, s, n),
                ht._show && ht._sp && ht._sp.render(e, s, n),
                o.clear(this._bgColor),
                o.beginFlush(),
                e.flush(),
                o.endFinish(),
                dt.instance && dt.getInstance().endDispose()) : (o.clear(this._bgColor),
                t.prototype.render.call(this, e, s, n),
                ht._show && ht._sp && ht._sp.render(e, s, n)))
            } else
                this._renderCount % 5 == 0 && (ht.loopCount++,
                I.instance.runEvent(),
                i.timer._update())
        }
        ,
        a._requestFullscreen = function() {
            var t = et.document.documentElement;
            t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
        }
        ,
        a._fullScreenChanged = function() {
            i.stage.event("fullscreenchange")
        }
        ,
        a.exitFullscreen = function() {
            var t = et.document;
            t.exitFullscreen ? t.exitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen()
        }
        ,
        r(0, a, "clientScaleX", function() {
            return this._transform ? this._transform.getScaleX() : 1
        }),
        r(0, a, "desginHeight", function() {
            return console.debug("desginHeight????????????????????????designHeight??????"),
            this.designHeight
        }),
        r(0, a, "frameRate", function() {
            return this._frameRate
        }, function(t) {
            if (this._frameRate = t,
            X.isConchApp)
                switch (this._frameRate) {
                case "slow":
                    et.window.conch && et.window.conchConfig.setSlowFrame && et.window.conchConfig.setSlowFrame(!0);
                    break;
                case "fast":
                    et.window.conch && et.window.conchConfig.setSlowFrame && et.window.conchConfig.setSlowFrame(!1);
                    break;
                case "mouse":
                    et.window.conch && et.window.conchConfig.setMouseFrame && et.window.conchConfig.setMouseFrame(2e3);
                    break;
                case "sleep":
                    et.window.conch && et.window.conchConfig.setLimitFPS && et.window.conchConfig.setLimitFPS(1);
                    break;
                default:
                    throw new Error("Stage:frameRate invalid.")
                }
        }),
        r(0, a, "clientScaleY", function() {
            return this._transform ? this._transform.getScaleY() : 1
        }),
        r(0, a, "width", t.prototype._$get_width, function(t) {
            this.designWidth = t,
            i.superSet(Ce, this, "width", t),
            i.timer.callLater(this, this._changeCanvasSize)
        }),
        r(0, a, "alignH", function() {
            return this._alignH
        }, function(t) {
            this._alignH = t,
            i.timer.callLater(this, this._changeCanvasSize)
        }),
        r(0, a, "isFocused", function() {
            return this._isFocused
        }),
        r(0, a, "height", t.prototype._$get_height, function(t) {
            this.designHeight = t,
            i.superSet(Ce, this, "height", t),
            i.timer.callLater(this, this._changeCanvasSize)
        }),
        r(0, a, "transform", function() {
            return this._tfChanged && this._adjustTransform(),
            this._transform = this._transform || k.create()
        }, t.prototype._$set_transform),
        r(0, a, "isVisibility", function() {
            return this._isVisibility
        }),
        r(0, a, "desginWidth", function() {
            return console.debug("desginWidth????????????????????????designWidth??????"),
            this.designWidth
        }),
        r(0, a, "scaleMode", function() {
            return this._scaleMode
        }, function(t) {
            this._scaleMode = t,
            i.timer.callLater(this, this._changeCanvasSize)
        }),
        r(0, a, "alignV", function() {
            return this._alignV
        }, function(t) {
            this._alignV = t,
            i.timer.callLater(this, this._changeCanvasSize)
        }),
        r(0, a, "bgColor", function() {
            return this._bgColor
        }, function(t) {
            this._bgColor = t,
            this.conchModel && this.conchModel.bgColor(t),
            X.isWebGL && (t ? e._wgColor = nt.create(t)._color : et.onMiniGame || (e._wgColor = null)),
            et.onLimixiu ? e._wgColor = nt.create(t)._color : X.canvas.style.background = t || "none"
        }),
        r(0, a, "mouseX", function() {
            return Math.round(I.instance.mouseX / this.clientScaleX)
        }),
        r(0, a, "mouseY", function() {
            return Math.round(I.instance.mouseY / this.clientScaleY)
        }),
        r(0, a, "screenMode", function() {
            return this._screenMode
        }, function(t) {
            this._screenMode = t
        }),
        r(0, a, "visible", t.prototype._$get_visible, function(t) {
            if (this.visible !== t) {
                i.superSet(Ce, this, "visible", t);
                X._mainCanvas.source.style.visibility = t ? "visible" : "hidden"
            }
        }),
        r(0, a, "fullScreenEnabled", null, function(t) {
            var e = et.document
              , i = X.canvas;
            t ? (i.addEventListener("mousedown", this._requestFullscreen),
            i.addEventListener("touchstart", this._requestFullscreen),
            e.addEventListener("fullscreenchange", this._fullScreenChanged),
            e.addEventListener("mozfullscreenchange", this._fullScreenChanged),
            e.addEventListener("webkitfullscreenchange", this._fullScreenChanged),
            e.addEventListener("msfullscreenchange", this._fullScreenChanged)) : (i.removeEventListener("mousedown", this._requestFullscreen),
            i.removeEventListener("touchstart", this._requestFullscreen),
            e.removeEventListener("fullscreenchange", this._fullScreenChanged),
            e.removeEventListener("mozfullscreenchange", this._fullScreenChanged),
            e.removeEventListener("webkitfullscreenchange", this._fullScreenChanged),
            e.removeEventListener("msfullscreenchange", this._fullScreenChanged))
        }),
        e.SCALE_NOSCALE = "noscale",
        e.SCALE_EXACTFIT = "exactfit",
        e.SCALE_SHOWALL = "showall",
        e.SCALE_NOBORDER = "noborder",
        e.SCALE_FULL = "full",
        e.SCALE_FIXED_WIDTH = "fixedwidth",
        e.SCALE_FIXED_HEIGHT = "fixedheight",
        e.SCALE_FIXED_AUTO = "fixedauto",
        e.ALIGN_LEFT = "left",
        e.ALIGN_RIGHT = "right",
        e.ALIGN_CENTER = "center",
        e.ALIGN_TOP = "top",
        e.ALIGN_MIDDLE = "middle",
        e.ALIGN_BOTTOM = "bottom",
        e.SCREEN_NONE = "none",
        e.SCREEN_HORIZONTAL = "horizontal",
        e.SCREEN_VERTICAL = "vertical",
        e.FRAME_FAST = "fast",
        e.FRAME_SLOW = "slow",
        e.FRAME_MOUSE = "mouse",
        e.FRAME_SLEEP = "sleep",
        e.FRAME_MOUSE_THREDHOLD = 2e3,
        s(e, ["_wgColor", function() {
            return this._wgColor = [0, 0, 0, 1]
        }
        ]),
        e
    }(Ce)
      , Ge = function(t) {
        function e(t, i, s, n) {
            if (this._curActTexIndex = 0,
            this.tag = {},
            this._program = null,
            this._params = null,
            this._paramsMap = {},
            this._offset = 0,
            e.__super.call(this),
            !t || !i)
                throw "Shader Error";
            this._id = ++e._count,
            this._vs = t,
            this._ps = i,
            this._nameMap = n || {},
            null != s && (e.sharders[s] = this)
        }
        n(e, "laya.webgl.shader.Shader", Me);
        var i = e.prototype;
        return i.recreateResource = function() {
            this._compile(),
            this.completeCreate(),
            this.memorySize = 0
        }
        ,
        i.disposeResource = function() {
            qt.mainContext.deleteShader(this._vshader),
            qt.mainContext.deleteShader(this._pshader),
            qt.mainContext.deleteProgram(this._program),
            this._vshader = this._pshader = this._program = null,
            this._params = null,
            this._paramsMap = {},
            this.memorySize = 0,
            this._curActTexIndex = 0
        }
        ,
        i._compile = function() {
            if (this._vs && this._ps && !this._params) {
                this._reCompile = !0,
                this._params = [];
                var t = [this._vs, this._ps]
                  , i = qt.mainContext;
                if (this._program = i.createProgram(),
                this._vshader = e._createShader(i, t[0], 35633),
                this._pshader = e._createShader(i, t[1], 35632),
                i.attachShader(this._program, this._vshader),
                i.attachShader(this._program, this._pshader),
                i.linkProgram(this._program),
                !X.isConchApp && !i.getProgramParameter(this._program, 35714))
                    throw i.getProgramInfoLog(this._program);
                var s, n = 0, r = 0, a = 0;
                for (a = X.isConchApp ? i.getProgramParameterEx(this._vs, this._ps, "", 35721) : i.getProgramParameter(this._program, 35721),
                n = 0; n < a; n++) {
                    var o = null;
                    s = {
                        vartype: "attribute",
                        glfun: null,
                        ivartype: 0,
                        attrib: o = X.isConchApp ? i.getActiveAttribEx(this._vs, this._ps, "", n) : i.getActiveAttrib(this._program, n),
                        location: i.getAttribLocation(this._program, o.name),
                        name: o.name,
                        type: o.type,
                        isArray: !1,
                        isSame: !1,
                        preValue: null,
                        indexOfParams: 0
                    },
                    this._params.push(s)
                }
                var h = 0;
                for (h = X.isConchApp ? i.getProgramParameterEx(this._vs, this._ps, "", 35718) : i.getProgramParameter(this._program, 35718),
                n = 0; n < h; n++) {
                    var l = null;
                    l = X.isConchApp ? i.getActiveUniformEx(this._vs, this._ps, "", n) : i.getActiveUniform(this._program, n),
                    (s = {
                        vartype: "uniform",
                        glfun: null,
                        ivartype: 1,
                        attrib: o,
                        location: i.getUniformLocation(this._program, l.name),
                        name: l.name,
                        type: l.type,
                        isArray: !1,
                        isSame: !1,
                        preValue: null,
                        indexOfParams: 0
                    }).name.indexOf("[0]") > 0 && (s.name = s.name.substr(0, s.name.length - 3),
                    s.isArray = !0,
                    s.location = i.getUniformLocation(this._program, s.name)),
                    this._params.push(s)
                }
                for (n = 0,
                r = this._params.length; n < r; n++)
                    if (s = this._params[n],
                    s.indexOfParams = n,
                    s.index = 1,
                    s.value = [s.location, null],
                    s.codename = s.name,
                    s.name = this._nameMap[s.codename] ? this._nameMap[s.codename] : s.codename,
                    this._paramsMap[s.name] = s,
                    s._this = this,
                    s.uploadedValue = [],
                    "attribute" !== s.vartype)
                        switch (s.type) {
                        case 5124:
                            s.fun = s.isArray ? this._uniform1iv : this._uniform1i;
                            break;
                        case 5126:
                            s.fun = s.isArray ? this._uniform1fv : this._uniform1f;
                            break;
                        case 35664:
                            s.fun = s.isArray ? this._uniform_vec2v : this._uniform_vec2;
                            break;
                        case 35665:
                            s.fun = s.isArray ? this._uniform_vec3v : this._uniform_vec3;
                            break;
                        case 35666:
                            s.fun = s.isArray ? this._uniform_vec4v : this._uniform_vec4;
                            break;
                        case 35678:
                            s.fun = this._uniform_sampler2D;
                            break;
                        case 35680:
                            s.fun = this._uniform_samplerCube;
                            break;
                        case 35676:
                            s.glfun = i.uniformMatrix4fv,
                            s.fun = this._uniformMatrix4fv;
                            break;
                        case 35670:
                            s.fun = this._uniform1i;
                            break;
                        case 35674:
                        case 35675:
                        default:
                            throw new Error("compile shader err!")
                        }
                    else
                        s.fun = this._attribute
            }
        }
        ,
        i.getUniform = function(t) {
            return this._paramsMap[t]
        }
        ,
        i._attribute = function(t, e) {
            var i = qt.mainContext
              , s = Ae._enableAtributes
              , n = t.location;
            return s[n] || i.enableVertexAttribArray(n),
            i.vertexAttribPointer(n, e[0], e[1], e[2], e[3], e[4] + this._offset),
            s[n] = Ae._bindVertexBuffer,
            1
        }
        ,
        i._uniform1f = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e ? (qt.mainContext.uniform1f(t.location, i[0] = e),
            1) : 0
        }
        ,
        i._uniform1fv = function(t, e) {
            if (e.length < 4) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (qt.mainContext.uniform1fv(t.location, e),
                i[0] = e[0],
                i[1] = e[1],
                i[2] = e[2],
                i[3] = e[3],
                1) : 0
            }
            return qt.mainContext.uniform1fv(t.location, e),
            1
        }
        ,
        i._uniform_vec2 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] ? (qt.mainContext.uniform2f(t.location, i[0] = e[0], i[1] = e[1]),
            1) : 0
        }
        ,
        i._uniform_vec2v = function(t, e) {
            if (e.length < 2) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (qt.mainContext.uniform2fv(t.location, e),
                i[0] = e[0],
                i[1] = e[1],
                i[2] = e[2],
                i[3] = e[3],
                1) : 0
            }
            return qt.mainContext.uniform2fv(t.location, e),
            1
        }
        ,
        i._uniform_vec3 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (qt.mainContext.uniform3f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]),
            1) : 0
        }
        ,
        i._uniform_vec3v = function(t, e) {
            return qt.mainContext.uniform3fv(t.location, e),
            1
        }
        ,
        i._uniform_vec4 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (qt.mainContext.uniform4f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]),
            1) : 0
        }
        ,
        i._uniform_vec4v = function(t, e) {
            return qt.mainContext.uniform4fv(t.location, e),
            1
        }
        ,
        i._uniformMatrix2fv = function(t, e) {
            return qt.mainContext.uniformMatrix2fv(t.location, !1, e),
            1
        }
        ,
        i._uniformMatrix3fv = function(t, e) {
            return qt.mainContext.uniformMatrix3fv(t.location, !1, e),
            1
        }
        ,
        i._uniformMatrix4fv = function(t, e) {
            return qt.mainContext.uniformMatrix4fv(t.location, !1, e),
            1
        }
        ,
        i._uniform1i = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e ? (qt.mainContext.uniform1i(t.location, i[0] = e),
            1) : 0
        }
        ,
        i._uniform1iv = function(t, e) {
            return qt.mainContext.uniform1iv(t.location, e),
            1
        }
        ,
        i._uniform_ivec2 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] ? (qt.mainContext.uniform2i(t.location, i[0] = e[0], i[1] = e[1]),
            1) : 0
        }
        ,
        i._uniform_ivec2v = function(t, e) {
            return qt.mainContext.uniform2iv(t.location, e),
            1
        }
        ,
        i._uniform_vec3i = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (qt.mainContext.uniform3i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]),
            1) : 0
        }
        ,
        i._uniform_vec3vi = function(t, e) {
            return qt.mainContext.uniform3iv(t.location, e),
            1
        }
        ,
        i._uniform_vec4i = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (qt.mainContext.uniform4i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]),
            1) : 0
        }
        ,
        i._uniform_vec4vi = function(t, e) {
            return qt.mainContext.uniform4iv(t.location, e),
            1
        }
        ,
        i._uniform_sampler2D = function(t, i) {
            var s = qt.mainContext
              , n = t.uploadedValue;
            return null == n[0] ? (n[0] = this._curActTexIndex,
            s.uniform1i(t.location, this._curActTexIndex),
            s.activeTexture(e._TEXTURES[this._curActTexIndex]),
            Qt.bindTexture(s, 3553, i),
            this._curActTexIndex++,
            1) : (s.activeTexture(e._TEXTURES[n[0]]),
            Qt.bindTexture(s, 3553, i),
            0)
        }
        ,
        i._uniform_samplerCube = function(t, i) {
            var s = qt.mainContext
              , n = t.uploadedValue;
            return null == n[0] ? (n[0] = this._curActTexIndex,
            s.uniform1i(t.location, this._curActTexIndex),
            s.activeTexture(e._TEXTURES[this._curActTexIndex]),
            Qt.bindTexture(s, 34067, i),
            this._curActTexIndex++,
            1) : (s.activeTexture(e._TEXTURES[n[0]]),
            Qt.bindTexture(s, 34067, i),
            0)
        }
        ,
        i._noSetValue = function(t) {
            console.log("no....:" + t.name)
        }
        ,
        i.uploadOne = function(t, e) {
            this.activeResource(),
            Qt.UseProgram(this._program);
            var i = this._paramsMap[t];
            i.fun.call(this, i, e)
        }
        ,
        i.uploadTexture2D = function(t) {
            ht.shaderCall++;
            var e = qt.mainContext;
            e.activeTexture(33984),
            Qt.bindTexture(e, 3553, t)
        }
        ,
        i.upload = function(t, e) {
            Me.activeShader = Me.bindShader = this,
            this._lastUseFrameCount === ht.loopCount || this.activeResource(),
            Qt.UseProgram(this._program),
            this._reCompile ? (e = this._params,
            this._reCompile = !1) : e = e || this._params;
            qt.mainContext;
            for (var i, s, n = e.length, r = 0, a = 0; a < n; a++)
                null !== (s = t[(i = e[a]).name]) && (r += i.fun.call(this, i, s));
            ht.shaderCall += r
        }
        ,
        i.uploadArray = function(t, e, i) {
            Me.activeShader = this,
            Me.bindShader = this,
            this.activeResource(),
            Qt.UseProgram(this._program);
            this._params;
            for (var s, n, r = 0, a = e - 2; a >= 0; a -= 2)
                (n = this._paramsMap[t[a]]) && null != (s = t[a + 1]) && (i && i[n.name] && i[n.name].bind(),
                r += n.fun.call(this, n, s));
            ht.shaderCall += r
        }
        ,
        i.getParams = function() {
            return this._params
        }
        ,
        e.getShader = function(t) {
            return e.sharders[t]
        }
        ,
        e.create = function(t, i, s, n) {
            return new e(t,i,s,n)
        }
        ,
        e.withCompile = function(t, i, s, n) {
            if (s && e.sharders[s])
                return e.sharders[s];
            var r = e._preCompileShader[2e-4 * t];
            if (!r)
                throw new Error("withCompile shader err!" + t);
            return r.createShader(i, s, n)
        }
        ,
        e.withCompile2D = function(t, i, s, n, r) {
            if (n && e.sharders[n])
                return e.sharders[n];
            var a = e._preCompileShader[2e-4 * t + i];
            if (!a)
                throw new Error("withCompile shader err!" + t + " " + i);
            return a.createShader(s, n, r)
        }
        ,
        e.addInclude = function(t, e) {
            b.addInclude(t, e)
        }
        ,
        e.preCompile = function(t, i, s, n) {
            var r = 2e-4 * t;
            e._preCompileShader[r] = new b(r,i,s,n)
        }
        ,
        e.preCompile2D = function(t, i, s, n, r) {
            var a = 2e-4 * t + i;
            e._preCompileShader[a] = new b(a,s,n,r)
        }
        ,
        e._createShader = function(t, e, i) {
            var s = t.createShader(i);
            return t.shaderSource(s, e),
            t.compileShader(s),
            s
        }
        ,
        e._TEXTURES = [33984, 33985, 33986, 33987, 33988, 33989, 33990, , 33991, 33992],
        e._count = 0,
        e._preCompileShader = {},
        e.SHADERNAME2ID = 2e-4,
        e.sharders = (e.sharders = [],
        e.sharders.length = 32,
        e.sharders),
        s(e, ["nameKey", function() {
            return this.nameKey = new lt
        }
        ]),
        e
    }()
      , We = function(t) {
        function e() {
            this._maxsize = 0,
            this._upload = !0,
            this._uploadSize = 0,
            e.__super.call(this),
            this.lock = !0
        }
        n(e, "laya.webgl.utils.Buffer2D", t);
        var i = e.prototype;
        return i.needSize = function(t) {
            var e = this._byteLength;
            if (t) {
                var i = this._byteLength + t;
                i <= this._buffer.byteLength || this._resizeBuffer(i << 1, !0),
                this._byteLength = i
            }
            return e
        }
        ,
        i._bufferData = function() {
            this._maxsize = Math.max(this._maxsize, this._byteLength),
            ht.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this.memorySize = this._buffer.byteLength,
            this._buffer = this._buffer.slice(0, this._maxsize + 64),
            this._checkArrayUse()),
            this._maxsize = this._byteLength),
            this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength,
            Ae._gl.bufferData(this._bufferType, this._uploadSize, this._bufferUsage),
            this.memorySize = this._uploadSize),
            Ae._gl.bufferSubData(this._bufferType, 0, this._buffer)
        }
        ,
        i._bufferSubData = function(t, e, i) {
            if (void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            this._maxsize = Math.max(this._maxsize, this._byteLength),
            ht.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this.memorySize = this._buffer.byteLength,
            this._buffer = this._buffer.slice(0, this._maxsize + 64),
            this._checkArrayUse()),
            this._maxsize = this._byteLength),
            this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength,
            Ae._gl.bufferData(this._bufferType, this._uploadSize, this._bufferUsage),
            this.memorySize = this._uploadSize),
            e || i) {
                var s = this._buffer.slice(e, i);
                Ae._gl.bufferSubData(this._bufferType, t, s)
            } else
                Ae._gl.bufferSubData(this._bufferType, t, this._buffer)
        }
        ,
        i._checkArrayUse = function() {}
        ,
        i._bind_upload = function() {
            return !!this._upload && (this._upload = !1,
            this._bind(),
            this._bufferData(),
            !0)
        }
        ,
        i._bind_subUpload = function(t, e, i) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            !!this._upload && (this._upload = !1,
            this._bind(),
            this._bufferSubData(t, e, i),
            !0)
        }
        ,
        i._resizeBuffer = function(t, e) {
            if (t < this._buffer.byteLength)
                return this;
            if (this.memorySize = t,
            e && this._buffer && this._buffer.byteLength > 0) {
                var i = new ArrayBuffer(t);
                new Uint8Array(i).set(new Uint8Array(this._buffer), 0),
                this._buffer = i
            } else
                this._buffer = new ArrayBuffer(t);
            return this._checkArrayUse(),
            this._upload = !0,
            this
        }
        ,
        i.append = function(t) {
            this._upload = !0;
            var e, i = 0;
            i = t.byteLength,
            t instanceof Uint8Array ? (this._resizeBuffer(this._byteLength + i, !0),
            e = new Uint8Array(this._buffer,this._byteLength)) : t instanceof Uint16Array ? (this._resizeBuffer(this._byteLength + i, !0),
            e = new Uint16Array(this._buffer,this._byteLength)) : t instanceof Float32Array && (this._resizeBuffer(this._byteLength + i, !0),
            e = new Float32Array(this._buffer,this._byteLength)),
            e.set(t, 0),
            this._byteLength += i,
            this._checkArrayUse()
        }
        ,
        i.appendU16Array = function(t, e) {
            this._resizeBuffer(this._byteLength + 2 * e, !0);
            for (var i = new Uint16Array(this._buffer,this._byteLength,e), s = 0; s < e; s++)
                i[s] = t[s];
            this._byteLength += 2 * e,
            this._checkArrayUse()
        }
        ,
        i.appendEx = function(t, e) {
            this._upload = !0;
            var i = 0;
            i = t.byteLength,
            this._resizeBuffer(this._byteLength + i, !0),
            new e(this._buffer,this._byteLength).set(t, 0),
            this._byteLength += i,
            this._checkArrayUse()
        }
        ,
        i.appendEx2 = function(t, e, i, s) {
            void 0 === s && (s = 1),
            this._upload = !0;
            var n, r = 0;
            r = i * s,
            this._resizeBuffer(this._byteLength + r, !0),
            n = new e(this._buffer,this._byteLength);
            var a = 0;
            for (a = 0; a < i; a++)
                n[a] = t[a];
            this._byteLength += r,
            this._checkArrayUse()
        }
        ,
        i.getBuffer = function() {
            return this._buffer
        }
        ,
        i.setNeedUpload = function() {
            this._upload = !0
        }
        ,
        i.getNeedUpload = function() {
            return this._upload
        }
        ,
        i.upload = function() {
            var t = this._bind_upload();
            return Ae._gl.bindBuffer(this._bufferType, null),
            Ae._bindActive[this._bufferType] = null,
            Me.activeShader = null,
            t
        }
        ,
        i.subUpload = function(t, e, i) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === i && (i = 0);
            var s = this._bind_subUpload();
            return Ae._gl.bindBuffer(this._bufferType, null),
            Ae._bindActive[this._bufferType] = null,
            Me.activeShader = null,
            s
        }
        ,
        i.disposeResource = function() {
            t.prototype.disposeResource.call(this),
            this._upload = !0,
            this._uploadSize = 0
        }
        ,
        i.clear = function() {
            this._byteLength = 0,
            this._upload = !0
        }
        ,
        r(0, i, "bufferLength", function() {
            return this._buffer.byteLength
        }),
        r(0, i, "byteLength", null, function(t) {
            this._byteLength !== t && (t <= this._buffer.byteLength || this._resizeBuffer(2 * t + 256, !0),
            this._byteLength = t)
        }),
        e.__int__ = function(t) {
            si.QuadrangleIB = si.create(35044),
            $t.fillIBQuadrangle(si.QuadrangleIB, 16)
        }
        ,
        e.FLOAT32 = 4,
        e.SHORT = 2,
        e
    }(Ae)
      , ze = function(t) {
        function e() {
            this._src = null,
            this._onload = null,
            this._onerror = null,
            e.__super.call(this)
        }
        n(e, "laya.resource.FileBitmap", Ee);
        var i = e.prototype;
        return r(0, i, "src", function() {
            return this._src
        }, function(t) {
            this._src = t
        }),
        r(0, i, "onload", null, function(t) {}),
        r(0, i, "onerror", null, function(t) {}),
        e
    }()
      , He = function(t) {
        function e(t, i) {
            this._is2D = !1,
            e.__super.call(this);
            var s = this;
            if (this._source = this,
            "2D" === t || "AUTO" === t && !X.isWebGL) {
                this._is2D = !0,
                this._source = i || et.createElement("canvas"),
                this._w = this._source.width,
                this._h = this._source.height;
                var n = this;
                n.getContext = function(t, e) {
                    if (s._ctx)
                        return s._ctx;
                    var i = s._ctx = s._source.getContext(t, e);
                    return i && (i._canvas = n,
                    X.isFlash || et.onLimixiu || (i.size = function(t, e) {}
                    )),
                    i
                }
            }
            this.lock = !0
        }
        n(e, "laya.resource.HTMLCanvas", Ee);
        var i = e.prototype;
        return i.clear = function() {
            this._ctx && this._ctx.clear()
        }
        ,
        i.destroy = function() {
            this._ctx && this._ctx.destroy(),
            this._ctx = null,
            laya.resource.Resource.prototype.destroy.call(this)
        }
        ,
        i.release = function() {}
        ,
        i._setContext = function(t) {
            this._ctx = t
        }
        ,
        i.getContext = function(t, i) {
            return this._ctx ? this._ctx : this._ctx = e._createContext(this)
        }
        ,
        i.getMemSize = function() {
            return 0
        }
        ,
        i.size = function(t, e) {
            (this._w != t || this._h != e || this._source && (this._source.width != t || this._source.height != e)) && (this._w = t,
            this._h = e,
            this.memorySize = this._w * this._h * 4,
            this._ctx && this._ctx.size(t, e),
            this._source && (this._source.height = e,
            this._source.width = t))
        }
        ,
        i.getCanvas = function() {
            return this._source
        }
        ,
        i.toBase64 = function(t, e, i) {
            if (this._source)
                if (X.isConchApp && this._source.toBase64)
                    this._source.toBase64(t, e, i);
                else {
                    var s = this._source.toDataURL(t, e);
                    i.call(this, s)
                }
        }
        ,
        r(0, i, "context", function() {
            return this._ctx
        }),
        r(0, i, "asBitmap", null, function(t) {}),
        e.create = function(t, i) {
            return new e(t,i)
        }
        ,
        e.TYPE2D = "2D",
        e.TYPE3D = "3D",
        e.TYPEAUTO = "AUTO",
        e._createContext = null,
        e
    }()
      , Ye = function(t) {
        function e(t, i, s, n, r, a, o, h) {
            throw e.__super.call(this),
            new Error("?????????new???")
        }
        return n(e, "laya.resource.HTMLSubImage", Ee),
        e.create = function(t, i, s, n, r, a, o, h) {
            return void 0 === h && (h = !1),
            new e(t,i,s,n,r,a,o,h)
        }
        ,
        e
    }()
      , Xe = function(t) {
        function e() {
            this._atlaser = null,
            this._flashCacheImage = null,
            this._flashCacheImageNeedFlush = !1,
            e.__super.call(this)
        }
        n(e, "laya.webgl.atlas.AtlasWebGLCanvas", t);
        var i = e.prototype;
        return i.recreateResource = function() {
            var t = qt.mainContext
              , e = this._source = t.createTexture()
              , i = Qt.curBindTexTarget
              , s = Qt.curBindTexValue;
            Qt.bindTexture(t, 3553, e),
            t.texImage2D(3553, 0, 6408, this._w, this._h, 0, 6408, 5121, null),
            t.texParameteri(3553, 10241, 9729),
            t.texParameteri(3553, 10240, 9729),
            t.texParameteri(3553, 10242, 33071),
            t.texParameteri(3553, 10243, 33071),
            i && s && Qt.bindTexture(t, i, s),
            this.memorySize = this._w * this._h * 4,
            this.completeCreate()
        }
        ,
        i.disposeResource = function() {
            this._source && (qt.mainContext.deleteTexture(this._source),
            this._source = null,
            this.memorySize = 0)
        }
        ,
        i.texSubImage2D = function(t, e, i) {
            if (X.isFlash) {
                this._flashCacheImage || (this._flashCacheImage = ii.create(""),
                this._flashCacheImage._image.createCanvas(this._w, this._h));
                var s = i.bitmapdata;
                this._flashCacheImage._image.copyPixels(s, 0, 0, s.width, s.height, t, e),
                this._flashCacheImageNeedFlush || (this._flashCacheImageNeedFlush = !0)
            } else {
                var n = qt.mainContext
                  , r = Qt.curBindTexTarget
                  , a = Qt.curBindTexValue;
                Qt.bindTexture(n, 3553, this._source),
                X.isConchWebGL ? (t - 1 >= 0 && n.texSubImage2DEx(!0, 3553, 0, t - 1, e, 6408, 5121, i),
                t + 1 <= this._w && n.texSubImage2DEx(!0, 3553, 0, t + 1, e, 6408, 5121, i),
                e - 1 >= 0 && n.texSubImage2DEx(!0, 3553, 0, t, e - 1, 6408, 5121, i),
                e + 1 <= this._h && n.texSubImage2DEx(!0, 3553, 0, t, e + 1, 6408, 5121, i),
                n.texSubImage2DEx(!0, 3553, 0, t, e, 6408, 5121, i)) : (n.pixelStorei(37441, !0),
                t - 1 >= 0 && n.texSubImage2D(3553, 0, t - 1, e, 6408, 5121, i),
                t + 1 <= this._w && n.texSubImage2D(3553, 0, t + 1, e, 6408, 5121, i),
                e - 1 >= 0 && n.texSubImage2D(3553, 0, t, e - 1, 6408, 5121, i),
                e + 1 <= this._h && n.texSubImage2D(3553, 0, t, e + 1, 6408, 5121, i),
                n.texSubImage2D(3553, 0, t, e, 6408, 5121, i),
                n.pixelStorei(37441, !1)),
                r && a && Qt.bindTexture(n, r, a)
            }
        }
        ,
        i.texSubImage2DPixel = function(t, e, i, s, n) {
            var r = qt.mainContext
              , a = Qt.curBindTexTarget
              , o = Qt.curBindTexValue;
            Qt.bindTexture(r, 3553, this._source);
            var h = new Uint8Array(n.data);
            X.isConchWebGL ? r.texSubImage2DEx(!0, 3553, 0, t, e, i, s, 6408, 5121, h) : (r.pixelStorei(37441, !0),
            r.texSubImage2D(3553, 0, t, e, i, s, 6408, 5121, h),
            r.pixelStorei(37441, !1)),
            a && o && Qt.bindTexture(r, a, o)
        }
        ,
        r(0, i, "width", t.prototype._$get_width, function(t) {
            this._w = t
        }),
        r(0, i, "height", t.prototype._$get_height, function(t) {
            this._h = t
        }),
        e
    }(Ee)
      , $e = function(t) {
        function e() {
            this.flipY = !0,
            this.alwaysChange = !1,
            e.__super.call(this)
        }
        n(e, "laya.webgl.resource.WebGLCanvas", Ee);
        var i = e.prototype;
        return i.getCanvas = function() {
            return this._canvas
        }
        ,
        i.clear = function() {
            this._ctx && this._ctx.clear()
        }
        ,
        i.destroy = function() {
            this._ctx && this._ctx.destroy(),
            this._ctx = null
        }
        ,
        i._setContext = function(t) {
            this._ctx = t
        }
        ,
        i.getContext = function(t, i) {
            return this._ctx ? this._ctx : this._ctx = e._createContext(this)
        }
        ,
        i.size = function(t, e) {
            this._w == t && this._h == e || (this._w = t,
            this._h = e,
            this._ctx && this._ctx.size(t, e),
            this._canvas && (this._canvas.height = e,
            this._canvas.width = t))
        }
        ,
        i.activeResource = function(t) {
            void 0 === t && (t = !1),
            this._source || this.recreateResource()
        }
        ,
        i.recreateResource = function() {
            this.createWebGlTexture(),
            this.completeCreate()
        }
        ,
        i.disposeResource = function() {
            this._source && !this.iscpuSource && (qt.mainContext.deleteTexture(this._source),
            this._source = null,
            this.memorySize = 0)
        }
        ,
        i.createWebGlTexture = function() {
            var t = qt.mainContext;
            this._canvas;
            var i = this._source = t.createTexture();
            this.iscpuSource = !1;
            var s = Qt.curBindTexTarget
              , n = Qt.curBindTexValue;
            Qt.bindTexture(t, 3553, i),
            t.pixelStorei(37440, this.flipY ? 1 : 0),
            X.isConchWebGL ? t.texImage2DEx(e.premulAlpha, 3553, 0, 6408, 6408, 5121, this._imgData) : (e.premulAlpha && t.pixelStorei(37441, !0),
            t.texImage2D(3553, 0, 6408, 6408, 5121, this._imgData),
            e.premulAlpha && t.pixelStorei(37441, !1)),
            t.texParameteri(3553, 10240, 9729),
            t.texParameteri(3553, 10241, 9729),
            t.texParameteri(3553, 10242, 33071),
            t.texParameteri(3553, 10243, 33071),
            t.pixelStorei(37440, 0),
            this.memorySize = this._w * this._h * 4,
            s && n && Qt.bindTexture(t, s, n)
        }
        ,
        i.reloadCanvasData = function() {
            var t = qt.mainContext;
            if (!this._source)
                throw "reloadCanvasData error, gl texture not created!";
            var i = Qt.curBindTexTarget
              , s = Qt.curBindTexValue;
            Qt.bindTexture(t, 3553, this._source),
            X.isConchWebGL ? t.texImage2DEx(e.premulAlpha, 3553, 0, 6408, 6408, 5121, this._imgData) : (e.premulAlpha && t.pixelStorei(37441, !0),
            t.texImage2D(3553, 0, 6408, 6408, 5121, this._imgData),
            e.premulAlpha && t.pixelStorei(37441, !1)),
            t.pixelStorei(37440, 0),
            i && s && Qt.bindTexture(t, i, s)
        }
        ,
        i.texSubImage2D = function(t, e, i) {
            var s = qt.mainContext
              , n = Qt.curBindTexTarget
              , r = Qt.curBindTexValue;
            Qt.bindTexture(s, 3553, this._source),
            X.isConchWebGL ? s.texSubImage2DEx(!0, 3553, 0, e, i, 6408, 5121, t._source) : (s.pixelStorei(37441, !0),
            s.texSubImage2D(3553, 0, e, i, 6408, 5121, t._source),
            s.pixelStorei(37441, !1)),
            n && r && Qt.bindTexture(s, n, r)
        }
        ,
        i.toBase64 = function(t, e, i) {
            var s = null;
            this._canvas && (s = this._canvas.toDataURL(t, e)),
            i.call(this, s)
        }
        ,
        r(0, i, "context", function() {
            return this._ctx
        }),
        r(0, i, "source", function() {
            return this.alwaysChange && this.reloadCanvasData(),
            this._source
        }),
        r(0, i, "asBitmap", null, function(t) {
            this._ctx && (this._ctx.asBitmap = t)
        }),
        e._createContext = null,
        e.premulAlpha = !1,
        e
    }()
      , je = function(t) {
        function e(t, i) {
            this.CborderSize = 12,
            e.__super.call(this),
            this.char = t,
            this.isSpace = " " === t,
            this.xs = i.scaleX,
            this.ys = i.scaleY,
            this.font = i.font.toString(),
            this.fontSize = i.font.size,
            this.fillColor = i.fillColor,
            this.borderColor = i.borderColor,
            this.lineWidth = i.lineWidth,
            this.underLine = i.underLine;
            var s, n = X.isConchApp;
            n ? ((s = ConchTextCanvas)._source = ConchTextCanvas,
            s._source.canvas = ConchTextCanvas) : s = et.canvas.source,
            this.canvas = s,
            this._enableMerageInAtlas = !0,
            this._ctx = n ? s : this.canvas.getContext("2d", void 0);
            var r = _t.measureText(this.char, this.font);
            this.cw = r.width * this.xs,
            this.ch = (r.height || this.fontSize) * this.ys,
            this.onresize(this.cw + 2 * this.CborderSize, this.ch + 2 * this.CborderSize),
            this.texture = new he(this)
        }
        n(e, "laya.webgl.resource.WebGLCharImage", Ee);
        var s = e.prototype;
        return i.imps(s, {
            "laya.webgl.resource.IMergeAtlasBitmap": !0
        }),
        s.active = function() {
            this.texture.active()
        }
        ,
        s.recreateResource = function() {
            var t = X.isConchApp;
            if (this.onresize(this.cw + 2 * this.CborderSize, this.ch + 2 * this.CborderSize),
            this.canvas && (this.canvas.height = this._h,
            this.canvas.width = this._w),
            t) {
                var e = this.fontSize;
                1 == this.xs && 1 == this.ys || (e = parseInt(e * (this.xs > this.ys ? this.xs : this.ys) + ""));
                var i = "normal 100 " + e + "px Arial";
                this.borderColor && (i += " 1 " + this.borderColor),
                this._ctx.font = i,
                this._ctx.textBaseline = "top",
                this._ctx.fillStyle = this.fillColor,
                this._ctx.fillText(this.char, this.CborderSize, this.CborderSize, null, null, null)
            } else {
                if (this._ctx.save(),
                this._ctx.clearRect(0, 0, this.cw + 2 * this.CborderSize, this.ch + 2 * this.CborderSize),
                this._ctx.font = this.font,
                Oe.RightToLeft && (this._ctx.textAlign = "end"),
                this._ctx.textBaseline = "top",
                this._ctx.translate(this.CborderSize, this.CborderSize),
                1 == this.xs && 1 == this.ys || this._ctx.scale(this.xs, this.ys),
                this.fillColor && this.borderColor ? (this._ctx.strokeStyle = this.borderColor,
                this._ctx.lineWidth = this.lineWidth,
                this._ctx.strokeText(this.char, 0, 0, null, null, 0, null),
                this._ctx.fillStyle = this.fillColor,
                this._ctx.fillText(this.char, 0, 0, null, null, null)) : -1 === this.lineWidth ? (this._ctx.fillStyle = this.fillColor ? this.fillColor : "white",
                this._ctx.fillText(this.char, 0, 0, null, null, null)) : (this._ctx.strokeStyle = this.borderColor ? this.borderColor : "white",
                this._ctx.lineWidth = this.lineWidth,
                this._ctx.strokeText(this.char, 0, 0, null, null, 0, null)),
                this.underLine) {
                    this._ctx.lineWidth = 1,
                    this._ctx.strokeStyle = this.fillColor,
                    this._ctx.beginPath(),
                    this._ctx.moveTo(0, this.fontSize + 1);
                    var s = this._ctx.measureText(this.char).width + 1;
                    this._ctx.lineTo(s, this.fontSize + 1),
                    this._ctx.stroke()
                }
                this._ctx.restore()
            }
            this.borderSize = this.CborderSize,
            this.completeCreate()
        }
        ,
        s.onresize = function(t, e) {
            this._w = t,
            this._h = e,
            this._allowMerageInAtlas = !0
        }
        ,
        s.clearAtlasSource = function() {}
        ,
        r(0, s, "allowMerageInAtlas", function() {
            return this._allowMerageInAtlas
        }),
        r(0, s, "atlasSource", function() {
            return this.canvas
        }),
        r(0, s, "enableMerageInAtlas", function() {
            return this._enableMerageInAtlas
        }, function(t) {
            this._enableMerageInAtlas = t
        }),
        e.createOneChar = function(t, i) {
            return new e(t,i)
        }
        ,
        e
    }()
      , Ke = function(t) {
        function e(t, i, s, n, r, a, o, h, l) {
            void 0 === s && (s = 6408),
            void 0 === n && (n = 5121),
            void 0 === r && (r = 34041),
            void 0 === a && (a = !1),
            void 0 === o && (o = !1),
            void 0 === h && (h = -1),
            void 0 === l && (l = 1),
            e.__super.call(this),
            this._w = t,
            this._h = i,
            this._surfaceFormat = s,
            this._surfaceType = n,
            this._depthStencilFormat = r,
            X.isConchWebGL && 34041 === this._depthStencilFormat && (this._depthStencilFormat = 33189),
            this._mipMap = a,
            this._repeat = o,
            this._minFifter = h,
            this._magFifter = l
        }
        n(e, "laya.webgl.resource.WebGLRenderTarget", Ee);
        var i = e.prototype;
        return i.recreateResource = function() {
            var t = qt.mainContext;
            this._frameBuffer || (this._frameBuffer = t.createFramebuffer()),
            this._source || (this._source = t.createTexture());
            var e = Qt.curBindTexTarget
              , i = Qt.curBindTexValue;
            Qt.bindTexture(t, 3553, this._source),
            t.texImage2D(3553, 0, 6408, this._w, this._h, 0, this._surfaceFormat, this._surfaceType, null);
            var s = this._minFifter
              , n = this._magFifter
              , r = this._repeat ? 10497 : 33071
              , a = D.isPOT(this._w, this._h);
            if (a ? (this._mipMap ? -1 !== s || (s = 9987) : -1 !== s || (s = 9729),
            -1 !== n || (n = 9729),
            t.texParameteri(3553, 10241, s),
            t.texParameteri(3553, 10240, n),
            t.texParameteri(3553, 10242, r),
            t.texParameteri(3553, 10243, r),
            this._mipMap && t.generateMipmap(3553)) : (-1 !== s || (s = 9729),
            -1 !== n || (n = 9729),
            t.texParameteri(3553, 10241, s),
            t.texParameteri(3553, 10240, n),
            t.texParameteri(3553, 10242, 33071),
            t.texParameteri(3553, 10243, 33071)),
            t.bindFramebuffer(36160, this._frameBuffer),
            t.framebufferTexture2D(36160, 36064, 3553, this._source, 0),
            this._depthStencilFormat)
                switch (this._depthStencilBuffer || (this._depthStencilBuffer = t.createRenderbuffer()),
                t.bindRenderbuffer(36161, this._depthStencilBuffer),
                t.renderbufferStorage(36161, this._depthStencilFormat, this._w, this._h),
                this._depthStencilFormat) {
                case 33189:
                    t.framebufferRenderbuffer(36160, 36096, 36161, this._depthStencilBuffer);
                    break;
                case 36168:
                    t.framebufferRenderbuffer(36160, 36128, 36161, this._depthStencilBuffer);
                    break;
                case 34041:
                    t.framebufferRenderbuffer(36160, 33306, 36161, this._depthStencilBuffer)
                }
            t.bindFramebuffer(36160, null),
            e && i && Qt.bindTexture(t, e, i),
            t.bindRenderbuffer(36161, null),
            a && this._mipMap ? this.memorySize = this._w * this._h * 4 * (1 + 1 / 3) : this.memorySize = this._w * this._h * 4,
            this.completeCreate()
        }
        ,
        i.disposeResource = function() {
            this._frameBuffer && (qt.mainContext.deleteTexture(this._source),
            qt.mainContext.deleteFramebuffer(this._frameBuffer),
            qt.mainContext.deleteRenderbuffer(this._depthStencilBuffer),
            this._source = null,
            this._frameBuffer = null,
            this._depthStencilBuffer = null,
            this.memorySize = 0)
        }
        ,
        r(0, i, "depthStencilBuffer", function() {
            return this._depthStencilBuffer
        }),
        r(0, i, "frameBuffer", function() {
            return this._frameBuffer
        }),
        e
    }()
      , qe = function(t) {
        function e(t, i, s, n, r, a, o) {
            this.offsetX = 0,
            this.offsetY = 0,
            e.__super.call(this),
            this.repeat = !0,
            this.mipmap = !1,
            this.minFifter = -1,
            this.magFifter = -1,
            this.atlasImage = a,
            this.canvas = t,
            this._ctx = t.getContext("2d", void 0),
            this._w = n,
            this._h = r,
            this.offsetX = i,
            this.offsetY = s,
            this.src = o,
            this._enableMerageInAtlas = !0,
            mt.enabled && this._w < mt.atlasLimitWidth && this._h < mt.atlasLimitHeight ? this._allowMerageInAtlas = !0 : this._allowMerageInAtlas = !1
        }
        n(e, "laya.webgl.resource.WebGLSubImage", Ee);
        var s = e.prototype;
        return i.imps(s, {
            "laya.webgl.resource.IMergeAtlasBitmap": !0
        }),
        s.size = function(t, e) {
            this._w = t,
            this._h = e,
            this._ctx && this._ctx.size(t, e),
            this.canvas && (this.canvas.height = e,
            this.canvas.width = t)
        }
        ,
        s.recreateResource = function() {
            this.size(this._w, this._h),
            this._ctx.drawImage(this.atlasImage, this.offsetX, this.offsetY, this._w, this._h, 0, 0, this._w, this._h),
            this._allowMerageInAtlas && this._enableMerageInAtlas ? this.memorySize = 0 : this.createWebGlTexture(),
            this.completeCreate()
        }
        ,
        s.createWebGlTexture = function() {
            var t = qt.mainContext;
            if (!this.canvas)
                throw "create GLTextur err:no data:" + this.canvas;
            var e = this._source = t.createTexture()
              , i = Qt.curBindTexTarget
              , s = Qt.curBindTexValue;
            Qt.bindTexture(t, 3553, e),
            X.isConchWebGL ? t.texImage2DEx(!0, 3553, 0, 6408, 6408, 5121, this.canvas) : (t.pixelStorei(37441, !0),
            t.texImage2D(3553, 0, 6408, 6408, 5121, this.canvas),
            t.pixelStorei(37441, !1));
            var n = this.minFifter
              , r = this.magFifter
              , a = this.repeat ? 10497 : 33071
              , o = D.isPOT(this.width, this.height);
            o ? (this.mipmap ? -1 !== n || (n = 9987) : -1 !== n || (n = 9729),
            -1 !== r || (r = 9729),
            t.texParameteri(3553, 10240, r),
            t.texParameteri(3553, 10241, n),
            t.texParameteri(3553, 10242, a),
            t.texParameteri(3553, 10243, a),
            this.mipmap && t.generateMipmap(3553)) : (-1 !== n || (n = 9729),
            -1 !== r || (r = 9729),
            t.texParameteri(3553, 10241, n),
            t.texParameteri(3553, 10240, r),
            t.texParameteri(3553, 10242, 33071),
            t.texParameteri(3553, 10243, 33071)),
            i && s && Qt.bindTexture(t, i, s),
            this.canvas = null,
            o && this.mipmap ? this.memorySize = this._w * this._h * 4 * (1 + 1 / 3) : this.memorySize = this._w * this._h * 4
        }
        ,
        s.disposeResource = function() {
            mt.enabled && this._allowMerageInAtlas || !this._source || (qt.mainContext.deleteTexture(this._source),
            this._source = null,
            this.memorySize = 0)
        }
        ,
        s.clearAtlasSource = function() {}
        ,
        r(0, s, "allowMerageInAtlas", function() {
            return this._allowMerageInAtlas
        }),
        r(0, s, "atlasSource", function() {
            return this.canvas
        }),
        r(0, s, "enableMerageInAtlas", function() {
            return this._allowMerageInAtlas
        }, function(t) {
            this._allowMerageInAtlas = t
        }),
        e
    }()
      , Qe = function(t) {
        function e(t) {
            e.__super.call(this, 64),
            this.defines.add(64)
        }
        n(e, "laya.webgl.shader.d2.value.TextSV", t);
        var i = e.prototype;
        return i.release = function() {
            e.pool[e._length++] = this,
            this.clear()
        }
        ,
        i.clear = function() {
            t.prototype.clear.call(this)
        }
        ,
        e.create = function() {
            return e._length ? e.pool[--e._length] : new e(null)
        }
        ,
        e.pool = [],
        e._length = 0,
        e
    }(Be)
      , Ze = function(t) {
        function e() {
            this._focus = !1,
            this._multiline = !1,
            this._editable = !0,
            this._restrictPattern = null,
            this._type = "text",
            this._prompt = "",
            this._promptColor = "#A9A9A9",
            this._originColor = "#000000",
            this._content = "",
            e.__super.call(this),
            this._maxChars = 1e5,
            this._width = 100,
            this._height = 20,
            this.multiline = !1,
            this.overflow = Oe.SCROLL,
            this.on("mousedown", this, this._onMouseDown),
            this.on("undisplay", this, this._onUnDisplay)
        }
        n(e, "laya.display.Input", t);
        var a = e.prototype;
        return a.setSelection = function(t, e) {
            this.focus = !0,
            laya.display.Input.inputElement.selectionStart = t,
            laya.display.Input.inputElement.selectionEnd = e
        }
        ,
        a._onUnDisplay = function(t) {
            this.focus = !1
        }
        ,
        a._onMouseDown = function(t) {
            this.focus = !0
        }
        ,
        a._syncInputTransform = function() {
            var t = this.nativeInput
              , s = _t.getTransformRelativeToWindow(this, this.padding[3], this.padding[0])
              , n = this._width - this.padding[1] - this.padding[3]
              , r = this._height - this.padding[0] - this.padding[2];
            X.isConchApp ? (t.setScale(s.scaleX, s.scaleY),
            t.setSize(n, r),
            t.setPos(s.x, s.y)) : (e.inputContainer.style.transform = e.inputContainer.style.webkitTransform = "scale(" + s.scaleX + "," + s.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)",
            t.style.width = n + "px",
            t.style.height = r + "px",
            e.inputContainer.style.left = s.x + "px",
            e.inputContainer.style.top = s.y + "px")
        }
        ,
        a.select = function() {
            this.nativeInput.select()
        }
        ,
        a._setInputMethod = function() {
            e.input.parentElement && e.inputContainer.removeChild(e.input),
            e.area.parentElement && e.inputContainer.removeChild(e.area),
            e.inputElement = this._multiline ? e.area : e.input,
            e.inputContainer.appendChild(e.inputElement),
            Oe.RightToLeft && (e.inputElement.style.direction = "rtl")
        }
        ,
        a._focusIn = function() {
            laya.display.Input.isInputting = !0;
            var t = this.nativeInput;
            this._focus = !0;
            var e = t.style;
            e.whiteSpace = this.wordWrap ? "pre-wrap" : "nowrap",
            this._setPromptColor(),
            t.readOnly = !this._editable,
            X.isConchApp && (t.setType(this._type),
            t.setForbidEdit(!this._editable)),
            t.maxLength = this._maxChars;
            this.padding;
            if (t.type = this._type,
            t.value = this._content,
            t.placeholder = this._prompt,
            i.stage.off("keydown", this, this._onKeyDown),
            i.stage.on("keydown", this, this._onKeyDown),
            i.stage.focus = this,
            this.event("focus"),
            et.onPC && t.focus(),
            !et.onMiniGame) {
                this._text;
                this._text = null
            }
            this.typeset(),
            t.setColor(this._originColor),
            t.setFontSize(this.fontSize),
            t.setFontFace(et.onIPhone ? Oe._fontFamilyMap[this.font] || this.font : this.font),
            X.isConchApp && t.setMultiAble && t.setMultiAble(this._multiline),
            e.lineHeight = this.leading + this.fontSize + "px",
            e.fontStyle = this.italic ? "italic" : "normal",
            e.fontWeight = this.bold ? "bold" : "normal",
            e.textAlign = this.align,
            e.padding = "0 0",
            this._syncInputTransform(),
            !X.isConchApp && et.onPC && i.timer.frameLoop(1, this, this._syncInputTransform)
        }
        ,
        a._setPromptColor = function() {
            (e.promptStyleDOM = et.getElementById("promptStyle")) || ((e.promptStyleDOM = et.createElement("style")).setAttribute("id", "promptStyle"),
            et.document.head.appendChild(e.promptStyleDOM)),
            e.promptStyleDOM.innerText = "input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:" + this._promptColor + "}input:-moz-placeholder, textarea:-moz-placeholder {color:" + this._promptColor + "}input::-moz-placeholder, textarea::-moz-placeholder {color:" + this._promptColor + "}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:" + this._promptColor + "}"
        }
        ,
        a._focusOut = function() {
            laya.display.Input.isInputting = !1,
            this._focus = !1,
            this._text = null,
            this._content = this.nativeInput.value,
            this._content ? (i.superSet(Oe, this, "text", this._content),
            i.superSet(Oe, this, "color", this._originColor)) : (i.superSet(Oe, this, "text", this._prompt),
            i.superSet(Oe, this, "color", this._promptColor)),
            i.stage.off("keydown", this, this._onKeyDown),
            i.stage.focus = null,
            this.event("blur"),
            X.isConchApp && this.nativeInput.blur(),
            et.onPC && i.timer.clear(this, this._syncInputTransform)
        }
        ,
        a._onKeyDown = function(t) {
            13 === t.keyCode && (et.onMobile && !this._multiline && (this.focus = !1),
            this.event("enter"))
        }
        ,
        a.changeText = function(e) {
            this._content = e,
            this._focus ? (this.nativeInput.value = e || "",
            this.event("change")) : t.prototype.changeText.call(this, e)
        }
        ,
        r(0, a, "color", t.prototype._$get_color, function(t) {
            this._focus && this.nativeInput.setColor(t),
            i.superSet(Oe, this, "color", this._content ? t : this._promptColor),
            this._originColor = t
        }),
        r(0, a, "inputElementYAdjuster", function() {
            return console.warn("deprecated: ?????????????????????????????????????????????????????????????????????????????????inputElementYAdjuster????????????"),
            0
        }, function(t) {
            console.warn("deprecated: ?????????????????????????????????????????????????????????????????????????????????inputElementYAdjuster????????????")
        }),
        r(0, a, "multiline", function() {
            return this._multiline
        }, function(t) {
            this._multiline = t,
            this.valign = t ? "top" : "middle"
        }),
        r(0, a, "maxChars", function() {
            return this._maxChars
        }, function(t) {
            t <= 0 && (t = 1e5),
            this._maxChars = t
        }),
        r(0, a, "text", function() {
            return this._focus ? this.nativeInput.value : this._content || ""
        }, function(t) {
            i.superSet(Oe, this, "color", this._originColor),
            t += "",
            this._focus ? (this.nativeInput.value = t || "",
            this.event("change")) : (this._multiline || (t = t.replace(/\r?\n/g, "")),
            this._content = t,
            t ? i.superSet(Oe, this, "text", t) : (i.superSet(Oe, this, "text", this._prompt),
            i.superSet(Oe, this, "color", this.promptColor)))
        }),
        r(0, a, "nativeInput", function() {
            return this._multiline ? e.area : e.input
        }),
        r(0, a, "prompt", function() {
            return this._prompt
        }, function(t) {
            !this._text && t && i.superSet(Oe, this, "color", this._promptColor),
            this.promptColor = this._promptColor,
            this._text ? i.superSet(Oe, this, "text", this._text == this._prompt ? t : this._text) : i.superSet(Oe, this, "text", t),
            this._prompt = Oe.langPacks && Oe.langPacks[t] ? Oe.langPacks[t] : t
        }),
        r(0, a, "focus", function() {
            return this._focus
        }, function(t) {
            var i = this.nativeInput;
            this._focus !== t && (t ? (i.target ? i.target._focusOut() : this._setInputMethod(),
            i.target = this,
            this._focusIn()) : (i.target = null,
            this._focusOut(),
            et.document.body.scrollTop = 0,
            i.blur(),
            X.isConchApp ? i.setPos(-1e4, -1e4) : e.inputContainer.contains(i) && e.inputContainer.removeChild(i)))
        }),
        r(0, a, "restrict", function() {
            return this._restrictPattern ? this._restrictPattern.source : ""
        }, function(t) {
            t ? ((t = "[^" + t + "]").indexOf("^^") > -1 && (t = t.replace("^^", "")),
            this._restrictPattern = new RegExp(t,"g")) : this._restrictPattern = null
        }),
        r(0, a, "editable", function() {
            return this._editable
        }, function(t) {
            this._editable = t,
            X.isConchApp && e.input.setForbidEdit(!t)
        }),
        r(0, a, "promptColor", function() {
            return this._promptColor
        }, function(t) {
            this._promptColor = t,
            this._content || i.superSet(Oe, this, "color", t)
        }),
        r(0, a, "type", function() {
            return this._type
        }, function(t) {
            this._getCSSStyle().password = "password" == t,
            this._type = t,
            X.isConchApp && this.nativeInput.setType(t)
        }),
        r(0, a, "inputElementXAdjuster", function() {
            return console.warn("deprecated: ?????????????????????????????????????????????????????????????????????????????????inputElementXAdjuster????????????"),
            0
        }, function(t) {
            console.warn("deprecated: ?????????????????????????????????????????????????????????????????????????????????inputElementXAdjuster????????????")
        }),
        r(0, a, "asPassword", function() {
            return this._getCSSStyle().password
        }, function(t) {
            this._getCSSStyle().password = t,
            this._type = "password",
            console.warn('deprecated: ??????type="password"????????????asPassword, asPassword?????????????????????????????????'),
            this.isChanged = !0
        }),
        e.__init__ = function() {
            e._createInputElement(),
            et.onMobile && X.canvas.addEventListener(e.IOS_IFRAME ? et.onMiniGame ? "touchend" : "click" : "touchend", e._popupInputMethod)
        }
        ,
        e._popupInputMethod = function(t) {
            if (laya.display.Input.isInputting) {
                laya.display.Input.inputElement.focus()
            }
        }
        ,
        e._createInputElement = function() {
            e._initInput(e.area = et.createElement("textarea")),
            e._initInput(e.input = et.createElement("input")),
            (e.inputContainer = et.createElement("div")).style.position = "absolute",
            e.inputContainer.style.zIndex = 1e5,
            et.container.appendChild(e.inputContainer),
            e.inputContainer.setPos = function(t, i) {
                e.inputContainer.style.left = t + "px",
                e.inputContainer.style.top = i + "px"
            }
        }
        ,
        e._initInput = function(t) {
            var i = t.style;
            i.cssText = "position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;",
            i.resize = "none",
            i.backgroundColor = "transparent",
            i.border = "none",
            i.outline = "none",
            i.zIndex = 1,
            t.addEventListener("input", e._processInputting),
            t.addEventListener("mousemove", e._stopEvent),
            t.addEventListener("mousedown", e._stopEvent),
            t.addEventListener("touchmove", e._stopEvent),
            t.setFontFace = function(e) {
                t.style.fontFamily = e
            }
            ,
            X.isConchApp || (t.setColor = function(e) {
                t.style.color = e
            }
            ,
            t.setFontSize = function(e) {
                t.style.fontSize = e + "px"
            }
            )
        }
        ,
        e._processInputting = function(t) {
            var e = laya.display.Input.inputElement.target;
            if (e) {
                var i = laya.display.Input.inputElement.value;
                e._restrictPattern && (i = i.replace(/\u2006|\x27/g, ""),
                e._restrictPattern.test(i) && (i = i.replace(e._restrictPattern, ""),
                laya.display.Input.inputElement.value = i)),
                e._text = i,
                e.event("input")
            }
        }
        ,
        e._stopEvent = function(t) {
            "touchmove" == t.type && t.preventDefault(),
            t.stopPropagation && t.stopPropagation()
        }
        ,
        e.TYPE_TEXT = "text",
        e.TYPE_PASSWORD = "password",
        e.TYPE_EMAIL = "email",
        e.TYPE_URL = "url",
        e.TYPE_NUMBER = "number",
        e.TYPE_RANGE = "range",
        e.TYPE_DATE = "date",
        e.TYPE_MONTH = "month",
        e.TYPE_WEEK = "week",
        e.TYPE_TIME = "time",
        e.TYPE_DATE_TIME = "datetime",
        e.TYPE_DATE_TIME_LOCAL = "datetime-local",
        e.TYPE_SEARCH = "search",
        e.input = null,
        e.area = null,
        e.inputElement = null,
        e.inputContainer = null,
        e.confirmButton = null,
        e.promptStyleDOM = null,
        e.inputHeight = 45,
        e.isInputting = !1,
        e.stageMatrix = null,
        s(e, ["IOS_IFRAME", function() {
            return this.IOS_IFRAME = et.onIOS && et.window.top != et.window.self
        }
        ]),
        e
    }(Oe)
      , Je = function(t) {
        function e(t, i) {
            this.toggle = !1,
            this._bitmap = null,
            this._text = null,
            this._strokeColors = null,
            this._state = 0,
            this._selected = !1,
            this._skin = null,
            this._autoSize = !0,
            this._sources = null,
            this._clickHandler = null,
            this._stateChanged = !1,
            e.__super.call(this),
            this._labelColors = J.buttonLabelColors,
            this._stateNum = J.buttonStateNum,
            void 0 === i && (i = ""),
            this.skin = t,
            this.label = i
        }
        n(e, "laya.ui.Button", t);
        var a = e.prototype;
        return i.imps(a, {
            "laya.ui.ISelect": !0
        }),
        a.destroy = function(e) {
            void 0 === e && (e = !0),
            t.prototype.destroy.call(this, e),
            this._bitmap && this._bitmap.destroy(),
            this._text && this._text.destroy(e),
            this._bitmap = null,
            this._text = null,
            this._clickHandler = null,
            this._labelColors = this._sources = this._strokeColors = null
        }
        ,
        a.createChildren = function() {
            this.graphics = this._bitmap = new le
        }
        ,
        a.createText = function() {
            this._text || (this._text = new Oe,
            this._text.overflow = Oe.HIDDEN,
            this._text.align = "center",
            this._text.valign = "middle",
            this._text.width = this._width,
            this._text.height = this._height)
        }
        ,
        a.initialize = function() {
            1 !== this._mouseEnableState && (this.mouseEnabled = !0,
            this._setBit(2, !0)),
            this._createListener("mouseover", this, this.onMouse, null, !1, !1),
            this._createListener("mouseout", this, this.onMouse, null, !1, !1),
            this._createListener("mousedown", this, this.onMouse, null, !1, !1),
            this._createListener("mouseup", this, this.onMouse, null, !1, !1),
            this._createListener("click", this, this.onMouse, null, !1, !1)
        }
        ,
        a.onMouse = function(t) {
            if (!1 !== this.toggle || !this._selected)
                return "click" === t.type ? (this.toggle && (this.selected = !this._selected),
                void (this._clickHandler && this._clickHandler.run())) : void (!this._selected && (this.state = e.stateMap[t.type]))
        }
        ,
        a.changeClips = function() {
            var t = oe.getRes(this._skin);
            if (t) {
                var e = t.sourceWidth
                  , i = t.sourceHeight / this._stateNum;
                t.$_GID || (t.$_GID = _t.getGID());
                var s = t.$_GID + "-" + this._stateNum
                  , n = ft.I.get(s);
                if (_t.isOkTextureList(n) || (n = null),
                n)
                    this._sources = n;
                else {
                    if (this._sources = [],
                    1 === this._stateNum)
                        this._sources.push(t);
                    else
                        for (var r = 0; r < this._stateNum; r++)
                            this._sources.push(he.createFromTexture(t, 0, i * r, e, i));
                    ft.I.set(s, this._sources)
                }
                this._autoSize ? (this._bitmap.width = this._width || e,
                this._bitmap.height = this._height || i,
                this._text && (this._text.width = this._bitmap.width,
                this._text.height = this._bitmap.height)) : this._text && (this._text.x = e)
            } else
                console.log("lose skin", this._skin)
        }
        ,
        a.changeState = function() {
            this._stateChanged = !1,
            this.runCallLater(this.changeClips);
            var t = this._state < this._stateNum ? this._state : this._stateNum - 1;
            this._sources && (this._bitmap.source = this._sources[t]),
            this.label && (this._text.color = this._labelColors[t],
            this._strokeColors && (this._text.strokeColor = this._strokeColors[t]))
        }
        ,
        a._setStateChanged = function() {
            this._stateChanged || (this._stateChanged = !0,
            this.callLater(this.changeState))
        }
        ,
        r(0, a, "labelStrokeColor", function() {
            return this.createText(),
            this._text.strokeColor
        }, function(t) {
            this.createText(),
            this._text.strokeColor = t
        }),
        r(0, a, "measureHeight", function() {
            return this.runCallLater(this.changeClips),
            this._text ? Math.max(this._bitmap.height, this._text.height) : this._bitmap.height
        }),
        r(0, a, "skin", function() {
            return this._skin
        }, function(t) {
            this._skin != t && (this._skin = t,
            this.callLater(this.changeClips),
            this._setStateChanged())
        }),
        r(0, a, "state", function() {
            return this._state
        }, function(t) {
            this._state != t && (this._state = t,
            this._setStateChanged())
        }),
        r(0, a, "text", function() {
            return this.createText(),
            this._text
        }),
        r(0, a, "stateNum", function() {
            return this._stateNum
        }, function(t) {
            "string" == typeof t && (t = parseInt(t)),
            this._stateNum != t && (this._stateNum = t < 1 ? 1 : t > 3 ? 3 : t,
            this.callLater(this.changeClips))
        }),
        r(0, a, "strokeColors", function() {
            return this._strokeColors ? this._strokeColors.join(",") : ""
        }, function(t) {
            this._strokeColors = tt.fillArray(J.buttonLabelColors, t, String),
            this._setStateChanged()
        }),
        r(0, a, "labelColors", function() {
            return this._labelColors.join(",")
        }, function(t) {
            this._labelColors = tt.fillArray(J.buttonLabelColors, t, String),
            this._setStateChanged()
        }),
        r(0, a, "measureWidth", function() {
            return this.runCallLater(this.changeClips),
            this._autoSize ? this._bitmap.width : (this.runCallLater(this.changeState),
            this._bitmap.width + (this._text ? this._text.width : 0))
        }),
        r(0, a, "label", function() {
            return this._text ? this._text.text : null
        }, function(t) {
            (this._text || t) && (this.createText(),
            this._text.text != t && (t && !this._text.parent && this.addChild(this._text),
            this._text.text = (t + "").replace(/\\n/g, "\n"),
            this._setStateChanged()))
        }),
        r(0, a, "selected", function() {
            return this._selected
        }, function(t) {
            this._selected != t && (this._selected = t,
            this.state = this._selected ? 2 : 0,
            this.event("change"))
        }),
        r(0, a, "labelPadding", function() {
            return this.createText(),
            this._text.padding.join(",")
        }, function(t) {
            this.createText(),
            this._text.padding = tt.fillArray(J.labelPadding, t, Number)
        }),
        r(0, a, "labelSize", function() {
            return this.createText(),
            this._text.fontSize
        }, function(t) {
            this.createText(),
            this._text.fontSize = t
        }),
        r(0, a, "labelStroke", function() {
            return this.createText(),
            this._text.stroke
        }, function(t) {
            this.createText(),
            this._text.stroke = t
        }),
        r(0, a, "labelBold", function() {
            return this.createText(),
            this._text.bold
        }, function(t) {
            this.createText(),
            this._text.bold = t
        }),
        r(0, a, "labelFont", function() {
            return this.createText(),
            this._text.font
        }, function(t) {
            this.createText(),
            this._text.font = t
        }),
        r(0, a, "labelAlign", function() {
            return this.createText(),
            this._text.align
        }, function(t) {
            this.createText(),
            this._text.align = t
        }),
        r(0, a, "clickHandler", function() {
            return this._clickHandler
        }, function(t) {
            this._clickHandler = t
        }),
        r(0, a, "sizeGrid", function() {
            return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null
        }, function(t) {
            this._bitmap.sizeGrid = tt.fillArray(J.defaultSizeGrid, t, Number)
        }),
        r(0, a, "width", t.prototype._$get_width, function(t) {
            i.superSet(ke, this, "width", t),
            this._autoSize && (this._bitmap.width = t,
            this._text && (this._text.width = t))
        }),
        r(0, a, "height", t.prototype._$get_height, function(t) {
            i.superSet(ke, this, "height", t),
            this._autoSize && (this._bitmap.height = t,
            this._text && (this._text.height = t))
        }),
        r(0, a, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t,
            "number" == typeof t || "string" == typeof t ? this.label = t + "" : i.superSet(ke, this, "dataSource", t)
        }),
        r(0, a, "iconOffset", function() {
            return this._bitmap._offset ? this._bitmap._offset.join(",") : null
        }, function(t) {
            this._bitmap._offset = t ? tt.fillArray([1, 1], t, Number) : []
        }),
        s(e, ["stateMap", function() {
            return this.stateMap = {
                mouseup: 0,
                mouseover: 1,
                mousedown: 2,
                mouseout: 0
            }
        }
        ]),
        e
    }(ke)
      , ti = (function(t) {
        function e() {
            this._frames = null,
            this._url = null,
            e.__super.call(this),
            this._setControlNode(this)
        }
        n(e, "laya.display.Animation", t);
        var s = e.prototype;
        s.destroy = function(t) {
            void 0 === t && (t = !0),
            this.stop(),
            laya.display.Sprite.prototype.destroy.call(this, t),
            this._frames = null,
            this._labels = null
        }
        ,
        s.play = function(t, e, i, s) {
            void 0 === t && (t = 0),
            void 0 === e && (e = !0),
            void 0 === i && (i = ""),
            void 0 === s && (s = !0),
            i && this._setFramesFromCache(i, s),
            this._isPlaying = !0,
            this.index = "string" == typeof t ? this._getFrameByLabel(t) : t,
            this.loop = e,
            this._actionName = i,
            this._isReverse = 1 == this.wrapMode,
            this._frames && this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0)
        }
        ,
        s._setFramesFromCache = function(t, i) {
            if (void 0 === i && (i = !1),
            this._url && (t = this._url + "#" + t),
            t && e.framesMap[t]) {
                var s;
                return (s = e.framesMap[t])instanceof Array ? (this._frames = e.framesMap[t],
                this._count = this._frames.length) : (s.nodeRoot && (e.framesMap[t] = this._parseGraphicAnimationByData(s),
                s = e.framesMap[t]),
                this._frames = s.frames,
                this._count = this._frames.length,
                this._frameRateChanged || (this._interval = s.interval),
                this._labels = this._copyLabels(s.labels)),
                !0
            }
            return i && console.log("ani not found:", t),
            !1
        }
        ,
        s._copyLabels = function(t) {
            if (!t)
                return null;
            var e;
            e = {};
            var i;
            for (i in t)
                e[i] = _t.copyArray([], t[i]);
            return e
        }
        ,
        s._frameLoop = function() {
            this._style.visible && this._style.alpha > .01 && t.prototype._frameLoop.call(this)
        }
        ,
        s._displayToIndex = function(t) {
            this._frames && (this.graphics = this._frames[t])
        }
        ,
        s.clear = function() {
            this.stop(),
            this.graphics = null,
            this._frames = null,
            this._labels = null
        }
        ,
        s.loadImages = function(t, i) {
            return void 0 === i && (i = ""),
            this._url = "",
            this._setFramesFromCache(i) || (this.frames = e.framesMap[i] ? e.framesMap[i] : e.createFrames(t, i)),
            this
        }
        ,
        s.loadAtlas = function(t, s, n) {
            function r(i) {
                t === i && (a.frames = e.framesMap[n] ? e.framesMap[n] : e.createFrames(t, n),
                s && s.run())
            }
            void 0 === n && (n = ""),
            this._url = "";
            var a = this;
            return a._setFramesFromCache(n) || (oe.getAtlas(t) ? r(t) : i.loader.load(t, l.create(null, r, [t]), null, "atlas")),
            this
        }
        ,
        s.loadAnimation = function(t, e, s) {
            this._url = t;
            return this._actionName || (this._actionName = ""),
            this._setFramesFromCache("") ? (this._setFramesFromCache(this._actionName, !0),
            this.index = 0,
            e && e.run()) : !s || oe.getAtlas(s) ? this._loadAnimationData(t, e, s) : i.loader.load(s, l.create(this, this._loadAnimationData, [t, e, s]), null, "atlas"),
            this
        }
        ,
        s._loadAnimationData = function(t, s, n) {
            function r(i) {
                if (oe.getRes(i) && t === i) {
                    var n;
                    if (e.framesMap[t + "#"])
                        o._setFramesFromCache(a._actionName, !0),
                        a.index = 0,
                        a._checkResumePlaying();
                    else {
                        var r = o._parseGraphicAnimation(oe.getRes(t));
                        if (!r)
                            return;
                        var h, l = r.animationList, u = 0, c = l.length;
                        for (u = 0; u < c; u++)
                            n = l[u],
                            e.framesMap[t + "#" + n.name] = n,
                            h || (h = n);
                        h && (e.framesMap[t + "#"] = h,
                        o._setFramesFromCache(a._actionName, !0),
                        a.index = 0),
                        a._checkResumePlaying()
                    }
                    s && s.run()
                }
            }
            var a = this;
            if (!n || oe.getAtlas(n)) {
                var o = this;
                oe.getRes(t) ? r(t) : i.loader.load(t, l.create(null, r, [t]), null, "json"),
                oe.clearRes(t)
            } else
                console.warn("atlas load fail:" + n)
        }
        ,
        s._parseGraphicAnimation = function(t) {
            return ri.parseAnimationData(t)
        }
        ,
        s._parseGraphicAnimationByData = function(t) {
            return ri.parseAnimationByData(t)
        }
        ,
        r(0, s, "frames", function() {
            return this._frames
        }, function(t) {
            this._frames = t,
            t && (this._count = t.length,
            this._isPlaying ? this.play(this._index, this.loop, this._actionName) : this.index = this._index)
        }),
        r(0, s, "autoPlay", null, function(t) {
            t ? this.play() : this.stop()
        }),
        r(0, s, "source", null, function(t) {
            t.indexOf(".ani") > -1 ? this.loadAnimation(t) : t.indexOf(".json") > -1 || t.indexOf("als") > -1 || t.indexOf("atlas") > -1 ? this.loadAtlas(t) : this.loadImages(t.split(","))
        }),
        r(0, s, "autoAnimation", null, function(t) {
            this.play(0, !0, t, !1)
        }),
        e.createFrames = function(t, i) {
            var s, n, r = 0, a = 0;
            if ("string" == typeof t) {
                var h = oe.getAtlas(t);
                if (h && h.length)
                    for (s = [],
                    r = 0,
                    a = h.length; r < a; r++)
                        (n = new o.createGraphics).drawTexture(oe.getRes(h[r]), 0, 0),
                        s.push(n)
            } else if (t instanceof Array)
                for (s = [],
                r = 0,
                a = t.length; r < a; r++)
                    (n = new o.createGraphics).loadImage(t[r], 0, 0),
                    s.push(n);
            return i && (e.framesMap[i] = s),
            s
        }
        ,
        e.clearCache = function(t) {
            var i, s = e.framesMap, n = t + "#";
            for (i in s)
                i !== t && 0 != i.indexOf(n) || delete e.framesMap[i]
        }
        ,
        e.framesMap = {}
    }(Ue),
    function(t) {
        function e() {
            this._targetDic = null,
            this._animationData = null,
            this._animationNewFrames = null,
            e.__super.call(this),
            null == e._sortIndexFun && (e._sortIndexFun = O.sortByKey("index", !1, !0))
        }
        n(e, "laya.display.FrameAnimation", t);
        var i = e.prototype;
        return i._setUp = function(t, e) {
            this._labels = null,
            this._animationNewFrames = null,
            this._targetDic = t,
            this._animationData = e,
            this.interval = 1e3 / e.frameRate,
            e.parsed ? (this._count = e.count,
            this._labels = e.labels,
            this._animationNewFrames = e.animationNewFrames) : (this._animationNewFrames = [],
            this._calculateDatas()),
            e.parsed = !0,
            e.labels = this._labels,
            e.count = this._count,
            e.animationNewFrames = this._animationNewFrames
        }
        ,
        i.clear = function() {
            t.prototype.clear.call(this),
            this._targetDic = null,
            this._animationData = null
        }
        ,
        i._displayToIndex = function(t) {
            if (this._animationData) {
                t < 0 && (t = 0),
                t > this._count && (t = this._count);
                var e = this._animationData.nodes
                  , i = 0
                  , s = e.length;
                for (i = 0; i < s; i++)
                    this._displayNodeToFrame(e[i], t)
            }
        }
        ,
        i._displayNodeToFrame = function(t, e, i) {
            i || (i = this._targetDic);
            var s = i[t.target];
            if (s) {
                var n, r, a, o = t.frames, h = t.keys, l = 0, u = h.length;
                for (l = 0; l < u; l++)
                    a = (r = o[n = h[l]]).length > e ? r[e] : r[r.length - 1],
                    s[n] = a
            }
        }
        ,
        i._calculateDatas = function() {
            if (this._animationData) {
                var t, e = this._animationData.nodes, i = 0, s = e.length;
                for (this._count = 0,
                i = 0; i < s; i++)
                    t = e[i],
                    this._calculateNodeKeyFrames(t);
                this._count += 1
            }
        }
        ,
        i._calculateNodeKeyFrames = function(t) {
            var i, s, n = t.keyframes, r = t.target;
            t.frames || (t.frames = {}),
            t.keys ? t.keys.length = 0 : t.keys = [],
            t.initValues || (t.initValues = {});
            for (i in n)
                s = n[i],
                t.frames[i] || (t.frames[i] = []),
                this._targetDic && this._targetDic[r] && (t.initValues[i] = this._targetDic[r][i]),
                s.sort(e._sortIndexFun),
                t.keys.push(i),
                this._calculateNodePropFrames(s, t.frames[i], i, r)
        }
        ,
        i.resetToInitState = function() {
            if (this._targetDic && this._animationData) {
                var t, e, i = this._animationData.nodes, s = 0, n = i.length;
                for (s = 0; s < n; s++)
                    if (t = i[s],
                    e = t.initValues) {
                        var r = this._targetDic[t.target];
                        if (r) {
                            var a;
                            for (a in e)
                                r[a] = e[a]
                        }
                    }
            }
        }
        ,
        i._calculateNodePropFrames = function(t, e, i, s) {
            var n = 0
              , r = t.length - 1;
            for (e.length = t[r].index + 1,
            n = 0; n < r; n++)
                this._dealKeyFrame(t[n]),
                this._calculateFrameValues(t[n], t[n + 1], e);
            0 == r && (e[0] = t[0].value,
            this._animationNewFrames && (this._animationNewFrames[t[0].index] = !0)),
            this._dealKeyFrame(t[n])
        }
        ,
        i._dealKeyFrame = function(t) {
            t.label && "" != t.label && this.addLabel(t.label, t.index)
        }
        ,
        i._calculateFrameValues = function(t, e, i) {
            var s, n = 0, r = t.index, a = e.index, o = t.value, h = e.value - t.value, l = a - r;
            if (a > this._count && (this._count = a),
            t.tween)
                for (null == (s = at[t.tweenMethod]) && (s = at.linearNone),
                n = r; n < a; n++)
                    i[n] = s(n - r, o, h, l),
                    this._animationNewFrames && (this._animationNewFrames[n] = !0);
            else
                for (n = r; n < a; n++)
                    i[n] = o;
            this._animationNewFrames && (this._animationNewFrames[t.index] = !0,
            this._animationNewFrames[e.index] = !0),
            i[e.index] = e.value
        }
        ,
        e._sortIndexFun = null,
        e
    }(Ue))
      , ei = function(t) {
        function e(t, i, s, n) {
            this._params2dQuick1 = null,
            this._params2dQuick2 = null,
            this._shaderValueWidth = NaN,
            this._shaderValueHeight = NaN,
            e.__super.call(this, t, i, s, n)
        }
        n(e, "laya.webgl.shader.d2.Shader2X", t);
        var i = e.prototype;
        return i.upload2dQuick1 = function(t) {
            this.upload(t, this._params2dQuick1 || this._make2dQuick1())
        }
        ,
        i._make2dQuick1 = function() {
            if (!this._params2dQuick1) {
                this.activeResource(),
                this._params2dQuick1 = [];
                for (var t, e = this._params, i = 0, s = e.length; i < s; i++)
                    t = e[i],
                    (X.isFlash || "size" !== t.name && "position" !== t.name && "texcoord" !== t.name) && this._params2dQuick1.push(t)
            }
            return this._params2dQuick1
        }
        ,
        i.disposeResource = function() {
            t.prototype.disposeResource.call(this),
            this._params2dQuick1 = null,
            this._params2dQuick2 = null
        }
        ,
        i.upload2dQuick2 = function(t) {
            this.upload(t, this._params2dQuick2 || this._make2dQuick2())
        }
        ,
        i._make2dQuick2 = function() {
            if (!this._params2dQuick2) {
                this.activeResource(),
                this._params2dQuick2 = [];
                for (var t, e = this._params, i = 0, s = e.length; i < s; i++)
                    t = e[i],
                    (X.isFlash || "size" !== t.name) && this._params2dQuick2.push(t)
            }
            return this._params2dQuick2
        }
        ,
        e.create = function(t, i, s, n) {
            return new e(t,i,s,n)
        }
        ,
        e
    }(Ge)
      , ii = function(t) {
        function e(t, i) {
            this._recreateLock = !1,
            this._needReleaseAgain = !1,
            this._enableMerageInAtlas = !0,
            e.__super.call(this),
            this._init_(t, i)
        }
        n(e, "laya.resource.HTMLImage", ze);
        var i = e.prototype;
        return i._init_ = function(t, e) {
            this._src = t,
            this._source = new et.window.Image,
            e && (e.onload && (this.onload = e.onload),
            e.onerror && (this.onerror = e.onerror),
            e.onCreate && e.onCreate(this)),
            0 != t.indexOf("data:image") && (this._source.crossOrigin = ""),
            t && (this._source.src = t)
        }
        ,
        i.recreateResource = function() {
            var t = this;
            if ("" === this._src)
                throw new Error("src no null???");
            if (this._needReleaseAgain = !1,
            this._source) {
                if (this._recreateLock)
                    return;
                this.memorySize = this._w * this._h * 4,
                this._recreateLock = !1,
                this.completeCreate()
            } else {
                this._recreateLock = !0;
                var e = this;
                this._source = new et.window.Image,
                this._source.crossOrigin = "",
                this._source.onload = function() {
                    if (e._needReleaseAgain)
                        return e._needReleaseAgain = !1,
                        e._source.onload = null,
                        void (e._source = null);
                    e._source.onload = null,
                    e.memorySize = t._w * t._h * 4,
                    e._recreateLock = !1,
                    e.completeCreate()
                }
                ,
                this._source.src = this._src
            }
        }
        ,
        i.disposeResource = function() {
            this._recreateLock && (this._needReleaseAgain = !0),
            this._source && (this._source = null,
            this.memorySize = 0)
        }
        ,
        i.onresize = function() {
            this._w = this._source.width,
            this._h = this._source.height
        }
        ,
        r(0, i, "onload", null, function(t) {
            var e = this;
            this._onload = t,
            this._source && (this._source.onload = null != this._onload ? function() {
                e.onresize(),
                e._onload()
            }
            : null)
        }),
        r(0, i, "onerror", null, function(t) {
            var e = this;
            this._onerror = t,
            this._source && (this._source.onerror = null != this._onerror ? function() {
                e._onerror()
            }
            : null)
        }),
        r(0, i, "enableMerageInAtlas", function() {
            return this._enableMerageInAtlas
        }, function(t) {
            this._enableMerageInAtlas = t,
            X.isConchApp && this._source && (this._source.enableMerageInAtlas = t)
        }),
        e.create = function(t, i) {
            return new e(t,i)
        }
        ,
        e
    }()
      , si = function(t) {
        function e(t) {
            this._uint8Array = null,
            this._uint16Array = null,
            void 0 === t && (t = 35044),
            e.__super.call(this),
            this._bufferUsage = t,
            this._bufferType = 34963,
            X.isFlash || (this._buffer = new ArrayBuffer(8))
        }
        n(e, "laya.webgl.utils.IndexBuffer2D", We);
        var i = e.prototype;
        return i._checkArrayUse = function() {
            this._uint8Array && (this._uint8Array = new Uint8Array(this._buffer)),
            this._uint16Array && (this._uint16Array = new Uint16Array(this._buffer))
        }
        ,
        i.getUint8Array = function() {
            return this._uint8Array || (this._uint8Array = new Uint8Array(this._buffer))
        }
        ,
        i.getUint16Array = function() {
            return this._uint16Array || (this._uint16Array = new Uint16Array(this._buffer))
        }
        ,
        i.destory = function() {
            this._uint16Array = null,
            this._uint8Array = null,
            this._buffer = null
        }
        ,
        e.QuadrangleIB = null,
        e.create = function(t) {
            return void 0 === t && (t = 35044),
            new e(t)
        }
        ,
        e
    }()
      , ni = function(t) {
        function e(t, i) {
            this._floatArray32 = null,
            this._vertexStride = 0,
            e.__super.call(this),
            this._vertexStride = t,
            this._bufferUsage = i,
            this._bufferType = 34962,
            X.isFlash || (this._buffer = new ArrayBuffer(8)),
            this.getFloat32Array()
        }
        n(e, "laya.webgl.utils.VertexBuffer2D", t);
        var i = e.prototype;
        return i.getFloat32Array = function() {
            return this._floatArray32 || (this._floatArray32 = new Float32Array(this._buffer))
        }
        ,
        i.bind = function(t) {
            t && t._bind(),
            this._bind()
        }
        ,
        i.insertData = function(t, e) {
            this.getFloat32Array().set(t, e),
            this._upload = !0
        }
        ,
        i.bind_upload = function(t) {
            t._bind_upload() || t._bind(),
            this._bind_upload() || this._bind()
        }
        ,
        i._checkArrayUse = function() {
            this._floatArray32 && (this._floatArray32 = new Float32Array(this._buffer))
        }
        ,
        i.disposeResource = function() {
            t.prototype.disposeResource.call(this);
            var e = Ae._enableAtributes;
            if (!X.isConchWebGL)
                for (var i = 0; i < 10; i++)
                    qt.mainContext.disableVertexAttribArray(i),
                    e[i] = null
        }
        ,
        i.destory = function() {
            this._byteLength = 0,
            this._upload = !0,
            this._buffer = null,
            this._floatArray32 = null
        }
        ,
        r(0, i, "vertexStride", function() {
            return this._vertexStride
        }),
        e.create = function(t, i) {
            return void 0 === i && (i = 35048),
            new e(t,i)
        }
        ,
        e
    }(We)
      , ri = function(t) {
        function e() {
            this.animationList = null,
            this.animationDic = null,
            this._nodeList = null,
            this._nodeDefaultProps = null,
            this._gList = null,
            this._nodeIDAniDic = {},
            this._rootNode = null,
            this._nodeGDic = null,
            e.__super.call(this)
        }
        var i;
        n(e, "laya.utils.GraphicAnimation", t);
        var r = e.prototype;
        return r._parseNodeList = function(t) {
            this._nodeList || (this._nodeList = []),
            this._nodeDefaultProps[t.compId] = t.props,
            t.compId && this._nodeList.push(t.compId);
            var e = t.child;
            if (e) {
                var i = 0
                  , s = e.length;
                for (i = 0; i < s; i++)
                    this._parseNodeList(e[i])
            }
        }
        ,
        r._calGraphicData = function(t) {
            if (this._setUp(null, t),
            this._createGraphicData(),
            this._nodeIDAniDic) {
                var e;
                for (e in this._nodeIDAniDic)
                    this._nodeIDAniDic[e] = null
            }
        }
        ,
        r._createGraphicData = function() {
            var t = []
              , e = 0
              , i = this.count
              , s = this._animationNewFrames;
            s || (s = []);
            var n;
            for (e = 0; e < i; e++)
                !s[e] && n || (n = this._createFrameGraphic(e)),
                t.push(n);
            this._gList = t
        }
        ,
        r._createFrameGraphic = function(t) {
            var i = o.createGraphics();
            return e._rootMatrix || (e._rootMatrix = new k),
            this._updateNodeGraphic(this._rootNode, t, e._rootMatrix, i),
            i
        }
        ,
        r._updateNodeGraphic = function(t, e, i, s, n) {
            void 0 === n && (n = 1);
            var r, a = (r = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId])).alpha * n;
            if (!(a < .01)) {
                r.resultTransform || (r.resultTransform = k.create());
                var o;
                o = r.resultTransform,
                k.mul(r.transform, i, o);
                var h;
                r.skin && (h = this._getTextureByUrl(r.skin)) && (o._checkTransform() ? (s.drawTexture(h, 0, 0, r.width, r.height, o, a),
                r.resultTransform = null) : s.drawTexture(h, o.tx, o.ty, r.width, r.height, null, a));
                var l;
                if (l = t.child) {
                    var u = 0
                      , c = 0;
                    for (c = l.length,
                    u = 0; u < c; u++)
                        this._updateNodeGraphic(l[u], e, o, s, a)
                }
            }
        }
        ,
        r._updateNoChilds = function(t, e) {
            if (t.skin) {
                var i = this._getTextureByUrl(t.skin);
                if (i) {
                    var s = t.transform;
                    s._checkTransform();
                    !s.bTransform ? e.drawTexture(i, s.tx, s.ty, t.width, t.height, null, t.alpha) : e.drawTexture(i, 0, 0, t.width, t.height, s.clone(), t.alpha)
                }
            }
        }
        ,
        r._updateNodeGraphic2 = function(t, e, i) {
            var s;
            if (s = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId]),
            t.child) {
                var n = s.transform;
                n._checkTransform();
                var r = !1
                  , a = !1;
                a = (r = !n.bTransform) && (0 != n.tx || 0 != n.ty);
                var o = !1;
                (o = n.bTransform || 1 != s.alpha) && i.save(),
                1 != s.alpha && i.alpha(s.alpha),
                r ? a && i.translate(n.tx, n.ty) : i.transform(n.clone());
                var h;
                h = t.child;
                var l;
                if (s.skin && (l = this._getTextureByUrl(s.skin)) && i.drawTexture(l, 0, 0, s.width, s.height),
                h) {
                    var u = 0
                      , c = 0;
                    for (c = h.length,
                    u = 0; u < c; u++)
                        this._updateNodeGraphic2(h[u], e, i)
                }
                o ? i.restore() : r ? a && i.translate(-n.tx, -n.ty) : i.transform(n.clone().invert())
            } else
                this._updateNoChilds(s, i)
        }
        ,
        r._calculateNodeKeyFrames = function(e) {
            t.prototype._calculateNodeKeyFrames.call(this, e),
            this._nodeIDAniDic[e.target] = e
        }
        ,
        r.getNodeDataByID = function(t) {
            return this._nodeIDAniDic[t]
        }
        ,
        r._getParams = function(t, i, s, n) {
            var r = e._temParam;
            r.length = i.length;
            var a = 0
              , o = i.length;
            for (a = 0; a < o; a++)
                r[a] = this._getObjVar(t, i[a][0], s, i[a][1], n);
            return r
        }
        ,
        r._getObjVar = function(t, e, i, s, n) {
            if (t.hasOwnProperty(e)) {
                var r = t[e];
                return i >= r.length && (i = r.length - 1),
                t[e][i]
            }
            return n.hasOwnProperty(e) ? n[e] : s
        }
        ,
        r._getNodeGraphicData = function(t, s, n) {
            n || (n = i.create()),
            n.transform ? n.transform.identity() : n.transform = k.create();
            var r = this.getNodeDataByID(t);
            if (!r)
                return n;
            var a = r.frames
              , o = this._getParams(a, e._drawTextureCmd, s, this._nodeDefaultProps[t])
              , h = o[0]
              , l = NaN
              , u = NaN
              , c = o[5]
              , _ = o[6]
              , d = o[13]
              , f = o[14]
              , p = o[7]
              , g = o[8]
              , m = o[9]
              , v = o[11]
              , y = o[12];
            l = o[3],
            u = o[4],
            0 != l && 0 != u || (h = null),
            -1 == l && (l = 0),
            -1 == u && (u = 0);
            var x;
            n.skin = h,
            n.width = l,
            n.height = u,
            h && ((x = this._getTextureByUrl(h)) ? (l || (l = x.sourceWidth),
            u || (u = x.sourceHeight)) : console.warn("lost skin:", h, ",you may load pics first")),
            n.alpha = o[10];
            var b;
            b = n.transform,
            0 != d && (c = d * l),
            0 != f && (_ = f * u),
            0 == c && 0 == _ || b.translate(-c, -_);
            var T = null;
            if (m || 1 !== p || 1 !== g || v || y) {
                (T = e._tempMt).identity(),
                T.bTransform = !0;
                var w = .0174532922222222 * (m - v)
                  , S = .0174532922222222 * (m + y)
                  , C = Math.cos(S)
                  , A = Math.sin(S)
                  , M = Math.sin(w)
                  , E = Math.cos(w);
                T.a = p * C,
                T.b = p * A,
                T.c = -g * M,
                T.d = g * E,
                T.tx = T.ty = 0
            }
            return T && (b = k.mul(b, T, b)),
            b.translate(o[1], o[2]),
            n
        }
        ,
        r._getTextureByUrl = function(t) {
            return oe.getRes(t)
        }
        ,
        r.setAniData = function(t, i) {
            if (t.animations) {
                this._nodeDefaultProps = {},
                this._nodeGDic = {},
                this._nodeList && (this._nodeList.length = 0),
                this._rootNode = t,
                this._parseNodeList(t);
                var s, n = {}, r = [], a = t.animations, o = 0, h = a.length;
                for (o = 0; o < h; o++)
                    if (s = a[o],
                    this._labels = null,
                    (!i || i == s.name) && s) {
                        try {
                            this._calGraphicData(s)
                        } catch (t) {
                            console.warn("parse animation fail:" + s.name + ",empty animation created"),
                            this._gList = []
                        }
                        var l = {};
                        l.interval = 1e3 / s.frameRate,
                        l.frames = this._gList,
                        l.labels = this._labels,
                        l.name = s.name,
                        r.push(l),
                        n[s.name] = l
                    }
                this.animationList = r,
                this.animationDic = n
            }
            e._temParam.length = 0
        }
        ,
        r.parseByData = function(t) {
            var e, i;
            e = t.nodeRoot,
            i = t.aniO,
            delete t.nodeRoot,
            delete t.aniO,
            this._nodeDefaultProps = {},
            this._nodeGDic = {},
            this._nodeList && (this._nodeList.length = 0),
            this._rootNode = e,
            this._parseNodeList(e),
            this._labels = null;
            try {
                this._calGraphicData(i)
            } catch (t) {
                console.warn("parse animation fail:" + i.name + ",empty animation created"),
                this._gList = []
            }
            var s = t;
            return s.interval = 1e3 / i.frameRate,
            s.frames = this._gList,
            s.labels = this._labels,
            s.name = i.name,
            s
        }
        ,
        r.setUpAniData = function(t) {
            if (t.animations) {
                var e, i = {}, s = [], n = t.animations, r = 0, a = n.length;
                for (r = 0; r < a; r++)
                    if (e = n[r]) {
                        var o = {};
                        o.name = e.name,
                        o.aniO = e,
                        o.nodeRoot = t,
                        s.push(o),
                        i[e.name] = o
                    }
                this.animationList = s,
                this.animationDic = i
            }
        }
        ,
        r._clear = function() {
            if (this.animationList = null,
            this.animationDic = null,
            this._gList = null,
            this._nodeGDic) {
                var t, e;
                for (t in this._nodeGDic)
                    (e = this._nodeGDic[t]) && e.recover()
            }
            this._nodeGDic = null
        }
        ,
        e.parseAnimationByData = function(t) {
            e._I || (e._I = new e);
            var i;
            return i = e._I.parseByData(t),
            e._I._clear(),
            i
        }
        ,
        e.parseAnimationData = function(t) {
            e._I || (e._I = new e),
            e._I.setUpAniData(t);
            var i;
            return i = {},
            i.animationList = e._I.animationList,
            i.animationDic = e._I.animationDic,
            e._I._clear(),
            i
        }
        ,
        e._drawTextureCmd = [["skin", null], ["x", 0], ["y", 0], ["width", -1], ["height", -1], ["pivotX", 0], ["pivotY", 0], ["scaleX", 1], ["scaleY", 1], ["rotation", 0], ["alpha", 1], ["skewX", 0], ["skewY", 0], ["anchorX", 0], ["anchorY", 0]],
        e._temParam = [],
        e._I = null,
        e._rootMatrix = null,
        s(e, ["_tempMt", function() {
            return this._tempMt = new k
        }
        ]),
        e.__init$ = function() {
            i = function() {
                function t() {
                    this.skin = null,
                    this.transform = null,
                    this.resultTransform = null,
                    this.width = NaN,
                    this.height = NaN,
                    this.alpha = 1
                }
                n(t, "");
                return t.prototype.recover = function() {
                    this.skin = null,
                    this.width = 0,
                    this.height = 0,
                    this.alpha = 1,
                    this.transform && (this.transform.destroy(),
                    this.transform = null),
                    this.resultTransform && (this.resultTransform.destroy(),
                    this.resultTransform = null),
                    ot.recover("GraphicNode", this)
                }
                ,
                t.create = function() {
                    return ot.getItemByClass("GraphicNode", t)
                }
                ,
                t
            }()
        }
        ,
        e
    }(ti)
      , ai = function(t) {
        function e(t, i, s, n) {
            if (this._format = 0,
            this._mipmap = !1,
            this._allowMerageInAtlas = !1,
            this._enableMerageInAtlas = !1,
            this.repeat = !1,
            this._image = null,
            this.minFifter = 0,
            this.magFifter = 0,
            void 0 === s && (s = 6408),
            void 0 === n && (n = !0),
            e.__super.call(this, t, i),
            this._format = s,
            this._mipmap = n,
            this.repeat = !1,
            this.minFifter = -1,
            this.magFifter = -1,
            "string" == typeof t)
                this._url = t,
                this._src = t,
                this._image = new et.window.Image,
                i && (i.onload && (this.onload = i.onload),
                i.onerror && (this.onerror = i.onerror),
                i.onCreate && i.onCreate(this)),
                this._image.crossOrigin = t && 0 == t.indexOf("data:") ? null : "",
                t && (this._image.src = t);
            else if (t instanceof ArrayBuffer) {
                this._src = i,
                this._url = this._src;
                var r = new it(t);
                r.readUTFBytes(4),
                r.readUTFBytes(2),
                r.getInt16();
                r.endian = "bigEndian",
                this._w = r.getInt16(),
                this._h = r.getInt16();
                r.getInt16(),
                r.getInt16();
                this._image = new Uint8Array(t,r.pos),
                this._format = qt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL,
                mt.enabled && this._w < mt.atlasLimitWidth && this._h < mt.atlasLimitHeight ? this._allowMerageInAtlas = !0 : this._allowMerageInAtlas = !1
            } else
                this._src = i,
                this._url = this._src,
                this._image = t.source || t,
                this.onresize();
            this._$5__enableMerageInAtlas = !0
        }
        n(e, "laya.webgl.resource.WebGLImage", ii);
        var s = e.prototype;
        return i.imps(s, {
            "laya.webgl.resource.IMergeAtlasBitmap": !0
        }),
        s._init_ = function(t, e) {}
        ,
        s._createWebGlTexture = function() {
            if (!this._image)
                throw "create GLTextur err:no data:" + this._image;
            var t = qt.mainContext
              , e = this._source = t.createTexture()
              , i = Qt.curBindTexTarget
              , s = Qt.curBindTexValue;
            if (Qt.bindTexture(t, 3553, e),
            X.isConchWebGL)
                switch (this._format) {
                case 6408:
                    t.texImage2DEx(!0, 3553, 0, this._format, 6408, 5121, this._image);
                    break;
                case qt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL:
                    t.compressedTexImage2D(3553, 0, this._format, this._w, this._h, 0, this._image)
                }
            else {
                switch (t.pixelStorei(37441, !0),
                this._format) {
                case 6408:
                    t.texImage2D(3553, 0, this._format, 6408, 5121, this._image);
                    break;
                case qt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL:
                    t.compressedTexImage2D(3553, 0, this._format, this._w, this._h, 0, this._image)
                }
                t.pixelStorei(37441, !1)
            }
            var n = this.minFifter
              , r = this.magFifter
              , a = this.repeat ? 10497 : 33071
              , o = D.isPOT(this._w, this._h);
            o ? (this.mipmap ? -1 !== n || (n = 9987) : -1 !== n || (n = 9729),
            -1 !== r || (r = 9729),
            t.texParameteri(3553, 10241, n),
            t.texParameteri(3553, 10240, r),
            t.texParameteri(3553, 10242, a),
            t.texParameteri(3553, 10243, a),
            this.mipmap && t.generateMipmap(3553)) : (-1 !== n || (n = 9729),
            -1 !== r || (r = 9729),
            t.texParameteri(3553, 10241, n),
            t.texParameteri(3553, 10240, r),
            t.texParameteri(3553, 10242, 33071),
            t.texParameteri(3553, 10243, 33071)),
            i && s && Qt.bindTexture(t, i, s),
            this._image.onload = null,
            this._image = null,
            o && this.mipmap ? this.memorySize = this._w * this._h * 4 * (1 + 1 / 3) : this.memorySize = this._w * this._h * 4,
            this._recreateLock = !1
        }
        ,
        s.recreateResource = function() {
            var t = this;
            if (null != this._src && "" !== this._src)
                if (this._needReleaseAgain = !1,
                this._image) {
                    if (this._recreateLock)
                        return;
                    this._allowMerageInAtlas && this._$5__enableMerageInAtlas ? (this.memorySize = 0,
                    this._recreateLock = !1) : this._createWebGlTexture(),
                    this.completeCreate()
                } else {
                    this._recreateLock = !0;
                    var e = this;
                    this._image = new et.window.Image,
                    this._image.crossOrigin = 0 == this._src.indexOf("data:") ? null : "",
                    this._image.onload = function() {
                        if (e._needReleaseAgain)
                            return e._needReleaseAgain = !1,
                            e._image.onload = null,
                            void (e._image = null);
                        e._allowMerageInAtlas && e._enableMerageInAtlas ? (t.memorySize = 0,
                        t._recreateLock = !1) : e._createWebGlTexture(),
                        e.completeCreate()
                    }
                    ,
                    this._image.src = this._src
                }
        }
        ,
        s.disposeResource = function() {
            this._recreateLock && (this._needReleaseAgain = !0),
            this._source && (qt.mainContext.deleteTexture(this._source),
            this._source = null,
            this._image = null,
            this.memorySize = 0)
        }
        ,
        s.onresize = function() {
            this._w = this._image.width,
            this._h = this._image.height,
            mt.enabled && this._w < mt.atlasLimitWidth && this._h < mt.atlasLimitHeight ? this._allowMerageInAtlas = !0 : this._allowMerageInAtlas = !1
        }
        ,
        s.clearAtlasSource = function() {
            this._image = null
        }
        ,
        r(0, s, "format", function() {
            return this._format
        }),
        r(0, s, "enableMerageInAtlas", function() {
            return this._$5__enableMerageInAtlas
        }, function(t) {
            this._$5__enableMerageInAtlas = t
        }),
        r(0, s, "mipmap", function() {
            return this._mipmap
        }),
        r(0, s, "allowMerageInAtlas", function() {
            return this._allowMerageInAtlas
        }),
        r(0, s, "atlasSource", function() {
            return this._image
        }),
        r(0, s, "onload", null, function(t) {
            var e = this;
            this._onload = t,
            this._image && (this._image.onload = null != this._onload ? function() {
                e.onresize(),
                e._onload()
            }
            : null)
        }),
        r(0, s, "onerror", null, function(t) {
            var e = this;
            this._onerror = t,
            this._image && (this._image.onerror = null != this._onerror ? function() {
                e._onerror()
            }
            : null)
        }),
        e
    }();
    i.__init([ee, h, Ht, X, et, pe, b, ut, W, ri, gt]),
    new f
}(window, document, Laya),
"function" == typeof define && define.amd && define("laya.core", ["require", "exports"], function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    for (var i in Laya) {
        var s = Laya[i];
        s && s.__isclass && (e[i] = s)
    }
});
