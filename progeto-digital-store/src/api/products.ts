import type { Product } from "../componentes/cardProductList";
export type StoreProduct = Product & { id: number; brand: string; category: string; gender: string; condition: string; description: string; images: string[]; rating: number; reviewCount: number };
type Raw = { id: number; title: string; description: string; price: number; discountPercentage: number; rating: number; brand?: string; category: string; thumbnail: string; images: string[]; reviews?: unknown[] };
type Result = { products: Raw[] };
const base = "https://dummyjson.com/products";
async function fetchJSON<T>(url: string, signal?: AbortSignal): Promise<T> { const res = await fetch(url, { signal }); if (!res.ok) throw new Error(`Erro HTTP ${res.status}`); return res.json() as Promise<T> }
function adapt(p: Raw): StoreProduct { return { id: p.id, name: p.title, image: p.thumbnail, price: p.price, priceDiscount: Number((p.price * (1 - p.discountPercentage / 100)).toFixed(2)), isOffer: p.discountPercentage > 0, brand: p.brand ?? "Sem marca", category: p.category, gender: p.category === "mens-shoes" ? "Masculino" : "Feminino", condition: "Novo", description: p.description, images: p.images?.length ? p.images : [p.thumbnail], rating: p.rating, reviewCount: p.reviews?.length ?? 0 } }
export async function getProducts(signal?: AbortSignal): Promise<StoreProduct[]> { const [m, w] = await Promise.all([fetchJSON<Result>(`${base}/category/mens-shoes`, signal), fetchJSON<Result>(`${base}/category/womens-shoes`, signal)]); return [...m.products, ...w.products].map(adapt) }
export async function getProductById(id: number, signal?: AbortSignal): Promise<StoreProduct> { return adapt(await fetchJSON<Raw>(`${base}/${id}`, signal)) }
