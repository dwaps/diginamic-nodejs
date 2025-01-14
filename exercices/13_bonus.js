/**

Exercice : Trouver la fréquence des mots dans une phrase

Objectif :
Écrire une fonction qui prend en entrée une chaîne de caractères et qui retourne un objet où les clés sont les mots de la phrase et les valeurs sont le nombre de fois où ces mots apparaissent.

Consignes :

Convertir la phrase en tableau de mots.
Utiliser la méthode .reduce() pour compter la fréquence des mots.
Retourner l'objet avec les fréquences.

ex: la pomme est rouge et la banane est jaune
{
  "la": 2,
  "pomme": 1,
  "est": 2,
  "rouge": 1,
  "et": 1,
  "banane": 1,
  "jaune": 1
}

 */

const countWords = (str) => {
  return str
    ? [...new Set(str.split(" "))]
        .map((v) => ({
          [v]: str.split(v).length - 1,
        }))
        .reduce(
          (a, b) => ({
            ...a,
            ...b,
          }),
          []
        )
    : {};
};

// console.log(countWords("la pomme est rouge et la banane est jaune"));

/**
Exercice : Trier un objet par valeur

Objectif :
Écrire une fonction qui prend en entrée un objet et qui retourne un 
nouvel objet dont les propriétés sont triées en fonction de leurs valeurs, 
en ordre croissant.

exemple:
{
  "pommes": 3,
  "bananes": 1,
  "cerises": 8
};

-> 

{
  "bananes": 1,
  "pommes": 3,
  "cerises": 8
}

*/

const sortObjectByValue = (obj) =>
  Object.entries(obj)
    .sort(([, v1], [, v2]) => v1 - v2)
    .map(([k, v]) => ({
      [k]: v,
    }))
    .reduce(
      (a, b) =>
        Object.values(a)[0] === Object.values(b)[0] &&
        Object.keys(a)[0] < Object.keys(b)[0]
          ? { ...a, ...b }
          : { ...b, ...a },
      {}
    );

console.log(
  sortObjectByValue({
    pommes: 3,
    olives: 3,
    bananes: 1,
    cerises: 8,
  })
);

module.exports = { countWords, sortObjectByValue };
