# GameOfThrone

## SOMMAIRE

### Yarn pour installer les node_modules

<br>

<p>
  L'application est composée de différents composant en React avec du SASS en CSS.
</p>


<p>
  Différents lien sont accessible depuis l'application : 
  <li>"/"</li>
  <li>"/characters/:id"</li>
  <li>"/houses/:id"</li>
</p>

<br>
<br>

<p>
  Sur la route "/" on peut retrouver :
  <li>Différentes statistiques sur les Books, Houses, Characters</li>
  <li>Un champ de recherche pour filtrer dans les characters présents sur la page "/" avec fonction d'autoComplete</LI>
  <li>une liste de différents characters</li>
</p>

<br>
<br>

<p>
  Sur la page "/characters/:id" on peut retrouver :
  <li>Une liste plus détaillée d'un character choisi depuis la page "/"</li>
  <li>Un lien vers sa House sur le champ Allegiance : </li>
  <li>Ses différents Aliases (si il en possède)</li>
  <li>L'acteur/actrice qui joue son rôle</li>
  <li>Ses dates de naissance et décès (si elles sont renseignées)</li>
  <li>Les différents Books dans lesquels il est présent</li>
  <li>Les différentes saisons TV auquels il a participé</li>
</p>

<br>
<br>

<p>
  Sur la page "/houses/:id on peut retrouver :
  <li>Une liste détaillée de la House avec notamment sa région, son fondateur, ses cadets (si elle en possède) ainsi que ses membres (si elle en possède</li>
  <li>Un lien vers les Characters sur le champ Members</li>
</p>
