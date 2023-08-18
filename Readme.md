# Bodegas

Este proyecto está diseñado para abordar los desafíos que enfrentan las empresas en la gestión de sus bodegas, desde el control de inventario hasta el seguimiento de historiales y la administración de productos. Mediante la implementación de una  base de datos y la creación de endpoints que permiten consultas precisas, nuestro sistema busca simplificar y optimizar la administración de bodegas.

## __Instalacion:__

* Asegurarse de tener instalado Node.js y npm en tu sistema

**Clonar Repositorio:** Clona este repositorio copiando el siguiente comando en tu terminal:

``git clone https://github.com/LauraRamirezCampus/MongoBodega.git``

**1. Configura las variables de entorno:** Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias. Hay un ejemplo de las variables requeridas en el archivo `.env`.

(las variables vienen por defecto en el proyecto como usuario root )

**2. Instalar dependencias:** En la raiz de el proyecto encontraras un archivo llamado  ``package.json`` en el cual se encuentran las dependecias necesarias para que todo funcione,para instalarlas y compilar los archivos DTO debes ejecutar los siguientes comandos:

``npm install``
``npm run tsc ``

Con el anterior comando se instalara automaticamente todas las dependencias que se encuentran en el archivo ``package.json``

**3. Creacion de la base datos:**  En el proyecto encontraras un archivo llamado ``query.mongodb`` en la ruta "MongoBodega\db\query.mongodb" donde podras ejecutar el script con la creacion de la base de datos e insercion de datos de prueba.

**4. Iniciar el servidor:** Para iniciar el servidor debes ejecutar el siguiente comando:
``npm run dev``

## __USO:__

* Para utilizar cada endPoint primero necesitas un token de verificacion(Un token diferente para cada endPoint), el cual se genera utilizando la extensión "Thunder Client" en tu entorno de desarrollo de la siguiente manera:

1.Abre la extensión **"Thunder Client"** en tu entorno de desarrollo.

2.Crea una nueva solicitud **GET** a continuacion el ejemplo de URL para el  endPoint de productos:

``http://127.10.10.10:5005/token/Productos``

* Esta te generara el token de permiso para la peticion de productos.
* Una vez tengas el token debes incluirlo en el encabezado( header) de tu solicitud llamado Authorization

El proyecto tiene los siguientes endPoints:

**METODO:GET**

* listar las bodegas

URL para generar token de este endPoint:

``http://127.10.10.10:5005/token/Bodega``

Una vez ingresado el token en el encabezado(header) de tu solicitudes puedes hacer esta peticion con esta URL:
``http://127.1.1.1:5507/Inventario``

<hr>

**METODO:POST**

* Crea un nuevo registro de Bodega

``http://127.10.10.10:5005/token/Bodega``
Se debe enviar en el Body los datos de la siguiente manera:

```
{
    "id": 50,
    "nombre": "A Bodega",
    "id_responsable": 11,
    "estado": 1,
  
  }
```

<hr>

**METODO:GET**

* listar todos los productos en orden
  descendente por el campo "Total".

URL para generar token de este endPoint:

``http://127.10.10.10:5005/token/Productos``

Una vez ingresado el token en el encabezado(header) de tu solicitudes puedes hacer esta peticion con esta URL:
``http://127.1.1.1:5507/Productos``

<hr>

**METODO:POST**

* Crea un productos y a su vez asigna
  una cantidad inicial del mismo en la tabla inventarios en una de las bodegas
  por default.

``http://127.10.10.10:5005/token/Productos``

Se debe enviar en el Body los datos de la siguiente manera:

```
{
    "id": 1,
  "nombre": "chocoalte",
  "descripcion": "Es rico",
  "estado": 1,
  "created_by": 12
  
  }
```

<hr>

**METODO:POST**

* Crea un nuevo registro de inventario pero si el registro ya existe se actualiza

``http://127.10.10.10:5005/token/Inventario``

Se debe enviar en el Body los datos de la siguiente manera:

```
{
    "id": 195,
   "id_bodega": 1,
   "id_producto": 13,
   "cantidad": 1,
   "created_by": 166
  
  }
```

<hr>

**Nota:** Este proyecto tiene un limite de consultas,Es decir solo se pueden hacer 20 consultas.
