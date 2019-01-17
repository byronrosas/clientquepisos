export class CategoriaModel {
    idCategoria: number;
    nombre:string;
    estado:number;

    clear() {
		this.nombre = '';
		this.estado = 1;
		
	}
}
