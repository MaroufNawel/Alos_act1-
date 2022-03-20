var unirest = require('unirest')

// Question 2
function name_starts_with(Donneurs, letter) {
    return Donneurs.filter(Donneur => Donneur.Nom[0] == letter)
}

var req = unirest('GET', 'http://localhost:3000/Donneurs').headers({
    "cache-control": "no-cache" 
    // Question 3: Role de ligne 06: peut ètre stocké dans le cache si validé par le serveur d'origine, mème si est non-cacheable 
}).then((res) => {
    if (res.error) throw new Error(res.error)

    // Question 1
    var first_10_Donneurs = res.body.slice(0, 10)
    console.log("FIRST 10 DONNEURS:\n")
    console.log(first_10_Donneurs)

    //calling function "name_starts_with" for question 2
    console.log("\n\n\n\n")
    console.log("Donneurs THAT START WITH THE LETTER M:\n")
    console.log(name_starts_with(res.body, "M"))
})
