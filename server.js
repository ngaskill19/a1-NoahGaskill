const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  const stripped = request.url.slice(1)
  if (request.url != '/'){
    sendFile(response, stripped)
  }
  else{
    sendFile(response, 'index.html')
  }
  // switch( request.url ) {
  //   case '/':
  //     sendFile( response, 'index.html' )
  //     break
  //   case '/index.html':
  //     sendFile( response, 'index.html' )
  //     break
  //   case '/style.css':
  //     sendFile(response, 'style.css')
  //     break
  //   default:
  //     response.end( '404 Error: File Not Found' )
  // }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  if(filename === 'main.css'){
    response.setHeader('Content-Type', 'text/css')
  }
  fs.readFile( filename, function( err, content ) {
    response.end( content, 'utf-8' )
  })
}
