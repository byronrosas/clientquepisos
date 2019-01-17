export class OperacionModel {
    id: number;
    nombre:string;
    estado:number;
    constructor(){
      this.id=0;
    }

    clear() {
		this.nombre = '';
		this.estado = 1;
		
	}
}
