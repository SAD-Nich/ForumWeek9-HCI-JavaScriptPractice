function canGiveBlood(donor,taker){
    if(donor=='A+'){
        if(taker=='A+' || taker=='AB+'){
            return true;
        }else {
            return false;
        }
    }if(donor=='A-'){
        if(taker=='A-'||taker=='A+'||taker=='AB+'||taker=='AB-'){
            return true;
        }else{
            return false;
        }
    }if(donor=='B+'){
        if(taker=='B+'||taker=='AB+'){
            return true;
        }else{
            return false;
        }
    }if(donor=='B-'){
        if(taker=='B+'||taker=='B-'||taker=='AB+'||taker=='AB-'){
            return true;
        }else{
            return false;
        }
    }if(donor=='AB+'){
        if(taker=='AB+'){
            return true;
        }else{
            return false;
        }
    }if(donor=='AB-'){
        if(taker=='Ab-'||taker=='AB+'){
            return true;
        }else{
            return false;
        }
    }if(donor=='O+'){
        if(taker == 'O+'||taker == 'B+'||taker == 'A+'||taker == 'A='||taker == 'AB+'){
            return true;
        }else{
            return false;
        }
    }if(donor=='O-'){
        if(taker=='O-'||taker=='O+'||taker=='A+'||taker=='A-'||taker=='B+'||taker=='B-'||taker=='AB-'||taker=='AB+'){
            return true;
        }else{
            return false;
        }
    }else{
        return 'Invalid Blood Type';
    }
}
console.log(canGiveBlood('A+','AB+'))
console.log(canGiveBlood('AB+','O+'))
console.log(canGiveBlood('A-','AB+'))