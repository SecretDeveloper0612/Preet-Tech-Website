module.exports = [
"[externals]/crypto [external] (crypto, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[externals]/crypto [external] (crypto, cjs)");
    });
});
}),
"[project]/preet-tech-next-gen-digital-agency 2/node_modules/https-proxy-agent/dist/index.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[root-of-the-server]__b43ebc2b._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/preet-tech-next-gen-digital-agency 2/node_modules/https-proxy-agent/dist/index.js [app-route] (ecmascript)");
    });
});
}),
"[project]/preet-tech-next-gen-digital-agency 2/node_modules/node-fetch/src/index.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/e0675_node-fetch_src_utils_multipart-parser_265cd1e4.js",
  "server/chunks/e0675_c088d3a3._.js",
  "server/chunks/[externals]__87f6e720._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/preet-tech-next-gen-digital-agency 2/node_modules/node-fetch/src/index.js [app-route] (ecmascript)");
    });
});
}),
];