function fastSort(){
	if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
}

   
   function selec(val,ele){
        var opa=val.querySelectorAll('option');
        for(var i=0;i<opa.length;i++){
            if(opa[i].innerHTML===ele){
                opa[i].selected = true
                //val.className="colorG1";
                return
            }else {
                continue;
            }
        }
    }
   // selec(query('#isAudit'),'宥狛');
