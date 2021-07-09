// function callAge(year){

//     return new Promise(function(resolve , reject){ // syntax
//         setTimeout(() => { //set timeout
//             var age = new Date().getFullYear() - year;
//             if(age < 18){
//                 reject("you are not allowed")
//             }else{
//                 resolve("you are allowed")
//             }
//         }, 2000);
//     })

// }

// callAge(1999)
// .then(function(age){

//     var name = document.createElement("h1");
//     name.innerText = age;
//     name.setAttribute("class" , "name");

//     document.getElementById("container").appendChild(name);


// })
// .catch(function(err){
//     var name2 = document.createElement("h1");
//     name2.innerText = err;
//     document.getElementById("container").appendChild(name2);
// })

document.body.style.backgroundColor = "wheat"

      

        //DIV
        var div = document.getElementById("container");
        div.style.alignItems = "center"
        div.setAttribute("class", "container");
        div.style.padding = "4%"

         // Intro    

       var heading = document.createElement("h4");
       heading.innerText = "Welcome To Restcounties API"
       heading.style.fontWeight = "bold"
       heading.style.textAlign = "center"
       heading.style.fontFamily = "'Bitter', serif";
       div.appendChild(heading);

      // textField DOM
      var textField = document.createElement("input");
      div.appendChild(textField);
      textField.setAttribute("placeholder", "Search For Country Here !!")
      textField.setAttribute("class", "container")
      textField.setAttribute("id", "myInput")
      textField.style.width = "500px";
      textField.style.height = "50px"
      textField.style.margin = "2%"
      textField.style.marginLeft = "300px"



      // Get Button

      var getButton = document.createElement("button");
      var div = document.getElementById("container");
      div.appendChild(getButton);
      getButton.style.width = "100px"
      getButton.style.height = "50px"
      getButton.innerText = "GET"
      getButton.setAttribute("class", "container btn btn-outline-danger rounded");
      getButton.setAttribute("onclick", "handleClick()")



function handleClick(){
            
    var value = document.getElementById("myInput").value;

    var url = "https://restcountries.eu/rest/v2/name/" + value

    var data = fetch(url)

    
    data

    .then(function (res) {

        return res.json();

    })


    .then(function (somedata) {

       





 

        


    

        //row

        var row = document.createElement("div");
        row.setAttribute("class", "row");
        div.appendChild(row);


        //div 2

        var div2 = document.createElement("div");
        div2.setAttribute("class", "container2")
        div2.setAttribute("id", "container2")
        div.appendChild(div2);




        // For Loops

        for (var i = 0; i <= somedata.length; i++) {



            //Flags

            var img = document.createElement("img");
            document.getElementById("container2").appendChild(img)
            img.setAttribute = ("id", "flagsimage")
            img.src = somedata[i].flag;



            img.style.marginTop = "60px"
            img.style.marginBottom = "60px"
            img.setAttribute = ("class", "container")
            img.style.border = "solid"
            img.style.borderWidth = "5px"
            img.style.boxShadow = "5px 10px #888888"
            img.style.borderRadius = "20px"
            img.style.display = "block"
            img.style.marginLeft = "auto"
            img.style.marginRight = "auto"
            img.style.width = "350px"
            img.style.height = "250px"

            // Country Name

            var h1 = document.createElement("h5");
            h1.innerText = ("Country Name : " + somedata[i].name)
            h1.setAttribute = ("class", "country-name")
            h1.style.textAlign = "center"
            h1.style.fontFamily = "'Bitter', serif";
            h1.style.fontWeight = "bold"
            document.getElementById("container2").appendChild(h1);


            //Region

            var region = document.createElement("h5");
            region.innerText = ("Region : " + somedata[i].region)
            region.style.textAlign = "center"
            region.style.fontFamily = "'Bitter', serif";
            region.style.fontWeight = "bold"
            document.getElementById("container2").appendChild(region);


            //Subregion

            var subregion = document.createElement("h5");
            subregion.innerText = ("Sub-Region : " + somedata[i].subregion)
            subregion.style.textAlign = "center"
            subregion.style.fontFamily = "'Bitter', serif";
            subregion.style.fontWeight = "bold"
            document.getElementById("container2").appendChild(subregion);


            // Lat-lng

            var latlng = document.createElement("h5");
            latlng.innerText = ("Latitude and Longitude : " + somedata[i].latlng)
            latlng.style.textAlign = "center"
            latlng.style.fontFamily = "'Bitter', serif";
            latlng.style.fontWeight = "bold"
            document.getElementById("container2").appendChild(latlng);

            // Currencies

            var currencies = document.createElement("h5");
            currencies.innerText = ("Currency : " + somedata[i].currencies[0].symbol)
            currencies.style.textAlign = "center"
            currencies.style.fontFamily = "'Bitter', serif";
            currencies.style.fontWeight = "bold"
            document.getElementById("container2").appendChild(currencies);


            // Population

            var population = document.createElement("h5");
            population.innerText = ("Population : " + somedata[i].population)
            population.style.textAlign = "center"
            population.style.fontFamily = "'Bitter', serif";
            population.style.fontWeight = "bold"
            document.getElementById("container2").appendChild(population);


            //Div3

            //  var div3 = document.createElement("div");
            //  div.setAttribute("id", "container3")
            //  div3.setAttribute("class", "container3 col-4");
            //  div3.appendChild(row);

        }



    })


    .catch(function (err) {
        console.log(err)
    })

    
} 



