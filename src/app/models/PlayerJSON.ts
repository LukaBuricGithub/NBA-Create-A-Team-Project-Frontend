export interface ListPlayerJSON
{
    data:Array<PlayerJSON>;
}
export interface PlayerJSON
{
    id:number;
    first_name:string;
    last_name:string;
    position:string;
}