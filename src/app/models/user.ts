

export interface User {
    id:number
    name:string
    email:string;
    company_id:number
    financial_id:number
    Additional_company_ids:Array<string>
    access_level:number
    created_at:Date,
    language:string,
    timezone:string,
    avatar:string
}
