$(document).ready(function () {

    alert("Gerarei uma matriz 5x5 com números aleatórios");    
     
    function geraNumeroAleatorio(min, max) {
        var valor = Math.random() * (max*min) + 1;        
        return valor = parseFloat(valor.toFixed(2));    // arredondar com 2 casas decimais
    }   
    
     matriz = new Array(5);
     contador = 1;
     soma = 0;
     maior = null;
     menor = null;
     media = 0;
    
    // gera a mtriz com numeros aleatorios e exibe
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz.length; j++) {
          matriz[i] = new Array     
          matriz[i][j] = geraNumeroAleatorio(i+22,i+34.5)
    
         
          soma += matriz[i][j];
    
    
            if (matriz[i][j]>maior || maior == null)
                maior = matriz[i][j];
    
            if (matriz[i][j]<menor || menor == null)
                menor = matriz[i][j];
    
            media = soma / (matriz.length*matriz.length);
    
            $("<tr id='" +i + "' >"+ matriz[i][j] + "</tr>").appendTo('#tela') ; 
            $("<td>"+ matriz[i][j] + "</td>").appendTo('#' + i) ;
            //insere o numero na linha e na coluna

           // alert(contador + 'o elemento = ' + matriz[i][j]);

            //appendTo = innerHTML
    
        }    
    }   

    $('#soma').click(function () { 
    
        $('.visor').val("Soma: " + soma);        
    });
    
    $('#maior').click(function () { 
    
        $('.visor').val("Maior: " + maior);        
    });    
    
    $('#menor').click(function () { 
        
        $('.visor').val("Menor: " + menor);            
    });    
    
    $('#media').click(function () { 
    
            $('.visor').val("Media: " + media);            
        });          
        
    $('#limpar').click(function () { 
        
        $('.visor').val('');            
    });   
    });