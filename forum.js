

function closedial(event) {
    
   
    dialog = document.getElementById("dialo")
    event.preventDefault()
    dialog.close()
   
    
}

function opendial(event) {
    
    dialog = document.getElementById("dialo");
    event.preventDefault()
    dialog.showModal();
}

function sendet(event) {
    console.log("testi")
    dialog = document.getElementById("dialo");
    event.preventDefault()
    var sen = document.getElementById("nimi").value
    var päiv = new Date()
    var päi = päiv.getDate()
    var kuu = päiv.getMonth()
    kuu = kuu + 1
    var yer = päiv.getFullYear()
    if (päi.length = 1) {
        päi = "0"+päi
    }
    if (kuu.length = 1) {
        kuu = "0"+kuu
    }
    var dat = yer + "-" +kuu+"-"+päi
    var tit = document.getElementById("title").value
    var bod = document.getElementById("texti").value
    
    templist = [{
        "sender":"",
        "date":"",
        "title":"",
        "body":""
    }]
    
    templist.sender = sen
    templist.date = dat
    templist.title = tit
    templist.body = bod
    lista.push(templist)
   
    dialog.close()
    luoRivi()
}



var lista = [
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "looking for someone",
        "body": "Hi, I'm looking for someone I used to know in high school. I'm wondering if I could find him here?"
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Let's ask around. What's his name?"
    },
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Yeah, his name is Seymore Butz."
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Is there a Butz here? Everybody! I wanna Seymore Butz!"
    },
    {
        "sender": "Barney",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "LOL"
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Oh, wait a minute. Listen you little scum-sucking pus bucket. When I get my hands on you, I'm gonna pull out your eyeballs with a corkscrew!"
    },
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "😂😂😂😂😂😂😂😂😂😂😂"
    }
]

function luoRivi(event){
    var ul = document.getElementById("ul")
    for (var list of lista){
        var ele = document.createElement("h3")
        ele.innerHTML = list.sender + "  -  " + list.date
        ul.append(ele)
        var ele2 = document.createElement("h2")
        ele2.innerHTML = list.title
        ul.append(ele2)
        var ele3 = document.createElement("h3")
        ele3.innerHTML = list.body
        ul.append(ele3)
        var br = document.createElement("div")
        br.classList.add("br")
        ul.append(br)
    }
    
}

luoRivi()
