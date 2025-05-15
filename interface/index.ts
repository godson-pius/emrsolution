export interface IEntity {
    _id: string;
    entityName: string;
    location: string;
    contactInfo: string;
    contactEmail: string;
    entityType: string;
    password: string;
    regNum?: string;
    createdAt: Date;
}

export interface IClaim {
    _id: string;
    fullname: string;
    identityNum: string;
    phone: string;
    services: [];
    admissionDate: string;
    entity: string;
    createdAt: Date;
}