const speakersdata = [
  {
    description,
    completed,
    index
  }
];
let i = 0;
const listcontainer = document.querySelector('ListContainer');
const AddTask = () => {
  speakersdata.push(description, false, i);
  i++;
};