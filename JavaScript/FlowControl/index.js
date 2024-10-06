// flow controller

// IF 

const std1 = 300;
const std2 = 250;

if(std1 == std2){
    console.log("running if...!");
}
else if(std1 > std2){
    console.log("running else if..!")
}
else{
    console.log("running error..!")
}

// -----------------------------------------------------------------------------

const marks = 81;

if(marks > 74){
    console.log(" Result A");
}
else if(marks > 64){
    console.log(" Result B");
}
else if(marks > 44){
    console.log(" Result C");
}
else if(marks > 34){
    console.log(" Result D");
}
else{
    console.log(" Result Fail");
}

// -----------------------------------------------------------------------------

// switch

const val = "Intake 2";
switch(val){
    case 'Intake 1':
        console.log("ACPT - AWMD Intake 01");
        break;
    case 'Intake 2' :
        console.log("ACPT - AWMD Intake 02");
        break;
    default:
        console.log("Error.......!");
        
}

const week ='Sat';
switch(week){
    case 'Mon' :
        console.log(" It is WeekDay");
        break;
    case 'Tue' :
            console.log(" It is WeekDay");
            break;
    case 'Wed' :
            console.log(" It is WeekDay");
            break;
    case 'Thu' :
            console.log(" It is WeekDay");
            break;
    case 'Fri' :
            console.log(" It is WeekDay");
            break;
    default:
            console.log(" It is WeekEnd");
}