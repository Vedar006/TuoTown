export interface ICard{
	id:number,
    title:string,
    price:number,
    descr:string,
    new:boolean,
    imageUrl:string,
    type:number,
    newItem?:boolean
}