class Coche extends Vehiculo {

    constructor(plazas: number) {
        super(plazas, tiposVehiculo.terrestre);
    }

    protected desplazar(): void {
        this.giraRuedas();
    }

    private giraRuedas() {

    }

}