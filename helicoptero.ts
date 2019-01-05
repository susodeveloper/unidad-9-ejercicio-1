class Helicoptero extends Vehiculo {

    constructor(plazas: number) {
        super(plazas, tiposVehiculo.aereo);
    }

    protected desplazar(): void {
        this.giraHelice();
    }

    private giraHelice() {

    }

}