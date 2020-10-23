/*
 * @Author: your name
 * @Date: 2020-10-22 09:18:53
 * @LastEditTime: 2020-10-22 09:19:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \gw\js\index.js
 */

let more = document.getElementById('more')
let menubox = document.querySelector('.menubox')
// console.log(menubox)

more.addEventListener('click',function(){
    var box = menubox.style.display 
    if(box === 'none'){
        var flag = true; 
       
    }
   
    if(flag){
        menubox.style.display = "block";
        flag = false;
      
    }else{
        menubox.style.display = "none";     
        flag= true;
       
    }
    
})



