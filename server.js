import { createServer, Model } from "miragejs"


createServer({
    models: {
        cars: Model,
    },

    seeds(server) {
        server.create("car", { id: "1", name:"Ferrari 458 Italia", price: 89000,       description: "A high-performance sports car known for its exceptional speed, handling, and iconic design. This model is perfect for driving enthusiasts seeking adrenaline-pumping thrills.", imageUrl: "https://images.pexels.com/photos/3954422/pexels-photo-3954422.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "luxury sports", hostId:"1996" })
    
        server.create("car", { id: "2", name: "Hyundai Palisade", price: 15000,       description: "This spacious van provides ultimate flexibility for both passenger and cargo needs. Its configurable seating allows you to customize the interior for maximum comfort and convenience during your travels.", imageUrl: "https://images.pexels.com/photos/15116059/pexels-photo-15116059/free-photo-of-parked-hyundai-palisade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "hybrid suv", hostId:"123" })
    
        server.create("car", { id: "3", name: "Tesla Model S", price: 16000,       description: "A fully electric sedan with impressive range, acceleration, and autonomous driving capabilities. Its sleek design and innovative features make it a popular choice for eco-conscious drivers.", imageUrl: "https://images.pexels.com/photos/28123191/pexels-photo-28123191/free-photo-of-the-tesla-model-s-is-shown-in-this-image.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "electric sedan", hostId:"123" })
    
        server.create("car", { id: "4", name: "Volkswagen Tiguan", price: 9000,       description: "This versatile SUV offers ample seating for the whole family and plenty of cargo space for all your gear. Its all-wheel drive capability lets you confidently explore off-the-beaten-path adventures.", imageUrl: "https://images.pexels.com/photos/14038622/pexels-photo-14038622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "suv", hostId:"123" })
    
        server.create("car", { id: "5", name: "Land Rover Defender", price: 25000,       description: "Experience unparalleled comfort and style with this luxurious sedan. Enjoy a smooth ride, top-of-the-line amenities, and advanced technology features that elevate every journey.", imageUrl: "https://images.pexels.com/photos/16365199/pexels-photo-16365199/free-photo-of-silver-land-rover-defender.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "luxury suv", hostId:"96" })
    
        server.create("car", { id: "6", name: "BMW Z4", price: 18500,       description: "Unleash your adventurous spirit with this convertible. With the top down, feel the wind in your hair and immerse yourself in the beauty of the open road.", imageUrl: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "luxury convertible", hostId:"96" })
        
        server.create("car", { id: "7", name:"KIA EV3", price: 17000,       description: "Drive with a clear conscience with this fuel-efficient hybrid. Its innovative technology combines electric power with a gasoline engine for a smooth, eco-friendly driving experience.", imageUrl: "https://images.pexels.com/photos/26921632/pexels-photo-26921632/free-photo-of-side-view-of-a-white-station-wagon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "electric suv", hostId:"123" })
    
        server.create("car", { id: "8", name:"BMW X5", price: 18000,       description: "A luxurious SUV that combines the power of a sports car with the versatility of an SUV. Its sleek design and advanced technology make it a standout choice.", imageUrl: "https://images.pexels.com/photos/7762678/pexels-photo-7762678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "luxury suv", hostId:"169" })
    
        server.create("car", { id: "9", name:"Jeep", price: 9500,       description: "A rugged and reliable SUV designed for off-road adventures. Its durable build, ample space, and advanced features make it a popular choice for families and outdoor enthusiasts.", imageUrl: "https://images.pexels.com/photos/104401/pexels-photo-104401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "suv", hostId:"169" })
    
        server.create("car", { id: "10", name:"Benz Maybach S-Class", price: 35000,       description: "A pinnacle of luxury and sophistication, this sedan offers unparalleled comfort, opulence, and cutting-edge technology. It's a statement of prestige and refinement.	", imageUrl: "https://images.pexels.com/photos/26691312/pexels-photo-26691312/free-photo-of-a-black-mercedes-benz-s-class.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "luxury sedan", hostId:"96" })

        server.create("car", { id: "11", name:"Audi A8", price: 22000,       description: "A stylish and technologically advanced sedan known for its luxurious interior, powerful performance, and advanced safety features.", imageUrl: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "luxury sedan", hostId:"123" })

        server.create("car", { id: "12", name:"Lexus LS", price: 25000,       description: "A premium sedan renowned for its quiet ride, refined interior, and advanced technology. It offers a blend of comfort, performance, and prestige.", imageUrl: "https://images.pexels.com/photos/8737951/pexels-photo-8737951.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "sedan", hostId:"96" })

        server.create("car", { id: "14", name:"Acura NSX", price: 21000,       description: "A sporty and refined sedan with a focus on performance and technology. It offers a blend of luxury and sportiness at a competitive price.", imageUrl: "https://images.pexels.com/photos/17304846/pexels-photo-17304846/free-photo-of-black-acura-nsx.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "sports sedan", hostId:"123" })

        server.create("car", { id: "15", name:"Volvo XC90", price: 16000,       description: "A luxurious and safe suv known for its advanced safety features, comfortable interior, and smooth ride. It's a popular choice for families and executives.", imageUrl: "https://images.pexels.com/photos/4259350/pexels-photo-4259350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "luxury suv", hostId:"169" })

        server.create("car", { id: "16", name:"Genesis GV80", price: 18000,       description: "A luxurious and powerful suv with a focus on performance and technology. It offers a blend of luxury, sportiness, and heritage.", imageUrl: "https://images.pexels.com/photos/19899717/pexels-photo-19899717/free-photo-of-the-left-front-view-of-the-gv80-coupe-parked-underneath-a-red-sunset-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "luxury suv", hostId:"169" })

        server.create("car", { id: "17", name:"Hyundai Ioniq 6", price: 12000,       description: "A stylish and aerodynamic electric sedan with a focus on efficiency and range. It offers a comfortable and spacious interior with advanced technology features.", imageUrl: "https://images.pexels.com/photos/11158776/pexels-photo-11158776.jpeg", type: "electric suv", hostId:"96" })

        server.create("car", { id: "18", name:"Jaguar XJ", price: 12000,       description: "A flagship luxury sedan offering unparalleled comfort, opulence, and advanced technology. It's a statement of prestige and refinement.", imageUrl: "https://images.pexels.com/photos/4096528/pexels-photo-4096528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", type: "luxury sedan", hostId:"96" })
        
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

        this.get("/host/cars", (schema, request) => {
            return schema.cars.where({hostId:"123"})
        })
        this.get("/host/cars/:id", (schema, request) => {
            const id = request.params.id
            return schema.cars.where({ id, hostId:"123"})
        })
    }
})