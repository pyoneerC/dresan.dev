import React from 'react'
import styles from './page.module.css'
import ScrollToTopButton from '~/components/ScrollToTopButton/ScrollToTopButton'
import Link from 'next/link'
import { useTranslations} from "next-intl"

export const metadata = {
  title: 'Max Comperatore - FAQ',
  description: 'Preguntas personales para reflexionar, y practicar para entrevistas de trabajo.',
}

const FAQ = () => {
  const t = useTranslations("FAQ")
  return (
    <>
      <main className={styles.wrapper}>
      <div className={styles.container}>
        <ScrollToTopButton />
        <h1 className={styles.title}>FAQ</h1>
        <p className={styles.subtitle}>
          {t("subtitle")}
        </p>
        <Link className={styles.goHomeLink} href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75" />
          </svg>
          {t("home")}
        </Link>
        <Link className={styles.goHomeLink} href="/blog">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
            <g fill="none" stroke="currentColor" strokeWidth="4">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M24 21v23c-3.291-4-13.371-4-18-4V18c9.874 0 16.114 2 18 3m0 0v23c3.291-4 13.371-4 18-4V18c-9.874 0-16.114 2-18 3" />
              <circle cx="24" cy="12" r="8" />
            </g>
          </svg>
          {t("blog")}
        </Link>
        <div className={styles.separator} />
        <section className={styles.section}>
          <h2 className={styles.title1}>{t("q0")}
          </h2>
          <p className={styles.paragraph}>
            {t("a01")}
            <br/><br/>
          </p>
          <p className={styles.paragraph}>
            {t("a02")}
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title1}>{t("q1")}</h2>
          <p className={styles.paragraph}>
            {t("a11")}
            <br /><br />
            {t("a12")}
          </p>
          <p className={styles.paragraph}>
            {t("a13")}
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title1}>
            {t("q2")}
          </h2>
          <p className={styles.paragraph}>
            {t("a21")}
          </p>
          <p className={styles.paragraph}>
            {t("a22")}
          </p>
        </section>

        <br />
        <section className={styles.section}>
          <h2 className={styles.title1}>
            {t("q3")}
          </h2>
          <p className={styles.paragraph}>
            {t("a31")}
          </p>
          <p className={styles.paragraph}>
            {t("a32")}
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title1}>
            {t("q4")}
          </h2>
          <p className={styles.paragraph}>
            {t("a41")}
          </p>
          <p className={styles.paragraph}>
            {t("a42")}
          </p>
          <p className={styles.paragraph}>
            {t("a43")}
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title1}>
            {t("q5")}
          </h2>
            {t("a51")}&nbsp;
          <span style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
      <a href="https://gist.github.com/pyoneerC/b06fc1390048ff9ef094e70211dc68f8" target="_blank" rel="noopener noreferrer"
         style={{ color: "inherit", textDecoration: "inherit" }}>
        {t("a52")}
      </a>
          </span>
        </section>
        <br /><br />
        <section className={styles.section}>
          <h2 className={styles.title1}>Mantenerse Actualizado</h2>
          <p className={styles.paragraph}>
            Para estar al tanto de las últimas <strong>tendencias y tecnologías</strong>, sigo canales influyentes
            como&nbsp;
            <span style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
      <a href="https://m.youtube.com/@midulive" target="_blank" rel="noopener noreferrer"
         style={{ color: "inherit", textDecoration: "inherit" }}>
        Midudev
      </a>
    </span>,&nbsp;
            <span style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
      <a href="https://m.youtube.com/@Fireship" target="_blank" rel="noopener noreferrer"
         style={{ color: "inherit", textDecoration: "inherit" }}>
        Fireship
      </a>
    </span>,&nbsp;
            <span style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
      <a href="https://m.youtube.com/@unrealengine" target="_blank" rel="noopener noreferrer"
         style={{ color: "inherit", textDecoration: "inherit" }}>
        Unreal Engine
      </a>
    </span>&nbsp;y&nbsp;
            <span style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
      <a href="https://m.youtube.com/@unity" target="_blank" rel="noopener noreferrer"
         style={{ color: "inherit", textDecoration: "inherit" }}>
        Unity
      </a>
    </span>.
          </p>
          <p className={styles.paragraph}>
            Asimismo, exploro <em>repositorios de tendencia en GitHub</em> y participo en discusiones sobre tecnología
            en&nbsp;
            <span style={{ color: "skyblue", textDecoration: "none", fontFamily: "inherit", fontSize: "inherit" }}>
    Discord
    </span>&nbsp;y&nbsp;
            <span style={{ color: "skyblue", textDecoration: "none", fontFamily: "inherit", fontSize: "inherit" }}>
    Reddit
    </span>.
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title1}>Pasatiempos</h2>
          <p className={styles.paragraph}>
            En mi tiempo libre, me encanta embarcarme en nuevos proyectos tecnológicos y colaborar en diversas iniciativas creativas.
            Disfruto mantenerme activo a través del running y el senderismo, además de sumergirme en la narrativa y
            mecánica de videojuegos independientes.
          </p>
          <p className={styles.paragraph}>
            En el ámbito creativo, compongo música utilizando FL Studio, combinando así técnica y creatividad de una manera única y gratificante.
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title1}>Preguntas Conductuales</h2>
          <ul className={styles.paragraph}>
            <li><strong>Lo más innovador que ha hecho y por qué lo considera innovador?</strong></li>
            <p>
              Definitivamente, la creación de la aplicación&nbsp;
              <span
                style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
                <a href="https://maxcomperatore.store" target="_blank" rel="noopener noreferrer"
                   style={{ color: "inherit", textDecoration: "inherit" }}>
                    Mercadix
                </a>
            </span>&nbsp;es uno de los proyectos más innovadores que he realizado.
              <br /><br />
              Esta solución aborda una problemática recurrente entre los usuarios de Mercado Libre en Argentina:
              la <strong>incertidumbre sobre el valor real de los productos</strong> en un contexto económico volátil.
              <br /><br />
              Actualmente, Mercadix ayuda a cientos de usuarios a tomar decisiones informadas sobre sus compras y ventas,
              ofreciendo una perspectiva estratégica del mercado.
            </p>
            <br />
            <li><strong>Un momento en el que no sabías qué hacer o cómo resolver un problema difícil. ¿Cómo lo
              resolviste?</strong></li>
            <p>
              Durante el desarrollo de este portafolio, me enfrenté al desafío de traducir manualmente todo el contenido
              al inglés, lo cual era engorroso y tedioso.
              <br /><br />
              Gracias a la orientación de &nbsp;
              <span
                style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
                <a href="https://github.com/santiagoarielv98" target="_blank" rel="noopener noreferrer"
                   style={{ color: "inherit", textDecoration: "inherit" }}>
                    Santiago Ariel
                </a>
            </span>, aprendí a implementar traducciones utilizando i18next y JSON, lo que me permitió llegar a nuevas audiencias de manera eficiente.
            </p>
            <br />
            <li><strong>Un momento en el que tuviste que aprender algo nuevo rápidamente?</strong></li>
            <p>
              Quise desarrollar una API para capturar en tiempo real los precios del dólar en Argentina. Al inicio, el proceso parecía complicado, pero con Python, FASTAPI y una dedicación intensa a estudiar la documentación pertinente, logré construirla con éxito.
            </p>
            <br />
            <p>
              Esta API, llamada&nbsp;
              <span
                style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
                <a href="https://github.com/pyoneerC/monedas-api" target="_blank" rel="noopener noreferrer"
                   style={{ color: "inherit", textDecoration: "inherit" }}>
                    ArgentoFX
                </a>
            </span>, logra en solo 400 líneas de Python lo que otros proyectos realizan en miles.
            </p>
            <br />
            <p>
              Actualmente, es consumida por mi otro proyecto,&nbsp;
              <span
                style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
                <a href="https://maxcomperatore.store" target="_blank" rel="noopener noreferrer"
                   style={{ color: "inherit", textDecoration: "inherit" }}>
                    Mercadix
                </a>
            </span>.
            </p>
            <br />
            <li><strong>Proyectos que te gustaría hacer en el futuro?</strong></li>
            <blockquote>
              <ul>
                <li>Una red neuronal compleja para hacer simulaciones en motores gráficos.</li>
                <li>Una APIs del precio del combustible y relacionadas a Argentina.</li>
                <li>Una página web en formato de librería virtual, donde los usuarios puedan compartir libros,
                  portfolios, y más.
                </li>
                <li>Un juego de autos a control remoto en Unreal Engine.</li>
                <li>Un motor de juegos propio, en DX12.</li>
                <li>Un bot de Discord versátil y complejo.</li>
                <li>Un clon de WhatsApp con RabbitMQ.</li>
                <li>Una aplicación publicada en Play Store.</li>
                <li>Contribuir a proyectos de código abierto.</li>
              </ul>
            </blockquote>
            <br />
            <li><strong>Una ocasión en la que apoyó o capacitó a otra persona de su equipo para mejorar su
              rendimiento</strong></li>
            <p>
              Durante una game jam, un compañero no sabía muy bien como hacer cierta funcionalidad con el scripting de
              Unreal Engine.
            </p>
            <br />
            <p>
              Le enseñé varias funcionalidades clave, recomendé recursos útiles y juntos revisamos su código. Al
              final, logramos terminar&nbsp;
              <span
                style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
                <a href="https://owtavlr.itch.io/anatidae" target="_blank" rel="noopener noreferrer"
                   style={{ color: "inherit", textDecoration: "inherit" }}>
                    el juego
                </a>
            </span>
              &nbsp;a tiempo y con éxito.
            </p>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.title1}>Mentores y Colaboradores</h2>
          <p className={styles.paragraph}>
            Quiero expresar mi profundo agradecimiento a&nbsp;
            <a href="https://twitter.com/colinschmale" target="_blank" rel="noopener noreferrer"
               style={{ color: "skyblue", textDecoration: "underline" }}>Colin Schmale</a>,&nbsp;
            <a href="https://github.com/FrancoYudica" target="_blank" rel="noopener noreferrer"
               style={{ color: "skyblue", textDecoration: "underline" }}>Franco Yudica</a>,&nbsp;y&nbsp;
            <a href="https://github.com/enzonotario" target="_blank" rel="noopener noreferrer"
               style={{ color: "skyblue", textDecoration: "underline" }}>Enzo Notario</a>, quienes han sido&nbsp;
            <strong>fundamentales</strong> en mi carrera por sus valiosos consejos y constante apoyo.
          </p>
          <p className={styles.paragraph}>
            También agradezco a mis compañeros de equipo en la Universidad y a los usuarios de varios servidores
            de&nbsp;
            <strong>Discord de programación en español</strong>, cuya disposición para ayudar y compartir sus
            conocimientos ha sido&nbsp;
            <em>crucial</em> para mi desarrollo profesional.
          </p>
          <p className={styles.paragraph}>
            Inspirado por estos ejemplos, aspiro a ofrecer el mismo nivel de apoyo y orientación a otros, perpetuando
            la&nbsp;
            <strong>cultura de colaboración y aprendizaje mutuo</strong>.
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title1}>Canciones Favoritas</h2>
          <p className={styles.paragraph}>
            Una selección que te hará bailar como un cyborg con exceso de cafeína.
          </p>
          <ul>
            <ul>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=Tt3F2x0RuZI" target="_blank" rel="noopener noreferrer">Runaway (U & I) - Galantis</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=xY66ucVK-RM" target="_blank" rel="noopener noreferrer">Good 4 Me - Vindata</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=zubYYZ0fTyQ" target="_blank" rel="noopener noreferrer">Cutting Shapes - Don</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=RhR_Z5wVvJM" target="_blank" rel="noopener noreferrer">Play - Tokyo Machine</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=XmIgg9De9hY" target="_blank" rel="noopener noreferrer">The Nights - Avicii</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=j43PGdl03WA" target="_blank" rel="noopener noreferrer">She Wants Me Dead - CAZZ</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=FgApngD5faY" target="_blank" rel="noopener noreferrer">Silhouette (Feed Me Remix)</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=qcE__zJ4L6E" target="_blank"
             rel="noopener noreferrer">Still - Glacier</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=A8pOVirjGF0" target="_blank"
             rel="noopener noreferrer">Overkill - RIOT</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=mype6RcMMmY" target="_blank"
             rel="noopener noreferrer">Jungle Fury - RIOT</a>
          </span>
              </li>
            </ul>
          </ul>
        </section>
        <br />
        <br />
        <div className={styles.dashedseparator} />
        <div className={styles.imageContainer}>
        <img src={"/assets/images/faq_pic_m_c.avif"} alt="Max Comperatore" className={styles.image} />
        </div>
        <p className={styles.paragraph} style={{ textAlign: "center" }}>
  <span className={styles.paragraph1} style={{ color: "lime" }}>
  ¡Muchas gracias por leer hasta el final!
  </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className={styles.icon}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
            <path d="M10 10c-.5 -1 -2.5 -1 -3 0" />
            <path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
            <path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
          </svg>
          <br /><br />
          Si estás interesado en colaborar en algún proyecto, contratarme o simplemente deseas
          saludar, <em> no dudes en contactarme a través de mis redes sociales o enviándome un mail</em>. Puedes
          encontrar los enlaces en el pie de página a continuación.
        </p>
      </div>
      </main>
    </>
  )
}

export default FAQ
