export default function Marquee() {
  const skills = ["React", "Next.js", "Ruby on Rails", "Docker & Heroku", "AWS / Fastly"];

  return (
    <div className="marquee-wrapper">
      {/* Top row – Skills */}
      <div className="marquee-inner first">
        <ul
          className="marquee"
          style={{ "--count": skills.length * 2, "--width": "180px", "--gap": "48px" }}
        >
          {skills.concat(skills).map((item, i) => (
            <li key={i} className="marquee-item" style={{ "--index": i }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom row – Reverse order */}
      <div className="marquee-inner second">
        <ul
          className="marquee"
          style={{ "--count": skills.length * 2, "--width": "180px", "--gap": "48px" }}
        >
          {skills
            .slice()
            .reverse()
            .concat(skills.slice().reverse())
            .map((item, i) => (
              <li key={i} className="marquee-item" style={{ "--index": i }}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
