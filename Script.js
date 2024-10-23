document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector("#cuerpo3-portadita"); // Cambié a cuerpo2-texto4
  
    const observerOptions = {
      root: null, // El viewport
      rootMargin: '0px', // Sin margen adicional
      threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };
  
    // Función de callback para el Intersection Observer
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Añadir clase visible cuando está en el viewport
        } else {
          entry.target.classList.remove("visible"); // Eliminar clase visible cuando no está en el viewport
        }
      });
    };
  
    // Crear el Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
    // Observar el elemento #cuerpo2-texto4
    if (target) {
      observer.observe(target);
    }
  });



    // Función para manejar el cierre de la barra de navegación
    function collapseNavbar() {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.getElementById('navbarSupportedContent');
  
      // Colapsa la barra si está expandida
      if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
      }
  }
  
  // Añadir eventos a las opciones de la barra de navegación
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', collapseNavbar);
  });
  
  // Añadir evento al clic fuera de la barra de navegación
  document.addEventListener('click', function(event) {
      const navbarCollapse = document.getElementById('navbarSupportedContent');
      const navbarToggler = document.querySelector('.navbar-toggler');
  
      // Cierra la barra si se hace clic fuera de ella
      if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
          collapseNavbar();
      }
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector("#cuerpo3-portadita"); // Cambié a cuerpo2-texto4
  
    const observerOptions = {
      root: null, // El viewport
      rootMargin: '0px', // Sin margen adicional
      threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };
  
    // Función de callback para el Intersection Observer
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Añadir clase visible cuando está en el viewport
        } else {
          entry.target.classList.remove("visible"); // Eliminar clase visible cuando no está en el viewport
        }
      });
    };
  
    // Crear el Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
    // Observar el elemento #cuerpo2-texto4
    if (target) {
      observer.observe(target);
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector("#acerca"); // Cambié a cuerpo2-texto4
  
    const observerOptions = {
      root: null, // El viewport
      rootMargin: '0px', // Sin margen adicional
      threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };
  
    // Función de callback para el Intersection Observer
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Añadir clase visible cuando está en el viewport
        } else {
          entry.target.classList.remove("visible"); // Eliminar clase visible cuando no está en el viewport
        }
      });
    };
  
    // Crear el Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
    // Observar el elemento #cuerpo2-texto4
    if (target) {
      observer.observe(target);
    }
  });
  
    
document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector("#producto1"); // Cambié a cuerpo2-texto4

  const observerOptions = {
    root: null, // El viewport
    rootMargin: '0px', // Sin margen adicional
    threshold: 0.1 // Se activa cuando el 10% del elemento es visible
  };

  // Función de callback para el Intersection Observer
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Añadir clase visible cuando está en el viewport
      } else {
        entry.target.classList.remove("visible"); // Eliminar clase visible cuando no está en el viewport
      }
    });
  };

  // Crear el Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Observar el elemento #cuerpo2-texto4
  if (target) {
    observer.observe(target);
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector("#producto2"); // Cambié a cuerpo2-texto4

  const observerOptions = {
    root: null, // El viewport
    rootMargin: '0px', // Sin margen adicional
    threshold: 0.1 // Se activa cuando el 10% del elemento es visible
  };

  // Función de callback para el Intersection Observer
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Añadir clase visible cuando está en el viewport
      } else {
        entry.target.classList.remove("visible"); // Eliminar clase visible cuando no está en el viewport
      }
    });
  };

  // Crear el Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Observar el elemento #cuerpo2-texto4
  if (target) {
    observer.observe(target);
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector("#producto3"); // Cambié a cuerpo2-texto4

  const observerOptions = {
    root: null, // El viewport
    rootMargin: '0px', // Sin margen adicional
    threshold: 0.1 // Se activa cuando el 10% del elemento es visible
  };

  // Función de callback para el Intersection Observer
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Añadir clase visible cuando está en el viewport
      } else {
        entry.target.classList.remove("visible"); // Eliminar clase visible cuando no está en el viewport
      }
    });
  };

  // Crear el Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Observar el elemento #cuerpo2-texto4
  if (target) {
    observer.observe(target);
  }
});




document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector("#oferta"); // Cambié a cuerpo2-texto4

  const observerOptions = {
    root: null, // El viewport
    rootMargin: '0px', // Sin margen adicional
    threshold: 0.1 // Se activa cuando el 10% del elemento es visible
  };

  // Función de callback para el Intersection Observer
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Añadir clase visible cuando está en el viewport
      } else {
        entry.target.classList.remove("visible"); // Eliminar clase visible cuando no está en el viewport
      }
    });
  };

  // Crear el Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Observar el elemento #cuerpo2-texto4
  if (target) {
    observer.observe(target);
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector("#elegirnos"); // Cambié a cuerpo2-texto4

  const observerOptions = {
    root: null, // El viewport
    rootMargin: '0px', // Sin margen adicional
    threshold: 0.1 // Se activa cuando el 10% del elemento es visible
  };

  // Función de callback para el Intersection Observer
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Añadir clase visible cuando está en el viewport
      } else {
        entry.target.classList.remove("visible"); // Eliminar clase visible cuando no está en el viewport
      }
    });
  };

  // Crear el Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Observar el elemento #cuerpo2-texto4
  if (target) {
    observer.observe(target);
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector("#insignias"); // Cambié a cuerpo2-texto4

  const observerOptions = {
    root: null, // El viewport
    rootMargin: '0px', // Sin margen adicional
    threshold: 0.1 // Se activa cuando el 10% del elemento es visible
  };

  // Función de callback para el Intersection Observer
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Añadir clase visible cuando está en el viewport
      } else {
        entry.target.classList.remove("visible"); // Eliminar clase visible cuando no está en el viewport
      }
    });
  };

  // Crear el Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Observar el elemento #cuerpo2-texto4
  if (target) {
    observer.observe(target);
  }
});
