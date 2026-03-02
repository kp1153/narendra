export default function Footer() {
  return (
    <footer style={{
      background: "#1a1a2e",
      color: "#f0ebe0",
      textAlign: "center",
      padding: "1.2rem 1rem",
      fontSize: "0.85rem",
      borderTop: "1px solid #ff6b0033"
    }}>
      <p>📍 S15/2-KH-2, घौसाबाद, कैंट, वाराणसी-221002</p>
      <p style={{ margin: "0.3rem 0" }}>
        📞 <a href="tel:9415204527" style={{ color: "#ff6b00", textDecoration: "none" }}>9415204522</a>
        {" | "}
        <a href="tel:9335254558" style={{ color: "#ff6b00", textDecoration: "none" }}>9335254551</a>
        {" | "}
        <a href="mailto:narendracomputer11@gmail.com" style={{ color: "#ff6b00", textDecoration: "none" }}>narendracomputer11@gmail.com</a>
      </p>
      <p style={{ marginTop: "0.5rem", color: "#888", fontSize: "0.75rem" }}>
        © {new Date().getFullYear()} नरेंद्र कंप्यूटर्स | वेबसाइट:{" "}
        <a href="https://www.web-developer-kp.com" target="_blank" rel="noopener noreferrer"
          style={{ color: "#a78bfa", textDecoration: "none", fontWeight: 600 }}>
          web-developer-kp.com
        </a>
      </p>
    </footer>
  );
}