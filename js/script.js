const descripcionDeMisProyectos = {
    Noticias : {
        descripcion : `Es un simple portal de noticias argentinas. Ralizado con React y Materialize.`,
        enlace : 'https://sebastian-noticias.netlify.com/'
    }
}

$( () => {
    $('.galeria .container-image').click(abrirModalImg);
});

const abrirModalImg = e => {
    let imagen = $(e.target),
        name = imagen.attr('name');
    $('#imagen-modal').attr('src', imagen.attr('src'))
    $('#modal-title').html(name);
    $('#modal-description').html(descripcionDeMisProyectos[name].descripcion);
    $('#modal-link').attr('href', descripcionDeMisProyectos[name].enlace)
}

