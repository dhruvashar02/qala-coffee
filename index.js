
import React from "react";
import { motion } from "framer-motion";

const coffeeProducts = [
  {
    name: "Signature Roast",
    description: "A rich and bold blend with hints of chocolate and spice.",
    image: "/images/coffee1.jpg",
  },
  {
    name: "Vanilla Drizzle",
    description: "Smooth medium roast with natural vanilla aroma.",
    image: "/images/coffee2.jpg",
  },
  {
    name: "Hazelnut Brew",
    description: "Nutty, creamy, and made for cozy mornings.",
    image: "/images/coffee3.jpg",
  },
];

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundImage: "url('/images/coffee-bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '3rem',
      textAlign: 'center',
    }}>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '3rem', fontWeight: 'bold' }}
      >
        Qala Coffee Co.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}
      >
        Crafting soulful brews inspired by tradition and roasted for today.
      </motion.p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {coffeeProducts.map((coffee, index) => (
          <motion.div
            key={coffee.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * index }}
            style={{
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '1rem',
              overflow: 'hidden',
              width: '300px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            <img src={coffee.image} alt={coffee.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{coffee.name}</h2>
              <p style={{ fontSize: '0.9rem' }}>{coffee.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <footer style={{ marginTop: '3rem', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} Qala Coffee Co. | Brewed with love.
      </footer>
    </main>
  );
}
