//bad
var averageTempDay1 = [72, 75, 79, 81, 81];
var averageTempDay2 = [81, 79, 75, 73, 72];

//good
var averageTempDay = [];
averageTempDay[0] = [72, 75, 79, 81, 81];
averageTempDay[1] = [81, 79, 75, 73, 72];

//二维数组
averageTempDay[0] = [];
averageTempDay[0][0] = 72;
averageTempDay[0][1] = 75;
averageTempDay[0][2] = 79;
averageTempDay[0][3] = 79;
averageTempDay[0][4] = 81;
averageTempDay[0][5] = 81;

averageTempDay[1] = [];
averageTempDay[1][0] = 81;
averageTempDay[1][1] = 81;
averageTempDay[1][2] = 79;
averageTempDay[1][3] = 79;
averageTempDay[1][4] = 75;
averageTempDay[1][5] = 71; 

//迭代二维数组

function erwei(array){
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i]; j++){
            console.log(array[i][j]);
        }
    }
}

//多维数组
//创建一个X3X3X3的矩阵
var martix3x3x3 = [];
for(var i = 0; i<3; i++){
    martix3x3x3[i] = [];
    for(var j =0; j<3; j++){
        martix3x3x3[i][j] = [];
        for(var z = 0; z<3; z++){
            martix3x3x3[i][j][z] = i + j + z;
        }
    }
}
//输出这个矩阵
for(var i = 0; i<martix3x3x3.length; i++){
    for(var j = 0; j<martix3x3x3[i].length; j++){
        for(var z = 0; z<martix3x3x3[i][j].length; z++){
            console.log(martix3x3x3[i][j][z]);
        }
    }
}