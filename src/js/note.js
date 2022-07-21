//aggiungiamo una dipendeza

import Drag from './drag'

export default class Note extends Drag{

    constructor(){
        super();
        console.log('ciao sono il construttore della classe Note')
    }

}