'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('realidad')

  return (
    <div className="container">
      <header>
        <h1>🚀 Viajes a Marte 🔴</h1>
        <p className="subtitle">Misiones Tripuladas: ¿Ficción o Realidad?</p>
      </header>

      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'realidad' ? 'active' : ''}`}
          onClick={() => setActiveTab('realidad')}
        >
          Realidad
        </button>
        <button
          className={`tab-button ${activeTab === 'ficcion' ? 'active' : ''}`}
          onClick={() => setActiveTab('ficcion')}
        >
          Ficción
        </button>
        <button
          className={`tab-button ${activeTab === 'comparacion' ? 'active' : ''}`}
          onClick={() => setActiveTab('comparacion')}
        >
          Comparación
        </button>
      </div>

      {activeTab === 'realidad' && (
        <div className="content-grid">
          <div className="card">
            <h3>🌍 Misiones Reales Planificadas</h3>
            <div className="timeline">
              <div className="timeline-item">
                <strong>NASA - Programa Artemis</strong>
                <p>Meta: Década de 2030-2040</p>
                <p>Primero retorno a la Luna como prueba de tecnologías para Marte.</p>
              </div>
              <div className="timeline-item">
                <strong>SpaceX - Starship</strong>
                <p>Meta: 2029-2030 (optimista)</p>
                <p>Elon Musk planea misiones tripuladas con la nave Starship reutilizable.</p>
              </div>
              <div className="timeline-item">
                <strong>China (CNSA)</strong>
                <p>Meta: Década de 2040</p>
                <p>Programa espacial ambicioso con misiones robóticas en preparación.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>🔬 Desafíos Técnicos Reales</h3>
            <h4>Propulsión y Viaje:</h4>
            <ul>
              <li>Duración: 6-9 meses de viaje (cada trayecto)</li>
              <li>Necesidad de combustible para regreso</li>
              <li>Ventanas de lanzamiento cada 26 meses</li>
            </ul>
            <h4>Salud de Astronautas:</h4>
            <ul>
              <li>Radiación cósmica (sin campo magnético protector)</li>
              <li>Pérdida de masa muscular y ósea</li>
              <li>Efectos psicológicos del aislamiento</li>
            </ul>
            <h4>Supervivencia en Marte:</h4>
            <ul>
              <li>Temperatura: -63°C promedio</li>
              <li>Atmósfera: 95% CO₂, presión 1% de la Tierra</li>
              <li>Producción de agua, oxígeno y alimentos</li>
            </ul>
          </div>

          <div className="card">
            <h3>🛠️ Tecnologías en Desarrollo</h3>
            <span className="badge">ISRU</span>
            <span className="badge">Trajes Espaciales</span>
            <span className="badge">Hábitats Inflables</span>
            <span className="badge">Propulsión Nuclear</span>
            <p><strong>ISRU (In-Situ Resource Utilization):</strong> Producir combustible y agua desde recursos marcianos.</p>
            <p><strong>Perseverance MOXIE:</strong> Experimento que ya produce oxígeno desde CO₂ marciano.</p>
            <p><strong>Starship:</strong> Nave totalmente reutilizable con capacidad de 100+ toneladas.</p>
            <p><strong>Gateway Lunar:</strong> Estación espacial en órbita lunar como punto intermedio.</p>
          </div>

          <div className="card">
            <h3>📊 Datos Actuales de Marte</h3>
            <p><strong>Distancia de la Tierra:</strong> 54.6 - 401 millones km (varía)</p>
            <p><strong>Gravedad:</strong> 38% de la Tierra (3.71 m/s²)</p>
            <p><strong>Día marciano:</strong> 24h 37min</p>
            <p><strong>Año marciano:</strong> 687 días terrestres</p>
            <p><strong>Misiones robóticas exitosas:</strong></p>
            <ul>
              <li>Perseverance (2021-presente) + helicóptero Ingenuity</li>
              <li>Curiosity (2012-presente)</li>
              <li>InSight (2018-2022) - estudió interior de Marte</li>
              <li>Tianwen-1 (China, 2021)</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'ficcion' && (
        <div className="content-grid">
          <div className="card">
            <h3>📚 Literatura Clásica</h3>
            <h4>"Las Crónicas Marcianas" (1950) - Ray Bradbury</h4>
            <p>Colonización poética y metafórica de Marte. Reflexión sobre humanidad e imperialismo.</p>

            <h4>"La Guerra de los Mundos" (1898) - H.G. Wells</h4>
            <p>Invasión marciana a la Tierra. Pionera de la ciencia ficción.</p>

            <h4>"El Marciano" (2011) - Andy Weir</h4>
            <p>Astronauta sobrevive solo en Marte. Enfoque científico realista.</p>
          </div>

          <div className="card">
            <h3>🎬 Cine y Series</h3>
            <h4>"The Martian" (2015) - Ridley Scott</h4>
            <p>Adaptación de "El Marciano". Matt Damon como astronauta abandonado. Ciencia bastante precisa.</p>

            <h4>"Total Recall" (1990)</h4>
            <p>Marte colonizado con atmósfera artificial. Acción y conspiración.</p>

            <h4>"Mission to Mars" (2000)</h4>
            <p>Misión de rescate descubre vida antigua marciana.</p>

            <h4>"For All Mankind" (Serie TV)</h4>
            <p>Historia alternativa donde la carrera espacial nunca terminó. Marte colonizado en la temporada 3.</p>
          </div>

          <div className="card">
            <h3>🎮 Videojuegos</h3>
            <p><strong>Surviving Mars:</strong> Simulador de construcción de colonias marcianas.</p>
            <p><strong>Red Faction:</strong> Rebelión de colonos en Marte.</p>
            <p><strong>DOOM:</strong> Demonios invaden base marciana (muy ficticio).</p>
            <p><strong>Deliver Us Mars:</strong> Aventura sobre salvar la Tierra con tecnología marciana.</p>
          </div>

          <div className="card">
            <h3>🌟 Temas Comunes en Ficción</h3>
            <ul>
              <li>✅ <strong>Terraformación:</strong> Convertir Marte en Tierra 2.0</li>
              <li>✅ <strong>Vida marciana:</strong> Desde microorganismos hasta civilizaciones</li>
              <li>✅ <strong>Colonias independientes:</strong> Conflictos con la Tierra</li>
              <li>✅ <strong>Minería espacial:</strong> Recursos valiosos</li>
              <li>✅ <strong>Viajes rápidos:</strong> Tecnologías de propulsión avanzadas</li>
              <li>✅ <strong>Gravedad artificial:</strong> Solución mágica a problemas de salud</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'comparacion' && (
        <div>
          <div className="card">
            <h3>⚖️ Ficción vs Realidad</h3>

            <div className="comparison">
              <div className="card fiction-side">
                <h4>🎭 FICCIÓN</h4>
                <p><strong>Viaje:</strong> Semanas o días con propulsión avanzada</p>
                <p><strong>Gravedad:</strong> A menudo tienen gravedad artificial</p>
                <p><strong>Comunicación:</strong> Instantánea con la Tierra</p>
                <p><strong>Atmósfera:</strong> Frecuentemente terraformada o con domos perfectos</p>
                <p><strong>Vida marciana:</strong> Desde microbios hasta humanoides</p>
              </div>

              <div className="card reality-side">
                <h4>✅ REALIDAD</h4>
                <p><strong>Viaje:</strong> 6-9 meses con tecnología actual</p>
                <p><strong>Gravedad:</strong> 38% de la Tierra, sin solución fácil</p>
                <p><strong>Comunicación:</strong> 3-22 minutos de retraso (cada dirección)</p>
                <p><strong>Atmósfera:</strong> 1% presión, 95% CO₂, -63°C promedio</p>
                <p><strong>Vida marciana:</strong> No encontrada (aún). Búsqueda activa.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>🎯 ¿Qué es Posible y Qué No?</h3>

            <h4>✅ POSIBLE en las próximas décadas:</h4>
            <ul>
              <li>Misiones tripuladas de exploración</li>
              <li>Bases científicas pequeñas</li>
              <li>Producción de agua y oxígeno local</li>
              <li>Cultivo de plantas en invernaderos</li>
              <li>Exploración robótica avanzada</li>
            </ul>

            <h4>⏳ POSIBLE pero a MUY largo plazo (siglos):</h4>
            <ul>
              <li>Terraformación completa</li>
              <li>Ciudades grandes autosostenibles</li>
              <li>Economía marciana independiente</li>
              <li>Miles de habitantes permanentes</li>
            </ul>

            <h4>❌ IMPOSIBLE con física conocida:</h4>
            <ul>
              <li>Viajes de días/semanas a Marte</li>
              <li>Comunicación instantánea</li>
              <li>Gravedad artificial sin rotación</li>
              <li>Protección mágica contra radiación</li>
            </ul>
          </div>

          <div className="card">
            <h3>🔮 Predicciones Realistas</h3>
            <p><strong>2030-2040:</strong> Primeras misiones tripuladas. Estancias cortas (30-90 días).</p>
            <p><strong>2040-2060:</strong> Bases permanentes con rotación de personal. 10-50 personas.</p>
            <p><strong>2060-2100:</strong> Colonias autosostenibles. Cientos de habitantes. Primeros nacimientos marcianos.</p>
            <p><strong>2100+:</strong> Posible independencia política. Miles de habitantes. Terraformación inicial.</p>
            <p><strong>La Ficción enseña:</strong> Aunque no sea totalmente precisa, la ciencia ficción inspira innovación y prepara psicológicamente a la humanidad para ser una especie multiplanetaria.</p>
          </div>
        </div>
      )}
    </div>
  )
}
