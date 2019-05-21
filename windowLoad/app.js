let userId = 0;



(function () {
    const userArray = [];
    const allUsers = document.querySelector('#users');

    class User {
      constructor(name, image, email, phone, birth) {
        this.userId = userId++;
        this.name = name;
        this.image = image;
        this.email = email;
        this.phone = phone;
        this.birth = birth;
      }
    }

    fetch('https://randomuser.me/api/?results=20')
      .then( response => response.json())
      .then( data => {
      
        
        data.results.forEach(function(element) {
          
          const name = element.name.first + " " + element.name.last;
          const image = element.picture.large;
          const email = element.email;
          const phone = element.phone;
          const birth = element.dob.date.toString().slice(0,10);
          userArray.push(new User(name, image, email, phone, birth));
          createDom(name, image, email, phone, birth);    
          });
          console.log(userArray);
        })
      
      .catch( error => console.log("oops, looks like we got an error: ", error))
      .finally( ()=> console.log("finally, This function always runs...")) // Whether or not there's an error or success, this will happen such as stopping a loading wheel on the front end
      // allUsers.innerHTML = "";
      
      const createDom = (name, image, email, phone, birth) => {
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
                <div class="text"> 
                &#128222 ${phone}
                <br>
                &#x2709; ${email}
                <br>
                &#127874; ${birth} </div>
                </div>
              </div>
            `
        }
  
    })()
    
      function getInfo(x){
        x.style.display = "block";   
      }
     

    
  
 

   