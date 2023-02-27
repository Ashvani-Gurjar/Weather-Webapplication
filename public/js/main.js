const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const day = document.getElementById("day");
const today_data = document.getElementById("today_data");


const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer")

const date = new Date();
console.log(date.getMonth())
console.log(date.getDay())
console.log(date.getDate())

// day.innerText = date.getDay();
// today_name.innerText = `${date.getDay()} ${date.getMonth()}`;

console.log(date);

const getInfo = async(event)=>{

     event.preventDefault();
     const value = cityName.value;
     if(value==""){
        city_name.innerText = `Write city name befor search!`
         datahide.classList.add('data_hide');
     }


     else{
          try {
               const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=e996d0310dc3468151f93ebe3dd6224e`
               const responce = await fetch(url);
               const data = await responce.json();
               const arrData = [data];
               
               city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;

               let edata = arrData[0].main.temp;
               temp_real_val.innerText= Math.round(edata-273);
                    

               // temp_status.innerText= arrData[0].weather[0].main;
               const tempMood = arrData[0].weather[0].main;

               if (tempMood == "Clear") {
               temp_status.innerHTML =
                   "<i class='fas fa-sun' style='color: #eccc68;'></i>";
               }
               else if (tempMood == "Clouds") {
               temp_status.innerHTML =
                   "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
               } 
               else if (tempMood == "Rain") {
               temp_status.innerHTML =
                   "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
               } 
               else {
               temp_status.innerHTML =
                   "<i class='fas  fa-cloud' style='color: #eccc68;'></i>";
               }

               datahide.classList.remove('data_hide');
          }
               catch (error) { 
               city_name.innerText = ` Please Write Correct City Name !`
               datahide.classList.add('data_hide');
          }
     }
}

submitBtn.addEventListener("click", getInfo);