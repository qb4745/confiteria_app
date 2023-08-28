export class ProductModel {
    private static SKU_BASE = 3000;

    constructor(
        public id: number,
        public sku: number,
        public name: string,
        public brand: string,
        public product_enabled: boolean
    ) {}

    static crearProducto(productData: {
        id: number,
        name: string,
        brand: string
    }): ProductModel {
        const uniqueSku = ProductModel.SKU_BASE + productData.id;

        const product = new ProductModel(
            productData.id,
            uniqueSku,
            productData.name,
            productData.brand,
            true // Set product_enabled to true by default
        );

        return product;
    }
}