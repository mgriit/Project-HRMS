export interface ProductView{
  id : number,
  name: string,
  categoryId ?: number,
  categoryName ?: string,
  supplierId ?: number,
  supplierName ?: string,
  description: string,
  stock ?: number,
  unit: string,
  price: number,
  status ?: number
}
