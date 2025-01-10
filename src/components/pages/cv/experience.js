import { Button } from "@/components/button/button";
export function ExperienceSections() {
    return (
        <>
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
                        <div className="font-bold text-md">JABATAN</div>
                        <ul className="list-disc ps-5">
                            <li>Tugas 1</li>
                            <li>Tugas 2</li>
                            <li>Tugas 3</li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}