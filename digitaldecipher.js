function digitaldecipher(message, cipher){
    const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var result = "";
    cipher = Array.from(String(cipher), Number);
    
    for (var i = 0; i < message.length; i++) {
        result = result + alphabets[message[i] - 1 - cipher[i % cipher.length]];
}
    
    return result;
}

console.log(digitaldecipher([20,12,18,30,21],1939));
console.log(digitaldecipher([14,30,11,1,20,17,18,18],1990));
console.log(digitaldecipher([6,4,1,3,9,20],100));