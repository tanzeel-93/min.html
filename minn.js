
function maxmin() {
    const Names = parseInt(prompt("Enter the number of names:"));
  
    if (isNaN(Names) || Names <= 0) {
      alert("Please enter a valid number greater than 0.");
      return;
    }
  
    let max = "";
    let min = "";
  
    for (let i = 0; i < Names; i++) {
      const currentName = prompt(`Enter name #${i + 1}:`);
  
      if (max === "" || currentName.length > max.length) {
        max = currentName;
      }
  
      if (min === "" || currentName.length < min.length) {
        min = currentName;
      }
    }


    setTimeout(() => {
    
  x.innerHTML=`Max length : ${max}`
        }, 1000);


        setTimeout(() => {
            
  y. innerHTML=`Min length : ${min}`
        }, 2000);


        // setInterval(() => {
        //     z.innerHTML="Find max &min?"
        // }, 1000);


  

  }
  
  maxmin()
