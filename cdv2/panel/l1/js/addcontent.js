var nroseccion=0;
function agregar_seccion(){
    nroseccion=nroseccion+1;
    $('#contenido').append("<div align='center' id='seccion"+nroseccion+"'>"+agregar_btndesign(nroseccion)+"</div>"); 
}
function agregar_btndesign(nroseccion){
    alert('#seccion'+nroseccion+'');
    return  '<button id="column1" onclick="agregar_btntextarea(1,'+nroseccion+')"><img class="imgdesign" src="images/1.png"/></button>'+
            '<button id="column2" onclick="agregar_btntextarea(2,'+nroseccion+')"><img class="imgdesign" src="images/2.png"/></button>'+
            '<button id="column3" onclick="agregar_btntextarea(3,'+nroseccion+')"><img class="imgdesign" src="images/3.png"/></button>';
}

function agregar_btntextarea(tcolumn,nroseccion){
    $('#seccion'+nroseccion).empty();
    if(tcolumn == 1){
        $('#seccion'+nroseccion).append(
            '<div id="contenedor1_1" class="col-xs-12">'+
                '<button id="txt">TEXTO</button>'+
                '<button id="img_vid">IMAGEN/VIDEO</button>'+
                '<button id="cont_interactivo">CONTENIDO INTERACTIVO</button>'+
            '</div>'
        );
    }else if (tcolumn == 2){
        $('#seccion'+nroseccion).append(
            '<div id="contenedor2" class="col-xs-12">'+
            '<div id="contenedor2_1" class="col-xs-6">'+
                '<button id="txt">TEXTO</button>'+
                '<button id="img_vid">IMAGEN/VIDEO</button>'+
                '<button id="cont_interactivo">CONTENIDO INTERACTIVO</button>'+
            '</div>'+
            '<div id="contenedor2_2" class="col-xs-6">'+
                '<button id="txt">TEXTO</button>'+
                '<button id="img_vid">IMAGEN/VIDEO</button>'+
                '<button id="cont_interactivo">CONTENIDO INTERACTIVO</button>'+
            '</div>'+
            '</div>'
        );
    }else if (tcolumn == 3){
        $('#seccion'+nroseccion).append(
            '<div id="contenedor3">'+
            '<div id="contenedor3_1" class="col-xs-4">'+
                '<button id="txt">TEXTO</button>'+
                '<button id="img_vid">IMAGEN/VIDEO</button>'+
                '<button id="cont_interactivo">CONTENIDO INTERACTIVO</button>'+
            '</div>'+
            '<div id="contenedor3_2" class="col-xs-4">'+
                '<button id="txt">TEXTO</button>'+
                '<button id="img_vid">IMAGEN/VIDEO</button>'+
                '<button id="cont_interactivo">CONTENIDO INTERACTIVO</button>'+
            '</div>'+
            '<div id="contenedor3_3" class="col-xs-4">'+
                '<button id="txt">TEXTO</button>'+
                '<button id="img_vid">IMAGEN/VIDEO</button>'+
                '<button id="cont_interactivo">CONTENIDO INTERACTIVO</button>'+
            '</div>'+
            '</div>'
        );
    }
    alert(tcolumn);
}