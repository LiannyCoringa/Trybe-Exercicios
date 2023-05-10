
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };

  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
const infos = {...user, ...jobInfos};
const { name, age, nationality, profession, squad, squadInitials } = infos;
const textApresentation = `${name} tem ${age} anos, de nacionalidade ${nationality}, com profissao ${profession}, squad: ${squad} - ${squadInitials}`;

console.log(textApresentation)