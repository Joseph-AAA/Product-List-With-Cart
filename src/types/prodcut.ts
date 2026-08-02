export type Product = {
    id : number,
    category : string,
    name : string,
    price : number,
    image : {
        thumbnail : string,
        mobile : string,
        tablet : string,
        desktop : string
    };
};