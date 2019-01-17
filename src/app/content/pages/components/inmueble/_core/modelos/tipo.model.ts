export class TipoModel {
    idTipo: number;
    nombre:string;
    estado:number;

    clear() {
		this.nombre = '';
		this.estado = 1;
		
	}
}
