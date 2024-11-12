import { useEffect, useState } from "react";
import { Api } from "./api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

type BaseData = {
  id: string;
  name: string;
};

type Province = BaseData;

type Kabupaten = BaseData & {
  id_provinsi: string;
};

type Kecamatan = BaseData & {
  id_kabupaten: string;
};

type Kelurahan = BaseData & {
  id_kecamatan: string;
};

function App() {
  const [provinces, setProvinces] = useState<Province[]>();
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [kabupaten, setKabupaten] = useState<Kabupaten[]>([]);
  const [selectedKabupaten, setSelectedKabupaten] = useState<string>("");
  const [kecamatan, setKecamatan] = useState<Kecamatan[]>([]);
  const [selectedKecamatan, setSelectedKecamatan] = useState<string>("");
  const [kelurahan, setKelurahan] = useState<Kelurahan[]>([]);
  const [selectedKelurahan, setSelectedKelurahan] = useState<string>("");

  useEffect(() => {
    Api.getProvinces().then((res) => setProvinces(res?.value));
  }, []);

  async function handleSelectProvince(provinceId: string) {
    setSelectedProvince(provinceId);

    const kabupaten = await Api.getKabupaten(provinceId);
    if (kabupaten) {
      setKabupaten(kabupaten.value);
    }
  }

  async function handleSelectKabupaten(kabupatenId: string) {
    setSelectedKabupaten(kabupatenId);
    const kecamatan = await Api.getKecamatan(kabupatenId);
    if (kecamatan) {
      setKecamatan(kecamatan.value);
    }
  }

  async function handleSelectKecamatan(kecamatanId: string) {
    setSelectedKecamatan(kecamatanId);
    const kelurahan = await Api.getKelurahan(kecamatanId);
    if (kelurahan) {
      setKelurahan(kelurahan.value);
    }
  }

  return (
    <main className="min-h-dvh w-dvw flex items-center justify-center">
      <section className="w-[400px] min-h-[400px] h-full border border-neutral-300 rounded-md flex items-center justify-center gap-4 flex-col p-4">
        <p className="text-2xl text-neutral-800 mb-8">Dependent Dropdown</p>
        {/* Provinces */}
        <Select
          onValueChange={(e) => handleSelectProvince(e)}
          value={selectedProvince}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Provinsi" />
          </SelectTrigger>
          <SelectContent>
            {provinces?.map((province) => (
              <SelectItem key={province.id} value={province.id}>
                {province.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Kabupaten */}
        <Select
          disabled={!selectedProvince}
          onValueChange={(e) => handleSelectKabupaten(e)}
          value={selectedKabupaten}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Kabupaten" />
          </SelectTrigger>
          <SelectContent>
            {kabupaten?.map((kab) => (
              <SelectItem key={kab.id} value={kab.id}>
                {kab.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Kecamatan */}
        <Select
          disabled={!selectedKabupaten}
          onValueChange={(e) => handleSelectKecamatan(e)}
          value={selectedKecamatan}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Kecamatan" />
          </SelectTrigger>
          <SelectContent>
            {kecamatan?.map((kec) => (
              <SelectItem key={kec.id} value={kec.id}>
                {kec.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Kelurahan */}
        <Select
          disabled={!selectedKecamatan}
          onValueChange={(e) => setSelectedKelurahan(e)}
          value={selectedKelurahan}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Kelurahan" />
          </SelectTrigger>
          <SelectContent>
            {kelurahan?.map((kel) => (
              <SelectItem key={kel.id} value={kel.id}>
                {kel.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>
    </main>
  );
}

export default App;
