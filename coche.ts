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
import { Autonomo } from './autonomo/autonomo';
    class CocheAutonomo extends Coche implements Autonomo {
        constructor(
            plazas: number,
            public nivelAutomatizacion: number,
            public precisionGPS: number,
            public camaras: number,
            public machineLearning: boolean,
            public navegacionInercial: boolean
        ) {
            super(plazas);
        }
    }	