
// 
export type Product = {
    id: number
    name: string
    description: string
    price: number
    stock: number
    available: boolean
    image_url: string
    create_at: string
}

export type Customer = {
    id: number
    name :string
    email : string
    password_has: string
    role:string
    is_active: boolean
    create_at: string
    
}

export type order = {
    nombre: string
    fecha: string
    tipo_entrega: string
    total: string
    estado: string
    item: items[]
}

export type items = {
    cantidad: number
    precio_unitario: number
    item_id: number
}
