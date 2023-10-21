let propiedades_venta = [
    {
      nombre: "Amplio apartamento cerca del parque",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      descripcion:
        "Este amplio apartamento se encuentra a pasos del parque central",
      ubicacion: "789 Park Avenue, Central Park, NY 10001",
      habitaciones: "3 habitaciones",
      costo: 4500,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Moderno loft en el distrito financiero",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      descripcion:
        "Loft moderno con diseño vanguardista en el corazón del distrito financiero",
      ubicacion: "555 Financial Street, Downtown, NY 10005",
      habitaciones: "1 habitación",
      costo: 3000,
      smoke: true,
      pets: false,
    },
    {
      nombre: "Casa de playa con vista al océano",
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      descripcion: "Espaciosa casa de playa con impresionantes vistas al océano",
      ubicacion: "123 Oceanfront Drive, Beachfront Paradise, CA 90210",
      habitaciones: "5 habitaciones",
      costo: 8000,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Penthouse de lujo en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion:
        "Elegante penthouse con todas las comodidades en el centro de la ciudad",
      ubicacion: "456 Downtown Plaza, Metropolitan City, NY 10002",
      habitaciones: "4 habitaciones",
      costo: 7000,
      smoke: true,
      pets: false,
    },
    {
      nombre: "Casa de campo en el bosque",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion: "Retiro tranquilo en un entorno natural rodeado de bosques",
      ubicacion: "789 Forest Retreat, Serenity Forest, CA 54321",
      habitaciones: "2 habitaciones",
      costo: 3500,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Apartamento de diseño en el casco antiguo",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      descripcion:
        "Apartamento con decoración de diseño en el pintoresco casco antiguo",
      ubicacion: "101 Old Town Street, Historic District, CA 67890",
      habitaciones: "3 habitaciones",
      costo: 5500,
      smoke: false,
      pets: true,
    },
  ];
  
  // Ventas
  const filaVentas = document.getElementById("rowVenta");
  let resultadoHtmlVentas = "";
  
  propiedades_venta.forEach((elemento) => {
    resultadoHtmlVentas += `<div class="col-md-4 mb-4">
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
  
  filaVentas.innerHTML = resultadoHtmlVentas;
  