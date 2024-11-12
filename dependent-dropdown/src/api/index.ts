type Response = {
  code: string;
  messages: string;
};

type ProvincesResponse = Response & {
  value: {
    id: string;
    name: string;
  }[];
};

type KabupatenResponse = Response & {
  value: {
    id: string;
    id_provinsi: string;
    name: string;
  }[];
};

type KecamatanResponse = Response & {
  value: {
    id: string;
    id_kabupaten: string;
    name: string;
  }[];
};

type KelurahanResponse = Response & {
  value: {
    id: string;
    id_kecamatan: string;
    name: string;
  }[];
};

export class Api {
  private static apiKey: string =
    "802a34344f736c8b2a93b0898f2f71d503b5ccb9a14005f5a37c498de5b2b502";
  private static baseURL: string = "https://api.binderbyte.com/wilayah";

  static async getProvinces() {
    const response = await fetch(
      `${this.baseURL}/provinsi?api_key=${this.apiKey}`
    );
    if (response.ok) {
      return response.json() as Promise<ProvincesResponse>;
    }
  }

  static async getKabupaten(provinceId: string) {
    const response = await fetch(
      `${this.baseURL}/kabupaten?api_key=${this.apiKey}&id_provinsi=${provinceId}`
    );
    if (response.ok) {
      return response.json() as Promise<KabupatenResponse>;
    }
  }

  static async getKecamatan(kabupatenId: string) {
    const response = await fetch(
      `${this.baseURL}/kecamatan?api_key=${this.apiKey}&id_kabupaten=${kabupatenId}`
    );
    if (response.ok) {
      return response.json() as Promise<KecamatanResponse>;
    }
  }

  static async getKelurahan(kecamatanId: string) {
    const response = await fetch(
      `${this.baseURL}/kelurahan?api_key=${this.apiKey}&id_kecamatan=${kecamatanId}`
    );
    if (response.ok) {
      return response.json() as Promise<KelurahanResponse>;
    }
  }
}
