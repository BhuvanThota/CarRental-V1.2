import { createServer, Model } from "miragejs"


createServer({
    models: {
        cars: Model,
    },

    seeds(server) {
        server.create("car", { id: "1", name: "Compact Commuter", price: 6000,       description: "This fuel-efficient hatchback is perfect for navigating city streets and finding tight parking spots. Its spacious interior offers surprising cargo capacity for weekend getaways.", imageUrl: "https://images.pexels.com/photos/28123191/pexels-photo-28123191/free-photo-of-the-tesla-model-s-is-shown-in-this-image.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "sedan" })
        server.create("car", { id: "2", name: "Family Adventure", price: 8000,       description: "This versatile SUV offers ample seating for the whole family and plenty of cargo space for all your gear. Its all-wheel drive capability lets you confidently explore off-the-beaten-path adventures.",
            imageUrl: "https://images.pexels.com/photos/14038622/pexels-photo-14038622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "suv" })
        server.create("car", { id: "3", name: "Luxury Cruiser", price: 10000,       description: "Experience unparalleled comfort and style with this luxurious sedan. Enjoy a smooth ride, top-of-the-line amenities, and advanced technology features that elevate every journey.",
            imageUrl: "https://images.pexels.com/photos/16365199/pexels-photo-16365199/free-photo-of-silver-land-rover-defender.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "luxury suv" })
        server.create("car", { id: "4", name: "Open-Air Explorer", price: 8500,       description: "Unleash your adventurous spirit with this convertible. With the top down, feel the wind in your hair and immerse yourself in the beauty of the open road.",
            imageUrl: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "convertible" })
        server.create("car", { id: "5", name: "Spacious Sprinter", price: 11000,       description: "This spacious van provides ultimate flexibility for both passenger and cargo needs. Its configurable seating allows you to customize the interior for maximum comfort and convenience during your travels.",
            imageUrl: "https://images.pexels.com/photos/15116059/pexels-photo-15116059/free-photo-of-parked-hyundai-palisade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "xuv" })
        server.create("car", { id: "6", name:"Electric Hybrid", price: 7000,       description: "Drive with a clear conscience with this fuel-efficient hybrid. Its innovative technology combines electric power with a gasoline engine for a smooth, eco-friendly driving experience.",
            imageUrl: "https://images.pexels.com/photos/26921632/pexels-photo-26921632/free-photo-of-side-view-of-a-white-station-wagon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "hybrid suv" })
    },

    routes() {
        this.namespace = "api"

        this.get("/cars", (schema, request) => {
            return schema.cars.all()
        })
        
        this.get("/cars/:id", (schema, request) => {
            const id = request.params.id
            return schema.cars.find(id)
        })
    }
})