const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    express.static("public", {
        setHeaders: function (res, path) {
            if (path.endsWith(".br")) {
                setContentHeaders(res, path)
                res.set("Content-Encoding", "br");
            }
        },
    })
);

/**
 * 
 * @param {string} res 
 * @param {string} path 
 */
function setContentHeaders(res, path) {
    if (path.endsWith(".wasm.br"))
        res.set("Content-Type", "application/wasm");
    else
        res.set("Content-Type", "application/javascript");
}

app.listen(PORT, () => {
    console.log(`listening on https://localhost:${PORT}`);
});