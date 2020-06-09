!
function t(e, i, r) {
    function n(s, a) {
        if (!i[s]) {
            if (!e[s]) {
                var h = "function" == typeof require && require;
                if (!a && h) return h(s, !0);
                if (o) return o(s, !0);
                var l = new Error("Cannot find module '" + s + "'");
                throw l.code = "MODULE_NOT_FOUND",
                l
            }
            var u = i[s] = {
                exports: {}
            };
            e[s][0].call(u.exports,
            function(t) {
                var i = e[s][1][t];
                return n(i ? i: t)
            },
            u, u.exports, t, e, i, r)
        }
        return i[s].exports
    }
    for (var o = "function" == typeof require && require,
    s = 0; s < r.length; s++) n(r[s]);
    return n
} ({
    1 : [function(t, e, i) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
                "default": t
            }
        }
        var n = t("./fssbuilder"),
        o = r(n),
        s = t("./mousewheel"),
        a = r(s),
        h = t("./contact"),
        l = r(h); (0, l["default"])(),
        (0, a["default"])(),
        (0, o["default"])(document.getElementById("background"))
    },
    {
        "./contact": 2,
        "./fssbuilder": 4,
        "./mousewheel": 6
    }],
    2 : [function(t, e, i) {
        "use strict";
        function r() {
            document.getElementsByClassName("accc")[0].innerHTML = [].map.call("{tyA{tytpgu/dpn",
            function(t) {
                return String.fromCharCode(t.charCodeAt() - 1)
            }).join("")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i["default"] = r,
        e.exports = i["default"]
    },
    {}],
    3 : [function(t, e, i) {
        "use strict";
        var r = {
            FRONT: 0,
            BACK: 1,
            DOUBLE: 2,
            SVGNS: "http://www.w3.org/2000/svg"
        };
        r.Array = "function" == typeof Float32Array ? Float32Array: Array,
        r.Utils = {
            isNumber: function(t) {
                return ! isNaN(parseFloat(t)) && isFinite(t)
            }
        },
        function() {
            for (var t = 0,
            e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
                var r = (new Date).getTime(),
                n = Math.max(0, 16 - (r - t)),
                o = window.setTimeout(function() {
                    e(r + n)
                },
                n);
                return t = r + n,
                o
            }),
            window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            })
        } (),
        Math.PIM2 = 2 * Math.PI,
        Math.PID2 = Math.PI / 2,
        Math.randomInRange = function(t, e) {
            return t + (e - t) * Math.random()
        },
        Math.clamp = function(t, e, i) {
            return t = Math.max(t, e),
            t = Math.min(t, i)
        },
        r.Vector3 = {
            create: function(t, e, i) {
                var n = new r.Array(3);
                return this.set(n, t, e, i),
                n
            },
            clone: function(t) {
                var e = this.create();
                return this.copy(e, t),
                e
            },
            set: function(t, e, i, r) {
                return t[0] = e || 0,
                t[1] = i || 0,
                t[2] = r || 0,
                this
            },
            setX: function(t, e) {
                return t[0] = e || 0,
                this
            },
            setY: function(t, e) {
                return t[1] = e || 0,
                this
            },
            setZ: function(t, e) {
                return t[2] = e || 0,
                this
            },
            copy: function(t, e) {
                return t[0] = e[0],
                t[1] = e[1],
                t[2] = e[2],
                this
            },
            add: function(t, e) {
                return t[0] += e[0],
                t[1] += e[1],
                t[2] += e[2],
                this
            },
            addVectors: function(t, e, i) {
                return t[0] = e[0] + i[0],
                t[1] = e[1] + i[1],
                t[2] = e[2] + i[2],
                this
            },
            addScalar: function(t, e) {
                return t[0] += e,
                t[1] += e,
                t[2] += e,
                this
            },
            subtract: function(t, e) {
                return t[0] -= e[0],
                t[1] -= e[1],
                t[2] -= e[2],
                this
            },
            subtractVectors: function(t, e, i) {
                return t[0] = e[0] - i[0],
                t[1] = e[1] - i[1],
                t[2] = e[2] - i[2],
                this
            },
            subtractScalar: function(t, e) {
                return t[0] -= e,
                t[1] -= e,
                t[2] -= e,
                this
            },
            multiply: function(t, e) {
                return t[0] *= e[0],
                t[1] *= e[1],
                t[2] *= e[2],
                this
            },
            multiplyVectors: function(t, e, i) {
                return t[0] = e[0] * i[0],
                t[1] = e[1] * i[1],
                t[2] = e[2] * i[2],
                this
            },
            multiplyScalar: function(t, e) {
                return t[0] *= e,
                t[1] *= e,
                t[2] *= e,
                this
            },
            divide: function(t, e) {
                return t[0] /= e[0],
                t[1] /= e[1],
                t[2] /= e[2],
                this
            },
            divideVectors: function(t, e, i) {
                return t[0] = e[0] / i[0],
                t[1] = e[1] / i[1],
                t[2] = e[2] / i[2],
                this
            },
            divideScalar: function(t, e) {
                return 0 !== e ? (t[0] /= e, t[1] /= e, t[2] /= e) : (t[0] = 0, t[1] = 0, t[2] = 0),
                this
            },
            cross: function(t, e) {
                var i = t[0],
                r = t[1],
                n = t[2];
                return t[0] = r * e[2] - n * e[1],
                t[1] = n * e[0] - i * e[2],
                t[2] = i * e[1] - r * e[0],
                this
            },
            crossVectors: function(t, e, i) {
                return t[0] = e[1] * i[2] - e[2] * i[1],
                t[1] = e[2] * i[0] - e[0] * i[2],
                t[2] = e[0] * i[1] - e[1] * i[0],
                this
            },
            min: function(t, e) {
                return t[0] < e && (t[0] = e),
                t[1] < e && (t[1] = e),
                t[2] < e && (t[2] = e),
                this
            },
            max: function(t, e) {
                return t[0] > e && (t[0] = e),
                t[1] > e && (t[1] = e),
                t[2] > e && (t[2] = e),
                this
            },
            clamp: function(t, e, i) {
                return this.min(t, e),
                this.max(t, i),
                this
            },
            limit: function(t, e, i) {
                var r = this.length(t);
                return null !== e && e > r ? this.setLength(t, e) : null !== i && r > i && this.setLength(t, i),
                this
            },
            dot: function(t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
            },
            normalise: function(t) {
                return this.divideScalar(t, this.length(t))
            },
            negate: function(t) {
                return this.multiplyScalar(t, -1)
            },
            distanceSquared: function(t, e) {
                var i = t[0] - e[0],
                r = t[1] - e[1],
                n = t[2] - e[2];
                return i * i + r * r + n * n
            },
            distance: function(t, e) {
                return Math.sqrt(this.distanceSquared(t, e))
            },
            lengthSquared: function(t) {
                return t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
            },
            length: function(t) {
                return Math.sqrt(this.lengthSquared(t))
            },
            setLength: function(t, e) {
                var i = this.length(t);
                return 0 !== i && e !== i && this.multiplyScalar(t, e / i),
                this
            }
        },
        r.Vector4 = {
            create: function(t, e, i, n) {
                var o = new r.Array(4);
                return this.set(o, t, e, i),
                o
            },
            set: function(t, e, i, r, n) {
                return t[0] = e || 0,
                t[1] = i || 0,
                t[2] = r || 0,
                t[3] = n || 0,
                this
            },
            setX: function(t, e) {
                return t[0] = e || 0,
                this
            },
            setY: function(t, e) {
                return t[1] = e || 0,
                this
            },
            setZ: function(t, e) {
                return t[2] = e || 0,
                this
            },
            setW: function(t, e) {
                return t[3] = e || 0,
                this
            },
            add: function(t, e) {
                return t[0] += e[0],
                t[1] += e[1],
                t[2] += e[2],
                t[3] += e[3],
                this
            },
            multiplyVectors: function(t, e, i) {
                return t[0] = e[0] * i[0],
                t[1] = e[1] * i[1],
                t[2] = e[2] * i[2],
                t[3] = e[3] * i[3],
                this
            },
            multiplyScalar: function(t, e) {
                return t[0] *= e,
                t[1] *= e,
                t[2] *= e,
                t[3] *= e,
                this
            },
            min: function(t, e) {
                return t[0] < e && (t[0] = e),
                t[1] < e && (t[1] = e),
                t[2] < e && (t[2] = e),
                t[3] < e && (t[3] = e),
                this
            },
            max: function(t, e) {
                return t[0] > e && (t[0] = e),
                t[1] > e && (t[1] = e),
                t[2] > e && (t[2] = e),
                t[3] > e && (t[3] = e),
                this
            },
            clamp: function(t, e, i) {
                return this.min(t, e),
                this.max(t, i),
                this
            }
        },
        r.Color = function(t, e) {
            this.rgba = r.Vector4.create(),
            this.hex = t || "#000000",
            this.opacity = r.Utils.isNumber(e) ? e: 1,
            this.set(this.hex, this.opacity)
        },
        r.Color.prototype = {
            set: function(t, e) {
                t = t.replace("#", "");
                var i = t.length / 3;
                return this.rgba[0] = parseInt(t.substring(0 * i, 1 * i), 16) / 255,
                this.rgba[1] = parseInt(t.substring(1 * i, 2 * i), 16) / 255,
                this.rgba[2] = parseInt(t.substring(2 * i, 3 * i), 16) / 255,
                this.rgba[3] = r.Utils.isNumber(e) ? e: this.rgba[3],
                this
            },
            hexify: function(t) {
                var e = Math.ceil(255 * t).toString(16);
                return 1 === e.length && (e = "0" + e),
                e
            },
            format: function() {
                var t = this.hexify(this.rgba[0]),
                e = this.hexify(this.rgba[1]),
                i = this.hexify(this.rgba[2]);
                return this.hex = "#" + t + e + i,
                this.hex
            }
        },
        r.Object = function() {
            this.position = r.Vector3.create()
        },
        r.Object.prototype = {
            setPosition: function(t, e, i) {
                return r.Vector3.set(this.position, t, e, i),
                this
            }
        },
        r.Light = function(t, e) {
            r.Object.call(this),
            this.ambient = new r.Color(t || "#FFFFFF"),
            this.diffuse = new r.Color(e || "#FFFFFF"),
            this.ray = r.Vector3.create()
        },
        r.Light.prototype = Object.create(r.Object.prototype),
        r.Vertex = function(t, e, i) {
            this.position = r.Vector3.create(t, e, i)
        },
        r.Vertex.prototype = {
            setPosition: function(t, e, i) {
                return r.Vector3.set(this.position, t, e, i),
                this
            }
        },
        r.Triangle = function(t, e, i) {
            this.a = t || new r.Vertex,
            this.b = e || new r.Vertex,
            this.c = i || new r.Vertex,
            this.vertices = [this.a, this.b, this.c],
            this.u = r.Vector3.create(),
            this.v = r.Vector3.create(),
            this.centroid = r.Vector3.create(),
            this.normal = r.Vector3.create(),
            this.color = new r.Color,
            this.polygon = document.createElementNS(r.SVGNS, "polygon"),
            this.polygon.setAttributeNS(null, "stroke-linejoin", "round"),
            this.polygon.setAttributeNS(null, "stroke-miterlimit", "1"),
            this.polygon.setAttributeNS(null, "stroke-width", "1"),
            this.computeCentroid(),
            this.computeNormal()
        },
        r.Triangle.prototype = {
            computeCentroid: function() {
                return this.centroid[0] = this.a.position[0] + this.b.position[0] + this.c.position[0],
                this.centroid[1] = this.a.position[1] + this.b.position[1] + this.c.position[1],
                this.centroid[2] = this.a.position[2] + this.b.position[2] + this.c.position[2],
                r.Vector3.divideScalar(this.centroid, 3),
                this
            },
            computeNormal: function() {
                return r.Vector3.subtractVectors(this.u, this.b.position, this.a.position),
                r.Vector3.subtractVectors(this.v, this.c.position, this.a.position),
                r.Vector3.crossVectors(this.normal, this.u, this.v),
                r.Vector3.normalise(this.normal),
                this
            }
        },
        r.Geometry = function() {
            this.vertices = [],
            this.triangles = [],
            this.dirty = !1
        },
        r.Geometry.prototype = {
            update: function() {
                if (this.dirty) {
                    var t, e;
                    for (t = this.triangles.length - 1; t >= 0; t--) e = this.triangles[t],
                    e.computeCentroid(),
                    e.computeNormal();
                    this.dirty = !1
                }
                return this
            }
        },
        r.Plane = function(t, e, i, n) {
            r.Geometry.call(this),
            this.width = t || 100,
            this.height = e || 100,
            this.segments = i || 4,
            this.slices = n || 4,
            this.segmentWidth = this.width / this.segments,
            this.sliceHeight = this.height / this.slices;
            var o, s, a, h, l, u, c, f, d, m = [],
            g = this.width * -.5,
            p = .5 * this.height;
            for (o = 0; o <= this.segments; o++) for (m.push([]), s = 0; s <= this.slices; s++) d = new r.Vertex(g + o * this.segmentWidth, p - s * this.sliceHeight),
            m[o].push(d),
            this.vertices.push(d);
            for (o = 0; o < this.segments; o++) for (s = 0; s < this.slices; s++) a = m[o + 0][s + 0],
            h = m[o + 0][s + 1],
            l = m[o + 1][s + 0],
            u = m[o + 1][s + 1],
            c = new r.Triangle(a, h, l),
            f = new r.Triangle(l, h, u),
            this.triangles.push(c, f)
        },
        r.Plane.prototype = Object.create(r.Geometry.prototype),
        r.Material = function(t, e) {
            this.ambient = new r.Color(t || "#444444"),
            this.diffuse = new r.Color(e || "#FFFFFF"),
            this.slave = new r.Color
        },
        r.Mesh = function(t, e) {
            r.Object.call(this),
            this.geometry = t || new r.Geometry,
            this.material = e || new r.Material,
            this.side = r.FRONT,
            this.visible = !0
        },
        r.Mesh.prototype = Object.create(r.Object.prototype),
        r.Mesh.prototype.update = function(t, e) {
            var i, n, o, s, a;
            if (this.geometry.update(), e) for (i = this.geometry.triangles.length - 1; i >= 0; i--) {
                for (n = this.geometry.triangles[i], r.Vector4.set(n.color.rgba), o = t.length - 1; o >= 0; o--) s = t[o],
                r.Vector3.subtractVectors(s.ray, s.position, n.centroid),
                r.Vector3.normalise(s.ray),
                a = r.Vector3.dot(n.normal, s.ray),
                this.side === r.FRONT ? a = Math.max(a, 0) : this.side === r.BACK ? a = Math.abs(Math.min(a, 0)) : this.side === r.DOUBLE && (a = Math.max(Math.abs(a), 0)),
                r.Vector4.multiplyVectors(this.material.slave.rgba, this.material.ambient.rgba, s.ambient.rgba),
                r.Vector4.add(n.color.rgba, this.material.slave.rgba),
                r.Vector4.multiplyVectors(this.material.slave.rgba, this.material.diffuse.rgba, s.diffuse.rgba),
                r.Vector4.multiplyScalar(this.material.slave.rgba, a),
                r.Vector4.add(n.color.rgba, this.material.slave.rgba);
                r.Vector4.clamp(n.color.rgba, 0, 1)
            }
            return this
        },
        r.Scene = function() {
            this.meshes = [],
            this.lights = []
        },
        r.Scene.prototype = {
            add: function(t) {
                return t instanceof r.Mesh && !~this.meshes.indexOf(t) ? this.meshes.push(t) : t instanceof r.Light && !~this.lights.indexOf(t) && this.lights.push(t),
                this
            },
            remove: function(t) {
                return t instanceof r.Mesh && ~this.meshes.indexOf(t) ? this.meshes.splice(this.meshes.indexOf(t), 1) : t instanceof r.Light && ~this.lights.indexOf(t) && this.lights.splice(this.lights.indexOf(t), 1),
                this
            }
        },
        r.Renderer = function() {
            this.width = 0,
            this.height = 0,
            this.halfWidth = 0,
            this.halfHeight = 0
        },
        r.Renderer.prototype = {
            setSize: function(t, e) {
                return this.width !== t || this.height !== e ? (this.width = t, this.height = e, this.halfWidth = .5 * this.width, this.halfHeight = .5 * this.height, this) : void 0
            },
            clear: function() {
                return this
            },
            render: function(t) {
                return this
            }
        },
        r.CanvasRenderer = function() {
            r.Renderer.call(this),
            this.element = document.createElement("canvas"),
            this.element.style.display = "block",
            this.context = this.element.getContext("2d"),
            this.setSize(this.element.width, this.element.height)
        },
        r.CanvasRenderer.prototype = Object.create(r.Renderer.prototype),
        r.CanvasRenderer.prototype.setSize = function(t, e) {
            return r.Renderer.prototype.setSize.call(this, t, e),
            this.element.width = t,
            this.element.height = e,
            this.context.setTransform(1, 0, 0, -1, this.halfWidth, this.halfHeight),

            this
        },
        r.CanvasRenderer.prototype.clear = function() {
            return r.Renderer.prototype.clear.call(this),
            this.context.clearRect( - this.halfWidth, -this.halfHeight, this.width, this.height),
            this
        },
        r.CanvasRenderer.prototype.render = function(t) {
            r.Renderer.prototype.render.call(this, t);
            var e, i, n, o, s;
            for (this.clear(), this.context.lineJoin = "round", this.context.lineWidth = 1, e = t.meshes.length - 1; e >= 0; e--) if (i = t.meshes[e], i.visible) for (i.update(t.lights, !0), n = i.geometry.triangles.length - 1; n >= 0; n--) o = i.geometry.triangles[n],
            s = o.color.format(),
            this.context.beginPath(),
            this.context.moveTo(o.a.position[0], o.a.position[1]),
            this.context.lineTo(o.b.position[0], o.b.position[1]),
            this.context.lineTo(o.c.position[0], o.c.position[1]),
            this.context.closePath(),
            this.context.strokeStyle = s,
            this.context.fillStyle = s,
            this.context.stroke(),
            this.context.fill();
            return this
        },
        r.WebGLRenderer = function() {
            r.Renderer.call(this),
            this.element = document.createElement("canvas"),
            this.element.style.display = "block",
            this.vertices = null,
            this.lights = null;
            var t = {
                preserveDrawingBuffer: !1,
                premultipliedAlpha: !0,
                antialias: !0,
                stencil: !0,
                alpha: !0
            };
            return this.gl = this.getContext(this.element, t),
            this.unsupported = !this.gl,
            this.unsupported ? "WebGL is not supported by your browser.": (this.gl.clearColor(0, 0, 0, 0), this.gl.enable(this.gl.DEPTH_TEST), this.setSize(this.element.width, this.element.height), void 0)
        },
        r.WebGLRenderer.prototype = Object.create(r.Renderer.prototype),
        r.WebGLRenderer.prototype.getContext = function(t, e) {
            var i = !1;
            try {
                if (! (i = t.getContext("experimental-webgl", e))) throw "Error creating WebGL context."
            } catch(r) {
                console.error(r)
            }
            return i
        },
        r.WebGLRenderer.prototype.setSize = function(t, e) {
            return r.Renderer.prototype.setSize.call(this, t, e),
            this.unsupported ? void 0 : (this.element.width = t, this.element.height = e, this.gl.viewport(0, 0, t, e), this)
        },
        r.WebGLRenderer.prototype.clear = function() {
            return r.Renderer.prototype.clear.call(this),
            this.unsupported ? void 0 : (this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT), this)
        },
        r.WebGLRenderer.prototype.render = function(t) {
            if (r.Renderer.prototype.render.call(this, t), !this.unsupported) {
                var e, i, n, o, s, a, h, l, u, c, f, d, m, g, p, b = !1,
                v = t.lights.length,
                y = 0;
                if (this.clear(), this.lights !== v) {
                    if (this.lights = v, !(this.lights > 0)) return;
                    this.buildProgram(v)
                }
                if (this.program) {
                    for (e = t.meshes.length - 1; e >= 0; e--) i = t.meshes[e],
                    i.geometry.dirty && (b = !0),
                    i.update(t.lights, !1),
                    y += 3 * i.geometry.triangles.length;
                    if (b || this.vertices !== y) {
                        this.vertices = y;
                        for (l in this.program.attributes) {
                            for (c = this.program.attributes[l], c.data = new r.Array(y * c.size), m = 0, e = t.meshes.length - 1; e >= 0; e--) for (i = t.meshes[e], n = 0, o = i.geometry.triangles.length; o > n; n++) for (s = i.geometry.triangles[n], g = 0, p = s.vertices.length; p > g; g++) {

                                switch (vertex = s.vertices[g], l) {
                                case "side":
                                    this.setBufferData(m, c, i.side);
                                    break;
                                case "position":
                                    this.setBufferData(m, c, vertex.position);
                                    break;
                                case "centroid":
                                    this.setBufferData(m, c, s.centroid);
                                    break;
                                case "normal":
                                    this.setBufferData(m, c, s.normal);
                                    break;
                                case "ambient":
                                    this.setBufferData(m, c, i.material.ambient.rgba);
                                    break;
                                case "diffuse":
                                    this.setBufferData(m, c, i.material.diffuse.rgba)
                                }
                                m++
                            }
                            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, c.buffer),
                            this.gl.bufferData(this.gl.ARRAY_BUFFER, c.data, this.gl.DYNAMIC_DRAW),
                            this.gl.enableVertexAttribArray(c.location),
                            this.gl.vertexAttribPointer(c.location, c.size, this.gl.FLOAT, !1, 0, 0)
                        }
                    }
                    for (this.setBufferData(0, this.program.uniforms.resolution, [this.width, this.height, this.width]), a = v - 1; a >= 0; a--) h = t.lights[a],
                    this.setBufferData(a, this.program.uniforms.lightPosition, h.position),
                    this.setBufferData(a, this.program.uniforms.lightAmbient, h.ambient.rgba),
                    this.setBufferData(a, this.program.uniforms.lightDiffuse, h.diffuse.rgba);
                    for (u in this.program.uniforms) switch (c = this.program.uniforms[u], d = c.location, f = c.data, c.structure) {
                    case "3f":
                        this.gl.uniform3f(d, f[0], f[1], f[2]);
                        break;
                    case "3fv":
                        this.gl.uniform3fv(d, f);
                        break;
                    case "4fv":
                        this.gl.uniform4fv(d, f)
                    }
                }
                return this.gl.drawArrays(this.gl.TRIANGLES, 0, this.vertices),
                this
            }
        },
        r.WebGLRenderer.prototype.setBufferData = function(t, e, i) {
            if (r.Utils.isNumber(i)) e.data[t * e.size] = i;
            else for (var n = i.length - 1; n >= 0; n--) e.data[t * e.size + n] = i[n]
        },
        r.WebGLRenderer.prototype.buildProgram = function(t) {
            if (!this.unsupported) {
                var e = r.WebGLRenderer.VS(t),
                i = r.WebGLRenderer.FS(t),
                n = e + i;
                if (!this.program || this.program.code !== n) {
                    var o = this.gl.createProgram(),
                    s = this.buildShader(this.gl.VERTEX_SHADER, e),
                    a = this.buildShader(this.gl.FRAGMENT_SHADER, i);
                    if (this.gl.attachShader(o, s), this.gl.attachShader(o, a), this.gl.linkProgram(o), !this.gl.getProgramParameter(o, this.gl.LINK_STATUS)) {
                        var h = this.gl.getError(),
                        l = this.gl.getProgramParameter(o, this.gl.VALIDATE_STATUS);
                        return console.error("Could not initialise shader.\nVALIDATE_STATUS: " + l + "\nERROR: " + h),
                        null
                    }
                    return this.gl.deleteShader(a),
                    this.gl.deleteShader(s),
                    o.code = n,
                    o.attributes = {
                        side: this.buildBuffer(o, "attribute", "aSide", 1, "f"),
                        position: this.buildBuffer(o, "attribute", "aPosition", 3, "v3"),
                        centroid: this.buildBuffer(o, "attribute", "aCentroid", 3, "v3"),
                        normal: this.buildBuffer(o, "attribute", "aNormal", 3, "v3"),
                        ambient: this.buildBuffer(o, "attribute", "aAmbient", 4, "v4"),
                        diffuse: this.buildBuffer(o, "attribute", "aDiffuse", 4, "v4")
                    },
                    o.uniforms = {
                        resolution: this.buildBuffer(o, "uniform", "uResolution", 3, "3f", 1),
                        lightPosition: this.buildBuffer(o, "uniform", "uLightPosition", 3, "3fv", t),
                        lightAmbient: this.buildBuffer(o, "uniform", "uLightAmbient", 4, "4fv", t),
                        lightDiffuse: this.buildBuffer(o, "uniform", "uLightDiffuse", 4, "4fv", t)
                    },
                    this.program = o,
                    this.gl.useProgram(this.program),
                    o
                }
            }
        },
        r.WebGLRenderer.prototype.buildShader = function(t, e) {
            if (!this.unsupported) {
                var i = this.gl.createShader(t);
                return this.gl.shaderSource(i, e),
                this.gl.compileShader(i),
                this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS) ? i: (console.error(this.gl.getShaderInfoLog(i)), null)
            }
        },
        r.WebGLRenderer.prototype.buildBuffer = function(t, e, i, n, o, s) {
            var a = {
                buffer: this.gl.createBuffer(),
                size: n,
                structure: o,
                data: null
            };
            switch (e) {
            case "attribute":
                a.location = this.gl.getAttribLocation(t, i);
                break;
            case "uniform":
                a.location = this.gl.getUniformLocation(t, i)
            }
            return s && (a.data = new r.Array(s * n)),
            a
        },
        r.WebGLRenderer.VS = function(t) {
            var e = ["precision mediump float;", "#define LIGHTS " + t, "attribute float aSide;", "attribute vec3 aPosition;", "attribute vec3 aCentroid;", "attribute vec3 aNormal;", "attribute vec4 aAmbient;", "attribute vec4 aDiffuse;", "uniform vec3 uResolution;", "uniform vec3 uLightPosition[LIGHTS];", "uniform vec4 uLightAmbient[LIGHTS];", "uniform vec4 uLightDiffuse[LIGHTS];", "varying vec4 vColor;", "void main() {", "vColor = vec4(0.0);", "vec3 position = aPosition / uResolution * 2.0;", "for (int i = 0; i < LIGHTS; i++) {", "vec3 lightPosition = uLightPosition[i];", "vec4 lightAmbient = uLightAmbient[i];", "vec4 lightDiffuse = uLightDiffuse[i];", "vec3 ray = normalize(lightPosition - aCentroid);", "float illuminance = dot(aNormal, ray);", "if (aSide == 0.0) {", "illuminance = max(illuminance, 0.0);", "} else if (aSide == 1.0) {", "illuminance = abs(min(illuminance, 0.0));", "} else if (aSide == 2.0) {", "illuminance = max(abs(illuminance), 0.0);", "}", "vColor += aAmbient * lightAmbient;", "vColor += aDiffuse * lightDiffuse * illuminance;", "}", "vColor = clamp(vColor, 0.0, 1.0);", "gl_Position = vec4(position, 1.0);", "}"].join("\n");
            return e
        },
        r.WebGLRenderer.FS = function(t) {
            var e = ["precision mediump float;", "varying vec4 vColor;", "void main() {", "gl_FragColor = vColor;", "}"].join("\n");
            return e
        },
        r.SVGRenderer = function() {
            r.Renderer.call(this),
            this.element = document.createElementNS(r.SVGNS, "svg"),
            this.element.setAttribute("xmlns", r.SVGNS),
            this.element.setAttribute("version", "1.1"),
            this.element.style.display = "block",
            this.setSize(300, 150)
        },
        r.SVGRenderer.prototype = Object.create(r.Renderer.prototype),
        r.SVGRenderer.prototype.setSize = function(t, e) {
            return r.Renderer.prototype.setSize.call(this, t, e),
            this.element.setAttribute("width", t),
            this.element.setAttribute("height", e),
            this
        },
        r.SVGRenderer.prototype.clear = function() {
            r.Renderer.prototype.clear.call(this);
            for (var t = this.element.childNodes.length - 1; t >= 0; t--) this.element.removeChild(this.element.childNodes[t]);
            return this
        },
        r.SVGRenderer.prototype.render = function(t) {
            r.Renderer.prototype.render.call(this, t);
            var e, i, n, o, s, a;
            for (e = t.meshes.length - 1; e >= 0; e--) if (i = t.meshes[e], i.visible) for (i.update(t.lights, !0), n = i.geometry.triangles.length - 1; n >= 0; n--) o = i.geometry.triangles[n],
            o.polygon.parentNode !== this.element && this.element.appendChild(o.polygon),
            s = this.formatPoint(o.a) + " ",
            s += this.formatPoint(o.b) + " ",
            s += this.formatPoint(o.c),
            a = this.formatStyle(o.color.format()),
            o.polygon.setAttributeNS(null, "points", s),
            o.polygon.setAttributeNS(null, "style", a);
            return this
        },
        r.SVGRenderer.prototype.formatPoint = function(t) {
            return this.halfWidth + t.position[0] + "," + (this.halfHeight - t.position[1])
        },
        r.SVGRenderer.prototype.formatStyle = function(t) {
            var e = "fill:" + t + ";";
            return e += "stroke:" + t + ";"
        },
        e.exports = r
    },
    {}],
    4 : [function(t, e, i) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
                "default": t
            }
        }
        function n() {
            H = new y["default"].WebGLRenderer,
            k = new y["default"].CanvasRenderer,
            _ = new y["default"].SVGRenderer,
            o(F.renderer)
        }
        function o(t) {
            switch (G && T.removeChild(G.element), t) {
            case L:
                G = H;
                break;
            case M:
                G = k;
                break;
            case C:
                G = _
            }
            G.setSize(T.offsetWidth, T.offsetHeight),
            T.appendChild(G.element)
        }
        function s() {
            B = new y["default"].Scene
        }
        function a() {
            B.remove(O),
            G.clear(),
            I = new y["default"].Plane(R.width * G.width, R.height * G.height, R.segments, R.slices),
            W = new y["default"].Material(R.ambient, R.diffuse),
            O = new y["default"].Mesh(I, W),
            B.add(O),
            I.vertices.forEach(function(t, e) {
                t.anchor = y["default"].Vector3.clone(t.position),
                t.step = y["default"].Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1)),
                t.time = Math.randomInRange(0, Math.PIM2)
            })
        }
        function h() {
            var t = void 0,
            e = void 0;
            for (B.lights.forEach(function(t) {
                return B.remove(t)
            }), G.clear(), t = 0; t < A.count; t++) e = new y["default"].Light(A.ambient, A.diffuse),
            e.ambientHex = e.ambient.format(),
            e.diffuseHex = e.diffuse.format(),
            B.add(e),
            e.mass = Math.randomInRange(.5, 1),
            e.velocity = y["default"].Vector3.create(),
            e.acceleration = y["default"].Vector3.create(),
            e.force = y["default"].Vector3.create(),
            e.ring = document.createElementNS(y["default"].SVGNS, "circle"),
            e.ring.setAttributeNS(null, "stroke", e.ambientHex),
            e.ring.setAttributeNS(null, "stroke-width", "0.5"),
            e.ring.setAttributeNS(null, "fill", "none"),
            e.ring.setAttributeNS(null, "r", "10"),
            e.core = document.createElementNS(y["default"].SVGNS, "circle"),
            e.core.setAttributeNS(null, "fill", e.diffuseHex),
            e.core.setAttributeNS(null, "r", "4")
        }
        function l(t, e) {
            G.setSize(t, e),
            y["default"].Vector3.set(D, G.halfWidth, G.halfHeight),
            a()
        }
        function u() {
            N = Date.now() - E,
            c(),
            f(),
            requestAnimationFrame(u)
        }
        function c() {
            var t = void 0,
            e = void 0,
            i = void 0,
            r = R.depth / 2,
            n = void 0;
            V += x,
            (V > w || S > V) && (x = -x),
            n = "000000" + V.toString(16),
            n = "#" + n.substr(n.length - 6),
            y["default"].Vector3.copy(A.bounds, D),
            y["default"].Vector3.multiplyScalar(A.bounds, A.xyScalar),
            y["default"].Vector3.setZ(P, A.zOffset),
            A.autopilot && (t = Math.sin(A.step[0] * N * A.speed), e = Math.cos(A.step[1] * N * A.speed), y["default"].Vector3.set(P, A.bounds[0] * t, A.bounds[1] * e, A.zOffset)),
            B.lights.forEach(function(t, e) {
                t.diffuse = new y["default"].Color(n),
                y["default"].Vector3.setZ(t.position, A.zOffset);
                var i = Math.clamp(y["default"].Vector3.distanceSquared(t.position, P), A.minDistance, A.maxDistance),
                r = A.gravity * t.mass / i;
                y["default"].Vector3.subtractVectors(t.force, P, t.position),
                y["default"].Vector3.normalise(t.force),
                y["default"].Vector3.multiplyScalar(t.force, r),
                y["default"].Vector3.set(t.acceleration),
                y["default"].Vector3.add(t.acceleration, t.force),
                y["default"].Vector3.add(t.velocity, t.acceleration),
                y["default"].Vector3.multiplyScalar(t.velocity, A.dampening),
                y["default"].Vector3.limit(t.velocity, A.minLimit, A.maxLimit),
                y["default"].Vector3.add(t.position, t.velocity)
            }),
            I.vertices.forEach(function(n, o) {
                t = Math.sin(n.time + n.step[0] * N * R.speed),
                e = Math.cos(n.time + n.step[1] * N * R.speed),
                i = Math.sin(n.time + n.step[2] * N * R.speed),
                y["default"].Vector3.set(n.position, R.xRange * I.segmentWidth * t, R.yRange * I.sliceHeight * e, R.zRange * r * i - r),
                y["default"].Vector3.add(n.position, n.anchor)
            }),
            I.dirty = !0
        }
        function f() {
            G.render(B),
            A.draw && !
            function() {
                var t = void 0,
                e = void 0;
                B.lights.forEach(function(i, r) {
                    switch (t = i.position[0], e = i.position[1], F.renderer) {
                    case M:
                        G.context.lineWidth = .5,
                        G.context.beginPath(),
                        G.context.arc(t, e, 10, 0, Math.PIM2),
                        G.context.strokeStyle = i.ambientHex,
                        G.context.stroke(),
                        G.context.beginPath(),
                        G.context.arc(t, e, 4, 0, Math.PIM2),
                        G.context.fillStyle = i.diffuseHex,
                        G.context.fill();
                        break;
                    case C:
                        t += G.halfWidth,
                        e = G.halfHeight - e,
                        i.core.setAttributeNS(null, "fill", i.diffuseHex),
                        i.core.setAttributeNS(null, "cx", t),
                        i.core.setAttributeNS(null, "cy", e),
                        G.element.appendChild(i.core),
                        i.ring.setAttributeNS(null, "stroke", i.ambientHex),
                        i.ring.setAttributeNS(null, "cx", t),
                        i.ring.setAttributeNS(null, "cy", e),
                        G.element.appendChild(i.ring)
                    }
                })
            } ()
        }
        function d() {
            window.addEventListener("resize", p),
            T.addEventListener("click", m),
            T.addEventListener("mousemove", g)
        }
        function m(t) {
            y["default"].Vector3.set(P, t.x, G.height - t.y),
            y["default"].Vector3.subtract(P, D),
            A.autopilot = !A.autopilot
        }
        function g(t) {
            y["default"].Vector3.set(P, t.x, G.height - t.y),
            y["default"].Vector3.subtract(P, D)
        }
        function p(t) {
            l(T.offsetWidth, T.offsetHeight),
            f()
        }
        function b(t) {
            T = t,
            n(),
            s(),
            a(),
            h(),
            d(),
            l(T.offsetWidth, T.offsetHeight),
            u()
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i["default"] = b;
        var v = t("./flat-surface-shader/deploy/fss.js"),
        y = r(v),
        S = 85506,
        w = 85757,
        V = 85628,
        x = 1,
        R = {
            width: 1.2,
            height: 1.2,
            depth: 10,
            segments: 20,
            slices: 8,
            xRange: .8,
            yRange: .1,
            zRange: 1,
            ambient: "#555555",
            diffuse: "#FFFFFF",
            speed: .001
        },
        A = {
            count: 1,
            xyScalar: 1,
            zOffset: 100,
            ambient: "#019CF7",
            diffuse: "#014E7C",
            speed: .01,
            gravity: 1200,
            dampening: .95,
            minLimit: 10,
            maxLimit: null,
            minDistance: 20,
            maxDistance: 400,
            autopilot: !1,
            draw: !0,
            bounds: y["default"].Vector3.create(),
            step: y["default"].Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1))
        },
        L = "webgl",
        M = "canvas",
        C = "svg",
        F = {
            renderer: M
        },
        N = void 0,
        E = Date.now(),
        D = y["default"].Vector3.create(),
        P = y["default"].Vector3.create(),
        T = null,
        G = void 0,
        B = void 0,
        O = void 0,
        I = void 0,
        W = void 0,
        H = void 0,
        k = void 0,
        _ = void 0;
        e.exports = i["default"]
    },
    {
        "./flat-surface-shader/deploy/fss.js": 3
    }],
    5 : [function(t, e, i) {
        "use strict";
        i = /IEMobile|Android|iOS|iPhone|iPad|BB10|ADR/gi.test(navigator.userAgent)
    },
    {}],
    6 : [function(t, e, i) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t: {
                "default": t
            }
        }
        function n(t, e) {
            function i() {
                n += o,
                d.scrollTop = document.documentElement.scrollTop = n,
                (0 > o && n > t || o > 0 && t > n) && requestAnimationFrame(i)
            }
            var r = d.scrollTop || document.documentElement.scrollTop,
            n = r,
            o = Math.round((t - r) / e);
            i()
        }
        function o(t) {
            console.log(t),
            n(t, f)
        }
        function s(t) {
            var e = t.getBoundingClientRect();
            if (!t.getClientRects().length) return {
                top: 0,
                left: 0
            };
            if (e.width || e.height) {
                var i = t.ownerDocument,
                r = window,
                n = i.documentElement;
                return {
                    top: e.top + r.pageYOffset - n.clientTop,
                    left: e.left + r.pageXOffset - n.clientLeft
                }
            }
            return e
        }
        function a(t) {
            var e = t.wheelDelta || -t.detail,
            i = p;
            if (!v) {
                if (i += e > 0 ? -1 : 1, console.log(i), i > g || 1 > i) return;
                p = i
            }
            0 !== b && clearTimeout(b),
            v = !0,
            b = setTimeout(function() {
                o(s(document.querySelector("[data-id='" + p + "']")).top),
                b = 0,
                v = !1
            },
            c),
            t.preventDefault()
        }
        function h() {
            var t = function(t) {
                if ("" !== t) {
                    var e = void 0;
                    try {
                        e = document.querySelector(t),
                        null !== e && (p = parseInt(e.getAttribute("data-id")), o(s(e).top))
                    } catch(i) {}
                }
            };
            document.addEventListener("scroll",
            function(t) {
                t.preventDefault()
            }),
            document.addEventListener("mousewheel", a),
            document.addEventListener("DOMMouseScroll", a),
            window.addEventListener("hashchange", t),
            [].forEach.call(document.querySelectorAll(".scroll-link"),
            function(e) {
                e.addEventListener("click",
                function(i) {
                    u["default"] ? alert("手机看不了的啦！") : t(e.getAttribute("href")),
                    i.preventDefault()
                })
            }),
            t(location.hash)
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i["default"] = h;
        var l = t("./mobile.js"),
        u = r(l),
        c = 200,
        f = 10,
        d = document.body,
        m = document.getElementsByClassName("section"),
        g = m.length,
        p = 1,
        b = 0,
        v = !1;
        e.exports = i["default"]
    },
    {
        "./mobile.js": 5
    }]
},
{},
[1]);