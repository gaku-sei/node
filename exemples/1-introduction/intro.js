const [x, y] = [1, 2];

const words = ['chaîne', 'de', 'caractères'].map(x => x.toUpperCase());

const str = `Je suis une grande ${words.join(' ')}`;

async function userExist(id) {
  console.log(await User.findById(id));
}

function* fibonacci() {
  let [prev, curr] = [0, 1];
  while(true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for(let i of fibonacci()) {
  if(i > 100) break;
  console.log(i)
}
