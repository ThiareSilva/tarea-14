let propiedades_alquiler = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4 habitaciones",
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Acogedor apartamento en el centro de la ciudad",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: "Apartamento céntrico recién renovado con hermosas vistas",
    ubicacion: "456 City Center, Downtown, CA 12345",
    habitaciones: "2 habitaciones",
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa moderna con piscina privada",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Casa contemporánea con piscina y amplios jardines",
    ubicacion: "789 Sunny Street, Suburban Paradise, CA 98765",
    habitaciones: "3 habitaciones",
    costo: 7000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Piso amplio con vistas al mar",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion: "Amplio piso con balcón y vistas panorámicas al mar",
    ubicacion: "101 Ocean View, Coastal City, CA 54321",
    habitaciones: "3 habitaciones",
    costo: 4500,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa de campo en las montañas",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Casa rústica en medio de la naturaleza con acceso a rutas de senderismo",
    ubicacion: "222 Mountain Retreat, Serene Valley, CA 67890",
    habitaciones: "2 habitaciones",
    costo: 3000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Ático de lujo en el centro histórico",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Ático elegante con terraza en el corazón del centro histórico",
    ubicacion: "333 Historic Plaza, Old Town, CA 34567",
    habitaciones: "1 habitación",
    costo: 6000,
    smoke: false,
    pets: false,
  },
];

//Alquiler
const filaAlquileres = document.getElementById("rowAlquiler");
let resultadoHtmlAlquiler = "";

propiedades_alquiler.forEach((elemento) => {
  resultadoHtmlAlquiler += `<div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${elemento.src}"
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${elemento.nombre}
          </h5>
          <p class="card-text">
            ${elemento.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i>${elemento.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i>${elemento.habitaciones}
          </p>
          <p><i class="fas fa-dollar-sign"></i>${elemento.costo}</p>
          ${
            elemento.smoke
              ? "<p class='text-success'><i class='fas fa-smoking'></i> Permitido fumar</p>"
              : "<p class='text-danger'> <i class='fas fa-smoking-ban'></i> No se permite fumar</p>"
          }
          ${
            elemento.pets
              ? "<p class='text-success'><i class='fas fa-paw'></i> Mascotas permitidas</p>"
              : "<p class='text-danger'><i class='fas fa-ban'></i> No se permiten mascotas</p>"
          }
        </div>
      </div>
    </div>`;
});

filaAlquileres.innerHTML = resultadoHtmlAlquiler;
