#!/usr/bin/env python3
import http.server
import socketserver
import os

os.chdir('/Users/tonylee/Desktop/AI_Class/worldcup')

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"✅ Server running at http://localhost:{PORT}/")
    print(f"📁 Serving from: {os.getcwd()}")
    print(f"🌐 Visit: http://localhost:{PORT}/index.html")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped")
