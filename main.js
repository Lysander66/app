var http = require('http')
var url = require('url')

http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<html><body>This is Home Page.</body></html>')
        res.end()
        return
    }

    if (req.url == '/hello') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify({ message: "Hello World" }))
        res.end()
        return
    }

    if (req.url.startsWith('/div')) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        var q = url.parse(req.url, true).query
        var { x, y } = q
        var n = `除法 ${x} / ${y} = ${x / y}`
        res.end(n)
        return
    }

    res.end('Invalid Request!')
}).listen(8081)

console.log('Server running at :8081')