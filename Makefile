help:
	@echo "No has especificado el comando a ejecutar"
	@echo ""
	@echo "   build        Prepara los archivos para distribuirlos."
	@echo "   deploy       Publica todo el proyecto en hugoruscitti.github.com/pilas-editor."

build:
	@echo "Obteniendo el subrepositorio de pilasweb y compilando."
	
	#@git submodule update --init
	@cd pilasweb; make generar
	
	@echo "Generando archivos compilados de pilas web."
	@cp -r pilasweb/build/ static/pilasweb_build

deploy: build	
	@echo "Opcion deshabilitada"
	#@echo "Cambiando de branch para publicar en la web."
	#@git checkout gh-pages
	#@git merge --no-ff master
	
	#@git add pilasweb_build
	#@git commit -m "Realizando deploy semi-automatico desde Make."
