const descripcionDeMisProyectos = {
    Noticias : {
        descripcion : `Es un simple portal de noticias argentinas. Ralizado con React y Materialize.`,
        enlace : 'https://sebastian-noticias.netlify.com/'
    },
    Reacttr : {
        descripcion : 'Es una aplicación tipo Tweeter, desarrolada con React y basada en componentes. Integrada con Firebase, para el uso de la base de datos y la autenticación con GitHub.',
        enlace : 'https://sebastian-reacttr.firebaseapp.com/'
    },
    Comics : {
        descripcion : 'Es una aplicación de una sola página (Single Page Application), creada en Angular usando el CLI (Command Line Interface)',
        enlace : 'https://sebastian-comics.netlify.com'
    }
}

$( () => {
    $('.galeria .container-image').click(abrirModalImg);
    $('#formulario').bootstrapValidator({
        message: 'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
    
        fields: {
            nombre: {
                validators: {
                    notEmpty: {
                        message: 'El nombre de usuario es requerido'
                    }
                }
            },
    
            email: {
                validators: {
                    notEmpty: {
                        message: 'La contraseña es requerida'
                    }
                }
            }
        }
    
    });
});

const abrirModalImg = e => {
    let imagen = $(e.target),
        name = imagen.attr('name');
    $('#imagen-modal').attr('src', imagen.attr('src'))
    $('#modal-title').html(name);
    $('#modal-description').html(descripcionDeMisProyectos[name].descripcion);
    $('#modal-link').attr('href', descripcionDeMisProyectos[name].enlace)
}

$('#formulario').bootstrapValidator({
    message: 'Este valor no es valido',
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },

    fields: {
        nombre: {
            validators: {
                notEmpty: {
                    message: 'El nombre de usuario es requerido'
                }
            }
        },

        email: {
            validators: {
                notEmpty: {
                    message: 'La contraseña es requerida'
                }
            }
        }
    }

});