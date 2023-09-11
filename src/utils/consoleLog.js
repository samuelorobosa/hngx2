//Custom Logging Function that is absent in production
export default function consoleLog(...args){
    if (process.env.NODE_ENV !== 'production'){
        return console.log(...args);
    }
}