const mensagemSecreta = [
    "Aprender",
    "não",
    "é",
    "sobre",
    "o",
    "que",
    "você",
    "consegue",
    "facilmente",
    "na",
    "primeira",
    "vez",
    "mas",
    "sobre",
    "o",
    "que",
    "você",
    "pode",
    "descobrir",
    "- 2015",
    "Chris",
    "Pine",
    "Aprenda",
    "JavaScript",
]

mensagemSecreta.pop()
mensagemSecreta.push("a")
mensagemSecreta.push("programar.")
mensagemSecreta.splice(8,1, "certo")
mensagemSecreta.shift()
mensagemSecreta.unshift("Programação")
mensagemSecreta.splice(8,1, "certo")
mensagemSecreta.splice(7,4, "sabe")

let string = String(mensagemSecreta.join(" "))

console.log(string)

