const newArray = [];

function get(){
    fetch('https://randomuser.me/api/')
      .then( response => response.json())
      .then( data => {
        
        newArray.push(data);
        
        const listUsers = [];
        
        for (let i=0; i<newArray.length; i++){
          
          const name = newArray[i].results['0'].name.first + " " + newArray[i].results['0'].name.last;
          const image = newArray[i].results['0'].picture.large;
          const email = newArray[i].results['0'].email;
          const phone = newArray[i].results["0"].phone;
          const birth = newArray[i].results["0"].dob.date.toString().slice(0,10);

          listUsers.push({
            'name': newArray[i].results['0'].name.first + " " + newArray[i].results['0'].name.last,
            'image': newArray[i].results['0'].picture.large,
            'email': newArray[i].results['0'].email,
            'number': newArray[i].results["0"].phone,
            'dob': newArray[i].results["0"].dob
          });
          
          allUsers.innerHTML += `
              <div style='display:inline-block'; class='eachUser'>
                <div style="height:320px">
                <br>
                <span id="name">${name}</span>
                <br><br>
                <img src='${image}' height = "250px"
                width = "250px" class="image center" onmouseover='getInfo(this)' 
                />
                <div class="middle">
                <div class="text"> &#128222 ${phone}
                <br>
                &#x2709; ${email}
                <br>
                &#127874; ${birth} </div>
                </div>
              </div>
            `
        }
        console.log(listUsers);
        
      })
      
      .catch( error => console.log("oops, looks like we got an error: ", error))
      .finally( ()=> console.log("finally, This function always runs...")) // Whether or not there's an error or success, this will happen such as stopping a loading wheel on the front end
      allUsers.innerHTML = "";
      
    }
   
    function getInfo(x){
      x.style.display = "block";   
    }
   

