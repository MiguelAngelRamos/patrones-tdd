export class Singleton {

  private static instance: Singleton;
  private constructor() {}

  public static getInstance(): Singleton {
    if(!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

}

//* El estatico se llama por el "NombreClase" y el operador "punto", llamamos al método a la propiedad static.