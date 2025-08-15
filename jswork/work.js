const parag = document.getElementById('name')
const list = document.getElementById('list')

async function clickme(){
    console.log("clickme")
    parag.innerHTML = 'new world big changes'
    try {
       const respones = await fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
       }
       }) 
       if (!respones.ok) {
        console.log("respones")

       }
       const res = await respones.json()
       res.forEach(element => {
        const ListItem = document.createElement('li')
        ListItem.textContent = element.email
        list.appendChild(ListItem)
       });
       console.log(res, "respones")
    } catch (error) {
        console.error(error)
    // }

}}
