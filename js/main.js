/**
 * Karol Quintana - La Voz Bravía
 * Script de interactividad general
 */

document.addEventListener('DOMContentLoaded', () => {
    // Menu Móvil Hamburguesa
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Cerrar menú al hacer clic en un enlace
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Scroll Navbar Effect
    const navbar = document.querySelector('.navbar-container');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Formulario de Contacto -> Envío directo por WhatsApp
    const contactForm = document.getElementById('formContrataciones');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre')?.value.trim() || '';
            const telefono = document.getElementById('telefono')?.value.trim() || '';
            const correo = document.getElementById('correo')?.value.trim() || '';
            const tipoEvento = document.getElementById('tipoEvento')?.value || 'General';
            const fecha = document.getElementById('fecha')?.value || 'Por definir';
            const ciudad = document.getElementById('ciudad')?.value.trim() || 'Colombia';
            const mensaje = document.getElementById('mensaje')?.value.trim() || '';

            const textoWhatsApp = 
                `*SOLICITUD DE CONTRATACIÓN - KAROL QUINTANA*%0A` +
                `----------------------------------------%0A` +
                `👤 *Nombre:* ${encodeURIComponent(nombre)}%0A` +
                `📱 *Teléfono:* ${encodeURIComponent(telefono)}%0A` +
                `📧 *Email:* ${encodeURIComponent(correo)}%0A` +
                `🎭 *Tipo de Evento:* ${encodeURIComponent(tipoEvento)}%0A` +
                `📅 *Fecha Tentativa:* ${encodeURIComponent(fecha)}%0A` +
                `📍 *Ciudad/Municipio:* ${encodeURIComponent(ciudad)}%0A` +
                `📝 *Detalles:* ${encodeURIComponent(mensaje)}%0A` +
                `----------------------------------------%0A` +
                `Enviado desde el sitio web oficial.`;

            // Número oficial de Karol Quintana (+57 311 895 8277)
            const numeroWhatsApp = "573118958277";
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`;
            
            window.open(urlWhatsApp, '_blank');
        });
    }

    // Filtros de eventos
    const filterBtns = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.evento-card');

    if (filterBtns.length > 0 && eventCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                eventCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 20);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(15px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 250);
                    }
                });
            });
        });
    }
});
