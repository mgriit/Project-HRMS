export interface Product {
  id : number,
  name: string,
  categoryId ?: number,
  categoryName ?: string,
  supplierId ?: number,
  supplierName ?: string,
  description: string,
  stock ?: number,
  unit: string,
  bprice: number,
  price: number,
  status ?: number
}
