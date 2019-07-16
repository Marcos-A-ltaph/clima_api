window.onload = function () {
    let input = document.getElementById("textobusca");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
    // Cancel the default action, if needed
        event.preventDefault();
    // Trigger the button element with a click
        document.getElementById("but").click();
    }
    });
};
function buscar(){
    let x = document.getElementById("textobusca").value;
    //console.log(x);
    req(x);
}

function req(x){
//url ao qual irá ser buscada a imagem
const urlimage="https://assets.hgbrasil.com/weather/images/";
const url='https://api.hgbrasil.com/weather?format=json-cors&key=e90f1cf9&city_name='+x;
    //url ao qual irá requisitar os dados relativos a temperatura
    //através da api fetch(busca) com os parâmetros GET e utilizando o modo cors para conseguir requisitar algo vindo de outro domínio
    fetch(url,{method: 'GET',mode: 'cors'})
        //funcao executada ao receber os dados de resposta
        .then(function(r){
            return r.json();})
        //retornando os dados em formato JSON
        //função utilizada para pegar os dados e atribuir aos componentes html
        .then(function(e){
            console.log(e);
            var found=e['by'];
            if(found!="default"){
                var temp=e['results']['temp'];//dados relacionados a temperatura
                var desc=e['results']['description'];//dados relacionados a descrição
                var city=e['results']['city_name'];//dados sobre o nome da cidade
                var hum=e['results']['humidity'];//dados sobre a humidade
                var wind=e['results']['wind_speedy'];//dados sobre a velocidade do vento
                var sun_rise=e['results']['sunrise'];
                var sunset=e['results']['sunset'];
                
                //console.log(city)
                //console.log(desc);
                document.getElementById("descricao").innerHTML="";
                document.getElementById("local").innerHTML="Temperatura: "+temp+"  Cº";//atribuindo os dados correspondentes a cada componente
                document.getElementById("desc").innerHTML="Clima em "+city;
                document.getElementById("desc2").innerHTML=desc;
                document.getElementById("humidity").innerHTML="humidade: "+hum;
                document.getElementById("wind").innerHTML="Velocidade do vento "+wind;
                document.getElementById("sunrise").innerHTML="Nascer do Sol " +sun_rise;
                document.getElementById("sunset").innerHTML="Por do Sol " +sunset;
                var img_src=e['results']['img_id'];
                //console.log(img_src);
                document.getElementById("img").src = urlimage+img_src+".png";//passando a url para baixar a imagem para exibir


            }else{document.getElementById("desc").innerHTML="Cidade não encontrada";
                  document.getElementById("descricao").innerHTML="";
                  document.getElementById("local").innerHTML="" 
                  document.getElementById("desc2").innerHTML="";
                  document.getElementById("humidity").innerHTML="";
                  document.getElementById("wind").innerHTML="";
                  document.getElementById("sunrise").innerHTML="";
                  document.getElementById("sunset").innerHTML="";
                  document.getElementById("img").src = "";


            
                }

            }    
        )


}
