import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Catalog from '@/components/Catalog';
import CarSelector from '@/components/CarSelector';
import About from '@/components/About';
import Delivery from '@/components/Delivery';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Catalog />
        <CarSelector />
        <About />
        <Delivery />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}