export class AtributoModel {
    idAtributo: number;
    nombre:string;
    tipoDato:string;
    tipo:string;
    estado:number;

    clear() {
		this.nombre = '';
		this.estado = 1;
    this.tipoDato='';
    this.tipo='';
	}
}
