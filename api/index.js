var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/david/repos/remix-vercel-filesystem/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/david/repos/remix-vercel-filesystem/app/routes/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => Index,
  loader: () => loader
});
var import_node = require("@remix-run/node");
var import_react3 = require("@remix-run/react");

// app/util/fs.server.ts
var import_promises = __toESM(require("fs/promises"));
var import_path = __toESM(require("path"));
var CONTENT = "_content";
var readContentDir = async () => {
  console.log(await import_promises.default.readdir(__dirname));
  console.log(await import_promises.default.readdir(import_path.default.join(__dirname, "..")));
  console.log(await import_promises.default.readdir(import_path.default.join(__dirname, "../..")));
  console.log(await import_promises.default.readdir(import_path.default.join(__dirname, "../../..")));
  return import_promises.default.readdir(import_path.default.join(__dirname, CONTENT));
};
var readContentFile = async (file) => import_promises.default.readFile(import_path.default.join(__dirname, CONTENT, file), "utf-8");

// route:/Users/david/repos/remix-vercel-filesystem/app/routes/$slug.tsx
var loader = async ({ params }) => {
  const files = await readContentDir();
  const fileName = files.find((f) => f === params.slug);
  if (!fileName) {
    throw new Response("Not Found", { status: 404 });
  }
  const contents = await readContentFile(fileName);
  return (0, import_node.json)({ fileName, contents });
};
function Index() {
  const { fileName, contents } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Contents of file ", /* @__PURE__ */ React.createElement("code", null, fileName)), /* @__PURE__ */ React.createElement("div", {
    style: { border: "1px solid black", padding: 20 }
  }, contents));
}

// route:/Users/david/repos/remix-vercel-filesystem/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node");
var import_react4 = require("@remix-run/react");
var loader2 = async () => {
  const files = await readContentDir();
  return (0, import_node2.json)(files);
};
function Index2() {
  const files = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Your files"), files.length > 0 ? /* @__PURE__ */ React.createElement("ul", null, files.map((file) => /* @__PURE__ */ React.createElement("li", {
    key: file
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/" + file
  }, file)))) : /* @__PURE__ */ React.createElement("p", null, "No files found!"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "80d33c06", "entry": { "module": "/build/entry.client-IEOKIV3T.js", "imports": ["/build/_shared/chunk-V37TX5AN.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-X6TRUKJS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$slug": { "id": "routes/$slug", "parentId": "root", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$slug-A6E5MZ7L.js", "imports": ["/build/_shared/chunk-6UANYLLO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-KWVML2FD.js", "imports": ["/build/_shared/chunk-6UANYLLO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-80D33C06.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$slug": {
    id: "routes/$slug",
    parentId: "root",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
