
{
  Donneurs:
[
   '{{repeat(100)}}',
  {
  
    id: '{{index()}}',
    Nom: '{{firstName()}}',
    Prenom:' {{surname()}}',
    gendre: '{{gender()}}',
    age: '{{integer(19, 50)}}',
    poid: '{{integer(50, 95)}}Kg',
    Telephone: '+1 {{phone()}}',
    groupe_sanguin: '{{random("A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-")}}'

  
   
  }
]
}
