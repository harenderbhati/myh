function MultipleBrackets(str) {

    let brastc = [];
    let flag = true;
    let noof = 0;

    for (let i = 0; i < str.length; ++i) {
        if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
            brastc.push(str[i]);
        } else if (str[i] == ')' || str[i] == '}' || str[i] == ']') {
            let pop = brastc.pop();
            if (pop == str[i]) {
                noof++;
            } else {
                flag = false;
                return 0;
            }
        }

    }

    if (flag) {
        return '1' + noof.toString();
    } else {
        return 0;
    }



}

console.log(MultipleBrackets("(c([od]er)) b(yte[e])"))