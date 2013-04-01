# -*- encoding: utf-8 -*-
import os

def send_page(name):
    """Similar a render_template de flask.

    La particularidad de esta función está en no evaluar
    los elementos jinja, cómo "{{ }}". Dado que entran
    en conflicto con angularjs.
    """
    filepath = os.path.join("templates", name)
    f = open(filepath)
    content = f.read()
    f.close()
    return content
