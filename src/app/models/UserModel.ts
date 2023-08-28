export class UserModel {

    constructor(
        public id: number,
        public rut: string,
        public email: string,
        public name: string,
        public last_name: string,
        public user_type: string,
        public user_enabled: boolean,
        public phone: string,
        public address: string,
        public username: string,
        public password: string
    ) {
    }

    static crearUsuario(event: {
        id: number,
        rut: string,
        email: string,
        name: string,
        last_name: string,
        user_type: string,
        user_enabled: boolean,
        phone: string,
        address: string,
        username: string,
        password: string,
    }){
        return {
            id: event.id,
            rut: event.rut,
            email: event.email,
            name: event.name,
            last_name: event.last_name,
            user_type: event.user_type,
            user_enabled: event.user_enabled,
            phone: event.phone,
            address: event.address,
            username: event.username,
            password: event.password,
        }
    }
}