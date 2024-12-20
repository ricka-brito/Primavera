import Header from "@/components/header";
import NavBar from "@/components/nav";

export default function Home() {
  return (
    <div>
      <Header />
      <NavBar
        navElements={[
          { label: "Pagina Inicial", href: "/", selected: true },
          { label: "Nossos Produtos", href: "/products" },
          { label: "Crie seu produto", href: "/create-product" },
          { label: "Galeria", href: "/gallery" },
          { label: "Sobre Nós", href: "/about-us" },
          { label: "Contato", href: "/contact" },
        ]}
      />
    </div>
  );
}
