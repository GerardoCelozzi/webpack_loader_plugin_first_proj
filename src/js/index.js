
//creiamo un po di dipendenze 
import Note from './note.js'//classe Note
//creiamo un instanza di Note
const nota1=new Note()

//dipendenza Css,Scss
import '../css/style.scss'



// class Test {}
// const t1=new Test;
//se mettevamo questo codice nel bundle troviamo delle funzioni perche babel quando allinea js moderno 
//con js es5 ,in es5 non c erano le classi praticamente una classe di es6=funzione in es5