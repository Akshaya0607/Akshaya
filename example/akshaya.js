var censoredwords=["sad","mad","bad"];
var customcensoredwords=[];
function censor(instr){
    for(idx in censoredwords){
        instr=instr.replace(censoredwords[idx],"***");
    }
    for(idx in customcensoredwords){
        instr=instr.replace(customcensoredwords[idx],"***");
    }
    return instr;
}
function addcensoredwords(word){
    customcensoredwords.push(word);
}
function getcensoredwords(){
    return censoredwords.concat(customcensoredwords);
}
exports.censor=censor;
exports.addcensoredwords=addcensoredwords;
exports.getcensoredwords=getcensoredwords;