



var itemList = document.getElementById('itemList');


var farmItems = ["Fresh Eggs", 
                 "Hatching Eggs", 
                 "Roosters", 
                 "Laying Hens",            
                ];

for (var i = 0; i < farmItems.length; i++){
    
    var farmList = document.createElement('li');
    farmList.textContent = farmItems[i];
    itemList.appendChild(farmList);
}

var footer = document.createElement('footer');
footer.textContent = 'Author: Kurt Sanson';
document.body.appendChild(footer);
var email = document.createElement('p');
email.innerHTML = 'kurt.sanson@bryanuniversity.edu';
footer.appendChild(email);