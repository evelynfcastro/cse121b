let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
const bNames = names.filter(name=> name.charAt(0)==="B" );
console.log(bNames);

const map1 = names.map((nameLength) => nameLength.length);

const avarenge = names.reduce((total, name) => total + name.length, 0)/ names.length;