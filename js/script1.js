const a = [1, 2, 3];
for (let i = 4; i <= 6; i++){
    a.push(i);
}
console.log(a);

const b = [1, 2, 3];
for (let i = 6; i >= 4; i--){
    b.unshift(i);
}
console.log(b);

const c = ['js', 'css', 'jq'];
console.log(c[0]);

const d = ['js', 'css', 'jq'];
console.log(d[d.length - 1]);

let e = [1, 2, 3, 4, 5];
e = e.slice(0, 3);
console.log(e);

let f = [1, 2, 3, 4, 5];
f = f.slice(3);
console.log(f);
