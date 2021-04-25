const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public', {
    setHeaders: function (res, path) {
        if (path.endsWith('.br')) {
            // res.set("Content-Type", "application/wasm");
            res.set("Content-Type", "application/javascript")
            res.set("Content-Encoding", "br");
        }
    }
}))

app.listen(PORT, () => {
    console.log(`listening on https://localhost:${PORT}`);
})