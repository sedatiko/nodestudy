function consecutive(num) {
    var sum = 0;
    var consecutiveSums = 0;

    for(var i=1; i<num;i++){
        if(checkConseq(i,num)){
            consecutiveSums++;
        }
    };

    return consecutiveSums;
}

var checkConseq = (s, num) =>{
    console.log('checkConseq(',s,',',num,')');
    var csum = 0;
    var res = false;
    for(var j=s; j<num; j++){
        csum += j;
        // console.log("Sum: " + sum);
        if(csum == num){
            console.log("match! ", s);
            res = true;
        }
        if(csum>num){
            break;
        }
    }
    return res;
};

console.log(consecutive(100000));