class Vehiculo {
    public plazas: number;
    public tipo: tiposVehiculo;
    protected desplazar() {}

    constructor(plazas: number, tipo: tiposVehiculo) {
        this.plazas = plazas;
        this.tipo = tipo;
    }
}