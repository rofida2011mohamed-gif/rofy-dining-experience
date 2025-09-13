import heroImage from "@/assets/hero-restaurant.jpg";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage = ({ onPageChange }: HomePageProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 hero-bg"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 fade-in hero-text">
            Fine Dining Experience
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 font-light tracking-wide fade-in">
            Discover world-class flavors in an elegant setting
          </p>
          <button
            onClick={() => onPageChange("reservations")}
            className="elegant-button px-8 py-4 text-lg font-semibold rounded-lg fade-in"
          >
            Book a Table
          </button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-elegant-card">
        <div className="container-width text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 hero-text">
            Welcome to Rofy Restaurant
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where culinary artistry meets timeless elegance. Our Michelin-starred chef creates 
            extraordinary dining experiences that celebrate the finest ingredients and innovative techniques. 
            Every moment at Rofy is designed to be unforgettable.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <span className="text-2xl text-gold">★</span>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-gold">
                Michelin Starred
              </h3>
              <p className="text-muted-foreground">
                Award-winning cuisine recognized for exceptional quality and innovation
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <span className="text-2xl text-gold">🍷</span>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-gold">
                Curated Wine Selection
              </h3>
              <p className="text-muted-foreground">
                Expertly selected wines from renowned vineyards around the world
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <span className="text-2xl text-gold">👨‍🍳</span>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-gold">
                Master Chef
              </h3>
              <p className="text-muted-foreground">
                Led by our renowned chef with decades of culinary excellence
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;