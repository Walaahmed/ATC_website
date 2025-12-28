const partnersLogos = [
  { name: "بلدية دبي", initials: "BD" },
  { name: "جمارك دبي", initials: "JD" },
  { name: "شركة ألفا أرون", initials: "AA" },
  { name: "كلية باركينج", initials: "KB" },
  { name: "هيئة الطرق", initials: "HT" },
  { name: "وزارة التعليم", initials: "WT" },
  { name: "غرفة التجارة", initials: "GT" },
  { name: "هيئة الصحة", initials: "HS" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 relative overflow-hidden border-t border-b border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <h3 className="text-center text-lg text-muted-foreground mb-10">
          شركاؤنا بالنجاح
        </h3>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {partnersLogos.map((partner, index) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center p-4 rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:bg-secondary"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground font-bold text-sm group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
                {partner.initials}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
