import { ChevronLeft, ChevronRight, Filter, Leaf, Search } from "lucide-react";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import useAuthApi from "../hooks/useAuthApi";
import axios from "axios";

type ProductsT = {
  category_id: number;
  description: string;
  id: number;
  image: string;
  name: string;
  price: string;
  stock: number;
};

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);
  const [productsInfo, setProducts] = useState<ProductsT[] | []>([]);
  const totalPages = Math.ceil(total / 6);
  const authApi = useAuthApi();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const res = await authApi.get(`/gate/products/products?page=${currentPage}`);
        setProducts(res.data.data.products);
        setTotal(res.data.data.total);
        console.log(res.data)
        setLoading(false)
      } catch (error) {
        setError(false)
        if (axios.isAxiosError(error)) {
          console.log(error.response);
        }
      }
    };
    fetchProducts();
  }, [currentPage]);

  const categories = [
    "Tous",
    "Énergie Solaire",
    "Stockage",
    "Énergie Éolienne",
    "Jardinage",
    "Recyclage",
    "Domotique",
    "Eau",
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-['Poppins',sans-serif]">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-3">
            Nos Produits Écologiques
          </h1>
          <p className="text-green-50 text-lg">
            Découvrez notre sélection de produits innovants pour un avenir
            durable
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-8">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-green-50 hover:text-green-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {total} produits disponibles
          </h2>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-600">Filtrer par</span>
          </div>
        </div>

        {productsInfo.length > 0 && loading === false ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productsInfo.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg border ${
                  currentPage === 1
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } transition-colors`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-lg font-medium text-sm transition-all ${
                      currentPage === pageNum
                        ? "bg-green-600 text-white shadow-md"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg border ${
                  currentPage === totalPages
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                } transition-colors`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              Page {currentPage} sur {totalPages}
            </p>
          </>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}
