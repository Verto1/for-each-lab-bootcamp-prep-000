function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  const family = ['James', 'Leah', 'Bonnie'];

  family.forEach(callback);
  
  return family;
}

//create function dotoarray and on that array forEach() callback
function doToArray(array, callback){
  array.forEach(callback);
}