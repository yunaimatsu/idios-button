const app = document.getElementById("app");
const routes = {
    "/": () => `
      <h1>Home</h1>
      <p>Vanilla.js SPA is running.</p>
    `,
    "/about": () => `
      <h1>About</h1>
      <p>This is a minimal client-side router for GitHub Pages.</p>
    `,
};

const repoBase = location.hostname.endsWith("github.io")
    ? "/" + location.pathname.split("/")[1]
    : "";

function normalizePath(path) {
    if (!path) {
        return "/";
    }
    return path.startsWith("/") ? path : `/${path}`;
}

function currentPath() {
    const fullPath = location.pathname || "/";
    if (repoBase && fullPath.startsWith(repoBase)) {
        const subPath = fullPath.slice(repoBase.length);
        return subPath || "/";
    }
    return fullPath;
}

function render() {
    const path = currentPath();
    const view = routes[path] || (() => "<h1>Not Found</h1>");
    app.innerHTML = view();
}

function navigate(path) {
    const target = normalizePath(path);
    history.pushState(null, "", `${repoBase}${target}`);
    render();
}

const params = new URLSearchParams(location.search);
const redirected = params.get("path");
if (redirected) {
    history.replaceState(null, "", `${repoBase}${normalizePath(redirected)}`);
}

document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) {
        return;
    }
    const url = new URL(link.href);
    if (url.origin !== location.origin) {
        return;
    }
    event.preventDefault();
    navigate(url.pathname);
});

window.addEventListener("popstate", render);

render();
