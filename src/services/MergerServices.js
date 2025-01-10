export const mergerServices = {
    getData() {
        const storedData = localStorage.getItem("cv_faster");
        return storedData
            ? JSON.parse(storedData)
            : {
                header: {
                    name: "John Doe",
                    address: "123 Main Street, Springfield, USA",
                    email: "john.doe@example.com",
                    phone_number: "+1 555-123-4567",
                }
            };
    },
    saveData(key, value) {
        const currentData = this.getData();
        const updatedData = { ...currentData, [key]: value };
        localStorage.setItem("cv_faster", JSON.stringify(updatedData));
    },
};
