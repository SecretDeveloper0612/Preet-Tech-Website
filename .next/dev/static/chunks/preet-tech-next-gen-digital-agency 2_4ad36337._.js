(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/preet-tech-next-gen-digital-agency 2/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const CustomCursor = ()=>{
    _s();
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const springConfig = {
        damping: 40,
        stiffness: 400,
        mass: 0.2
    };
    const cursorX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseX, springConfig);
    const cursorY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseY, springConfig);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const moveMouse = {
                "CustomCursor.useEffect.moveMouse": (e)=>{
                    mouseX.set(e.clientX);
                    mouseY.set(e.clientY);
                    const target = e.target;
                    const isClickable = !!target.closest('button, a, .clickable, [data-cursor]');
                    setIsHovering(isClickable);
                }
            }["CustomCursor.useEffect.moveMouse"];
            window.addEventListener('mousemove', moveMouse, {
                passive: true
            });
            return ({
                "CustomCursor.useEffect": ()=>window.removeEventListener('mousemove', moveMouse)
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        mouseX,
        mouseY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden lg:block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed top-0 left-0 flex items-center justify-center pointer-events-none",
            style: {
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "bg-indigo-500 rounded-full",
                animate: {
                    width: isHovering ? 48 : 8,
                    height: isHovering ? 48 : 8,
                    opacity: isHovering ? 0.15 : 1
                },
                transition: {
                    type: 'spring',
                    ...springConfig
                }
            }, void 0, false, {
                fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/CustomCursor.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/CustomCursor.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/CustomCursor.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CustomCursor, "nqCbcxnF4JJofc9wC3bNw6QPiso=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = CustomCursor;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(CustomCursor);
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomCursor");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/preet-tech-next-gen-digital-agency 2/app/client-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/components/CustomCursor.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ClientLayout({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientLayout.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "ClientLayout.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["ClientLayout.useEffect"],
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2
            });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            return ({
                "ClientLayout.useEffect": ()=>{
                    lenis.destroy();
                }
            })["ClientLayout.useEffect"];
        }
    }["ClientLayout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/preet-tech-next-gen-digital-agency 2/app/client-layout.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            children
        ]
    }, void 0, true);
}
_s(ClientLayout, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ClientLayout;
var _c;
__turbopack_context__.k.register(_c, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=preet-tech-next-gen-digital-agency%202_4ad36337._.js.map