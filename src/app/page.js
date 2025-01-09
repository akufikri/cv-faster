import { Button } from "@/components/button/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full h-auto flex items-center justify-center">
        <div className="card card-bordered max-w-2xl w-full border h-[88vh] rounded shadow-md bg-base-100">
          <div className="card-body">
            <div className="text-center card-header space-y-3">
              <h1 className="font-black text-xl uppercase">fikri nurhakim</h1>
              <div className="flex items-center justify-center text-sm">
                <span className="capitalize">cirebon, jawabarat, indonesia </span>
                <div className="divider-horizontal divider w-0"></div>
                <span>jhon.doe@example.com</span>
                <div className="divider-horizontal divider w-0"></div>
                <span>+621234567890</span>
              </div>
            </div>
            {/* summary */}
            <div>
              <p className="text-sm">
                Lulusan Sekolah Menengah Kejuruan dengan konsentrasi di bidang Rekayasa Perangkat Lunak. Berpengalaman dalam pengembangan backend dan web development, dengan keterampilan yang terasah melalui partisipasi aktif selama dua tahun di divisi Backend Developer dan Web Developer dalam sebuah organisasi. Selain itu, memiliki pengalaman magang selama satu tahun di Bank Rakyat Padang, khususnya di bidang Backend Developer atau Web Development.
              </p>
            </div>
            {/* expirence */}
            <div>
              <div className="divider-vertical divider">
                <Button type="btn-ghost" size="sm">Add Experience</Button>
              </div>
              <section className="mb-2">
                <div className="font-bold text-md mb-2">PENGALAMAN MAGANG</div>
                <hr className="border rounded-full border-gray-700" />
                <div className="flex justify-between mt-2">
                  <div className="font-bold text-sm mb-2">NAMA INSTITUSI</div>
                  <div className="font-bold text-sm mb-2 text-end">ALAMAT, <span className="block">TAHUN</span></div>
                </div>
                <div>
                  <div className="font-bold text-md">
                    JABATAN
                  </div>
                  <ul className="list-disc ps-5">
                    <li>Tugas 1</li>
                    <li>Tugas 2</li>
                    <li>Tugas 3</li>
                  </ul>
                </div>
              </section>
            </div>
            {/* education */}
            <div>
              <div className="divider-vertical divider">
                <Button type="btn-ghost" size="sm">Add Education</Button>
              </div>
              <section className="mb-2">
                <div className="font-bold text-md mb-2">EDUCATION</div>
                <hr className="border rounded-full border-gray-700" />
                <div className="flex justify-between mt-2">
                  <div className="font-bold text-sm mb-2">NAMA SEKOLAH</div>
                  <div className="font-bold text-sm mb-2 text-end">ALAMAT, <span className="block">TAHUN MASUK - TAHUN KELUAR</span></div>
                </div>
                <div>
                  <div className="font-bold text-md">
                    JURUSAN SEKOLAH
                  </div>
                  <ul className="list-disc ps-5">
                    <li>JUARA: LOMBA A</li>
                    <li>JUARA: LOMBA B</li>
                    <li>JUARA: LOMBA C</li>
                  </ul>
                </div>
              </section>
            </div>
            {/* other information */}
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="w-full">
                  <h1 className="font-bold text-sm mb-2">LANGUAGE</h1>
                  <hr className="border rounded-full border-gray-700" />
                  <ul className="list-disc ps-5 mt-2">
                    <li>JUARA: POINT 1</li>
                    <li>JUARA: POINT 2</li>
                    <li>JUARA: POINT 3</li>
                  </ul>
                </div>
                <div className="w-full">
                  <h1 className="font-bold text-sm mb-2">INTEREST</h1>
                  <hr className="border rounded-full border-gray-700" />
                  <ul className="list-disc ps-5 mt-2">
                    <li>JUARA: POINT 1</li>
                    <li>JUARA: POINT 2</li>
                    <li>JUARA: POINT 3</li>
                  </ul>
                </div>
                <div className="w-full">
                  <h1 className="font-bold text-sm mb-2">STRENGTH</h1>
                  <hr className="border rounded-full border-gray-700" />
                  <ul className="list-disc ps-5 mt-2">
                    <li>JUARA: POINT 1</li>
                    <li>JUARA: POINT 2</li>
                    <li>JUARA: POINT 3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
