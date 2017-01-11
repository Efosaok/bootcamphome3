var file = {}

file.findMissing = function(arr1,arr2){
	//create a container to receive the distinct values of arr1
  var arrsum = 0
  for (var i = 0;i < arr1.length;i++){
    arrsum += arr1[i]
    }
    //created a container to receive the valus of arr2
    var arrsumi = 0
    for (var x = 0;x < arr2.length;x++){
      arrsumi += arr2[x]
    }
    return arrsumi - arrsum
}

module.exports = file