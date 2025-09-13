import chefImage from "@/assets/chef-kitchen.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 hero-text">
              About Rofy Restaurant
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A culinary journey where tradition meets innovation, 
              creating unforgettable dining experiences since our inception.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-gold">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Rofy Restaurant, where tradition meets elegance. Our Michelin-starred chef 
                blends modern creativity with authentic flavors, creating a dining experience that 
                transcends the ordinary.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every dish is crafted with passion, and every guest is treated like family. We believe 
                that exceptional cuisine is an art form, and our kitchen is our canvas where we paint 
                with the finest ingredients sourced from local farms and trusted suppliers worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to excellence extends beyond the kitchen to every aspect of your dining 
                experience, from our carefully curated wine selection to our attentive service that 
                anticipates your every need.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <div className="menu-card rounded-xl overflow-hidden">
                <img
                  src={chefImage}
                  alt="Chef preparing dishes in the kitchen"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center menu-card p-8 rounded-xl">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-gold">🏆</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-foreground">
                Award Winning
              </h3>
              <p className="text-muted-foreground">
                Recognized with prestigious culinary awards and Michelin star distinction
              </p>
            </div>

            <div className="text-center menu-card p-8 rounded-xl">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-gold">🌱</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-foreground">
                Farm to Table
              </h3>
              <p className="text-muted-foreground">
                Fresh, locally sourced ingredients delivered daily from trusted farmers
              </p>
            </div>

            <div className="text-center menu-card p-8 rounded-xl">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-gold">🍷</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-foreground">
                Expert Sommelier
              </h3>
              <p className="text-muted-foreground">
                Curated wine pairings selected by our certified sommelier team
              </p>
            </div>
          </div>

          <div className="text-center bg-elegant-card rounded-xl p-12">
            <h2 className="text-3xl font-display font-bold mb-6 hero-text">
              Our Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              "Cooking is not just about feeding the body, but nourishing the soul. At Rofy Restaurant, 
              we believe that every meal should be a celebration, every bite a moment of joy, and every 
              visit a memory that lasts a lifetime. We don't just serve food; we create experiences 
              that bring people together and celebrate the art of fine dining."
            </p>
            <div className="mt-8 text-gold font-display text-lg">
              — Chef Alexander Rofy, Executive Chef & Owner
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;