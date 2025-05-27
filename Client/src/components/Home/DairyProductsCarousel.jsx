import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function DairyProductsCarousel() {
    const { theme } = useContext(ThemeContext);

    const products = [
        { name: "Milk", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150" },
        { name: "Paneer", image: "https://media.istockphoto.com/id/2147498315/photo/sliced-raw-tofu-on-a-brown-cutting-board.jpg?s=612x612&w=0&k=20&c=jkRYlt-MVg3BfVyOLu2Pz3GEGfD7RroiXlCR3eg0sQU=" },
        { name: "Curd (Dahi)", image: "https://media.istockphoto.com/id/1218711576/photo/home-made-curd-in-a-earthen-bowl.jpg?s=612x612&w=0&k=20&c=fskKap0AScB1OUDRecIlxWcY4GasH-MgiU23GcQ2VDg=" },
        { name: "Butter", image: "https://media.istockphoto.com/id/1338222224/photo/butter-blocks-and-pieces-on-wooden-table-copy-space.jpg?s=612x612&w=0&k=20&c=65ZYwALchrY4iXYkfrchnnWKCpuP20TZvXnSSmWnBPM=" },
        { name: "Ghee (Clarified Butter)", image: "https://media.istockphoto.com/id/1413268611/photo/ghee-butter-oil.webp?a=1&b=1&s=612x612&w=0&k=20&c=t1C7Tzg3Ym0_bro9wV1JSwvELqpfQwqv5kpogbrMT3Q=" },
        { name: "Cheese", image: "https://media.istockphoto.com/id/1369973042/photo/swiss-hard-cheese-piece-in-wooden-tray-black-background-top-view.jpg?s=612x612&w=0&k=20&c=LmfqjCm54LO1nJCSys-lZArQq0vfN_jmBLy_3UzvCvY=" },
        { name: "Buttermilk (Chaas)", image: "https://media.istockphoto.com/id/535471850/photo/spiced-buttermilk-selective-focus.jpg?s=612x612&w=0&k=20&c=bcPpZiWUxXlraC6HuihotpsAhu0sReUbpTsZyqKtYYQ=" },
        { name: "Lassi", image: "https://media.istockphoto.com/id/519522266/photo/indian-sweet-lassi-served-in-a-big-steel-glass.jpg?s=612x612&w=0&k=20&c=7Ztl81zjncNHk_NOhWlz7i3gufSv3Dk5-XRUOCTGLGU=" },
        { name: "Cream (Malai)", image: "https://media.istockphoto.com/id/1140993208/photo/homemade-white-butter-or-makhan-makkhan-in-hindi-served-in-a-bowl-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=XMRKhOPjCX5_AsCL8hECNYSfOd6ULgEPLlypQLIWy0g=" },
        { name: "Khoa / Mawa", image: "https://media.istockphoto.com/id/506600713/photo/khoya-25.jpg?s=612x612&w=0&k=20&c=JUktuJw1O21OWGaBL-I1LQToG7DWJ5F04XLxRkM8x0w=" },
        { name: "Shrikhand", image: "https://media.istockphoto.com/id/2168835508/photo/shrikhand-is-an-indian-sweet-dish-made-of-strained-curd-garnished-with-dry-fruits-and-saffron.webp?a=1&b=1&s=612x612&w=0&k=20&c=VRq3mxr9EYSOe-X7qIG8_C54xkPR_ZBoJMD3CCuhMZI=" },
        { name: "Ice Cream", image: "https://media.istockphoto.com/id/1456234806/photo/mango-ice-cream-served-in-cup-isolated-on-grey-background-top-view-of-indian-and-bangladesh.webp?a=1&b=1&s=612x612&w=0&k=20&c=-AMw3wM-DpIdEPuS58ZqV4BAd-VKTmN6tFUtmo1degg=" },
        { name: "Flavored Milk", image: "https://media.istockphoto.com/id/1289144938/photo/flat-lay-strawberry-chocolate-and-banana-milkshakes.jpg?s=612x612&w=0&k=20&c=7qusKEAYRPcw07xcUu-OboWYrPCKgTb-bJZIKgifXsA=" },
        { name: "Milk Powder", image: "https://media.istockphoto.com/id/1356478380/photo/close-up-of-baby-milk-powder-and-spoon-on-tile-background.jpg?s=612x612&w=0&k=20&c=RRZ0hdMlsiOxnN-NjRfhSdkEOVw9eqiXT42gjWADkiI=" },
    ];

    return (
        <div className="flex">
            {products.map((product, index) => (
                <div key={index * 0.9} className="mx-6 text-center min-w-[150px]">
                    <img
                        src={product.image} 
                        alt={product.name}
                        className="h-24 w-24 mx-auto object-cover rounded-full shadow-md"
                    />

                    <p className={`mt-2 text-sm font-medium ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                        {product.name}
                    </p>
                </div>
            ))}
        </div>
    );
}
