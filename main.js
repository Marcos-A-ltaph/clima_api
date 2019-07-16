//url ao qual irá ser buscada a imagem
const urlimage="https://assets.hgbrasil.com/weather/images/";
//url ao qual irá requisitar os dados relativos a temperatura
//através da api fetch(busca) com os parâmetros GET e utilizando o modo cors para conseguir requisitar algo vindo de outro domínio
fetch('https://api.hgbrasil.com/weather?format=json-cors&key=774652ce&city_name=Los Angeles',{method: 'GET',mode: 'cors'})
    //funcao executada ao receber os dados de resposta
    .then(function(r){
        return r.json();})
    //retornando os dados em formato JSON
    //função utilizada para pegar os dados e atribuir aos componentes html
    .then(function(e){
        //console.log(e);
        var temp=e['results']['temp'];//dados relacionados a temperatura
        var desc=e['results']['description'];//dados relacionados a descrição
        var city=e['results']['city_name'];//dados sobre o nome da cidade
        var hum=e['results']['humidity'];//dados sobre a humidade
        var wind=e['results']['wind_speedy'];//dados sobre a velocidade do vento
        //console.log(city)
        //console.log(desc);
        document.getElementById("local").innerHTML="Temperatura: "+temp+"  Cº";//atribuindo os dados correspondentes a cada componente
        document.getElementById("desc").innerHTML="Clima em "+city;
        document.getElementById("desc2").innerHTML=desc;
        document.getElementById("humidity").innerHTML="humidade: "+hum;
        document.getElementById("wind").innerHTML=wind;
        var img_src=e['results']['img_id'];
        //console.log(img_src);
        document.getElementById("img").src = urlimage+img_src+".png";//passando a url para baixar a imagem para exibir

        }    
    )
