"""
Captures a genuine homepage screenshot of the Laptop Shopping site.
Run this on YOUR computer (it needs internet so the banner, brand logos and
product photos load).

Setup (once):   pip install playwright && playwright install chromium
Run from the portfolio folder (the one with package.json):
                python scripts/capture-laptop-screenshot.py
Output:         public/projects/laptop-shopping/homepage.png
"""
import http.server, socketserver, threading, functools, os
from playwright.sync_api import sync_playwright

SITE = os.path.join("public", "projects", "laptop-shopping")
OUT = os.path.join(SITE, "homepage.png")
PORT = 8765

handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=SITE)
httpd = socketserver.TCPServer(("", PORT), handler)
threading.Thread(target=httpd.serve_forever, daemon=True).start()

with sync_playwright() as p:
    b = p.chromium.launch()
    page = b.new_page(viewport={"width": 1280, "height": 800})
    page.goto(f"http://localhost:{PORT}/index.html", wait_until="networkidle")
    page.wait_for_timeout(1000)
    page.screenshot(path=OUT)
    b.close()
httpd.shutdown()
print("Saved", OUT)
