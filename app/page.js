"use client"
export default function Home() {
  return (
    <>
      {/* होम */}
      <section id="home" style={{ minHeight: "100vh", background: "#0a0a0f", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
        <h1 style={{ color: "#ff6b00", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, marginBottom: "1rem" }}>
          नरेंद्र कंप्यूटर्स
        </h1>
        <p style={{ color: "#f0ebe0", fontSize: "clamp(1rem, 2.5vw, 1.4rem)", maxWidth: "600px", marginBottom: "2rem", lineHeight: 1.6 }}>
          वाराणसी कैंट की भरोसेमंद प्रिंटिंग सेवा — ऑफसेट, फ्लेक्स, डिजिटल और बहुत कुछ
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#order" style={{ background: "#ff6b00", color: "#fff", padding: "0.8rem 2rem", borderRadius: "6px", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
            ऑर्डर करें
          </a>
          <a href="#services" style={{ border: "2px solid #ff6b00", color: "#ff6b00", padding: "0.8rem 2rem", borderRadius: "6px", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
            सेवाएँ देखें
          </a>
        </div>
      </section>

      {/* सेवाएँ */}
      <section id="services" style={{ background: "#0f0f1a", padding: "5rem 2rem" }}>
        <h2 style={{ color: "#ff6b00", textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>हमारी सेवाएँ</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
          {[
            { id: "offset-printing", icon: "📋", name: "ऑफसेट प्रिंटिंग", desc: "ब्रोशर, नोटिस, पुस्तिका — बड़ी मात्रा में किफ़ायती" },
            { id: "flex-banner", icon: "🎪", name: "फ्लेक्स / बैनर", desc: "दुकान साइनबोर्ड, होर्डिंग — तेज़ डिलीवरी" },
            { id: "digital-printing", icon: "🖨️", name: "डिजिटल प्रिंटिंग", desc: "रंगीन व ब्लैक-व्हाइट — हर साइज़ में" },
            { id: "id-card", icon: "🪪", name: "आई-कार्ड", desc: "स्कूल, ऑफिस — PVC व लैमिनेटेड" },
            { id: "photocopy-scan", icon: "📄", name: "फोटोकॉपी / स्कैनिंग", desc: "दस्तावेज़ तैयार करना, पेपर कॉपियाँ" },
            { id: "graphic-design", icon: "🎨", name: "ग्राफिक डिज़ाइन", desc: "लोगो, लेआउट, पोस्टर — प्रिंट के लिए तैयार" },
          ].map(({ id, icon, name, desc }) => (
            <div key={id} id={id} style={{ background: "#1a1a2e", borderRadius: "10px", padding: "1.5rem", border: "1px solid #ff6b0022", transition: "border 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.border = "1px solid #ff6b00"}
              onMouseLeave={e => e.currentTarget.style.border = "1px solid #ff6b0022"}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{icon}</div>
              <h3 style={{ color: "#ff6b00", marginBottom: "0.5rem" }}>{name}</h3>
              <p style={{ color: "#ccc", fontSize: "0.9rem", lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* उत्पाद */}
      <section id="products" style={{ background: "#0a0a0f", padding: "5rem 2rem" }}>
        <h2 style={{ color: "#ff6b00", textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>उत्पाद</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", maxWidth: "900px", margin: "0 auto" }}>
          {["पोस्टर", "बैनर", "ब्रोशर", "विज़िटिंग कार्ड", "लेटरहेड", "लिफाफा", "डायरी", "शादी कार्ड"].map((item) => (
            <div key={item} style={{ background: "#1a1a2e", borderRadius: "8px", padding: "1.2rem", textAlign: "center", color: "#f0ebe0", border: "1px solid #ff6b0022", fontSize: "0.95rem" }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* संपर्क करें */}
      <section id="contact" style={{ background: "#0f0f1a", padding: "5rem 2rem" }}>
        <h2 style={{ color: "#ff6b00", textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>संपर्क करें</h2>
        <div style={{ maxWidth: "700px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem", color: "#f0ebe0", fontSize: "1rem" }}>
          <p>📍 S15/2-KH-2, घौसाबाद, कैंट, वाराणसी-221002</p>
          <p>
            📞{" "}
            <a href="tel:9415204522" style={{ color: "#ff6b00", textDecoration: "none" }}>9415204522</a>
            {" | "}
            <a href="tel:9335254551" style={{ color: "#ff6b00", textDecoration: "none" }}>9335254551</a>
          </p>
          <p>
            ✉️{" "}
            <a href="mailto:narendracomputer11@gmail.com" style={{ color: "#ff6b00", textDecoration: "none" }}>narendracomputer11@gmail.com</a>
          </p>
          <p>🕐 सोमवार–शनिवार: सुबह 10:00 – शाम 8:00</p>
          <div style={{ marginTop: "1rem", borderRadius: "10px", overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps?q=S15/2-KH-2,+Ghausabad,+Cantt,+Varanasi+221002&output=embed"
              width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}