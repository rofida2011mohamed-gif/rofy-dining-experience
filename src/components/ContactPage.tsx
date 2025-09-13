import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 hero-text">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for reservations, inquiries, or to learn more 
              about our private dining options.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="menu-card p-8 rounded-xl">
                <h2 className="text-2xl font-display font-bold mb-6 text-gold">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">reservations@rofyrestaurant.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Fine Dining Street<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Sunday</p>
                        <p>12:00 PM - 11:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="menu-card p-8 rounded-xl">
                <h3 className="text-xl font-display font-bold mb-6 text-gold">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="menu-card rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280011374!2d-74.11976373946234!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635959405707!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rofy Restaurant Location"
              ></iframe>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 text-center bg-elegant-card rounded-xl p-12">
            <h2 className="text-3xl font-display font-bold mb-6 hero-text">
              Private Events & Catering
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Host your special occasions at Rofy Restaurant. From intimate birthday celebrations 
              to corporate events and wedding receptions, we offer customized menus and exceptional 
              service to make your event unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:events@rofyrestaurant.com"
                className="elegant-button px-6 py-3 rounded-lg font-semibold"
              >
                Events Inquiry
              </a>
              <a
                href="tel:+15551234567"
                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;