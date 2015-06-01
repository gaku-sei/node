# Commentaire

chiffre = 42
opposé = true

chiffre = -42 if opposé

carré = (x) -> x * x

liste = [1, 2, 3, 4, 5]

math =
  racineCarrée: Math.sqrt
  carré:        carré
  cube:         (x) -> x * carré x

race = (winner, runners...) ->
  console.log print winner, runners

console.log 'L\'opposé?' if opposé?

cubes = (math.cube nombre for nombre in liste)
