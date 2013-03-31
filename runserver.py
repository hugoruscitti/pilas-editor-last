from app import app
import os

do_debug = os.environ.get('DEVELOP', False)
port = os.environ.get('PORT', 8081)

app.run(debug=do_debug, port=port)
