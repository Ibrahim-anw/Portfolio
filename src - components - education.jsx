import './Education.css'

const timeline = [
  {
    year: '2025 — Present',
    title: 'B.Sc. in Computer Science & Engineering',
    place: 'Metropolitan University, Sylhet',
  },
  {
    year: '2023',
    title: 'Higher Secondary Certificate (HSC)',
    place: 'Scholarshome, Sylhet',
  },
  {
    year: '2021',
    title: 'Secondary School Certificate (SSC)',
    place: 'Blue Bird School & College',
  },
]

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label">Academic background</p>
        <h2 className="section-title">Education</h2>

        <ul className="timeline">
          {timeline.map((entry) => (
            <li className="timeline__item" key={entry.title}>
              <span className="timeline__year">{entry.year}</span>
              <div>
                <h3 className="timeline__title">{entry.title}</h3>
                <p className="timeline__place">{entry.place}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education
