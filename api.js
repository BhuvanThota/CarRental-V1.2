export async function getCars(){
    const res = await fetch("/api/cars")
        const data = await res.json()
        return data.cars
    
}
