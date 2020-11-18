const StringEnd = str => {
    if (str > 6){
        return false;
    }

    if(str.endsWith("Script")){
        return  true;
    } else  {
        return false
    }
}

console.log(StringEnd("tru"))