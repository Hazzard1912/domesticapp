import {
  FaArrowRight,
  FaClock,
  FaHome,
  FaQuestionCircle,
  FaRegHandshake,
} from "react-icons/fa";
import "../styles/HomePage.css";
import { ButtonToTop } from "../components/ButtonToTop";
import { Link } from "react-router-dom";

import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <main>
      {/* fixed */}
      <ButtonToTop />

      {/* Hero section */}
      <section className="hero_section">
        <div className="container">
          <div className="hero_container">
            <h1>Domesticapp</h1>
            <h2 className="hero_h2">
              Simplificando tu vida, un servicio a la vez
            </h2>
            <p className="hero_paragraph">
              Encuentra Profesionales para Servicios Domésticos con un Solo
              Toque
            </p>
            <div className="hero_button_container">
              <button className="button_primary">
                <Link to="/auth/login">Ingresa</Link>
              </button>
              <button className="button_secondary">
                <Link to="/auth/register-user">Registrate</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* end */}

      {/* Services section */}
      <section className="services_section">
        <div className="container">
          <div className="services_container">
            <h2 className="heading_2">Todo en un mismo lugar</h2>
            <div className="services_grid">
              <div className="service_desc">
                <FaRegHandshake className="icon" />
                <h3 className="heading_3">Confía en Nosotros</h3>
                <p className="service_paragraph">
                  En DomesticApp,{" "}
                  <strong>la confianza es nuestra prioridad</strong>. Todos
                  nuestros profesionales son cuidadosamente seleccionados y
                  verificados, para que puedas sentirte seguro al confiarles tu
                  hogar. Nos comprometemos a brindarte servicios de alta calidad
                  con total tranquilidad.
                </p>
              </div>
              <div className="service_desc">
                <FaHome className="icon" />
                <h3 className="heading_3">Cuida tu Espacio, Cuida tu Vida</h3>
                <p className="service_paragraph">
                  En DomesticApp,{" "}
                  <strong>entendemos la importancia de tu hogar.</strong>{" "}
                  Nuestros profesionales no solo realizan tareas domésticas,
                  sino que cuidan cada rincón de tu espacio con atención y
                  dedicación. Confía en nosotros para mantener tu hogar
                  impecable y acogedor.
                </p>
              </div>
              <div className="service_desc">
                <FaClock className="icon" />
                <h3 className="heading_3">
                  Libera Tiempo para lo que Realmente Importa
                </h3>
                <p className="service_paragraph">
                  ¿Tareas domésticas abrumadoras? En DomesticApp,{" "}
                  <strong>
                    nos encargamos de las labores que no puedes o no quieres
                    hacer.
                  </strong>{" "}
                  Ya sea por falta de tiempo o habilidades, nuestros
                  profesionales están aquí para aligerar tu carga. Deja que
                  nosotros nos ocupemos, para que puedas enfocarte en lo que
                  realmente importa en tu vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}

      {/* Testimonials section */}
      <section className="testimonial_section">
        <div className="container">
          <div className="testimonial_container">
            <h2 className="heading_2_testimonial">Nuestros usuarios opinan </h2>

            <div className="testimonial_grid">
              <div className="testimonial_desc">
                <p className="testimonial_paragraph">
                  "Descubrí DomesticApp cuando necesitaba ayuda con la limpieza
                  de mi hogar. La experiencia fue increíble. El profesional
                  asignado fue puntual, amable y dejó mi casa impecable. Gracias
                  a DomesticApp, ahora tengo más tiempo para disfrutar con mi
                  familia."
                </p>
                <h3 className="heading_3_testimonial">- Ana García</h3>
              </div>
              <div className="testimonial_desc">
                <p className="testimonial_paragraph">
                  "Como profesional registrado en DomesticApp, he tenido la
                  oportunidad de conectarme con clientes increíbles. La
                  plataforma es fácil de usar y me ha proporcionado
                  oportunidades constantes de trabajo. Estoy agradecido por ser
                  parte de esta comunidad."
                </p>
                <h3 className="heading_3_testimonial">- Juan Rodríguez</h3>
              </div>
              <div className="testimonial_desc">
                <p className="testimonial_paragraph">
                  "Contraté a través de DomesticApp un plomero para una urgencia
                  en casa. La rapidez con la que encontré ayuda fue
                  sorprendente. El profesional fue competente y solucionó el
                  problema eficientemente. Recomiendo DomesticApp para cualquier
                  servicio doméstico."
                </p>
                <h3 className="heading_3_testimonial">- María Fernández</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}

      {/* FAQ section */}
      <section className="faq_section">
        <div className="container">
          <div className="faq_container">
            <h2 className="heading_2_faq">
              Preguntas Frecuentes
              <FaQuestionCircle className="icon_faq" />
            </h2>
            <div className="question">
              <input type="checkbox" id="question1" />
              <label htmlFor="question1">
                ¿Cuáles son los beneficios de utilizar DomesticApp?
              </label>
              <div className="answer">
                <p>
                  DomesticApp ofrece numerosos beneficios, incluyendo la
                  facilidad de encontrar profesionales para servicios
                  domésticos, ahorro de tiempo, confianza en la selección de
                  expertos verificados, y la comodidad de gestionar todo desde
                  la aplicación.
                </p>
              </div>
            </div>

            <div className="question">
              <input type="checkbox" id="question2" />
              <label htmlFor="question2">
                ¿Cómo puedo registrarme como profesional en DomesticApp?
              </label>
              <div className="answer">
                <p>
                  Registrarte como profesional en DomesticApp es sencillo.
                  Visita nuestra página de registro, completa la información
                  requerida, verifica tu cuenta y comienza a recibir solicitudes
                  de clientes en tu área.
                </p>
              </div>
            </div>
            <div className="question">
              <input type="checkbox" id="question3" />
              <label htmlFor="question3">
                ¿Qué tipo de servicios domésticos puedo encontrar en
                DomesticApp?
              </label>
              <div className="answer">
                <p>
                  DomesticApp cubre una amplia gama de servicios domésticos,
                  desde limpieza y mantenimiento hasta reparaciones y mejoras en
                  el hogar. Puedes encontrar profesionales para casi cualquier
                  tarea que necesites realizar en tu hogar.
                </p>
              </div>
            </div>
            <div className="question">
              <input type="checkbox" id="question4" />
              <label htmlFor="question4">
                ¿Cuál es el proceso para solicitar un servicio a través de
                DomesticApp?
              </label>
              <div className="answer">
                <p>
                  Solicitar un servicio en DomesticApp es fácil. Inicia sesión
                  en la aplicación, selecciona el servicio que necesitas, elige
                  un profesional de confianza, y completa la transacción. Puedes
                  dar seguimiento al progreso y comunicarte con el profesional
                  directamente.
                </p>
              </div>
            </div>
            <div className="question">
              <input type="checkbox" id="question5" />
              <label htmlFor="question5">
                ¿Cómo se garantiza la seguridad y confidencialidad de la
                información en DomesticApp?
              </label>
              <div className="answer">
                <p>
                  La seguridad y confidencialidad son nuestras principales
                  prioridades. Utilizamos medidas de encriptación avanzadas para
                  proteger la información del usuario y nos aseguramos de que
                  todos los profesionales sean verificados antes de unirse a
                  nuestra plataforma.
                </p>
              </div>
            </div>
            <div className="faq_button_container">
              <button className="faq_button">
                Tienes otra inquietud?
                <FaArrowRight className="faq_button_icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* end */}

      {/* Footer section */}
      <Footer/>
    </main>
  );
};
