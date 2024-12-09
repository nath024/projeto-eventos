class Evento{
   private _nome: string;
   private _local: string;
   private _participantes: string[];
   private _organizador: string[];

   constructor(nome: string, local: string, participantes: string[], organizador: string[]){
    this._nome = nome;
    this._local = local;
    this._participantes = participantes;
    this._organizador = organizador;
   }
}