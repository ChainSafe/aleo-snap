function __swcpack_require__(mod) {
    function interop(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};
            if (obj != null) {
                for(var key in obj){
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                        if (desc.get || desc.set) {
                            Object.defineProperty(newObj, key, desc);
                        } else {
                            newObj[key] = obj[key];
                        }
                    }
                }
            }
            newObj.default = obj;
            return newObj;
        }
    }
    var cache;
    if (cache) {
        return cache;
    }
    var module = {
        exports: {}
    };
    mod(module, module.exports);
    cache = interop(module.exports);
    return cache;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var load = __swcpack_require__.bind(void 0, function(module, exports1) {
    "use strict";
    Object.defineProperty(exports1, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
        });
    }
    _export(exports1, {
        Address: function() {
            return Address;
        },
        ExecutionResponse: function() {
            return ExecutionResponse;
        },
        FeeExecution: function() {
            return FeeExecution;
        },
        PrivateKey: function() {
            return PrivateKey;
        },
        PrivateKeyCiphertext: function() {
            return PrivateKeyCiphertext;
        },
        Program: function() {
            return Program;
        },
        RecordCiphertext: function() {
            return RecordCiphertext;
        },
        RecordPlaintext: function() {
            return RecordPlaintext;
        },
        Signature: function() {
            return Signature;
        },
        Transaction: function() {
            return Transaction;
        },
        ViewKey: function() {
            return ViewKey;
        },
        initSync: function() {
            return initSync;
        },
        default: function() {
            return _default;
        }
    });
    var wasm;
    var cachedTextDecoder = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
    });
    cachedTextDecoder.decode();
    var cachedUint8Memory0 = null;
    function getUint8Memory0() {
        if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        return cachedUint8Memory0;
    }
    function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }
    var heap = new Array(128).fill(undefined);
    heap.push(undefined, null, true, false);
    var heap_next = heap.length;
    function addHeapObject(obj) {
        if (heap_next === heap.length) heap.push(heap.length + 1);
        var idx = heap_next;
        heap_next = heap[idx];
        heap[idx] = obj;
        return idx;
    }
    function getObject(idx) {
        return heap[idx];
    }
    function dropObject(idx) {
        if (idx < 132) return;
        heap[idx] = heap_next;
        heap_next = idx;
    }
    function takeObject(idx) {
        var ret = getObject(idx);
        dropObject(idx);
        return ret;
    }
    function _assertClass(instance, klass) {
        if (!_instanceof(instance, klass)) throw new Error("expected instance of ".concat(klass.name));
        return instance.ptr;
    }
    var WASM_VECTOR_LEN = 0;
    var cachedTextEncoder = new TextEncoder("utf-8");
    var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function encodeString(arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
    } : function(arg, view) {
        var buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
    function passStringToWasm0(arg, malloc, realloc) {
        if (realloc === undefined) {
            var buf = cachedTextEncoder.encode(arg);
            var ptr = malloc(buf.length);
            getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }
        var len = arg.length;
        var ptr1 = malloc(len);
        var mem = getUint8Memory0();
        var offset = 0;
        for(; offset < len; offset++){
            var code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr1 + offset] = code;
        }
        if (offset !== len) {
            if (offset !== 0) arg = arg.slice(offset);
            ptr1 = realloc(ptr1, len, len = offset + arg.length * 3);
            var view = getUint8Memory0().subarray(ptr1 + offset, ptr1 + len);
            var ret = encodeString(arg, view);
            offset += ret.written;
        }
        WASM_VECTOR_LEN = offset;
        return ptr1;
    }
    var cachedInt32Memory0 = null;
    function getInt32Memory0() {
        if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
        return cachedInt32Memory0;
    }
    var cachedBigInt64Memory0 = null;
    function getBigInt64Memory0() {
        if (cachedBigInt64Memory0 === null || cachedBigInt64Memory0.byteLength === 0) cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
        return cachedBigInt64Memory0;
    }
    function passArray8ToWasm0(arg, malloc) {
        var ptr = malloc(arg.length * 1);
        getUint8Memory0().set(arg, ptr / 1);
        WASM_VECTOR_LEN = arg.length;
        return ptr;
    }
    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    }
    var Address = function() {
        "use strict";
        function Address() {
            _class_call_check(this, Address);
        }
        _create_class(Address, [
            {
                key: "__destroy_into_raw",
                value: function __destroy_into_raw() {
                    var ptr = this.ptr;
                    this.ptr = 0;
                    return ptr;
                }
            },
            {
                key: "free",
                value: function free() {
                    var ptr = this.__destroy_into_raw();
                    wasm.__wbg_address_free(ptr);
                }
            },
            {
                key: "to_string",
                value: function to_string() {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        wasm.address_to_string(retptr, this.ptr);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        return getStringFromWasm0(r0, r1);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                        wasm.__wbindgen_free(r0, r1);
                    }
                }
            },
            {
                key: "verify",
                value: function verify(message, signature) {
                    var ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
                    var len0 = WASM_VECTOR_LEN;
                    _assertClass(signature, Signature);
                    var ret = wasm.address_verify(this.ptr, ptr0, len0, signature.ptr);
                    return ret !== 0;
                }
            }
        ], [
            {
                key: "__wrap",
                value: function __wrap(ptr) {
                    var obj = Object.create(Address.prototype);
                    obj.ptr = ptr;
                    return obj;
                }
            },
            {
                key: "from_private_key",
                value: function from_private_key(private_key) {
                    _assertClass(private_key, PrivateKey);
                    var ret = wasm.address_from_private_key(private_key.ptr);
                    return Address.__wrap(ret);
                }
            },
            {
                key: "from_view_key",
                value: function from_view_key(view_key) {
                    _assertClass(view_key, ViewKey);
                    var ret = wasm.address_from_view_key(view_key.ptr);
                    return Address.__wrap(ret);
                }
            },
            {
                key: "from_string",
                value: function from_string(address) {
                    var ptr0 = passStringToWasm0(address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                    var len0 = WASM_VECTOR_LEN;
                    var ret = wasm.address_from_string(ptr0, len0);
                    return Address.__wrap(ret);
                }
            }
        ]);
        return Address;
    }();
    var ExecutionResponse = function() {
        "use strict";
        function ExecutionResponse() {
            _class_call_check(this, ExecutionResponse);
        }
        _create_class(ExecutionResponse, [
            {
                key: "__destroy_into_raw",
                value: function __destroy_into_raw() {
                    var ptr = this.ptr;
                    this.ptr = 0;
                    return ptr;
                }
            },
            {
                key: "free",
                value: function free() {
                    var ptr = this.__destroy_into_raw();
                    wasm.__wbg_executionresponse_free(ptr);
                }
            },
            {
                key: "getOutputs",
                value: function getOutputs() {
                    var ret = wasm.executionresponse_getOutputs(this.ptr);
                    return takeObject(ret);
                }
            }
        ]);
        return ExecutionResponse;
    }();
    var FeeExecution = function() {
        "use strict";
        function FeeExecution() {
            _class_call_check(this, FeeExecution);
        }
        _create_class(FeeExecution, [
            {
                key: "__destroy_into_raw",
                value: function __destroy_into_raw() {
                    var ptr = this.ptr;
                    this.ptr = 0;
                    return ptr;
                }
            },
            {
                key: "free",
                value: function free() {
                    var ptr = this.__destroy_into_raw();
                    wasm.__wbg_feeexecution_free(ptr);
                }
            },
            {
                key: "fee",
                value: function fee() {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        wasm.feeexecution_fee(retptr, this.ptr);
                        var r0 = getBigInt64Memory0()[retptr / 8 + 0];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        var r3 = getInt32Memory0()[retptr / 4 + 3];
                        if (r3) throw takeObject(r2);
                        return BigInt.asUintN(64, r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            }
        ]);
        return FeeExecution;
    }();
    var PrivateKey = function() {
        "use strict";
        function PrivateKey() {
            _class_call_check(this, PrivateKey);
            var ret = wasm.privatekey_new();
            return PrivateKey.__wrap(ret);
        }
        _create_class(PrivateKey, [
            {
                key: "__destroy_into_raw",
                value: function __destroy_into_raw() {
                    var ptr = this.ptr;
                    this.ptr = 0;
                    return ptr;
                }
            },
            {
                key: "free",
                value: function free() {
                    var ptr = this.__destroy_into_raw();
                    wasm.__wbg_privatekey_free(ptr);
                }
            },
            {
                key: "to_string",
                value: function to_string() {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        wasm.privatekey_to_string(retptr, this.ptr);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        return getStringFromWasm0(r0, r1);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                        wasm.__wbindgen_free(r0, r1);
                    }
                }
            },
            {
                key: "to_view_key",
                value: function to_view_key() {
                    var ret = wasm.privatekey_to_view_key(this.ptr);
                    return ViewKey.__wrap(ret);
                }
            },
            {
                key: "to_address",
                value: function to_address() {
                    var ret = wasm.privatekey_to_address(this.ptr);
                    return Address.__wrap(ret);
                }
            },
            {
                key: "sign",
                value: function sign(message) {
                    var ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
                    var len0 = WASM_VECTOR_LEN;
                    var ret = wasm.privatekey_sign(this.ptr, ptr0, len0);
                    return Signature.__wrap(ret);
                }
            },
            {
                key: "toCiphertext",
                value: function toCiphertext(secret) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        var ptr0 = passStringToWasm0(secret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.privatekey_toCiphertext(retptr, this.ptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return PrivateKeyCiphertext.__wrap(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            }
        ], [
            {
                key: "__wrap",
                value: function __wrap(ptr) {
                    var obj = Object.create(PrivateKey.prototype);
                    obj.ptr = ptr;
                    return obj;
                }
            },
            {
                key: "from_seed_unchecked",
                value: function from_seed_unchecked(seed) {
                    var ptr0 = passArray8ToWasm0(seed, wasm.__wbindgen_malloc);
                    var len0 = WASM_VECTOR_LEN;
                    var ret = wasm.privatekey_from_seed_unchecked(ptr0, len0);
                    return PrivateKey.__wrap(ret);
                }
            },
            {
                key: "from_string",
                value: function from_string(private_key) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        var ptr0 = passStringToWasm0(private_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.privatekey_from_string(retptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return PrivateKey.__wrap(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            },
            {
                key: "newEncrypted",
                value: function newEncrypted(secret) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        var ptr0 = passStringToWasm0(secret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.privatekey_newEncrypted(retptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return PrivateKeyCiphertext.__wrap(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            },
            {
                key: "fromPrivateKeyCiphertext",
                value: function fromPrivateKeyCiphertext(ciphertext, secret) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        _assertClass(ciphertext, PrivateKeyCiphertext);
                        var ptr0 = passStringToWasm0(secret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.privatekey_fromPrivateKeyCiphertext(retptr, ciphertext.ptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return PrivateKey.__wrap(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            }
        ]);
        return PrivateKey;
    }();
    var PrivateKeyCiphertext = function() {
        "use strict";
        function PrivateKeyCiphertext() {
            _class_call_check(this, PrivateKeyCiphertext);
        }
        _create_class(PrivateKeyCiphertext, [
            {
                key: "__destroy_into_raw",
                value: function __destroy_into_raw() {
                    var ptr = this.ptr;
                    this.ptr = 0;
                    return ptr;
                }
            },
            {
                key: "free",
                value: function free() {
                    var ptr = this.__destroy_into_raw();
                    wasm.__wbg_privatekeyciphertext_free(ptr);
                }
            },
            {
                key: "decryptToPrivateKey",
                value: function decryptToPrivateKey(secret) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        var ptr0 = passStringToWasm0(secret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.privatekeyciphertext_decryptToPrivateKey(retptr, this.ptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return PrivateKey.__wrap(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            },
            {
                key: "toString",
                value: function toString() {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        wasm.privatekeyciphertext_toString(retptr, this.ptr);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        return getStringFromWasm0(r0, r1);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                        wasm.__wbindgen_free(r0, r1);
                    }
                }
            }
        ], [
            {
                key: "__wrap",
                value: function __wrap(ptr) {
                    var obj = Object.create(PrivateKeyCiphertext.prototype);
                    obj.ptr = ptr;
                    return obj;
                }
            },
            {
                key: "encryptPrivateKey",
                value: function encryptPrivateKey(private_key, secret) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        _assertClass(private_key, PrivateKey);
                        var ptr0 = passStringToWasm0(secret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.privatekeyciphertext_encryptPrivateKey(retptr, private_key.ptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return PrivateKeyCiphertext.__wrap(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            },
            {
                key: "fromString",
                value: function fromString(ciphertext) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        var ptr0 = passStringToWasm0(ciphertext, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.privatekeyciphertext_fromString(retptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return PrivateKeyCiphertext.__wrap(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            }
        ]);
        return PrivateKeyCiphertext;
    }();
    var Program = function() {
        "use strict";
        function Program() {
            _class_call_check(this, Program);
        }
        _create_class(Program, [
            {
                key: "__destroy_into_raw",
                value: function __destroy_into_raw() {
                    var ptr = this.ptr;
                    this.ptr = 0;
                    return ptr;
                }
            },
            {
                key: "free",
                value: function free() {
                    var ptr = this.__destroy_into_raw();
                    wasm.__wbg_program_free(ptr);
                }
            },
            {
                key: "toString",
                value: function toString() {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        wasm.program_toString(retptr, this.ptr);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        return getStringFromWasm0(r0, r1);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                        wasm.__wbindgen_free(r0, r1);
                    }
                }
            },
            {
                key: "getFunctions",
                value: function getFunctions() {
                    var ret = wasm.program_getFunctions(this.ptr);
                    return takeObject(ret);
                }
            },
            {
                key: "getFunctionInputs",
                value: function getFunctionInputs(function_name) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        var ptr0 = passStringToWasm0(function_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.program_getFunctionInputs(retptr, this.ptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return takeObject(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            },
            {
                key: "getRecordMembers",
                value: function getRecordMembers(record_name) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        var ptr0 = passStringToWasm0(record_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.program_getRecordMembers(retptr, this.ptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return takeObject(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            },
            {
                key: "getStructMembers",
                value: function getStructMembers(struct_name) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        var ptr0 = passStringToWasm0(struct_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.program_getStructMembers(retptr, this.ptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return takeObject(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            }
        ], [
            {
                key: "__wrap",
                value: function __wrap(ptr) {
                    var obj = Object.create(Program.prototype);
                    obj.ptr = ptr;
                    return obj;
                }
            },
            {
                key: "fromString",
                value: function fromString(program) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        var ptr0 = passStringToWasm0(program, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.program_fromString(retptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return Program.__wrap(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            }
        ]);
        return Program;
    }();
    var RecordCiphertext = function() {
        "use strict";
        function RecordCiphertext() {
            _class_call_check(this, RecordCiphertext);
        }
        _create_class(RecordCiphertext, [
            {
                key: "__destroy_into_raw",
                value: function __destroy_into_raw() {
                    var ptr = this.ptr;
                    this.ptr = 0;
                    return ptr;
                }
            },
            {
                key: "free",
                value: function free() {
                    var ptr = this.__destroy_into_raw();
                    wasm.__wbg_recordciphertext_free(ptr);
                }
            },
            {
                key: "toString",
                value: function toString() {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        wasm.recordciphertext_toString(retptr, this.ptr);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        return getStringFromWasm0(r0, r1);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                        wasm.__wbindgen_free(r0, r1);
                    }
                }
            },
            {
                key: "decrypt",
                value: function decrypt(view_key) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        _assertClass(view_key, ViewKey);
                        wasm.recordciphertext_decrypt(retptr, this.ptr, view_key.ptr);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return RecordPlaintext.__wrap(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            },
            {
                key: "isOwner",
                value: function isOwner(view_key) {
                    _assertClass(view_key, ViewKey);
                    var ret = wasm.recordciphertext_isOwner(this.ptr, view_key.ptr);
                    return ret !== 0;
                }
            }
        ], [
            {
                key: "__wrap",
                value: function __wrap(ptr) {
                    var obj = Object.create(RecordCiphertext.prototype);
                    obj.ptr = ptr;
                    return obj;
                }
            },
            {
                key: "fromString",
                value: function fromString(record) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        var ptr0 = passStringToWasm0(record, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.recordciphertext_fromString(retptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return RecordCiphertext.__wrap(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            }
        ]);
        return RecordCiphertext;
    }();
    var RecordPlaintext = function() {
        "use strict";
        function RecordPlaintext() {
            _class_call_check(this, RecordPlaintext);
        }
        _create_class(RecordPlaintext, [
            {
                key: "__destroy_into_raw",
                value: function __destroy_into_raw() {
                    var ptr = this.ptr;
                    this.ptr = 0;
                    return ptr;
                }
            },
            {
                key: "free",
                value: function free() {
                    var ptr = this.__destroy_into_raw();
                    wasm.__wbg_recordplaintext_free(ptr);
                }
            },
            {
                key: "toString",
                value: function toString() {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        wasm.recordplaintext_toString(retptr, this.ptr);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        return getStringFromWasm0(r0, r1);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                        wasm.__wbindgen_free(r0, r1);
                    }
                }
            },
            {
                key: "microcredits",
                value: function microcredits() {
                    var ret = wasm.recordplaintext_microcredits(this.ptr);
                    return BigInt.asUintN(64, ret);
                }
            },
            {
                key: "serialNumberString",
                value: function serialNumberString(private_key, program_id, record_name) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        _assertClass(private_key, PrivateKey);
                        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        var ptr1 = passStringToWasm0(record_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len1 = WASM_VECTOR_LEN;
                        wasm.recordplaintext_serialNumberString(retptr, this.ptr, private_key.ptr, ptr0, len0, ptr1, len1);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        var r3 = getInt32Memory0()[retptr / 4 + 3];
                        var ptr2 = r0;
                        var len2 = r1;
                        if (r3) {
                            ptr2 = 0;
                            len2 = 0;
                            throw takeObject(r2);
                        }
                        return getStringFromWasm0(ptr2, len2);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                        wasm.__wbindgen_free(ptr2, len2);
                    }
                }
            }
        ], [
            {
                key: "__wrap",
                value: function __wrap(ptr) {
                    var obj = Object.create(RecordPlaintext.prototype);
                    obj.ptr = ptr;
                    return obj;
                }
            },
            {
                key: "fromString",
                value: function fromString(record) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        var ptr0 = passStringToWasm0(record, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.recordplaintext_fromString(retptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return RecordPlaintext.__wrap(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            }
        ]);
        return RecordPlaintext;
    }();
    var Signature = function() {
        "use strict";
        function Signature() {
            _class_call_check(this, Signature);
        }
        _create_class(Signature, [
            {
                key: "__destroy_into_raw",
                value: function __destroy_into_raw() {
                    var ptr = this.ptr;
                    this.ptr = 0;
                    return ptr;
                }
            },
            {
                key: "free",
                value: function free() {
                    var ptr = this.__destroy_into_raw();
                    wasm.__wbg_signature_free(ptr);
                }
            },
            {
                key: "verify",
                value: function verify(address, message) {
                    _assertClass(address, Address);
                    var ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
                    var len0 = WASM_VECTOR_LEN;
                    var ret = wasm.signature_verify(this.ptr, address.ptr, ptr0, len0);
                    return ret !== 0;
                }
            },
            {
                key: "to_string",
                value: function to_string() {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        wasm.signature_to_string(retptr, this.ptr);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        return getStringFromWasm0(r0, r1);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                        wasm.__wbindgen_free(r0, r1);
                    }
                }
            }
        ], [
            {
                key: "__wrap",
                value: function __wrap(ptr) {
                    var obj = Object.create(Signature.prototype);
                    obj.ptr = ptr;
                    return obj;
                }
            },
            {
                key: "sign",
                value: function sign(private_key, message) {
                    _assertClass(private_key, PrivateKey);
                    var ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
                    var len0 = WASM_VECTOR_LEN;
                    var ret = wasm.signature_sign(private_key.ptr, ptr0, len0);
                    return Signature.__wrap(ret);
                }
            },
            {
                key: "from_string",
                value: function from_string(signature) {
                    var ptr0 = passStringToWasm0(signature, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                    var len0 = WASM_VECTOR_LEN;
                    var ret = wasm.signature_from_string(ptr0, len0);
                    return Signature.__wrap(ret);
                }
            }
        ]);
        return Signature;
    }();
    var Transaction = function() {
        "use strict";
        function Transaction() {
            _class_call_check(this, Transaction);
        }
        _create_class(Transaction, [
            {
                key: "__destroy_into_raw",
                value: function __destroy_into_raw() {
                    var ptr = this.ptr;
                    this.ptr = 0;
                    return ptr;
                }
            },
            {
                key: "free",
                value: function free() {
                    var ptr = this.__destroy_into_raw();
                    wasm.__wbg_transaction_free(ptr);
                }
            },
            {
                key: "toString",
                value: function toString() {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        wasm.transaction_toString(retptr, this.ptr);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        return getStringFromWasm0(r0, r1);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                        wasm.__wbindgen_free(r0, r1);
                    }
                }
            },
            {
                key: "transactionId",
                value: function transactionId() {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        wasm.transaction_transactionId(retptr, this.ptr);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        return getStringFromWasm0(r0, r1);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                        wasm.__wbindgen_free(r0, r1);
                    }
                }
            },
            {
                key: "transactionType",
                value: function transactionType() {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        wasm.transaction_transactionType(retptr, this.ptr);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        return getStringFromWasm0(r0, r1);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                        wasm.__wbindgen_free(r0, r1);
                    }
                }
            }
        ], [
            {
                key: "__wrap",
                value: function __wrap(ptr) {
                    var obj = Object.create(Transaction.prototype);
                    obj.ptr = ptr;
                    return obj;
                }
            },
            {
                key: "fromString",
                value: function fromString(transaction) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        var ptr0 = passStringToWasm0(transaction, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.transaction_fromString(retptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        if (r2) throw takeObject(r1);
                        return Transaction.__wrap(r0);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                    }
                }
            }
        ]);
        return Transaction;
    }();
    var ViewKey = function() {
        "use strict";
        function ViewKey() {
            _class_call_check(this, ViewKey);
        }
        _create_class(ViewKey, [
            {
                key: "__destroy_into_raw",
                value: function __destroy_into_raw() {
                    var ptr = this.ptr;
                    this.ptr = 0;
                    return ptr;
                }
            },
            {
                key: "free",
                value: function free() {
                    var ptr = this.__destroy_into_raw();
                    wasm.__wbg_viewkey_free(ptr);
                }
            },
            {
                key: "to_string",
                value: function to_string() {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        wasm.viewkey_to_string(retptr, this.ptr);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        return getStringFromWasm0(r0, r1);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                        wasm.__wbindgen_free(r0, r1);
                    }
                }
            },
            {
                key: "to_address",
                value: function to_address() {
                    var ret = wasm.viewkey_to_address(this.ptr);
                    return Address.__wrap(ret);
                }
            },
            {
                key: "decrypt",
                value: function decrypt(ciphertext) {
                    try {
                        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
                        var ptr0 = passStringToWasm0(ciphertext, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                        var len0 = WASM_VECTOR_LEN;
                        wasm.viewkey_decrypt(retptr, this.ptr, ptr0, len0);
                        var r0 = getInt32Memory0()[retptr / 4 + 0];
                        var r1 = getInt32Memory0()[retptr / 4 + 1];
                        var r2 = getInt32Memory0()[retptr / 4 + 2];
                        var r3 = getInt32Memory0()[retptr / 4 + 3];
                        var ptr1 = r0;
                        var len1 = r1;
                        if (r3) {
                            ptr1 = 0;
                            len1 = 0;
                            throw takeObject(r2);
                        }
                        return getStringFromWasm0(ptr1, len1);
                    } finally{
                        wasm.__wbindgen_add_to_stack_pointer(16);
                        wasm.__wbindgen_free(ptr1, len1);
                    }
                }
            }
        ], [
            {
                key: "__wrap",
                value: function __wrap(ptr) {
                    var obj = Object.create(ViewKey.prototype);
                    obj.ptr = ptr;
                    return obj;
                }
            },
            {
                key: "from_private_key",
                value: function from_private_key(private_key) {
                    _assertClass(private_key, PrivateKey);
                    var ret = wasm.viewkey_from_private_key(private_key.ptr);
                    return ViewKey.__wrap(ret);
                }
            },
            {
                key: "from_string",
                value: function from_string(view_key) {
                    var ptr0 = passStringToWasm0(view_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                    var len0 = WASM_VECTOR_LEN;
                    var ret = wasm.viewkey_from_string(ptr0, len0);
                    return ViewKey.__wrap(ret);
                }
            }
        ]);
        return ViewKey;
    }();
    function load(module1, imports) {
        return _load.apply(this, arguments);
    }
    function _load() {
        _load = _async_to_generator(function(module1, imports) {
            var e, bytes, instance;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!(typeof Response === "function" && _instanceof(module1, Response))) return [
                            3,
                            7
                        ];
                        if (!(typeof WebAssembly.instantiateStreaming === "function")) return [
                            3,
                            4
                        ];
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            WebAssembly.instantiateStreaming(module1, imports)
                        ];
                    case 2:
                        return [
                            2,
                            _state.sent()
                        ];
                    case 3:
                        e = _state.sent();
                        if (module1.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                        else throw e;
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            4,
                            module1.arrayBuffer()
                        ];
                    case 5:
                        bytes = _state.sent();
                        return [
                            4,
                            WebAssembly.instantiate(bytes, imports)
                        ];
                    case 6:
                        return [
                            2,
                            _state.sent()
                        ];
                    case 7:
                        return [
                            4,
                            WebAssembly.instantiate(module1, imports)
                        ];
                    case 8:
                        instance = _state.sent();
                        if (_instanceof(instance, WebAssembly.Instance)) return [
                            2,
                            {
                                instance: instance,
                                module: module1
                            }
                        ];
                        else return [
                            2,
                            instance
                        ];
                        _state.label = 9;
                    case 9:
                        return [
                            2
                        ];
                }
            });
        });
        return _load.apply(this, arguments);
    }
    function getImports() {
        var imports = {};
        imports.wbg = {};
        imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
            var ret = getStringFromWasm0(arg0, arg1);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
            takeObject(arg0);
        };
        imports.wbg.__wbg_new_abda76e883ba8a5f = function() {
            var ret = new Error();
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_stack_658279fe44541cf6 = function(arg0, arg1) {
            var ret = getObject(arg1).stack;
            var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbg_error_f851667af71bcfc6 = function(arg0, arg1) {
            try {
                console.error(getStringFromWasm0(arg0, arg1));
            } finally{
                wasm.__wbindgen_free(arg0, arg1);
            }
        };
        imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
            var ret = getObject(arg0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_crypto_70a96de3b6b73dac = function(arg0) {
            var ret = getObject(arg0).crypto;
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_is_object = function(arg0) {
            var val = getObject(arg0);
            var ret = typeof val === "object" && val !== null;
            return ret;
        };
        imports.wbg.__wbg_process_dd1577445152112e = function(arg0) {
            var ret = getObject(arg0).process;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_versions_58036bec3add9e6f = function(arg0) {
            var ret = getObject(arg0).versions;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_node_6a9d28205ed5b0d8 = function(arg0) {
            var ret = getObject(arg0).node;
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_is_string = function(arg0) {
            var ret = typeof getObject(arg0) === "string";
            return ret;
        };
        imports.wbg.__wbg_msCrypto_adbc770ec9eca9c7 = function(arg0) {
            var ret = getObject(arg0).msCrypto;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_require_f05d779769764e82 = function() {
            return handleError(function() {
                var ret = module.require;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbindgen_is_function = function(arg0) {
            var ret = typeof getObject(arg0) === "function";
            return ret;
        };
        imports.wbg.__wbg_getRandomValues_3774744e221a22ad = function() {
            return handleError(function(arg0, arg1) {
                getObject(arg0).getRandomValues(getObject(arg1));
            }, arguments);
        };
        imports.wbg.__wbg_randomFillSync_e950366c42764a07 = function() {
            return handleError(function(arg0, arg1) {
                getObject(arg0).randomFillSync(takeObject(arg1));
            }, arguments);
        };
        imports.wbg.__wbg_newnoargs_2b8b6bd7753c76ba = function(arg0, arg1) {
            var ret = new Function(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_call_95d1ea488d03e4e8 = function() {
            return handleError(function(arg0, arg1) {
                var ret = getObject(arg0).call(getObject(arg1));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_new_f9876326328f45ed = function() {
            var ret = new Object();
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_self_e7c1f827057f6584 = function() {
            return handleError(function() {
                var ret = self.self;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_window_a09ec664e14b1b81 = function() {
            return handleError(function() {
                var ret = window.window;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_globalThis_87cbb8506fecf3a9 = function() {
            return handleError(function() {
                var ret = globalThis.globalThis;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_global_c85a9259e621f3db = function() {
            return handleError(function() {
                var ret = global.global;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbindgen_is_undefined = function(arg0) {
            var ret = getObject(arg0) === undefined;
            return ret;
        };
        imports.wbg.__wbg_newwithlength_0da6f12fbc1ab6eb = function(arg0) {
            var ret = new Array(arg0 >>> 0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_set_17224bc548dd1d7b = function(arg0, arg1, arg2) {
            getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
        };
        imports.wbg.__wbg_call_9495de66fdbe016b = function() {
            return handleError(function(arg0, arg1, arg2) {
                var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_buffer_cf65c07de34b9a08 = function(arg0) {
            var ret = getObject(arg0).buffer;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5 = function(arg0, arg1, arg2) {
            var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_new_537b7341ce90bb31 = function(arg0) {
            var ret = new Uint8Array(getObject(arg0));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_set_17499e8aa4003ebd = function(arg0, arg1, arg2) {
            getObject(arg0).set(getObject(arg1), arg2 >>> 0);
        };
        imports.wbg.__wbg_newwithlength_b56c882b57805732 = function(arg0) {
            var ret = new Uint8Array(arg0 >>> 0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_subarray_7526649b91a252a6 = function(arg0, arg1, arg2) {
            var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_set_6aa458a4ebdb65cb = function() {
            return handleError(function(arg0, arg1, arg2) {
                var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
                return ret;
            }, arguments);
        };
        imports.wbg.__wbindgen_throw = function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        };
        imports.wbg.__wbindgen_memory = function() {
            var ret = wasm.memory;
            return addHeapObject(ret);
        };
        return imports;
    }
    function initMemory(imports, maybe_memory) {}
    function finalizeInit(instance, module1) {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module1;
        cachedBigInt64Memory0 = null;
        cachedInt32Memory0 = null;
        cachedUint8Memory0 = null;
        return wasm;
    }
    function initSync(module1) {
        var imports = getImports();
        initMemory(imports);
        if (!_instanceof(module1, WebAssembly.Module)) module1 = new WebAssembly.Module(module1);
        var instance = new WebAssembly.Instance(module1, imports);
        return finalizeInit(instance, module1);
    }
    function init(input) {
        return _init.apply(this, arguments);
    }
    function _init() {
        _init = _async_to_generator(function(input) {
            var imports, _ref, instance, module1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (typeof input === "undefined") input = new URL("aleo_wasm_bg.wasm", require("url").pathToFileURL(__filename).toString());
                        imports = getImports();
                        if (typeof input === "string" || typeof Request === "function" && _instanceof(input, Request) || typeof URL === "function" && _instanceof(input, URL)) input = fetch(input);
                        initMemory(imports);
                        return [
                            4,
                            input
                        ];
                    case 1:
                        return [
                            4,
                            load.apply(void 0, [
                                _state.sent(),
                                imports
                            ])
                        ];
                    case 2:
                        _ref = _state.sent(), instance = _ref.instance, module1 = _ref.module;
                        return [
                            2,
                            finalizeInit(instance, module1)
                        ];
                }
            });
        });
        return _init.apply(this, arguments);
    }
    var _default = init;
});
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
_export_star(load(), exports);
