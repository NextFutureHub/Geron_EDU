interface initParams{
    user: string;
    address: string;
    summ: number;
}

export class Order {
    private _user: string;
    private _address: string;
    private _summ: number;
    private _createDate: Date;
    private _deliverydate: Date;

    constructor(params: initParams){
        this._user = params.user;
        this._address = params.address;
        this._summ = params.summ;

        this._createDate = new Date();
        this._deliverydate = this._generateDeliveryDate();
    }

    

        get address(): string{
            return this.address;
        }
        set Address(value: string) {
            this._address = value;
        }

    get info(): string {
        const date = `${this._deliverydate.getDate()}.${this._deliverydate.getMonth()}.${this._deliverydate.getFullYear()}`
    
        return `${this._user}, спасибо за оформление заказа на сумму ${this._summ},\nожидайте доставку ${date}, по адресу ${this._address} `
    }


    private _generateDeliveryDate(): Date{
        const date = new Date(this._createDate)
        date.setDate(date.getDate() + 7)
        return date
    }
}