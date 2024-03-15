


export interface Iprod  {
    pname: string;
    pdetail: string;
    id : number
    pstatus: psataus;
   
}


export enum psataus {
    Delivered = "Delivered",
    Inprograse = "Inprograse",
    Dispatched = "Dispatched"
}
