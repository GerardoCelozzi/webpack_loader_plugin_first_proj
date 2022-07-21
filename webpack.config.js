//importiamo modulo path 
const path=require('path');
//importiamo plugin html
const HtmlWebpackPlugin=require('html-webpack-plugin')//ritorna una classe
//configurazione webpack
module.exports={
entry:{//entrypoint applicazione
 //nome prop arbitrario
   index:'./src/js/index.js'
},
output:{//cartella in cui inserisce il bundle
    path:path.resolve(__dirname,'dist'),//indichiamo in quale cartella inserire il bundle utilizzando un percorso assoluto
                    //quindi utilizziamo il pacchetto path built in di node e utilizziamo la constante __dirname
    filename:"bundle.js" //nominiamo il file bundle che inserirà in dist
},
module :{rules:[
    {
        test:/\.(css|s[ac]ss)$/i,//tipo di file
        use:['style-loader','css-loader','sass-loader']//loader installati come pacchetti npm
    },
    {
        test:/\.js$/i,
        exclude:/node_modules/, //non tocca i file js in node_modules
        use:{ //quando dobbiamo passare delle opzioni insieme al loader utilizziamo un oggetto
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env']
            }
        }
   }
]},//loaders dentro rules indichiami quali loaders vogliamo utilizzare
plugins:[
    new HtmlWebpackPlugin({
        title:'Applicazione Webpack',
        template:'./src/index.html'
    
    })//instanziamo la classe che ritorna dal pacchetto html-webpack-plugin 
    //prende un oggetto di configurazione il costruttore
],
devServer:{
    port:5000,
    open:true,//apre direttamente il browser
    static:path.resolve(__dirname,'dist')//quale app il web server deve mostrare nel browser
    //noi vogliamo quindi mostrare il pacchetto creato da webpack all interno della cartella dist
},
mode:'none'

// mode='none' in base al comando che lancio vado in prod o in dev perche divido gli ambienti nel file package,json
//nell oggetto script
}

//se dal terminale lanciamo questo modulo
//node webpack.config.js
console.log("percorso assoluto : ",__dirname)//stampera il percorso assoluto con __filename anche nome file