
      function Calcular(){
        var valorinicial = document.getElementById('valorinicial').value;
        var meses = document.getElementById('meses').value;
        var i = 0;
        var valorfinal

        if(valorinicial == "") {
          var valorfinal = "Erro! Falta o valor de interesse!"
          document.getElementById('resultado').innerHTML = valorfinal;

        }else if (meses == "") {
          var valorfinal = "Erro! Falta o valor total!"
          document.getElementById('resultado').innerHTML = valorfinal;

        }else{
        var valorfinal = Math.round(valorinicial/meses*100) + "%";

        document.getElementById('resultado').innerHTML = valorfinal;
        }
      }
