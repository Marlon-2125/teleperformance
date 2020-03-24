export class ExtraHours{
    constructor(
        public _id: string,
        public document: string,
        public fullName: string,
        public contractDateStart: string,
        public contractDateEnds: string,
        public workTimeStart: string,
        public workTimeEnds: string,
        public extraTimeStart: string,
        public extraTimeEnds: string,
        public extraTimeComment: string,
    ){

    }
    
}