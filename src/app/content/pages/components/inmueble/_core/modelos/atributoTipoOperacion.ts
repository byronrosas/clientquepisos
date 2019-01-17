export class OperacionModel {
    idOperacion: number;
    nombre:string;
    estado:number;

    clear() {
		this.nombre = '';
		this.estado = 1;
		
	}
}
