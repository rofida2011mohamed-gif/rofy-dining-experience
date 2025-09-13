import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ReservationPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Reservation Confirmed!",
      description: `Thank you, ${formData.name}! Your table for ${formData.guests} guests on ${formData.date} at ${formData.time} has been reserved.`,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "",
    });
  };

  const timeSlots = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 hero-text">
              Make a Reservation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reserve your table for an unforgettable dining experience. 
              We look forward to welcoming you to Rofy Restaurant.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="menu-card p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-foreground"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-foreground"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-foreground"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                      Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-foreground"
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-foreground"
                    required
                  >
                    <option value="">Select party size</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full elegant-button py-4 text-lg font-semibold rounded-lg"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-display font-semibold mb-4 text-gold">
                Reservation Policy
              </h3>
              <div className="text-muted-foreground space-y-2">
                <p>• Reservations can be made up to 30 days in advance</p>
                <p>• Please arrive within 15 minutes of your reservation time</p>
                <p>• For parties of 8 or more, please call us directly</p>
                <p>• Cancellations must be made at least 24 hours in advance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;