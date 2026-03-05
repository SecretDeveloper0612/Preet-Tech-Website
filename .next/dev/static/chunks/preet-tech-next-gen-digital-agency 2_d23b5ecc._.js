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
"[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const QUICK_ACTIONS = [
    {
        label: "Book a Call",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
    },
    {
        label: "Our Services",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
    },
    {
        label: "How It Works",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    }
];
function ChatWidget() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: 'assistant',
            content: "Welcome to Preet Tech. I am your Digital Assistant. How can I help you build the future today?"
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWidget.useEffect": ()=>{
            scrollToBottom();
        }
    }["ChatWidget.useEffect"], [
        messages
    ]);
    const handleSendMessage = async (content)=>{
        if (!content.trim() || isLoading) return;
        const newMessages = [
            ...messages,
            {
                role: 'user',
                content
            }
        ];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: newMessages.map((m)=>({
                            role: m.role,
                            content: m.content,
                            reasoning_details: m.reasoning_details
                        }))
                })
            });
            const data = await response.json();
            if (data.text) {
                setMessages([
                    ...newMessages,
                    {
                        role: 'assistant',
                        content: data.text,
                        reasoning_details: data.reasoning_details
                    }
                ]);
            } else {
                throw new Error(data.error || "Something went wrong");
            }
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages([
                ...newMessages,
                {
                    role: 'assistant',
                    content: "I'm having trouble connecting to the neural network. Please try again or book a call directly."
                }
            ]);
        } finally{
            setIsLoading(false);
        }
    };
    const handleQuickAction = (action)=>{
        handleSendMessage(action);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 right-6 z-[9999] font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20,
                        scale: 0.95,
                        transformOrigin: 'bottom right'
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 20,
                        scale: 0.95
                    },
                    className: cn("absolute bottom-20 right-0 bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden glass-morphism transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom-right", isExpanded ? "w-[95vw] md:w-[85vw] lg:w-[1000px] h-[85vh] max-h-[900px] rounded-[2rem]" : "w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] rounded-[2.5rem]"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-gradient-to-r from-brand-medium/10 to-transparent",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-2xl bg-brand-medium flex items-center justify-center text-black overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/chatbot-icon.png",
                                                alt: "Preet Tech AI",
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                lineNumber: 107,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                            lineNumber: 106,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-black uppercase tracking-wider",
                                                    children: "Preet Tech AI"
                                                }, void 0, false, {
                                                    fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold text-slate-500 uppercase tracking-widest",
                                                            children: "System Online"
                                                        }, void 0, false, {
                                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                            lineNumber: 109,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                    lineNumber: 105,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsExpanded(!isExpanded),
                                            className: "hidden md:block p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-all",
                                            children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                lineNumber: 122,
                                                columnNumber: 51
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                lineNumber: 122,
                                                columnNumber: 77
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                            lineNumber: 118,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsOpen(false),
                                            className: "p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-all",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                lineNumber: 128,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                            lineNumber: 124,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                    lineNumber: 117,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                            lineNumber: 104,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-6 space-y-6",
                            "data-lenis-prevent": true,
                            children: [
                                messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: cn("flex flex-col gap-2 max-w-[85%]", m.role === 'user' ? "ml-auto items-end" : "items-start"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: cn("p-4 rounded-[1.5rem] text-sm leading-relaxed", m.role === 'user' ? "bg-brand-medium text-white font-medium rounded-tr-none" : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-tl-none border border-slate-200 dark:border-white/5"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                                remarkPlugins: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                                                ],
                                                components: {
                                                    p: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-2 last:mb-0",
                                                            children: children
                                                        }, void 0, false, {
                                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 70
                                                        }, void 0),
                                                    ul: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "list-disc ml-4 mb-2 space-y-1",
                                                            children: children
                                                        }, void 0, false, {
                                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 71
                                                        }, void 0),
                                                    ol: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                            className: "list-decimal ml-4 mb-2 space-y-1",
                                                            children: children
                                                        }, void 0, false, {
                                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 71
                                                        }, void 0),
                                                    li: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "leading-tight",
                                                            children: children
                                                        }, void 0, false, {
                                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 71
                                                        }, void 0),
                                                    strong: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: m.role === 'user' ? "font-black text-white" : "font-black text-brand-medium dark:text-brand-medium",
                                                            children: children
                                                        }, void 0, false, {
                                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 53
                                                        }, void 0),
                                                    a: ({ href, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: href,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: m.role === 'user' ? "text-white underline hover:opacity-80 transition-opacity" : "text-brand-medium underline hover:opacity-80 transition-opacity",
                                                            children: children
                                                        }, void 0, false, {
                                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 53
                                                        }, void 0)
                                                },
                                                children: m.content
                                            }, void 0, false, {
                                                fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                lineNumber: 154,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                            lineNumber: 148,
                                            columnNumber: 37
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                        lineNumber: 139,
                                        columnNumber: 33
                                    }, this)),
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2 max-w-[85%]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-[1.5rem] rounded-tl-none bg-slate-100 dark:bg-white/5 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                size: 16,
                                                className: "animate-spin text-brand-medium"
                                            }, void 0, false, {
                                                fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                lineNumber: 182,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-slate-500 uppercase tracking-widest",
                                                children: "Typing..."
                                            }, void 0, false, {
                                                fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                lineNumber: 183,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                        lineNumber: 181,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                    lineNumber: 180,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                    lineNumber: 187,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                            lineNumber: 134,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-2 flex gap-2 overflow-x-auto",
                            "data-lenis-prevent": true,
                            children: QUICK_ACTIONS.map((action, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleQuickAction(action.label),
                                    className: "flex-none px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:border-brand-medium/50 text-[10px] font-black uppercase tracking-widest transition-all hover:bg-brand-medium/5 whitespace-nowrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(action.icon, {
                                            size: 12,
                                            className: "inline mr-2 text-brand-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                            lineNumber: 201,
                                            columnNumber: 37
                                        }, this),
                                        action.label
                                    ]
                                }, i, true, {
                                    fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                    lineNumber: 196,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                            lineNumber: 191,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: (e)=>{
                                        e.preventDefault();
                                        handleSendMessage(input);
                                    },
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: input,
                                            onChange: (e)=>setInput(e.target.value),
                                            placeholder: "Message Preet Tech AI...",
                                            className: "w-full px-6 py-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-medium/50 text-sm transition-all"
                                        }, void 0, false, {
                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                            lineNumber: 216,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: !input.trim() || isLoading,
                                            className: "absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-brand-medium text-black rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                                lineNumber: 228,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                            lineNumber: 223,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                    lineNumber: 209,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-[9px] text-center font-bold text-slate-400 uppercase tracking-[0.2em]",
                                    children: "© 2026 Preet Tech Global. High-Performance Engineering."
                                }, void 0, false, {
                                    fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                                    lineNumber: 231,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                            lineNumber: 208,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                    lineNumber: 92,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: 0.95
                },
                onClick: ()=>setIsOpen(!isOpen),
                className: cn("flex items-center justify-center transition-all duration-500 relative z-50", isOpen ? "w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-full border border-white/10 text-white rotate-90 shadow-2xl" : "w-28 h-28 md:w-[7.5rem] md:h-[7.5rem] bg-transparent border-0 p-0"),
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 36
                }, void 0, false, {
                    fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                    lineNumber: 252,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/chatbot-icon.png",
                        alt: "ChatBot",
                        className: "w-[150%] h-[150%] object-contain drop-shadow-2xl"
                    }, void 0, false, {
                        fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                        lineNumber: 255,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                    lineNumber: 254,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
                lineNumber: 240,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx",
        lineNumber: 89,
        columnNumber: 9
    }, this);
}
_s(ChatWidget, "1eOmiFZ9+FUCHeved5S1MPz0Gv8=");
_c = ChatWidget;
var _c;
__turbopack_context__.k.register(_c, "ChatWidget");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$components$2f$ChatWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/components/ChatWidget.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ClientLayout({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientLayout.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
            // Use custom requestAnimationFrame if GSAP isn't needed here, 
            // but robust classic raf setup is preferred for Next.js to avoid freezing
            let rafId;
            function raf(time) {
                lenis.raf(time);
                rafId = requestAnimationFrame(raf);
            }
            rafId = requestAnimationFrame(raf);
            return ({
                "ClientLayout.useEffect": ()=>{
                    cancelAnimationFrame(rafId);
                    lenis.destroy();
                }
            })["ClientLayout.useEffect"];
        }
    }["ClientLayout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/preet-tech-next-gen-digital-agency 2/app/client-layout.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$components$2f$ChatWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/preet-tech-next-gen-digital-agency 2/app/client-layout.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this)
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
"[project]/preet-tech-next-gen-digital-agency 2/components/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/preet-tech-next-gen-digital-agency 2/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$preet$2d$tech$2d$next$2d$gen$2d$digital$2d$agency__2$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/preet-tech-next-gen-digital-agency 2/components/theme-provider.tsx",
        lineNumber: 8,
        columnNumber: 12
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=preet-tech-next-gen-digital-agency%202_d23b5ecc._.js.map