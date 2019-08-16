let images = [
    './img/grey/1.png',
    './img/grey/2.png',
    './img/grey/3.png',
    './img/black/1.png',
    './img/black/2.png',
    './img/black/3.png',
    './img/white/1.png',
    './img/white/2.png',
    './img/white/3.png',
    './img/pink/1.png',
    './img/pink/2.png',
    './img/pink/3.png',
 ];

 const extractColor = (item) => {
    let imgPos = item.indexOf("g") + 1;
    item = item.slice(imgPos);
    imgPos = item.indexOf("/") + 1;
    item = item.slice(imgPos);
    let color = item.split("/")[0];
    return color
 }


 var str =  './img/black/3.png';
 let mainCol = extractColor(str);


 let filtered = images.filter((item,index) => {
       let itemColor = extractColor(item);
       if (itemColor == mainCol) {
           return item
       }
 });

 console.log(filtered);