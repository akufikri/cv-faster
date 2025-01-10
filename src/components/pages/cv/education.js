import { Button } from "@/components/button/button";

export function EducationSections() {
    return (
        <>
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
                        <div className="font-bold text-md">JURUSAN SEKOLAH</div>
                        <ul className="list-disc ps-5">
                            <li>JUARA: LOMBA A</li>
                            <li>JUARA: LOMBA B</li>
                            <li>JUARA: LOMBA C</li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}