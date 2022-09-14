let obj = [{
    id: 1,
    text: "AAA",
    data: "asdfghjkl"
  },
  {
    id: 2,
    text: "BBB",
    data: "qwertyuiop"
  },
  {
    id: 3,
    text: "CCC",
    data:"zxcvbnml"
  }
]

export function getData(){
    return obj;
}

export function getSpecificData(id){
    return obj.find((d)=>{return d.id === id});
}

export function deleteData(id){
  obj = obj.filter((d)=> d.id !== id)
}